let currentQuestions = [];
let currentIndex = 0;
let currentCategory = "all";
let selected = false;
let score = 0;
let sessionWrong = [];
let timerStartedAt = null;
let timerInterval = null;
let mockExamEndsAt = null;
let isMockExam = false;
let configuredRandomCount = 20;

const state = JSON.parse(localStorage.getItem("sqldState") || '{"solved":0,"correct":0,"wrongIds":[],"bookmarks":[]}');
state.solved ??= 0;
state.correct ??= 0;
state.wrongIds ??= [];
state.bookmarks ??= [];
state.wrongCounts ??= {};
state.categoryStats ??= {};

let studySessions = JSON.parse(localStorage.getItem("sqldStudySessions") || "[]");
if (!Array.isArray(studySessions)) studySessions = [];
let currentSessionStartedAt = null;
let currentSessionSaved = false;

function saveState() {
  localStorage.setItem("sqldState", JSON.stringify(state));
  refreshDashboard();
}

function showScreen(id) {
  if (id !== "quizScreen") stopTimer();
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}

function goHome() {
  showScreen("homeScreen");
  refreshDashboard();
  refreshHistorySummary();
  renderAnalytics();
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
  isMockExam = false;
  mockExamEndsAt = null;
  currentCategory = category;
  currentQuestions = category === "all"
    ? [...QUESTION_BANK]
    : QUESTION_BANK.filter(q => q.category === category);

  currentIndex = 0;
  score = 0;
  sessionWrong = [];
  selected = false;
  showScreen("quizScreen");
  startTimer();
  renderQuestion();
}


function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function cloneQuestionForQuiz(question, shuffleOptions = false) {
  const clone = {
    ...question,
    choices: [...question.choices]
  };

  if (!shuffleOptions) return clone;

  const indexed = clone.choices.map((label, index) => ({
    label,
    correct: index === clone.answer
  }));

  const shuffled = shuffleArray(indexed);
  clone.choices = shuffled.map(item => item.label);
  clone.answer = shuffled.findIndex(item => item.correct);
  return clone;
}

function startRandomExam(size = 20, category = "all", shuffleOptions = true) {
  isMockExam = false;
  mockExamEndsAt = null;

  const pool = category === "all"
    ? QUESTION_BANK
    : QUESTION_BANK.filter(q => q.category === category);

  const count = Math.min(Number(size) || 20, pool.length);
  currentCategory = category === "all"
    ? `랜덤 ${count}문제`
    : `${category} 랜덤 ${count}문제`;

  currentQuestions = shuffleArray(pool)
    .slice(0, count)
    .map(q => cloneQuestionForQuiz(q, shuffleOptions));

  currentIndex = 0;
  score = 0;
  sessionWrong = [];
  selected = false;
  showScreen("quizScreen");
  startTimer();
  renderQuestion();
}

function openRandomBuilder() {
  showScreen("randomScreen");
  updateRandomPreview();
}

function selectRandomCount(count) {
  configuredRandomCount = count;
  document.querySelectorAll(".count-chip").forEach(btn => {
    btn.classList.toggle("active", Number(btn.dataset.count) === count);
  });
  updateRandomPreview();
}

function updateRandomPreview() {
  const categoryEl = document.getElementById("randomCategory");
  if (!categoryEl) return;

  const category = categoryEl.value;
  const poolCount = category === "all"
    ? QUESTION_BANK.length
    : QUESTION_BANK.filter(q => q.category === category).length;

  const actual = Math.min(configuredRandomCount, poolCount);
  const label = category === "all" ? "전체 범위" : category;
  document.getElementById("randomPreview").textContent =
    `${label} · ${actual}문제${actual < configuredRandomCount ? ` (해당 과목 전체)` : ""}`;
}

function startConfiguredRandomQuiz() {
  const category = document.getElementById("randomCategory").value;
  const shuffleOptions = document.getElementById("shuffleChoices").checked;
  startRandomExam(configuredRandomCount, category, shuffleOptions);
}

function startWrongExam() {
  isMockExam = false;
  mockExamEndsAt = null;
  const pool = QUESTION_BANK.filter(q => state.wrongIds.includes(q.id));
  if (!pool.length) {
    alert("오답노트가 비어 있어요. 먼저 문제를 풀어보세요.");
    return;
  }
  currentCategory = "오답 다시풀기";
  currentQuestions = shuffleArray(pool);
  currentIndex = 0;
  score = 0;
  sessionWrong = [];
  selected = false;
  showScreen("quizScreen");
  startTimer();
  renderQuestion();
}

