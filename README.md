# SQLD Study CBT

GitHub Pages에 바로 올려 사용할 수 있는 개인 SQLD 학습용 CBT 사이트입니다.

## 파일
- `index.html` : 메인 화면
- `style.css` : 디자인
- `questions.js` : 문제 데이터
- `app.js` : 문제풀이 기능

## GitHub Pages 배포
1. 네 GitHub 저장소에 이 파일 4개를 업로드합니다.
2. Commit 후 Push 합니다.
3. GitHub 저장소의 `Settings → Pages`로 이동합니다.
4. Source를 `Deploy from a branch`로 선택합니다.
5. Branch는 `main`, 폴더는 `/(root)`로 설정하고 Save 합니다.

## 문제 추가
`questions.js`의 `QUESTION_BANK` 배열에 같은 형식으로 문제를 추가하면 됩니다.

예시:

```js
{
  id: 100,
  category: "JOIN",
  tag: "LEFT JOIN",
  question: "문제 내용",
  choices: ["보기1", "보기2", "보기3", "보기4"],
  answer: 1,
  explanation: "해설"
}
```

`answer`는 0부터 시작합니다.
- 0 = 1번
- 1 = 2번
- 2 = 3번
- 3 = 4번

## 포함 기능
- 과목별 문제풀이
- 전체 문제풀이
- 정답/오답 즉시 표시
- 해설
- 진행률
- 결과 점수
- 오답노트
- 북마크
- 다크모드
- 브라우저 저장(localStorage)
- 모바일 반응형
