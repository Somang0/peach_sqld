const QUESTION_BANK = [
  {
    "id": 1,
    "category": "데이터 모델링의 이해",
    "tag": "모델링",
    "question": "데이터 모델링의 가장 적절한 설명은?",
    "choices": [
      "현실 세계의 업무를 데이터 관점에서 추상화하여 구조화하는 과정",
      "테이블의 모든 데이터를 삭제하는 과정",
      "SQL 실행 속도만 측정하는 과정",
      "운영체제 파일을 압축하는 과정"
    ],
    "answer": 0,
    "explanation": "데이터 모델링은 현실 세계의 업무 규칙과 데이터를 추상화·단순화하여 데이터 구조로 표현하는 과정입니다."
  },
  {
    "id": 2,
    "category": "데이터 모델링의 이해",
    "tag": "3단계 스키마",
    "question": "조직 전체 관점에서 통합된 데이터 구조를 표현하는 스키마는?",
    "choices": [
      "외부 스키마",
      "개념 스키마",
      "내부 스키마",
      "뷰 스키마"
    ],
    "answer": 1,
    "explanation": "개념 스키마는 조직 전체의 통합된 데이터 구조와 관계를 표현합니다."
  },
  {
    "id": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "엔터티가 성립하기 위한 조건으로 가장 부적절한 것은?",
    "choices": [
      "업무에서 필요로 한다",
      "두 개 이상의 인스턴스를 가질 수 있다",
      "식별자가 존재한다",
      "반드시 물리적인 사물이어야 한다"
    ],
    "answer": 3,
    "explanation": "엔터티는 사람·장소 같은 유형 개체뿐 아니라 주문, 계약 같은 개념적 대상도 될 수 있습니다."
  },
  {
    "id": 4,
    "category": "데이터 모델링의 이해",
    "tag": "속성",
    "question": "다른 속성의 값을 이용해 계산되어 얻어지는 속성은?",
    "choices": [
      "기본 속성",
      "설계 속성",
      "파생 속성",
      "식별 속성"
    ],
    "answer": 2,
    "explanation": "파생 속성은 다른 속성의 값으로부터 계산·변환되어 만들어지는 속성입니다."
  },
  {
    "id": 5,
    "category": "데이터 모델링의 이해",
    "tag": "관계",
    "question": "두 엔터티 사이에서 한쪽의 한 인스턴스가 다른 쪽의 여러 인스턴스와 연결되는 관계는?",
    "choices": [
      "1:1",
      "1:M",
      "M:N",
      "0:0"
    ],
    "answer": 1,
    "explanation": "한 개의 부모 인스턴스와 여러 자식 인스턴스가 연결되면 1:M 관계입니다."
  },
  {
    "id": 6,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "주식별자의 특징으로 가장 알맞지 않은 것은?",
    "choices": [
      "유일성",
      "최소성",
      "불변성",
      "NULL 허용"
    ],
    "answer": 3,
    "explanation": "주식별자는 각 인스턴스를 유일하게 식별해야 하므로 NULL을 허용하지 않습니다."
  },
  {
    "id": 7,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "업무적으로 자연스럽게 존재하는 식별자를 의미하는 것은?",
    "choices": [
      "본질식별자",
      "인조식별자",
      "대체식별자만",
      "외래식별자만"
    ],
    "answer": 0,
    "explanation": "본질식별자는 업무에서 자연스럽게 발생하는 의미 있는 식별자입니다."
  },
  {
    "id": 8,
    "category": "데이터 모델링의 이해",
    "tag": "슈퍼/서브타입",
    "question": "배타적(Exclusive) 서브타입 관계의 의미로 맞는 것은?",
    "choices": [
      "한 슈퍼타입 인스턴스가 여러 서브타입에 동시에 속할 수 있다",
      "한 슈퍼타입 인스턴스가 최대 하나의 서브타입에만 속한다",
      "서브타입이 존재할 수 없다",
      "슈퍼타입은 항상 두 개여야 한다"
    ],
    "answer": 1,
    "explanation": "배타적 관계에서는 하나의 슈퍼타입 인스턴스가 둘 이상의 서브타입에 동시에 속하지 않습니다."
  },
  {
    "id": 9,
    "category": "데이터 모델링의 이해",
    "tag": "ERD",
    "question": "ERD에서 관계를 표현할 때 가장 중요하게 확인해야 하는 요소는?",
    "choices": [
      "관계명과 차수/선택성",
      "폰트 크기",
      "테이블 생성 시각",
      "DB 서버 IP"
    ],
    "answer": 0,
    "explanation": "관계는 관계명, 카디널리티(차수), 선택성 등을 통해 업무 규칙을 표현합니다."
  },
  {
    "id": 10,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티 분류",
    "question": "업무가 진행되면서 발생하는 거래나 이력 중심의 엔터티를 무엇이라 하는가?",
    "choices": [
      "기본 엔터티",
      "중심 엔터티",
      "행위 엔터티",
      "독립 엔터티"
    ],
    "answer": 2,
    "explanation": "행위 엔터티는 주문, 계약, 거래처럼 업무 수행 과정에서 발생하는 데이터를 담습니다."
  },
  {
    "id": 11,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "제1정규형(1NF)의 핵심 조건은?",
    "choices": [
      "모든 속성이 원자값을 가진다",
      "부분 함수 종속을 제거한다",
      "이행 함수 종속을 제거한다",
      "모든 결정자가 후보키다"
    ],
    "answer": 0,
    "explanation": "1NF는 각 속성이 더 이상 분해할 수 없는 원자값을 갖도록 합니다."
  },
  {
    "id": 12,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "복합 기본키의 일부에만 종속되는 일반 속성을 제거하는 정규화 단계는?",
    "choices": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "answer": 1,
    "explanation": "2NF는 기본키의 일부에만 종속되는 부분 함수 종속을 제거합니다."
  },
  {
    "id": 13,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "기본키가 아닌 일반 속성이 다른 일반 속성을 결정하는 이행 함수 종속을 제거하는 단계는?",
    "choices": [
      "1NF",
      "2NF",
      "3NF",
      "5NF"
    ],
    "answer": 2,
    "explanation": "3NF는 비식별자 속성 간의 이행 함수 종속을 제거합니다."
  },
  {
    "id": 14,
    "category": "데이터 모델과 SQL",
    "tag": "BCNF",
    "question": "BCNF의 조건으로 가장 알맞은 것은?",
    "choices": [
      "모든 속성이 숫자형이어야 한다",
      "모든 결정자가 후보키여야 한다",
      "외래키가 없어야 한다",
      "테이블이 하나여야 한다"
    ],
    "answer": 1,
    "explanation": "BCNF는 모든 결정자가 후보키가 되도록 요구하는 정규형입니다."
  },
  {
    "id": 15,
    "category": "데이터 모델과 SQL",
    "tag": "반정규화",
    "question": "반정규화를 고려하는 대표적인 이유는?",
    "choices": [
      "조회 성능 향상",
      "무조건 데이터 중복 제거",
      "모든 인덱스 제거",
      "트랜잭션 종료"
    ],
    "answer": 0,
    "explanation": "반정규화는 조인 감소 등으로 조회 성능을 개선하기 위해 중복을 의도적으로 허용할 수 있습니다."
  },
  {
    "id": 16,
    "category": "데이터 모델과 SQL",
    "tag": "관계 해소",
    "question": "M:N 관계를 관계형 데이터베이스에서 일반적으로 구현하는 방법은?",
    "choices": [
      "두 테이블을 삭제한다",
      "관계 엔터티를 추가해 두 개의 1:M 관계로 변환한다",
      "외래키를 모두 제거한다",
      "항상 CROSS JOIN을 사용한다"
    ],
    "answer": 1,
    "explanation": "M:N 관계는 연결(관계) 엔터티를 추가해 각각 1:M으로 해소합니다."
  },
  {
    "id": 17,
    "category": "데이터 모델과 SQL",
    "tag": "성능 모델링",
    "question": "수직 분할(Vertical Partitioning)의 설명으로 맞는 것은?",
    "choices": [
      "행을 기준으로 나눈다",
      "컬럼을 기준으로 테이블을 분리한다",
      "DB를 다른 국가로 복제한다",
      "모든 테이블을 하나로 합친다"
    ],
    "answer": 1,
    "explanation": "수직 분할은 자주 사용하는 컬럼과 그렇지 않은 컬럼 등을 기준으로 컬럼 집합을 나눕니다."
  },
  {
    "id": 18,
    "category": "데이터 모델과 SQL",
    "tag": "파티셔닝",
    "question": "파티션 키로 고려하기 좋은 컬럼의 특징은?",
    "choices": [
      "WHERE 조건에 자주 사용되는 컬럼",
      "항상 NULL인 컬럼",
      "조회하지 않는 컬럼",
      "매 행마다 동일한 값만 가진 컬럼"
    ],
    "answer": 0,
    "explanation": "파티션 프루닝 효과를 얻으려면 조건절에 자주 사용되는 컬럼이 유리합니다."
  },
  {
    "id": 19,
    "category": "데이터 모델과 SQL",
    "tag": "인조식별자",
    "question": "인조식별자를 사용하는 상황으로 가장 적절한 것은?",
    "choices": [
      "자연키가 지나치게 길거나 복합적일 때",
      "모든 속성을 제거할 때",
      "NULL을 기본키로 만들 때",
      "외래키를 금지할 때"
    ],
    "answer": 0,
    "explanation": "자연 식별자가 너무 길거나 복잡하면 시퀀스 같은 인조식별자를 사용할 수 있습니다."
  },
  {
    "id": 20,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "정규화의 일반적인 장점으로 가장 알맞은 것은?",
    "choices": [
      "데이터 중복과 이상현상 감소",
      "조인 완전 제거",
      "모든 조회가 자동으로 빨라짐",
      "저장공간이 반드시 증가"
    ],
    "answer": 0,
    "explanation": "정규화는 중복을 줄이고 삽입·수정·삭제 이상현상을 방지하는 데 목적이 있습니다."
  },
  {
    "id": 21,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "Oracle에서 NULL이 아닌 값을 조회하는 올바른 조건은?",
    "choices": [
      "COL = NULL",
      "COL <> NULL",
      "COL IS NOT NULL",
      "COL NOT NULL"
    ],
    "answer": 2,
    "explanation": "NULL 비교는 = 또는 <>가 아니라 IS NULL / IS NOT NULL을 사용합니다."
  },
  {
    "id": 22,
    "category": "SQL 기본",
    "tag": "집계함수",
    "question": "값이 10, 20, NULL, 30일 때 AVG(COL)의 결과는?",
    "choices": [
      "15",
      "20",
      "30",
      "NULL"
    ],
    "answer": 1,
    "explanation": "AVG는 NULL을 제외하고 계산하므로 (10+20+30)/3 = 20입니다."
  },
  {
    "id": 23,
    "category": "SQL 기본",
    "tag": "WHERE",
    "question": "WHERE절의 역할로 가장 알맞은 것은?",
    "choices": [
      "그룹화 전 행을 필터링한다",
      "테이블을 삭제한다",
      "컬럼명을 변경한다",
      "트랜잭션을 종료한다"
    ],
    "answer": 0,
    "explanation": "WHERE는 GROUP BY 이전에 개별 행을 조건으로 걸러냅니다."
  },
  {
    "id": 24,
    "category": "SQL 기본",
    "tag": "HAVING",
    "question": "HAVING절의 대표적인 역할은?",
    "choices": [
      "그룹화된 결과에 조건 적용",
      "조인 테이블 생성",
      "권한 부여",
      "테이블 생성"
    ],
    "answer": 0,
    "explanation": "HAVING은 GROUP BY 이후 집계된 그룹에 조건을 적용합니다."
  },
  {
    "id": 25,
    "category": "SQL 기본",
    "tag": "LIKE",
    "question": "LIKE 'A%'가 의미하는 조건은?",
    "choices": [
      "A로 끝나는 문자열",
      "A로 시작하는 문자열",
      "A 한 글자만",
      "A가 없는 문자열"
    ],
    "answer": 1,
    "explanation": "%는 0개 이상의 임의 문자열이므로 'A%'는 A로 시작하는 문자열입니다."
  },
  {
    "id": 26,
    "category": "SQL 기본",
    "tag": "ORDER BY",
    "question": "ORDER BY COL DESC의 의미는?",
    "choices": [
      "오름차순",
      "내림차순",
      "중복 제거",
      "NULL 삭제"
    ],
    "answer": 1,
    "explanation": "DESC는 내림차순 정렬을 의미합니다."
  },
  {
    "id": 27,
    "category": "SQL 기본",
    "tag": "DISTINCT",
    "question": "SELECT DISTINCT COL의 효과는?",
    "choices": [
      "중복값 제거",
      "NULL만 조회",
      "오름차순 정렬",
      "테이블 생성"
    ],
    "answer": 0,
    "explanation": "DISTINCT는 SELECT 결과에서 중복 행을 제거합니다."
  },
  {
    "id": 28,
    "category": "SQL 기본",
    "tag": "GROUP BY",
    "question": "ROLLUP(A,B)가 만드는 그룹은?",
    "choices": [
      "(A,B),(A),()",
      "(A,B),(B),()",
      "(A),(B),()",
      "(A,B),(A),(B),()"
    ],
    "answer": 0,
    "explanation": "ROLLUP은 오른쪽부터 하나씩 제거하여 (A,B) → (A) → ()를 만듭니다."
  },
  {
    "id": 29,
    "category": "SQL 기본",
    "tag": "GROUP BY",
    "question": "CUBE(A,B)가 만드는 그룹 수는?",
    "choices": [
      "2개",
      "3개",
      "4개",
      "8개"
    ],
    "answer": 2,
    "explanation": "CUBE의 그룹 조합 수는 2^N이므로 컬럼 2개면 4개입니다."
  },
  {
    "id": 30,
    "category": "SQL 기본",
    "tag": "GROUPING",
    "question": "CUBE(A,B) 결과에서 GROUPING(A)=1, GROUPING(B)=0은 어느 그룹인가?",
    "choices": [
      "(A,B)",
      "(A)",
      "(B)",
      "()"
    ],
    "answer": 2,
    "explanation": "A는 집계로 빠졌고 B는 살아 있으므로 (B) 그룹입니다."
  },
  {
    "id": 31,
    "category": "SQL 활용",
    "tag": "JOIN",
    "question": "INNER JOIN의 특징으로 맞는 것은?",
    "choices": [
      "조건이 일치하는 행만 반환",
      "왼쪽 테이블의 모든 행을 반드시 반환",
      "무조건 카테시안 곱 생성",
      "서브쿼리만 사용 가능"
    ],
    "answer": 0,
    "explanation": "INNER JOIN은 양쪽에서 조인 조건이 일치하는 행만 반환합니다."
  },
  {
    "id": 32,
    "category": "SQL 활용",
    "tag": "LEFT JOIN",
    "question": "LEFT JOIN 결과에 대해 WHERE절에서 오른쪽 테이블 컬럼을 '=' 조건으로 제한할 때 주의할 점은?",
    "choices": [
      "NULL 보존 행이 제거될 수 있다",
      "항상 FULL JOIN이 된다",
      "테이블이 삭제된다",
      "항상 문법 오류가 난다"
    ],
    "answer": 0,
    "explanation": "오른쪽 테이블이 매칭되지 않은 행의 컬럼은 NULL이므로 WHERE 조건에서 탈락해 LEFT JOIN 효과가 사라질 수 있습니다."
  },
  {
    "id": 33,
    "category": "SQL 활용",
    "tag": "CROSS JOIN",
    "question": "CROSS JOIN의 결과는?",
    "choices": [
      "교집합",
      "카테시안 곱",
      "왼쪽 차집합",
      "중복 제거 결과"
    ],
    "answer": 1,
    "explanation": "CROSS JOIN은 양쪽 테이블의 모든 가능한 행 조합을 만듭니다."
  },
  {
    "id": 34,
    "category": "SQL 활용",
    "tag": "서브쿼리",
    "question": "단일행 서브쿼리에 일반적으로 사용할 수 있는 연산자는?",
    "choices": [
      "=",
      "IN만",
      "EXISTS만",
      "UNION만"
    ],
    "answer": 0,
    "explanation": "단일행 서브쿼리는 =, >, <, >=, <=, <> 같은 단일행 비교 연산자와 함께 사용합니다."
  },
  {
    "id": 35,
    "category": "SQL 활용",
    "tag": "다중행 서브쿼리",
    "question": "다중행 서브쿼리와 자주 함께 사용하는 연산자는?",
    "choices": [
      "IN",
      "=",
      "LIKE만",
      "IS NULL만"
    ],
    "answer": 0,
    "explanation": "IN, ANY, ALL, EXISTS 등이 다중행 서브쿼리에서 자주 사용됩니다."
  },
  {
    "id": 36,
    "category": "SQL 활용",
    "tag": "EXISTS",
    "question": "EXISTS의 핵심 동작은?",
    "choices": [
      "서브쿼리 결과의 존재 여부 확인",
      "결과를 정렬",
      "평균 계산",
      "테이블 삭제"
    ],
    "answer": 0,
    "explanation": "EXISTS는 서브쿼리가 한 행이라도 반환하는지 확인합니다."
  },
  {
    "id": 37,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "RANK와 DENSE_RANK의 차이로 맞는 것은?",
    "choices": [
      "RANK는 동순위 다음 순번을 건너뛸 수 있다",
      "DENSE_RANK만 동순위를 허용한다",
      "RANK는 정렬을 못한다",
      "둘은 항상 다른 값을 반환한다"
    ],
    "answer": 0,
    "explanation": "RANK는 동순위 수만큼 다음 순번이 건너뛰지만 DENSE_RANK는 연속 순위를 부여합니다."
  },
  {
    "id": 38,
    "category": "SQL 활용",
    "tag": "계층형 질의",
    "question": "Oracle 계층형 질의에서 시작 행을 지정하는 절은?",
    "choices": [
      "START WITH",
      "CONNECT BY",
      "ORDER SIBLINGS BY",
      "GROUP BY"
    ],
    "answer": 0,
    "explanation": "START WITH는 계층 탐색의 시작점을 지정합니다."
  },
  {
    "id": 39,
    "category": "SQL 활용",
    "tag": "집합 연산자",
    "question": "UNION의 특징으로 맞는 것은?",
    "choices": [
      "두 결과를 합치고 중복을 제거한다",
      "두 결과를 합치고 중복을 항상 유지한다",
      "교집합만 반환한다",
      "첫 쿼리만 실행한다"
    ],
    "answer": 0,
    "explanation": "UNION은 결과를 합친 후 중복을 제거합니다. 중복을 유지하려면 UNION ALL을 사용합니다."
  },
  {
    "id": 40,
    "category": "SQL 활용",
    "tag": "NATURAL JOIN",
    "question": "NATURAL JOIN의 특징은?",
    "choices": [
      "이름이 같은 컬럼을 자동으로 조인 조건에 사용",
      "ON절이 반드시 필요",
      "항상 CROSS JOIN과 동일",
      "공통 컬럼이 있어도 무시"
    ],
    "answer": 0,
    "explanation": "NATURAL JOIN은 양쪽 테이블에서 이름이 같은 컬럼들을 자동으로 등가 조인 조건에 사용합니다."
  },
  {
    "id": 41,
    "category": "관리 구문",
    "tag": "DDL",
    "question": "테이블을 생성하는 명령은?",
    "choices": [
      "CREATE",
      "SELECT",
      "COMMIT",
      "GRANT"
    ],
    "answer": 0,
    "explanation": "CREATE는 테이블, 뷰 등 데이터베이스 객체를 생성하는 DDL입니다."
  },
  {
    "id": 42,
    "category": "관리 구문",
    "tag": "DDL",
    "question": "테이블 구조 자체를 제거하는 명령은?",
    "choices": [
      "DELETE",
      "TRUNCATE",
      "DROP",
      "ROLLBACK"
    ],
    "answer": 2,
    "explanation": "DROP TABLE은 테이블 객체 자체를 제거합니다."
  },
  {
    "id": 43,
    "category": "관리 구문",
    "tag": "TRUNCATE",
    "question": "TRUNCATE TABLE의 특징으로 가장 알맞은 것은?",
    "choices": [
      "테이블의 모든 행을 빠르게 제거하는 DDL 성격의 명령",
      "WHERE절로 일부 행만 제거",
      "컬럼명을 변경",
      "사용자 권한 부여"
    ],
    "answer": 0,
    "explanation": "TRUNCATE는 테이블의 전체 데이터를 제거하며 일반 DELETE와 성격이 다릅니다."
  },
  {
    "id": 44,
    "category": "관리 구문",
    "tag": "DCL",
    "question": "사용자에게 객체 권한을 부여하는 명령은?",
    "choices": [
      "GRANT",
      "REVOKE",
      "COMMIT",
      "ALTER"
    ],
    "answer": 0,
    "explanation": "GRANT는 사용자나 역할에 시스템/객체 권한을 부여합니다."
  },
  {
    "id": 45,
    "category": "관리 구문",
    "tag": "DCL",
    "question": "부여된 권한을 회수하는 명령은?",
    "choices": [
      "GRANT",
      "REVOKE",
      "SAVEPOINT",
      "MERGE"
    ],
    "answer": 1,
    "explanation": "REVOKE는 이미 부여된 권한을 회수합니다."
  },
  {
    "id": 46,
    "category": "관리 구문",
    "tag": "TCL",
    "question": "현재 트랜잭션의 변경 내용을 확정하는 명령은?",
    "choices": [
      "ROLLBACK",
      "COMMIT",
      "DROP",
      "GRANT"
    ],
    "answer": 1,
    "explanation": "COMMIT은 현재 트랜잭션의 변경 사항을 영구 반영합니다."
  },
  {
    "id": 47,
    "category": "관리 구문",
    "tag": "TCL",
    "question": "트랜잭션의 변경 내용을 취소하는 명령은?",
    "choices": [
      "ROLLBACK",
      "COMMIT",
      "CREATE",
      "GRANT"
    ],
    "answer": 0,
    "explanation": "ROLLBACK은 커밋되지 않은 변경사항을 취소합니다."
  },
  {
    "id": 48,
    "category": "관리 구문",
    "tag": "제약조건",
    "question": "PRIMARY KEY 제약조건의 특징으로 틀린 것은?",
    "choices": [
      "행을 유일하게 식별",
      "NULL 허용 안 함",
      "한 테이블에 여러 개의 PRIMARY KEY 제약조건을 각각 둘 수 있음",
      "복합 컬럼으로 구성 가능"
    ],
    "answer": 2,
    "explanation": "PRIMARY KEY 제약조건은 테이블당 하나이며, 그 하나가 여러 컬럼으로 구성되는 복합키는 가능합니다."
  },
  {
    "id": 49,
    "category": "관리 구문",
    "tag": "제약조건",
    "question": "FOREIGN KEY의 주된 목적은?",
    "choices": [
      "참조 무결성 유지",
      "중복값 무조건 제거",
      "정렬 수행",
      "트랜잭션 확정"
    ],
    "answer": 0,
    "explanation": "외래키는 다른 테이블의 키를 참조하여 참조 무결성을 유지합니다."
  },
  {
    "id": 50,
    "category": "관리 구문",
    "tag": "인덱스",
    "question": "인덱스에 대한 설명으로 가장 알맞은 것은?",
    "choices": [
      "조회 성능 향상에 도움을 줄 수 있지만 DML 비용이 증가할 수 있다",
      "생성하면 모든 쿼리가 반드시 빨라진다",
      "INSERT 성능만 향상한다",
      "데이터 무결성을 완전히 대체한다"
    ],
    "answer": 0,
    "explanation": "인덱스는 조회를 빠르게 할 수 있지만 INSERT/UPDATE/DELETE 시 인덱스 유지 비용이 발생합니다."
  }
];

const CATEGORY_INFO = {
  "데이터 모델링의 이해": {
    "icon": "◇",
    "desc": "엔터티 · 속성 · 관계 · 식별자 · 슈퍼/서브타입"
  },
  "데이터 모델과 SQL": {
    "icon": "▦",
    "desc": "정규화 · 반정규화 · 관계 해소 · 성능 모델링"
  },
  "SQL 기본": {
    "icon": "SQL",
    "desc": "WHERE · 함수 · GROUP BY · NULL · 정렬"
  },
  "SQL 활용": {
    "icon": "↳",
    "desc": "JOIN · 서브쿼리 · 윈도우 · 계층형 · 집합 연산"
  },
  "관리 구문": {
    "icon": "⚙",
    "desc": "DDL · DCL · TCL · 제약조건 · 인덱스"
  }
};