function startBookmarkExam() {
  isMockExam = false;
  mockExamEndsAt = null;
  const pool = QUESTION_BANK.filter(q => state.bookmarks.includes(q.id));
  if (!pool.length) {
    alert("북마크한 문제가 아직 없어요.");
    return;
  }
  currentCategory = "북마크 문제";
  currentQuestions = shuffleArray(pool);
  currentIndex = 0;
  score = 0;
  sessionWrong = [];
  selected = false;
  showScreen("quizScreen");
  startTimer();
  renderQuestion();
}


function startMockExam() {
  currentCategory = "실전 모의고사";
  currentQuestions = shuffleArray(QUESTION_BANK)
    .slice(0, Math.min(50, QUESTION_BANK.length))
    .map(q => cloneQuestionForQuiz(q, true));
  currentIndex = 0;
  score = 0;
  sessionWrong = [];
  selected = false;
  isMockExam = true;
  showScreen("quizScreen");
  startTimer();
  mockExamEndsAt = Date.now() + (90 * 60 * 1000);
  updateTimer();
  renderQuestion();
}

function startTimer() {
  stopTimer();
  timerStartedAt = Date.now();
  currentSessionStartedAt = timerStartedAt;
  currentSessionSaved = false;
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}

function updateTimer() {
  const el = document.getElementById("timerText");
  const box = document.getElementById("timerBox");
  if (!el || !box) return;

  if (isMockExam && mockExamEndsAt) {
    const remaining = Math.max(0, Math.floor((mockExamEndsAt - Date.now()) / 1000));
    const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
    const ss = String(remaining % 60).padStart(2, "0");
    el.textContent = `${mm}:${ss}`;

    box.classList.toggle("mock-warning", remaining <= 15 * 60 && remaining > 5 * 60);
    box.classList.toggle("mock-danger", remaining <= 5 * 60);

    if (remaining <= 0) {
      stopTimer();
      alert("90분이 종료되어 자동 제출합니다.");
      showResult();
    }
    return;
  }

  if (!timerStartedAt) return;
  const elapsed = Math.floor((Date.now() - timerStartedAt) / 1000);
  const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const ss = String(elapsed % 60).padStart(2, "0");
  el.textContent = `${mm}:${ss}`;
  box.classList.remove("mock-warning", "mock-danger");
}
function resetStudyData() {
  const ok = confirm("학습 기록, 오답노트, 북마크를 모두 초기화할까요?");
  if (!ok) return;
  state.solved = 0;
  state.correct = 0;
  state.wrongIds = [];
  state.bookmarks = [];
  state.wrongCounts = {};
  state.categoryStats = {};
  studySessions = [];
  localStorage.removeItem("sqldStudySessions");
  saveState();
  refreshHistorySummary();
  alert("학습 기록을 모두 초기화했어요.");
}


function escapeRichHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeSvg(svg) {
  return String(svg)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "")
    .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/\s(?:href|xlink:href)\s*=\s*("https?:[^"]*"|'https?:[^']*')/gi, "");
}

