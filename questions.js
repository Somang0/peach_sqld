const QUESTION_BANK = [
  {
    id: 1,
    category: "GROUP BY",
    tag: "GROUP BY",
    question: "GROUP BY의 가장 기본적인 역할로 알맞은 것은?",
    choices: [
      "행을 무조건 정렬한다.",
      "같은 값을 기준으로 묶어 집계한다.",
      "두 테이블을 연결한다.",
      "중복 행을 자동 삭제한다."
    ],
    answer: 1,
    explanation: "GROUP BY는 지정한 컬럼의 같은 값끼리 행을 묶어 SUM, COUNT, AVG 같은 집계 함수를 적용할 때 사용합니다."
  },
  {
    id: 2,
    category: "GROUP BY",
    tag: "ROLLUP",
    question: "ROLLUP(A, B)가 생성하는 그룹 조합으로 알맞은 것은?",
    code: "GROUP BY ROLLUP(A, B)",
    choices: [
      "(A,B), (A), ()",
      "(A,B), (B), ()",
      "(A), (B), ()",
      "(A,B), (A), (B), ()"
    ],
    answer: 0,
    explanation: "ROLLUP은 오른쪽부터 하나씩 제거합니다. 따라서 (A,B) → (A) → () 순서입니다."
  },
  {
    id: 3,
    category: "GROUP BY",
    tag: "CUBE",
    question: "CUBE(A, B)가 생성하는 그룹 조합으로 알맞은 것은?",
    code: "GROUP BY CUBE(A, B)",
    choices: [
      "(A,B), (A), ()",
      "(A,B), (B), ()",
      "(A,B), (A), (B), ()",
      "(A), (B)"
    ],
    answer: 2,
    explanation: "CUBE는 가능한 모든 그룹 조합을 만듭니다. 2개 컬럼이면 2² = 4개 조합입니다."
  },
  {
    id: 4,
    category: "GROUP BY",
    tag: "GROUPING",
    question: "CUBE(A,B) 결과에서 GROUPING(A)=1, GROUPING(B)=0 인 행은 어떤 그룹인가?",
    code: "GROUP BY CUBE(A, B)",
    choices: ["(A,B)", "(A)", "(B)", "()"],
    answer: 2,
    explanation: "GROUPING(A)=1은 A가 집계로 빠졌다는 뜻이고, GROUPING(B)=0은 B가 살아있다는 뜻입니다. 따라서 (B)입니다."
  },
  {
    id: 5,
    category: "GROUP BY",
    tag: "GROUPING",
    question: "ROLLUP(A,B)에서 GROUPING(A)=1, GROUPING(B)=0인 행이 나올 수 있는가?",
    choices: [
      "가능하다. (B) 그룹이다.",
      "가능하다. (A) 그룹이다.",
      "불가능하다.",
      "전체 총계 행이다."
    ],
    answer: 2,
    explanation: "ROLLUP(A,B)는 (A,B), (A), ()만 만듭니다. (B)가 없으므로 1,0 조합은 나올 수 없습니다."
  },
  {
    id: 6,
    category: "GROUP BY",
    tag: "NULL 함정",
    question: "원본 데이터 자체의 컬럼 값이 NULL인 경우 GROUPING(컬럼)의 값은?",
    choices: ["항상 1", "0", "NULL", "2"],
    answer: 1,
    explanation: "GROUPING()은 NULL 검사 함수가 아닙니다. 해당 컬럼이 집계 과정에서 빠졌는지를 검사합니다. 원본 NULL이라면 컬럼 자체는 살아 있으므로 0입니다."
  },
  {
    id: 7,
    category: "GROUP BY",
    tag: "GROUPING SETS",
    question: "다음 GROUPING SETS가 실제로 만드는 그룹은?",
    code: "GROUP BY GROUPING SETS ((A,B), (C), ())",
    choices: [
      "(A,B), (C), ()",
      "(A,B), (A), (B), (C), ()",
      "(A), (B), (C)",
      "(A,B,C), ()"
    ],
    answer: 0,
    explanation: "GROUPING SETS는 적어준 그룹만 정확히 만듭니다."
  },
  {
    id: 8,
    category: "JOIN",
    tag: "INNER JOIN",
    question: "INNER JOIN의 설명으로 가장 알맞은 것은?",
    choices: [
      "왼쪽 테이블의 모든 행을 반드시 출력한다.",
      "양쪽 테이블에서 조인 조건이 일치하는 행만 출력한다.",
      "조인 조건이 없어도 같은 행만 찾는다.",
      "항상 카테시안 곱을 만든다."
    ],
    answer: 1,
    explanation: "INNER JOIN은 조인 조건이 양쪽에서 일치하는 행만 결과에 포함합니다."
  },
  {
    id: 9,
    category: "JOIN",
    tag: "LEFT JOIN",
    question: "LEFT JOIN 후 WHERE절에서 오른쪽 테이블 컬럼에 조건을 걸면 생길 수 있는 문제는?",
    choices: [
      "LEFT JOIN이 항상 FULL JOIN으로 바뀐다.",
      "오른쪽 테이블의 NULL 행이 제거되어 LEFT JOIN 효과가 약해질 수 있다.",
      "조인 자체가 실행되지 않는다.",
      "항상 문법 오류가 발생한다."
    ],
    answer: 1,
    explanation: "WHERE에서 오른쪽 테이블 컬럼을 제한하면 NULL로 채워진 행이 제거될 수 있어 결과가 INNER JOIN처럼 보일 수 있습니다."
  },
  {
    id: 10,
    category: "JOIN",
    tag: "SELF JOIN",
    question: "SELF JOIN은 무엇인가?",
    choices: [
      "서로 다른 DB를 조인하는 것",
      "테이블을 자기 자신과 조인하는 것",
      "서브쿼리를 조인하는 것",
      "조인 조건을 생략하는 것"
    ],
    answer: 1,
    explanation: "SELF JOIN은 동일한 테이블을 서로 다른 별칭으로 두고 자기 자신과 조인하는 방식입니다."
  },
  {
    id: 11,
    category: "JOIN",
    tag: "CROSS JOIN",
    question: "두 테이블의 모든 가능한 행 조합을 만드는 JOIN은?",
    choices: ["LEFT JOIN", "INNER JOIN", "CROSS JOIN", "SELF JOIN"],
    answer: 2,
    explanation: "CROSS JOIN은 카테시안 곱을 생성합니다."
  },
  {
    id: 12,
    category: "서브쿼리",
    tag: "단일행 서브쿼리",
    question: "단일행 서브쿼리가 반환해야 하는 행 수는?",
    choices: ["정확히 여러 행", "0개 또는 1개 행", "반드시 2개 행", "제한 없음"],
    answer: 1,
    explanation: "단일행 비교 연산자(=, >, < 등)와 함께 사용하는 서브쿼리는 하나의 행을 반환해야 하며, 결과가 없을 수도 있습니다."
  },
  {
    id: 13,
    category: "서브쿼리",
    tag: "다중행 서브쿼리",
    question: "다중행 서브쿼리와 함께 사용할 수 있는 연산자로 알맞은 것은?",
    choices: ["=", "LIKE만 가능", "IN", "IS NULL만 가능"],
    answer: 2,
    explanation: "IN, ANY, ALL, EXISTS 등은 다중행 서브쿼리에서 자주 사용합니다."
  },
  {
    id: 14,
    category: "서브쿼리",
    tag: "EXISTS",
    question: "EXISTS의 핵심 의미로 가장 알맞은 것은?",
    choices: [
      "서브쿼리의 합계를 계산한다.",
      "서브쿼리 결과 행이 존재하는지 확인한다.",
      "서브쿼리를 정렬한다.",
      "중복값을 제거한다."
    ],
    answer: 1,
    explanation: "EXISTS는 서브쿼리가 한 행이라도 반환하는지 여부를 판단합니다."
  },
  {
    id: 15,
    category: "SQL 기본",
    tag: "WHERE",
    question: "SQL 실행 논리 순서에서 일반적으로 WHERE보다 먼저 처리되는 절은?",
    choices: ["SELECT", "ORDER BY", "FROM", "HAVING"],
    answer: 2,
    explanation: "논리적으로는 FROM에서 대상을 만든 뒤 WHERE로 행을 필터링합니다."
  },
  {
    id: 16,
    category: "SQL 기본",
    tag: "HAVING",
    question: "HAVING절의 대표적인 용도는?",
    choices: [
      "그룹화 이전 개별 행 필터링",
      "그룹화된 결과에 조건 적용",
      "테이블 생성",
      "컬럼명 변경"
    ],
    answer: 1,
    explanation: "WHERE는 그룹화 전 행을 필터링하고, HAVING은 GROUP BY 이후 집계 결과를 필터링할 때 사용합니다."
  }
];

const CATEGORY_INFO = {
  "GROUP BY": { icon: "Σ", desc: "GROUP BY · ROLLUP · CUBE · GROUPING" },
  "JOIN": { icon: "⛓", desc: "INNER · OUTER · SELF · CROSS JOIN" },
  "서브쿼리": { icon: "↳", desc: "단일행 · 다중행 · EXISTS" },
  "SQL 기본": { icon: "⌘", desc: "WHERE · HAVING · 실행 순서" }
};
