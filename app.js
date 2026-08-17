let currentQuestions = [];
let currentIndex = 0;
let currentCategory = "all";
let selected = false;
let score = 0;
let sessionWrong = [];

const state = JSON.parse(localStorage.getItem("sqldState") || '{"solved":0,"correct":0,"wrongIds":[],"bookmarks":[]}');

function saveState() {
  localStorage.setItem("sqldState", JSON.stringify(state));
  refreshDashboard();
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}

function goHome() {
  showScreen("homeScreen");
  refreshDashboard();
}

function renderCategories() {
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = "";
  Object.entries(CATEGORY_INFO).forEach(([name, info]) => {
    const count = QUESTION_BANK.filter(q => q.category === name).length;
    const card = document.createElement("article");
    card.className = "category-card";
    card.onclick = () => startExam(name);
    card.innerHTML = `
      <div class="category-icon">${info.icon}</div>
      <h3>${name}</h3>
      <p>${info.desc}</p>
      <small>${count}문제 풀기 →</small>
    `;
    grid.appendChild(card);
  });
}

function startExam(category) {
  currentCategory = category;
  currentQuestions = category === "all"
    ? [...QUESTION_BANK]
    : QUESTION_BANK.filter(q => q.category === category);

  currentIndex = 0;
  score = 0;
  sessionWrong = [];
  selected = false;
  showScreen("quizScreen");
  renderQuestion();
}

function renderQuestion() {
  const q = currentQuestions[currentIndex];
  selected = false;

  document.getElementById("quizCategory").textContent = currentCategory === "all" ? "전체 문제" : currentCategory;
  document.getElementById("questionNo").textContent = `문제 ${currentIndex + 1}`;
  document.getElementById("questionTag").textContent = q.tag;
  document.getElementById("questionText").textContent = q.question;

  const codeBox = document.getElementById("questionCode");
  if (q.code) {
    codeBox.textContent = q.code;
    codeBox.classList.remove("hidden");
  } else {
    codeBox.classList.add("hidden");
  }

  const choices = document.getElementById("choices");
  choices.innerHTML = "";

  q.choices.forEach((text, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = `${idx + 1}. ${text}`;
    btn.onclick = () => answerQuestion(idx);
    choices.appendChild(btn);
  });

  document.getElementById("answerPanel").classList.add("hidden");
  document.getElementById("nextBtn").classList.add("hidden");

  const pct = ((currentIndex + 1) / currentQuestions.length) * 100;
  document.getElementById("progressFill").style.width = `${pct}%`;
  document.getElementById("progressText").textContent = `${currentIndex + 1} / ${currentQuestions.length}`;

  updateBookmarkButton();
}

function answerQuestion(index) {
  if (selected) return;
  selected = true;

  const q = currentQuestions[currentIndex];
  const buttons = [...document.querySelectorAll(".choice")];
  buttons.forEach((btn, idx) => {
    btn.classList.add("disabled");
    if (idx === q.answer) btn.classList.add("correct");
    if (idx === index && idx !== q.answer) btn.classList.add("wrong");
  });

  const isCorrect = index === q.answer;
  state.solved += 1;

  if (isCorrect) {
    score += 1;
    state.correct += 1;
  } else {
    sessionWrong.push(q.id);
    if (!state.wrongIds.includes(q.id)) state.wrongIds.push(q.id);
  }

  saveState();

  const panel = document.getElementById("answerPanel");
  const status = document.getElementById("answerStatus");
  status.textContent = isCorrect ? "정답입니다 ✓" : `오답입니다 · 정답은 ${q.answer + 1}번`;
  status.style.color = isCorrect ? "var(--good)" : "var(--bad)";
  document.getElementById("answerExplanation").textContent = q.explanation;
  panel.classList.remove("hidden");

  const next = document.getElementById("nextBtn");
  next.textContent = currentIndex === currentQuestions.length - 1 ? "결과 보기" : "다음 문제";
  next.classList.remove("hidden");
}

function nextQuestion() {
  if (currentIndex >= currentQuestions.length - 1) {
    showResult();
    return;
  }
  currentIndex++;
  renderQuestion();
}

function showResult() {
  const total = currentQuestions.length;
  const wrong = total - score;
  const pct = Math.round((score / total) * 100);

  document.getElementById("scorePercent").textContent = `${pct}%`;
  document.getElementById("correctCount").textContent = score;
  document.getElementById("wrongCount").textContent = wrong;
  document.getElementById("resultTotal").textContent = total;

  showScreen("resultScreen");
}

function restartCurrentExam() {
  startExam(currentCategory);
}

function openWrongNote() {
  const list = document.getElementById("wrongList");
  list.innerHTML = "";

  const wrongQuestions = QUESTION_BANK.filter(q => state.wrongIds.includes(q.id));

  if (!wrongQuestions.length) {
    list.innerHTML = `<div class="empty-state">아직 저장된 오답이 없습니다.<br>문제를 풀면 틀린 문제가 여기에 자동 저장됩니다.</div>`;
  } else {
    wrongQuestions.forEach(q => {
      const item = document.createElement("article");
      item.className = "wrong-item";
      item.innerHTML = `
        <span class="question-tag">${q.tag}</span>
        <h3>${q.question}</h3>
        ${q.code ? `<pre class="code-box">${escapeHtml(q.code)}</pre>` : ""}
        <div class="answer-line">정답: ${q.answer + 1}. ${q.choices[q.answer]}</div>
        <p>${q.explanation}</p>
        <button class="secondary-btn" onclick="removeWrong(${q.id})">오답노트에서 제거</button>
      `;
      list.appendChild(item);
    });
  }

  showScreen("wrongScreen");
}

function removeWrong(id) {
  state.wrongIds = state.wrongIds.filter(x => x !== id);
  saveState();
  openWrongNote();
}

function toggleBookmark() {
  const q = currentQuestions[currentIndex];
  const exists = state.bookmarks.includes(q.id);
  if (exists) {
    state.bookmarks = state.bookmarks.filter(id => id !== q.id);
  } else {
    state.bookmarks.push(q.id);
  }
  saveState();
  updateBookmarkButton();
}

function updateBookmarkButton() {
  if (!currentQuestions.length) return;
  const q = currentQuestions[currentIndex];
  const btn = document.getElementById("bookmarkBtn");
  const exists = state.bookmarks.includes(q.id);
  btn.textContent = exists ? "★ 북마크됨" : "☆ 북마크";
}

function refreshDashboard() {
  document.getElementById("totalQuestionCount").textContent = QUESTION_BANK.length;
  document.getElementById("solvedCount").textContent = state.solved;
  const accuracy = state.solved ? Math.round((state.correct / state.solved) * 100) : 0;
  document.getElementById("accuracyText").textContent = `${accuracy}%`;
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}

const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("sqldTheme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  themeBtn.textContent = dark ? "☀️" : "🌙";
  localStorage.setItem("sqldTheme", dark ? "dark" : "light");
});

renderCategories();
refreshDashboard();