function renderRichText(raw) {
  let text = String(raw || "");
  const blocks = [];

  text = text.replace(/<svg[\s\S]*?<\/svg>/gi, svg => {
    const token = `@@BLOCK${blocks.length}@@`;
    blocks.push(sanitizeSvg(svg));
    return token;
  });

  text = text.replace(/```(?:sql)?\s*\n?([\s\S]*?)```/gi, (_, code) => {
    const token = `@@BLOCK${blocks.length}@@`;
    blocks.push(`<pre><code>${escapeRichHtml(code.trim())}</code></pre>`);
    return token;
  });

  text = escapeRichHtml(text);

  text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/`([^`\n]+)`/g, '<span class="inline-code">$1</span>');
  text = text.replace(/\n/g, "<br>");

  blocks.forEach((block, index) => {
    text = text.replace(`@@BLOCK${index}@@`, block);
  });

  return text;
}

function renderQuestion() {
  const q = currentQuestions[currentIndex];
  selected = false;

  document.getElementById("quizCategory").textContent = currentCategory === "all" ? "전체 문제" : currentCategory;
  document.getElementById("questionNo").textContent = `문제 ${currentIndex + 1}`;
  document.getElementById("questionTag").textContent = q.tag;
  document.getElementById("questionText").innerHTML = renderRichText(q.question);

  const wrongBadge = document.getElementById("wrongCountBadge");
  const wrongCount = Number(state.wrongCounts[q.id] || 0);
  if (wrongCount > 0) {
    wrongBadge.textContent = `오답 ${wrongCount}회`;
    wrongBadge.classList.remove("hidden");
  } else {
    wrongBadge.classList.add("hidden");
  }

  document.getElementById("questionCode").classList.add("hidden");

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

  state.categoryStats[q.category] ??= { solved: 0, correct: 0 };
  state.categoryStats[q.category].solved += 1;

  if (isCorrect) {
    score += 1;
    state.correct += 1;
    state.categoryStats[q.category].correct += 1;
    if (currentCategory === "오답 다시풀기") {
      state.wrongIds = state.wrongIds.filter(id => id !== q.id);
    }
  } else {
    sessionWrong.push(q.id);
    state.wrongCounts[q.id] = Number(state.wrongCounts[q.id] || 0) + 1;
    if (!state.wrongIds.includes(q.id)) state.wrongIds.push(q.id);
  }

  saveState();

  const panel = document.getElementById("answerPanel");
  const status = document.getElementById("answerStatus");
  status.textContent = isCorrect ? "정답입니다 ✓" : `오답입니다 · 정답은 ${q.answer + 1}번`;
  status.style.color = isCorrect ? "var(--good)" : "var(--bad)";
  document.getElementById("answerExplanation").innerHTML = renderRichText(q.explanation);
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
  const durationSec = currentSessionStartedAt
    ? Math.max(0, Math.floor((Date.now() - currentSessionStartedAt) / 1000))
    : 0;

  document.getElementById("scorePercent").textContent = `${pct}%`;
  document.getElementById("correctCount").textContent = score;
  document.getElementById("wrongCount").textContent = wrong;
  document.getElementById("resultTotal").textContent = total;
  document.getElementById("resultDuration").textContent = formatDuration(durationSec);

  saveCompletedSession({
    mode: currentCategory === "all" ? "전체 문제" : currentCategory,
    total,
    correct: score,
    wrong,
    accuracy: pct,
    durationSec,
    questionIds: currentQuestions.map(q => q.id),
    wrongIds: [...sessionWrong]
  });

  isMockExam = false;
  mockExamEndsAt = null;
  showScreen("resultScreen");
}

function restartCurrentExam() {
  if (currentCategory === "실전 모의고사") {
    startMockExam();
  } else if (currentCategory.startsWith("랜덤 ")) {
    const size = parseInt(currentCategory.match(/\d+/)?.[0] || "20", 10);
    startRandomExam(size);
  } else if (currentCategory === "오답 다시풀기") {
    startWrongExam();
  } else if (currentCategory === "북마크 문제") {
    startBookmarkExam();
  } else {
    startExam(currentCategory);
  }
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
        <span class="question-tag">${escapeHtml(q.tag)}</span>
        <div class="wrong-question-rich">${renderRichText(q.question)}</div>
        <div class="answer-line">정답: ${q.answer + 1}. ${escapeHtml(q.choices[q.answer])}</div>
        <div class="wrong-explanation">${renderRichText(q.explanation)}</div>
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
  document.getElementById("wrongNoteCount").textContent = state.wrongIds.length;
  document.getElementById("bookmarkCount").textContent = state.bookmarks.length;
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}


function saveSessions() {
  studySessions = studySessions.slice(0, 100);
  localStorage.setItem("sqldStudySessions", JSON.stringify(studySessions));
  refreshHistorySummary();
}

function saveCompletedSession(data) {
  if (currentSessionSaved) return;
  currentSessionSaved = true;

  const session = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2,8)}`,
    startedAt: currentSessionStartedAt || Date.now(),
    finishedAt: Date.now(),
    ...data
  };

  studySessions.unshift(session);
  saveSessions();
}

function formatDuration(seconds) {
  const sec = Math.max(0, Number(seconds) || 0);
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h > 0) return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}

