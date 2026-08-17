# SQLD Study CBT

> **SQLD 공부를 “읽는 공부”에서 “푸는 공부”로 바꾸는 개인용 CBT 프로젝트.**

SQLD 시험 범위를 문제 중심으로 반복 학습할 수 있도록 만든 웹 기반 연습 사이트입니다.  
별도 서버나 데이터베이스 없이 **GitHub Pages에 바로 배포**할 수 있고, 학습 기록은 브라우저 `localStorage`에 저장됩니다.

---

## ✨ What is this?

단순히 문제만 나열하는 페이지가 아니라,

**문제 선택 → 즉시 채점 → 해설 확인 → 오답 저장 → 오답 재도전**

이라는 학습 흐름을 최대한 가볍게 반복할 수 있도록 만든 프로젝트입니다.

현재 문제는 SQLD의 주요 범위를 기준으로 직접 구성되어 있으며, 특정 사이트의 문제를 그대로 복제하지 않습니다.

---

## 🚀 Features

- 과목별 문제풀이
- 전체 문제풀이
- 랜덤 10문제 / 20문제
- 오답만 다시 풀기
- 북마크 문제만 다시 풀기
- 정답 / 오답 즉시 표시
- 문제별 해설
- 시험 진행 시간 타이머
- 진행률 표시
- 최종 정답률 계산
- 오답노트 자동 저장
- 오답 문제 재도전 시 정답이면 자동 제거
- 북마크
- 다크모드
- 모바일 반응형 UI
- 학습 기록 초기화
- `localStorage` 기반 학습 상태 유지
- GitHub Pages 무료 배포 가능

---

## 🧠 Current Question Categories

| 영역 | 주요 내용 |
|---|---|
| 데이터 모델링의 이해 | 엔터티, 속성, 관계, 식별자, ERD |
| 데이터 모델과 SQL | 정규화, 반정규화, 관계 해소, 성능 모델링 |
| SQL 기본 | NULL, 함수, WHERE, HAVING, GROUP BY |
| SQL 활용 | JOIN, 서브쿼리, 윈도우 함수, 계층형 질의 |
| 관리 구문 | DDL, DCL, TCL, 제약조건, 인덱스 |

현재 기본 문제은행은 **50문제**로 구성되어 있습니다.

---

## 🖥️ Tech Stack

```text
HTML
CSS
Vanilla JavaScript
LocalStorage
GitHub Pages
```

프레임워크 없이 만들었기 때문에 구조가 단순하고, SQLD 공부하면서 직접 뜯어고치기 좋습니다.

---

## 📁 Project Structure

```text
sqld-study-site/
├── index.html
├── style.css
├── app.js
├── questions.js
└── README.md
```

`questions.js`만 수정하면 문제은행을 계속 늘릴 수 있습니다.

---

## 📝 Add Your Own Question

`questions.js`의 `QUESTION_BANK` 배열에 아래 형식으로 추가합니다.

```js
{
  id: 101,
  category: "SQL 활용",
  tag: "JOIN",
  question: "LEFT JOIN에 대한 설명으로 알맞은 것은?",
  choices: [
    "보기 1",
    "보기 2",
    "보기 3",
    "보기 4"
  ],
  answer: 1,
  explanation: "정답에 대한 해설"
}
```

`answer` 값은 **0부터 시작**합니다.

```text
0 → 1번
1 → 2번
2 → 3번
3 → 4번
```

---

## 🌍 Deploy with GitHub Pages

GitHub 저장소에 프로젝트 파일을 올린 뒤:

```text
Settings
→ Pages
→ Build and deployment
→ Deploy from a branch
→ main
→ /(root)
→ Save
```

배포가 완료되면 다음과 같은 주소가 생성됩니다.

```text
https://YOUR-ID.github.io/YOUR-REPOSITORY/
```

이후에는 `main` 브랜치에 Push할 때마다 사이트가 다시 배포됩니다.

---

## 🎯 Study Flow

```text
오늘 공부할 영역 선택
        ↓
문제풀이
        ↓
정답 / 오답 즉시 확인
        ↓
해설 읽기
        ↓
틀린 문제 자동 저장
        ↓
오답만 다시풀기
        ↓
정답이면 오답노트에서 제거
```

시험 직전에는 **랜덤 20문제 → 오답 다시풀기** 흐름으로 반복하는 것을 목표로 설계했습니다.

---

## 🔥 Roadmap

앞으로 붙이기 좋은 기능들:

- [ ] SQLD 모의고사 50문제 모드
- [ ] 90분 제한시간 모드
- [ ] 문제 랜덤 보기 순서
- [ ] 과목별 정답률 분석
- [ ] 날짜별 학습 기록
- [ ] 틀린 횟수 통계
- [ ] 난이도 필터
- [ ] 문제 검색
- [ ] 해설 접기 / 펼치기
- [ ] 모바일 PWA 설치
- [ ] 문제 JSON Import / Export
- [ ] 관리자용 문제 등록 화면

---

## ⚠️ Note

이 프로젝트는 **개인 SQLD 학습용**으로 제작되었습니다.

문제와 해설은 학습 목적에 맞게 별도로 작성·정리하며, 다른 문제은행 서비스의 콘텐츠를 무단 복제하거나 재배포하는 용도로 사용하지 않습니다.

---

<div align="center">

### SQLD Study CBT

**Read less. Solve more.**

SQL 한 문제씩, 합격에 가까워지기.

</div>