function formatStudyMinutes(seconds) {
  const sec = Math.max(0, Number(seconds) || 0);
  if (sec < 60) return `${sec}초`;
  const minutes = Math.round(sec / 60);
  if (minutes < 60) return `${minutes}분`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h}시간 ${m}분` : `${h}시간`;
}

function formatSessionDate(timestamp) {
  const d = new Date(timestamp);
  return new Intl.DateTimeFormat("ko-KR", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(d);
}

function getSessionStats() {
  const count = studySessions.length;
  const totalSec = studySessions.reduce((sum, s) => sum + (s.durationSec || 0), 0);
  const avgAccuracy = count
    ? Math.round(studySessions.reduce((sum, s) => sum + (s.accuracy || 0), 0) / count)
    : 0;

  const modeCount = {};
  studySessions.forEach(s => {
    const mode = s.mode || "기타";
    modeCount[mode] = (modeCount[mode] || 0) + 1;
  });

  const topCategory = Object.entries(modeCount).sort((a,b) => b[1] - a[1])[0]?.[0] || "-";
  return { count, totalSec, avgAccuracy, topCategory };
}

function refreshHistorySummary() {
  const stats = getSessionStats();

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("sessionCountHome", stats.count);
  setText("studyTimeHome", formatStudyMinutes(stats.totalSec));
  setText("sessionAccuracyHome", `${stats.avgAccuracy}%`);
  setText("lastStudyHome", studySessions[0] ? formatSessionDate(studySessions[0].finishedAt) : "-");

  const mini = document.getElementById("recentSessionMini");
  if (mini) {
    const last = studySessions[0];
    mini.innerHTML = last
      ? `<div class="mini-session">
           <div>
             <strong>${escapeHtml(last.mode)}</strong>
             <span>${formatSessionDate(last.finishedAt)} · ${last.total}문제 · ${formatDuration(last.durationSec)}</span>
           </div>
           <div class="mini-score">${last.accuracy}%</div>
         </div>`
      : `<div class="empty-state">아직 완료한 학습 세션이 없습니다.</div>`;
  }
}

function openHistory() {
  renderHistory();
  showScreen("historyScreen");
}

function renderHistory() {
  const stats = getSessionStats();
  document.getElementById("historySessionCount").textContent = stats.count;
  document.getElementById("historyStudyTime").textContent = formatStudyMinutes(stats.totalSec);
  document.getElementById("historyAccuracy").textContent = `${stats.avgAccuracy}%`;
  document.getElementById("historyTopCategory").textContent = stats.topCategory;

  const list = document.getElementById("historyList");
  list.innerHTML = "";

  if (!studySessions.length) {
    list.innerHTML = `<div class="empty-state">완료한 세션이 아직 없습니다.<br>문제풀이를 끝내면 여기에 자동 기록됩니다.</div>`;
    return;
  }

  studySessions.forEach(session => {
    const row = document.createElement("div");
    row.className = "history-row";
    row.innerHTML = `
      <div class="history-main">
        <strong>${escapeHtml(session.mode || "학습")}</strong>
        <small>${formatSessionDate(session.finishedAt)}</small>
      </div>
      <div class="history-cell"><span>점수</span><strong>${session.accuracy}%</strong></div>
      <div class="history-cell"><span>정답</span><strong>${session.correct}/${session.total}</strong></div>
      <div class="history-cell"><span>오답</span><strong>${session.wrong}</strong></div>
      <div class="history-cell"><span>시간</span><strong>${formatDuration(session.durationSec)}</strong></div>
      <button class="history-delete" title="이 기록 삭제" onclick="deleteSession('${session.id}')">×</button>
    `;
    list.appendChild(row);
  });
}

function deleteSession(id) {
  studySessions = studySessions.filter(s => s.id !== id);
  saveSessions();
  renderHistory();
}

function clearStudyHistory() {
  const ok = confirm("세션별 공부기록만 모두 삭제할까요? 오답노트와 북마크는 유지됩니다.");
  if (!ok) return;
  studySessions = [];
  saveSessions();
  renderHistory();
}

function exportStudyHistory() {
  if (!studySessions.length) {
    alert("내보낼 공부기록이 없습니다.");
    return;
  }

  const data = JSON.stringify({
    exportedAt: new Date().toISOString(),
    project: "SQLD Study CBT",
    sessions: studySessions
  }, null, 2);

  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `sqld-study-history-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}


function renderAnalytics() {
  renderCategoryAccuracyChart();
  renderStudyTimeChart();
}

function renderCategoryAccuracyChart() {
  const el = document.getElementById("categoryAccuracyChart");
  if (!el) return;

  const categories = Object.keys(CATEGORY_INFO);
  el.innerHTML = "";

  categories.forEach(cat => {
    const stat = state.categoryStats[cat] || { solved: 0, correct: 0 };
    const pct = stat.solved ? Math.round((stat.correct / stat.solved) * 100) : 0;
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <div class="bar-label" title="${escapeHtml(cat)}">${escapeHtml(cat)}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
      <div class="bar-value">${pct}%</div>
    `;
    el.appendChild(row);
  });
}

function renderStudyTimeChart() {
  const el = document.getElementById("studyTimeChart");
  if (!el) return;

  const days = [];
  const formatter = new Intl.DateTimeFormat("ko-KR", { month: "2-digit", day: "2-digit" });

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setHours(0,0,0,0);
    d.setDate(d.getDate() - i);
    days.push({
      start: d.getTime(),
      end: d.getTime() + 24*60*60*1000,
      label: formatter.format(d),
      sec: 0
    });
  }

  studySessions.forEach(s => {
    const t = Number(s.finishedAt || 0);
    const day = days.find(d => t >= d.start && t < d.end);
    if (day) day.sec += Number(s.durationSec || 0);
  });

  const maxSec = Math.max(...days.map(d => d.sec), 1);
  el.innerHTML = "";

  days.forEach(d => {
    const width = Math.round((d.sec / maxSec) * 100);
    const mins = Math.round(d.sec / 60);
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <div class="bar-label">${d.label}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
      <div class="bar-value">${mins}분</div>
    `;
    el.appendChild(row);
  });
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
refreshHistorySummary();
renderAnalytics();

const randomCategorySelect = document.getElementById("randomCategory");
if (randomCategorySelect) {
  randomCategorySelect.addEventListener("change", updateRandomPreview);
}
