const QUESTION_BANK = [
  {
    "id": 848,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "다음 중 데이터베이스 3층 스키마 구조에서 '물리적 저장 방법과 접근 경로를 정의하는 스키마'에 해당하는 것은?",
    "choices": [
      "외부 스키마(External Schema)",
      "개념 스키마(Conceptual Schema)",
      "내부 스키마(Internal Schema)",
      "논리 스키마(Logical Schema)"
    ],
    "answer": 2,
    "explanation": "내부 스키마는 데이터베이스의 물리적 저장 구조와 접근 방법을 정의하는 스키마입니다. 외부 스키마는 개별 사용자 관점의 스키마이고, 개념 스키마는 조직 전체 관점의 논리적 구조를 나타냅니다. 논리 스키마는 개념 스키마와 같은 의미로 사용되는 용어입니다."
  },
  {
    "id": 849,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "다음 중 엔터티의 필수 특성으로 가장 적절하지 않은 것은?",
    "choices": [
      "엔터티는 고유한 식별자를 가져야 한다",
      "엔터티는 2개 이상의 인스턴스를 가져야 한다",
      "엔터티는 반드시 하나 이상의 속성을 가져야 한다",
      "엔터티는 다른 모든 엔터티와 관계를 맺어야 한다"
    ],
    "answer": 3,
    "explanation": "엔터티는 다른 모든 엔터티와 관계를 맺을 필요가 없습니다. 독립적인 엔터티도 존재할 수 있으며, 업무적으로 필요한 관계만 맺으면 됩니다. 나머지 특성들은 모두 엔터티의 필수 조건입니다."
  },
  {
    "id": 850,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "ERD",
    "question": "다음 중 ERD에서 관계를 표현할 때 필요한 구성 요소가 아닌 것은?",
    "choices": [
      "관계명(Relationship Name)",
      "관계차수(Cardinality)",
      "관계선택성(Optionality)",
      "관계속도(Relationship Speed)"
    ],
    "answer": 3,
    "explanation": "관계속도는 ERD의 관계 표현 요소가 아닙니다. ERD에서 관계를 표현하는 3가지 기본 요소는 관계명(관계의 이름), 관계차수(1:1, 1:M, M:N 등), 관계선택성(필수 또는 선택적 참여)입니다."
  },
  {
    "id": 851,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "다음 중 본질 식별자(Natural Identifier)에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "시스템에서 자동으로 생성하는 일련번호 형태의 식별자이다",
      "업무적으로 의미가 있고 자연스럽게 발생하는 식별자이다",
      "복합키가 너무 복잡할 때 대체하여 사용하는 식별자이다",
      "다른 엔터티로부터 상속받은 외래키를 포함한 식별자이다"
    ],
    "answer": 1,
    "explanation": "본질 식별자는 업무적으로 의미가 있고 자연스럽게 발생하는 식별자입니다. ①은 인조 식별자, ③은 인조 식별자 사용 이유, ④는 외부 식별자에 대한 설명입니다."
  },
  {
    "id": 852,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "다음 중 중심 엔터티(Main Entity)의 특성으로 가장 적절한 것은?",
    "choices": [
      "다른 엔터티와 독립적으로 존재할 수 있는 기본 엔터티이다",
      "두 개 이상의 부모 엔터티로부터 발생하는 엔터티이다",
      "기본 엔터티로부터 발생하며 업무의 중심적 역할을 하는 엔터티이다",
      "코드성 데이터를 관리하는 참조 엔터티이다"
    ],
    "answer": 2,
    "explanation": "중심 엔터티는 기본 엔터티로부터 발생하며 업무의 중심적 역할을 하는 엔터티입니다. ①은 기본 엔터티, ②는 행위 엔터티, ④는 코드 엔터티에 대한 설명입니다."
  },
  {
    "id": 853,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "다음 테이블에서 위반하는 정규형은?\n\n[주문상세] 주문번호(PK), 상품코드(PK), 상품명, 수량, 단가\n※ 상품명은 상품코드에 의해 결정됨",
    "choices": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "answer": 1,
    "explanation": "복합 기본키 (주문번호, 상품코드)에서 상품명이 상품코드에만 의존하는 부분 함수 종속이 발생하여 제2정규형을 위반합니다. ① 제1정규형은 원자값 조건을 만족하므로 위반하지 않습니다. ③ 제3정규형과 ④ BCNF는 제2정규형이 만족된 후 고려되는 상위 정규형입니다."
  },
  {
    "id": 854,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "정규화 과정에서 제거하려는 주요 대상은?",
    "choices": [
      "함수 종속성",
      "데이터 중복성",
      "기본키 제약",
      "참조 무결성"
    ],
    "answer": 1,
    "explanation": "정규화의 가장 기본적인 목적은 데이터 중복성을 제거하여 삽입, 수정, 삭제 이상현상을 방지하는 것입니다. ① 함수 종속성은 정규화 과정에서 분석 대상이지 제거 대상이 아닙니다. ③ 기본키 제약과 ④ 참조 무결성은 데이터 무결성 유지를 위해 필요한 요소입니다."
  },
  {
    "id": 855,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "식별자",
    "question": "업무에 의해 자연적으로 만들어지며 가공되지 않은 식별자를 무엇이라 하는가?",
    "choices": [
      "인조식별자",
      "대리식별자(surrogate key)",
      "본질식별자",
      "시퀀스식별자"
    ],
    "answer": 2,
    "explanation": "본질식별자는 업무에 의해 자연적으로 만들어지며 가공되지 않은 식별자로, 주민등록번호·사원번호·학번 등이 그 예이다. ①②④의 인조식별자·대리식별자·시퀀스식별자는 모두 본질식별자가 부적절할 때 인위적으로 부여하는 식별자를 가리키므로 정의에 맞지 않는다."
  },
  {
    "id": 856,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "식별자",
    "question": "인조식별자(인위적으로 부여한 식별자)에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "본질식별자가 복잡하거나 복합키 구성이 부적절할 때 인위적으로 부여한 식별자다.",
      "업무에 의해 자연적으로 생성되는 가공되지 않은 식별자다.",
      "항상 업무적 의미를 그대로 보존하므로 의미 손실이 없다.",
      "주민등록번호처럼 업무에서 부여되는 식별자가 대표적인 예다."
    ],
    "answer": 0,
    "explanation": "인조식별자는 본질식별자가 복잡하거나 길고, 복합키 구성이 부적절할 때 시퀀스 등으로 하나의 값을 인위적으로 부여한 식별자다(①). ②④는 본질식별자에 대한 설명이고, ③은 인조식별자의 단점(업무적 의미 상실)과 반대되는 잘못된 진술이다."
  },
  {
    "id": 857,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "다음 테이블에서 위반하는 정규형과 그 이유로 가장 적절한 것은?\n\n[강의평가] 학번(PK), 강의코드(PK), 교수코드, 평점\n※ 강의코드 → 교수코드\n※ 한 강의는 한 교수만 담당",
    "choices": [
      "1NF 위반 - 원자값이 아닌 속성 존재",
      "2NF 위반 - 부분 함수 종속 존재",
      "3NF 위반 - 이행적 함수 종속 존재",
      "BCNF 위반 - 결정자가 후보키가 아님"
    ],
    "answer": 1,
    "explanation": "복합 기본키 (학번, 강의코드)에서 교수코드가 강의코드에만 함수 종속되는 부분 함수 종속이 존재하므로 제2정규형을 위반합니다. ① 모든 속성이 원자값이므로 1NF는 만족합니다. ③ 이행적 종속이나 ④ 결정자가 후보키가 아닌 경우는 해당되지 않습니다."
  },
  {
    "id": 858,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 DML(Data Manipulation Language)에 해당하는 것은?",
    "choices": [
      "DROP",
      "INSERT",
      "CREATE INDEX",
      "RENAME"
    ],
    "answer": 1,
    "explanation": "DML은 데이터를 조작하는 명령어로 INSERT, UPDATE, DELETE, SELECT가 해당됩니다. ① DROP은 DDL, ③ CREATE INDEX는 DDL, ④ RENAME은 DDL입니다."
  },
  {
    "id": 859,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 PRIMARY KEY 제약조건에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "NULL 값을 허용한다",
      "테이블당 여러 개 생성 가능하다",
      "중복된 값을 허용하지 않는다",
      "외래키 참조가 불가능하다"
    ],
    "answer": 2,
    "explanation": "PRIMARY KEY는 테이블에서 각 행을 고유하게 식별하는 제약조건으로, 중복된 값과 NULL 값을 모두 허용하지 않습니다. ① NULL 불허용, ② 테이블당 하나만 가능, ④ 다른 테이블의 외래키가 참조 가능합니다."
  },
  {
    "id": 860,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL 실행 결과는? (Oracle)\n\n```sql\nSELECT CASE WHEN LENGTH('Database') > 6 \n            THEN UPPER(SUBSTR('Database', 1, 4))\n            ELSE LOWER(SUBSTR('Database', 5, 4))\n       END AS RESULT\nFROM DUAL;\n```",
    "choices": [
      "DATA",
      "base",
      "Data",
      "BASE"
    ],
    "answer": 0,
    "explanation": "LENGTH('Database') = 8이므로 8 > 6 조건이 참입니다. 따라서 UPPER(SUBSTR('Database', 1, 4))가 실행되어 'Database'의 첫 4글자 'Data'를 대문자로 변환한 'DATA'가 결과입니다. ② ELSE 절의 LOWER(SUBSTR('Database', 5, 4))는 실행되지 않음, ③ 대문자 변환 전 상태, ④ 잘못된 부분 추출 결과입니다."
  },
  {
    "id": 861,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 SELECT 문의 기본 구조로 가장 적절한 것은?",
    "choices": [
      "SELECT - FROM - WHERE - ORDER BY",
      "FROM - SELECT - WHERE - ORDER BY",
      "WHERE - SELECT - FROM - ORDER BY",
      "SELECT - WHERE - FROM - ORDER BY"
    ],
    "answer": 0,
    "explanation": "SELECT 문의 기본 구조는 SELECT 절, FROM 절, WHERE 절, ORDER BY 절 순서로 작성됩니다. 이는 SQL의 표준 문법 순서입니다. ②③④는 모두 잘못된 구문 순서입니다."
  },
  {
    "id": 862,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "TCL",
    "question": "다음 트랜잭션 실행 후 최종 결과는?\n\n```sql\n-- PRODUCT(ID, NAME, PRICE)\nINSERT INTO PRODUCT(ID, NAME, PRICE) VALUES(100, 'Mouse', 10000);\nINSERT INTO PRODUCT(ID, NAME, PRICE) VALUES(200, 'Keyboard', 20000);\nSAVEPOINT S1;\nUPDATE PRODUCT SET PRICE = 15000 WHERE ID = 100;\nSAVEPOINT S2;\nDELETE FROM PRODUCT WHERE ID = 200;\nROLLBACK TO S1;\nCOMMIT;\n```",
    "choices": [
      "2건의 레코드가 남는다",
      "1건의 레코드가 남는다",
      "0건의 레코드가 남는다",
      "오류가 발생한다"
    ],
    "answer": 0,
    "explanation": "초기 INSERT로 2건이 저장된 뒤 SAVEPOINT S1이 설정됩니다. 그 이후 UPDATE와 DELETE가 수행되지만, ROLLBACK TO S1이 실행되면 S1 이후 작업만 취소됩니다. 따라서 UPDATE와 DELETE는 모두 취소되고, 처음 INSERT한 2건만 남은 상태로 COMMIT 됩니다."
  },
  {
    "id": 863,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "GROUP BY",
    "question": "다음 SQL에서 GROUP BY와 HAVING 절의 실행 순서를 고려할 때, 가장 적절하지 않은 설명은?\n\n```sql\nSELECT CATEGORY, AVG(PRICE) \nFROM ITEMS \nWHERE STOCK > 0 \nGROUP BY CATEGORY \nHAVING AVG(PRICE) > 50000;\n```",
    "choices": [
      "WHERE 절이 GROUP BY보다 먼저 실행된다",
      "HAVING 절은 그룹화 이후에 적용된다",
      "HAVING 절에서 집계함수 사용이 가능하다",
      "HAVING 절은 GROUP BY 이전에 적용된다"
    ],
    "answer": 3,
    "explanation": "④가 가장 적절하지 않은 설명입니다. WHERE 절로 행을 먼저 필터링한 뒤 GROUP BY로 그룹화하고, 그 이후 HAVING 절이 그룹 조건을 적용합니다. 따라서 HAVING 절은 GROUP BY 이전이 아니라 이후에 적용됩니다. ①②③은 모두 올바른 설명입니다."
  },
  {
    "id": 864,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 DCL(Data Control Language)에 해당하는 것은?",
    "choices": [
      "INSERT",
      "CREATE",
      "REVOKE",
      "COMMIT"
    ],
    "answer": 2,
    "explanation": "DCL은 데이터베이스 접근 권한을 제어하는 명령어로 GRANT, REVOKE가 해당됩니다. ① INSERT는 DML, ② CREATE는 DDL, ④ COMMIT은 TCL입니다."
  },
  {
    "id": 865,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 WHERE 절에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "집계함수의 결과에 조건을 적용한다",
      "행을 그룹화한 후 조건을 적용한다",
      "테이블에서 조건에 맞는 행을 필터링한다",
      "ORDER BY 절 다음에 실행된다"
    ],
    "answer": 2,
    "explanation": "WHERE 절은 테이블의 각 행을 검사하여 조건에 맞는 행만을 선택하는 역할을 합니다. ① 집계함수 결과 조건은 HAVING, ② 그룹화 후 조건도 HAVING, ④ WHERE는 ORDER BY보다 먼저 실행됩니다."
  },
  {
    "id": 866,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "DDL",
    "question": "다음 중 DROP과 DELETE의 차이점으로 가장 적절하지 않은 것은?",
    "choices": [
      "DROP은 DDL 명령어이고, DELETE는 DML 명령어이다",
      "DROP은 테이블 구조까지 삭제하지만, DELETE는 데이터만 삭제한다",
      "DROP은 ROLLBACK이 불가능하지만, DELETE는 ROLLBACK이 가능하다",
      "DROP과 DELETE 모두 WHERE 조건절을 사용할 수 있다"
    ],
    "answer": 3,
    "explanation": "DROP 명령어는 WHERE 조건절을 사용할 수 없습니다. DROP은 테이블 전체를 삭제하는 DDL 명령어로, 특정 조건으로 일부만 삭제하는 기능이 없습니다. 반면 DELETE는 WHERE 조건절로 특정 행만 삭제할 수 있는 DML 명령어입니다."
  },
  {
    "id": 867,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 SQL의 기본 명령어 분류로 가장 적절한 것은?",
    "choices": [
      "SELECT는 DML, CREATE는 DDL, GRANT는 DCL이다",
      "INSERT는 TCL, ALTER는 DDL, REVOKE는 DCL이다",
      "UPDATE는 DML, DROP은 DCL, COMMIT은 TCL이다",
      "DELETE는 DDL, INDEX는 DML, ROLLBACK은 TCL이다"
    ],
    "answer": 0,
    "explanation": "① SELECT(조회), INSERT, UPDATE, DELETE는 DML(데이터 조작어), CREATE, ALTER, DROP은 DDL(데이터 정의어), GRANT, REVOKE는 DCL(데이터 제어어), COMMIT, ROLLBACK은 TCL(트랜잭션 제어어)입니다. ②는 INSERT가 DML이어야 하고, ③은 DROP이 DDL이어야 하며, ④는 DELETE가 DML, INDEX 생성이 DDL이어야 합니다."
  },
  {
    "id": 868,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL 실행 결과로 가장 적절한 것은? (Oracle 기준)\n\n```sql\nSELECT \n  CASE WHEN SUBSTR('ORACLE', 2, 3) = 'RAC' \n       THEN CEIL(7.2) * FLOOR(8.9)\n       ELSE MOD(17, 5) + POWER(2, 3)\nEND AS RESULT\nFROM DUAL;\n```",
    "choices": [
      "64",
      "72",
      "10",
      "11"
    ],
    "answer": 0,
    "explanation": "SUBSTR('ORACLE', 2, 3)은 'ORACLE' 문자열에서 2번째 위치부터 3개 문자를 추출하여 'RAC'를 반환합니다. 따라서 조건 'RAC' = 'RAC'가 참이므로 THEN 절이 실행됩니다. CEIL(7.2)는 올림하여 8, FLOOR(8.9)는 내림하여 8이 되므로, 8 × 8 = 64가 정답입니다. ② 72는 잘못된 계산 결과이고, ③ 10과 ④ 11은 ELSE 절의 MOD(17, 5) + POWER(2, 3) = 2 + 8 = 10이므로 조건이 거짓일 때의 결과입니다."
  },
  {
    "id": 869,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 중 SQL에서 NULL 값의 처리에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "NULL과 어떤 값을 더해도 결과는 NULL이다",
      "NULL은 0과 같은 의미이다",
      "NULL은 공백 문자('')와 같다",
      "COUNT(*) 함수는 NULL 값을 제외하고 계산한다"
    ],
    "answer": 0,
    "explanation": "① NULL과 어떤 값을 산술 연산하면 결과는 NULL입니다. ② NULL은 '값이 없음'을 의미하므로 0과 다릅니다. ③ NULL은 공백 문자와도 다른 개념입니다(DBMS에 따라 차이 있음). ④ COUNT(*)는 NULL을 포함한 모든 행을 계산하며, COUNT(컬럼명)만 NULL을 제외합니다."
  },
  {
    "id": 870,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "GROUP BY",
    "question": "다음 SQL의 실행 결과로 가장 적절한 것은?\n\n```sql\n-- PRODUCT 테이블: CATEGORY(A,A,B,B,C), PRICE(1000,1500,2000,2500,3000)\nSELECT CATEGORY, MAX(PRICE) \nFROM PRODUCT \nGROUP BY CATEGORY \nHAVING COUNT(*) >= 2 AND MAX(PRICE) > 2000\nORDER BY MAX(PRICE) DESC;\n```",
    "choices": [
      "B 카테고리만 1행",
      "A, B 카테고리 2행",
      "B, C 카테고리 2행",
      "A, B, C 카테고리 3행"
    ],
    "answer": 0,
    "explanation": "GROUP BY CATEGORY 결과: A(COUNT=2, MAX=1500), B(COUNT=2, MAX=2500), C(COUNT=1, MAX=3000). HAVING 조건 COUNT(*) >= 2를 만족하는 것은 A, B이고, 추가로 MAX(PRICE) > 2000 조건을 만족하는 것은 B(2500)만입니다. C는 COUNT=1이므로 첫 번째 조건에서 제외됩니다."
  },
  {
    "id": 871,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL 실행 시 결과로 가장 적절한 것은?\n\n```sql\nSELECT \n  CASE GRADE\n    WHEN 'A' THEN \n      CASE SCORE \n        WHEN 95 THEN '우수'\n        WHEN 90 THEN '양호'\n        ELSE '보통'\n      END\n    WHEN 'B' THEN '개선필요'\n    ELSE '재검토'\n  END AS STATUS\nFROM STUDENT\nWHERE STUDENT_ID = 'S001';\n-- STUDENT 테이블에서 S001의 GRADE='A', SCORE=92\n```",
    "choices": [
      "우수",
      "양호",
      "보통",
      "재검토"
    ],
    "answer": 2,
    "explanation": "외부 CASE에서 GRADE='A'가 매칭되어 내부 CASE문이 실행됩니다. 내부 CASE에서 SCORE=92는 95도 90도 아니므로 ELSE 절의 '보통'이 반환됩니다. 중첩 CASE문에서는 각 단계별로 조건을 확인하여 해당하는 값을 반환합니다."
  },
  {
    "id": 872,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 FOREIGN KEY 제약조건에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "참조하는 테이블의 PRIMARY KEY나 UNIQUE KEY를 참조해야 한다",
      "한 테이블에 하나의 FOREIGN KEY만 생성할 수 있다",
      "FOREIGN KEY 컬럼은 NULL 값을 가질 수 없다",
      "참조되는 테이블의 데이터를 먼저 삭제해야 참조하는 테이블 데이터를 삭제할 수 있다"
    ],
    "answer": 0,
    "explanation": "① FOREIGN KEY는 다른 테이블의 PRIMARY KEY나 UNIQUE KEY를 참조해야 합니다. ② 한 테이블에 여러 개의 FOREIGN KEY를 생성할 수 있습니다. ③ FOREIGN KEY는 NULL 값을 허용합니다. ④ 일반적으로 참조되는 데이터가 있으면 참조하는 데이터를 먼저 삭제해야 합니다(참조 무결성)."
  },
  {
    "id": 873,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 관계형 데이터베이스의 기본 특성으로 가장 적절한 것은?",
    "choices": [
      "테이블은 행과 열로 구성되며, 각 행은 고유해야 한다",
      "한 테이블의 모든 컬럼은 동일한 데이터 타입을 가져야 한다",
      "테이블 간의 관계는 물리적 포인터로 연결된다",
      "데이터는 반드시 정규화된 형태로만 저장해야 한다"
    ],
    "answer": 0,
    "explanation": "① 관계형 데이터베이스의 테이블은 행(튜플)과 열(속성)로 구성되며, 각 행은 고유한 식별자를 통해 구별됩니다. ② 각 컬럼은 서로 다른 데이터 타입을 가질 수 있습니다. ③ 관계형 모델은 논리적 관계로 연결되며 물리적 포인터를 사용하지 않습니다. ④ 정규화는 권장사항이지만 필수는 아닙니다."
  },
  {
    "id": 874,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 결과 건수는?\n\n[PRODUCT] PRICE: 100, 200, 300, 400, 500\n\n```sql\nSELECT * FROM PRODUCT WHERE PRICE >= 200 AND PRICE <= 400;\n```",
    "choices": [
      "2건",
      "3건",
      "4건",
      "5건"
    ],
    "answer": 1,
    "explanation": "WHERE 조건에서 PRICE >= 200 AND PRICE <= 400는 200, 300, 400 세 개의 값이 조건을 만족합니다. 따라서 결과는 3건입니다."
  },
  {
    "id": 875,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 SQL의 결과는?\n\n```sql\nSELECT NVL(NULL, 7) FROM DUAL;\n```",
    "choices": [
      "NULL",
      "0",
      "7",
      "오류 발생"
    ],
    "answer": 2,
    "explanation": "NVL 함수는 첫 번째 인수가 NULL인 경우 두 번째 인수를 반환합니다. NULL을 7로 대체하므로 결과는 7입니다."
  },
  {
    "id": 876,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 SQL과 동일한 결과를 반환하는 것은?\n\n```sql\nSELECT CASE WHEN NAME IS NULL THEN '미지정' ELSE NAME END FROM MEMBER;\n```",
    "choices": [
      "NVL(NAME, '미지정')",
      "NVL2(NAME, '미지정', NULL)",
      "NULLIF(NAME, '미지정')",
      "LENGTH(NAME)"
    ],
    "answer": 0,
    "explanation": "CASE WHEN NAME IS NULL THEN '미지정' ELSE NAME END는 NAME이 NULL이면 '미지정'을, 아니면 NAME을 반환합니다. 이는 NVL(NAME, '미지정')과 동일한 로직입니다. ②는 NAME이 NULL이 아니면 '미지정'을 반환하므로 반대 로직이고, ③은 NAME이 '미지정'과 같으면 NULL을 반환하는 다른 함수입니다."
  },
  {
    "id": 877,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "TCL",
    "question": "다음 실행 후 SELECT COUNT(*) FROM STUDENT;의 결과는?\n\n```sql\nCREATE TABLE STUDENT(ID INT PRIMARY KEY, SCORE INT);\nINSERT INTO STUDENT VALUES(1, 85);\nINSERT INTO STUDENT VALUES(2, 90);\nINSERT INTO STUDENT VALUES(3, 75);\nCOMMIT;\n```",
    "choices": [
      "0건",
      "1건",
      "2건",
      "3건"
    ],
    "answer": 3,
    "explanation": "테이블을 생성하고 3개의 행을 INSERT한 후 COMMIT으로 확정했습니다. 따라서 COUNT(*)의 결과는 3건입니다."
  },
  {
    "id": 878,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "두 상품을 '모두' 구매한 고객을 찾는 올바른 SQL은?",
    "choices": [
      "WHERE 상품ID=10 AND 상품ID=20",
      "WHERE 상품ID IN (10, 20)",
      "SELECT 고객번호 FROM 주문 WHERE 상품ID=10 INTERSECT SELECT 고객번호 FROM 주문 WHERE 상품ID=20",
      "WHERE 상품ID=10 OR 상품ID=20"
    ],
    "answer": 2,
    "explanation": "③이 정답입니다. INTERSECT는 교집합 연산으로 두 결과에서 공통으로 나타나는 고객번호를 반환하므로 두 상품을 모두 구매한 고객을 찾을 수 있습니다. ①은 한 행에서 상품ID가 동시에 두 값을 가질 수 없으므로 불가능하고, ②와 ④는 둘 중 하나라도 구매한 고객을 찾는 조건입니다."
  },
  {
    "id": 879,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 SQL의 결과로 반환되는 총 행의 개수는?\n\n[부서테이블] 부서코드: 10, 20, 30\n[직원테이블] 부서코드: 10, 10, 20, 30\n\nSELECT 부서코드 FROM 부서테이블 UNION SELECT 부서코드 FROM 직원테이블;",
    "choices": [
      "3개",
      "4개",
      "5개",
      "7개"
    ],
    "answer": 0,
    "explanation": "①이 정답입니다. UNION은 중복을 제거하고 합집합을 반환합니다. 부서테이블의 10,20,30과 직원테이블의 10,20,30(중복 제거 후)을 합치면 10,20,30 총 3개의 고유한 부서코드만 반환됩니다. UNION ALL을 사용했다면 7개가 되지만, UNION은 중복을 자동으로 제거합니다."
  },
  {
    "id": 880,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "SQL Server 계층형 쿼리에서 재귀 CTE의 기본 구조로 올바른 것은?",
    "choices": [
      "WITH RECURSIVE 테이블명 AS (기본쿼리 UNION ALL 재귀쿼리)",
      "WITH 테이블명 AS (기본쿼리 UNION ALL 재귀쿼리)",
      "CONNECT BY PRIOR와 START WITH 절 사용",
      "HIERARCHYID 데이터 타입 필수 사용"
    ],
    "answer": 1,
    "explanation": "②가 정답입니다. SQL Server에서는 WITH절을 사용한 재귀 CTE로 계층형 데이터를 처리하며, RECURSIVE 키워드는 사용하지 않습니다. ①은 MySQL/PostgreSQL 방식이고, ③은 Oracle 방식이며, ④는 선택사항입니다."
  },
  {
    "id": 881,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "다음 UNPIVOT 연산의 결과로 생성되는 행의 개수는?\n\n[원본테이블]\n학번 | 국어 | 영어 | 수학\n1001 |  90  |  85  |  88\n1002 |  78  |  92  |  NULL\n\nSELECT * FROM 원본테이블 UNPIVOT (점수 FOR 과목 IN (국어, 영어, 수학));",
    "choices": [
      "5개",
      "6개",
      "7개",
      "8개"
    ],
    "answer": 0,
    "explanation": "①이 정답입니다. UNPIVOT은 NULL 값을 제외하고 행으로 변환합니다. 학번 1001은 3개 과목 모두 값이 있어 3행이 생성되고, 학번 1002는 수학이 NULL이므로 2행만 생성되어 총 5행이 됩니다. UNPIVOT은 NULL 값이 있는 열-행 조합은 결과에서 제외합니다."
  },
  {
    "id": 882,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUPING",
    "question": "GROUPING SETS(A,B)와 CUBE(A,B)의 결과 차이로 올바른 것은?",
    "choices": [
      "GROUPING SETS가 더 많은 그룹핑 생성",
      "CUBE가 (A), (B) 그룹핑을 추가로 생성",
      "항상 동일한 결과",
      "GROUPING SETS는 전체 합계 제외"
    ],
    "answer": 3,
    "explanation": "④가 정답입니다. GROUPING SETS(A,B)는 (A), (B) 그룹핑만 생성합니다. 반면 CUBE(A,B)는 (A,B), (A), (B), ()를 생성하므로 전체 합계()와 복합 그룹(A,B)이 추가됩니다. 따라서 이 문제에서 GROUPING SETS는 전체 합계를 포함하지 않는다는 점이 차이입니다."
  },
  {
    "id": 883,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 NOT EXISTS를 NOT IN으로 변환한 것으로 올바른 것은?\n\nSELECT 제품코드 FROM 제품 A WHERE NOT EXISTS (SELECT 1 FROM 주문 B WHERE A.제품코드=B.제품코드);",
    "choices": [
      "WHERE 제품코드 NOT IN (SELECT 제품코드 FROM 주문)",
      "WHERE 제품코드 NOT IN (SELECT 제품코드 FROM 주문 WHERE 제품코드 IS NOT NULL)",
      "WHERE NOT (제품코드 IN (SELECT 제품코드 FROM 주문))",
      "WHERE 제품코드 NOT IN (SELECT DISTINCT 제품코드 FROM 주문)"
    ],
    "answer": 1,
    "explanation": "②가 정답입니다. NOT EXISTS를 NOT IN으로 변환할 때 주의할 점은 서브쿼리에 NULL이 있으면 NOT IN의 결과가 달라진다는 것입니다. NOT EXISTS는 NULL을 무시하지만 NOT IN은 NULL이 있으면 모든 결과가 FALSE가 됩니다. 따라서 WHERE 제품코드 IS NOT NULL 조건을 추가해야 합니다."
  },
  {
    "id": 884,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUPING",
    "question": "GROUPING SETS(지역, 상품, ())이 생성하는 그룹핑 조합은?",
    "choices": [
      "(지역,상품), (지역), (상품), ()",
      "(지역), (상품), ()",
      "(지역,상품), ()",
      "(지역), (상품), (지역,상품), ()"
    ],
    "answer": 1,
    "explanation": "②가 정답입니다. GROUPING SETS는 괄호 안에 명시된 그룹핑 조합만 정확히 생성합니다. GROUPING SETS(지역, 상품, ())는 (지역), (상품), () 세 가지 그룹핑만 생성합니다. ()는 전체 집계를 의미하며, (지역,상품) 조합은 명시되지 않았으므로 생성되지 않습니다."
  },
  {
    "id": 885,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "정규화",
    "question": "정규표현식에서 문자 클래스 [a-z], [0-9], [A-Z]의 의미로 올바른 것은?",
    "choices": [
      "[a-z]=소문자 1개, [0-9]=숫자 1개, [A-Z]=대문자 1개",
      "[a-z]=소문자 전체, [0-9]=숫자 전체, [A-Z]=대문자 전체",
      "[a-z]=a부터 z까지 문자열, [0-9]=0부터 9까지 숫자, [A-Z]=A부터 Z까지 문자열",
      "[a-z]=소문자 포함, [0-9]=숫자 포함, [A-Z]=대문자 포함"
    ],
    "answer": 0,
    "explanation": "①이 정답입니다. 정규표현식에서 대괄호 []는 문자 클래스를 나타내며, 그 안의 범위에 해당하는 문자 중 정확히 1개를 매칭합니다. [a-z]는 소문자 하나, [0-9]는 숫자 하나, [A-Z]는 대문자 하나를 의미합니다. 여러 개를 매칭하려면 +, *, ? 등의 수량자를 함께 사용해야 합니다."
  },
  {
    "id": 886,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 SQL에서 PRICE=2000인 첫 번째 행의 누적 개수를 구할 때,\nSQL1과 SQL2의 결과값으로 옳은 것은?\n\n상품 테이블: PRICE (1500, 2000, 2000, 2500)\n\n```sql\nSQL1: COUNT(*) OVER(ORDER BY PRICE ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)\nSQL2: COUNT(*) OVER(ORDER BY PRICE RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)\n```",
    "choices": [
      "SQL1=2, SQL2=3",
      "SQL1=2, SQL2=2",
      "SQL1=3, SQL2=2",
      "SQL1=3, SQL2=3"
    ],
    "answer": 0,
    "explanation": "ROWS는 물리적 행 기준으로 처리하여 첫 번째 2000 행까지 2건(1500, 2000)을 카운트합니다. RANGE는 값 기준으로 처리하여 2000 이하의 모든 값을 포함하므로 3건(1500, 2000, 2000)을 카운트합니다. 따라서 SQL1=2, SQL2=3이 됩니다."
  },
  {
    "id": 887,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "다음 성적 데이터에서 순위 함수의 결과로 올바른 것은?\n\n학생별 점수: 95, 90, 90, 85\n\n```sql\nSELECT \n  ROW_NUMBER() OVER(ORDER BY 점수 DESC) AS RN,\n  RANK() OVER(ORDER BY 점수 DESC) AS RK\nFROM 성적;\n```\n\n90점인 두 학생의 결과는?",
    "choices": [
      "RN: 2,3 / RK: 2,2",
      "RN: 2,3 / RK: 2,3",
      "RN: 2,2 / RK: 2,3",
      "RN: 1,2 / RK: 2,2"
    ],
    "answer": 0,
    "explanation": "ROW_NUMBER()는 동일한 값이라도 고유한 순번을 부여하므로 90점인 두 학생은 2, 3을 받습니다. RANK()는 동일한 값에 같은 순위를 부여하므로 90점인 두 학생 모두 2등이 됩니다. 따라서 RN: 2,3 / RK: 2,2가 정답입니다."
  },
  {
    "id": 888,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "OUTER JOIN",
    "question": "다음 테이블에서 RIGHT OUTER JOIN의 결과 건수는?\n\n```sql\n고객테이블(CUST): ID (A, B, C)\n주문테이블(ORDER): CUST_ID (A, B, D)\n\nSELECT * FROM 고객 C RIGHT OUTER JOIN 주문 O ON C.ID = O.CUST_ID;\n```",
    "choices": [
      "2건",
      "3건",
      "4건",
      "5건"
    ],
    "answer": 1,
    "explanation": "RIGHT OUTER JOIN은 오른쪽 테이블(주문)의 모든 행을 포함합니다. 매칭되는 경우: (A,A), (B,B). 매칭되지 않는 경우: (NULL,D). 따라서 총 3건이 결과로 나옵니다. 고객 테이블의 C는 주문이 없으므로 결과에 포함되지 않습니다."
  },
  {
    "id": 889,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "계층형 질의에서 역방향(자식→부모) 탐색을 수행하는 SQL은?",
    "choices": [
      "CONNECT BY PRIOR 부서코드 = 상위부서코드",
      "CONNECT BY PRIOR 상위부서코드 = 부서코드",
      "CONNECT BY 부서코드 = PRIOR 부서코드",
      "CONNECT BY 상위부서코드 = PRIOR 상위부서코드"
    ],
    "answer": 1,
    "explanation": "역방향(자식→부모) 탐색은 PRIOR 키워드가 FK(상위부서코드)에 붙어야 합니다. 'CONNECT BY PRIOR 상위부서코드 = 부서코드'는 현재 행의 상위부서코드와 다음 행의 부서코드를 연결하여 자식에서 부모로 올라가는 탐색을 수행합니다."
  },
  {
    "id": 890,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "다음 SQL의 실행 결과는?\n\n```sql\n직원테이블: 사번 (100, 200, 300)\n부서테이블: 사번 (100, NULL)\n\nSELECT * FROM 직원 WHERE 사번 IN (SELECT 사번 FROM 부서);\n```",
    "choices": [
      "0건",
      "1건",
      "2건",
      "3건"
    ],
    "answer": 1,
    "explanation": "IN 연산자는 서브쿼리에 NULL이 포함되어 있어도 NULL이 아닌 값들과의 비교는 정상적으로 수행됩니다. 사번 100이 부서테이블에 존재하므로 해당 행이 결과로 반환됩니다. NOT IN의 경우에만 NULL 포함 시 0건이 반환됩니다."
  },
  {
    "id": 891,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "UNPIVOT 구문의 올바른 형태는?\n\n```sql\nSELECT * FROM 월별매출 \nUNPIVOT (( ① ) FOR 월 IN (JAN AS '1월', FEB AS '2월', MAR AS '3월'));\n```",
    "choices": [
      "매출액",
      "SUM(매출액)",
      "GROUP BY 월",
      "ORDER BY 월"
    ],
    "answer": 0,
    "explanation": "UNPIVOT 구문에서는 집계함수가 아닌 단순 컬럼명을 사용합니다. UNPIVOT은 열을 행으로 변환하는 작업으로, 값 컬럼(매출액)과 레이블 컬럼(월)을 지정합니다. GROUP BY나 ORDER BY는 UNPIVOT 구문 내부에 사용하지 않습니다."
  },
  {
    "id": 892,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "정규화",
    "question": "다음 정규표현식의 의미로 가장 적절한 것은?\n\n```sql\nREGEXP_LIKE(상품코드, '^[0-9]{3}-[A-Z]{2}$')\n```",
    "choices": [
      "숫자 3자리 다음에 하이픈, 그 다음 대문자 2자리로 끝남",
      "숫자와 대문자가 하이픈으로 구분되어 나타남",
      "숫자 3개 이상과 대문자 2개 이상이 하이픈으로 연결됨",
      "숫자로 시작하고 대문자로 끝나는 패턴"
    ],
    "answer": 0,
    "explanation": "^는 문자열 시작, [0-9]{3}는 숫자 정확히 3자리, -는 하이픈 문자, [A-Z]{2}는 대문자 정확히 2자리, $는 문자열 끝을 의미합니다. 따라서 '123-AB' 같은 형태만 매칭됩니다. {3}과 {2}는 정확한 개수를 의미하므로 '이상'이 아닙니다."
  },
  {
    "id": 893,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "다음은 `EMP(EMPNO, DEPTNO, SAL)` 테이블의 사원 급여를, 같은 부서의 평균 급여로 갱신하려는 SQL이다. 빈칸에 들어갈 내용으로 가장 적절한 것은?\n\n```sql\nUPDATE EMP E\nSET E.SAL = (\n    SELECT AVG(S.SAL)\n    FROM EMP S\n    WHERE __________\n);\n```",
    "choices": [
      "`S.EMPNO = E.EMPNO`",
      "`S.SAL = E.SAL`",
      "`S.DEPTNO = E.DEPTNO`",
      "`S.DEPTNO = E.EMPNO`"
    ],
    "answer": 2,
    "explanation": "각 사원의 급여를 '같은 부서'의 평균 급여로 갱신하려면, 서브쿼리에서 외부 행의 부서와 동일한 부서(`S.DEPTNO = E.DEPTNO`)의 평균을 구하는 상관 서브쿼리여야 한다. ①처럼 사원번호로 묶으면 자기 자신만의 평균이 되어 급여가 그대로 유지되고, ②는 갱신 의도와 무관한 조건, ④는 부서번호와 사원번호를 비교하는 잘못된 조인이다."
  },
  {
    "id": 894,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "다음 중 TCL(Transaction Control Language)에 해당하는 명령어는?",
    "choices": [
      "ROLLBACK",
      "DROP",
      "REVOKE",
      "UPDATE"
    ],
    "answer": 0,
    "explanation": "ROLLBACK은 트랜잭션을 취소하는 TCL 명령어입니다. DROP은 객체를 삭제하는 DDL, REVOKE는 권한을 회수하는 DCL, UPDATE는 데이터를 수정하는 DML에 해당합니다."
  },
  {
    "id": 895,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "DCL",
    "question": "다음 SQL 명령어의 기능으로 가장 적절한 것은?\n\n```sql\nREVOKE UPDATE ON PRODUCT FROM USER2;\n```",
    "choices": [
      "USER2에게 PRODUCT 테이블의 수정 권한을 부여",
      "USER2로부터 PRODUCT 테이블의 수정 권한을 회수",
      "USER2가 다른 사용자에게 권한을 부여할 수 있도록 허용",
      "PRODUCT 테이블의 모든 권한을 USER2에게 부여"
    ],
    "answer": 1,
    "explanation": "REVOKE 명령어는 사용자로부터 권한을 회수하는 DCL 명령어입니다. 이 SQL은 USER2로부터 PRODUCT 테이블의 UPDATE 권한을 회수합니다. ① 권한 부여는 GRANT를 사용합니다. ③ 권한 재부여 허용은 WITH GRANT OPTION입니다. ④ 모든 권한 부여는 ALL PRIVILEGES를 사용합니다."
  },
  {
    "id": 896,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "`DEPT(DEPTNO PK, DNAME)` 테이블에 `(10, '인사')`, `(20, '재무')`만 존재한다. 다음 INSERT 문을 차례로 실행할 때의 결과로 옳은 것은?\n\n```sql\nINSERT INTO DEPT(DEPTNO, DNAME) VALUES (30, '영업');\nINSERT INTO DEPT(DEPTNO, DNAME) VALUES (20, '기획');\n```",
    "choices": [
      "두 문장 모두 성공하여 4개 행이 된다",
      "두 문장 모두 PK 위반으로 실패하여 2개 행 그대로이다",
      "두 번째 INSERT가 PK(DEPTNO=20 중복)를 위반해 실패하고, 첫 번째 INSERT만 반영되어 3개 행이 된다",
      "첫 번째 INSERT가 실패하고 두 번째만 반영되어 3개 행이 된다"
    ],
    "answer": 2,
    "explanation": "첫 번째 INSERT는 새 키 30이므로 성공한다. 두 번째 INSERT는 DEPTNO=20이 이미 존재해 기본키(PK) 제약을 위반하므로 그 문장만 실패하고, 먼저 성공한 30 행은 남는다. 따라서 (10, 20, 30) 3개 행이 되어 ③이 정답이다. PK 중복은 INSERT 문 단위로 거부될 뿐 이미 반영된 행을 되돌리지 않는다."
  },
  {
    "id": 897,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "다음 중 데이터베이스 객체 생성에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "CREATE 문은 DDL에 속하며 객체의 구조를 정의",
      "CREATE 문 실행 후 COMMIT 없이는 다른 세션에서 접근 불가",
      "CREATE TABLE은 데이터 삽입까지 동시에 수행",
      "객체 생성 시 자동으로 모든 사용자에게 접근 권한 부여"
    ],
    "answer": 0,
    "explanation": "CREATE 문은 테이블, 인덱스, 뷰 등의 데이터베이스 객체를 생성하는 DDL(Data Definition Language) 명령어입니다. ② DDL은 자동 커밋되므로 즉시 다른 세션에서도 접근 가능합니다. ③ CREATE TABLE은 구조만 생성하며 데이터 삽입은 별도 작업입니다. ④ 객체 생성자에게만 권한이 부여되며, 다른 사용자는 별도 권한 부여가 필요합니다."
  },
  {
    "id": 898,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "다음 중 속성의 특성에 대한 설명으로 가장 부적절한 것은?",
    "choices": [
      "복합 속성은 여러 개의 세부 속성으로 구성될 수 있으며, 각 세부 속성은 독립적으로 관리 가능하다",
      "다가 속성(Multi-valued Attribute)은 하나의 인스턴스에서 여러 개의 값을 가질 수 있으나, 관계형 모델에서는 정규화를 통해 별도 엔터티로 분리해야 한다",
      "선택적 속성(Optional Attribute)은 NULL 값을 허용하지만, 모든 인스턴스가 반드시 해당 속성값을 가져야 한다",
      "저장 속성(Stored Attribute)은 업무에서 직접 입력되거나 수집되는 기본 속성으로, 다른 속성으로부터 계산되지 않는다"
    ],
    "answer": 2,
    "explanation": "③번이 부적절합니다. 선택적 속성(Optional Attribute)은 NULL 값을 허용하는 속성으로, 모든 인스턴스가 반드시 해당 속성값을 가질 필요가 없습니다. '반드시 가져야 한다'는 설명은 필수 속성(Required Attribute)의 특성입니다. ①번 복합 속성은 주소처럼 여러 세부 속성으로 구성됩니다. ②번 다가 속성은 한 인스턴스가 여러 값을 가질 수 있지만 관계형에서는 별도 테이블로 분리됩니다. ④번 저장 속성은 직접 입력/수집되는 기본 속성입니다."
  },
  {
    "id": 899,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "논리 데이터 모델링 단계에서 수행하는 작업으로 가장 적절한 것은?",
    "choices": [
      "테이블스페이스와 인덱스 설계를 통한 성능 최적화 방안 수립",
      "정규화 과정을 통한 데이터 중복 제거 및 이상 현상 방지",
      "핵심 엔터티와 관계를 도출하여 전체적인 데이터 구조 파악",
      "데이터베이스 관리 시스템 선정 및 하드웨어 용량 계획 수립"
    ],
    "answer": 1,
    "explanation": "②번이 정답입니다. 논리 데이터 모델링에서는 정규화를 통해 데이터 중복을 제거하고 삽입/수정/삭제 이상을 방지하는 것이 핵심 작업입니다. ①번과 ④번은 물리 모델링 단계에서 수행하는 작업입니다. ③번은 개념 모델링 단계에서 수행하는 작업으로, 업무의 핵심 개념과 관계를 파악하는 것입니다."
  },
  {
    "id": 900,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "관계형 데이터베이스에서 M:N 관계를 물리적으로 구현할 때 발생할 수 있는 문제점으로 가장 적절한 것은?",
    "choices": [
      "외래키 제약조건을 설정할 수 없어 참조 무결성이 보장되지 않는다",
      "조인 연산 시 카티션 곱(Cartesian Product)이 발생하여 성능이 저하된다",
      "관계형 모델에서는 테이블 간 직접적인 M:N 관계 표현이 불가능하다",
      "하나의 테이블에 여러 개의 기본키를 설정해야 하므로 무결성 규칙에 위배된다"
    ],
    "answer": 2,
    "explanation": "③번이 정답입니다. 관계형 데이터베이스에서는 테이블 간 직접적인 M:N 관계를 물리적으로 구현할 수 없습니다. 따라서 교차 테이블(연결 테이블)을 생성하여 두 개의 1:M 관계로 분해해야 합니다. ①번 외래키 제약조건은 교차 테이블을 통해 설정 가능합니다. ②번 카티션 곱은 조인 조건이 없을 때 발생하는 현상입니다. ④번 기본키는 테이블당 하나만 설정되며, 복합키로 구성될 수 있습니다."
  },
  {
    "id": 901,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "다음 중 슈퍼타입-서브타입 모델링에서 배타적(Exclusive) 관계의 특성으로 가장 적절한 것은?",
    "choices": [
      "하나의 슈퍼타입 인스턴스가 동시에 여러 서브타입에 속할 수 있다",
      "모든 슈퍼타입 인스턴스는 반드시 하나 이상의 서브타입에 속해야 한다",
      "하나의 슈퍼타입 인스턴스는 최대 하나의 서브타입에만 속할 수 있다",
      "서브타입 간의 속성이 모두 동일해야 하며, 구분자 속성이 불필요하다"
    ],
    "answer": 2,
    "explanation": "③번이 정답입니다. 배타적(Exclusive) 관계에서는 하나의 슈퍼타입 인스턴스가 최대 하나의 서브타입에만 속할 수 있습니다. ①번은 포함적(Inclusive) 관계의 특성입니다. ②번은 완전성 제약조건(Completeness Constraint)에 관한 내용으로, 배타성과는 별개의 개념입니다. ④번은 잘못된 설명으로, 서브타입마다 고유한 속성을 가질 수 있으며 구분자 속성이 필요합니다."
  },
  {
    "id": 902,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "다음 업무 규칙 중 엔터티로 모델링하기에 가장 부적절한 것은?",
    "choices": [
      "고객별 주문 이력을 관리해야 하며, 각 주문마다 고유번호가 부여된다",
      "직원의 부서 이동 내역을 추적해야 하며, 이동일자와 사유를 기록한다",
      "상품의 현재 재고 수량은 입출고 발생 시마다 자동으로 계산된다",
      "회의실 예약 현황을 관리하며, 예약자와 사용 목적을 함께 저장한다"
    ],
    "answer": 2,
    "explanation": "③번이 부적절합니다. 재고 수량은 입출고 거래로부터 계산되는 파생 정보로, 별도의 엔터티가 아닌 상품 엔터티의 파생 속성으로 모델링하는 것이 적절합니다. ①번 주문은 고유 식별자를 가지는 독립적인 엔터티입니다. ②번 부서이동내역은 직원과 부서 간의 이력 정보를 관리하는 행위 엔터티입니다. ④번 회의실예약은 회의실과 직원 간의 관계를 나타내는 행위 엔터티로 적절합니다."
  },
  {
    "id": 903,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "다음 테이블 구조에서 발생하는 정규형 위반과 해결 방법으로 가장 적절한 것은?\n\n[강의평가] 학번(PK), 강의코드(PK), 교수ID, 평점, 교수연구실\n※ 교수ID → 교수연구실 (한 교수는 하나의 연구실만 사용)\n※ 강의코드 → 교수ID (한 강의는 한 교수만 담당)",
    "choices": [
      "1NF 위반 → 반복그룹 제거 및 원자값 분해",
      "2NF 위반 → 강의코드에 부분 종속되는 교수ID, 교수연구실을 별도 테이블로 분리하여 부분 함수 종속 제거",
      "3NF 위반 → 교수ID를 통한 교수연구실의 이행적 종속 제거",
      "BCNF 위반 → 강의코드가 결정자이지만 후보키가 아닌 종속성 제거"
    ],
    "answer": 1,
    "explanation": "복합 기본키가 (학번, 강의코드)일 때 교수ID는 강의코드에만 종속되므로 부분 함수 종속이 발생합니다. 따라서 먼저 2NF를 위반합니다. 교수연구실 역시 강의코드에 부분적으로 종속되는 구조이므로, 강의 관련 정보를 별도 테이블로 분리하여 부분 함수 종속을 제거하는 것이 적절합니다."
  },
  {
    "id": 904,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "엔터티",
    "question": "데이터베이스 설계에서 엔터티 무결성 제약조건에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "기본키는 NULL 값을 가질 수 없으며 중복될 수 없다",
      "외래키는 참조하는 테이블의 기본키 값과 일치하거나 NULL이어야 한다",
      "도메인 제약조건을 통해 속성값의 범위를 제한한다",
      "비즈니스 규칙에 따른 사용자 정의 제약조건을 설정한다"
    ],
    "answer": 0,
    "explanation": "엔터티 무결성 제약조건은 기본키에 관한 제약으로, 기본키는 NULL 값을 가질 수 없고 중복될 수 없다는 규칙입니다. ②는 참조 무결성 제약조건, ③은 도메인 무결성 제약조건, ④는 사용자 정의 무결성 제약조건에 해당합니다."
  },
  {
    "id": 905,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "식별자",
    "question": "다음 중 본질식별자에 해당하지 않는 것은?",
    "choices": [
      "도서의 ISBN",
      "사업자등록번호",
      "개인의 주민등록번호",
      "주문 적재 시 시퀀스로 채번한 주문일련번호"
    ],
    "answer": 3,
    "explanation": "①ISBN ②사업자등록번호 ③주민등록번호는 모두 업무에 의해 자연적으로 부여되는 본질식별자다. ④의 시퀀스로 채번한 주문일련번호는 업무가 아니라 시스템이 인위적으로 부여한 값이므로 인조식별자에 해당한다."
  },
  {
    "id": 906,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "식별자",
    "question": "주식별자를 구성하는 속성이 2개 이상으로 복잡할 때 이를 하나의 값으로 묶어 대체하기 위해 인조식별자를 도입하는 주된 이유로 가장 적절한 것은?",
    "choices": [
      "본질식별자의 업무적 의미를 더 풍부하게 표현하기 위해서",
      "모든 테이블에서 외래키 사용을 금지하기 위해서",
      "복합식별자의 복잡성을 줄이고 자식 테이블로의 식별자 전파와 조인을 단순화하기 위해서",
      "데이터 중복을 원천적으로 제거하기 위해서"
    ],
    "answer": 2,
    "explanation": "인조식별자는 복합 주식별자의 복잡성을 낮추고, 자식 테이블로 식별자가 길게 전파되는 것을 막아 조인을 단순화하기 위해 도입한다(③). ①은 오히려 의미가 상실되고, ②는 외래키 금지와 무관하며, ④ 인조식별자는 본질키 중복을 막지 못해 오히려 중복이 생길 수 있으므로 모두 틀리다."
  },
  {
    "id": 907,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "데이터 모델과 SQL",
    "question": "다음 슈퍼타입-서브타입 모델링에서 물리적 구현 방식과 그 특징으로 가장 적절하지 않은 것은?\n\n```\n[차량] - 슈퍼타입\n  ├─ [승용차] - 서브타입 (배기량, 연료타입)\n  ├─ [트럭] - 서브타입 (적재중량, 축수)\n  └─ [버스] - 서브타입 (승객정원, 노선번호)\n```",
    "choices": [
      "OneToOne-Type: 슈퍼타입과 서브타입을 각각 별도 테이블로 구현하여 정규화 수준이 높다",
      "All-in-One-Type: 모든 속성을 하나의 테이블에 통합하여 조인 없이 빠른 조회가 가능하다",
      "Plus-Type: 공통 속성은 슈퍼타입 테이블에, 개별 속성은 서브타입 테이블에 분리 저장한다",
      "All-in-One-Type에서는 서브타입 구분자 없이도 데이터 무결성을 자동으로 보장한다"
    ],
    "answer": 3,
    "explanation": "All-in-One-Type 구현에서는 반드시 서브타입 구분자(타입 코드)가 필요하며, 이를 통해 어떤 서브타입에 해당하는지 식별하고 해당하지 않는 서브타입의 속성들은 NULL로 처리해야 합니다. 구분자 없이는 데이터 무결성을 보장할 수 없습니다. ①OneToOne-Type은 정규화 수준이 높음, ②All-in-One-Type은 조인 없는 빠른 조회 가능, ③Plus-Type은 공통/개별 속성 분리 저장이 맞습니다."
  },
  {
    "id": 908,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 DML(Data Manipulation Language)에 해당하지 않는 것은?",
    "choices": [
      "INSERT",
      "SELECT",
      "MERGE",
      "DROP"
    ],
    "answer": 3,
    "explanation": "DML은 데이터를 조작하는 언어로 INSERT, SELECT, UPDATE, DELETE, MERGE가 포함됩니다. DROP은 테이블 구조 자체를 삭제하는 DDL(Data Definition Language) 명령어입니다."
  },
  {
    "id": 909,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 SQL 실행 시 WHERE 조건에 해당하는 행의 개수는?\n\n```sql\n-- PRODUCT 테이블: ID(1,2,3,4,5), PRICE(150,NULL,250,100,300)\nSELECT COUNT(*) FROM PRODUCT \nWHERE PRICE > 200 OR PRICE IS NULL;\n```",
    "choices": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 2,
    "explanation": "PRICE > 200 조건에 해당하는 행은 ID 3(250), ID 5(300)이고, PRICE IS NULL 조건에 해당하는 행은 ID 2(NULL)입니다. OR 연산으로 총 3개 행이 조건을 만족합니다."
  },
  {
    "id": 910,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 실행 결과는? (Oracle)\n\n```sql\nSELECT INSTR('DATABASE', 'A'), SUBSTR('DATABASE', 4, 2) FROM DUAL;\n```",
    "choices": [
      "2, AB",
      "5, AB",
      "2, TA",
      "5, TA"
    ],
    "answer": 0,
    "explanation": "INSTR('DATABASE', 'A')는 문자열 'DATABASE'에서 첫 번째 'A'의 위치인 2를 반환합니다. SUBSTR('DATABASE', 4, 2)는 4번째 문자부터 2글자를 추출하므로 'AB'를 반환합니다. 따라서 결과는 '2, AB'입니다."
  },
  {
    "id": 911,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 DCL(Data Control Language)에 해당하는 것은?",
    "choices": [
      "TRUNCATE",
      "REVOKE",
      "MERGE",
      "RENAME"
    ],
    "answer": 1,
    "explanation": "DCL은 데이터베이스 접근 권한을 제어하는 언어로 GRANT, REVOKE가 해당합니다. TRUNCATE는 DDL, MERGE는 DML, RENAME은 DDL에 속합니다."
  },
  {
    "id": 912,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "DDL",
    "question": "다음 중 CREATE TABLE AS SELECT(CTAS) 사용 시 복사되지 않는 요소로 가장 적절한 것은?",
    "choices": [
      "컬럼명",
      "데이터 타입",
      "CHECK 제약조건",
      "NOT NULL 제약조건"
    ],
    "answer": 2,
    "explanation": "CTAS는 테이블 구조와 데이터를 복사하지만, NOT NULL 제약조건만 복사됩니다. PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK 제약조건과 인덱스는 복사되지 않습니다."
  },
  {
    "id": 913,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 Oracle에서 가장 기본적인 SELECT 문의 구성 요소는?",
    "choices": [
      "FROM 절",
      "WHERE 절",
      "ORDER BY 절",
      "GROUP BY 절"
    ],
    "answer": 0,
    "explanation": "Oracle에서 SELECT 문의 필수 구성 요소는 SELECT 절과 FROM 절입니다. WHERE, ORDER BY, GROUP BY는 선택적 절로, 없어도 쿼리가 실행됩니다."
  },
  {
    "id": 914,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 SQL의 결과는? (Oracle)\n\n```sql\nSELECT COALESCE(NULL, NULL, 'RESULT') FROM DUAL;\n```",
    "choices": [
      "NULL",
      "RESULT",
      "오류",
      "공백"
    ],
    "answer": 1,
    "explanation": "COALESCE 함수는 인수 중 첫 번째로 NULL이 아닌 값을 반환합니다. 첫 번째, 두 번째 인수가 모두 NULL이므로 세 번째 인수인 'RESULT'를 반환합니다."
  },
  {
    "id": 915,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "SQL Server에서 NULL 값이 포함된 컬럼을 오름차순 정렬할 때의 기본 동작은?\n\n```sql\n-- SCORE 테이블: POINT(85, NULL, 92, NULL, 78)\nSELECT * FROM SCORE ORDER BY POINT ASC;\n```",
    "choices": [
      "NULL이 먼저, 그 다음 78, 85, 92 순서",
      "78, 85, 92 순서, 그 다음 NULL",
      "NULL 행은 제외됨",
      "오류 발생"
    ],
    "answer": 0,
    "explanation": "SQL Server에서는 ASC 정렬 시 NULL 값이 가장 작은 값으로 취급되어 먼저 나타납니다. 따라서 NULL, NULL, 78, 85, 92 순서로 정렬됩니다. 이는 Oracle과 반대되는 동작입니다."
  },
  {
    "id": 916,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "서브쿼리",
    "question": "다음 SQL에서 서브쿼리의 실행 순서와 메인쿼리와의 관계로 가장 적절한 것은?\n\n```sql\nSELECT O.ORDER_ID, O.CUSTOMER_ID\nFROM ORDERS O\nWHERE O.ORDER_AMOUNT > (\n    SELECT AVG(ORDER_AMOUNT)\n    FROM ORDERS\n    WHERE CUSTOMER_ID = O.CUSTOMER_ID\n)\nORDER BY O.ORDER_ID;\n```",
    "choices": [
      "서브쿼리가 먼저 한 번 실행되고, 그 결과를 메인쿼리에서 사용",
      "메인쿼리의 각 행마다 서브쿼리가 반복 실행됨 (상관 서브쿼리)",
      "서브쿼리와 메인쿼리가 동시에 병렬로 실행됨",
      "ORDER BY가 먼저 실행된 후 서브쿼리가 실행됨"
    ],
    "answer": 1,
    "explanation": "이는 상관 서브쿼리(Correlated Subquery)입니다. 서브쿼리 내에서 메인쿼리의 테이블 별칭 O를 참조하고 있으므로, 메인쿼리의 각 행마다 서브쿼리가 반복 실행됩니다. ①은 일반 서브쿼리의 동작 방식이고, ③은 존재하지 않는 실행 방식이며, ④는 ORDER BY가 가장 마지막에 실행되므로 틀렸습니다."
  },
  {
    "id": 917,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "TCL",
    "question": "다음 실행 후 SELECT COUNT(*) FROM PRODUCTS;의 결과는?\n\n```sql\nCREATE TABLE PRODUCTS(\n    PRODUCT_ID INT PRIMARY KEY,\n    PRICE DECIMAL(10,2) CHECK(PRICE >= 0)\n);\nINSERT INTO PRODUCTS VALUES(101, 1500.00);\nINSERT INTO PRODUCTS VALUES(102, 2000.00);\nSAVEPOINT SP_A;\nINSERT INTO PRODUCTS VALUES(103, -500.00);\nROLLBACK TO SP_A;\nINSERT INTO PRODUCTS VALUES(104, 2500.00);\nCOMMIT;\n```",
    "choices": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 1,
    "explanation": "101과 102는 정상적으로 입력되고 SAVEPOINT SP_A가 설정됩니다. 103 입력은 CHECK 제약조건 위반으로 해당 문장만 실패합니다. 이후 ROLLBACK TO SP_A를 수행하면 SP_A 시점 상태로 되돌아가며, 마지막으로 104 입력이 성공합니다. 따라서 COMMIT 후 남는 행은 101, 102, 104의 총 3건입니다."
  },
  {
    "id": 918,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "TCL",
    "question": "다음 복잡한 트랜잭션 시나리오에서 최종적으로 ACCOUNTS 테이블에 남는 데이터 건수는?\n\n```sql\nINSERT INTO ACCOUNTS VALUES(1001, 'John', 5000);\nSAVEPOINT SP1;\nINSERT INTO ACCOUNTS VALUES(1002, 'Jane', 3000);\nSAVEPOINT SP2;\nINSERT INTO ACCOUNTS VALUES(1003, 'Bob', 7000);\nROLLBACK TO SP1;\nINSERT INTO ACCOUNTS VALUES(1004, 'Alice', 4000);\nSAVEPOINT SP3;\nINSERT INTO ACCOUNTS VALUES(1005, 'Tom', 6000);\nROLLBACK TO SP3;\nCOMMIT;\n```",
    "choices": [
      "1건",
      "2건",
      "3건",
      "4건"
    ],
    "answer": 1,
    "explanation": "1001 INSERT 후 SP1 설정. 1002 INSERT 후 SP2 설정. 1003 INSERT 후 ROLLBACK TO SP1로 인해 SP1 이후의 모든 작업(1002, 1003)이 취소됩니다. 1004 INSERT 후 SP3 설정. 1005 INSERT 후 ROLLBACK TO SP3로 인해 1005만 취소됩니다. 최종적으로 1001, 1004 총 2건이 남습니다."
  },
  {
    "id": 919,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "FOREIGN KEY 제약조건에 대한 설명으로 가장 적절하지 않은 것은?",
    "choices": [
      "참조하는 테이블의 PRIMARY KEY 또는 UNIQUE KEY를 참조해야 함",
      "참조 무결성을 보장하여 존재하지 않는 값을 참조할 수 없음",
      "CASCADE 옵션을 통해 참조되는 행이 삭제될 때 함께 삭제 가능",
      "하나의 테이블에는 최대 하나의 FOREIGN KEY만 생성 가능"
    ],
    "answer": 3,
    "explanation": "하나의 테이블에는 여러 개의 FOREIGN KEY를 생성할 수 있습니다. ①은 FOREIGN KEY가 참조할 수 있는 대상에 대한 올바른 설명이고, ②는 참조 무결성의 기본 개념이며, ③은 CASCADE DELETE 옵션에 대한 올바른 설명입니다."
  },
  {
    "id": 920,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "테이블 생성 시 제약조건에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "NOT NULL 제약조건은 테이블 생성 후에도 언제든지 추가할 수 있음",
      "CHECK 제약조건은 다른 테이블의 컬럼을 참조할 수 있음",
      "DEFAULT 값은 INSERT 시 해당 컬럼을 명시하지 않을 때 자동으로 적용됨",
      "PRIMARY KEY는 여러 개의 컬럼에 각각 별도로 설정할 수 있음"
    ],
    "answer": 2,
    "explanation": "DEFAULT 값은 INSERT 문에서 해당 컬럼을 생략하거나 DEFAULT 키워드를 사용할 때 자동으로 적용됩니다. ①은 기존 데이터에 NULL이 있으면 NOT NULL 제약을 추가할 수 없으므로 틀렸고, ②는 CHECK 제약이 같은 행의 컬럼만 참조 가능하므로 틀렸으며, ④는 PRIMARY KEY가 테이블당 하나만 가능하므로 틀렸습니다."
  },
  {
    "id": 921,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "GROUP BY",
    "question": "집계함수와 GROUP BY에 대한 설명으로 가장 적절하지 않은 것은?",
    "choices": [
      "COUNT(*)는 NULL 값을 포함한 모든 행의 개수를 반환함",
      "COUNT(컬럼명)은 해당 컬럼의 NULL이 아닌 값의 개수만 반환함",
      "GROUP BY 절에 명시된 컬럼은 반드시 SELECT 절에도 포함되어야 함",
      "SUM, AVG 함수는 NULL 값을 제외하고 계산함"
    ],
    "answer": 2,
    "explanation": "GROUP BY 절에 명시된 컬럼이 반드시 SELECT 절에 포함될 필요는 없습니다. SELECT 절에는 GROUP BY 컬럼이나 집계함수만 사용할 수 있지만, GROUP BY에 있는 모든 컬럼을 SELECT에서 사용할 의무는 없습니다. ①②④는 모두 올바른 설명입니다."
  },
  {
    "id": 922,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 결과 건수는?\n\n```sql\n-- ITEMS 테이블: ITEM_CODE 컬럼에 'PRD001', 'PRD0012', 'PRD01', 'PRDA001', 'PRD0001' 값 존재\nSELECT * FROM ITEMS WHERE ITEM_CODE LIKE 'PRD_0%';\n```",
    "choices": [
      "1건",
      "2건",
      "3건",
      "4건"
    ],
    "answer": 3,
    "explanation": "LIKE 패턴 'PRD_0%'에서 _는 정확히 한 글자, %는 0개 이상의 임의 문자열을 의미합니다. 즉 'PRD' 다음에 한 글자가 오고, 그 다음 글자가 '0'인 문자열이 매칭됩니다.\n\n- PRD001 → 매칭\n- PRD0012 → 매칭\n- PRD01 → 불일치\n- PRDA001 → 매칭\n- PRD0001 → 매칭\n\n따라서 총 4건이 조회됩니다."
  },
  {
    "id": 923,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 복합 함수 조합의 실행 결과로 가장 적절한 것은? (Oracle)\n\n```sql\nSELECT \n    CASE \n        WHEN COALESCE(NULL, '', NULL) IS NULL THEN 'NULL_RESULT'\n        WHEN COALESCE(NULL, '', NULL) = '' THEN 'EMPTY_STRING'\n        ELSE 'OTHER_VALUE'\n    END AS RESULT\nFROM DUAL;\n```",
    "choices": [
      "NULL_RESULT",
      "EMPTY_STRING",
      "OTHER_VALUE",
      "오류 발생"
    ],
    "answer": 0,
    "explanation": "Oracle에서는 빈 문자열('')을 NULL로 취급합니다. 따라서 COALESCE(NULL, '', NULL)의 결과는 NULL이 되고, 첫 번째 WHEN 조건인 IS NULL이 참이므로 'NULL_RESULT'가 반환됩니다."
  },
  {
    "id": 924,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 실행 결과는? (Oracle)\n\n```sql\nSELECT CASE WHEN STATUS = 'Y' THEN \n         CASE WHEN SCORE >= 80 THEN 'PASS' ELSE 'FAIL' END \n       ELSE 'PENDING' END AS RESULT\nFROM (SELECT 'Y' AS STATUS, 75 AS SCORE FROM DUAL);\n```",
    "choices": [
      "PASS",
      "FAIL",
      "PENDING",
      "NULL"
    ],
    "answer": 1,
    "explanation": "외부 CASE에서 STATUS='Y'가 참이므로 내부 CASE가 실행됩니다. SCORE=75는 80 이상이 아니므로 ELSE 절이 적용되어 'FAIL'이 반환됩니다."
  },
  {
    "id": 925,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 [STUDENT] 테이블에 대한 집계 함수의 결과는?\n\n```sql\n[STUDENT] 테이블\nID: 1, 2, 3\nAGE: 20, 25, 30\nSCORE: 85, 90, 95\n\nSELECT COUNT(ID), MAX(AGE), MIN(SCORE) FROM STUDENT;\n```",
    "choices": [
      "3, 30, 85",
      "3, 25, 90",
      "1, 30, 85",
      "3, 20, 95"
    ],
    "answer": 0,
    "explanation": "COUNT(ID)는 전체 행 수 3개, MAX(AGE)는 최대값 30, MIN(SCORE)는 최소값 85를 반환합니다."
  },
  {
    "id": 926,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 SQL 구문에 오류가 있는 것은?",
    "choices": [
      "SELECT * FROM PRODUCT WHERE PRICE > 1000;",
      "SELECT NAME FROM PRODUCT;",
      "SELECT COUNT(*) FROM PRODUCT WHERE CATEGORY = 'A';",
      "SELECT PRODUCT FROM WHERE PRICE < 500;"
    ],
    "answer": 3,
    "explanation": "④번은 FROM 절에서 테이블명이 누락되어 구문 오류가 있습니다. 올바른 형태는 'SELECT PRODUCT FROM [테이블명] WHERE PRICE < 500;'이어야 합니다. ①번은 조건부 전체 조회, ②번은 특정 컬럼 조회, ③번은 집계함수를 사용한 조건부 조회로 모두 올바른 SQL 구문입니다."
  },
  {
    "id": 927,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "GROUP BY",
    "question": "다음 테이블과 SQL에 대한 실행 결과는?\n\n```sql\n[SALES] 테이블\nREGION: 서울, 서울, 부산, 부산\nAMOUNT: 100, 200, 150, 250\n\nSELECT REGION, COUNT(*) CNT, SUM(AMOUNT) TOTAL\nFROM SALES \nGROUP BY REGION\nHAVING COUNT(*) >= 2;\n```",
    "choices": [
      "서울: 2건, 300 / 부산: 2건, 400",
      "서울: 1건, 300 / 부산: 1건, 400",
      "전체: 4건, 700",
      "오류 발생"
    ],
    "answer": 0,
    "explanation": "GROUP BY REGION으로 지역별 그룹화 후, HAVING COUNT(*) >= 2 조건으로 2건 이상인 그룹만 조회합니다. 서울(2건, 300), 부산(2건, 400) 모두 조건을 만족합니다."
  },
  {
    "id": 928,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 SQL의 실행 결과 행수는?\n\n[DEPT] DEPTNO: 10,20,30\n[EMP] DEPTNO: 10,10,20,20,30\n\n```sql\nSELECT DEPTNO FROM DEPT \nUNION \nSELECT DEPTNO FROM EMP;\n```",
    "choices": [
      "3건",
      "5건",
      "6건",
      "8건"
    ],
    "answer": 0,
    "explanation": "UNION은 중복을 제거하는 집합연산자입니다. DEPT에서 10,20,30이 조회되고 EMP에서 10,10,20,20,30이 조회되지만, UNION에 의해 중복값이 제거되어 최종적으로 10,20,30 총 3건이 결과로 반환됩니다. ②는 EMP 테이블의 행수이고, ③은 잘못된 계산이며, ④는 두 테이블의 전체 행수입니다."
  },
  {
    "id": 929,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "다음 윈도우 함수의 결과에서 SALARY=2000인 직원의 TOTAL_SALARY 값은?\n\n[EMPLOYEE] NAME: A,B,C,D / SALARY: 1000,2000,2000,3000\n\n```sql\nSELECT NAME, SALARY,\n       SUM(SALARY) OVER(ORDER BY SALARY \n                        ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS TOTAL_SALARY\nFROM EMPLOYEE;\n```",
    "choices": [
      "4000",
      "5000",
      "6000",
      "직원마다 다름"
    ],
    "answer": 3,
    "explanation": "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING은 현재 행을 기준으로 앞의 1개 행과 뒤의 1개 행을 포함한 범위에서 집계합니다. SALARY=2000인 두 직원은 각각 다른 물리적 행 위치를 가지므로 계산 결과가 서로 다를 수 있습니다. 예를 들어 한 직원은 1000+2000+2000=5000, 다른 직원은 2000+2000+3000=7000이 됩니다."
  },
  {
    "id": 930,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUPING",
    "question": "다음 그룹화 함수들의 결과 행수를 비교할 때 가장 적절한 것은?\n\n[SALES] REGION: A,A,B,B / PRODUCT: X,Y,X,Y / AMOUNT: 100,200,150,250\n\n```sql\nSQL1: SELECT REGION, PRODUCT, SUM(AMOUNT) FROM SALES GROUP BY GROUPING SETS((REGION, PRODUCT), (REGION), ());\nSQL2: SELECT REGION, PRODUCT, SUM(AMOUNT) FROM SALES GROUP BY CUBE(REGION, PRODUCT);\n```",
    "choices": [
      "SQL1과 SQL2는 동일한 행수",
      "SQL1이 SQL2보다 1개 행 적음",
      "SQL1이 SQL2보다 1개 행 많음",
      "SQL1이 SQL2보다 2개 행 적음"
    ],
    "answer": 3,
    "explanation": "SQL1의 GROUPING SETS는 (REGION, PRODUCT), (REGION), ()의 3가지 그룹핑을 생성합니다. 결과 행수는 상세 4행 + 지역별 2행 + 총계 1행으로 총 7행입니다. SQL2의 CUBE(REGION, PRODUCT)는 (REGION, PRODUCT), (REGION), (PRODUCT), ()를 생성하므로 상세 4행 + 지역별 2행 + 상품별 2행 + 총계 1행으로 총 9행입니다. 따라서 SQL1이 SQL2보다 2개 행 적습니다."
  },
  {
    "id": 931,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 테이블에서 부서별 직급 순서대로 번호를 매기는 ROW_NUMBER 함수의 결과는?\n\n[STAFF] DEPT: HR,HR,IT,IT / POSITION: M,S,M,S / NAME: A,B,C,D\n\n```sql\nSELECT DEPT, POSITION, NAME,\n       ROW_NUMBER() OVER(PARTITION BY DEPT ORDER BY POSITION) AS RN\nFROM STAFF;\n```",
    "choices": [
      "HR부서 M=1, S=2 / IT부서 M=1, S=2",
      "HR부서 M=2, S=1 / IT부서 M=2, S=1",
      "전체적으로 1,2,3,4 순서대로",
      "POSITION별로 1,1,2,2 순서"
    ],
    "answer": 0,
    "explanation": "ROW_NUMBER() OVER(PARTITION BY DEPT ORDER BY POSITION)는 부서별로 파티션을 나누고 POSITION으로 정렬하여 순번을 매깁니다. 알파벳 순서로 M이 S보다 먼저 오므로, 각 부서에서 M=1, S=2가 됩니다. ②는 정렬 순서를 잘못 이해한 경우, ③은 PARTITION BY를 무시한 경우, ④는 ROW_NUMBER 대신 다른 함수의 결과입니다."
  },
  {
    "id": 932,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "OUTER JOIN",
    "question": "다음 SQL의 결과 건수는?\n\n[CUSTOMER] ID: 1,2,3,4\n[ORDER] CUSTOMER_ID: 1,1,2,3\n\n```sql\nSELECT C.ID, O.CUSTOMER_ID\nFROM CUSTOMER C\nRIGHT OUTER JOIN ORDER O ON C.ID = O.CUSTOMER_ID;\n```",
    "choices": [
      "3건",
      "4건",
      "6건",
      "7건"
    ],
    "answer": 1,
    "explanation": "RIGHT OUTER JOIN은 오른쪽 테이블(ORDER)의 모든 행을 포함하고 왼쪽 테이블(CUSTOMER)에서 매칭되는 행을 결합합니다. ORDER 테이블에 4건의 데이터가 있으므로 결과는 4건입니다: (1,1), (1,1), (2,2), (3,3). CUSTOMER의 ID=4는 ORDER에 매칭되지 않으므로 결과에 포함되지 않습니다. ①은 중복을 제거한 경우, ③④는 다른 조인 방식의 결과입니다."
  },
  {
    "id": 933,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 중 특정 조건을 만족하는 행이 '존재하지 않는' 데이터를 조회하는 가장 적절한 방법은?\n\n학생 중에서 '수학' 과목을 수강하지 않은 학생을 찾는 경우",
    "choices": [
      "SELECT * FROM 학생 WHERE 학번 IN (SELECT 학번 FROM 수강 WHERE 과목명='수학')",
      "SELECT * FROM 학생 WHERE 학번 NOT IN (SELECT 학번 FROM 수강 WHERE 과목명='수학')",
      "SELECT * FROM 학생 WHERE EXISTS (SELECT 1 FROM 수강 WHERE 수강.학번=학생.학번 AND 과목명='수학')",
      "SELECT * FROM 학생 WHERE NOT EXISTS (SELECT 1 FROM 수강 WHERE 수강.학번=학생.학번 AND 과목명='수학')"
    ],
    "answer": 3,
    "explanation": "수학 과목을 수강하지 않은 학생을 찾으려면 NOT EXISTS를 사용해야 합니다. NOT EXISTS는 서브쿼리 결과가 존재하지 않을 때 TRUE를 반환하므로, 해당 학생이 수학 과목을 수강하지 않은 경우에만 조회됩니다. ①은 수강한 학생을 조회, ②는 NULL 처리 문제가 있을 수 있음, ③은 수강한 학생을 조회하는 경우입니다."
  },
  {
    "id": 934,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "정규화",
    "question": "다음 정규표현식 패턴 중에서 '영문자 3글자 + 숫자 2글자' 형태의 문자열과 정확히 매칭되는 것은?\n\n예시: ABC12, XYZ99",
    "choices": [
      "[A-Z]{3}[0-9]{2}",
      "[A-Z]*[0-9]*",
      "[A-Z]+[0-9]+",
      "[A-Z]?[0-9]?"
    ],
    "answer": 0,
    "explanation": "정확히 영문자 3글자와 숫자 2글자를 매칭하려면 {n} 수량자를 사용해야 합니다. [A-Z]{3}은 영문자 정확히 3개, [0-9]{2}는 숫자 정확히 2개를 의미합니다. ②의 *는 0개 이상으로 너무 광범위하고, ③의 +는 1개 이상으로 개수가 불확정적이며, ④의 ?는 0개 또는 1개로 조건에 맞지 않습니다."
  },
  {
    "id": 935,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 UNPIVOT 연산의 결과로 가장 적절한 것은?\n\n[SCORE]\n\n| 학번 | 국어 | 영어 | 수학 |\n|------|------|------|------|\n| 1 | 80 | 70 | 90 |\n| 2 | 90 | 85 | 95 |\n\n```sql\nSELECT 학번, 과목, 점수\nFROM SCORE\nUNPIVOT (점수 FOR 과목 IN (국어, 영어, 수학));\n```",
    "choices": [
      "2행 3열 테이블",
      "3행 2열 테이블",
      "6행 3열 테이블",
      "열 구조는 동일하고 행만 증가"
    ],
    "answer": 2,
    "explanation": "UNPIVOT은 열을 행으로 변환하는 연산입니다. 원본 테이블의 2개 행에서 각각 3개 과목(국어, 영어, 수학)이 행으로 변환되므로 총 6개 행이 생성됩니다. 결과 테이블의 열은 학번, 과목, 점수 3개가 됩니다. ①은 행과 열을 잘못 계산한 경우, ②는 PIVOT의 결과와 혼동한 경우, ④는 UNPIVOT의 기본 동작을 잘못 이해한 경우입니다."
  },
  {
    "id": 936,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 중 Oracle 계층형 질의에서 부모-자식 관계를 정의하는 절로 가장 적절한 것은?",
    "choices": [
      "START WITH",
      "CONNECT BY",
      "LEVEL",
      "SYS_CONNECT_BY_PATH"
    ],
    "answer": 1,
    "explanation": "CONNECT BY는 계층형 질의에서 부모와 자식 간의 관계 조건을 정의하는 절입니다. START WITH는 계층 구조의 시작점(루트)을 지정하고, LEVEL은 계층의 깊이를 나타내는 의사컬럼이며, SYS_CONNECT_BY_PATH는 루트부터 현재 행까지의 경로를 표시하는 함수입니다."
  },
  {
    "id": 937,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 테이블에서 PIVOT 연산을 수행할 때 결과로 가장 적절한 것은?\n\n```sql\n학생테이블: 이름, 과목, 성적\n박민수, 국어, 85\n박민수, 영어, 90\n김지영, 국어, 95\n김지영, 영어, 80\n\nSELECT * FROM 학생테이블\nPIVOT (AVG(성적) FOR 과목 IN ('국어' AS KOR, '영어' AS ENG));\n```",
    "choices": [
      "이름별로 2행, 과목별로 2열 생성",
      "이름별로 1행씩, 과목이 열로 변환되어 총 2행 생성",
      "과목별로 1행씩, 이름이 열로 변환되어 총 2행 생성",
      "모든 조합으로 4행 4열 생성"
    ],
    "answer": 1,
    "explanation": "PIVOT 연산은 행을 열로 변환합니다. 이 경우 '이름'이 행의 기준이 되고, '과목'이 열로 변환되어 박민수와 김지영 각각 1행씩 총 2행이 생성되며, KOR과 ENG 열이 추가됩니다. ①은 행 개념이 잘못되었고, ③은 PIVOT 방향이 반대이며, ④는 결과 구조를 잘못 이해한 것입니다."
  },
  {
    "id": 938,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "다음 윈도우 함수의 실행 결과로 가장 적절한 것은?\n\n```sql\n직원테이블: 이름, 급여\nA, 3000\nB, 2000\nC, 4000\nD, 1000\n\nSELECT 이름,\n       SUM(급여) OVER(ORDER BY 급여 \n                     ROWS BETWEEN 1 PRECEDING AND CURRENT ROW) AS 이동합계\nFROM 직원테이블;\n```",
    "choices": [
      "D: 1000, C: 5000, B: 6000, A: 7000",
      "D: 1000, B: 3000, A: 7000, C: 7000",
      "D: 1000, B: 3000, A: 5000, C: 7000",
      "D: 1000, B: 2000, C: 4000, A: 3000"
    ],
    "answer": 2,
    "explanation": "급여 순으로 정렬하면 D(1000), B(2000), A(3000), C(4000) 순입니다. ROWS BETWEEN 1 PRECEDING AND CURRENT ROW는 이전 1행과 현재 행의 합을 구합니다. D: 1000(자신만), B: 1000+2000=3000, A: 2000+3000=5000, C: 3000+4000=7000이 됩니다. ①②④는 계산이나 정렬 순서가 잘못되었습니다."
  },
  {
    "id": 939,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "정규화",
    "question": "다음 중 정규표현식 기본 메타문자에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      ". (점)은 숫자만을 의미한다",
      "* (별표)는 바로 앞 문자가 0번 이상 반복됨을 의미한다",
      "^ (캐럿)은 문자열의 끝을 의미한다",
      "[0-9]는 0부터 9까지의 문자를 제외한 모든 문자를 의미한다"
    ],
    "answer": 1,
    "explanation": "* (별표)는 바로 앞 문자가 0번 이상 반복됨을 나타내는 정규표현식 메타문자입니다. ① . (점)은 개행문자를 제외한 모든 단일 문자를 의미합니다. ③ ^ (캐럿)은 문자열의 시작을 의미하며, 끝은 $ (달러)입니다. ④ [0-9]는 0부터 9까지의 숫자 문자 중 하나를 의미합니다."
  },
  {
    "id": 940,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 중 NOT EXISTS를 NOT IN으로 변환할 때 주의사항으로 가장 적절한 것은?\n\n```sql\n-- 원본 쿼리\nSELECT 고객번호 FROM 고객 A \nWHERE NOT EXISTS (\n    SELECT 1 FROM 주문 B \n    WHERE A.고객번호 = B.고객번호 \n    AND B.주문상태 = '취소'\n);\n```",
    "choices": [
      "NOT IN으로 변환 시 연결조건을 생략해도 동일한 결과를 얻는다",
      "NOT IN 서브쿼리에 NULL이 포함되면 예상과 다른 결과가 나올 수 있다",
      "NOT EXISTS와 NOT IN은 항상 동일한 성능을 보인다",
      "NOT IN 변환 시 DISTINCT를 반드시 사용해야 한다"
    ],
    "answer": 1,
    "explanation": "NOT IN 연산에서 서브쿼리 결과에 NULL이 포함되면, 3-valued logic에 의해 전체 결과가 UNKNOWN이 되어 아무 행도 반환되지 않을 수 있습니다. 반면 NOT EXISTS는 NULL 값의 영향을 받지 않습니다. 따라서 NOT EXISTS를 NOT IN으로 바꿀 때는 NULL 여부를 반드시 고려해야 합니다."
  },
  {
    "id": 941,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "서브쿼리",
    "question": "다음 중 서브쿼리의 기본 특성으로 가장 적절하지 않은 것은?",
    "choices": [
      "서브쿼리는 메인쿼리보다 먼저 실행된다",
      "서브쿼리는 괄호로 묶어야 한다",
      "일반적인 서브쿼리에서는 ORDER BY 절을 사용할 수 없다",
      "단일행 서브쿼리는 =, <, > 등의 연산자와 함께 사용한다"
    ],
    "answer": 0,
    "explanation": "①이 가장 적절하지 않습니다. 상관 서브쿼리(Correlated Subquery)의 경우 메인쿼리의 각 행에 따라 서브쿼리가 반복 실행되므로, 항상 메인쿼리보다 먼저 한 번만 실행된다고 볼 수 없습니다. ②, ③, ④는 일반적인 서브쿼리 규칙에 대한 올바른 설명입니다."
  },
  {
    "id": 942,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "다음 윈도우 함수들의 결과 차이로 가장 적절한 것은?\n\n```sql\n점수테이블: 학번, 점수\n1001, 95\n1002, 95\n1003, 85\n1004, 75\n\nRANK() OVER(ORDER BY 점수 DESC) vs \nDENSE_RANK() OVER(ORDER BY 점수 DESC)\n```",
    "choices": [
      "RANK: 1,1,3,4 / DENSE_RANK: 1,1,2,3",
      "RANK: 1,2,3,4 / DENSE_RANK: 1,1,2,3",
      "RANK: 1,1,2,3 / DENSE_RANK: 1,1,3,4",
      "두 함수는 항상 동일한 결과를 반환한다"
    ],
    "answer": 0,
    "explanation": "RANK() 함수는 동일한 순위가 있을 때 다음 순위를 건너뜁니다. 95점이 2명이므로 1,1 다음은 3위가 됩니다. DENSE_RANK()는 순위를 건너뛰지 않고 연속으로 부여하므로 1,1 다음은 2위가 됩니다. 따라서 RANK: 1,1,3,4, DENSE_RANK: 1,1,2,3이 됩니다."
  },
  {
    "id": 943,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "DCL",
    "question": "다음 SQL 문의 실행 결과로 가장 적절한 것은?\n\n```sql\nGRANT UPDATE, DELETE ON DEPT TO USER2 WITH GRANT OPTION;\n```",
    "choices": [
      "USER2는 DEPT 테이블에 대한 UPDATE, DELETE 권한만 획득한다",
      "USER2는 DEPT 테이블의 모든 권한을 획득한다",
      "USER2는 다른 사용자에게 UPDATE, DELETE 권한을 부여할 수 있다",
      "USER2는 DEPT 테이블을 삭제할 수 있다"
    ],
    "answer": 2,
    "explanation": "WITH GRANT OPTION이 포함된 GRANT 문은 해당 사용자가 받은 권한을 다른 사용자에게도 부여할 수 있게 해줍니다. ① UPDATE, DELETE 권한을 받는 것은 맞지만 WITH GRANT OPTION의 핵심 기능을 놓쳤습니다. ② 모든 권한이 아닌 지정된 권한만 부여됩니다. ④ DELETE 권한은 행 삭제이며 테이블 삭제(DROP)와는 다릅니다."
  },
  {
    "id": 944,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "다음 중 `EMP` 테이블에서 부서번호(DEPTNO)가 10인 사원만 `EMP_BACKUP` 테이블로 적재하는 SQL로 가장 적절한 것은? (두 테이블의 컬럼 구조는 `(EMPNO, ENAME, DEPTNO)`로 동일하다)",
    "choices": [
      "`INSERT INTO EMP_BACKUP VALUES (SELECT * FROM EMP WHERE DEPTNO = 10);`",
      "`INSERT INTO EMP_BACKUP SET SELECT * FROM EMP WHERE DEPTNO = 10;`",
      "`INSERT EMP_BACKUP SELECT * FROM EMP WHERE DEPTNO = 10;`",
      "`INSERT INTO EMP_BACKUP SELECT * FROM EMP WHERE DEPTNO = 10;`"
    ],
    "answer": 3,
    "explanation": "다른 테이블의 조회 결과를 적재할 때는 `INSERT INTO 대상테이블 SELECT ...` 구문을 사용하며, 이때 VALUES 키워드는 쓰지 않는다. ①은 `VALUES (...)` 안에 SELECT를 넣은 잘못된 형태, ②의 `SET ... SELECT`는 존재하지 않는 구문, ③은 `INTO`가 빠진 비표준 형태이다. ④가 `INSERT ~ SELECT`의 올바른 표준 구문이다."
  },
  {
    "id": 945,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "다음 중 DDL(Data Definition Language)에 해당하는 명령어는?",
    "choices": [
      "ROLLBACK",
      "ALTER",
      "REVOKE",
      "INSERT"
    ],
    "answer": 1,
    "explanation": "DDL(Data Definition Language)은 데이터베이스 객체의 구조를 정의하거나 변경하는 언어로 CREATE, ALTER, DROP, TRUNCATE 등이 있습니다. ① ROLLBACK은 TCL(Transaction Control Language)입니다. ③ REVOKE는 DCL(Data Control Language)입니다. ④ INSERT는 DML(Data Manipulation Language)입니다."
  },
  {
    "id": 946,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "DCL",
    "question": "다음 상황에서 USER3의 권한 상태로 가장 적절한 것은?\n\n```sql\n-- 상황 1\nGRANT SELECT ON PRODUCT TO USER3 WITH GRANT OPTION;\n-- 상황 2\nUSER3가 다른 사용자에게 SELECT 권한을 부여함\n-- 상황 3\nREVOKE SELECT ON PRODUCT FROM USER3;\n```",
    "choices": [
      "USER3만 권한을 잃고, USER3가 부여한 권한은 유지된다",
      "USER3와 USER3가 부여한 모든 사용자의 권한이 회수된다",
      "REVOKE가 실행되지 않고 오류가 발생한다",
      "USER3의 권한만 일시 정지되고 나중에 복원된다"
    ],
    "answer": 1,
    "explanation": "WITH GRANT OPTION으로 부여된 권한을 REVOKE할 때는 해당 사용자뿐만 아니라 그 사용자가 다른 사용자에게 부여한 모든 권한도 연쇄적으로 회수됩니다. 이는 권한의 일관성을 유지하기 위한 일반적인 동작입니다. ①은 잘못된 설명이며, ③과 ④도 해당하지 않습니다."
  },
  {
    "id": 947,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "`TARGET(ID PK, QTY)`에는 `(1, 100)`만 있고, `SRC`에는 `(1, 50)`, `(2, 30)`이 있다. 다음 MERGE 실행 후 `TARGET`의 상태로 옳은 것은?\n\n```sql\nMERGE INTO TARGET T\nUSING SRC S\nON (T.ID = S.ID)\nWHEN MATCHED THEN\n    UPDATE SET T.QTY = T.QTY + S.QTY\nWHEN NOT MATCHED THEN\n    INSERT (ID, QTY) VALUES (S.ID, S.QTY);\n```",
    "choices": [
      "(1, 50), (2, 30)",
      "(1, 150), (2, 30)",
      "(1, 100), (2, 30)",
      "(1, 150)"
    ],
    "answer": 1,
    "explanation": "SRC의 ID=1은 TARGET에 존재하므로 MATCHED 분기로 UPDATE되어 QTY가 100+50=150이 된다. SRC의 ID=2는 TARGET에 없으므로 NOT MATCHED 분기로 INSERT되어 (2, 30)이 추가된다. 따라서 결과는 (1, 150), (2, 30)이다. MERGE는 매칭 여부에 따라 UPDATE/INSERT를 한 번에 처리하는 UPSERT 구문이다."
  },
  {
    "id": 1968,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "다음 중 보조 식별자(대체 식별자)의 특성으로 가장 적절하지 않은 것은?",
    "choices": [
      "엔터티 내에서 각 인스턴스를 유일하게 구분할 수 있다",
      "주 식별자가 없을 때 대신 사용할 수 있다",
      "하나의 엔터티에 여러 개 존재할 수 있다",
      "업무적으로 의미 있는 식별 수단이 될 수 있다"
    ],
    "answer": 1,
    "explanation": "보조 식별자(대체 식별자)는 주 식별자와는 별개로 존재하는 식별자입니다. ①③④는 모두 보조 식별자의 올바른 특성입니다. ②가 틀린 이유는 보조 식별자는 주 식별자를 대체하는 것이 아니라 보완하는 역할을 하며, 모든 엔터티는 반드시 주 식별자를 가져야 하기 때문입니다."
  },
  {
    "id": 1969,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "다음은 데이터 모델링 과정에서 발생할 수 있는 상황들입니다. 이 중 하위 단계의 구현 세부사항이 상위 단계 모델을 역으로 변경하게 만들어, 단계별 독립성 원칙을 가장 심각하게 위배하는 것은?",
    "choices": [
      "개념 모델링 단계에서 성능을 고려하여 정규화를 완전히 생략한다",
      "논리 모델링 단계에서 특정 DBMS의 데이터 타입을 미리 결정한다",
      "물리 모델링 단계에서 인덱스 설계를 위해 논리 모델의 속성을 추가한다",
      "개념 모델링 단계에서 업무 규칙 변경으로 인해 엔터티 관계를 수정한다"
    ],
    "answer": 2,
    "explanation": "③이 정답입니다. 물리적 성능 최적화(인덱스)를 위해 논리 모델의 속성을 역으로 추가하는 것은 하위 단계가 상위 단계를 오염시키는 것으로, 단계별 독립성 원칙을 가장 심각하게 위배합니다. ②도 바람직하지 않지만 논리 단계에서 물리 요소를 일부 앞당겨 고려한 수준이고, ①은 단계 혼재라기보다 개념 단계의 잘못된 접근이며, ④는 업무 요구사항 변경에 따른 정상적인 수정입니다."
  },
  {
    "id": 1970,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "다음 중 단일값 속성의 특징으로 가장 적절한 것은?",
    "choices": [
      "하나의 속성에 여러 개의 값을 동시에 저장할 수 있다",
      "각 인스턴스마다 해당 속성은 정확히 하나의 값만 가진다",
      "다른 속성들과 결합하여 복합적인 의미를 나타낸다",
      "다른 속성값들로부터 계산되어 도출되는 값이다"
    ],
    "answer": 1,
    "explanation": "단일값 속성은 각 엔터티 인스턴스에 대해 정확히 하나의 값만을 가지는 속성입니다. ②가 정답입니다. ①은 다중값 속성의 특징, ③은 복합 속성의 특징, ④는 파생 속성의 특징입니다."
  },
  {
    "id": 1971,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "다음 중 관계의 선택성(Optionality)에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "한 엔터티의 인스턴스가 관계를 맺을 수 있는 상대방 인스턴스의 최대 개수를 나타낸다",
      "관계에 참여하는 엔터티 인스턴스가 반드시 존재해야 하는지 선택적인지를 나타낸다",
      "두 엔터티 간의 관계가 식별관계인지 비식별관계인지를 구분하는 기준이다",
      "관계선의 방향성과 읽는 순서를 결정하는 요소이다"
    ],
    "answer": 1,
    "explanation": "관계의 선택성(Optionality)은 관계에 참여하는 엔터티 인스턴스가 필수적으로 존재해야 하는지(Mandatory) 아니면 선택적으로 존재할 수 있는지(Optional)를 나타내는 개념입니다. ②가 정답입니다. ①은 관계차수(Cardinality)의 개념, ③은 식별자 상속 여부와 관련된 개념, ④는 관계명과 관련된 개념입니다."
  },
  {
    "id": 1972,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "다음 중 슈퍼타입과 서브타입의 관계에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "슈퍼타입의 모든 속성은 서브타입에서 반드시 재정의되어야 한다",
      "하나의 서브타입은 여러 개의 슈퍼타입을 동시에 가질 수 있다",
      "서브타입은 슈퍼타입의 주 식별자를 상속받아 자신의 주 식별자로 사용한다",
      "슈퍼타입과 서브타입은 서로 독립적인 별개의 엔터티이다"
    ],
    "answer": 2,
    "explanation": "슈퍼타입과 서브타입의 관계에서 서브타입은 슈퍼타입의 주 식별자를 그대로 상속받아 자신의 주 식별자로 사용합니다. ③이 정답입니다. ①은 틀린 설명으로 슈퍼타입의 속성은 상속되는 것이지 재정의되는 것이 아닙니다. ②는 일반적으로 하나의 서브타입은 하나의 슈퍼타입만을 가집니다. ④는 틀린 설명으로 이들은 상속 관계에 있는 연관된 엔터티입니다."
  },
  {
    "id": 1973,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "데이터 모델과 SQL",
    "question": "데이터베이스에서 트랜잭션의 ACID 속성 중 '원자성(Atomicity)'의 의미로 가장 적절한 것은?",
    "choices": [
      "트랜잭션의 실행 결과가 데이터베이스에 영구적으로 저장되어야 함",
      "트랜잭션은 모두 실행되거나 모두 실행되지 않아야 함",
      "여러 트랜잭션이 동시에 실행되어도 순차 실행과 같은 결과를 보장해야 함",
      "트랜잭션 실행 전후에 데이터베이스가 일관된 상태를 유지해야 함"
    ],
    "answer": 1,
    "explanation": "원자성(Atomicity)은 트랜잭션이 완전히 수행되거나 전혀 수행되지 않아야 함을 의미합니다. ①은 지속성(Durability), ③은 격리성(Isolation), ④는 일관성(Consistency)에 해당합니다."
  },
  {
    "id": 1974,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "NULL",
    "question": "NULL(널)의 의미로 가장 적절한 것은?",
    "choices": [
      "값이 0(영)임을 명확히 표현한 것이다.",
      "공백(빈 문자열) 한 칸이 저장된 것이다.",
      "시스템이 기본으로 부여한 음수 값이다.",
      "아직 알 수 없거나 해당 사항이 없어 값이 존재하지 않는 상태다."
    ],
    "answer": 3,
    "explanation": "NULL은 데이터가 존재하지 않는 상태, 즉 '아직 알 수 없음(미지)' 또는 '해당 사항 없음'을 나타낸다. 따라서 ④가 정답이다. NULL은 숫자 0(①)도, 공백 문자(②)도 아니며 0은 명백한 값이고 공백도 길이 1의 문자값이라 NULL과 구분된다. 시스템이 부여한 특정 음수 값(③)도 아니다."
  },
  {
    "id": 1975,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "다음 테이블에서 함수 종속 관계를 분석할 때, 위반하고 있는 정규형으로 가장 적절한 것은?\n\n[직원] 사원번호(PK), 부서코드, 부서명, 근무지역\n※ 부서코드 → 부서명, 근무지역",
    "choices": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "answer": 2,
    "explanation": "사원번호 → 부서코드 → 부서명, 근무지역으로 이행적 함수 종속이 존재합니다. 이는 제3정규형을 위반합니다. 제1정규형과 제2정규형은 만족하며, BCNF까지는 분석할 필요가 없습니다."
  },
  {
    "id": 1976,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "NULL",
    "question": "다음 중 NULL을 다른 값으로 치환하거나 NULL을 처리하기 위한 함수로 적절하지 않은 것은?",
    "choices": [
      "`NVL(COMM, 0)` — COMM이 NULL이면 0으로 바꾼다.",
      "`COALESCE(COMM, BONUS, 0)` — 앞에서부터 NULL이 아닌 첫 값을 반환한다.",
      "`NULLIF(A, B)` — A와 B가 같으면 NULL을 반환한다.",
      "`SUBSTR(COMM, 0)` — COMM이 NULL이면 0으로 바꾼다."
    ],
    "answer": 3,
    "explanation": "SUBSTR은 문자열의 일부를 잘라내는 부분 문자열 함수일 뿐 NULL을 다른 값으로 치환하는 기능과 무관하므로 ④가 적절하지 않다. NVL(①)은 첫 인자가 NULL이면 두 번째 값으로 대체하고, COALESCE(②)는 인자들을 앞에서부터 평가해 NULL이 아닌 첫 값을 반환하며, NULLIF(③)는 두 값이 같으면 NULL을 반환하는 NULL 관련 함수다."
  },
  {
    "id": 1977,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "다음 테이블에서 위반하고 있는 정규형으로 가장 적절한 것은?\n\n[상품] 상품코드(PK), 카테고리명, 상품명, 가격\n※ 각 상품은 하나의 카테고리에만 속함\n※ 모든 속성은 원자값으로 구성됨",
    "choices": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "정규형 위반 없음"
    ],
    "answer": 3,
    "explanation": "기본키가 단일 속성(상품코드)이므로 부분 함수 종속이 발생할 수 없어 제2정규형을 만족합니다. 또한 비기본키 속성들 간에 함수 종속 관계가 없으므로 이행적 종속도 없어 제3정규형도 만족합니다."
  },
  {
    "id": 1978,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL에서 오류가 발생하는 것은?",
    "choices": [
      "SELECT TEAM FROM PLAYER GROUP BY TEAM ORDER BY TEAM;",
      "SELECT TEAM FROM PLAYER GROUP BY TEAM ORDER BY COUNT(*);",
      "SELECT TEAM FROM PLAYER GROUP BY TEAM ORDER BY HEIGHT;",
      "SELECT TEAM, AVG(WEIGHT) FROM PLAYER GROUP BY TEAM ORDER BY AVG(WEIGHT);"
    ],
    "answer": 2,
    "explanation": "GROUP BY를 사용할 때 ORDER BY절에는 GROUP BY에 명시된 컬럼이나 집계 함수만 사용할 수 있습니다. HEIGHT는 GROUP BY에 포함되지 않은 개별 컬럼이므로 사용할 수 없습니다. ①은 GROUP BY 컬럼, ②는 집계함수, ④는 SELECT절의 집계함수로 모두 사용 가능합니다."
  },
  {
    "id": 1979,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 두 SQL의 결과가 동일한 것은?\n\nSELECT CASE WHEN STATUS='A' THEN NULL ELSE STATUS END FROM MEMBER;",
    "choices": [
      "NVL(STATUS, 'A')",
      "NVL2(STATUS, NULL, 'A')",
      "NULLIF(STATUS, 'A')",
      "COALESCE(STATUS, 'A')"
    ],
    "answer": 2,
    "explanation": "NULLIF(A, B) 함수는 A와 B가 같으면 NULL을 반환하고, 다르면 A를 반환합니다. 이는 CASE WHEN STATUS='A' THEN NULL ELSE STATUS END와 정확히 동일한 로직입니다. ①은 NULL을 'A'로 치환, ②는 STATUS가 NULL이 아니면 NULL 반환, ④는 NULL을 'A'로 치환하는 기능입니다."
  },
  {
    "id": 1980,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 결과는?\n\n[PRODUCT] NAME: TV,냉장고,세탁기 / PRICE: 500,800,600\n\nSELECT COUNT(NAME), MAX(PRICE), MIN(PRICE) FROM PRODUCT;",
    "choices": [
      "3, 800, 500",
      "3, 800, 600",
      "1, 800, 500",
      "오류"
    ],
    "answer": 0,
    "explanation": "COUNT(NAME)은 NAME 컬럼의 NULL이 아닌 값의 개수로 3개입니다. MAX(PRICE)는 최댓값 800, MIN(PRICE)는 최솟값 500입니다. 집계함수들은 모든 행에 대해 계산되어 하나의 결과 행을 반환합니다."
  },
  {
    "id": 1981,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 정렬 결과 마지막 행은?\n\n[SCORE] STUDENT: 철수,영희,민수 / POINT: 85,95,75\n\nSELECT * FROM SCORE ORDER BY POINT ASC;",
    "choices": [
      "철수, 85",
      "영희, 95",
      "민수, 75",
      "오류"
    ],
    "answer": 1,
    "explanation": "ORDER BY POINT ASC는 POINT를 오름차순으로 정렬합니다. 75(민수), 85(철수), 95(영희) 순서로 정렬되므로 마지막 행은 영희, 95입니다. ASC는 낮은 값부터 높은 값 순으로 정렬하는 기본 정렬 방식입니다."
  },
  {
    "id": 1982,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 SQL의 결과는? (SQL Server)\n\nSELECT ISNULL(NULL, 'BACKUP');",
    "choices": [
      "NULL",
      "BACKUP",
      "오류",
      "빈 문자열"
    ],
    "answer": 1,
    "explanation": "ISNULL(expr1, expr2) 함수는 SQL Server에서 사용되는 함수로, expr1이 NULL이면 expr2를 반환합니다. 첫 번째 인수가 NULL이므로 두 번째 인수인 'BACKUP'을 반환합니다."
  },
  {
    "id": 1983,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 DML에 해당하지 않는 것은?",
    "choices": [
      "INSERT",
      "UPDATE",
      "DELETE",
      "DROP"
    ],
    "answer": 3,
    "explanation": "DML(Data Manipulation Language)은 데이터를 조작하는 언어로 INSERT, UPDATE, DELETE, SELECT가 포함됩니다. DROP은 테이블 구조 자체를 삭제하는 DDL(Data Definition Language) 명령어입니다."
  },
  {
    "id": 1984,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "DDL",
    "question": "DELETE와 DROP의 차이로 올바르지 않은 것은?",
    "choices": [
      "DELETE는 DML, DROP은 DDL이다",
      "DELETE는 WHERE절로 조건 지정이 가능하다",
      "DROP은 테이블 구조와 데이터를 모두 삭제한다",
      "DELETE는 테이블 구조도 함께 삭제한다"
    ],
    "answer": 3,
    "explanation": "DELETE는 테이블의 데이터만 삭제하고 테이블 구조는 유지합니다. DROP은 테이블 구조와 데이터를 모두 삭제합니다. ①DELETE는 DML, DROP은 DDL이 맞고, ②DELETE는 WHERE절 사용 가능, ③DROP은 구조와 데이터 모두 삭제가 맞습니다."
  },
  {
    "id": 1985,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "UPSERT 기능에 대한 설명으로 올바르지 않은 것은?",
    "choices": [
      "데이터 존재 시 UPDATE, 없으면 INSERT 수행",
      "MySQL에서는 ON DUPLICATE KEY UPDATE 구문 사용",
      "PostgreSQL에서는 ON CONFLICT 구문 사용",
      "UPSERT는 모든 DBMS에서 동일한 구문을 사용한다"
    ],
    "answer": 3,
    "explanation": "UPSERT(UPDATE + INSERT) 기능은 DBMS마다 다른 구문을 사용합니다. MySQL은 ON DUPLICATE KEY UPDATE, PostgreSQL은 ON CONFLICT, Oracle은 MERGE 문을 사용합니다. ①②③은 모두 올바른 설명입니다."
  },
  {
    "id": 1986,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 결과 건수는?\n\n[PRODUCT] NAME: 'PHONE', 'PHONEX', 'PHO', 'PHOX', 'PHOXX'\n\n```sql\nSELECT * FROM PRODUCT WHERE NAME LIKE 'PHO%X';\n```",
    "choices": [
      "0건",
      "1건",
      "2건",
      "3건"
    ],
    "answer": 3,
    "explanation": "LIKE 'PHO%X'는 'PHO'로 시작하고 마지막이 'X'인 문자열을 의미합니다. %는 0개 이상의 임의 문자열과 매치되므로 'PHONEX', 'PHOX', 'PHOXX'가 모두 조건을 만족합니다. 따라서 결과는 3건입니다."
  },
  {
    "id": 1987,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "TCL",
    "question": "다음 실행 후 남는 데이터 건수는?\n\n```sql\nINSERT INTO ORDERS VALUES(100);\nINSERT INTO ORDERS VALUES(200);\nINSERT INTO ORDERS VALUES(300);\nCOMMIT;\nDELETE FROM ORDERS WHERE ORDER_ID = 200;\nCOMMIT;\n```",
    "choices": [
      "1건",
      "2건",
      "3건",
      "0건"
    ],
    "answer": 1,
    "explanation": "처음 3건(100, 200, 300)을 INSERT 후 COMMIT으로 확정합니다. 그 다음 ORDER_ID=200인 데이터 1건을 DELETE 후 COMMIT으로 확정합니다. 최종 결과는 100, 300 두 건이 남습니다."
  },
  {
    "id": 1988,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "SELECT 절에 대한 설명으로 올바르지 않은 것은?",
    "choices": [
      "DISTINCT는 중복 제거 기능을 제공한다",
      "컬럼에 별칭(ALIAS)을 지정할 수 있다",
      "산술연산자를 사용할 수 있다",
      "WHERE 절보다 먼저 실행된다"
    ],
    "answer": 3,
    "explanation": "SQL 실행 순서는 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY 입니다. WHERE 절이 SELECT 절보다 먼저 실행됩니다. ①②③은 모두 올바른 설명입니다."
  },
  {
    "id": 1989,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "SQL Server에서 NULL 포함 정렬 시 기본 동작은?\n\n[SCORE] POINTS: 85, NULL, 92, NULL, 78\n\n```sql\nSELECT * FROM SCORE ORDER BY POINTS;\n```",
    "choices": [
      "NULL이 처음, 나머지 오름차순",
      "78, 85, 92 후 NULL이 마지막",
      "NULL 행은 제외",
      "오류 발생"
    ],
    "answer": 0,
    "explanation": "SQL Server에서는 ORDER BY ASC 시 NULL이 가장 처음에 나타납니다. 따라서 결과는 NULL, NULL, 78, 85, 92 순서가 됩니다. Oracle과는 반대로 동작합니다."
  },
  {
    "id": 1990,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "PRIMARY KEY에 대한 설명으로 올바른 것은?",
    "choices": [
      "NULL 값을 허용한다",
      "테이블당 여러 개 생성할 수 있다",
      "중복 값을 허용하지 않는다",
      "자동으로 인덱스가 생성되지 않는다"
    ],
    "answer": 2,
    "explanation": "PRIMARY KEY는 중복값과 NULL값을 모두 허용하지 않으며, 테이블당 하나만 생성할 수 있고, 자동으로 UNIQUE INDEX가 생성됩니다. ③번이 유일하게 올바른 설명입니다."
  },
  {
    "id": 1991,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "GROUP BY",
    "question": "다음 SQL의 결과 행 수는?\n\n[SALES] REGION: 'EAST','EAST','WEST','WEST','NORTH' / AMOUNT: 1000,1500,2000,2500,3000\n\n```sql\nSELECT REGION, SUM(AMOUNT) FROM SALES GROUP BY REGION HAVING SUM(AMOUNT) > 2000;\n```",
    "choices": [
      "1행",
      "2행",
      "3행",
      "5행"
    ],
    "answer": 2,
    "explanation": "REGION별 합계는 EAST:2500, WEST:4500, NORTH:3000입니다. HAVING 조건 SUM(AMOUNT) > 2000을 만족하는 것은 EAST, WEST, NORTH 세 그룹 모두이므로 총 3행이 반환됩니다."
  },
  {
    "id": 1992,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL 실행 후 결과는? (SQL Server)\n\n[NUMBERS] VAL: 10,20,30,40,50\n\n```sql\nDELETE FROM NUMBERS\nWHERE VAL IN (\n  SELECT TOP(2) VAL FROM NUMBERS ORDER BY VAL ASC\n);\nSELECT MAX(VAL) FROM NUMBERS;\n```",
    "choices": [
      "30",
      "40",
      "50",
      "NULL"
    ],
    "answer": 2,
    "explanation": "서브쿼리에서 ORDER BY VAL ASC와 TOP(2)를 사용해 가장 작은 값 10, 20을 먼저 선택한 뒤 삭제합니다. 남는 데이터는 30, 40, 50이고, 이 중 MAX(VAL)은 50입니다."
  },
  {
    "id": 1993,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 DML이 아닌 것은?",
    "choices": [
      "INSERT",
      "UPDATE",
      "DELETE",
      "CREATE"
    ],
    "answer": 3,
    "explanation": "DML(Data Manipulation Language)은 데이터 조작 언어로 INSERT, UPDATE, DELETE, SELECT가 해당됩니다. CREATE는 DDL(Data Definition Language)에 속합니다."
  },
  {
    "id": 1994,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 SQL의 실행 결과는?\n\n```sql\nSELECT NVL(NULL, 'HELLO') FROM DUAL;\n```",
    "choices": [
      "NULL",
      "HELLO",
      "0",
      "빈 문자열"
    ],
    "answer": 1,
    "explanation": "NVL 함수는 첫 번째 인수가 NULL일 때 두 번째 인수를 반환합니다. 첫 번째 인수가 NULL이므로 'HELLO'가 반환됩니다."
  },
  {
    "id": 1995,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 실행 결과는?\n\n```sql\nSELECT CASE WHEN 'Y' = 'Y' THEN 'SUCCESS' ELSE 'FAIL' END FROM DUAL;\n```",
    "choices": [
      "SUCCESS",
      "FAIL",
      "Y",
      "NULL"
    ],
    "answer": 0,
    "explanation": "CASE 문에서 WHEN 조건 'Y' = 'Y'는 참이므로 THEN 절의 'SUCCESS'가 반환됩니다."
  },
  {
    "id": 1996,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "UNIQUE 제약조건의 특성으로 올바른 것은?",
    "choices": [
      "NULL 값을 허용하지 않음",
      "중복 값을 허용함",
      "NULL 값을 허용하며 중복 불가",
      "테이블당 하나만 생성 가능"
    ],
    "answer": 2,
    "explanation": "UNIQUE 제약조건은 NULL 값을 허용하지만 중복된 값은 허용하지 않습니다. PRIMARY KEY와 달리 NULL을 허용하며, 테이블당 여러 개 생성 가능합니다."
  },
  {
    "id": 1997,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 결과 건수는?\n\n테이블 PRODUCT의 PRICE 컬럼: 1000, 2000, 3000, 4000, 5000\n\n```sql\nSELECT * FROM PRODUCT WHERE PRICE >= 2000 AND PRICE <= 4000;\n```",
    "choices": [
      "2건",
      "3건",
      "4건",
      "5건"
    ],
    "answer": 1,
    "explanation": "조건 PRICE >= 2000 AND PRICE <= 4000에 해당하는 값은 2000, 3000, 4000으로 총 3건입니다."
  },
  {
    "id": 1998,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 중 SQL Server에서 사용할 수 있는 문자열 패턴 매칭 함수는?",
    "choices": [
      "LIKE",
      "PATINDEX",
      "CHARINDEX",
      "SUBSTRING"
    ],
    "answer": 1,
    "explanation": "PATINDEX는 SQL Server에서 와일드카드 패턴을 사용하여 문자열 내에서 패턴의 시작 위치를 반환하는 함수입니다. LIKE는 연산자이고, CHARINDEX는 정확한 문자열 검색, SUBSTRING은 문자열 추출 함수입니다."
  },
  {
    "id": 1999,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "JOIN",
    "question": "다음 SQL의 결과 건수는?\n\n```sql\n[CUSTOMER] ID: 10, 20, 30\n[ORDER] CUSTOMER_ID: 10, 10, 20\n\nSELECT * FROM CUSTOMER C\nLEFT JOIN ORDER O ON C.ID = O.CUSTOMER_ID;\n```",
    "choices": [
      "2건",
      "3건",
      "4건",
      "6건"
    ],
    "answer": 2,
    "explanation": "LEFT JOIN 결과: ID 10은 주문 2건과 매칭되어 2행, ID 20은 주문 1건과 매칭되어 1행, ID 30은 주문이 없어 NULL과 매칭되어 1행. 총 4건입니다."
  },
  {
    "id": 2000,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 PIVOT의 결과 행수는?\n\n```sql\n[SALES] 지역, 분기, 매출액\n서울 1분기 100 / 서울 2분기 150\n부산 1분기 80 / 부산 2분기 120\n\nPIVOT (SUM(매출액) FOR 분기 IN (1분기, 2분기));\n```",
    "choices": [
      "1건",
      "2건",
      "4건",
      "8건"
    ],
    "answer": 1,
    "explanation": "PIVOT은 행을 열로 변환합니다. 지역별로 그룹화되어 서울, 부산 각각 1행씩 총 2건이 생성됩니다. 1분기, 2분기는 열로 변환됩니다."
  },
  {
    "id": 2001,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "CUBE",
    "question": "다음 중 CUBE(A, B)가 생성하는 그룹핑 조합으로 가장 적절한 것은?",
    "choices": [
      "(A,B), (A), (B)",
      "(A,B), (A), ()",
      "(A,B), (B), ()",
      "(A,B), (A), (B), ()"
    ],
    "answer": 3,
    "explanation": "CUBE는 지정된 컬럼들의 모든 가능한 조합을 생성합니다. CUBE(A, B)는 (A,B), (A), (B), () 총 4가지 그룹핑을 생성하여 각각에 대한 소계를 계산합니다."
  },
  {
    "id": 2002,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "다음 중 윈도우 함수에서 ROWS와 RANGE 프레임의 차이점으로 가장 적절한 것은?",
    "choices": [
      "ROWS는 물리적 행 수, RANGE는 논리적 값 범위 기준",
      "ROWS는 정렬된 순서, RANGE는 정렬되지 않은 순서",
      "ROWS는 GROUP BY와 함께, RANGE는 단독 사용",
      "ROWS는 집계함수, RANGE는 분석함수 전용"
    ],
    "answer": 0,
    "explanation": "ROWS는 물리적인 행의 개수를 기준으로 프레임을 설정하고, RANGE는 ORDER BY 컬럼의 값 범위를 기준으로 프레임을 설정합니다. 같은 값을 가진 행들을 하나의 그룹으로 처리하는 차이가 있습니다."
  },
  {
    "id": 2003,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "정규화",
    "question": "다음 정규표현식에서 '+?'와 '+'의 차이점으로 가장 적절한 것은?",
    "choices": [
      "'+?'는 최소 매칭, '+'는 최대 매칭",
      "'+?'는 0회 이상, '+'는 1회 이상",
      "'+?'는 문자 매칭, '+'는 숫자 매칭",
      "'+?'는 대소문자 구분, '+'는 구분 안함"
    ],
    "answer": 0,
    "explanation": "정규표현식에서 '+'는 탐욕적(greedy) 수량자로 가능한 많이 매칭하고, '+?'는 비탐욕적(non-greedy) 수량자로 조건을 만족하는 최소한만 매칭합니다. 둘 다 1회 이상 매칭하지만 매칭 전략이 다릅니다."
  },
  {
    "id": 2004,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 중 계층형 질의에서 무한 루프를 방지하는 절로 가장 적절한 것은?",
    "choices": [
      "CONNECT_BY_ISCYCLE",
      "NOCYCLE",
      "CONNECT_BY_ISLEAF",
      "SYS_CONNECT_BY_PATH"
    ],
    "answer": 1,
    "explanation": "NOCYCLE은 계층형 질의에서 순환 참조가 발생할 때 무한 루프를 방지하고 오류 대신 결과를 반환하도록 하는 키워드입니다. CONNECT_BY_ISCYCLE은 순환을 감지하는 함수이고, 나머지는 다른 용도의 함수들입니다."
  },
  {
    "id": 2005,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 SQL의 결과 행수는?\n\n```sql\n[TABLE1] VALUE: 'A', 'B', 'A'\n[TABLE2] VALUE: 'A', 'C', 'C'\n\nSELECT VALUE FROM TABLE1\nUNION\nSELECT VALUE FROM TABLE2;\n```",
    "choices": [
      "3건",
      "4건",
      "5건",
      "6건"
    ],
    "answer": 0,
    "explanation": "UNION은 중복을 제거합니다. TABLE1의 'A', 'B'와 TABLE2의 'A', 'C'를 합치면 중복된 'A'가 제거되어 'A', 'B', 'C' 총 3건이 결과로 나옵니다."
  },
  {
    "id": 2006,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 UNPIVOT SQL의 빈칸에 들어갈 것으로 가장 적절한 것은?\n\n```sql\nSELECT * FROM 매출 UNPIVOT (( ① ) FOR 월 IN (일월, 이월, 삼월));\n```",
    "choices": [
      "금액",
      "SUM(금액)",
      "GROUP BY 월",
      "ORDER BY 월"
    ],
    "answer": 0,
    "explanation": "UNPIVOT절에서는 집계함수가 아닌 단순 컬럼명을 사용합니다. ① 금액이 정답입니다. ② SUM(금액)은 PIVOT에서 사용하는 집계함수입니다. ③ GROUP BY와 ④ ORDER BY는 UNPIVOT 구문과 관련이 없습니다."
  },
  {
    "id": 2007,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "서브쿼리",
    "question": "FROM절에 사용되는 서브쿼리의 명칭으로 가장 적절한 것은?",
    "choices": [
      "스칼라 서브쿼리",
      "인라인 뷰",
      "중첩 서브쿼리",
      "연관 서브쿼리"
    ],
    "answer": 1,
    "explanation": "② 인라인 뷰가 정답입니다. FROM절에 사용되는 서브쿼리를 인라인 뷰라고 합니다. ① 스칼라 서브쿼리는 SELECT절에 사용됩니다. ③ 중첩 서브쿼리는 WHERE절에 사용됩니다. ④ 연관 서브쿼리는 외부 쿼리와 상관관계가 있는 서브쿼리를 의미합니다."
  },
  {
    "id": 2008,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "ROW_NUMBER()와 RANK()의 차이로 가장 적절한 것은? (급여: 500, 500, 400)",
    "choices": [
      "ROW_NUMBER: 1,2,3 / RANK: 1,1,3",
      "ROW_NUMBER: 1,1,2 / RANK: 1,2,3",
      "ROW_NUMBER: 1,1,3 / RANK: 1,2,3",
      "항상 동일한 결과"
    ],
    "answer": 0,
    "explanation": "①이 정답입니다. ROW_NUMBER()는 동일한 값이라도 고유한 순번을 부여하므로 1,2,3이 됩니다. RANK()는 동일한 값에 같은 순위를 부여하고 다음 순위를 건너뛰므로 1,1,3이 됩니다. ②③④는 각 함수의 특성을 잘못 이해한 것입니다."
  },
  {
    "id": 2009,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "INNER JOIN",
    "question": "다음 두 SQL의 결과로 가장 적절한 것은?\n\n```sql\n-- SQL1\nSELECT * FROM 고객 A INNER JOIN 주문 B ON A.ID=B.고객ID;\n-- SQL2\nSELECT * FROM 고객 A, 주문 B WHERE A.ID=B.고객ID;\n```",
    "choices": [
      "SQL1만 정상 실행",
      "SQL2만 정상 실행",
      "둘 다 동일한 결과",
      "둘 다 오류 발생"
    ],
    "answer": 2,
    "explanation": "③이 정답입니다. INNER JOIN과 WHERE절을 사용한 조인은 동일한 결과를 반환합니다. SQL1은 ANSI 표준 조인 문법이고, SQL2는 전통적인 조인 문법입니다. 두 방식 모두 내부 조인을 수행하여 같은 결과를 얻습니다. ①②④는 잘못된 설명입니다."
  },
  {
    "id": 2010,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "다음 SQL의 결과 건수로 가장 적절한 것은?\n\n```sql\n[제품] 가격: 1000, 2000, 3000\n[할인] 가격: 1000, NULL\n\nSELECT * FROM 제품 WHERE 가격 IN (SELECT 가격 FROM 할인);\n```",
    "choices": [
      "0건",
      "1건",
      "2건",
      "3건"
    ],
    "answer": 1,
    "explanation": "② 1건이 정답입니다. IN 연산자는 서브쿼리 결과에 NULL이 포함되어 있어도 NULL이 아닌 값들과는 정상적으로 비교합니다. 제품 테이블의 가격 1000이 할인 테이블의 1000과 일치하므로 1건이 반환됩니다. NOT IN의 경우에만 NULL로 인해 문제가 발생합니다."
  },
  {
    "id": 2011,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "정규화",
    "question": "정규표현식에서 문자 클래스 [0-9], \\d, [[:digit:]]의 의미로 가장 적절한 것은?",
    "choices": [
      "모두 숫자 1개를 의미",
      "모두 숫자 0개 이상을 의미",
      "[0-9]만 숫자를 의미",
      "각각 다른 의미"
    ],
    "answer": 0,
    "explanation": "①이 정답입니다. [0-9], \\d, [[:digit:]]는 모두 숫자 한 개를 의미하는 표현으로 사용됩니다. [0-9]는 숫자 범위, \\d는 숫자 메타문자, [[:digit:]]는 POSIX 문자 클래스를 뜻합니다."
  },
  {
    "id": 2012,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 EXISTS를 IN으로 변환한 것으로 가장 적절한 것은?\n\n```sql\nSELECT 이름 FROM 학생 A WHERE EXISTS \n(SELECT 1 FROM 수강 B WHERE A.학번=B.학번 AND B.과목='데이터베이스');\n```",
    "choices": [
      "WHERE 학번 IN (SELECT 학번 FROM 수강)",
      "WHERE 학번 IN (SELECT 학번 FROM 수강 WHERE 과목='데이터베이스')",
      "WHERE EXISTS (SELECT 학번 FROM 수강 WHERE 과목='데이터베이스')",
      "WHERE 학번 IN (SELECT 1 FROM 수강 WHERE 과목='데이터베이스')"
    ],
    "answer": 1,
    "explanation": "②가 정답입니다. EXISTS를 IN으로 변환할 때는 연결 조건(A.학번=B.학번)을 IN의 서브쿼리에서 SELECT 항목으로 사용하고, 원래 조건(과목='데이터베이스')도 WHERE절에 포함해야 합니다. ①은 과목 조건이 누락되었고, ③은 여전히 EXISTS를 사용하며, ④는 SELECT 1을 잘못 사용했습니다."
  },
  {
    "id": 2013,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "DDL",
    "question": "DELETE, TRUNCATE, DROP에 대한 설명으로 가장 적절하지 않은 것은?",
    "choices": [
      "DELETE는 WHERE 절로 조건을 지정해 일부 행만 삭제할 수 있고, 행 단위로 작업이 기록되어 ROLLBACK으로 되돌릴 수 있다.",
      "TRUNCATE는 WHERE 절을 사용할 수 있어 특정 조건의 행만 빠르게 삭제할 수 있다.",
      "DROP은 테이블의 데이터뿐 아니라 테이블 구조(정의) 자체를 삭제한다.",
      "TRUNCATE와 DROP은 DDL로 분류되어 명령 수행 시 암시적 커밋(auto-commit)이 발생한다."
    ],
    "answer": 1,
    "explanation": "TRUNCATE는 WHERE 절을 사용할 수 없으며 테이블의 모든 행을 한 번에 삭제한다. 일부 행만 조건으로 지우려면 DELETE를 써야 한다. ②가 잘못된 설명이다. ① DELETE는 DML이며 ROLLBACK 가능, ③ DROP은 구조까지 제거, ④ TRUNCATE/DROP은 DDL이라 실행 즉시 암시적 커밋이 일어난다 — 모두 옳다. 따라서 적절하지 않은 것은 ②."
  },
  {
    "id": 2014,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "다음 중 ROLE을 사용한 권한 관리의 장점으로 가장 적절한 것은?",
    "choices": [
      "개별 사용자마다 권한을 직접 부여하여 보안성이 높아진다",
      "여러 사용자에게 동일한 권한 집합을 효율적으로 관리할 수 있다",
      "테이블별로 세밀한 권한 제어가 가능하다",
      "WITH GRANT OPTION 없이도 권한 위임이 가능하다"
    ],
    "answer": 1,
    "explanation": "ROLE의 주요 장점은 권한들을 논리적으로 그룹화하여 여러 사용자에게 동일한 권한 집합을 효율적으로 관리할 수 있다는 것입니다. ①은 ROLE의 장점과 반대되는 개념이고, ③은 ROLE과 관계없이 가능한 기능이며, ④는 ROLE과 WITH GRANT OPTION이 별개의 개념입니다."
  },
  {
    "id": 2015,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "다음 중 데이터베이스 권한 관리에서 사용되는 DCL 명령어는?",
    "choices": [
      "SAVEPOINT",
      "TRUNCATE",
      "REVOKE",
      "MERGE"
    ],
    "answer": 2,
    "explanation": "REVOKE는 부여된 권한을 회수하는 DCL(Data Control Language) 명령어입니다. ① SAVEPOINT는 TCL, ② TRUNCATE는 DDL, ④ MERGE는 DML에 해당합니다. DCL은 데이터베이스 접근 권한을 제어하는 언어로 GRANT, REVOKE가 대표적입니다."
  },
  {
    "id": 2016,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "다음 중 테이블 권한 부여에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "PUBLIC에게 권한을 부여하면 모든 사용자가 해당 권한을 갖게 된다",
      "INSERT 권한만 있으면 UPDATE와 DELETE도 자동으로 허용된다",
      "테이블 소유자는 다른 사용자에게 권한을 부여할 수 없다",
      "GRANT로 부여된 권한은 데이터베이스 재시작 시 자동으로 회수된다"
    ],
    "answer": 0,
    "explanation": "PUBLIC은 데이터베이스의 모든 사용자를 의미하는 특수한 사용자 그룹입니다. PUBLIC에게 권한을 부여하면 모든 사용자가 해당 권한을 갖게 됩니다. ② 각 권한은 독립적으로 관리되며, ③ 테이블 소유자는 권한 부여가 가능하고, ④ 권한은 명시적으로 REVOKE하기 전까지 유지됩니다."
  },
  {
    "id": 2017,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "`PRODUCT` 테이블에서 단가(`PRICE`)가 1000 미만인 상품을 모두 삭제하려고 한다. 가장 적절한 SQL은?",
    "choices": [
      "`DELETE PRODUCT WHERE PRICE < 1000;`",
      "`DELETE COLUMN PRICE FROM PRODUCT WHERE PRICE < 1000;`",
      "`DELETE FROM PRODUCT WHERE PRICE < 1000;`",
      "`TRUNCATE PRODUCT WHERE PRICE < 1000;`"
    ],
    "answer": 2,
    "explanation": "표준 DELETE 구문은 `DELETE FROM 테이블 WHERE 조건;`이다. ③이 올바른 형식이다. ① `FROM`이 빠져 표준 구문에 맞지 않고, ② DELETE는 행을 삭제하는 명령으로 'COLUMN'을 지우는 구문은 존재하지 않으며(컬럼 삭제는 ALTER TABLE ... DROP COLUMN), ④ TRUNCATE는 WHERE를 쓸 수 없다. 따라서 정답은 ③."
  },
  {
    "id": 3561,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "스키마의 종류로 옳지 않은 것은?",
    "choices": [
      "응용 스키마",
      "외부 스키마",
      "개념 스키마",
      "내부 스키마"
    ],
    "answer": 0,
    "explanation": "정답: 1. 데이터베이스의 3단계 스키마는 외부 스키마, 개념 스키마, 내부 스키마이다.\n\n**오답 풀이**\n- 1번: 응용 스키마는 3단계 스키마의 표준 분류에 해당하지 않는다.\n- 2번: 외부 스키마는 사용자 관점의 데이터베이스 구조이다.\n- 3번: 개념 스키마는 조직 전체 관점의 논리적 구조이다.\n- 4번: 내부 스키마는 물리적 저장 구조와 관련된다.\n\n**보충 개념**\n3단계 스키마 구조는 데이터 독립성을 확보하기 위한 구조이다. 외부 단계는 사용자별 뷰, 개념 단계는 전체 논리 구조, 내부 단계는 저장 구조를 의미한다."
  },
  {
    "id": 3562,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "데이터 모델링에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "업무에서 사용되는 모든 데이터를 포함해야 한다.",
      "업무 규칙은 데이터 모델에 반영되어야 한다.",
      "데이터 모델링은 업무 정보를 구조화하는 과정이다.",
      "업무 규칙이 모델에 포함되지 않아도 된다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 데이터 모델링은 업무에서 사용하는 데이터와 업무 규칙을 데이터 구조로 표현하는 과정이므로 업무 규칙은 모델에 반영되어야 한다.\n\n**오답 풀이**\n- 1번: 업무에서 필요한 데이터는 모델링 대상에 포함되어야 한다.\n- 2번: 업무 규칙은 엔터티, 속성, 관계, 제약조건 등에 반영된다.\n- 3번: 데이터 모델링은 현실 업무를 데이터 관점에서 추상화하고 구조화하는 작업이다.\n- 4번: 업무 규칙이 모델에 포함되지 않아도 된다는 설명은 부적절하다.\n\n**보충 개념**\n데이터 모델링은 단순히 테이블을 만드는 작업이 아니라 업무의 데이터 구조와 규칙을 명확히 표현하는 작업이다. 업무 규칙이 누락되면 데이터 정합성과 시스템 품질이 저하될 수 있다."
  },
  {
    "id": 3563,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "발생 시점에 따라 구분할 수 있는 엔터티의 유형으로 적절하지 않은 것은?",
    "choices": [
      "관계 엔터티",
      "행위 엔터티",
      "중심 엔터티",
      "기본 엔터티"
    ],
    "answer": 0,
    "explanation": "정답: 1. 발생 시점에 따른 엔터티 유형은 기본 엔터티, 중심 엔터티, 행위 엔터티로 구분한다.\n\n**오답 풀이**\n- 1번: 관계 엔터티는 발생 시점에 따른 표준 분류가 아니다.\n- 2번: 행위 엔터티는 업무 행위나 사건에 의해 발생하는 엔터티이다.\n- 3번: 중심 엔터티는 기본 엔터티로부터 발생하고 업무의 중심이 되는 엔터티이다.\n- 4번: 기본 엔터티는 독립적으로 생성되는 엔터티이다.\n\n**보충 개념**\n엔터티는 발생 시점에 따라 기본, 중심, 행위 엔터티로 분류할 수 있다. 예를 들어 고객과 상품은 기본 엔터티, 주문은 행위 엔터티로 볼 수 있다."
  },
  {
    "id": 3564,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "ERD",
    "question": "다음 설명 중 옳지 않은 것은?\n\n![고객-상품-주문-주문상품 ERD](/exam-images/sqld-56/q4.png)",
    "choices": [
      "고객과 상품은 기본 엔터티다.",
      "주문은 사건 엔터티다.",
      "주문 상품 엔터티는 주문과 상품의 관계에 의해 생성된다.",
      "주문 상품 엔터티는 독립적으로 발생하는 기본 엔터티다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 주문상품 엔터티는 주문과 상품의 관계에서 발생하는 행위 또는 관계 성격의 엔터티로 보는 것이 적절하다.\n\n**오답 풀이**\n- 1번: 고객과 상품은 업무의 기반이 되는 기본 엔터티로 볼 수 있다.\n- 2번: 주문은 고객의 구매 행위에 의해 발생하는 사건 또는 행위 엔터티이다.\n- 3번: 주문상품은 주문과 상품의 다대다 관계를 해소하기 위해 생성되는 엔터티로 볼 수 있다.\n- 4번: 주문상품은 독립적으로 발생하는 기본 엔터티가 아니라 주문과 상품의 관계에서 발생한다.\n\n**보충 개념**\n다대다 관계는 실제 테이블 설계에서 중간 엔터티로 해소하는 경우가 많다. 주문과 상품 사이의 주문상품 엔터티는 주문별 상품 내역을 표현한다."
  },
  {
    "id": 3565,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "다른 속성을 이용하여 결과를 도출하는 속성은?",
    "choices": [
      "설계 속성",
      "기본 속성",
      "파생 속성",
      "관계 속성"
    ],
    "answer": 2,
    "explanation": "정답: 3. 파생 속성은 다른 속성의 값으로부터 계산되거나 도출되는 속성이다.\n\n**오답 풀이**\n- 1번: 설계 속성은 업무상 원래 존재하지 않지만 설계를 위해 도입하는 속성이다.\n- 2번: 기본 속성은 업무로부터 직접 도출되는 속성이다.\n- 3번: 파생 속성은 합계, 나이, 금액 등 다른 속성으로부터 계산되는 속성이다.\n- 4번: 관계 속성은 표준 속성 분류로 보기 어렵다.\n\n**보충 개념**\n속성은 기본 속성, 설계 속성, 파생 속성 등으로 구분할 수 있다. 파생 속성은 편의를 위해 저장할 수 있지만 데이터 중복과 정합성 문제를 고려해야 한다."
  },
  {
    "id": 3566,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "다음 설명 중 옳은 것을 모두 고르시오.\n\n**<보기>**\n가. 주소는 시, 군, 구 등으로 나눠지므로 복합 속성이다.\n나. 나이는 단순 속성이다.\n다. 주민번호는 단일 값 속성이다.\n라. 연락처는 휴대폰번호, 집 전화번호가 될 수 있기 때문에 다중 값 속성이다.",
    "choices": [
      "가, 라",
      "가, 나, 다",
      "나, 다, 라",
      "가, 나, 다, 라"
    ],
    "answer": 3,
    "explanation": "정답: 4. 보기의 설명은 모두 속성의 분류 관점에서 옳다.\n\n**오답 풀이**\n- 1번: 나, 다가 누락되어 있다.\n- 2번: 라가 누락되어 있다.\n- 3번: 가가 누락되어 있다.\n- 4번: 가, 나, 다, 라가 모두 옳다.\n\n**보충 개념**\n복합 속성은 더 작은 의미 단위로 분해 가능한 속성이다. 단일 값 속성은 한 엔터티 인스턴스에 하나의 값만 갖는 속성이고, 다중 값 속성은 여러 값을 가질 수 있는 속성이다."
  },
  {
    "id": 3567,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "ERD",
    "question": "다음 ERD와 관계 조건을 보고 옳지 않은 것을 고르시오.\n\n**<그림>**\n<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 210' width='440' height='210' font-family='sans-serif' font-size='13'>\n<rect x='30' y='20' width='90' height='36' fill='white' stroke='black'/><text x='75' y='43' text-anchor='middle'>병원</text>\n<rect x='175' y='20' width='90' height='36' fill='white' stroke='black'/><text x='220' y='43' text-anchor='middle'>의사</text>\n<rect x='320' y='20' width='90' height='36' fill='white' stroke='black'/><text x='365' y='43' text-anchor='middle'>수술</text>\n<line x1='120' y1='38' x2='175' y2='38' stroke='black'/>\n<line x1='167' y1='38' x2='175' y2='30' stroke='black'/><line x1='167' y1='38' x2='175' y2='46' stroke='black'/>\n<circle cx='160' cy='38' r='4' fill='white' stroke='black'/>\n<text x='147' y='16' text-anchor='middle'>ㄱ</text>\n<line x1='265' y1='38' x2='320' y2='38' stroke='black'/>\n<line x1='312' y1='38' x2='320' y2='30' stroke='black'/><line x1='312' y1='38' x2='320' y2='46' stroke='black'/>\n<circle cx='305' cy='38' r='4' fill='white' stroke='black'/>\n<circle cx='276' cy='38' r='4' fill='white' stroke='black'/>\n<text x='292' y='16' text-anchor='middle'>ㄴ</text>\n<path d='M75 56 L75 160 L365 160 L365 56' fill='none' stroke='black' stroke-dasharray='6 4'/>\n<line x1='365' y1='64' x2='357' y2='56' stroke='black'/><line x1='365' y1='64' x2='373' y2='56' stroke='black'/>\n<circle cx='365' cy='75' r='4' fill='white' stroke='black'/>\n<text x='220' y='180' text-anchor='middle'>ㄷ (병원-수술 직접 관계)</text>\n</svg>\n\n**<관계 조건>**\n- 병원은 0명 이상의 의사를 둘 수 있다.\n- 의사는 반드시 1개의 병원에 소속된다.\n- 의사는 0건 이상의 수술을 집도할 수 있다.\n- 수술은 담당 의사 없이 등록될 수 있다.\n- ㄱ은 병원-의사 관계, ㄴ은 의사-수술 관계, ㄷ은 병원-수술을 직접 연결한 관계이다.",
    "choices": [
      "ㄷ은 ㄱ과 ㄴ을 합한 것과 의미가 같다.",
      "의사가 없는 병원이 있을 수 있다.",
      "수술이 없는 의사가 있을 수 있다.",
      "의사가 집도하지 않는 수술이 있을 수 있다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 병원-수술을 직접 연결한 관계(ㄷ)는 병원-의사, 의사-수술 두 관계를 단순히 합친 것과 같지 않다.\n\n**오답 풀이**\n- 1번: 직접 관계는 중간 엔터티인 의사 정보와 참여 조건을 생략하므로 ㄱ과 ㄴ의 합성과 동일하지 않다.\n- 2번: 병원이 0명 이상의 의사를 둘 수 있다고 했으므로 가능하다.\n- 3번: 의사는 0건 이상의 수술을 집도할 수 있다고 했으므로 가능하다.\n- 4번: 수술은 담당 의사 없이 등록될 수 있다고 했으므로 가능하다.\n\n**보충 개념**\nERD 해석에서는 관계 수뿐 아니라 선택성, 필수 참여, 중간 엔터티 유무까지 함께 봐야 한다. 직접 관계와 경유 관계는 의미가 달라질 수 있다."
  },
  {
    "id": 3568,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "업무에 의해 만들어진 식별자로 옳은 것은?",
    "choices": [
      "외부식별자",
      "내부식별자",
      "본질식별자",
      "인조식별자"
    ],
    "answer": 2,
    "explanation": "정답: 3. 본질식별자는 업무적으로 의미를 가지고 원래 존재하는 식별자이다.\n\n**오답 풀이**\n- 1번: 외부식별자는 다른 엔터티와의 관계로부터 가져온 식별자이다.\n- 2번: 내부식별자는 엔터티 내부에서 스스로 생성되는 식별자이다.\n- 3번: 본질식별자는 업무에 의해 자연스럽게 식별 가능한 속성이다.\n- 4번: 인조식별자는 업무적 의미보다는 식별을 위해 인위적으로 만든 식별자이다.\n\n**보충 개념**\n식별자는 생성 방식, 대체 여부, 업무 의미 여부에 따라 여러 기준으로 분류된다. 본질식별자는 주민등록번호, 사번처럼 업무적으로 의미 있는 식별자에 해당한다."
  },
  {
    "id": 3569,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "정규화",
    "question": "모든 일반 속성이 주식별자에 종속되어 있는 정규형은?",
    "choices": [
      "제1 정규형",
      "제2 정규형",
      "제3 정규형",
      "보이스-코드정규형"
    ],
    "answer": 1,
    "explanation": "정답: 2. 제2정규형은 제1정규형을 만족하면서 모든 일반 속성이 주식별자 전체에 완전 함수 종속되도록 부분 함수 종속을 제거한 정규형이다.\n\n**오답 풀이**\n- 1번: 제1정규형은 속성의 원자성을 만족하는 단계이다.\n- 2번: 제2정규형은 일반 속성이 주식별자 전체에 종속되도록 하는 정규형이다.\n- 3번: 제3정규형은 일반 속성 간의 이행 함수 종속을 제거한다.\n- 4번: 보이스-코드정규형은 모든 결정자가 후보키가 되도록 하는 더 강한 정규형이다.\n\n**보충 개념**\n제2정규형은 복합키를 가진 릴레이션에서 특히 중요하다. 키의 일부에만 종속되는 속성이 있으면 별도 릴레이션으로 분리해야 한다."
  },
  {
    "id": 3570,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "정규화",
    "question": "정규화에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "정규화 시 유연성이 떨어진다.",
      "일반 속성 간 종속을 제거하는 것은 제3 정규형이다.",
      "반정규화는 데이터 중복으로 독립성이 떨어진다.",
      "정규화를 많이 할수록 성능이 저하된다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 정규화는 데이터 중복을 줄이고 구조의 유연성과 데이터 독립성을 높이는 방향의 설계 기법이다.\n\n**오답 풀이**\n- 1번: 정규화로 유연성이 떨어진다는 설명은 일반적으로 옳지 않다.\n- 2번: 제3정규형은 일반 속성 간 이행 함수 종속을 제거한다.\n- 3번: 반정규화는 중복을 허용하므로 데이터 독립성과 정합성 측면의 부담이 생길 수 있다.\n- 4번: 정규화가 과도하면 조인이 많아져 조회 성능이 저하될 수 있다.\n\n**보충 개념**\n정규화는 이상 현상을 줄이고 데이터 정합성을 높인다. 다만 성능 요구가 강한 경우에는 통제된 반정규화를 검토할 수 있다."
  },
  {
    "id": 3571,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "우선순위가 가장 높은 연산자는?",
    "choices": [
      "비교",
      "괄호",
      "AND",
      "OR"
    ],
    "answer": 1,
    "explanation": "정답: 2. SQL 연산에서 괄호는 가장 먼저 평가되어 연산 우선순위를 명시적으로 바꿀 수 있다.\n\n**오답 풀이**\n- 1번: 비교 연산자는 괄호보다 우선하지 않는다.\n- 2번: 괄호 안의 조건은 가장 먼저 평가된다.\n- 3번: AND는 OR보다 우선순위가 높지만 괄호보다 높지는 않다.\n- 4번: OR는 AND보다도 우선순위가 낮다.\n\n**보충 개념**\n조건식이 복잡할 때는 괄호를 사용해 의도를 명확히 표현해야 한다. 일반적으로 NOT, AND, OR 순으로 논리 연산 우선순위가 적용된다."
  },
  {
    "id": 3572,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 쿼리의 결과로 옳은 것은?\n\n**<TAB1>**\n| COL1 | COL2 |\n|---|---|\n| 1 | A |\n| 2 | B |\n| 3 | C |\n| 4 | D |\n| 1 | A |\n| 2 | B |\n| 3 | A |\n\n```sql\nSELECT COUNT(ALL COL1) FROM TAB1 WHERE COL2='A';\nSELECT COUNT(DISTINCT COL1) FROM TAB1;\n```",
    "choices": [
      "2, 3",
      "3, 3",
      "3, 4",
      "4, 4"
    ],
    "answer": 2,
    "explanation": "정답: 3. COL2가 A인 행은 3건이고, COL1의 서로 다른 값은 1, 2, 3, 4로 4개이다.\n\n**오답 풀이**\n- 1번: 첫 번째 결과는 3이고 두 번째 결과는 4이므로 틀리다.\n- 2번: DISTINCT COL1의 개수를 3으로 계산한 오류이다.\n- 3번: COUNT(ALL COL1)=3, COUNT(DISTINCT COL1)=4로 옳다.\n- 4번: COL2='A'인 행을 4건으로 잘못 계산했다.\n\n**보충 개념**\nCOUNT(ALL 컬럼)은 NULL이 아닌 모든 값을 센다. COUNT(DISTINCT 컬럼)은 중복을 제거한 값의 개수를 센다."
  },
  {
    "id": 3573,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 두 테이블에 대해 결과 건수가 가장 많은 조인을 고르시오.\n\n**<A>**\n| ID |\n|---:|\n| 1 |\n| 2 |\n| 3 |\n\n**<B>**\n| ID |\n|---:|\n| 2 |\n| 3 |\n| 4 |",
    "choices": [
      "SELECT * FROM A INNER JOIN B ON A.ID = B.ID",
      "SELECT * FROM A LEFT OUTER JOIN B ON A.ID = B.ID",
      "SELECT * FROM A RIGHT OUTER JOIN B ON A.ID = B.ID",
      "SELECT * FROM A FULL OUTER JOIN B ON A.ID = B.ID"
    ],
    "answer": 3,
    "explanation": "정답: 4. A와 B에 각각만 존재하는 값 1, 4까지 모두 포함하는 FULL OUTER JOIN의 결과 건수가 가장 많다.\n\n**오답 풀이**\n- 1번: 공통값 2, 3만 반환하므로 2건이다.\n- 2번: A의 모든 행을 보존하므로 3건이다.\n- 3번: B의 모든 행을 보존하므로 3건이다.\n- 4번: 양쪽의 미매칭 행까지 포함하므로 4건이다.\n\n**보충 개념**\nINNER JOIN은 교집합, LEFT/RIGHT OUTER JOIN은 한쪽 기준 보존, FULL OUTER JOIN은 양쪽 기준 보존이다."
  },
  {
    "id": 3574,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 결과가 다른 것은?",
    "choices": [
      "COL3 >= 200 AND COL4 <= 200",
      "NOT (200 < COL3 OR 200 > COL4)",
      "200 BETWEEN COL3 AND COL4",
      "COL3 <= 200 AND COL4 >= 200"
    ],
    "answer": 0,
    "explanation": "정답: 1. 3번과 4번은 200이 COL3 이상 COL4 이하 범위에 포함되는 조건이고, 2번도 드모르간 법칙을 적용하면 같은 의미가 된다. 1번은 COL3이 200 이상이고 COL4가 200 이하인 반대 방향 조건이다.\n\n**오답 풀이**\n- 1번: COL3 >= 200 AND COL4 <= 200은 다른 보기들과 범위 비교 방향이 반대이다.\n- 2번: NOT (200 < COL3 OR 200 > COL4)는 200 >= COL3 AND 200 <= COL4로 변환된다.\n- 3번: 200 BETWEEN COL3 AND COL4는 COL3 <= 200 AND 200 <= COL4와 같다.\n- 4번: COL3 <= 200 AND COL4 >= 200은 3번과 같은 의미이다.\n\n**보충 개념**\nBETWEEN A AND B는 하한과 상한을 포함한다. NOT과 OR가 함께 사용된 조건은 드모르간 법칙으로 AND 조건으로 바꿔 해석할 수 있다."
  },
  {
    "id": 3575,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "다음 중 결과로 옳은 것은?\n\n**<TAB1>**\n| COL1 | COL2 |\n|---|---:|\n| 1 | 10 |\n| 1 | 20 |\n| 2 | 30 |\n| 3 | 40 |\n| 3 | 50 |\n\n```sql\nSELECT MAX(COL2) KEEP(DENSE_RANK FIRST ORDER BY COL1) FROM TAB1;\n```",
    "choices": [
      "10",
      "20",
      "40",
      "60"
    ],
    "answer": 1,
    "explanation": "정답: 2. COL1 기준 DENSE_RANK FIRST는 COL1이 가장 작은 1인 행들을 선택하고, 그중 COL2의 최댓값은 20이다.\n\n**오답 풀이**\n- 1번: COL1=1인 행 중 최솟값 10을 선택한 오류이다.\n- 2번: COL1이 가장 작은 그룹의 COL2 최댓값이므로 옳다.\n- 3번: COL1=3 그룹의 값으로 FIRST 조건에 맞지 않는다.\n- 4번: 존재하지 않는 계산 결과이다.\n\n**보충 개념**\nKEEP(DENSE_RANK FIRST ORDER BY 컬럼)은 정렬 기준으로 첫 번째 순위 그룹을 대상으로 집계한다. 이후 MAX, MIN 같은 집계 함수가 해당 그룹에 적용된다."
  },
  {
    "id": 3576,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 쿼리 문의 실행 결과로 옳은 것은?\n\n```sql\nSELECT COALESCE(NULL, NULL, 'S', NULL, 'QL') FROM DUAL;\n```",
    "choices": [
      "S",
      "SQL",
      "NULL",
      "오류가 발생한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. COALESCE 함수는 인자 중 첫 번째로 NULL이 아닌 값을 반환하므로 'S'가 반환된다.\n\n**오답 풀이**\n- 1번: 첫 번째 NULL이 아닌 값이 'S'이므로 옳다.\n- 2번: COALESCE는 문자열을 이어 붙이는 함수가 아니다.\n- 3번: NULL이 아닌 값이 존재하므로 NULL이 반환되지 않는다.\n- 4번: 함수명이 COALESCE로 정상 작성되었다면 오류가 발생하지 않는다.\n\n**보충 개념**\nCOALESCE(expr1, expr2, ...)는 왼쪽부터 평가하여 첫 번째 NULL이 아닌 값을 반환한다. 모든 인자가 NULL이면 NULL을 반환한다."
  },
  {
    "id": 3577,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "함수의 실행 결과로 옳은 것은?\n\n```sql\nCEIL(9.36)\nROUND(9.48)\nFLOOR(9.72)\n```",
    "choices": [
      "9, 9, 9",
      "10, 9, 9",
      "9, 9, 10",
      "10, 10, 9"
    ],
    "answer": 1,
    "explanation": "정답: 2. CEIL(9.36)은 10, ROUND(9.48)은 9, FLOOR(9.72)는 9이다.\n\n**오답 풀이**\n- 1번: CEIL 결과를 9로 계산한 오류이다.\n- 2번: 올림, 반올림, 내림 결과가 모두 맞다.\n- 3번: CEIL과 FLOOR 결과가 잘못되었다.\n- 4번: ROUND(9.48)은 소수 첫째 자리 기준으로 9가 된다.\n\n**보충 개념**\nCEIL은 주어진 수보다 크거나 같은 최소 정수를 반환한다. FLOOR는 작거나 같은 최대 정수를 반환하고, ROUND는 지정 자리 기준으로 반올림한다."
  },
  {
    "id": 3578,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "업체 테이블의 물품 컬럼에는 'p'가 30건, 'q'가 40건, 'r'이 50건 저장되어 있다(총 120건, NULL 없음). 다음 두 쿼리의\n실행 결과로 옳은 것은?\n\n```sql\nSELECT COUNT(DISTINCT 물품) FROM 업체;\nSELECT COUNT(*) FROM 업체 WHERE 물품 IN ('p', NULL);\n```",
    "choices": [
      "3, 0",
      "3, 30",
      "3, 오류가 발생한다.",
      "3, NULL"
    ],
    "answer": 1,
    "explanation": " 정답: 2. 물품의 서로 다른 값은 p, q, r 3개이므로 COUNT(DISTINCT 물품)=3이다. IN ('p', NULL)은 물품='p'인 행만\n  TRUE가 되고(NULL과의 비교는 UNKNOWN이라 무시됨), 'p'는 30건이므로 COUNT(*)=30이다.\n\n  **오답 풀이**\n  - 1번: 'p'에 일치하는 행이 30건 존재하므로 0이 아니다.\n  - 2번: DISTINCT 물품 3개, 'p'인 행 30건으로 옳다.\n  - 3번: IN 목록에 NULL이 있어도 문법 오류는 아니다.\n  - 4번: COUNT(*)는 조건을 만족하는 행 수를 반환하며 NULL을 반환하지 않는다."
  },
  {
    "id": 3579,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "교집합으로 옳은 것은?",
    "choices": [
      "UNION",
      "INTERSECT",
      "MINUS",
      "EXCEPT"
    ],
    "answer": 1,
    "explanation": "정답: 2. INTERSECT는 두 SELECT 결과의 공통 부분, 즉 교집합을 반환한다.\n\n**오답 풀이**\n- 1번: UNION은 합집합을 반환한다.\n- 2번: INTERSECT는 교집합을 반환한다.\n- 3번: MINUS는 차집합을 반환한다.\n- 4번: EXCEPT는 일부 DBMS에서 차집합을 의미한다.\n\n**보충 개념**\n집합 연산자는 SELECT 결과 집합 간의 연산을 수행한다. UNION은 중복 제거 합집합, UNION ALL은 중복 포함 합집합, INTERSECT는 교집합, MINUS/EXCEPT는 차집합이다."
  },
  {
    "id": 3580,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "TRUNCATE에 관한 설명으로 옳은 것은?",
    "choices": [
      "데이터 구조와 데이터를 모두 삭제한다.",
      "조건을 지정하여 일부 행만 삭제할 수 있다.",
      "특정 행만 삭제하는 것은 불가능하다.",
      "모든 행을 제거할 경우 DELETE보다 성능이 떨어진다."
    ],
    "answer": 2,
    "explanation": "정답: 3. TRUNCATE는 테이블의 전체 데이터를 제거하는 명령으로 특정 행만 조건 지정하여 삭제할 수 없다.\n\n**오답 풀이**\n- 1번: 데이터 구조까지 삭제하는 것은 DROP에 가깝다. TRUNCATE는 테이블 구조를 유지한다.\n- 2번: TRUNCATE는 WHERE 조건을 사용할 수 없다.\n- 3번: 특정 행만 삭제할 수 없으므로 옳다.\n- 4번: 전체 행 제거 시 일반적으로 DELETE보다 빠르다.\n\n**보충 개념**\nDELETE는 조건을 사용해 일부 행을 삭제할 수 있고 DML에 해당한다. TRUNCATE는 전체 데이터를 빠르게 제거하며 테이블 구조는 남긴다."
  },
  {
    "id": 3581,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "주어진 결과를 보고 빈칸에 들어갈 쿼리로 알맞은 것은?\n\n**<TAB1>**\n| COL1 | COL2 |\n|---:|---|\n| 1 | Smith |\n| 2 | Charlie |\n| 3 | Alice |\n| 4 | NULL |\n\n```sql\nSELECT COUNT(*) _______________;\n```\n\n**<결과>**\n| COUNT(*) |\n|---:|\n| 4 |",
    "choices": [
      "FROM EMP WHERE COL2 LIKE '%*%'",
      "FROM EMP",
      "FROM EMP WHERE COL2 LIKE '%*'",
      "FROM EMP WHERE COL2 LIKE '*%'"
    ],
    "answer": 1,
    "explanation": "정답: 2. 전체 행 수는 NULL을 포함하여 4건이므로 WHERE 조건 없이 FROM EMP만 사용해야 COUNT(*) 결과가 4가 된다.\n\n **오답 풀이**\n  - 1번: SQL의 LIKE에서 와일드카드는 '%'(임의 길이)와 '_'(한 문자)뿐이며 '*'는 특별한 의미 없는 일반 문자다. LIKE\n  '%*%'는 값에 '*' 문자가 들어간 행만 찾는데 그런 행이 없어 0건이므로 4가 아니다.\n  - 2번: WHERE 조건이 없어 COUNT(*)가 전체 4행을 센다.\n  - 3번: LIKE '%*'는 '*'로 끝나는 값만 찾고 NULL 행도 제외되어 4가 아니다.\n  - 4번: LIKE '*%'는 '*'로 시작하는 값만 찾고 NULL 행도 제외되어 4가 아니다.\n\n  **보충 개념**\n  COUNT(*)는 NULL 여부와 무관하게 행을 센다. 반면 WHERE의 LIKE 비교는 대상 값이 NULL이면 UNKNOWN이 되어 결과에서\n  제외된다. SQL LIKE의 와일드카드는 '%'와 '_'뿐이며 '*'는 일반 문자로 취급된다."
  },
  {
    "id": 3582,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "칼럼 값이 NULL일 때, 다음 중 반환 결과가 다른 것은?",
    "choices": [
      "CASE 칼럼 WHEN NULL THEN -1 ELSE 0 END",
      "CASE WHEN 칼럼 IS NULL THEN -1 ELSE 0 END",
      "DECODE(칼럼, NULL, -1, 0)",
      "NVL2(칼럼,0,-1)"
    ],
    "answer": 0,
    "explanation": "정답: ①\n\n해설:\n칼럼 값이 NULL일 때 각 보기의 반환 결과는 다음과 같다.\n\n① CASE 칼럼 WHEN NULL THEN -1 ELSE 0 END → 0\n② CASE WHEN 칼럼 IS NULL THEN -1 ELSE 0 END → -1\n③ DECODE(칼럼, NULL, -1, 0) → -1\n④ NVL2(칼럼, 0, -1) → -1\n\n①은 단순 CASE문(Simple CASE)으로, CASE 칼럼 WHEN NULL은 내부적으로 칼럼 = NULL 비교처럼 동작한다. SQL에서 NULL = NULL은 TRUE가 아니라 UNKNOWN이므로 WHEN 절이 참이 되지 않아 THEN(-1)이 실행되지 않고 ELSE(0)이 반환된다. 따라서 칼럼 값이 NULL이어도 0을 반환한다.\n\n반면 ②~④는 모두 NULL일 때 -1을 반환한다. ② IS NULL은 NULL을 직접 판별하고, ③ Oracle DECODE는 일반 비교와 달리 NULL끼리를 같은 값으로 취급하며, ④ NVL2(칼럼, 0, -1)은 칼럼이 NULL이면 세 번째 인수인 -1을 반환한다.\n\n핵심은 일반적인 NULL 판별에는 = 비교가 아니라 IS NULL을 사용해야 한다는 점이다. ①처럼 단순 CASE에서 WHEN NULL로 비교하면 NULL을 판별하지 못한다. 따라서 칼럼 값이 NULL인 경우에도 THEN(-1)이 실행되지 않고 ELSE(0)이 반환되어, NULL일 때 -1을 반환하는 ②③④와 결과가 달라진다."
  },
  {
    "id": 3583,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "셀프조인을 수행할 수 있는 경우로 설명으로 옳은 것은?",
    "choices": [
      "두 테이블 내에 칼럼이 연관관계가 있는 경우",
      "두 테이블 내에 연관관계는 없지만 Join이 필요할 때",
      "한 테이블 내에 칼럼이 연관관계가 있는 경우",
      "한 테이블 내에 연관관계는 없지만 Join이 필요할 때"
    ],
    "answer": 2,
    "explanation": "정답: 3. 셀프조인은 하나의 테이블을 서로 다른 별칭으로 두 번 참조하여 같은 테이블 내부의 연관관계를 조인하는 방식이다.\n\n**오답 풀이**\n- 1번: 두 테이블 간 조인은 일반 조인이다.\n- 2번: 두 테이블 간 관계가 없으면 조인 조건이 부적절할 수 있다.\n- 3번: 한 테이블 내부의 계층, 관리자-사원 관계 등에서 셀프조인을 수행한다.\n- 4번: 연관관계가 없는 칼럼을 조인하는 것은 셀프조인의 본질적 목적이 아니다.\n\n**보충 개념**\n셀프조인은 사원 테이블의 사원번호와 관리자번호처럼 같은 테이블 내 컬럼 간 관계가 있을 때 사용한다. 반드시 테이블 별칭을 다르게 부여해야 한다."
  },
  {
    "id": 3584,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "TAB1의 쿼리문 수행 결과로 옳은 것은?\n\n**<TAB1>**\n| COL1 |\n|---|\n| a |\n| b |\n| c |\n\n```sql\nSELECT COL1\n  FROM TAB1\n WHERE COL1 = 'z';\n\nSELECT MAX(COL1)\n  FROM TAB1\n WHERE COL1 = 'z';\n```",
    "choices": [
      "NULL, NULL",
      "NULL, 공집합",
      "공집합, NULL",
      "공집합, 공집합"
    ],
    "answer": 2,
    "explanation": "정답: 3. 일반 SELECT는 조건을 만족하는 행이 없으면 공집합을 반환하고, 집계 함수 MAX는 대상 행이 없어도 한 행의 NULL을 반환한다.\n\n**오답 풀이**\n- 1번: 첫 번째 SELECT는 NULL 한 행이 아니라 공집합이다.\n- 2번: 두 번째 MAX 결과가 공집합이 아니라 NULL이다.\n- 3번: 공집합, NULL이 옳다.\n- 4번: 집계 함수는 조건에 맞는 행이 없어도 결과 행을 반환한다.\n\n**보충 개념**\n집계 함수는 GROUP BY가 없을 때 전체 결과 집합에 대해 하나의 결과를 반환한다. 대상 행이 없으면 COUNT는 0, MAX/MIN/SUM/AVG는 NULL을 반환한다."
  },
  {
    "id": 3585,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "함수의 실행 결과로 옳은 것은?\n\n```sql\nSELECT REGEXP_SUBSTR('aaaaabbbb', 'a{2,4}') FROM DUAL;\n```",
    "choices": [
      "aaa",
      "aaaa",
      "ab",
      "aab"
    ],
    "answer": 1,
    "explanation": "정답: 2. 정규식 a{2,4}는 a가 2회 이상 4회 이하 반복되는 패턴을 의미하며, 기본적으로 가능한 가장 긴 매칭인 aaaa를 반환한다.\n\n**오답 풀이**\n- 1번: aaa도 패턴 범위에는 맞지만 기본 매칭 결과는 더 긴 aaaa이다.\n- 2번: a가 4개 반복된 문자열이 반환되므로 옳다.\n- 3번: b는 정규식 패턴에 포함되지 않는다.\n- 4번: b는 정규식 패턴에 포함되지 않는다.\n\n**보충 개념**\nREGEXP_SUBSTR은 문자열에서 정규식과 일치하는 부분 문자열을 반환한다. {m,n}은 앞의 문자가 m회 이상 n회 이하 반복됨을 의미한다."
  },
  {
    "id": 3586,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 중복을 제거한 합집합을 반환하는 집합 연산자는?",
    "choices": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "MINUS"
    ],
    "answer": 0,
    "explanation": "정답: 1. UNION은 두 SELECT 결과를 합치면서 중복 행을 제거한다.\n\n**오답 풀이**\n- 1번: 중복 제거한 합집합이다.\n- 2번: 중복을 제거하지 않는 합집합이다.\n- 3번: 교집합을 반환한다.\n- 4번: 차집합을 반환한다.\n\n**보충 개념**\n집합 연산자는 컬럼 수와 대응 데이터 타입이 맞아야 사용할 수 있다. 중복 제거 여부는 UNION과 UNION ALL의 핵심 차이이다."
  },
  {
    "id": 3587,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "GROUP BY",
    "question": "급여가 2000 이상인 사원 중 부서별 급여의 합계 금액이 높은 순으로 정렬하려고 할 때 아래 쿼리에서 고쳐야 할 부분은?\n\n**<EMP>**\n| EMP_ID | DEPT_NAME | SALARY |\n|---:|---|---:|\n| 101 | HR | 2500 |\n| 102 | IT | 3000 |\n| 103 | IT | 2200 |\n| 104 | Sales | 1800 |\n| 105 | Sales | 2200 |\n| 106 | HR | 2000 |\n\n**<결과>**\n| DEPT_NAME | SUM(SALARY) |\n|---|---:|\n| IT | 5200 |\n| HR | 4500 |\n| Sales | 4000 |\n\n```sql\nSELECT DEPT_NAME, SUM(SALARY) -- (가)\n  FROM EMP\n WHERE SALARY >= 2000         -- (나)\n GROUP BY DEPT_NAME           -- (다)\n ORDER BY SUM(SALARY)         -- (라)\n```",
    "choices": [
      "(가)",
      "(나)",
      "(다)",
      "(라)"
    ],
    "answer": 3,
    "explanation": "정답: 4. 합계 금액이 높은 순으로 정렬하려면 ORDER BY SUM(SALARY) DESC로 작성해야 한다.\n\n**오답 풀이**\n- 1번: SELECT 절의 부서명과 급여 합계는 적절하다.\n- 2번: 급여 2000 이상 조건은 WHERE 절에 위치하는 것이 적절하다.\n- 3번: 부서별 합계를 구하려면 GROUP BY DEPT_NAME이 필요하다.\n- 4번: 높은 순 정렬이므로 DESC가 누락된 ORDER BY 부분을 고쳐야 한다.\n\n**보충 개념**\nORDER BY의 기본 정렬은 오름차순이다. 큰 값부터 정렬하려면 DESC를 명시해야 한다."
  },
  {
    "id": 3588,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "TCL",
    "question": "ROLLBACK에 관한 설명으로 옳지 않은 것은?",
    "choices": [
      "ROLLBACK은 트랜잭션의 변경 내용을 취소할 수 있다.",
      "SAVEPOINT를 지정하면 특정 저장점까지 롤백할 수 있다.",
      "COMMIT 이전으로 롤백할 수 있다.",
      "COMMIT이 완료된 변경 사항도 일반적으로 ROLLBACK으로 취소할 수 있다."
    ],
    "answer": 3,
    "explanation": "정답: 4. COMMIT이 완료된 변경 사항은 일반적인 ROLLBACK으로 되돌릴 수 없다.\n\n**오답 풀이**\n- 1번: ROLLBACK은 아직 커밋되지 않은 변경 내용을 취소한다.\n- 2번: SAVEPOINT를 사용하면 트랜잭션 일부만 되돌릴 수 있다.\n- 3번: COMMIT 전이라면 ROLLBACK으로 변경을 취소할 수 있다.\n- 4번: COMMIT 후에는 트랜잭션이 확정되므로 일반 ROLLBACK 대상이 아니다.\n\n**보충 개념**\nCOMMIT은 트랜잭션의 변경 사항을 영구 반영한다. ROLLBACK은 커밋 전 변경 사항을 취소하거나 SAVEPOINT 지점까지 되돌릴 때 사용한다."
  },
  {
    "id": 3589,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "SQL문의 논리적 연산 순서로 옳은 것은?",
    "choices": [
      "SELECT - FROM - WHERE - GROUP BY - HAVING - ORDER BY",
      "WHERE - FROM - HAVING - GROUP BY - SELECT - ORDER BY",
      "FROM - WHERE - GROUP BY - HAVING - SELECT - ORDER BY",
      "FROM - WHERE - HAVING - GROUP BY - SELECT - ORDER BY"
    ],
    "answer": 2,
    "explanation": "정답: 3. SQL의 논리적 처리 순서는 FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY 순서이다.\n\n**오답 풀이**\n- 1번: SELECT가 FROM보다 먼저 처리된다고 보아 틀렸다.\n- 2번: WHERE가 FROM보다 먼저 올 수 없고 GROUP BY와 HAVING 순서도 잘못되었다.\n- 3번: 논리적 처리 순서가 올바르다.\n- 4번: HAVING은 GROUP BY 이후 그룹에 대해 적용된다.\n\n**보충 개념**\nSQL 작성 순서와 논리적 실행 순서는 다르다. SELECT 별칭을 WHERE에서 사용할 수 없는 이유도 WHERE가 SELECT보다 먼저 처리되기 때문이다."
  },
  {
    "id": 3590,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "다음 빈칸에 들어갈 함수로 옳은 것은?\n\n**<TAB1>**\n| NAME | SALARY |\n|---|---:|\n| Alice | 5000 |\n| Bob | 7000 |\n| Charlie | 3000 |\n| David | 6000 |\n| Smith | 7000 |\n\n```sql\nSELECT NAME, SALARY, ________ OVER (ORDER BY SALARY DESC) AS RANKING\n  FROM TAB1;\n```\n\n**<결과>**\n| NAME | SALARY | RANKING |\n|---|---:|---:|\n| Bob | 7000 | 1 |\n| Smith | 7000 | 1 |\n| David | 6000 | 2 |\n| Alice | 5000 | 3 |\n| Charlie | 3000 | 4 |",
    "choices": [
      "DENSE_RANK()",
      "RANK()",
      "PERCENT_RANK()",
      "ROW_NUMBER()"
    ],
    "answer": 0,
    "explanation": "정답: 1. 동점자에게 같은 순위를 부여하고 다음 순위를 건너뛰지 않으므로 DENSE_RANK()가 적절하다.\n\n**오답 풀이**\n- 1번: 1, 1, 2, 3, 4 형태로 순위가 부여되므로 옳다.\n- 2번: RANK()라면 1, 1 다음 순위가 3이 된다.\n- 3번: PERCENT_RANK()는 상대 순위를 0~1 사이 값으로 계산한다.\n- 4번: ROW_NUMBER()는 동점자에게도 서로 다른 번호를 부여한다.\n\n**보충 개념**\nRANK는 동점 이후 순위를 건너뛰고, DENSE_RANK는 건너뛰지 않는다. ROW_NUMBER는 정렬 결과의 행 번호를 고유하게 부여한다."
  },
  {
    "id": 3591,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "트랜잭션의 모든 작업이 성공적으로 완료되거나 전혀 수행되지 않아야 하는 특징은?",
    "choices": [
      "원자성",
      "고립성",
      "일관성",
      "지속성"
    ],
    "answer": 0,
    "explanation": "정답: 1. 원자성은 트랜잭션의 작업이 모두 수행되거나 모두 수행되지 않아야 한다는 특성이다.\n\n**오답 풀이**\n- 1번: All or Nothing을 의미하므로 옳다.\n- 2번: 고립성은 동시에 실행되는 트랜잭션들이 서로 간섭하지 않아야 한다는 특성이다.\n- 3번: 일관성은 트랜잭션 수행 전후 데이터베이스가 일관된 상태여야 한다는 특성이다.\n- 4번: 지속성은 커밋된 결과가 영구적으로 보존되어야 한다는 특성이다.\n\n**보충 개념**\n트랜잭션의 ACID 특성은 원자성, 일관성, 고립성, 지속성이다. 데이터베이스의 신뢰성을 보장하는 핵심 개념이다."
  },
  {
    "id": 3592,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "두 테이블의 데이터가 아래와 같을 때 결과 값(반환된 행의 COL2 합)으로 옳은 것은?\n\n**<TAB1>**\n| COL1 | COL2 |\n|---|---:|\n| A | 10 |\n| B | 20 |\n| C | 30 |\n\n**<TAB2>**\n| COL1 | COL2 |\n|---|---:|\n| A | 20 |\n| B | 20 |\n| C | NULL |\n\n```sql\nSELECT *\n  FROM TAB1\n WHERE (COL1, COL2) NOT IN (SELECT COL1, COL2 FROM TAB2);\n```",
    "choices": [
      "0",
      "10",
      "20",
      "40"
    ],
    "answer": 1,
    "explanation": "다중 컬럼 NOT IN은 후보 행과의 행 단위 동등 비교의 OR를 부정한 것으로, 단일 컬럼과 동작이 다르다.\n\n(A, 10): (C,NULL)과 비교 시 첫 컬럼 A=C가 FALSE이므로 'FALSE AND UNKNOWN = FALSE'로 확정 → 세 비교 모두 FALSE → NOT IN이 TRUE → 반환\n(B, 20): (B,20)과 정확히 일치 → IN이 TRUE → 제외\n(C, 30): (C,NULL)과 비교 시 C=C가 TRUE라서 'TRUE AND UNKNOWN = UNKNOWN' → NOT IN이 UNKNOWN → 제외\n\n따라서 결과는 (A, 10) 한 건뿐이고 COL2 합은 10이다.\n'NULL이 있으면 NOT IN은 무조건 0건'이라는 함정은 첫 컬럼이 일치하는 행에만 적용된다.\n오답 풀이\n\n①: 0은 '단일 컬럼 NOT IN + NULL은 항상 0건'이라는 함정을 다중 컬럼에 잘못 적용한 오답. 첫 컬럼이 불일치하는 (A,10)은 정상 반환된다.\n③: 20은 (B,20)이 반환된다는 잘못된 가정의 값. (B,20)은 일치하여 제외된다.\n④: 40은 (A,10)+(C,30) 두 행이 모두 반환된다는 가정의 값이나, (C,30)은 UNKNOWN으로 제외된다."
  },
  {
    "id": 3593,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "주어진 쿼리문과 결과가 동일한 것은?\n\n```sql\nUPDATE TAB1 T1\n   SET COL1 = (SELECT MAX(NULL)\n                 FROM TAB2 T2\n                WHERE T1.COL1 = T2.COL2\n                  AND T1.COL1 >= 200);\n```",
    "choices": [
      "UPDATE TAB1 SET COL1 = (SELECT MAX(COL2) FROM TAB2 T2 WHERE T1.COL1 = T2.COL2 AND T1.COL1 >= 200);",
      "UPDATE TAB1 SET COL1 = (SELECT COALESCE(MAX(NULL), 0) FROM TAB2 T2 WHERE T1.COL1 = T2.COL2);",
      "UPDATE TAB1 SET COL1 = (SELECT MAX(0) FROM TAB2 T2 WHERE T1.COL1 = T2.COL2 AND T1.COL1 >= 200);",
      "UPDATE TAB1 SET COL1 = NULL;"
    ],
    "answer": 3,
    "explanation": "정답: 4. MAX(NULL)은 결과적으로 NULL을 반환하므로 각 행의 COL1은 NULL로 갱신된다.\n\n**오답 풀이**\n- 1번: MAX(COL2)는 실제 값의 최댓값을 반환할 수 있어 원문과 다르다.\n- 2번: COALESCE로 NULL을 0으로 바꾸므로 원문과 다르다.\n- 3번: MAX(0)은 조건에 맞는 행이 있으면 0을 반환하므로 원문과 다르다.\n- 4번: 원문은 결과적으로 COL1을 NULL로 갱신하므로 동일하다.\n\n**보충 개념**\n집계 함수 MAX는 모든 입력이 NULL이면 NULL을 반환한다. 스칼라 서브쿼리 결과가 NULL이면 UPDATE 대상 컬럼도 NULL로 설정될 수 있다."
  },
  {
    "id": 3594,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "사원의 관리자와 차상위관리자를 함께 출력하는 쿼리문으로 옳은 것은?",
    "choices": [
      "사원 A LEFT OUTER JOIN 관리자 B ON A.MGR_ID = B.EMP_ID LEFT OUTER JOIN 차상위관리자 C ON B.MGR_ID = C.EMP_ID",
      "사원 A LEFT OUTER JOIN 관리자 B ON A.EMP_ID = B.EMP_ID LEFT OUTER JOIN 차상위관리자 C ON A.MGR_ID = C.MGR_ID",
      "사원 A LEFT OUTER JOIN 관리자 B ON A.EMP_ID = B.MGR_ID LEFT OUTER JOIN 차상위관리자 C ON B.EMP_ID = C.MGR_ID",
      "사원 A LEFT OUTER JOIN 관리자 B ON A.EMP_ID = B.EMP_ID LEFT OUTER JOIN 차상위관리자 C ON B.EMP_ID = C.EMP_ID"
    ],
    "answer": 0,
    "explanation": "정답: 1. 사원의 관리자 정보를 찾으려면 A.MGR_ID = B.EMP_ID로 조인하고, 관리자의 상위 관리자는 B.MGR_ID = C.EMP_ID로 다시 조인해야 한다.\n\n**오답 풀이**\n- 1번: 사원→관리자→차상위관리자 관계를 올바르게 따라간다.\n- 2번: 사원번호와 관리자 사원번호를 같은 값으로 비교해 관리자 관계를 찾지 못한다.\n- 3번: A.EMP_ID = B.MGR_ID는 사원의 부하 직원을 찾는 방향이다.\n- 4번: 동일 사원번호끼리 조인하므로 관리자 계층을 표현하지 못한다.\n\n**보충 개념**\n조직도처럼 한 테이블 안에서 계층 관계를 표현할 때 셀프조인을 사용한다. 사원번호와 관리자번호의 방향을 정확히 구분해야 한다."
  },
  {
    "id": 3595,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "테이블 데이터가 각각 10개 있을 때 수행 결과는?\n\n```sql\nSELECT COUNT(*) FROM TAB1, TAB2;\n```",
    "choices": [
      "10",
      "20",
      "100",
      "오류가 발생한다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 조인 조건 없이 두 테이블을 FROM 절에 나열하면 Cartesian Product가 발생하여 10 × 10 = 100건이 된다.\n\n**오답 풀이**\n- 1번: 한 테이블의 행 수만 계산한 오류이다.\n- 2번: 두 테이블 행 수를 단순히 더한 오류이다.\n- 3번: 조인 조건이 없으므로 모든 조합의 수 100이 맞다.\n- 4번: 문법적으로 오류가 발생하지 않는다.\n\n**보충 개념**\nCartesian Product는 두 테이블의 모든 행 조합을 생성한다. 실무에서는 의도하지 않은 대량 결과를 막기 위해 조인 조건을 명확히 작성해야 한다."
  },
  {
    "id": 3596,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "JOIN",
    "question": "주어진 테이블에 대해 쿼리를 수행한 결과의 행 수(건수)로 옳은 것은?\n\n**<TAB1>**\n| ID | CUSTOMER |\n|---:|---|\n| 1 | A |\n| 2 | B |\n| 3 | C |\n\n**<TAB2>**\n| C_ID | PHONE |\n|---|---|\n| A | 111-1111 |\n| A | 222-2222 |\n| B | 333-3333 |\n| C | 444-4444 |\n| D | 555-5555 |\n\n```sql\nSELECT * FROM TAB1 NATURAL JOIN TAB2;\n```",
    "choices": [
      "0",
      "3",
      "5",
      "15"
    ],
    "answer": 3,
    "explanation": "정답: 4. NATURAL JOIN은 이름이 같은 컬럼을 기준으로 조인하는데, 두 테이블에는 이름이 같은 컬럼이 없으므로 Cartesian Product처럼 3×5=15건이 반환된다.\n\n**오답 풀이**\n- 1번: 공통 컬럼이 없다고 해서 항상 0건이 되는 것은 아니다.\n- 2번: CUSTOMER와 C_ID는 값은 대응되지만 컬럼명이 다르므로 NATURAL JOIN 기준이 아니다.\n- 3번: TAB2의 행 수만 반환되는 것이 아니다.\n- 4번: 공통 컬럼이 없어 모든 조합이 생성되므로 15건이다.\n\n**보충 개념**\nNATURAL JOIN은 동일한 이름의 컬럼을 자동으로 조인 조건으로 사용한다. 컬럼명이 다르면 의미상 같은 값이어도 조인 조건으로 사용되지 않는다."
  },
  {
    "id": 3597,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "주어진 결과를 출력하는 쿼리로 옳은 것은?\n\n**<TAB1>**\n| COL1 | COL2 |\n|---|---:|\n| A | 10 |\n| A | 20 |\n| B | 20 |\n| C | 30 |\n\n**<결과>**\n| COUNT() |\n|---:|\n| 2 |",
    "choices": [
      "SELECT COUNT(DISTINCT COL1) FROM TAB1 WHERE COL2 <= 20",
      "SELECT COUNT(COL1) FROM TAB1 WHERE COL2 <= 20",
      "SELECT COUNT(COL1) FROM TAB1 WHERE COL2 <= 20 GROUP BY COL1",
      "SELECT COUNT(COL1) FROM TAB1 WHERE COL2 < 30 GROUP BY COL1"
    ],
    "answer": 0,
    "explanation": "정답: 1. COL2 <= 20인 행의 COL1은 A, A, B이고, DISTINCT COL1의 개수는 A와 B로 2개이다.\n\n**오답 풀이**\n- 1번: 중복을 제거한 COL1 개수가 2이므로 옳다.\n- 2번: 조건에 맞는 행 수는 3건이다.\n- 3번: GROUP BY COL1로 인해 A 그룹 2, B 그룹 1처럼 여러 행이 나올 수 있다.\n- 4번: GROUP BY COL1로 인해 단일 결과 2만 반환된다고 보기 어렵다.\n\n**보충 개념**\nCOUNT(DISTINCT 컬럼)은 중복을 제거한 값의 개수를 센다. GROUP BY를 사용하면 그룹별 결과가 반환되므로 단일 집계 결과와 다를 수 있다."
  },
  {
    "id": 3598,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "제약조건에 관한 설명으로 옳은 것은?",
    "choices": [
      "기본키는 한 칼럼에 하나의 속성만 가질 수 있다.",
      "외래키는 한 칼럼에 여러 개의 속성을 가질 수 있다.",
      "UNIQUE는 NULL을 허용하지 않는다.",
      "기본키는 UNIQUE와 NOT NULL 조건을 모두 만족해야 한다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 기본키는 각 행을 유일하게 식별해야 하므로 중복될 수 없고 NULL도 허용하지 않는다.\n\n**오답 풀이**\n- 1번: 기본키는 단일 컬럼뿐 아니라 여러 컬럼으로 구성된 복합키도 가능하다.\n- 2번: 외래키는 참조 무결성을 위한 제약조건이며 '여러 개의 속성을 가진다'는 설명은 부정확하다.\n- 3번: UNIQUE 제약조건은 DBMS에 따라 NULL을 허용할 수 있으며, SQLD 관점에서는 기본키와 달리 NULL 허용 가능성을 구분한다.\n- 4번: 기본키는 UNIQUE와 NOT NULL 성격을 모두 가진다.\n\n**보충 개념**\n기본키는 엔터티의 각 인스턴스를 식별하는 핵심 제약조건이다. UNIQUE는 중복 방지 제약이지만 기본키와 달리 NULL 처리에서 차이가 있다."
  },
  {
    "id": 3599,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 중 주어진 문자열 내에서 특정 패턴이 시작되는 위치를 정수로 반환하는 함수는?",
    "choices": [
      "REGEXP_COUNT",
      "REGEXP_LIKE",
      "REGEXP_REPLACE",
      "REGEXP_INSTR"
    ],
    "answer": 3,
    "explanation": "정답: 4. REGEXP_INSTR은 정규식 패턴이 문자열에서 나타나는 시작 위치를 반환한다.\n\n**오답 풀이**\n- 1번: REGEXP_COUNT는 패턴의 출현 횟수를 반환한다.\n- 2번: REGEXP_LIKE는 패턴 일치 여부를 조건식으로 판단한다.\n- 3번: REGEXP_REPLACE는 패턴과 일치하는 부분을 치환한다.\n- 4번: REGEXP_INSTR은 패턴의 위치를 정수로 반환한다.\n\n**보충 개념**\nOracle 정규식 함수에는 REGEXP_LIKE, REGEXP_REPLACE, REGEXP_SUBSTR, REGEXP_INSTR, REGEXP_COUNT 등이 있다. 각각 일치 판단, 치환, 추출, 위치 반환, 개수 반환 역할을 한다."
  },
  {
    "id": 3600,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "다음 SQL의 실행 결과로 옳은 것은?\n\n**<PLAYER>**\n| NAME | TEAM | HEIGHT |\n|---|---|---:|\n| PARK | Tigers | 190 |\n| KIM | Bears | 180 |\n| LEE | Tigers | NULL |\n\n```sql\nSELECT NAME\nFROM PLAYER\nWHERE TEAM = 'Tigers'\n  AND HEIGHT > 185;\n```",
    "choices": [
      "PARK",
      "PARK, KIM",
      "PARK, LEE",
      "PARK, KIM, LEE"
    ],
    "answer": 0,
    "explanation": "정답: 1. TEAM이 Tigers이면서 HEIGHT가 185보다 큰 행은 PARK뿐이다.\n\n**오답 풀이**\n- 1번: 조건을 모두 만족하는 유일한 행이다.\n- 2번: KIM은 TEAM 조건을 만족하지 않는다.\n- 3번: LEE는 HEIGHT가 NULL이므로 `> 185` 조건을 만족하지 않는다.\n- 4번: KIM과 LEE 모두 제외된다.\n\n**보충 개념**\n비교 연산에서 NULL은 TRUE가 아니라 UNKNOWN으로 처리되므로 WHERE 절에서 제외된다."
  },
  {
    "id": 3601,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 SQL의 실행 결과로 옳은 것은?\n\n**<EMP>**\n| BONUS | SALARY |\n|---:|---:|\n| 1000 | 3000 |\n| 1000 | 2500 |\n| NULL | 4000 |\n\n```sql\nSELECT AVG(BONUS), MIN(SALARY)\nFROM EMP;\n```",
    "choices": [
      "1000, 2000",
      "1000, 3000",
      "1000, 2500",
      "NULL, 2500"
    ],
    "answer": 2,
    "explanation": "정답: 3. AVG(BONUS)는 NULL을 제외하고 (1000 + 1000) / 2 = 1000이고, MIN(SALARY)는 2500이다.\n\n**오답 풀이**\n- 1번: SALARY 최솟값이 2000이 아니다.\n- 2번: MIN(SALARY)는 3000이 아니라 2500이다.\n- 3번: AVG와 MIN 계산이 모두 맞다.\n- 4번: AVG는 집계 대상에 NULL이 일부 포함되어도 전체 결과가 NULL이 되지 않는다.\n\n**보충 개념**\nAVG, MIN, MAX, SUM 등 대부분의 집계 함수는 NULL을 제외하고 계산한다."
  },
  {
    "id": 3602,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "JOIN",
    "question": "다음 쿼리에 대한 설명 중 옳은 것은?\n\n```sql\nSELECT 사원.사원명, 부서.부서명\nFROM 사원\n     JOIN 부서\n       ON 부서.부서ID = 사원.부서ID\n      AND 사원.등급 >= 2;\n```",
    "choices": [
      "2등급 이상의 사원을 모두 출력한다.",
      "부서에 소속되지 않은 사원은 제외한다.",
      "모든 부서와 모든 사원을 조건 없이 출력한다.",
      "등급 조건은 조인 결과에 영향을 주지 않는다."
    ],
    "answer": 1,
    "explanation": "정답: 2. INNER JOIN 조건을 만족하지 못하는 사원은 결과에서 제외되므로, 부서ID가 매칭되지 않는 사원은 출력되지 않는다.\n\n**오답 풀이**\n- 1번: 등급 조건을 만족해도 부서와 매칭되지 않으면 제외된다.\n- 2번: 조인 조건을 만족하지 못하면 출력되지 않는다.\n- 3번: 조인 조건이 있으므로 카테시안 곱이 아니다.\n- 4번: `사원.등급 >= 2` 조건은 결과 행 수에 직접 영향을 준다.\n\n**보충 개념**\nINNER JOIN의 ON 조건은 조인 대상 행을 제한한다. WHERE 절에 있든 ON 절에 있든 논리적으로 결과를 줄이는 조건이 될 수 있다."
  },
  {
    "id": 3603,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "키가 180 초과인 농구선수를 구하는 문제",
    "choices": [
      "키 조건 없이 모든 농구선수를 조회하는 쿼리",
      "WHERE 키 < 180 조건을 사용하는 쿼리",
      "WHERE 키 > 180 조건을 사용하는 쿼리",
      "GROUP BY 키 조건만 사용하는 쿼리"
    ],
    "answer": 2,
    "explanation": "정답: 3. '180 초과'는 `> 180` 조건으로 표현해야 한다.\n\n**오답 풀이**\n- 1번: 키 조건이 없으면 원하는 대상만 조회할 수 없다.\n- 2번: 180보다 작은 선수를 조회하므로 반대 조건이다.\n- 3번: 180 초과 조건을 정확히 표현한다.\n- 4번: GROUP BY는 집계용 절이며 행 필터링 조건을 대신할 수 없다.\n\n**보충 개념**\n'이상'은 `>=`, '초과'는 `>`로 표현한다. 지문 표현과 SQL 비교 연산자를 일치시키는 것이 중요하다."
  },
  {
    "id": 3604,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 UPDATE 쿼리의 동작에 대한 설명으로 옳은 것은?\n\n```sql\nUPDATE 선수 A\nSET (팀명, 키) = (\n    SELECT B.팀명, B.키\n    FROM 선수 B\n    WHERE B.팀명 = A.팀명\n      AND B.포지션 = 'G'\n      AND B.키 = (\n          SELECT MIN(C.키)\n          FROM 선수 C\n          WHERE C.팀명 = A.팀명\n            AND C.포지션 = 'G'\n      )\n);\n```",
    "choices": [
      "조건에 맞는 행의 기존 값을 그대로 유지한다.",
      "팀별 최장신 선수의 팀명과 키로 갱신한다.",
      "전체 선수 중 최단신 한 명의 값으로만 갱신한다.",
      "같은 팀에 포지션 'G' 인 선수가 없으면 해당 행의 팀명·키가 NULL 로 갱신된다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 상관 서브쿼리 결과가 없는 행은 UPDATE 대상 컬럼이 NULL로 설정되므로, 조건에 맞는 가드가 없는 팀은 NULL 처리된다.\n\n**오답 풀이**\n- 1번: 서브쿼리 결과가 없을 때 기존 값을 유지하지 않는다.\n- 2번: MIN(키)를 사용하므로 최장신이 아니라 최단신 기준이다.\n- 3번: 팀별 상관 조건이 있으므로 전체 최단신 한 명만 구하는 것이 아니다.\n- 4번: 조건에 맞는 값이 없으면 NULL이 들어간다.\n\n**보충 개념**\nUPDATE의 스칼라 서브쿼리는 행별로 평가된다. 일치하는 결과가 없으면 대상 컬럼이 NULL로 바뀔 수 있다는 점을 주의해야 한다."
  },
  {
    "id": 3605,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "결과 값으로 옳은 것은?\n\n**<매출>**\n| 금액 |\n|---:|\n| 300 |\n| 500 |\n| NULL |\n\n```sql\nSELECT SUM(NVL(금액, 0)) AS RESULT\nFROM 매출;\n```",
    "choices": [
      "800",
      "1600",
      "2975",
      "오류가 발생한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. NULL을 0으로 바꾼 뒤 합계를 구하므로 300 + 500 + 0 = 800이다.\n\n**오답 풀이**\n- 1번: NVL 처리 후 합계가 맞다.\n- 2번: 존재하지 않는 추가 값이 포함된 계산이다.\n- 3번: 데이터와 맞지 않는 결과이다.\n- 4번: NVL과 SUM 조합은 정상적으로 실행 가능하다.\n\n**보충 개념**\nSUM은 원래 NULL을 제외하지만, NVL을 함께 사용하면 NULL을 특정 값으로 바꿔 집계 기준을 명시할 수 있다."
  },
  {
    "id": 3606,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "다음 중 NULL 값을 찾는 조건으로 옳은 것은?",
    "choices": [
      "COL1 IS NULL",
      "COL1 = NULL",
      "COL1 <> NULL",
      "COL1 IN (NULL)"
    ],
    "answer": 0,
    "explanation": "정답: 1. NULL 비교는 `=`가 아니라 `IS NULL` 또는 `IS NOT NULL`을 사용해야 한다.\n\n**오답 풀이**\n- 1번: NULL 판별에 맞는 문법이다.\n- 2번: `= NULL`은 TRUE가 되지 않는다.\n- 3번: `<> NULL`도 TRUE가 되지 않는다.\n- 4번: `IN (NULL)`로는 NULL 값을 찾을 수 없다.\n\n**보충 개념**\nSQL의 NULL은 값이 아니라 미정 상태이므로 일반 비교 연산자로 판단하지 않는다."
  },
  {
    "id": 3607,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "GROUP BY",
    "question": "매출액이 높은 순서대로 직원별 총 매출액을 출력하려고 한다. 아래 SQL 에서 고쳐야 할 부분은?\n\n**<SALES>**\n| EMP_ID | AMOUNT |\n|---:|---:|\n| 101 | 3000 |\n| 102 | 5000 |\n| 101 | 2500 |\n| 103 | 4000 |\n| 102 | 1500 |\n\n```sql\nSELECT EMP_ID, SUM(AMOUNT)   -- (가)\n  FROM SALES                 -- (나)\n WHERE AMOUNT > 0            -- (다)\n GROUP BY EMP_ID\n ORDER BY SUM(AMOUNT)        -- (라)\n```",
    "choices": [
      "(가)",
      "(나)",
      "(다)",
      "(라)"
    ],
    "answer": 3,
    "explanation": "정답: 4. 매출액이 높은 순서대로 정렬하려면 ORDER BY SUM(AMOUNT) DESC 처럼 내림차순을 명시해야 한다. ORDER BY 의 기본 정렬 방향은 ASC(오름차순) 이므로 DESC 를 빼면 매출 합계가 작은 직원부터 출력된다.\n\n**오답 풀이**\n- 1번: (가) SELECT 절은 직원 ID 와 매출 합계를 정확히 조회하고 있어 수정할 필요가 없다.\n- 2번: (나) FROM 절의 테이블 지정은 문제 의도와 무관하다.\n- 3번: (다) WHERE 절은 행 필터링 조건이며 정렬 방향과 관련이 없다.\n- 4번: (라) ORDER BY 절에 DESC 가 누락되어 있으므로 ORDER BY SUM(AMOUNT) DESC 로 고쳐야 한다.\n\n**보충 개념**\nORDER BY 의 기본값은 ASC(오름차순) 이다. '높은 순서', '큰 값부터' 같은 요구사항은 DESC 를 반드시 명시해야 한다. SELECT 절에서 부여한 별칭을 ORDER BY 에서 그대로 사용할 수도 있다 (예: SELECT SUM(AMOUNT) AS TOTAL … ORDER BY TOTAL DESC)."
  },
  {
    "id": 3608,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUP BY",
    "question": "아래와 같이 `(A, B)` 상세 집계, `(A)` 상위 단계 소계, 전체 합계 `()` 의 세 그룹 집합만 생성하는 GROUP BY 확장 기능으로 가장 적절한 것은?\n\n**<생성되는 그룹 집합>**\n- `(A, B)` — 상세 집계\n- `(A)` — 상위 단계 소계\n- `()` — 전체 합계",
    "choices": [
      "CUBE(A, B)",
      "ROLLUP(A, B)",
      "GROUPING SETS((A, B), (B), ())",
      "GROUPING(A, B)"
    ],
    "answer": 1,
    "explanation": "정답: 2. ROLLUP(A, B) 는 지정한 컬럼 순서에 따라 `(A, B)`, `(A)`, `()` 의 계층적 그룹 집합을 차례로 생성한다.\n\n**오답 풀이**\n- 1번: CUBE(A, B) 는 가능한 모든 조합인 `(A, B)`, `(A)`, `(B)`, `()` 네 그룹을 생성하므로 `(B)` 가 추가로 포함된다.\n- 2번: ROLLUP(A, B) 의 결과 그룹 집합이 문제의 요구와 정확히 일치한다.\n- 3번: GROUPING SETS((A, B), (B), ()) 는 `(A)` 가 빠지고 대신 `(B)` 가 포함되어 요구와 다르다.\n- 4번: GROUPING(A, B) 는 집계 행 여부를 1/0 으로 판별하는 함수이며 그룹 집합을 생성하는 절이 아니다.\n\n**보충 개념**\nROLLUP 은 가장 왼쪽 컬럼부터 차례로 묶음을 줄여나가는 계층 집계이므로 (부서, 직무) 별 상세 → (부서) 별 소계 → 전체 합계처럼 상위 단계로 올라가는 리포트에 적합하다. CUBE 는 가능한 모든 조합, GROUPING SETS 는 임의 조합을 직접 명시할 때 사용한다."
  },
  {
    "id": 3609,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 중 `(부서, 직무)`별 상세 집계와 `부서`별 소계, 전체 합계를 계층적으로 함께 출력하기에 가장 적절한 것은?",
    "choices": [
      "ROLLUP()",
      "GROUPING()",
      "GROUPING SETS()",
      "CUBE()"
    ],
    "answer": 0,
    "explanation": "정답: 1. 계층적인 소계와 총계를 순서대로 만들 때는 ROLLUP이 가장 적절하다.\n\n**오답 풀이**\n- 1번: `(부서, 직무)`, `(부서)`, `()` 형태의 계층적 집계를 만들 수 있다.\n- 2번: GROUPING은 집계 행 여부를 판별하는 함수이다.\n- 3번: GROUPING SETS는 원하는 조합을 직접 나열할 때 주로 사용한다.\n- 4번: CUBE는 가능한 모든 조합의 소계를 생성한다.\n\n**보충 개념**\nROLLUP(A, B)은 상세 `(A, B)`와 상위 단계 `(A)`, 전체 합계 `()`를 순서대로 생성한다."
  },
  {
    "id": 3610,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "TCL",
    "question": "결과 값으로 옳은 것은?\n\n```sql\nCREATE TABLE TAB1 (COL1 NUMBER, COL2 NUMBER);\nINSERT INTO TAB1 VALUES (1, 2);\nINSERT INTO TAB1 VALUES (2, 1);\nINSERT INTO TAB1 VALUES (3, 4);\nSAVEPOINT 1;\n\nUPDATE TAB1 SET COL1=4 WHERE COL2<=2;\nSAVEPOINT 2;\n\nDELETE FROM TAB1 WHERE COL2=2;\nROLLBACK TO SAVEPOINT 2;\n\nINSERT INTO TAB1 VALUES (4, 1);\nCOMMIT;\n\nSELECT COUNT(*) FROM TAB1 WHERE COL1=4;\n```",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "정답: 3. UPDATE 후 COL2가 1 또는 2인 기존 두 행의 COL1이 4가 되고, DELETE는 SAVEPOINT 2로 롤백되어 취소된다. 이후 (4,1)이 추가되므로 COL1=4인 행은 총 3개이다.\n\n**오답 풀이**\n- 1번: UPDATE로 변경된 행과 INSERT 행을 모두 반영하지 않은 결과이다.\n- 2번: UPDATE된 (4,1) 행을 누락한 결과이다.\n- 3번: UPDATE된 2행과 INSERT된 1행을 합쳐 3개이므로 옳다.\n- 4번: COL1=4인 행은 4개가 아니다.\n\n**보충 개념**\nSAVEPOINT 이후 ROLLBACK TO SAVEPOINT를 수행하면 해당 저장점 이후의 변경만 취소된다. SAVEPOINT 2 이후의 DELETE는 취소되지만, SAVEPOINT 2 이전의 UPDATE는 유지된다."
  },
  {
    "id": 3611,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "내부 스키마에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "사용자별로 바라보는 데이터베이스의 논리적 관점을 정의한다.",
      "데이터베이스 전체의 통합된 논리적 구조를 정의한다.",
      "데이터가 물리적 저장 장치에 실제로 저장되는 방법을 표현한다.",
      "응용 프로그램에서 사용하는 화면 단위의 데이터 구조만 표현한다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 내부 스키마는 데이터베이스가 물리적 저장 장치에 실제로 저장되는 방법을 표현하는 스키마이다.\n\n**오답 풀이**\n- 1번: 외부 스키마에 가깝다.\n- 2번: 개념 스키마에 가깝다.\n- 3번: 내부 스키마에 대한 올바른 설명이다.\n- 4번: 외부 사용자 관점의 일부일 수 있으나 내부 스키마 설명은 아니다.\n\n**보충 개념**\n3단계 스키마 구조는 외부 스키마, 개념 스키마, 내부 스키마로 나뉜다. 내부 스키마는 저장 구조, 인덱스, 접근 경로 등 물리적 저장 방식을 다룬다."
  },
  {
    "id": 3612,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "엔터티명에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "가능하면 현업 업무에서 사용하는 용어를 사용한다.",
      "가능하면 약어를 사용한다.",
      "단수 명사를 사용한다.",
      "모든 엔터티에서 유일하게 이름이 부여되어야 한다."
    ],
    "answer": 1,
    "explanation": "정답: 2. 엔터티명은 가능하면 약어를 사용하지 않고 업무에서 사용하는 명확한 용어를 사용해야 한다.\n\n**오답 풀이**\n- 1번: 올바른 명명 기준이다.\n- 2번: 약어는 의미 전달을 어렵게 하므로 부적절하다.\n- 3번: 엔터티명은 일반적으로 단수 명사를 사용한다.\n- 4번: 엔터티명은 모델 내에서 유일해야 한다.\n\n**보충 개념**\n엔터티명은 업무 의미를 명확히 표현해야 하며, 전체 모델 안에서 유일해야 한다. 약어는 조직 내 합의가 없다면 혼란을 유발할 수 있다."
  },
  {
    "id": 3613,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "기본 엔터티에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "업무에 원래 존재하는 정보이다.",
      "다른 엔터티와의 관계에 의해 생성되지 않고 독립적으로 생성 가능하다.",
      "다른 엔터티로부터 주식별자를 상속받는다.",
      "타 엔터티의 부모 역할을 할 수 있다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 기본 엔터티는 다른 엔터티로부터 주식별자를 상속받지 않고 자신의 고유한 주식별자를 가진다.\n\n**오답 풀이**\n- 1번: 기본 엔터티의 특징이다.\n- 2번: 기본 엔터티는 독립적으로 생성 가능하다.\n- 3번: 다른 엔터티로부터 주식별자를 상속받는 것은 기본 엔터티의 특징이 아니다.\n- 4번: 기본 엔터티는 중심 정보로서 다른 엔터티의 부모 역할을 할 수 있다.\n\n**보충 개념**\n엔터티는 발생 시점과 성격에 따라 기본 엔터티, 중심 엔터티, 행위 엔터티 등으로 구분할 수 있다. 기본 엔터티는 업무의 원천 데이터에 해당한다."
  },
  {
    "id": 3614,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "다음 설명에 해당하는 정규화 단계로 가장 적절한 것은?\n\n**<보기>**\n복합 주식별자를 가진 테이블에서 일반 속성이 주식별자 전체가 아니라 일부 속성에만 종속되어 있어 이를 별도 테이블로 분리하였다.\n\n<svg width=\"560\" height=\"250\" viewBox=\"0 0 560 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"복합 식별자 일부에만 종속된 속성을 분리하는 제2정규화 예시\"><style>.box{fill:#fff;stroke:#222;stroke-width:1.5}.head{fill:#f1f5f9;stroke:#222;stroke-width:1.5}.txt{font-family:Arial,'Noto Sans KR',sans-serif;font-size:13px;fill:#111}.small{font-size:12px;fill:#444}.arrow{stroke:#222;stroke-width:1.5;marker-end:url(#arrow)}</style><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#222\"/></marker></defs><rect x=\"25\" y=\"35\" width=\"190\" height=\"160\" class=\"box\"/><rect x=\"25\" y=\"35\" width=\"190\" height=\"30\" class=\"head\"/><text x=\"120\" y=\"55\" text-anchor=\"middle\" class=\"txt\">수강</text><text x=\"45\" y=\"90\" class=\"txt\"># 학생ID</text><text x=\"45\" y=\"115\" class=\"txt\"># 과목ID</text><text x=\"45\" y=\"140\" class=\"txt\">과목명</text><text x=\"45\" y=\"165\" class=\"txt\">성적</text><text x=\"120\" y=\"215\" text-anchor=\"middle\" class=\"small\">과목명은 과목ID에만 종속</text><line x1=\"230\" y1=\"115\" x2=\"315\" y2=\"115\" class=\"arrow\"/><text x=\"272\" y=\"100\" text-anchor=\"middle\" class=\"small\">분리</text><rect x=\"335\" y=\"25\" width=\"190\" height=\"100\" class=\"box\"/><rect x=\"335\" y=\"25\" width=\"190\" height=\"30\" class=\"head\"/><text x=\"430\" y=\"45\" text-anchor=\"middle\" class=\"txt\">수강</text><text x=\"355\" y=\"70\" class=\"txt\"># 학생ID</text><text x=\"355\" y=\"90\" class=\"txt\"># 과목ID</text><text x=\"355\" y=\"110\" class=\"txt\">성적</text><rect x=\"335\" y=\"145\" width=\"190\" height=\"80\" class=\"box\"/><rect x=\"335\" y=\"145\" width=\"190\" height=\"30\" class=\"head\"/><text x=\"430\" y=\"165\" text-anchor=\"middle\" class=\"txt\">과목</text><text x=\"355\" y=\"190\" class=\"txt\"># 과목ID</text><text x=\"355\" y=\"210\" class=\"txt\">과목명</text></svg>",
    "choices": [
      "제1정규화",
      "제2정규화",
      "제3정규화",
      "보이스-코드 정규화"
    ],
    "answer": 1,
    "explanation": "정답: 2. 복합 식별자의 일부에만 종속되는 부분 함수 종속을 제거하는 것은 제2정규화이다.\n\n**오답 풀이**\n- 1번: 제1정규화는 반복 속성이나 다중값 속성을 제거한다.\n- 2번: 부분 함수 종속 제거에 해당한다.\n- 3번: 제3정규화는 이행 함수 종속을 제거한다.\n- 4번: 보이스-코드 정규화는 결정자가 후보키가 되도록 하는 더 강한 정규화이다.\n\n**보충 개념**\n제2정규형은 제1정규형을 만족하면서 기본키 전체에 대해 완전 함수 종속을 만족해야 한다. 복합키 일부에만 의존하는 속성은 별도 엔터티로 분리한다."
  },
  {
    "id": 3615,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "제1정규형에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "속성의 원자성을 만족해야 한다.",
      "반복 속성이나 다중값 속성을 제거한다.",
      "하나의 속성에는 하나의 값만 저장되도록 한다.",
      "일반 속성은 주식별자 전체에 종속되어야 한다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 일반 속성이 주식별자 전체에 종속되어야 한다는 설명은 제2정규형의 핵심 조건이다.\n\n**오답 풀이**\n- 1번: 제1정규형의 핵심 조건이다.\n- 2번: 제1정규화는 반복 그룹과 다중값을 제거한다.\n- 3번: 원자값만 저장하도록 하는 설명이다.\n- 4번: 부분 함수 종속 제거와 관련된 제2정규형 설명이다.\n\n**보충 개념**\n제1정규형은 컬럼 값의 원자성을 보장하는 단계이다. 복합키 전체 종속성은 제2정규형에서 다루는 내용이다."
  },
  {
    "id": 3616,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "식별자 관계에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "부모 엔터티의 식별자가 자식 엔터티의 주식별자에 포함된다.",
      "자식 엔터티는 부모 엔터티에 존재 종속될 수 있다.",
      "부모 엔터티와 자식 엔터티의 관계는 항상 1:1 관계이다.",
      "부모 식별자와 자식 자체 식별자가 결합되어 자식의 주식별자를 구성할 수 있다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 식별자 관계라고 해서 부모와 자식 관계가 항상 1:1인 것은 아니며 1:M 관계도 가능하다.\n\n**오답 풀이**\n- 1번: 식별자 관계의 특징이다.\n- 2번: 자식 엔터티가 부모에 종속될 수 있다.\n- 3번: 항상 1:1이라는 설명은 틀리다.\n- 4번: 부모 식별자를 포함해 복합 주식별자를 구성할 수 있다.\n\n**보충 개념**\n식별자 관계는 부모의 주식별자가 자식의 주식별자 일부 또는 전부가 되는 관계이다. 자식 엔터티의 식별 방식에 따라 1:1 또는 1:M 관계가 가능하다."
  },
  {
    "id": 3617,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "트랜잭션의 특성 중 작업이 모두 수행되거나 모두 수행되지 않아야 한다는 성질은?",
    "choices": [
      "원자성",
      "일관성",
      "고립성",
      "지속성"
    ],
    "answer": 0,
    "explanation": "정답: 1. 원자성은 트랜잭션의 연산이 모두 반영되거나 전혀 반영되지 않아야 한다는 특성이다.\n\n**오답 풀이**\n- 1번: 모두 수행 또는 모두 취소를 의미한다.\n- 2번: 일관성은 트랜잭션 수행 전후 데이터 무결성이 유지되는 성질이다.\n- 3번: 고립성은 동시에 실행되는 트랜잭션이 서로 간섭하지 않는 성질이다.\n- 4번: 지속성은 커밋된 결과가 영구적으로 보존되는 성질이다.\n\n**보충 개념**\n트랜잭션의 ACID는 Atomicity, Consistency, Isolation, Durability를 의미한다."
  },
  {
    "id": 3618,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "계층형 데이터 모델에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "데이터를 트리 구조로 표현한다.",
      "상위 레코드와 하위 레코드 간 부모-자식 관계를 가진다.",
      "개체 간 관계는 일반적으로 1:N 구조로 표현된다.",
      "개체 간 관계는 반드시 1:1 관계로만 표현된다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 계층형 모델은 부모-자식의 1:N 관계를 트리 구조로 표현하는 모델이므로 반드시 1:1 관계라는 설명은 틀리다.\n\n**오답 풀이**\n- 1번: 계층형 모델의 특징이다.\n- 2번: 부모-자식 관계를 가진다.\n- 3번: 일반적으로 1:N 관계를 표현한다.\n- 4번: 1:1 관계로만 표현된다는 설명은 부적절하다.\n\n**보충 개념**\n계층형 모델은 트리 구조이므로 하나의 자식은 하나의 부모를 갖는 구조가 일반적이다. 복잡한 M:N 관계 표현에는 한계가 있다."
  },
  {
    "id": 3619,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "다음 그림의 빈칸에 들어갈 데이터 모델링 구성 요소를 상위 개념부터 순서대로 나열한 것은?\n\n<svg width=\"620\" height=\"250\" viewBox=\"0 0 620 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"데이터 모델링 구성 요소의 계층 관계 빈칸\"><style>.box{fill:#fff;stroke:#222;stroke-width:1.5}.head{fill:#eef2ff;stroke:#222;stroke-width:1.5}.txt{font-family:Arial,'Noto Sans KR',sans-serif;font-size:14px;fill:#111}.small{font-size:12px;fill:#444}.arrow{stroke:#222;stroke-width:1.5;marker-end:url(#arrow9)}</style><defs><marker id=\"arrow9\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#222\"/></marker></defs><rect x=\"30\" y=\"35\" width=\"120\" height=\"60\" rx=\"6\" class=\"box\"/><text x=\"90\" y=\"70\" text-anchor=\"middle\" class=\"txt\">(가)</text><line x1=\"150\" y1=\"65\" x2=\"230\" y2=\"65\" class=\"arrow\"/><text x=\"190\" y=\"52\" text-anchor=\"middle\" class=\"small\">구성</text><rect x=\"230\" y=\"35\" width=\"120\" height=\"60\" rx=\"6\" class=\"box\"/><text x=\"290\" y=\"70\" text-anchor=\"middle\" class=\"txt\">(나)</text><line x1=\"350\" y1=\"65\" x2=\"430\" y2=\"65\" class=\"arrow\"/><text x=\"390\" y=\"52\" text-anchor=\"middle\" class=\"small\">가짐</text><rect x=\"430\" y=\"35\" width=\"120\" height=\"60\" rx=\"6\" class=\"box\"/><text x=\"490\" y=\"70\" text-anchor=\"middle\" class=\"txt\">(다)</text><line x1=\"490\" y1=\"95\" x2=\"490\" y2=\"145\" class=\"arrow\"/><text x=\"520\" y=\"125\" class=\"small\">실제 값</text><rect x=\"430\" y=\"145\" width=\"120\" height=\"60\" rx=\"6\" class=\"box\"/><text x=\"490\" y=\"180\" text-anchor=\"middle\" class=\"txt\">(라)</text><rect x=\"45\" y=\"135\" width=\"290\" height=\"75\" rx=\"6\" class=\"head\"/><text x=\"190\" y=\"160\" text-anchor=\"middle\" class=\"txt\">예시</text><text x=\"65\" y=\"187\" class=\"small\">학생 (가) → 홍길동 (나)</text><text x=\"65\" y=\"205\" class=\"small\">학번 (다) → 20240001 (라)</text></svg>",
    "choices": [
      "엔터티 - 인스턴스 - 속성 - 속성값",
      "인스턴스 - 엔터티 - 속성값 - 속성",
      "속성 - 엔터티 - 인스턴스 - 속성값",
      "엔터티 - 속성값 - 인스턴스 - 속성"
    ],
    "answer": 0,
    "explanation": "정답: 1. 엔터티는 인스턴스의 집합이고, 인스턴스는 속성을 가지며, 속성에는 실제 속성값이 저장된다.\n\n**오답 풀이**\n- 1번: 구성 요소의 관계가 올바르다.\n- 2번: 엔터티와 인스턴스의 관계가 뒤바뀌었다.\n- 3번: 속성은 엔터티보다 상위 개념이 아니다.\n- 4번: 속성값과 속성의 위치가 부적절하다.\n\n**보충 개념**\n엔터티는 업무상 관리해야 하는 대상이다. 인스턴스는 엔터티의 개별 사례이며, 속성은 인스턴스를 설명하는 항목이다."
  },
  {
    "id": 3620,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "두 엔터티 간 관계에서 참여자의 수를 표현하며 1:1, 1:M, M:N 등으로 나타내는 것은?",
    "choices": [
      "관계 선택성",
      "관계 차수",
      "식별자",
      "속성 도메인"
    ],
    "answer": 1,
    "explanation": "정답: 2. 관계 차수는 두 엔터티 간 관계에서 참여 개체의 수를 표현한다.\n\n**오답 풀이**\n- 1번: 관계 선택성은 필수 참여와 선택 참여 여부와 관련된다.\n- 2번: 1:1, 1:M, M:N은 관계 차수 표현이다.\n- 3번: 식별자는 인스턴스를 구분하는 속성이다.\n- 4번: 도메인은 속성이 가질 수 있는 값의 범위이다.\n\n**보충 개념**\n관계 차수는 카디널리티라고도 하며 엔터티 간 수적 대응 관계를 의미한다. 데이터 모델링에서 관계의 구조를 결정하는 중요한 요소이다."
  },
  {
    "id": 3621,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "서브쿼리",
    "question": "서브쿼리에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "서브쿼리는 SELECT, FROM, WHERE 절 등에서 사용할 수 있다.",
      "IN 절에는 다중 행 서브쿼리를 사용할 수 있다.",
      "단일 행 비교 연산자에는 단일 행 서브쿼리를 사용하는 것이 일반적이다.",
      "IN 절은 단일 행 서브쿼리만 사용할 수 있다."
    ],
    "answer": 3,
    "explanation": "정답: 4. IN 절은 여러 값을 비교할 수 있으므로 다중 행 서브쿼리를 사용할 수 있다.\n\n**오답 풀이**\n- 1번: 서브쿼리는 여러 절에서 사용 가능하다.\n- 2번: IN 절은 다중 행 결과와 비교할 수 있다.\n- 3번: =, >, < 같은 단일 행 비교 연산자는 단일 행 서브쿼리와 함께 사용한다.\n- 4번: IN 절이 단일 행 서브쿼리만 가능하다는 설명은 틀리다.\n\n**보충 개념**\n서브쿼리는 반환 행 수에 따라 단일 행 서브쿼리와 다중 행 서브쿼리로 구분된다. IN, ANY, ALL 등은 다중 행 서브쿼리와 함께 사용할 수 있다."
  },
  {
    "id": 3622,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 DML(Data Manipulation Language)에 해당하는 명령어로만 묶인 것은?",
    "choices": [
      "CREATE, ALTER, DROP",
      "INSERT, UPDATE, DELETE",
      "GRANT, REVOKE, COMMIT",
      "SELECT, CREATE, ROLLBACK"
    ],
    "answer": 1,
    "explanation": "정답: 2. INSERT, UPDATE, DELETE는 테이블의 데이터를 조작하는 DML이다.\n\n**오답 풀이**\n- 1번: CREATE, ALTER, DROP은 DDL이다.\n- 2번: 모두 DML에 해당한다.\n- 3번: GRANT, REVOKE는 DCL이고 COMMIT은 TCL이다.\n- 4번: SELECT는 넓게 DML로 보기도 하지만 CREATE는 DDL, ROLLBACK은 TCL이다.\n\n**보충 개념**\nSQL 명령어는 DDL, DML, DCL, TCL 등으로 구분한다. DML은 데이터 조회 및 변경과 관련된 명령어이다."
  },
  {
    "id": 3623,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "다음 SQL에서 DENSE_RANK 함수의 결과에 대한 설명으로 적절한 것은?\n\n```sql\nSELECT 부서, 사원명, 급여,\n       DENSE_RANK() OVER(PARTITION BY 부서 ORDER BY 급여 DESC) AS RNK\nFROM 사원;\n```\n\n동일 부서에서 급여 순위가 1, 2, 2로 발생한 다음 행의 순위는?",
    "choices": [
      "3",
      "4",
      "1",
      "NULL"
    ],
    "answer": 0,
    "explanation": "정답: 1. DENSE_RANK는 동일 순위가 있어도 다음 순위를 건너뛰지 않으므로 1, 2, 2 다음은 3이다.\n\n**오답 풀이**\n- 1번: DENSE_RANK의 올바른 결과이다.\n- 2번: RANK 함수라면 1, 2, 2 다음이 4가 된다.\n- 3번: PARTITION이 바뀌지 않는 한 다시 1이 되지 않는다.\n- 4번: 순위 함수는 해당 행에 대해 순위 값을 반환한다.\n\n**보충 개념**\nRANK는 공동 순위 이후 순위를 건너뛴다. DENSE_RANK는 공동 순위 이후에도 연속된 순위를 부여한다."
  },
  {
    "id": 3624,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "ROLLUP",
    "question": "다음 SQL의 실행 결과로 가장 적절한 것은?\n\n```sql\nCREATE TABLE TAB1 (COL1 VARCHAR2(10), COL2 NUMBER);\nINSERT INTO TAB1 VALUES('A',100);\nINSERT INTO TAB1 VALUES('B',200);\nINSERT INTO TAB1 VALUES('C',300);\nINSERT INTO TAB1 VALUES('C',400);\n\nSELECT COUNT(*)\nFROM (\n    SELECT COL1, SUM(COL2)\n    FROM TAB1\n    GROUP BY ROLLUP(COL1), COL1\n);\n```",
    "choices": [
      "3",
      "4",
      "6",
      "7"
    ],
    "answer": 2,
    "explanation": "정답: 3. GROUP BY ROLLUP(COL1), COL1은 COL1별 그룹이 중복 생성되어 A, B, C 그룹이 각각 두 번 나타나므로 총 6건이다.\n\n**오답 풀이**\n- 1번: 단순 GROUP BY COL1의 결과 건수이다.\n- 2번: 원본 행 수와 혼동한 값이다.\n- 3번: 중복된 COL1 그룹 기준 결과로 적절하다.\n- 4번: 일반적인 ROLLUP(COL1)의 그룹 수와 혼동한 값이다.\n\n**보충 개념**\nROLLUP은 소계와 총계를 생성한다. GROUP BY 항목이 중복되거나 결합될 경우 논리적으로 동일한 그룹 결과가 여러 번 생성될 수 있다."
  },
  {
    "id": 3625,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "DDL",
    "question": "다음 SQL에서 오류가 발생하는 원인으로 가장 적절한 것은?\n\n```sql\nCREATE TABLE 1234_TABLE (\n    COL1 NUMBER\n);\n```",
    "choices": [
      "테이블명은 숫자로 시작할 수 없다.",
      "NUMBER 타입은 테이블 생성 시 사용할 수 없다.",
      "컬럼명은 반드시 소문자로 작성해야 한다.",
      "CREATE TABLE 문에는 반드시 기본키가 있어야 한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 일반적인 SQL 객체명은 숫자로 시작할 수 없으므로 테이블명 1234_TABLE은 부적절하다.\n\n**오답 풀이**\n- 1번: 오류 원인이다.\n- 2번: NUMBER 타입은 사용할 수 있다.\n- 3번: 컬럼명을 반드시 소문자로 작성할 필요는 없다.\n- 4번: 테이블 생성 시 기본키가 필수는 아니다.\n\n**보충 개념**\n객체명은 DBMS 규칙을 따라야 하며 일반적으로 문자로 시작해야 한다. 숫자로 시작하는 이름이 필요하면 인용 식별자를 사용해야 하지만 권장되지 않는다."
  },
  {
    "id": 3626,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 중 다른 SQL들과 결과 집합이 다른 것은?",
    "choices": [
      "GROUP BY ROLLUP(A, B)",
      "GROUP BY GROUPING SETS((A, B), (A), ())",
      "GROUP BY A, B UNION ALL GROUP BY A UNION ALL GROUP BY ()",
      "GROUP BY GROUPING SETS((A, B), (A))"
    ],
    "answer": 3,
    "explanation": "정답: 4. ROLLUP(A, B)는 (A, B), (A), () 그룹을 생성하지만 4번은 전체 합계 그룹 ()이 없다.\n\n**오답 풀이**\n- 1번: ROLLUP(A, B)의 기본 결과이다.\n- 2번: ROLLUP(A, B)와 같은 그룹 집합이다.\n- 3번: 동일한 그룹 집합을 UNION ALL 형태로 표현한 것이다.\n- 4번: 전체 합계 그룹이 빠져 결과가 다르다.\n\n**보충 개념**\nROLLUP(A, B)는 계층적 소계를 생성한다. 이를 GROUPING SETS로 표현하면 GROUPING SETS((A, B), (A), ())가 된다."
  },
  {
    "id": 3627,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUPING",
    "question": "다음 GROUP BY 절과 동일한 그룹 집합을 생성하는 것은?\n\n```sql\nGROUP BY GROUPING SETS(ROLLUP(A), B)\n```",
    "choices": [
      "GROUPING SETS((A), (B), ())",
      "GROUPING SETS((A, B), (A), ())",
      "GROUPING SETS((A), (B))",
      "ROLLUP(A, B)"
    ],
    "answer": 0,
    "explanation": "정답: 1. ROLLUP(A)는 (A), ()를 생성하고 여기에 B가 별도 그룹 집합으로 포함되므로 (A), (), (B)가 된다.\n\n**오답 풀이**\n- 1번: 원문의 그룹 집합과 동일하다.\n- 2번: (A, B)가 추가되어 원문과 다르다.\n- 3번: 전체 합계 ()가 빠져 있다.\n- 4번: ROLLUP(A, B)는 (A, B), (A), ()를 생성한다.\n\n**보충 개념**\nGROUPING SETS 안에 ROLLUP을 중첩할 수 있다. 이 경우 ROLLUP이 생성하는 그룹 집합과 다른 그룹 집합들이 함께 결과에 포함된다."
  },
  {
    "id": 3628,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 데이터와 SQL의 실행 결과로 가장 적절한 것은?\n\n**<데이터>**\n| COL1 | COL2 |\n|---:|---:|\n| NULL | 10 |\n| 10 | 10 |\n| 10 | NULL |\n\n```sql\nSELECT COL1 * 2 + COL2 * 2 AS RESULT\nFROM TAB1;\n```",
    "choices": [
      "20, 40, 20",
      "NULL, 40, NULL",
      "0, 40, 0",
      "NULL, NULL, NULL"
    ],
    "answer": 1,
    "explanation": "정답: 2. NULL이 포함된 산술 연산 결과는 NULL이므로 첫 번째와 세 번째 행은 NULL, 두 번째 행은 40이다.\n\n**오답 풀이**\n- 1번: NULL을 0처럼 계산한 잘못된 결과이다.\n- 2번: NULL 산술 연산 규칙에 맞다.\n- 3번: NULL은 자동으로 0으로 변환되지 않는다.\n- 4번: 두 번째 행은 10*2 + 10*2 = 40이다.\n\n**보충 개념**\nSQL에서 NULL은 알 수 없는 값을 의미한다. NULL이 산술 연산에 포함되면 결과도 일반적으로 NULL이다."
  },
  {
    "id": 3629,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL에 대한 설명으로 적절한 것은?\n\n```sql\nSELECT NVL(SUM(C1) + SUM(C2), 0) AS RESULT\nFROM TAB1;\n```",
    "choices": [
      "SUM 함수는 NULL 값을 0으로 변환한 뒤 집계한다.",
      "SUM 함수는 NULL 값을 제외하고 집계하며, 각 컬럼의 SUM 결과를 더한다.",
      "NULL이 하나라도 있으면 SUM(C1)과 SUM(C2)는 항상 NULL이다.",
      "NVL은 집계 전에 각 행의 NULL 값을 제거한다."
    ],
    "answer": 1,
    "explanation": "정답: 2. SUM(expr)은 NULL을 제외하고 집계하며, 위 SQL은 SUM(C1)과 SUM(C2)를 각각 구한 후 더한다.\n\n**오답 풀이**\n- 1번: SUM이 NULL을 0으로 직접 변환하는 것은 아니다. NULL을 제외하고 집계한다.\n- 2번: 올바른 설명이다.\n- 3번: NULL이 있어도 NULL이 아닌 값이 있으면 합계를 구한다.\n- 4번: NVL은 SUM(C1)+SUM(C2)의 결과가 NULL일 때 0으로 바꾼다.\n\n**보충 개념**\n집계 함수는 COUNT(*)를 제외하면 일반적으로 NULL을 제외하고 계산한다. 단, 모든 값이 NULL이면 SUM 결과는 NULL이 될 수 있다."
  },
  {
    "id": 3630,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "OUTER JOIN",
    "question": "다음 두 테이블 T1, T2를 ID 기준으로 조인할 때, 결과 건수로 가장 적절한 것은?\n\n**<T1>**\n\n  | ID | NAME |\n  |---:|:---|\n  | 1 | A |\n  | 2 | B |\n  | 3 | C |\n\n**<T2>**\n\n  | ID | DEPT |\n  |---:|:---|\n  | 3 | X |\n  | 4 | Y |\n  | 5 | Z |\n\n  LEFT, FULL, RIGHT OUTER JOIN의 결과 건수를 순서대로 나열한 것은?",
    "choices": [
      "3, 3, 5",
      "3, 5, 3",
      "5, 3, 3",
      "5, 5, 3"
    ],
    "answer": 1,
    "explanation": "\n  정답: 2. 조인키 ID 기준으로 T1과 T2에서 매칭되는 값은 3 하나뿐이다.\n  - LEFT OUTER JOIN = T1의 모든 행(1, 2, 3) → 3건\n  - RIGHT OUTER JOIN = T2의 모든 행(3, 4, 5) → 3건\n  - FULL OUTER JOIN = 매칭 1건 + T1 단독 2건(1, 2) + T2 단독 2건(4, 5) → 5건\n  따라서 순서대로 3, 5, 3 이다.\n\n  **오답 풀이**\n  - 1번: FULL과 RIGHT의 순서가 잘못되었다.\n  - 2번: LEFT, FULL, RIGHT 순서에 맞다.\n  - 3번: LEFT 결과 건수를 잘못 배치했다.\n  - 4번: LEFT 결과 건수가 실제와 다르다.\n\n  **보충 개념**\n  OUTER JOIN은 매칭되지 않는 행도 NULL로 채워 결과에 포함한다. FULL OUTER JOIN은 LEFT 결과와\n  RIGHT 결과를 합치되 교집합(매칭 행)은 한 번만 포함한다."
  },
  {
    "id": 3631,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "OUTER JOIN",
    "question": "다음과 같은 조인 구조에서 최종 결과 건수로 가장 적절한 것은?\n\n```sql\nSELECT COUNT(*)\nFROM T1\n     LEFT OUTER JOIN T2 ON (...)\n     LEFT OUTER JOIN T3 ON (...)\n     INNER JOIN T4 ON (...);\n```\n\n**<T1>**\n\n| ID | NAME |\n|---:|:---|\n| 1 | A |\n| 2 | B |\n| 3 | C |\n\n**<T2>**\n\n| ID | COL |\n|---:|:---|\n| 1 | a |\n\n**<T3>**\n\n| ID | COL |\n|---:|:---|\n| 2 | b |\n\n**<T4>**\n\n| ID | COL |\n|---:|:---|\n| 3 | c |",
    "choices": [
      "0건",
      "1건",
      "3건",
      "5건"
    ],
    "answer": 1,
    "explanation": "정답: 2. 마지막 INNER JOIN 조건을 만족하는 행이 1건이므로 최종 COUNT 결과는 1건이다.\n\n**오답 풀이**\n- 1번: INNER JOIN 매칭 행이 1건 존재하므로 0건이 아니다.\n- 2번: 조건에 맞는 최종 결과이다.\n- 3번: 앞선 LEFT OUTER JOIN 중간 결과와 혼동한 값이다.\n- 4번: FULL OUTER JOIN 결과와 혼동한 값이다.\n\n**보충 개념**\nOUTER JOIN 이후 INNER JOIN이 수행되면 INNER JOIN 조건을 만족하지 못하는 행은 제거될 수 있다. 따라서 마지막 조인 방식이 최종 결과 건수에 큰 영향을 준다."
  },
  {
    "id": 3632,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 SQL의 실행 결과로 가장 적절한 것은?\n\n```sql\nSELECT REGEXP_INSTR('12345678', '(123)(4(56)(78))', 1, 1, 0, 'i', 2)\nFROM DUAL;\n```",
    "choices": [
      "1",
      "2",
      "4",
      "6"
    ],
    "answer": 2,
    "explanation": "정답: 3. subexpr 인수 2는 두 번째 괄호 그룹인 4(56)(78)의 시작 위치를 반환하므로 결과는 4이다.\n\n**오답 풀이**\n- 1번: 전체 패턴 또는 첫 번째 그룹의 시작 위치와 혼동한 값이다.\n- 2번: 두 번째 문자 위치가 아니다.\n- 3번: 두 번째 서브 표현식의 시작 위치이다.\n- 4번: 세 번째 그룹 56의 시작 위치와 혼동한 값이다.\n\n**보충 개념**\nOracle REGEXP_INSTR의 subexpr 인수는 정규식 안의 괄호로 묶인 하위 표현식 중 몇 번째 표현식의 위치를 반환할지 지정한다."
  },
  {
    "id": 3633,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 SQL의 실행 결과로 가장 적절한 것은?\n\n```sql\nSELECT REGEXP_SUBSTR('abcd', 'b\\*c') AS COL1,\n       REGEXP_SUBSTR('abcd', 'b*c') AS COL2\nFROM DUAL;\n```",
    "choices": [
      "NULL, bc",
      "bc, NULL",
      "bc, bc",
      "NULL, NULL"
    ],
    "answer": 0,
    "explanation": "정답: 1. 'b\\*c'는 문자 그대로 b*c를 찾으므로 매칭되지 않아 NULL이고, 'b*c'는 b가 0회 이상 반복된 뒤 c가 오는 패턴으로 bc에 매칭된다.\n\n**오답 풀이**\n- 1번: 정규식 해석에 맞는 결과이다.\n- 2번: 이스케이프된 별표와 메타문자 별표의 의미를 반대로 해석했다.\n- 3번: 원문 문자열에 b*c가 없으므로 COL1은 bc가 아니다.\n- 4번: COL2는 bc에 매칭된다.\n\n**보충 개념**\n정규식에서 *는 앞 문자가 0회 이상 반복됨을 의미한다. 문자 그대로의 *를 찾으려면 이스케이프 처리가 필요하다."
  },
  {
    "id": 3634,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "계층형 쿼리에서 최상위 관리자를 시작으로 사원번호에서 관리자번호 방향으로 하위 직원을 조회하려고 한다. CONNECT BY 절로 가장 적절한 것은?\n\n```sql\nSELECT 사원번호, 관리자번호\nFROM 사원\nSTART WITH 관리자번호 IS NULL\nCONNECT BY ________;\n```",
    "choices": [
      "PRIOR 사원번호 = 관리자번호",
      "사원번호 = PRIOR 관리자번호",
      "PRIOR 관리자번호 = 관리자번호",
      "사원번호 = 관리자번호"
    ],
    "answer": 0,
    "explanation": "정답: 1. 부모 행의 사원번호가 자식 행의 관리자번호와 같아야 하므로 PRIOR 사원번호 = 관리자번호가 적절하다.\n\n**오답 풀이**\n- 1번: 상위 사원에서 하위 사원으로 내려가는 순방향 계층 조회이다.\n- 2번: 방향이 반대가 된다.\n- 3번: 부모의 관리자번호와 자식의 관리자번호를 비교하므로 부적절하다.\n- 4번: PRIOR가 없어 계층 관계를 표현하지 못한다.\n\n**보충 개념**\nCONNECT BY PRIOR 부모컬럼 = 자식컬럼 형태는 부모에서 자식 방향으로 계층을 탐색한다. PRIOR의 위치에 따라 탐색 방향이 달라진다."
  },
  {
    "id": 3635,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 SQL에 대한 설명으로 가장 적절한 것은?\n\n```sql\nSELECT *\nFROM (\n    SELECT ROW_NUMBER() OVER(ORDER BY 점수 DESC) AS RN,\n           이름,\n           점수\n    FROM 성적\n)\nWHERE RN <= 2\nORDER BY RN DESC;\n```\n\n**<조건>**\n점수 상위 2명의 RN과 점수가 각각 RN=1, 점수=150 / RN=2, 점수=40이라고 할 때 최종 출력 순서는 어떻게 되는가?",
    "choices": [
      "RN=1, 점수=150 다음 RN=2, 점수=40",
      "RN=2, 점수=40 다음 RN=1, 점수=150",
      "점수 오름차순으로 전체 데이터 출력",
      "RN 값과 무관하게 입력 순서대로 출력"
    ],
    "answer": 1,
    "explanation": "정답: 2. ROW_NUMBER는 점수 DESC 기준으로 번호를 부여하지만 최종 출력은 ORDER BY RN DESC에 따라 RN이 큰 행부터 출력된다.\n\n**오답 풀이**\n- 1번: RN 오름차순 출력일 때의 결과이다.\n- 2번: 최종 ORDER BY RN DESC에 맞다.\n- 3번: 전체 데이터가 아니라 RN <= 2인 행만 출력한다.\n- 4번: 최종 ORDER BY가 있으므로 입력 순서대로 출력되지 않는다.\n\n**보충 개념**\n분석 함수의 ORDER BY와 최종 SELECT의 ORDER BY는 역할이 다르다. 분석 함수의 ORDER BY는 순번 산정 기준이고, 마지막 ORDER BY는 출력 순서 기준이다."
  },
  {
    "id": 3636,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "GROUP BY",
    "question": "로그인 이력 테이블에서 사용자별 로그인 횟수를 집계하는 SQL에 대한 설명으로 적절하지 않은 것은?\n\n```sql\nSELECT USER_ID   AS ALIAS1,\n       LOGIN_DATE AS ALIAS2,\n       COUNT(*)   AS LOGIN_CNT\nFROM LOGIN_HISTORY\nGROUP BY USER_ID, LOGIN_DATE\nORDER BY ALIAS1, ALIAS2;\n```",
    "choices": [
      "한 사용자가 5일간 하루 3회씩 로그인했다면 전체 로그인 이력은 15건이다.",
      "Oracle에서 SELECT 절의 별칭을 ORDER BY 절에서 사용할 수 있다.",
      "ORDER BY ALIAS1, ALIAS2는 ALIAS1 기준으로 먼저 정렬한 뒤 ALIAS2 기준으로 정렬한다.",
      "WHERE 절에서도 SELECT 절에서 정의한 ALIAS1을 항상 그대로 사용할 수 있다."
    ],
    "answer": 3,
    "explanation": "정답: 4. SELECT 절에서 정의한 별칭은 일반적으로 WHERE 절에서 사용할 수 없다.\n\n**오답 풀이**\n- 1번: 5일 × 하루 3회 = 15건이므로 타당하다.\n- 2번: Oracle에서 ORDER BY 절은 SELECT 별칭을 사용할 수 있다.\n- 3번: ORDER BY에 여러 기준을 쓰면 앞 기준부터 차례대로 정렬한다.\n- 4번: WHERE 절은 SELECT 절보다 논리적으로 먼저 처리되므로 SELECT 별칭을 일반적으로 사용할 수 없다.\n\n**보충 개념**\nSQL 논리 처리 순서상 WHERE는 SELECT보다 먼저 평가된다. 반면 ORDER BY는 SELECT 이후 결과를 정렬하므로 SELECT 절의 별칭을 사용할 수 있다."
  },
  {
    "id": 3637,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "컬럼 ALIAS에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "컬럼 별칭은 SELECT 절에서 컬럼 또는 표현식에 다른 이름을 부여할 때 사용한다.",
      "AS 키워드를 사용하여 컬럼 별칭을 지정할 수 있다.",
      "컬럼 별칭은 컬럼 앞뒤 어디에나 사용할 수 있다.",
      "공백이나 특수문자가 포함된 별칭은 큰따옴표로 묶어 사용할 수 있다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 컬럼 별칭은 컬럼 또는 표현식 뒤에 지정하며 컬럼 앞에 사용할 수 없다.\n\n**오답 풀이**\n- 1번: ALIAS의 목적이다.\n- 2번: AS를 사용해 별칭을 지정할 수 있다.\n- 3번: 컬럼 앞에 별칭을 둘 수 없으므로 틀리다.\n- 4번: 공백이나 대소문자 보존이 필요한 별칭은 큰따옴표를 사용할 수 있다.\n\n**보충 개념**\n예를 들어 SELECT salary AS 급여 FROM emp는 가능하지만 SELECT 급여 salary FROM emp처럼 컬럼 앞에 별칭을 두는 방식은 올바르지 않다."
  },
  {
    "id": 3638,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 WHERE 절의 논리 연산 해석으로 가장 적절한 것은?\n\n```sql\nWHERE 고객번호 = 'X'\n   OR 고객번호 = 'Y'\n  AND 상태 = '정상'\n  AND 등급 = 'A'\n```\n\n**<조건>**\n고객번호가 X인 행은 2건이고, 고객번호가 Y이면서 상태가 정상이고 등급이 A인 행은 3건이다.",
    "choices": [
      "(고객번호 = 'X' OR 고객번호 = 'Y') AND 상태 = '정상' AND 등급 = 'A'이므로 3건이다.",
      "고객번호 = 'X' OR (고객번호 = 'Y' AND 상태 = '정상' AND 등급 = 'A')이므로 5건이다.",
      "(고객번호 = 'X' OR 고객번호 = 'Y' OR 상태 = '정상') AND 등급 = 'A'이므로 2건이다.",
      "고객번호 = 'X' AND 고객번호 = 'Y' AND 상태 = '정상' AND 등급 = 'A'이므로 0건이다."
    ],
    "answer": 1,
    "explanation": "정답: 2. SQL에서 AND가 OR보다 우선순위가 높으므로 고객번호 X 조건 2건과 Y이면서 나머지 조건을 만족하는 3건이 합쳐져 5건이다.\n\n**오답 풀이**\n- 1번: 괄호가 없으면 OR보다 AND가 먼저 처리된다.\n- 2번: 올바른 논리 연산 순서와 결과 건수이다.\n- 3번: 상태 조건이 OR로 연결되지 않는다.\n- 4번: OR 조건을 AND로 잘못 해석했다.\n\n**보충 개념**\nWHERE 절에서 AND는 OR보다 우선순위가 높다. 의도한 조건을 명확히 하려면 괄호를 사용하는 것이 좋다."
  },
  {
    "id": 3639,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "'홍길동'의 자식의 자식 노드를 셀프 조인으로 조회하는 SQL로 가장 적절한 것은?",
    "choices": [
      "SELECT B.EMPNO, B.ENAME, B.MGR FROM EMP A, EMP B WHERE A.ENAME = '홍길동' AND B.MGR = A.EMPNO",
      "SELECT C.EMPNO, C.ENAME, C.MGR FROM EMP A, EMP B, EMP C WHERE A.ENAME = '홍길동' AND B.MGR = A.EMPNO AND C.MGR = B.EMPNO",
      "SELECT A.EMPNO, A.ENAME, A.MGR FROM EMP A WHERE A.ENAME = '홍길동'",
      "SELECT C.EMPNO, C.ENAME, C.MGR FROM EMP A, EMP C WHERE A.ENAME = '홍길동' AND A.MGR = C.EMPNO"
    ],
    "answer": 1,
    "explanation": "정답: 2. A를 홍길동, B를 홍길동의 자식, C를 B의 자식으로 조인해야 자식의 자식 노드를 조회할 수 있다.\n\n**오답 풀이**\n- 1번: 홍길동의 직접 자식만 조회한다.\n- 2번: 홍길동의 손자 노드를 조회한다.\n- 3번: 홍길동 본인만 조회한다.\n- 4번: 홍길동의 상위 관리자 방향으로 조회하는 형태이다.\n\n**보충 개념**\n계층 구조를 셀프 조인으로 표현할 때는 계층 단계 수만큼 테이블 별칭을 추가한다. 부모-자식 관계는 일반적으로 자식.MGR = 부모.EMPNO 형태로 연결한다."
  },
  {
    "id": 3640,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "JOIN",
    "question": "다음 중 오류가 발생하는 JOIN 구문으로 가장 적절한 것은?",
    "choices": [
      "SELECT * FROM EMPLOYEES A INNER JOIN DEPARTMENTS B ON (DEPARTMENT_ID) WHERE A.DEPARTMENT_ID = 90",
      "SELECT * FROM EMPLOYEES A INNER JOIN DEPARTMENTS B ON A.DEPARTMENT_ID = B.DEPARTMENT_ID WHERE A.DEPARTMENT_ID = 90",
      "SELECT * FROM EMPLOYEES A INNER JOIN DEPARTMENTS B USING (DEPARTMENT_ID) WHERE DEPARTMENT_ID = 90",
      "SELECT * FROM EMPLOYEES A NATURAL JOIN DEPARTMENTS B WHERE DEPARTMENT_ID = 90"
    ],
    "answer": 0,
    "explanation": "정답: 1. ON 절에는 A.DEPARTMENT_ID = B.DEPARTMENT_ID처럼 조인 조건식이 와야 하며 단순 컬럼명만 괄호로 쓰는 것은 부적절하다.\n\n**오답 풀이**\n- 1번: ON 절의 조건식이 불완전하여 오류가 발생한다.\n- 2번: 명시적 ON 조인 조건이 올바르다.\n- 3번: USING 절은 동일 이름 컬럼을 기준으로 조인할 때 사용할 수 있다.\n- 4번: NATURAL JOIN은 동일 이름 컬럼을 자동으로 조인 조건으로 사용한다.\n\n**보충 개념**\nON 절은 논리 조건식을 작성하는 곳이다. USING은 동일한 컬럼명을 괄호 안에 지정하는 별도의 문법이다."
  },
  {
    "id": 3641,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "계약이 없는 고객을 찾는 SQL로 가장 적절한 것은?",
    "choices": [
      "SELECT * FROM 고객 C WHERE EXISTS (SELECT 1 FROM 계약 K WHERE K.고객ID = C.고객ID)",
      "SELECT * FROM 고객 C WHERE NOT EXISTS (SELECT 1 FROM 계약 K WHERE K.고객ID = C.고객ID)",
      "SELECT * FROM 고객 C WHERE 고객ID = NULL",
      "SELECT * FROM 고객 C WHERE 계약ID IS NOT NULL"
    ],
    "answer": 1,
    "explanation": "정답: 2. 계약 테이블에 해당 고객의 계약이 존재하지 않는 고객을 찾으려면 NOT EXISTS를 사용한다.\n\n**오답 풀이**\n- 1번: 계약이 있는 고객을 찾는다.\n- 2번: 계약이 없는 고객을 찾는다.\n- 3번: NULL 비교는 = NULL이 아니라 IS NULL을 사용해야 하며 의미도 다르다.\n- 4번: 고객 테이블에 계약ID가 있다는 전제가 없고 계약이 있는 경우에 가깝다.\n\n**보충 개념**\nNOT EXISTS는 상관 서브쿼리 결과가 존재하지 않을 때 TRUE가 된다. 미존재 데이터를 찾을 때 자주 사용된다."
  },
  {
    "id": 3642,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "ERD",
    "question": "다음 ERD에 대한 설명으로 가장 적절한 것은?\n\n<svg width=\"640\" height=\"260\" viewBox=\"0 0 640 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"고객 계약 계약상세 1대다 관계 ERD\"><style>.entity{fill:#fff;stroke:#222;stroke-width:1.5}.head{fill:#ecfdf5;stroke:#222;stroke-width:1.5}.txt{font-family:Arial,'Noto Sans KR',sans-serif;font-size:14px;fill:#111}.small{font-size:12px;fill:#444}.rel{stroke:#222;stroke-width:1.5}.key{font-weight:bold}</style><rect x=\"35\" y=\"70\" width=\"150\" height=\"110\" class=\"entity\"/><rect x=\"35\" y=\"70\" width=\"150\" height=\"32\" class=\"head\"/><text x=\"110\" y=\"91\" text-anchor=\"middle\" class=\"txt\">고객</text><text x=\"55\" y=\"125\" class=\"txt key\"># 고객ID</text><text x=\"55\" y=\"150\" class=\"txt\">고객명</text><rect x=\"245\" y=\"70\" width=\"150\" height=\"110\" class=\"entity\"/><rect x=\"245\" y=\"70\" width=\"150\" height=\"32\" class=\"head\"/><text x=\"320\" y=\"91\" text-anchor=\"middle\" class=\"txt\">계약</text><text x=\"265\" y=\"125\" class=\"txt key\"># 계약ID</text><text x=\"265\" y=\"150\" class=\"txt\">고객ID(FK)</text><rect x=\"455\" y=\"70\" width=\"150\" height=\"110\" class=\"entity\"/><rect x=\"455\" y=\"70\" width=\"150\" height=\"32\" class=\"head\"/><text x=\"530\" y=\"91\" text-anchor=\"middle\" class=\"txt\">계약상세</text><text x=\"475\" y=\"125\" class=\"txt key\"># 상세ID</text><text x=\"475\" y=\"150\" class=\"txt\">계약ID(FK)</text><line x1=\"185\" y1=\"125\" x2=\"245\" y2=\"125\" class=\"rel\"/><text x=\"200\" y=\"116\" class=\"small\">1</text><text x=\"230\" y=\"116\" class=\"small\">N</text><line x1=\"395\" y1=\"125\" x2=\"455\" y2=\"125\" class=\"rel\"/><text x=\"410\" y=\"116\" class=\"small\">1</text><text x=\"440\" y=\"116\" class=\"small\">N</text><text x=\"320\" y=\"220\" text-anchor=\"middle\" class=\"small\">고객 1명은 여러 계약을, 계약 1건은 여러 계약상세를 가질 수 있다.</text></svg>\n\n고객과 계약상세를 계약을 통해 조인하여 COUNT(*)를 수행할 때, 고객별 필터 없이 전체 조인 결과를 집계하면 어떤 건수와 같아지는가?",
    "choices": [
      "고객의 건수",
      "계약의 건수",
      "계약상세의 건수",
      "항상 1건"
    ],
    "answer": 2,
    "explanation": "정답: 3. 고객-계약-계약상세가 1:M:M 구조로 조인되면 최종 조인 결과는 가장 하위 상세 행 기준으로 생성되므로 계약상세 건수와 같아진다.\n\n**오답 풀이**\n- 1번: 고객 1건이 여러 상세 행으로 확장될 수 있다.\n- 2번: 계약 1건도 여러 계약상세 행으로 확장될 수 있다.\n- 3번: 하위 상세 엔터티의 행 수와 일치하는 것이 일반적이다.\n- 4번: 집계 결과 COUNT(*)는 1개의 값으로 출력되지만 그 값이 1이라는 의미는 아니다.\n\n**보충 개념**\n1:M 관계를 따라 조인하면 부모 행은 자식 행 수만큼 반복된다. 여러 단계의 1:M 조인에서는 최하위 자식 행의 수가 결과 건수를 결정하는 경우가 많다."
  },
  {
    "id": 3643,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL에서 최종 결과 컬럼명으로 가장 적절한 것은?\n\n```sql\nSELECT COL1 AS AAB, COL2 AS BBA\nFROM T1\nUNION ALL\nSELECT COL1 AS BBA, COL2 AS AAB\nFROM T2;\n```",
    "choices": [
      "AAB, BBA",
      "BBA, AAB",
      "COL1, COL2",
      "첫 번째 행의 데이터 값에 따라 달라진다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 집합 연산자의 결과 컬럼명은 첫 번째 SELECT 문의 컬럼명 또는 별칭을 따른다.\n\n**오답 풀이**\n- 1번: 첫 번째 SELECT의 별칭이 결과 컬럼명이 된다.\n- 2번: 두 번째 SELECT의 별칭은 결과 컬럼명 결정에 사용되지 않는다.\n- 3번: 첫 번째 SELECT에서 별칭을 지정했으므로 COL1, COL2가 아니다.\n- 4번: 데이터 값에 따라 컬럼명이 달라지지 않는다.\n\n**보충 개념**\nUNION, UNION ALL 등 집합 연산에서는 각 SELECT의 컬럼 개수와 타입 호환성이 중요하다. 결과 컬럼명은 첫 번째 SELECT 문 기준으로 정해진다."
  },
  {
    "id": 3644,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "3회 이상 주문한 고객을 찾는 SQL의 HAVING 절로 가장 적절한 것은?",
    "choices": [
      "HAVING COUNT(구매번호) >= 3",
      "WHERE COUNT(구매번호) >= 3",
      "HAVING 구매번호 >= 3",
      "GROUP BY COUNT(구매번호) >= 3"
    ],
    "answer": 0,
    "explanation": "정답: 1. 그룹별 주문 건수를 조건으로 제한하려면 HAVING COUNT(구매번호) >= 3을 사용한다.\n\n**오답 풀이**\n- 1번: 그룹 집계 조건으로 적절하다.\n- 2번: WHERE 절에는 집계 함수를 직접 사용할 수 없다.\n- 3번: 구매번호 값 자체를 비교하는 것으로 주문 횟수 조건이 아니다.\n- 4번: GROUP BY는 그룹 기준을 지정하는 절이지 조건식을 쓰는 절이 아니다.\n\n**보충 개념**\nWHERE는 그룹화 전 개별 행을 필터링하고, HAVING은 GROUP BY 이후 그룹 결과를 필터링한다."
  },
  {
    "id": 3645,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "NULL",
    "question": "다음 SQL 중 오류가 발생하는 문장으로 가장 적절한 것은?\n\n```sql\nCREATE TABLE SQLD_55_34_01 (\n    COL1 VARCHAR2(50),\n    COL2 NUMBER,\n    COL3 VARCHAR2(50),\n    CONSTRAINT PK_01 PRIMARY KEY (COL1)\n);\n\nCREATE TABLE SQLD_55_34_02 (\n    COL4 VARCHAR2(50),\n    COL5 NUMBER,\n    COL1 VARCHAR2(50),\n    CONSTRAINT PK_02 PRIMARY KEY (COL4),\n    CONSTRAINT FK_02_01 FOREIGN KEY (COL1) REFERENCES SQLD_55_34_01(COL1)\n);\n\n-- 1\nINSERT INTO SQLD_55_34_01 VALUES ('A',100,'가');\n-- 2\nINSERT INTO SQLD_55_34_02 VALUES ('02_A',100,NULL);\n-- 3\nINSERT INTO SQLD_55_34_02 VALUES ('02_B',200,'A');\n-- 4\nUPDATE SQLD_55_34_02 SET COL1 = 'B' WHERE COL4 = '02_A';\n```",
    "choices": [
      "1번 INSERT",
      "2번 INSERT",
      "3번 INSERT",
      "4번 UPDATE"
    ],
    "answer": 3,
    "explanation": "정답: 4. 자식 테이블의 외래키 COL1을 부모 테이블에 존재하지 않는 값 'B'로 변경하려 하므로 참조 무결성 위반이 발생한다.\n\n**오답 풀이**\n- 1번: 부모 테이블에 'A'를 정상 삽입한다.\n- 2번: 외래키 컬럼은 NULL 허용 시 NULL 삽입이 가능하다.\n- 3번: 부모 테이블에 'A'가 존재하므로 정상 삽입된다.\n- 4번: 부모 키 'B'가 없으므로 오류가 발생한다.\n\n**보충 개념**\n외래키는 부모 테이블에 존재하는 값만 참조할 수 있다. 단, 외래키 컬럼이 NULL을 허용하면 NULL 값은 참조 무결성 위반이 아니다."
  },
  {
    "id": 3646,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "TCL",
    "question": "다음 트랜잭션 수행 후 최종 반영되는 작업으로 가장 적절한 것은?\n\n```sql\n-- (가) SQL1 수행\nSAVEPOINT A;\n-- (나) SQL2 수행\nSAVEPOINT B;\n-- (다) SQL3 수행\nROLLBACK TO SAVEPOINT A;\n-- (라) SQL4 수행\n-- (마) SQL5 수행\nCOMMIT;\n```",
    "choices": [
      "가, 나, 다",
      "가, 라, 마",
      "나, 다, 라",
      "다, 라, 마"
    ],
    "answer": 1,
    "explanation": "정답: 2. SAVEPOINT A 이후 수행된 SQL2, SQL3은 ROLLBACK TO SAVEPOINT A로 취소되고 이후 SQL4, SQL5는 다시 수행되어 커밋된다.\n\n**오답 풀이**\n- 1번: 나와 다는 SAVEPOINT A로 롤백되어 취소된다.\n- 2번: 가는 유지되고 라, 마는 롤백 이후 수행되어 반영된다.\n- 3번: 나와 다는 취소된다.\n- 4번: 다는 롤백 대상이며 가가 누락되어 있다.\n\n**보충 개념**\nSAVEPOINT는 트랜잭션 내 중간 저장점을 만든다. ROLLBACK TO SAVEPOINT는 해당 저장점 이후의 작업만 취소한다."
  },
  {
    "id": 3647,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "Oracle에서 다음 정렬 구문을 사용할 때 NULL 값의 기본 정렬 위치로 가장 적절한 것은?\n\n```sql\nORDER BY COL1 DESC\n```",
    "choices": [
      "NULLS FIRST",
      "NULLS LAST",
      "NULL 값은 항상 제외된다.",
      "DBMS가 오류를 발생시킨다."
    ],
    "answer": 0,
    "explanation": "정답: 1. Oracle에서 DESC 정렬 시 NULL의 기본 위치는 NULLS FIRST이다.\n\n**오답 풀이**\n- 1번: Oracle의 기본 동작에 맞다.\n- 2번: ASC 정렬의 기본 위치가 NULLS LAST이다.\n- 3번: ORDER BY는 NULL 값을 제외하지 않는다.\n- 4번: NULL 포함 정렬은 오류가 아니다.\n\n**보충 개념**\nOracle 기본 정렬에서 ASC는 NULLS LAST, DESC는 NULLS FIRST이다. 명시적으로 NULLS FIRST 또는 NULLS LAST를 지정할 수 있다."
  },
  {
    "id": 3648,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "ROW LIMITING 절에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "OFFSET은 건너뛸 행의 개수를 지정한다.",
      "FETCH는 반환할 행의 개수나 백분율을 지정한다.",
      "ONLY는 지정된 행의 개수나 백분율만큼만 반환한다.",
      "WITH TIES는 첫 번째 행에 대한 동순위를 포함해서 반환한다."
    ],
    "answer": 3,
    "explanation": "정답: 4. WITH TIES는 마지막으로 반환되는 행과 정렬 기준이 같은 동순위 행을 추가로 반환한다.\n\n**오답 풀이**\n- 1번: OFFSET의 올바른 설명이다.\n- 2번: FETCH의 올바른 설명이다.\n- 3번: ONLY는 지정된 수만 반환한다.\n- 4번: 첫 번째 행이 아니라 마지막 행 기준 동순위를 포함한다.\n\n**보충 개념**\nFETCH FIRST n ROWS WITH TIES는 ORDER BY 기준으로 n번째 행과 같은 정렬 값을 가진 행을 함께 반환한다. WITH TIES를 사용할 때는 ORDER BY가 중요하다."
  },
  {
    "id": 3649,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "집계 함수에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "COUNT(*)는 NULL 포함 여부와 관계없이 행의 수를 센다.",
      "COUNT(expr)는 expr이 NULL인 행을 제외하고 센다.",
      "SUM(expr)는 NULL 값을 제외하고 합계를 계산한다.",
      "COUNT(expr)는 NULL을 포함하여 센다."
    ],
    "answer": 3,
    "explanation": "정답: 4. COUNT(expr)는 expr이 NULL인 행을 제외하고 센다.\n\n**오답 풀이**\n- 1번: COUNT(*)는 전체 행 수를 센다.\n- 2번: COUNT(expr)의 올바른 설명이다.\n- 3번: SUM은 NULL을 제외하고 계산한다.\n- 4번: COUNT(expr)가 NULL을 포함한다는 설명은 틀리다.\n\n**보충 개념**\nCOUNT(*)와 COUNT(컬럼)은 다르다. COUNT(*)는 행 수, COUNT(컬럼)은 해당 컬럼이 NULL이 아닌 행 수를 반환한다."
  },
  {
    "id": 3650,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "각 행에 전체 합계와 부서별 합계를 함께 출력하는 SQL로 가장 적절한 것은?",
    "choices": [
      "SELECT DEPTNO, SAL, SUM(SAL) OVER() AS 전체합계, SUM(SAL) OVER(PARTITION BY DEPTNO) AS 부서합계 FROM EMP",
      "SELECT DEPTNO, SAL, SUM(SAL) AS 전체합계, SUM(SAL) AS 부서합계 FROM EMP",
      "SELECT DEPTNO, SAL FROM EMP GROUP BY SUM(SAL)",
      "SELECT DEPTNO, SAL, COUNT(*) OVER(PARTITION BY SAL) AS 전체합계 FROM EMP"
    ],
    "answer": 0,
    "explanation": "정답: 1. 전체 합계는 SUM(SAL) OVER(), 부서별 합계는 SUM(SAL) OVER(PARTITION BY DEPTNO)로 구할 수 있다.\n\n**오답 풀이**\n- 1번: 분석 함수를 올바르게 사용했다.\n- 2번: 일반 집계 함수와 일반 컬럼을 함께 사용하려면 GROUP BY가 필요하며 행별 출력 목적에도 맞지 않는다.\n- 3번: GROUP BY 사용 방식이 잘못되었다.\n- 4번: COUNT를 사용하고 있어 급여 합계를 구하지 못한다.\n\n**보충 개념**\n윈도우 함수는 행을 유지한 상태에서 집계 결과를 함께 보여줄 수 있다. PARTITION BY는 집계 범위를 그룹 단위로 나누는 역할을 한다."
  },
  {
    "id": 3651,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "두 SQL 집합 A, B에 대해 UNION ALL의 결과를 개념적으로 표현한 것으로 가장 적절한 것은?",
    "choices": [
      "UNION 결과와 INTERSECT 결과를 함께 포함한다.",
      "UNION 결과에서 INTERSECT 결과를 제거한다.",
      "INTERSECT 결과만 반환한다.",
      "MINUS 결과만 반환한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. UNION ALL은 중복을 제거하지 않으므로, 중복 제거된 UNION 결과에 중복되는 INTERSECT 결과를 추가로 포함한 것과 개념적으로 유사하다.\n\n**오답 풀이**\n- 1번: UNION ALL의 중복 포함 성격을 설명한다.\n- 2번: 중복되는 값을 제거하는 방향이므로 UNION ALL과 다르다.\n- 3번: 공통 부분만 반환하므로 다르다.\n- 4번: 차집합만 반환하므로 다르다.\n\n**보충 개념**\nUNION은 중복을 제거하고 UNION ALL은 중복을 제거하지 않는다. 두 집합에 모두 존재하는 행은 UNION ALL에서 중복되어 나타날 수 있다."
  },
  {
    "id": 3652,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 나눗셈 연산 결과로 가장 적절한 것은?\n\n**<조건>**\n1) COL1 = 0, COL2 = 300인 행에서 COL1 / COL2\n2) COL1 = 300, COL2 = 0인 행에서 COL1 / COL2\n3) COL1 = 100, COL2 = NULL인 행에서 COL1 / COL2",
    "choices": [
      "0, ERROR, NULL",
      "0, 0, NULL",
      "NULL, ERROR, NULL",
      "ERROR, ERROR, NULL"
    ],
    "answer": 0,
    "explanation": "정답: 1. 0을 300으로 나누면 0이고, 300을 0으로 나누면 0으로 나누기 오류가 발생하며, NULL과의 연산 결과는 NULL이다.\n\n**오답 풀이**\n- 1번: SQL 산술 연산 규칙에 맞다.\n- 2번: 0으로 나누기는 0이 아니라 오류이다.\n- 3번: 0/300은 NULL이 아니라 0이다.\n- 4번: 0/300은 오류가 아니다.\n\n**보충 개념**\nOracle에서 0으로 나누면 ORA-01476 오류가 발생한다. NULL이 포함된 산술 연산은 일반적으로 NULL을 반환한다."
  },
  {
    "id": 3653,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "테이블 구조는 유지하면서 로우만 삭제하는 명령어로 적절한 것은?",
    "choices": [
      "DELETE, TRUNCATE",
      "DROP, DELETE",
      "ALTER, DROP",
      "CREATE, TRUNCATE"
    ],
    "answer": 0,
    "explanation": "정답: 1. DELETE와 TRUNCATE는 테이블 구조를 유지한 채 데이터를 삭제할 수 있다.\n\n**오답 풀이**\n- 1번: 두 명령 모두 행 데이터 삭제에 사용된다.\n- 2번: DROP은 테이블 구조 자체를 삭제한다.\n- 3번: ALTER는 구조 변경, DROP은 객체 삭제이다.\n- 4번: CREATE는 객체 생성 명령이다.\n\n**보충 개념**\nDELETE는 DML로 조건 삭제가 가능하고 롤백 가능성이 있다. TRUNCATE는 DDL 성격으로 전체 데이터를 빠르게 삭제하며 일반적으로 조건을 지정할 수 없다."
  },
  {
    "id": 3654,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 결과 건수로 가장 적절한 것은?\n\n**<데이터>**\n| 과목명 |\n|---|\n| 물리학 |\n| 화학 |\n| 영어 |\n| 수학개론 |\n\n```sql\nSELECT COUNT(*)\nFROM 과목\nWHERE 과목명 LIKE '%학';\n```",
    "choices": [
      "1건",
      "2건",
      "3건",
      "4건"
    ],
    "answer": 1,
    "explanation": "정답: 2. LIKE '%학'은 '학'으로 끝나는 문자열을 찾으므로 물리학, 화학 2건이 조회된다.\n\n**오답 풀이**\n- 1번: 물리학만 고려한 값이다.\n- 2번: 물리학과 화학이 조건에 맞다.\n- 3번: 수학개론은 학으로 끝나지 않는다.\n- 4번: 영어는 학으로 끝나지 않는다.\n\n**보충 개념**\nLIKE에서 %는 0개 이상의 임의 문자열을 의미한다. '%학'은 마지막 글자가 학인 값을 찾는 패턴이다."
  },
  {
    "id": 3655,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "NULL이 아닌 값을 찾는 조건으로 가장 적절한 것은?",
    "choices": [
      "= NULL",
      "!= NULL",
      "IS NOT NULL",
      "NOT NULL = TRUE"
    ],
    "answer": 2,
    "explanation": "정답: 3. SQL에서 NULL 여부는 IS NULL 또는 IS NOT NULL로 비교한다.\n\n**오답 풀이**\n- 1번: NULL은 = 연산자로 비교할 수 없다.\n- 2번: NULL은 != 연산자로도 비교할 수 없다.\n- 3번: NULL이 아닌 값을 찾는 올바른 조건이다.\n- 4번: 일반적인 SQL NULL 비교 문법이 아니다.\n\n**보충 개념**\nNULL은 알 수 없는 값이므로 일반 비교 연산 결과가 TRUE/FALSE로 확정되지 않는다. 따라서 IS NULL 계열 연산자를 사용해야 한다."
  },
  {
    "id": 3656,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "기존 테이블에 직장우편번호 정보를 저장할 컬럼을 추가하는 SQL로 가장 적절한 것은?",
    "choices": [
      "ALTER TABLE 회원 ADD (OFFI_POST_NUMBER VARCHAR2(80));",
      "UPDATE TABLE 회원 ADD OFFI_POST_NUMBER VARCHAR2(80);",
      "CREATE COLUMN OFFI_POST_NUMBER VARCHAR2(80) ON 회원;",
      "INSERT COLUMN 회원 OFFI_POST_NUMBER VARCHAR2(80);"
    ],
    "answer": 0,
    "explanation": "정답: 1. 기존 테이블에 컬럼을 추가할 때는 ALTER TABLE ... ADD 구문을 사용한다.\n\n**오답 풀이**\n- 1번: 컬럼 추가 구문으로 적절하다.\n- 2번: UPDATE는 데이터 변경 명령이지 구조 변경 명령이 아니다.\n- 3번: 일반적인 SQL 컬럼 추가 문법이 아니다.\n- 4번: INSERT는 행 데이터를 삽입하는 명령이다.\n\n**보충 개념**\nDDL 명령인 ALTER TABLE은 테이블 구조를 변경할 때 사용한다. 컬럼 추가, 컬럼 변경, 제약조건 추가 등에 사용된다."
  },
  {
    "id": 3657,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "참조 무결성을 구현하는 키로 가장 적절한 것은?",
    "choices": [
      "기본키",
      "외래키",
      "후보키",
      "대체키"
    ],
    "answer": 1,
    "explanation": "정답: 2. 외래키는 자식 테이블의 값이 부모 테이블의 기본키 또는 유일키 값을 참조하도록 하여 참조 무결성을 구현한다.\n\n**오답 풀이**\n- 1번: 기본키는 개체 무결성과 관련이 깊다.\n- 2번: 외래키가 참조 무결성을 구현한다.\n- 3번: 후보키는 튜플을 유일하게 식별할 수 있는 속성 집합이다.\n- 4번: 대체키는 후보키 중 기본키로 선택되지 않은 키이다.\n\n**보충 개념**\n개체 무결성은 기본키, 참조 무결성은 외래키, 도메인 무결성은 CHECK 제약조건 등으로 구현할 수 있다."
  },
  {
    "id": 3658,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "무결성에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "기본키에는 NULL이 들어갈 수 없다.",
      "외래키는 부모 테이블에 존재하는 값을 참조해야 한다.",
      "CHECK 제약조건은 도메인 무결성을 구현하는 데 사용할 수 있다.",
      "기본키 중복 삽입 오류는 참조 무결성 위반이다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 기본키 중복 삽입 오류는 개체 무결성 위반에 해당하며 참조 무결성 위반이 아니다.\n\n**오답 풀이**\n- 1번: 개체 무결성의 핵심 조건이다.\n- 2번: 참조 무결성의 설명이다.\n- 3번: 도메인 무결성은 속성 값의 범위를 제한하는 제약조건과 관련된다.\n- 4번: 기본키 중복은 개체 무결성 위반이다.\n\n**보충 개념**\n무결성은 데이터의 정확성과 일관성을 보장하는 제약이다. 개체 무결성, 참조 무결성, 도메인 무결성을 구분해야 한다."
  },
  {
    "id": 3659,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 BETWEEN 조건과 결과가 다른 조건으로 가장 적절한 것은?\n\n```sql\nWHERE COL1 BETWEEN DATE '2024-01-01' AND DATE '2024-01-31'\n```",
    "choices": [
      "WHERE COL1 >= DATE '2024-01-01' AND COL1 <= DATE '2024-01-31'",
      "WHERE DATE '2024-01-01' <= COL1 AND COL1 <= DATE '2024-01-31'",
      "WHERE COL1 > DATE '2024-01-01' AND COL1 < DATE '2024-01-31'",
      "WHERE COL1 BETWEEN DATE '2024-01-01' AND DATE '2024-01-31'"
    ],
    "answer": 2,
    "explanation": "정답: 3. BETWEEN은 양 끝값을 포함하므로 초과와 미만을 사용하는 3번은 결과가 다르다.\n\n**오답 풀이**\n- 1번: BETWEEN과 같은 포함 범위 조건이다.\n- 2번: BETWEEN과 같은 의미이다.\n- 3번: 시작값과 종료값을 제외하므로 결과가 다르다.\n- 4번: 원문과 동일하다.\n\n**보충 개념**\nBETWEEN A AND B는 A 이상 B 이하를 의미한다. 날짜 컬럼에 시간이 포함되어 있다면 종료일 처리에 주의해야 한다."
  },
  {
    "id": 3660,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 SQL의 IN 절에 대한 설명으로 적절하지 않은 것은?\n\n```sql\nSELECT *\nFROM 부서 D\nWHERE D.DEPTNO IN (\n    SELECT E.DEPTNO\n    FROM 사원 E\n    WHERE E.EMPNM IN ('JOHN', 'SMITH')\n);\n```",
    "choices": [
      "서브쿼리가 여러 행을 반환해도 IN 절에서 비교할 수 있다.",
      "서브쿼리 결과에 동일한 DEPTNO가 여러 번 나와도 IN 비교 자체는 가능하다.",
      "JOHN이라는 이름의 사원이 두 명이면 반드시 오류가 발생한다.",
      "IN은 목록 중 하나와 일치하는지 판단하는 연산자이다."
    ],
    "answer": 2,
    "explanation": "정답: 3. IN 절은 다중 행 결과를 처리할 수 있으므로 JOHN이라는 이름의 사원이 여러 명이어도 그 자체로 오류가 발생하지 않는다.\n\n**오답 풀이**\n- 1번: IN 절은 다중 행 서브쿼리와 함께 사용할 수 있다.\n- 2번: 중복 값이 있어도 IN 비교는 가능하다.\n- 3번: 단일 행 서브쿼리가 아니므로 여러 명이어도 오류가 아니다.\n- 4번: IN의 기본 의미이다.\n\n**보충 개념**\nIN은 서브쿼리 결과 집합에 비교 값이 포함되는지 확인한다. 단일 행 비교 연산자 = 와 달리 여러 행이 반환되어도 사용할 수 있다."
  },
  {
    "id": 3661,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "독립적인 단일 주식별자 없이도 관계 참여 엔터티의 식별자 조합으로 식별될 수 있는 예외적 엔터티로 가장 적절한 것은?",
    "choices": [
      "기본 엔터티",
      "중심 엔터티",
      "행위 엔터티",
      "관계 엔터티"
    ],
    "answer": 3,
    "explanation": "정답: 4. 관계 엔터티는 두 엔터티 사이의 관계를 표현하기 위해 도출되는 경우가 있어, 독립적인 단일 주식별자 대신 관계 참여 엔터티의 식별자 조합으로 식별될 수 있다.\n\n**오답 풀이**\n- 1번: 기본 엔터티는 업무에 원래 존재하는 정보로 고유 식별자가 필요하다.\n- 2번: 중심 엔터티도 업무 중심 데이터를 식별해야 하므로 주식별자가 필요하다.\n- 3번: 행위 엔터티는 일반적으로 발생 행위를 식별하기 위한 식별자가 필요하다.\n- 4번: 관계를 표현하는 엔터티는 관계 자체가 식별 의미를 가질 수 있다.\n\n**보충 개념**\n엔터티는 일반적으로 각 인스턴스를 구분할 수 있는 식별자가 필요하다. 다만 관계 엔터티는 별도의 단일 식별자를 두지 않고 부모 엔터티의 식별자를 조합한 복합 식별자로 설계될 수 있다."
  },
  {
    "id": 3662,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "다음 학생 데이터 모델에서 학과 정보 관리 방식으로 가장 적절한 것은?\n\n**<상황>**\n학생 엔터티에 학과명, 학과사무실, 학과전화번호가 함께 저장되어 있고, 여러 학생이 동일한 학과 정보를 반복해서 가진다.",
    "choices": [
      "학생 엔터티에서 학과 관련 속성을 분리하여 학과 엔터티를 별도로 둔다.",
      "학생 엔터티에 학과명, 학과사무실, 학과전화번호를 계속 중복 저장한다.",
      "학과명을 삭제하고 학생명만으로 학과를 판단한다.",
      "학과 정보를 학생별로 서로 다르게 입력할 수 있도록 자유 텍스트로 둔다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 여러 학생이 동일한 학과 정보를 반복해서 가지면 학과 엔터티로 분리하여 중복과 이상 현상을 줄이는 것이 적절하다.\n\n**오답 풀이**\n- 1번: 학과 정보를 별도 엔터티로 분리하면 중복과 수정 이상을 줄일 수 있다.\n- 2번: 같은 학과 정보가 반복 저장되어 데이터 불일치가 발생할 수 있다.\n- 3번: 학과명 자체를 삭제하면 필요한 업무 정보를 잃는다.\n- 4번: 자유 텍스트는 표준화와 참조 무결성 유지가 어렵다.\n\n**보충 개념**\n반복 저장되는 속성 집합이 독립적인 의미를 가지면 별도 엔터티로 분리하는 것이 좋다. 학생과 학과는 보통 학과 1개에 여러 학생이 소속되는 1:N 관계로 모델링한다."
  },
  {
    "id": 3663,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "다음 설명에 해당하는 스키마로 가장 적절한 것은?\n\n**<설명>**\n모든 사용자 관점을 통합한 조직 전체 관점의 통합적 표현이다.",
    "choices": [
      "외부 스키마",
      "개념 스키마",
      "내부 스키마",
      "서브 스키마"
    ],
    "answer": 1,
    "explanation": "정답: 2. 개념 스키마는 모든 사용자 관점을 통합한 데이터베이스 전체의 논리적 구조를 표현한다.\n\n**오답 풀이**\n- 1번: 외부 스키마는 사용자나 응용 프로그램별 관점이다.\n- 2번: 조직 전체의 통합 관점을 나타내므로 정답이다.\n- 3번: 내부 스키마는 물리적 저장 구조를 표현한다.\n- 4번: 서브 스키마는 외부 스키마와 유사한 사용자 관점의 부분 스키마를 의미한다.\n\n**보충 개념**\n3단계 스키마 구조는 외부, 개념, 내부 스키마로 구분된다. 개념 스키마는 데이터베이스 전체의 논리적 구조와 제약조건을 정의한다."
  },
  {
    "id": 3664,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "개념적 데이터 모델링에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "업무 중심의 핵심 엔터티와 관계를 도출한다.",
      "DBMS나 물리적 저장 구조에 독립적으로 모델링한다.",
      "추상화 수준이 높아 업무의 전체 구조를 파악하는 데 사용된다.",
      "추상화 단계가 높아 상위 수준의 업무 구조 파악이 어렵다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 개념적 모델링은 추상화 수준이 높기 때문에 오히려 업무의 전체 구조를 파악하는 데 적합하다.\n\n**오답 풀이**\n- 1번: 개념적 모델링의 목적이다.\n- 2번: 개념적 모델은 특정 DBMS나 저장 구조에 독립적이다.\n- 3번: 상위 수준의 업무 구조 파악에 적합하다.\n- 4번: 추상화 수준이 높아 상위 파악이 어렵다는 설명은 부적절하다.\n\n**보충 개념**\n개념적 모델링은 현실 업무를 엔터티, 속성, 관계 중심으로 추상화하는 단계이다. 이후 논리 모델링, 물리 모델링으로 구체화된다."
  },
  {
    "id": 3665,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "다른 엔터티의 부모 엔터티가 될 수 있는 엔터티 유형으로 가장 적절한 것은?",
    "choices": [
      "기본 엔터티",
      "관계 엔터티",
      "코드 엔터티",
      "집계 엔터티"
    ],
    "answer": 0,
    "explanation": "정답: 1. 기본 엔터티는 업무에 원래 존재하는 독립적인 정보로, 다른 엔터티의 부모 역할을 할 수 있다.\n\n**오답 풀이**\n- 1번: 기본 엔터티는 독립적으로 생성되며 다른 엔터티의 부모가 될 수 있다.\n- 2번: 관계 엔터티는 관계를 해소하거나 표현하기 위해 도출되는 경우가 많다.\n- 3번: 코드 엔터티는 분류나 기준값 관리에 사용된다.\n- 4번: 집계 엔터티는 요약 데이터 관리 목적에 가깝다.\n\n**보충 개념**\n기본 엔터티는 업무의 원천 정보로 독립적인 주식별자를 가진다. 예를 들어 고객, 상품, 부서 등이 기본 엔터티가 될 수 있다."
  },
  {
    "id": 3666,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "다음 데이터 모델링 구성 요소의 관계를 올바르게 표현한 것은?\n\n**<조건>**\n- 하나의 엔터티는 두 개 이상의 인스턴스를 가질 수 있다.\n- 하나의 인스턴스는 두 개 이상의 속성을 가질 수 있다.\n- 하나의 속성은 하나의 속성값을 가진다.",
    "choices": [
      "엔터티와 인스턴스는 1:1, 인스턴스와 속성은 1:1, 속성과 속성값은 1:M이다.",
      "엔터티와 인스턴스는 M:1, 인스턴스와 속성은 M:1, 속성과 속성값은 M:N이다.",
      "엔터티와 인스턴스는 1:M, 인스턴스와 속성은 1:M, 속성과 속성값은 1:M이다.",
      "엔터티와 인스턴스는 1:M, 인스턴스와 속성은 1:M, 속성과 속성값은 1:1이다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 엔터티는 여러 인스턴스를 가지며, 인스턴스는 여러 속성을 가지고, 각 속성은 하나의 속성값을 가진다.\n\n**오답 풀이**\n- 1번: 엔터티와 인스턴스, 인스턴스와 속성의 관계가 너무 제한적이다.\n- 2번: 방향과 관계 수가 부적절하다.\n- 3번: 속성과 속성값의 관계를 1:M으로 본 점이 부적절하다.\n- 4번: 제시된 조건에 가장 적절하다.\n\n**보충 개념**\n엔터티는 관리 대상의 집합, 인스턴스는 개별 사례, 속성은 인스턴스를 설명하는 항목이다. 속성값은 특정 인스턴스의 특정 속성에 들어가는 실제 값이다."
  },
  {
    "id": 3667,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "식별자 분류에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "내부 식별자는 엔터티 내부에서 스스로 생성된 식별자이다.",
      "외부 식별자는 다른 엔터티와의 관계를 통해 전달받은 식별자이다.",
      "외래키(FK)는 일반적으로 외부 식별자에 해당한다.",
      "외래키(FK)는 항상 내부 식별자이다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 외래키는 다른 엔터티로부터 전달받은 속성이므로 내부 식별자가 아니라 외부 식별자로 보는 것이 일반적이다.\n\n**오답 풀이**\n- 1번: 내부 식별자의 설명이다.\n- 2번: 외부 식별자의 설명이다.\n- 3번: 외래키는 관계를 통해 전달받은 식별자에 해당한다.\n- 4번: 외래키를 항상 내부 식별자라고 한 설명은 틀리다.\n\n**보충 개념**\n식별자는 생성 위치에 따라 내부 식별자와 외부 식별자로 구분할 수 있다. FK는 부모 엔터티와의 관계를 통해 전달받는 경우가 많다."
  },
  {
    "id": 3668,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "식별 관계와 비식별 관계에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "식별 관계는 점선, 비식별 관계는 실선으로 표현한다.",
      "식별 관계와 비식별 관계는 모두 점선으로만 표현한다.",
      "식별 관계는 실선, 비식별 관계는 점선으로 표현한다.",
      "식별 관계와 비식별 관계는 모두 실선으로만 표현한다."
    ],
    "answer": 2,
    "explanation": "정답: 3. ERD 표기에서 식별 관계는 실선, 비식별 관계는 점선으로 표현한다.\n\n**오답 풀이**\n- 1번: 식별 관계와 비식별 관계의 표기가 반대이다.\n- 2번: 둘을 모두 점선으로 표현하지 않는다.\n- 3번: 식별 관계와 비식별 관계의 표기가 올바르다.\n- 4번: 둘을 모두 실선으로 표현하지 않는다.\n\n**보충 개념**\n식별 관계에서는 부모 식별자가 자식의 주식별자에 포함된다. 비식별 관계에서는 부모 식별자가 자식의 일반 속성 또는 외래키로만 포함된다."
  },
  {
    "id": 3669,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "정규화",
    "question": "교수-과목, 학생-과목 사이에 각각 다대다 관계가 존재한다고 할 때, 정규화 및 관계 해소 후 추가로 생성되는 관계 엔터티 수로 가장 적절한 것은?",
    "choices": [
      "0개",
      "1개",
      "2개",
      "3개"
    ],
    "answer": 2,
    "explanation": "정답: 3. 교수-과목, 학생-과목처럼 M:N 관계가 두 개 존재하면 이를 해소하기 위한 관계 엔터티가 2개 추가될 수 있다.\n\n**오답 풀이**\n- 1번: M:N 관계 해소가 필요하므로 추가 엔터티가 없다는 설명은 부적절하다.\n- 2번: M:N 관계가 두 개라면 하나만으로 부족할 수 있다.\n- 3번: 두 개의 관계 엔터티가 추가되는 경우에 해당한다.\n- 4번: 제시된 관계 수보다 과도하게 추가한 값이다.\n\n**보충 개념**\nM:N 관계는 관계형 모델에서 직접 구현하기 어렵기 때문에 교차 엔터티로 해소한다. 예를 들어 수강, 강의배정 같은 엔터티가 추가될 수 있다."
  },
  {
    "id": 3670,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "정규화에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "제3정규형은 제1정규형과 제2정규형을 만족하지 않아도 된다.",
      "제1정규형은 속성의 원자성을 만족해야 한다.",
      "제2정규형은 부분 함수 종속을 제거한다.",
      "제3정규형은 이행 함수 종속을 제거한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 제3정규형은 제1정규형과 제2정규형을 만족한 상태에서 이행 함수 종속을 제거해야 한다.\n\n**오답 풀이**\n- 1번: 제3정규형이 하위 정규형을 만족하지 않아도 된다는 설명은 틀리다.\n- 2번: 제1정규형의 설명이다.\n- 3번: 제2정규형의 설명이다.\n- 4번: 제3정규형의 설명이다.\n\n**보충 개념**\n정규화는 단계적으로 진행된다. 일반적으로 제2정규형은 제1정규형을 만족해야 하고, 제3정규형은 제2정규형을 만족해야 한다."
  },
  {
    "id": 3671,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 조건식의 결과로 조회되는 값으로 가장 적절한 것은?\n\n**<데이터>**\n| COL1 | COL2 | RESULT |\n|---:|---:|---|\n| 1 | NULL | A |\n| 2 | NULL | B |\n| NULL | 3 | C |\n| NULL | 4 | D |\n\n```sql\nSELECT RESULT\nFROM T\nWHERE NOT (COL1 = 1 OR COL2 = NULL);\n```",
    "choices": [
      "A",
      "B",
      "C",
      "조회 결과 없음"
    ],
    "answer": 3,
    "explanation": "정답: 4. `COL2 = NULL`은 TRUE가 아니라 UNKNOWN이다. WHERE 절은 조건 결과가 TRUE인 행만 반환하며 FALSE와 UNKNOWN은 제외된다.\n\n**행별 판단**\n- A: COL1 = 1은 TRUE, COL2 = NULL은 UNKNOWN → TRUE OR UNKNOWN = TRUE → NOT TRUE = FALSE이므로 제외된다.\n- B: COL1 = 1은 FALSE, COL2 = NULL은 UNKNOWN → FALSE OR UNKNOWN = UNKNOWN → NOT UNKNOWN = UNKNOWN이므로 제외된다.\n- C: COL1 = 1은 UNKNOWN, COL2 = NULL은 UNKNOWN → UNKNOWN OR UNKNOWN = UNKNOWN → NOT UNKNOWN = UNKNOWN이므로 제외된다.\n- D: COL1 = 1은 UNKNOWN, COL2 = NULL은 UNKNOWN → UNKNOWN OR UNKNOWN = UNKNOWN → NOT UNKNOWN = UNKNOWN이므로 제외된다.\n\n**보충 개념**\nSQL에서 NULL은 `=` 연산자로 비교할 수 없고 `IS NULL`을 사용해야 한다. WHERE 절에서는 TRUE인 행만 조회된다."
  },
  {
    "id": 3672,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 중 결과가 다른 것은?\n\n**<조건>**\n값과 옵션이 서로 다를 수 있으며, NULL 처리 함수의 결과를 비교한다.",
    "choices": [
      "NVL(값, 옵션)",
      "COALESCE(값, 옵션)",
      "NULLIF(값, 옵션)",
      "CASE WHEN 값 IS NOT NULL THEN 값 ELSE 옵션 END"
    ],
    "answer": 2,
    "explanation": "정답: 3. NVL, COALESCE, CASE 표현식은 값이 NULL이면 옵션을 반환하고 아니면 값을 반환하는 형태로 유사하지만, NULLIF는 두 값이 같으면 NULL을 반환한다.\n\n**오답 풀이**\n- 1번: 값이 NULL이면 옵션을 반환한다.\n- 2번: 인자 중 첫 번째 NULL이 아닌 값을 반환한다.\n- 3번: 값과 옵션이 같으면 NULL을 반환하므로 다른 함수들과 성격이 다르다.\n- 4번: NVL과 유사한 NULL 대체 로직이다.\n\n**보충 개념**\nNVL(expr1, expr2)는 expr1이 NULL이면 expr2를 반환한다. NULLIF(expr1, expr2)는 두 값이 같으면 NULL, 다르면 expr1을 반환한다."
  },
  {
    "id": 3673,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "다음 윈도우 함수의 결과로 가장 적절한 것은?\n\n**<데이터>**\n| GRP | VAL |\n|---|---:|\n| A | 1 |\n| A | 3 |\n| A | 5 |\n| A | 7 |\n| B | 2 |\n| B | 4 |\n\n```sql\nSELECT GRP, VAL,\n       SUM(VAL) OVER(\n           PARTITION BY GRP\n           ORDER BY VAL\n           RANGE BETWEEN 2 PRECEDING AND 2 FOLLOWING\n       ) AS SUM_VAL\nFROM T;\n```",
    "choices": [
      "A: 1,3,5,7 / B: 2,4",
      "A: 4,8,12,12 / B: 2,4",
      "A: 4,9,15,12 / B: 6,6",
      "A: 16,16,16,16 / B: 6,6"
    ],
    "answer": 2,
    "explanation": "정답: 3. RANGE 2 PRECEDING AND 2 FOLLOWING은 현재 VAL 기준으로 -2부터 +2 사이의 값을 합산한다.\n\n**오답 풀이**\n- 1번: 원본 값을 그대로 나열한 값이다.\n- 2번: 일부 프레임 합산이 잘못되었다.\n- 3번: A 그룹은 1→1+3=4, 3→1+3+5=9, 5→3+5+7=15, 7→5+7=12이고 B 그룹은 각각 2+4=6이다.\n- 4번: 전체 파티션 합계를 모든 행에 표시한 결과이다.\n\n**보충 개념**\nRANGE 프레임은 물리적인 행 개수가 아니라 ORDER BY 값의 범위를 기준으로 윈도우를 계산한다."
  },
  {
    "id": 3674,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "계층형 질의에서 사원에서 관리자 방향으로 역방향 탐색을 수행하려고 한다. 다음 중 PRIOR가 들어갈 위치로 가장 적절한 것은?\n\n```sql\nSELECT EMPNO, MGR\nFROM EMP\nSTART WITH EMPNO = 7788\nCONNECT BY EMPNO = MGR;\n```",
    "choices": [
      "EMPNO 앞",
      "MGR 앞",
      "START WITH 앞",
      "SELECT 앞"
    ],
    "answer": 1,
    "explanation": "정답: ②\n해설\nPRIOR는 \"이전(부모) 행\"을 가리킨다. EMPNO = PRIOR MGR은 현재 행의 EMPNO = 이전 행의 MGR → 사원에서 시작해 그 관리자를 따라 위로 올라가는 상향 탐색이다.\n\n① PRIOR EMPNO = MGR은 부모의 EMPNO = 자식의 MGR → 관리자→사원 하향 탐색이라 방향 반대\n③④ PRIOR는 CONNECT BY 절 안의 컬럼에만 붙으므로 위치 자체가 성립 안 함"
  },
  {
    "id": 3675,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 중 NVL을 사용하여 금액 컬럼의 NULL을 0으로 대체한 뒤 합계를 구하는 SQL로 가장 적절한 것은?",
    "choices": [
      "SELECT SUM(금액) FROM 매출",
      "SELECT NVL(SUM(금액), 금액) FROM 매출",
      "SELECT SUM(NVL(금액, 0)) FROM 매출",
      "SELECT NVL(금액, SUM(0)) FROM 매출"
    ],
    "answer": 2,
    "explanation": "정답: 3. 개별 금액 값이 NULL이면 0으로 바꾼 뒤 합산하려면 SUM(NVL(금액, 0))을 사용한다.\n\n**오답 풀이**\n- 1번: SUM은 NULL을 제외하지만 NULL을 0으로 대체한 행별 계산은 아니다.\n- 2번: SUM 결과가 NULL일 때 금액으로 대체하는 잘못된 형태이다.\n- 3번: 각 행의 NULL 금액을 0으로 대체한 뒤 합산한다.\n- 4번: 일반 컬럼과 집계 함수를 잘못 혼용했다.\n\n**보충 개념**\nNVL(expr1, expr2)는 expr1이 NULL이면 expr2를 반환한다. 행별 NULL 대체 후 집계하려면 집계 함수 내부에 NVL을 넣는다."
  },
  {
    "id": 3676,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "Oracle 계층형 질의에서 순방향과 역방향 탐색을 결정하는 핵심 키워드는?",
    "choices": [
      "START WITH",
      "PRIOR",
      "ORDER BY",
      "GROUP BY"
    ],
    "answer": 1,
    "explanation": "정답: 2. 계층형 질의에서 PRIOR의 위치에 따라 부모에서 자식으로 탐색할지, 자식에서 부모로 탐색할지가 결정된다.\n\n**오답 풀이**\n- 1번: START WITH는 시작 노드를 지정한다.\n- 2번: PRIOR는 계층 탐색 방향을 결정하는 핵심 키워드이다.\n- 3번: ORDER BY는 결과 정렬과 관련된다.\n- 4번: GROUP BY는 그룹 집계와 관련된다.\n\n**보충 개념**\n`CONNECT BY PRIOR 부모컬럼 = 자식컬럼`은 하위 방향 탐색에 자주 사용된다. PRIOR 위치가 바뀌면 역방향 탐색이 된다."
  },
  {
    "id": 3677,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "트랜잭션이 동시에 실행될 경우 다른 트랜잭션에 의해 영향을 받지 않고 독립적으로 실행되어야 한다는 성질은?",
    "choices": [
      "원자성",
      "일관성",
      "고립성",
      "지속성"
    ],
    "answer": 2,
    "explanation": "정답: 3. 고립성은 동시에 실행되는 트랜잭션들이 서로 영향을 주지 않고 독립적으로 수행되어야 한다는 성질이다.\n\n**오답 풀이**\n- 1번: 원자성은 모두 수행되거나 모두 취소되어야 하는 성질이다.\n- 2번: 일관성은 트랜잭션 전후 데이터가 일관된 상태를 유지해야 하는 성질이다.\n- 3번: 동시 실행 트랜잭션 간 독립성과 관련된다.\n- 4번: 지속성은 커밋 결과가 영구히 보존되는 성질이다.\n\n**보충 개념**\n트랜잭션의 ACID는 원자성, 일관성, 고립성, 지속성이다. 동시성 제어는 주로 고립성을 보장하기 위한 기술이다."
  },
  {
    "id": 3678,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "서브쿼리",
    "question": "서브쿼리에 대한 설명 중 적절하지 않은 것은?",
    "choices": [
      "서브쿼리는 메인쿼리 안에 포함된 SELECT 문이다.",
      "서브쿼리에서는 메인쿼리의 컬럼을 참조할 수 있는 경우가 있다.",
      "메인쿼리에서는 서브쿼리 내부 테이블의 컬럼을 직접 사용할 수 있다.",
      "서브쿼리는 단일행, 다중행, 다중컬럼 서브쿼리 등으로 구분할 수 있다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 메인쿼리는 서브쿼리 내부에서만 정의된 테이블의 컬럼을 직접 사용할 수 없다.\n\n**오답 풀이**\n- 1번: 서브쿼리의 기본 설명이다.\n- 2번: 상관 서브쿼리에서는 서브쿼리가 메인쿼리 컬럼을 참조할 수 있다.\n- 3번: 서브쿼리 내부 테이블의 컬럼은 메인쿼리에서 직접 사용할 수 없다.\n- 4번: 서브쿼리는 반환 행 수와 컬럼 수에 따라 분류할 수 있다.\n\n**보충 개념**\n조인은 참여 테이블이 같은 쿼리 블록에 있어 컬럼 참조가 가능하다. 반면 서브쿼리의 내부 범위는 메인쿼리와 구분된다."
  },
  {
    "id": 3679,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "순위 결과가 1, 2, 2, 3처럼 공동 순위 이후에도 순위가 연속되도록 하려면 어떤 함수를 사용해야 하는가?",
    "choices": [
      "RANK",
      "DENSE_RANK",
      "ROW_NUMBER",
      "NTILE"
    ],
    "answer": 1,
    "explanation": "정답: 2. DENSE_RANK는 공동 순위가 있어도 다음 순위를 건너뛰지 않는다.\n\n**오답 풀이**\n- 1번: RANK는 1, 2, 2, 4처럼 다음 순위를 건너뛴다.\n- 2번: DENSE_RANK는 1, 2, 2, 3처럼 연속 순위를 반환한다.\n- 3번: ROW_NUMBER는 같은 값에도 서로 다른 번호를 부여한다.\n- 4번: NTILE은 데이터를 지정한 버킷 수로 나누는 함수이다.\n\n**보충 개념**\n순위 함수의 차이는 공동 순위 처리 방식에서 자주 출제된다. RANK, DENSE_RANK, ROW_NUMBER를 구분해야 한다."
  },
  {
    "id": 3680,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "SQL 명령어와 명령어 유형의 연결 중 적절하지 않은 것은?",
    "choices": [
      "CREATE - DDL",
      "INSERT - DCL",
      "REVOKE - DCL",
      "COMMIT - TCL"
    ],
    "answer": 1,
    "explanation": "정답: 2. INSERT는 데이터를 삽입하는 DML이지 DCL이 아니다.\n\n**오답 풀이**\n- 1번: CREATE는 객체 생성 명령으로 DDL이다.\n- 2번: INSERT는 DML이므로 DCL이라고 한 설명은 틀리다.\n- 3번: REVOKE는 권한 회수 명령으로 DCL이다.\n- 4번: COMMIT은 트랜잭션 제어 명령으로 TCL이다.\n\n**보충 개념**\nDDL은 데이터 정의, DML은 데이터 조작, DCL은 권한 제어, TCL은 트랜잭션 제어 명령을 의미한다."
  },
  {
    "id": 3681,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "차집합 연산으로 가장 적절한 것은?",
    "choices": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "MINUS"
    ],
    "answer": 3,
    "explanation": "정답: 4. Oracle에서 차집합 연산은 MINUS를 사용한다.\n\n**오답 풀이**\n- 1번: UNION은 합집합이다.\n- 2번: UNION ALL은 중복을 포함한 합집합이다.\n- 3번: INTERSECT는 교집합이다.\n- 4번: MINUS는 첫 번째 SELECT 결과에서 두 번째 SELECT 결과에 포함된 행을 제외하는 차집합 연산이다.\n\n**보충 개념**\nSQL 표준 및 일부 DBMS에서는 EXCEPT를 차집합으로 사용하지만, SQLD에서 자주 다루는 Oracle 기준 차집합 연산자는 MINUS이다."
  },
  {
    "id": 3682,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "세 번째 문자가 L인 단어를 찾는 LIKE 조건으로 가장 적절한 것은?",
    "choices": [
      "LIKE 'L__%'",
      "LIKE '__L%'",
      "LIKE '%L__'",
      "LIKE '_L%'"
    ],
    "answer": 1,
    "explanation": "정답: 2. `_`는 임의의 한 글자를 의미하므로 `__L%`는 첫 두 글자 뒤 세 번째 글자가 L인 문자열을 찾는다.\n\n**오답 풀이**\n- 1번: 첫 번째 문자가 L인 문자열을 찾는다.\n- 2번: 세 번째 문자가 L인 문자열을 찾는다.\n- 3번: 뒤쪽에 L이 포함되고 그 뒤에 두 글자가 이어지는 문자열을 찾는 형태이다.\n- 4번: 두 번째 문자가 L인 문자열을 찾는다.\n\n**보충 개념**\nLIKE에서 `%`는 0개 이상의 임의 문자열, `_`는 정확히 한 글자를 의미한다. 위치 조건에는 `_` 개수가 중요하다."
  },
  {
    "id": 3683,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "아래 쿼리의 결과값으로 가장 적절한 것은?\n\n**<TAB1>**\n| C1 | C2 | C3 |\n|---:|---:|---:|\n| 1 | 2 | 3 |\n| NULL | 2 | 3 |\n| NULL | NULL | 3 |\n\n```sql\nSELECT SUM(COALESCE(C1, C2, C3))\nFROM TAB1;\n```",
    "choices": [
      "0",
      "1",
      "6",
      "14"
    ],
    "answer": 2,
    "explanation": "정답: 3. COALESCE는 첫 번째 NULL이 아닌 값을 반환하므로 각 행의 값은 1, 2, 3이고 합계는 6이다.\n\n**오답 풀이**\n- 1번: NULL을 모두 0으로 처리한 값이 아니다.\n- 2번: 첫 번째 행만 계산한 값이다.\n- 3번: 1 + 2 + 3 = 6으로 올바르다.\n- 4번: 모든 컬럼 값을 단순 합산한 값과 혼동한 것이다.\n\n**보충 개념**\nCOALESCE(expr1, expr2, ...)는 왼쪽부터 검사하여 첫 번째 NULL이 아닌 값을 반환한다. NVL보다 여러 인자를 처리할 수 있다."
  },
  {
    "id": 3684,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 SELECT 문장의 논리적 실행 순서를 올바르게 나열한 것은?",
    "choices": [
      "SELECT - FROM - WHERE - GROUP BY - HAVING - ORDER BY",
      "FROM - SELECT - WHERE - GROUP BY - HAVING - ORDER BY",
      "FROM - WHERE - GROUP BY - HAVING - ORDER BY - SELECT",
      "FROM - WHERE - GROUP BY - HAVING - SELECT - ORDER BY"
    ],
    "answer": 3,
    "explanation": "정답: 4. SELECT 문의 논리적 처리 순서는 FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY 순서로 이해할 수 있다.\n\n**오답 풀이**\n- 1번: SELECT가 가장 먼저 수행된다고 보기 어렵다.\n- 2번: WHERE가 SELECT보다 먼저 처리된다.\n- 3번: ORDER BY는 SELECT 결과를 기준으로 정렬하므로 SELECT 이후로 보는 것이 일반적이다.\n- 4번: 논리적 실행 순서로 가장 적절하다.\n\n**보충 개념**\n논리적 실행 순서를 이해하면 WHERE 절에서 SELECT 별칭을 사용할 수 없는 이유를 설명할 수 있다. ORDER BY에서는 SELECT 별칭 사용이 가능하다."
  },
  {
    "id": 3685,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 중 집계 결과 A와 B가 서로 다른 값을 반환할 수 있는 것은?\n\n**<조건>**\nSAL 컬럼에는 서로 다른 급여 값이 존재한다.",
    "choices": [
      "COUNT(SAL) AS A, COUNT(SAL) AS B",
      "SUM(SAL) AS A, SUM(SAL) AS B",
      "MAX(SAL) AS A, MIN(SAL) AS B",
      "AVG(SAL) AS A, AVG(SAL) AS B"
    ],
    "answer": 2,
    "explanation": "정답: 3. SAL 컬럼에 서로 다른 값이 존재하면 일반적으로 MAX(SAL)과 MIN(SAL)은 서로 다른 집계 결과를 반환한다.\n\n**오답 풀이**\n- 1번: 같은 표현식이므로 A와 B가 같다.\n- 2번: 같은 표현식이므로 A와 B가 같다.\n- 3번: 최대값과 최소값은 서로 다른 값을 반환할 수 있다.\n- 4번: 같은 표현식이므로 A와 B가 같다.\n\n**보충 개념**\n집계 함수는 그룹별 하나의 결과를 반환한다. MAX는 최댓값, MIN은 최솟값을 반환하므로 서로 다른 값이 존재하는 데이터에서는 두 결과가 달라질 수 있다."
  },
  {
    "id": 3686,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "제품, 생산제품, 생산라인 엔터티가 있을 때 제품과 생산라인을 생산제품 엔터티 없이 직접 조인하면 발생할 수 있는 문제로 가장 적절한 것은?",
    "choices": [
      "카테시안 곱이 발생할 수 있다.",
      "항상 INNER JOIN 결과가 0건이 된다.",
      "기본키가 자동으로 생성된다.",
      "외래키 제약조건이 자동으로 삭제된다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 제품과 생산라인 사이의 관계 엔터티를 거치지 않고 직접 조인하면 조인 조건이 부정확해져 카테시안 곱이 발생할 수 있다.\n\n**오답 풀이**\n- 1번: 관계 조건이 없거나 부적절하면 모든 조합이 생성될 수 있다.\n- 2번: 항상 0건이 되는 것은 아니다.\n- 3번: 조인으로 기본키가 자동 생성되지 않는다.\n- 4번: 조인으로 외래키 제약조건이 삭제되지 않는다.\n\n**보충 개념**\nM:N 관계는 교차 엔터티를 통해 해소한다. 직접 관련 없는 테이블을 조인하면 불필요한 조합이 생성되어 결과가 부풀려질 수 있다."
  },
  {
    "id": 3687,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "회원 테이블과 주문이력 테이블이 있을 때, 주문을 한 번도 하지 않은 회원을 찾는 SQL로 가장 적절한 것은?",
    "choices": [
      "SELECT * FROM 회원 M WHERE EXISTS (SELECT 1 FROM 주문 O WHERE M.회원ID = O.회원ID)",
      "SELECT * FROM 회원 M WHERE M.회원ID IN (SELECT 회원ID FROM 주문)",
      "SELECT * FROM 회원 M WHERE NOT EXISTS (SELECT 1 FROM 주문 O WHERE M.회원ID = O.회원ID)",
      "SELECT * FROM 회원 M, 주문 O WHERE M.회원ID = O.회원ID"
    ],
    "answer": 2,
    "explanation": "정답: 3. 주문이 존재하지 않는 회원을 찾으려면 NOT EXISTS를 사용하여 해당 회원의 주문 이력이 없는 경우를 조회한다.\n\n**오답 풀이**\n- 1번: 주문한 회원을 찾는다.\n- 2번: 주문한 회원을 찾는다.\n- 3번: 주문 이력이 없는 회원을 찾는다.\n- 4번: 회원과 주문을 조인하므로 주문한 회원만 조회된다.\n\n**보충 개념**\n미존재 데이터를 찾을 때는 NOT EXISTS가 자주 사용된다. NOT IN은 서브쿼리 결과에 NULL이 포함될 때 예상과 다른 결과가 나올 수 있다."
  },
  {
    "id": 3688,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "부모 테이블의 행 삭제 시 해당 행을 참조하는 자식 테이블의 행도 함께 삭제되도록 외래키를 생성하려고 한다. 적절한 옵션은?",
    "choices": [
      "ON DELETE RESTRICT",
      "ON DELETE SET NULL",
      "ON DELETE CASCADE",
      "ON UPDATE CASCADE"
    ],
    "answer": 2,
    "explanation": "정답: 3. ON DELETE CASCADE는 부모 행이 삭제될 때 이를 참조하는 자식 행도 함께 삭제되도록 한다.\n\n**오답 풀이**\n- 1번: RESTRICT는 자식 행이 있으면 부모 행 삭제를 제한한다.\n- 2번: SET NULL은 자식 외래키 값을 NULL로 변경한다.\n- 3번: 자식 행까지 함께 삭제하는 옵션이다.\n- 4번: 삭제가 아니라 갱신 전파와 관련된 표현이다.\n\n**보충 개념**\n외래키 삭제 규칙에는 RESTRICT, CASCADE, SET NULL 등이 있다. 업무적으로 자식 데이터까지 삭제되어도 되는지 신중히 판단해야 한다."
  },
  {
    "id": 3689,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "ROLE에 대한 설명으로 옳은 것은?",
    "choices": [
      "ROLE은 테이블 데이터를 저장하는 물리적 공간이다.",
      "ROLE은 GRANT로 부여하고 REVOKE로 회수할 수 있다.",
      "ROLE은 COMMIT으로 생성하고 ROLLBACK으로 삭제한다.",
      "ROLE은 SELECT 문에서만 사용할 수 있는 별칭이다."
    ],
    "answer": 1,
    "explanation": "정답: 2. ROLE은 여러 권한을 묶어 관리하는 객체이며 GRANT로 부여하고 REVOKE로 회수할 수 있다.\n\n**오답 풀이**\n- 1번: 물리적 저장 공간은 테이블스페이스 등에 해당한다.\n- 2번: ROLE 권한 부여와 회수 설명으로 옳다.\n- 3번: ROLE은 COMMIT/ROLLBACK으로 생성·삭제하지 않는다.\n- 4번: 별칭이 아니라 권한 관리 객체이다.\n\n**보충 개념**\nROLE을 사용하면 사용자별로 권한을 하나씩 부여하지 않고 권한 묶음을 관리할 수 있다. 권한 부여는 GRANT, 회수는 REVOKE를 사용한다."
  },
  {
    "id": 3690,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "DDL",
    "question": "CTAS(Create Table As Select)로 테이블을 복제할 때 제약조건 적용에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "기본키(PK)는 복제되지 않는다.",
      "NOT NULL 조건은 절대 복제되지 않는다.",
      "CHECK 제약조건은 항상 복제된다.",
      "DEFAULT 값은 항상 복제된다."
    ],
    "answer": 0,
    "explanation": "정답: 1. CTAS로 테이블을 생성하면 일반적으로 기본키, 외래키, CHECK, DEFAULT 같은 제약조건은 복제되지 않고 일부 NOT NULL 속성만 유지될 수 있다.\n\n**오답 풀이**\n- 1번: PK는 CTAS로 자동 복제되지 않는다.\n- 2번: NOT NULL 속성은 일부 유지될 수 있다.\n- 3번: CHECK 제약조건은 일반적으로 복제되지 않는다.\n- 4번: DEFAULT 정의는 일반적으로 복제되지 않는다.\n\n**보충 개념**\nCTAS는 조회 결과를 기반으로 새 테이블을 빠르게 생성하는 방식이다. 구조와 데이터는 복제되지만 제약조건, 인덱스, 트리거 등은 별도 생성이 필요할 수 있다."
  },
  {
    "id": 3691,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "급여가 2000 이상인 행만 합계에 포함하려고 한다. 조건에 맞지 않는 행은 NULL로 처리하여 SUM 집계에서 제외하는 표현으로 가장 적절한 것은?",
    "choices": [
      "SUM(CASE WHEN SAL >= 2000 THEN SAL ELSE 0 END)",
      "SUM(CASE WHEN SAL >= 2000 THEN SAL ELSE NULL END)",
      "COUNT(CASE WHEN SAL >= 2000 THEN SAL ELSE NULL END)",
      "MAX(CASE WHEN SAL >= 2000 THEN NULL ELSE SAL END)"
    ],
    "answer": 1,
    "explanation": "정답: 2. 조건에 맞는 급여만 합산하고 조건에 맞지 않는 값은 NULL로 처리하면 SUM에서 제외된다.\n\n**오답 풀이**\n- 1번: ELSE 0은 합계 결과는 비슷할 수 있으나 NULL 제외 개념을 묻는 문제 의도와 다르다.\n- 2번: 조건에 맞지 않는 행을 NULL로 처리해 집계에서 제외한다.\n- 3번: 합계가 아니라 건수를 센다.\n- 4번: 조건에 맞는 값을 NULL로 만들어 반대로 처리한다.\n\n**보충 개념**\n집계 함수는 일반적으로 NULL을 제외한다. 조건부 집계에는 CASE WHEN과 SUM, COUNT를 함께 자주 사용한다."
  },
  {
    "id": 3692,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 중 A 결과와 B 결과가 다른 것으로 가장 적절한 것은?",
    "choices": [
      "A: UNION, B: DISTINCT를 사용한 UNION 결과",
      "A: INNER JOIN, B: 조인 조건을 WHERE 절에 작성한 등가 조인",
      "A: NOT EXISTS, B: NULL이 포함된 NOT IN",
      "A: COUNT(*), B: COUNT(1)"
    ],
    "answer": 2,
    "explanation": "정답: 3. NOT EXISTS와 NOT IN은 서브쿼리 결과에 NULL이 포함될 때 결과가 달라질 수 있다.\n\n**오답 풀이**\n- 1번: UNION은 기본적으로 중복을 제거한다.\n- 2번: 같은 등가 조인 조건이라면 결과가 같을 수 있다.\n- 3번: NULL이 포함된 NOT IN은 UNKNOWN으로 인해 NOT EXISTS와 달라질 수 있다.\n- 4번: COUNT(*)와 COUNT(1)은 일반적으로 전체 행 수를 센다.\n\n**보충 개념**\nNOT IN은 비교 목록에 NULL이 있으면 결과가 반환되지 않는 문제가 생길 수 있다. NULL 가능성이 있는 반집합 연산에는 NOT EXISTS가 안전한 경우가 많다."
  },
  {
    "id": 3693,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "SQL의 특징이 아닌 것은?",
    "choices": [
      "절차적(procedural)",
      "구조적(structured)",
      "집합적(set-based)",
      "선언적(declarative)"
    ],
    "answer": 0,
    "explanation": "정답: 1. SQL은 어떤 데이터를 원하는지 선언하는 비절차적 언어에 가깝다.\n\n**오답 풀이**\n- 1번: SQL은 절차적 언어가 아니라 비절차적·선언적 질의 언어이다.\n- 2번: SQL은 Structured Query Language로 구조화된 질의 언어이다.\n- 3번: SQL은 행 단위보다 집합 단위 처리를 지향한다.\n- 4번: SQL은 원하는 결과를 선언하는 방식이다.\n\n**보충 개념**\nSQL은 데이터 처리 절차를 상세히 명령하기보다 원하는 결과를 표현한다. DBMS 옵티마이저가 실행 계획을 결정한다."
  },
  {
    "id": 3694,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 집합 연산 결과로 가장 적절한 것은?\n\n**<SQL>**\n```sql\nSELECT MAX(SAL) FROM EMP\nUNION\nSELECT MIN(SAL) FROM EMP;\n```\n\n**<EMP>**\n\n  | ENAME | SAL |\n  |:---|---:|\n  | SCOTT | 9000 |\n  | SMITH | 8950 |\n  | FORD | 8925 |",
    "choices": [
      "9000",
      "8925",
      "9000, 8925",
      "NULL"
    ],
    "answer": 2,
    "explanation": "정답: 3. UNION은 두 SELECT 결과를 합치고 중복을 제거하므로 최대 급여 9000과 최소 급여 8925가 모두 출력된다.\n\n**오답 풀이**\n- 1번: MAX 결과만 포함한 값이다.\n- 2번: MIN 결과만 포함한 값이다.\n- 3번: MAX와 MIN 결과가 서로 다르면 두 행이 출력된다.\n- 4번: 집계 결과가 존재하므로 NULL이 아니다.\n\n**보충 개념**\nUNION은 중복을 제거한 합집합이다. UNION ALL은 중복을 제거하지 않고 모든 결과를 그대로 합친다."
  },
  {
    "id": 3695,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "ROLLUP",
    "question": "다음 중 `ROLLUP(A, B)`와 다른 결과를 생성하는 것은?",
    "choices": [
      "GROUP BY ROLLUP(A, B)",
      "GROUP BY GROUPING SETS((A, B), (A), ())",
      "GROUP BY ROLLUP((A, B))",
      "GROUP BY A, B UNION ALL GROUP BY A UNION ALL GROUP BY ()"
    ],
    "answer": 2,
    "explanation": "정답: 3. ROLLUP((A, B))는 A와 B를 하나의 묶음으로 보아 (A, B), ()만 생성하므로 ROLLUP(A, B)와 다르다.\n\n**오답 풀이**\n- 1번: 기준 표현이다.\n- 2번: ROLLUP(A, B)와 같은 그룹 집합이다.\n- 3번: 중첩 괄호로 A,B를 하나의 단위로 처리하여 (A) 소계가 빠진다.\n- 4번: ROLLUP(A, B)의 결과 집합을 UNION ALL로 표현한 형태이다.\n\n**보충 개념**\nROLLUP(A, B)는 (A,B), (A), ()를 생성한다. ROLLUP((A,B))는 복합 컬럼 묶음으로 처리되어 (A,B), ()만 생성한다."
  },
  {
    "id": 3696,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "NULL을 포함한 컬럼에 대한 AVG 계산 설명으로 가장 적절한 것은?",
    "choices": [
      "AVG(컬럼)과 AVG(NVL(컬럼, 0))은 항상 같다.",
      "AVG(컬럼)은 NULL을 제외하고 평균을 계산한다.",
      "AVG(NVL(컬럼, 0))은 NULL을 제외하고 평균을 계산한다.",
      "AVG(컬럼)은 NULL이 하나라도 있으면 항상 NULL을 반환한다."
    ],
    "answer": 1,
    "explanation": "정답: 2. AVG(컬럼)은 NULL을 제외하고 평균을 계산한다.\n\n**오답 풀이**\n- 1번: AVG(NVL(컬럼,0))은 NULL을 0으로 포함해 평균을 내므로 AVG(컬럼)과 달라질 수 있다.\n- 2번: AVG의 NULL 처리 방식으로 옳다.\n- 3번: NVL로 NULL을 0으로 바꾸면 0도 평균 계산에 포함된다.\n- 4번: NULL이 있어도 NULL이 아닌 값이 있으면 평균을 계산한다.\n\n**보충 개념**\n집계 함수는 대부분 NULL을 제외한다. 그러나 NVL로 NULL을 0으로 바꾸면 평균의 분모가 달라져 결과가 달라질 수 있다."
  },
  {
    "id": 3697,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "JOIN",
    "question": "NATURAL JOIN에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "동일한 이름의 컬럼을 자동으로 조인 조건으로 사용한다.",
      "동일 이름 컬럼은 결과에서 하나만 표시될 수 있다.",
      "NATURAL JOIN 구문에서는 USING이나 ON 절을 함께 사용할 수 있다.",
      "의도하지 않은 동일 이름 컬럼이 있으면 예상과 다른 결과가 나올 수 있다."
    ],
    "answer": 2,
    "explanation": "정답: 3. NATURAL JOIN은 조인 컬럼을 자동으로 결정하므로 ON이나 USING 절을 함께 사용할 수 없다.\n\n**오답 풀이**\n- 1번: NATURAL JOIN의 특징이다.\n- 2번: 동일 이름 컬럼은 하나로 표시될 수 있다.\n- 3번: NATURAL JOIN과 ON/USING을 함께 사용할 수 있다는 설명은 틀리다.\n- 4번: 동일 이름 컬럼이 의도치 않게 조인 조건이 될 수 있다.\n\n**보충 개념**\nNATURAL JOIN은 편리하지만 조인 조건이 명시적이지 않아 실무에서는 주의가 필요하다. 명확한 조건이 필요하면 ON 또는 USING을 사용하는 것이 좋다."
  },
  {
    "id": 3698,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "제약조건에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "고유키에는 DBMS에 따라 NULL이 허용될 수 있다.",
      "CHECK 제약조건은 조건을 만족하지 않는 값을 제한하는 데 사용된다.",
      "하나의 테이블에는 기본키 제약조건을 두 개 이상 만들 수 있다.",
      "DEFAULT는 명시 값이 없을 때 기본값을 입력하는 데 사용된다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 하나의 테이블에는 기본키 제약조건을 하나만 지정할 수 있다.\n\n**오답 풀이**\n- 1번: 고유키의 NULL 처리 방식은 DBMS별로 차이가 있을 수 있다.\n- 2번: CHECK는 값의 조건을 제한하는 제약조건이다.\n- 3번: 테이블당 기본키 제약조건은 하나만 만들 수 있다.\n- 4번: DEFAULT는 값이 생략될 때 기본값을 제공한다.\n\n**보충 개념**\n기본키는 테이블의 각 행을 대표하는 식별 기준이다. 여러 컬럼을 묶어 하나의 복합 기본키를 만들 수는 있지만 기본키 제약조건 자체는 테이블당 하나이다."
  },
  {
    "id": 3699,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUP BY",
    "question": "가능한 모든 조합의 소계와 총계를 생성하는 GROUP BY 확장 기능은?",
    "choices": [
      "ROLLUP",
      "GROUPING SETS",
      "CUBE",
      "GROUPING"
    ],
    "answer": 2,
    "explanation": "정답: 3. CUBE는 지정된 컬럼들의 모든 가능한 조합에 대한 소계를 생성한다.\n\n**오답 풀이**\n- 1번: ROLLUP은 계층적 소계를 생성한다.\n- 2번: GROUPING SETS는 지정된 그룹 집합만 생성한다.\n- 3번: CUBE는 모든 조합을 생성한다.\n- 4번: GROUPING은 소계 행 여부를 판별하는 함수이다.\n\n**보충 개념**\nCUBE(A, B)는 (A,B), (A), (B), () 그룹을 생성한다. ROLLUP(A,B)는 (A,B), (A), ()만 생성한다."
  },
  {
    "id": 3700,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 조건을 적용했을 때 조회되는 COL 값으로 가장 적절한 것은?\n\n**<데이터>**\n| COL |\n|---:|\n| NULL |\n| 1 |\n| 2 |\n| 3 |\n| 4 |\n\n```sql\nSELECT COL\nFROM T\nWHERE NOT (COL <= 2);\n```",
    "choices": [
      "NULL, 3, 4",
      "1, 2",
      "3, 4",
      "NULL, 1, 2"
    ],
    "answer": 2,
    "explanation": "정답: 3. COL이 3 또는 4이면 COL <= 2가 FALSE이고 NOT(FALSE)는 TRUE가 된다. NULL은 비교 결과가 UNKNOWN이므로 NOT을 적용해도 UNKNOWN이며 조회되지 않는다.\n\n**오답 풀이**\n- 1번: NULL은 조건 결과가 TRUE가 아니므로 포함되지 않는다.\n- 2번: 1, 2는 COL <= 2가 TRUE이고 NOT 처리 후 FALSE가 된다.\n- 3번: 3, 4만 조회된다.\n- 4번: NULL, 1, 2는 조건을 만족하지 않는다.\n\n**보충 개념**\nSQL WHERE 절은 TRUE인 행만 반환한다. FALSE뿐 아니라 UNKNOWN도 결과에서 제외된다."
  },
  {
    "id": 3701,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 중 조인 결과가 다른 것으로 가장 적절한 것은?",
    "choices": [
      "INNER JOIN",
      "동등 조인",
      "JOIN ... ON",
      "CROSS JOIN"
    ],
    "answer": 3,
    "explanation": "정답: 4. CROSS JOIN은 조인 조건 없이 두 테이블의 모든 조합을 생성하므로 일반적인 동등 조인이나 INNER JOIN과 결과가 다르다.\n\n**오답 풀이**\n- 1번: INNER JOIN은 조건을 만족하는 행만 결합한다.\n- 2번: 동등 조인은 같은 값을 기준으로 조인하는 방식이다.\n- 3번: JOIN ... ON은 명시적 조인 조건을 작성하는 방식이다.\n- 4번: CROSS JOIN은 카테시안 곱을 생성한다.\n\n**보충 개념**\nCROSS JOIN은 두 테이블의 행 수를 곱한 만큼 결과가 생성된다. 조인 조건 누락으로 의도치 않은 카테시안 곱이 발생할 수 있다."
  },
  {
    "id": 3702,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "제품, 생산제품, 생산라인 엔터티가 있을 때 제품명과 생산라인명을 올바르게 조회하기 위한 조인 경로로 가장 적절한 것은?",
    "choices": [
      "제품 → 생산제품 → 생산라인",
      "제품 → 생산라인",
      "생산제품 → 제품을 거치지 않고 생산라인만 조회",
      "제품과 생산라인을 조건 없이 CROSS JOIN"
    ],
    "answer": 0,
    "explanation": "정답: 1. 제품과 생산라인의 관계는 생산제품 엔터티를 통해 표현되므로 제품 → 생산제품 → 생산라인 경로로 조인해야 한다.\n\n**오답 풀이**\n- 1번: 관계 엔터티를 거치는 올바른 조인 경로이다.\n- 2번: 제품과 생산라인을 직접 조인하면 관계 조건이 누락될 수 있다.\n- 3번: 제품 정보를 함께 조회할 수 없다.\n- 4번: CROSS JOIN은 모든 조합을 만들어 의미 없는 결과가 발생할 수 있다.\n\n**보충 개념**\nM:N 관계를 해소한 모델에서는 교차 엔터티가 실제 관계 정보를 가진다. 조회 시에도 관계 엔터티를 기준으로 조인해야 정확한 결과를 얻을 수 있다."
  },
  {
    "id": 3703,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 중 NULL 관련 함수의 설명으로 적절하지 않은 것은?",
    "choices": [
      "NVL(expr1, expr2)는 expr1이 NULL이면 expr2를 반환한다.",
      "NVL2(expr1, expr2, expr3)는 expr1이 NULL이 아니면 expr2, NULL이면 expr3을 반환한다.",
      "NULLIF(expr1, expr2)는 두 값이 같으면 NULL을 반환한다.",
      "COALESCE(expr1, expr2, ...)는 모든 인자를 더한 합계를 반환한다."
    ],
    "answer": 3,
    "explanation": "정답: 4. COALESCE는 모든 인자를 더하는 함수가 아니라 첫 번째 NULL이 아닌 값을 반환하는 함수이다.\n\n**오답 풀이**\n- 1번: NVL의 설명이다.\n- 2번: NVL2의 설명이다.\n- 3번: NULLIF의 설명이다.\n- 4번: COALESCE에 대한 설명이 틀렸다.\n\n**보충 개념**\nNULL 처리 함수는 시험에서 자주 계산 문제로 출제된다. NVL, NVL2, NULLIF, COALESCE의 반환 규칙을 구분해야 한다."
  },
  {
    "id": 3704,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "NULL이 포함된 컬럼에 대해 결과가 달라질 수 있는 집계식 조합으로 가장 적절한 것은?",
    "choices": [
      "COUNT(*)와 COUNT(1)",
      "MAX(COL)와 MAX(COL)",
      "SUM(COL)와 SUM(COL)",
      "AVG(COL)와 AVG(NVL(COL, 0))"
    ],
    "answer": 3,
    "explanation": "정답: 4. AVG(COL)은 NULL을 제외하지만 AVG(NVL(COL,0))은 NULL을 0으로 바꿔 평균에 포함하므로 결과가 달라질 수 있다.\n\n**오답 풀이**\n- 1번: 둘 다 전체 행 수를 세는 경우가 일반적이다.\n- 2번: 같은 표현식이다.\n- 3번: 같은 표현식이다.\n- 4번: NULL 처리 방식이 달라 평균 결과가 달라질 수 있다.\n\n**보충 개념**\nAVG는 NULL을 제외하고 평균을 계산한다. NULL을 0으로 대체하면 분자와 분모 모두 영향을 받을 수 있다."
  },
  {
    "id": 3705,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "SELECT 결과에서 행의 중복을 제거하는 키워드로 알맞은 것은?",
    "choices": [
      "UNIQUE",
      "DISTINCT",
      "ONLY",
      "EXCEPT"
    ],
    "answer": 1,
    "explanation": "정답: 2. DISTINCT는 SELECT 결과에서 중복 행을 제거할 때 사용한다.\n\n**오답 풀이**\n- 1번: UNIQUE는 제약조건이나 인덱스에서 주로 사용된다.\n- 2번: SELECT 중복 제거 키워드이다.\n- 3번: ONLY는 행 제한 구문에서 사용될 수 있다.\n- 4번: EXCEPT는 차집합 연산이다.\n\n**보충 개념**\nDISTINCT는 SELECT 절의 전체 결과 행 기준으로 중복을 제거한다. 여러 컬럼을 함께 조회하면 컬럼 조합 전체가 중복 판단 기준이 된다."
  },
  {
    "id": 3706,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "MERGE 문에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "MERGE는 조회 전용 명령어이다.",
      "MERGE는 조건에 따라 UPDATE와 INSERT를 수행할 수 있다.",
      "MERGE는 COMMIT과 ROLLBACK만 수행한다.",
      "MERGE는 테이블 구조만 변경한다."
    ],
    "answer": 1,
    "explanation": "정답: 2. MERGE는 대상 테이블과 원본 데이터를 비교하여 매칭되면 UPDATE, 매칭되지 않으면 INSERT 등을 수행할 수 있다.\n\n**오답 풀이**\n- 1번: MERGE는 조회 전용이 아니라 데이터 변경 명령이다.\n- 2번: MERGE의 핵심 기능이다.\n- 3번: COMMIT, ROLLBACK은 TCL이다.\n- 4번: 테이블 구조 변경은 ALTER 같은 DDL의 역할이다.\n\n**보충 개념**\nMERGE는 UPSERT 처리에 자주 사용된다. `USING`, `ON`, `WHEN MATCHED`, `WHEN NOT MATCHED` 절의 역할을 구분해야 한다."
  },
  {
    "id": 3707,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 날짜 형식 문자열로 가장 적절한 것은?\n\n**<조건>**\n연월일시분초를 `20250101143059`와 같이 출력하려고 한다.",
    "choices": [
      "YYYYMMDDHH24MISS",
      "YYYY-MM-DD HH24:MI:SS",
      "YY/MM/DD HH:MI",
      "YYYYDDMMHHMISS"
    ],
    "answer": 0,
    "explanation": "정답: 1. `YYYYMMDDHH24MISS`는 연도 4자리, 월 2자리, 일 2자리, 24시간제 시, 분, 초를 공백 없이 표현한다.\n\n**오답 풀이**\n- 1번: 조건의 출력 형식에 맞다.\n- 2번: 구분자와 공백이 포함된다.\n- 3번: 연도가 2자리이고 초가 없다.\n- 4번: 월과 일이 뒤바뀌어 있다.\n\n**보충 개념**\nOracle 날짜 포맷에서 YYYY는 4자리 연도, MM은 월, DD는 일, HH24는 24시간제 시, MI는 분, SS는 초를 의미한다."
  },
  {
    "id": 3708,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "계층형 쿼리에서 하위 방향으로 사원 정보를 조회하려고 한다. PRIOR가 들어갈 위치로 가장 적절한 것은?\n\n```sql\nSELECT EMPNO, MGR\nFROM EMP\nSTART WITH MGR IS NULL\nCONNECT BY (ㄷ) EMPNO = (ㄹ) MGR;\n```",
    "choices": [
      "EMPNO 앞",
      "MGR 앞",
      "START WITH 앞",
      "SELECT 앞"
    ],
    "answer": 0,
    "explanation": "정답: 1. 부모 행의 EMPNO가 자식 행의 MGR과 같아야 하므로 `CONNECT BY PRIOR EMPNO = MGR` 형태가 적절하다.\n\n**오답 풀이**\n- 1번: EMPNO 앞에 PRIOR가 들어가면 부모에서 자식 방향 탐색이 된다.\n- 2번: MGR 앞에 PRIOR가 들어가면 자식에서 부모 방향 탐색이 될 수 있다.\n- 3번: START WITH 앞에 PRIOR를 두지 않는다.\n- 4번: SELECT 앞에 PRIOR를 두지 않는다.\n\n**보충 개념**\n계층형 질의에서 PRIOR는 이전 단계의 행을 의미한다. PRIOR가 붙는 컬럼에 따라 탐색 방향이 달라진다."
  },
  {
    "id": 3709,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "부서 테이블의 1행을 삭제할 때, 이를 참조하는 사원 테이블의 행도 함께 삭제되도록 하는 외래키 표현으로 가장 적절한 것은?",
    "choices": [
      "FOREIGN KEY (부서ID) REFERENCES 부서(부서ID) ON DELETE RESTRICT",
      "부서 테이블이 사원 테이블을 REFERENCES 하고 ON DELETE CASCADE를 지정한다.",
      "사원 테이블의 부서ID가 부서 테이블의 부서ID를 REFERENCES 하고 ON DELETE CASCADE를 지정한다.",
      "FOREIGN KEY (부서ID) REFERENCES 부서(부서ID) ON DELETE SET NULL"
    ],
    "answer": 2,
    "explanation": "정답: 3. 자식 테이블인 사원 테이블의 외래키가 부모 테이블인 부서 테이블을 참조하고 ON DELETE CASCADE를 지정해야 부모 삭제 시 자식 행도 삭제된다.\n\n**오답 풀이**\n- 1번: RESTRICT는 자식 행이 있으면 부모 삭제를 제한한다.\n- 2번: 참조 방향이 반대이다.\n- 3번: 자식이 부모를 참조하고 CASCADE를 지정하는 올바른 방식이다.\n- 4번: SET NULL은 자식 행을 삭제하지 않고 외래키 값을 NULL로 만든다.\n\n**보충 개념**\n외래키는 자식 테이블에 정의하며 부모 테이블의 기본키 또는 고유키를 참조한다. ON DELETE CASCADE는 부모 삭제 시 자식 행 삭제를 전파한다."
  },
  {
    "id": 3710,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "아래 보기 중 올바르지 않은 것은?",
    "choices": [
      "기본키는 한 테이블에 두 개 이상 존재할 수 있다.",
      "기본키는 각 행을 유일하게 식별해야 한다.",
      "기본키는 NULL 값을 가질 수 없다.",
      "기본키는 하나 이상의 컬럼으로 구성될 수 있다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 기본키 제약조건은 한 테이블에 하나만 존재할 수 있다.\n\n**오답 풀이**\n- 1번: 기본키는 테이블당 하나만 지정할 수 있으므로 틀린 설명이다.\n- 2번: 기본키는 각 행을 유일하게 식별해야 한다.\n- 3번: 기본키는 NULL을 허용하지 않는다.\n- 4번: 여러 컬럼으로 구성된 복합 기본키는 가능하다.\n\n**보충 개념**\n기본키는 테이블의 대표 식별자이다. 기본키 제약조건은 하나지만, 그 안에 여러 컬럼을 포함하는 복합키를 만들 수 있다."
  },
  {
    "id": 3711,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "아래 설명에서 설명하는 스키마 구조로 가장 적절한 것은?\n\n**<설명>**\n모든 사용자 관점을 통합한 조직 전체 관점의 통합적 표현이다.",
    "choices": [
      "외부 스키마",
      "개념 스키마",
      "내부 스키마",
      "논리 스키마"
    ],
    "answer": 1,
    "explanation": "정답: 2. 개념 스키마는 모든 사용자 관점을 통합한 조직 전체 관점의 데이터베이스 논리 구조를 표현한다.\n\n**오답 풀이**\n- 1번: 외부 스키마는 개별 사용자나 응용 프로그램 관점의 스키마이다.\n- 2번: 조직 전체 관점의 통합 표현이므로 정답이다.\n- 3번: 내부 스키마는 물리적 저장 구조를 표현한다.\n- 4번: 논리 스키마는 일반 용어로 쓰일 수 있으나 3단계 스키마 구조의 표준 명칭은 개념 스키마이다.\n\n**보충 개념**\n3단계 스키마는 외부 스키마, 개념 스키마, 내부 스키마로 구분된다. 개념 스키마는 데이터베이스 전체의 논리적 구조와 제약조건을 표현한다."
  },
  {
    "id": 3712,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "다음 중 엔터티 생성 시점에 따른 분류가 아닌 것은?",
    "choices": [
      "기본 엔터티",
      "중심 엔터티",
      "사건 엔터티",
      "행위 엔터티"
    ],
    "answer": 2,
    "explanation": "정답: 3. 엔터티의 생성 시점에 따른 일반적인 분류는 기본 엔터티, 중심 엔터티, 행위 엔터티이다.\n\n**오답 풀이**\n- 1번: 기본 엔터티는 업무에 원래 존재하는 독립적인 엔터티이다.\n- 2번: 중심 엔터티는 기본 엔터티로부터 발생하고 업무의 중심 역할을 한다.\n- 3번: 사건 엔터티는 표준적인 생성 시점 분류 명칭으로 보기 어렵다.\n- 4번: 행위 엔터티는 두 개 이상의 엔터티로부터 발생하는 엔터티이다.\n\n**보충 개념**\n엔터티는 발생 시점에 따라 기본, 중심, 행위 엔터티로 구분할 수 있다. 행위 엔터티는 주문, 계약, 이력처럼 업무 활동에 의해 생성되는 경우가 많다."
  },
  {
    "id": 3713,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "제1정규형을 만족시키기 위한 조치로 가장 적절한 것은?",
    "choices": [
      "직원 속성에 두 개의 값이 들어 있으므로 직원1, 직원2 컬럼으로 나누어 저장한다.",
      "하나의 속성에 여러 직원 값이 들어가지 않도록 직원 정보를 별도 행 또는 별도 테이블로 분리한다.",
      "모든 테이블의 기본키를 제거한다.",
      "계산 가능한 속성을 하나의 테이블에 모두 중복 저장한다."
    ],
    "answer": 1,
    "explanation": "정답: 2. 제1정규형은 속성 값의 원자성을 요구하므로 하나의 컬럼에 여러 값을 넣지 않도록 분리해야 한다.\n\n**오답 풀이**\n- 1번: 직원1, 직원2처럼 반복 컬럼을 만드는 것은 정규화 관점에서 바람직하지 않다.\n- 2번: 다중값 속성을 별도 행 또는 별도 테이블로 분리하여 원자성을 만족시키는 방법이다.\n- 3번: 기본키 제거는 정규화와 무관하며 데이터 식별성을 해친다.\n- 4번: 계산 속성 중복 저장은 정규화가 아니라 반정규화에 가깝다.\n\n**보충 개념**\n제1정규형은 컬럼 하나에 하나의 값만 저장되도록 하는 단계이다. 반복 속성이나 다중값 속성은 별도 엔터티나 행으로 분리한다."
  },
  {
    "id": 3714,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "다른 속성으로부터 계산이나 변형이 되어 생성되는 속성은 무엇인가?",
    "choices": [
      "기본 속성",
      "설계 속성",
      "일반 속성",
      "파생 속성"
    ],
    "answer": 3,
    "explanation": "정답: 4. 파생 속성은 다른 속성으로부터 계산되거나 변형되어 생성되는 속성이다.\n\n**오답 풀이**\n- 1번: 기본 속성은 업무로부터 직접 도출되는 원래 속성이다.\n- 2번: 설계 속성은 업무상 원래 존재하지 않지만 설계를 위해 추가한 속성이다.\n- 3번: 일반 속성은 표준 분류 명칭으로 보기 어렵다.\n- 4번: 계산이나 변형으로 생성되는 속성이므로 정답이다.\n\n**보충 개념**\n예를 들어 생년월일로부터 계산되는 나이, 주문금액과 할인율로부터 계산되는 최종금액은 파생 속성에 해당한다."
  },
  {
    "id": 3715,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "주식별자에 관한 설명 중 틀린 것은?",
    "choices": [
      "주식별자는 NULL이어도 된다.",
      "주식별자는 유일해야 한다.",
      "주식별자는 유일성을 만족하는 선에서 최소의 속성으로 구성되어야 한다.",
      "주식별자는 자주 변하지 않아야 한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 주식별자는 각 인스턴스를 식별해야 하므로 NULL이 될 수 없다.\n\n**오답 풀이**\n- 1번: 주식별자는 NULL이 허용되지 않으므로 틀린 설명이다.\n- 2번: 주식별자는 유일성을 만족해야 한다.\n- 3번: 주식별자는 최소성을 만족해야 한다.\n- 4번: 주식별자는 안정성을 가져야 하므로 자주 변하지 않아야 한다.\n\n**보충 개념**\n주식별자의 주요 특징은 유일성, 최소성, 불변성, 존재성이다. 존재성은 주식별자 값이 반드시 존재해야 함을 의미한다."
  },
  {
    "id": 3716,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "ERD",
    "question": "다음 ERD에 대한 설명으로 가장 적절한 것은?\n\n**<ERD>**\n고객(고객ID, 고객명) 1 : N 계약(계약ID, 고객ID, 납부자ID) N : 1 납부자(납부자ID, 납부자명)\n\n계약은 고객과 납부자 사이에서 발생하는 업무 정보를 관리한다.",
    "choices": [
      "계약은 고객과 납부자 사이에서 발생하는 행위 엔터티로 볼 수 있다.",
      "계약은 고객과 납부 사이의 단순 관계 테이블일 뿐 독립적인 업무 의미가 없다.",
      "한 명의 고객이 여러 개의 계약에 가입할 경우 납부자로부터 반드시 식별자를 상속받아야 한다.",
      "고객이 계약하고 납부하면 고객 테이블과 납부자 테이블은 항상 합칠 수 있다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 계약은 고객과 납부자 사이에서 발생하는 업무 행위를 표현하는 엔터티로 볼 수 있다.\n\n**오답 풀이**\n- 1번: 관계에서 발생하는 업무 행위이므로 적절하다.\n- 2번: 계약은 단순 관계 테이블이라기보다 업무적으로 의미 있는 행위 엔터티이다.\n- 3번: 여러 계약을 가진다고 해서 납부자로부터 반드시 식별자를 상속받아야 하는 것은 아니다.\n- 4번: 고객과 납부자는 역할과 의미가 다를 수 있으므로 항상 합칠 수 없다.\n\n**보충 개념**\n행위 엔터티는 두 개 이상의 엔터티 간 관계에서 발생하는 업무 사건을 관리하기 위해 도출된다. 주문, 계약, 수강, 납부 이력 등이 대표적이다."
  },
  {
    "id": 3717,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "서브쿼리",
    "question": "다음 SQL의 실행 결과로 가장 적절한 것은?\n\n**<조건>**\n동일한 연락처를 가진 회원이 2명 존재하며, 서브쿼리는 회원ID 1002, 1003 두 행을 반환한다.\n\n```sql\nSELECT *\nFROM 회원\nWHERE 회원ID = (\n    SELECT 회원ID\n    FROM 회원\n    WHERE 연락처 = '010-1111-2222'\n);\n```",
    "choices": [
      "회원ID 1002만 조회된다.",
      "회원ID 1003만 조회된다.",
      "회원ID 1002와 1003이 모두 조회된다.",
      "단일 행 서브쿼리가 여러 행을 반환하여 오류가 발생한다."
    ],
    "answer": 3,
    "explanation": "정답: 4. = 연산자는 단일 행 서브쿼리를 기대하므로 서브쿼리가 2개 이상의 행을 반환하면 오류가 발생한다.\n\n**오답 풀이**\n- 1번: 여러 행 중 임의로 하나만 선택하지 않는다.\n- 2번: 여러 행 중 임의로 하나만 선택하지 않는다.\n- 3번: 여러 값을 비교하려면 = 대신 IN 등을 사용해야 한다.\n- 4번: 단일 행 서브쿼리 반환 행 수 초과 오류가 발생한다.\n\n**보충 개념**\n단일 행 비교 연산자에는 서브쿼리 결과가 반드시 1행이어야 한다. 여러 행과 비교하려면 IN, ANY, ALL 같은 다중 행 연산자를 사용한다."
  },
  {
    "id": 3718,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "식별자에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "내부 식별자는 엔터티 내부에서 스스로 생성된 식별자이다.",
      "외부 식별자는 다른 엔터티와의 관계를 통해 받아온 식별자이다.",
      "외래키(FK)는 항상 내부 식별자이다.",
      "인조 식별자는 업무 식별자가 복잡하거나 부적절할 때 인위적으로 만든 식별자이다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 외래키는 다른 엔터티로부터 전달받은 식별자이므로 일반적으로 외부 식별자에 해당한다.\n\n**오답 풀이**\n- 1번: 내부 식별자에 대한 올바른 설명이다.\n- 2번: 외부 식별자에 대한 올바른 설명이다.\n- 3번: FK를 내부 식별자라고 한 설명은 틀리다.\n- 4번: 인조 식별자는 설계상 인위적으로 부여한 식별자이다.\n\n**보충 개념**\n식별자는 대표성, 생성 여부, 속성 수, 대체 여부 등에 따라 여러 기준으로 분류된다. 외래키는 관계를 통해 전달받은 속성이므로 외부 식별자로 볼 수 있다."
  },
  {
    "id": 3719,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "다음 ERD에 대한 설명으로 적절하지 않은 것은?\n\n**<ERD>**\n학생(학생ID, 학생명) 1 : N 수강(학생ID, 과목ID) N : 1 과목(과목ID, 과목명)\n\n수강은 학생과 과목 사이의 M:N 관계를 해소하는 엔터티이다.",
    "choices": [
      "학생은 여러 수강 내역을 가질 수 있다.",
      "과목은 여러 수강 내역에 포함될 수 있다.",
      "수강은 학생과 과목의 관계에서 발생하는 행위 엔터티로 볼 수 있다.",
      "과목 인스턴스를 추가하려면 반드시 학생 인스턴스가 먼저 필요하다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 과목은 독립적으로 존재할 수 있는 엔터티이므로 과목 인스턴스를 추가하기 위해 학생 인스턴스가 반드시 필요한 것은 아니다.\n\n**오답 풀이**\n- 1번: 학생 1명은 여러 수강 내역을 가질 수 있다.\n- 2번: 과목 1개는 여러 학생의 수강 내역에 포함될 수 있다.\n- 3번: 수강은 학생과 과목 사이에서 발생하는 행위 엔터티이다.\n- 4번: 과목 자체는 학생 없이도 등록될 수 있으므로 부적절하다.\n\n**보충 개념**\nM:N 관계는 보통 교차 엔터티 또는 행위 엔터티로 해소한다. 학생과 과목 사이의 수강 엔터티가 대표적인 예이다."
  },
  {
    "id": 3720,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "상품과 주문의 관계에 대한 설명 중 틀린 것은?",
    "choices": [
      "상품에는 주문이 무조건 포함된다.",
      "주문에는 주문 대상 상품이 포함될 수 있다.",
      "하나의 상품은 여러 주문에 포함될 수 있다.",
      "하나의 주문은 여러 상품을 포함할 수 있다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 상품은 주문이 없어도 존재할 수 있으므로 상품에 주문이 무조건 포함된다는 설명은 틀리다.\n\n**오답 풀이**\n- 1번: 아직 주문되지 않은 상품도 존재할 수 있으므로 틀리다.\n- 2번: 주문은 일반적으로 주문 대상 상품을 가진다.\n- 3번: 하나의 상품은 여러 주문에 반복적으로 포함될 수 있다.\n- 4번: 하나의 주문은 여러 상품을 포함할 수 있다.\n\n**보충 개념**\n상품과 주문은 대개 M:N 관계이며 주문상세 같은 교차 엔터티로 해소한다. 상품은 주문과 독립적으로 먼저 등록될 수 있다."
  },
  {
    "id": 3721,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 SQL의 ROW LIMITING 절에 대한 설명 중 옳은 것을 모두 고른 것은?\n\n```sql\nSELECT *\nFROM TAB1\nORDER BY NO DESC\nOFFSET 3 ROWS\nFETCH FIRST 5 ROWS ONLY;\n```\n\n**<보기>**\n가. NO를 내림차순으로 정렬한 뒤 일부 행을 반환한다.\n나. 3번째 ROW만 제외한다.\n다. 5개 이상 행이 나올 수 있다.",
    "choices": [
      "가",
      "나",
      "가, 다",
      "가, 나, 다"
    ],
    "answer": 0,
    "explanation": "정답: 1. ORDER BY NO DESC로 정렬한 뒤 OFFSET 3 ROWS로 앞의 3개 행을 건너뛰고 FETCH FIRST 5 ROWS ONLY로 최대 5개 행만 반환한다.\n\n**오답 풀이**\n- 1번: 가만 옳다.\n- 2번: OFFSET 3 ROWS는 3번째 ROW 하나만 제외하는 의미가 아니라 앞의 3개 행을 건너뛰는 의미이다.\n- 3번: 다는 틀리다. ONLY이므로 5개를 초과하여 반환하지 않는다.\n- 4번: 나와 다가 틀리므로 부적절하다.\n\n**보충 개념**\nOFFSET은 건너뛸 행 수를 지정하고 FETCH FIRST n ROWS ONLY는 반환할 최대 행 수를 지정한다. WITH TIES가 아닌 ONLY는 동순위를 추가 포함하지 않는다."
  },
  {
    "id": 3722,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "SUBSTR 함수 실행 결과 중 다른 결과가 나오는 것을 고르시오.",
    "choices": [
      "SUBSTR('abcdefgh', 7)",
      "SUBSTR('abcdefgh', -2)",
      "SUBSTR('abcdefgh', 8, -2)",
      "SUBSTR('abcdefgh', INSTR('abcdefgh', 'g'), 2)"
    ],
    "answer": 2,
    "explanation": "정답: 3. 1번, 2번, 4번은 모두 'gh'를 반환하지만 3번은 길이 인수에 음수가 들어가므로 NULL을 반환한다.\n\n**오답 풀이**\n- 1번: 7번째 문자부터 끝까지 반환하므로 'gh'이다.\n- 2번: 뒤에서 두 번째 문자부터 끝까지 반환하므로 'gh'이다.\n- 3번: Oracle에서 SUBSTR의 길이가 음수이면 NULL이 반환된다.\n- 4번: INSTR('abcdefgh', 'g')는 7이므로 SUBSTR('abcdefgh', 7, 2)는 'gh'이다.\n\n**보충 개념**\nSUBSTR(문자열, 시작위치, 길이)에서 시작위치가 음수이면 뒤에서부터 위치를 센다. 길이 인수가 생략되면 시작위치부터 끝까지 반환한다."
  },
  {
    "id": 3723,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "TCL",
    "question": "COMMIT에 대한 설명 중 틀린 것은?",
    "choices": [
      "COMMIT은 트랜잭션의 변경 내용을 영구적으로 반영한다.",
      "COMMIT 전에도 같은 트랜잭션에서는 변경된 데이터를 SELECT로 확인할 수 있다.",
      "COMMIT 전에 외부 사용자가 변경된 데이터를 항상 확인할 수 있다.",
      "COMMIT 전에는 ROLLBACK을 통해 변경 내용을 취소할 수 있다."
    ],
    "answer": 2,
    "explanation": "정답: 3. COMMIT 전 변경 내용은 일반적으로 다른 트랜잭션에서 확인할 수 없다.\n\n**오답 풀이**\n- 1번: COMMIT의 기본 역할이다.\n- 2번: 자기 트랜잭션에서는 변경한 데이터를 조회할 수 있다.\n- 3번: 외부 사용자가 항상 확인할 수 있다는 설명은 틀리다.\n- 4번: COMMIT 전에는 ROLLBACK으로 변경을 취소할 수 있다.\n\n**보충 개념**\n트랜잭션 격리성에 따라 커밋되지 않은 변경은 다른 트랜잭션에 보이지 않는 것이 일반적이다. COMMIT 이후 변경 내용이 확정된다."
  },
  {
    "id": 3724,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "NULL에 대한 설명으로 옳은 것은?",
    "choices": [
      "NULL은 0과 같은 의미다.",
      "NULL은 대부분의 집계 함수에서 제외된다.",
      "NULL = NULL은 TRUE이다.",
      "바커 표기법에서는 NULL 허용 여부를 알 수 없으나, IE 표기법에서는 NULL 허용 여부를 알 수 있다."
    ],
    "answer": 1,
    "explanation": "정답: 2. SUM, AVG, COUNT(expr) 등 대부분의 집계 함수는 NULL을 제외하고 계산한다.\n\n**오답 풀이**\n- 1번: NULL은 0이 아니라 알 수 없거나 존재하지 않는 값을 의미한다.\n- 2번: 대부분의 집계 함수는 NULL을 제외한다.\n- 3번: NULL = NULL의 결과는 TRUE가 아니라 UNKNOWN이다.\n- 4번: 표기법 설명이 일반적인 NULL 연산의 핵심 설명으로 적절하지 않다.\n\n**보충 개념**\nNULL 비교에는 = 대신 IS NULL 또는 IS NOT NULL을 사용해야 한다. COUNT(*)는 NULL 포함 여부와 관계없이 행 수를 센다."
  },
  {
    "id": 3725,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "다음 중 SQL 명령어 분류로 적절하지 않은 것은?",
    "choices": [
      "DDL : TRUNCATE",
      "DML : DROP",
      "DCL : REVOKE",
      "TCL : COMMIT"
    ],
    "answer": 1,
    "explanation": "정답: 2. DROP은 객체를 삭제하는 DDL이지 DML이 아니다.\n\n**오답 풀이**\n- 1번: TRUNCATE는 DDL로 분류된다.\n- 2번: DROP은 DML이 아니라 DDL이다.\n- 3번: REVOKE는 권한 회수 명령으로 DCL이다.\n- 4번: COMMIT은 트랜잭션 제어 명령으로 TCL이다.\n\n**보충 개념**\nDDL은 CREATE, ALTER, DROP, TRUNCATE 등을 포함한다. DML은 SELECT, INSERT, UPDATE, DELETE 등 데이터 조작 명령이다."
  },
  {
    "id": 3726,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "집합 연산자인 INTERSECT에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "여러 개의 SQL문 결과에 대한 합집합으로 중복된 행은 하나의 행으로 출력한다.",
      "여러 개의 SQL문 결과에 대한 합집합으로 중복된 행도 그대로 결과로 출력한다.",
      "여러 개의 SQL문 결과에 대한 교집합으로 중복된 행은 하나의 행으로 출력한다.",
      "SQL문 결과 간의 차집합으로 중복된 행은 하나의 행으로 출력한다."
    ],
    "answer": 2,
    "explanation": "정답: 3. INTERSECT는 두 SQL 결과에 공통으로 존재하는 행을 반환하며 중복은 제거된다.\n\n**오답 풀이**\n- 1번: UNION에 대한 설명이다.\n- 2번: UNION ALL에 대한 설명이다.\n- 3번: INTERSECT에 대한 올바른 설명이다.\n- 4번: MINUS 또는 EXCEPT에 대한 설명이다.\n\n**보충 개념**\n집합 연산자는 컬럼 수와 데이터 타입이 호환되어야 한다. INTERSECT는 교집합, UNION은 합집합, MINUS는 차집합이다."
  },
  {
    "id": 3727,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "서브쿼리",
    "question": "다음 중 서브쿼리의 결과로 여러 개의 컬럼이 반환되고, 이 결과가 메인 쿼리의 조건절에서 동시에 비교되는 서브쿼리의 유형은 무엇인가?",
    "choices": [
      "단일행 서브쿼리",
      "다중행 서브쿼리",
      "단일컬럼 서브쿼리",
      "다중컬럼 서브쿼리"
    ],
    "answer": 3,
    "explanation": "정답: 4. 여러 컬럼을 반환하여 메인 쿼리의 여러 컬럼과 동시에 비교하는 서브쿼리는 다중컬럼 서브쿼리이다.\n\n**오답 풀이**\n- 1번: 단일행 서브쿼리는 반환 행 수 기준 분류이다.\n- 2번: 다중행 서브쿼리는 여러 행을 반환하는 서브쿼리이다.\n- 3번: 단일컬럼 서브쿼리는 한 컬럼만 반환한다.\n- 4번: 여러 컬럼을 동시에 비교하므로 정답이다.\n\n**보충 개념**\n다중컬럼 서브쿼리는 `(col1, col2) IN (SELECT col1, col2 FROM ...)` 같은 형태로 사용된다."
  },
  {
    "id": 3728,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 두 테이블을 이용한 조건식 중 결과가 다른 것은?\n\n**<데이터>**\n| TAB1.COL1 | TAB2.COL1 |\n|---|---|\n| A | A |\n| B | B |\n| C | NULL |\n\n**<조건>**\n두 컬럼을 비교하여 같은 값을 찾거나 다른 값을 찾는 조건식이다.",
    "choices": [
      "WHERE T1.COL1 <> T2.COL1",
      "WHERE NOT (T1.COL1 = T2.COL1)",
      "WHERE T1.COL1 != T2.COL1",
      "WHERE T1.COL1 = T2.COL1"
    ],
    "answer": 3,
    "explanation": "정답: 4. 1, 2, 3번은 서로 다름을 비교하는 조건이고, 4번은 같음을 비교하는 조건이므로 결과가 다르다.\n\n**오답 풀이**\n- 1번: 두 값이 다른 경우를 찾는 조건이다.\n- 2번: 같지 않음을 표현하는 조건이다.\n- 3번: <>와 유사하게 같지 않음을 비교한다.\n- 4번: 같은 값을 찾으므로 나머지와 결과가 다르다.\n\n**보충 개념**\nSQL에서 NULL이 비교에 포함되면 결과는 UNKNOWN이 될 수 있다. 같음과 다름 비교에서는 NULL 처리 여부에 주의해야 한다."
  },
  {
    "id": 3729,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "정규화",
    "question": "다음 정규표현식 메타문자 설명 중 적절한 것은?",
    "choices": [
      "? : 대상이 0회 또는 1회 반복되는지 확인한다.",
      "`*` : 대상이 1회 이상 반복되는지 확인한다.",
      "`+` : 대상이 0회 또는 그 이상 반복되는지 확인한다.",
      "{m,} : 대상이 0회 또는 그 이상 반복되는지 확인한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. ?는 앞의 대상이 0회 또는 1회 나타나는 패턴을 의미한다.\n\n**오답 풀이**\n- 1번: ?에 대한 올바른 설명이다.\n- 2번: *는 0회 이상 반복을 의미한다.\n- 3번: +는 1회 이상 반복을 의미한다.\n- 4번: {m,}는 m회 이상 반복을 의미한다.\n\n**보충 개념**\n정규표현식에서 반복 수량자는 매우 자주 출제된다. `*`는 0회 이상, `+`는 1회 이상, `?`는 0회 또는 1회, `{m,}`는 m회 이상이다."
  },
  {
    "id": 3730,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "다음 윈도우 함수의 결과로 가장 적절한 것은?\n\n**<데이터>**\n| ID | VAL |\n|---:|---:|\n| 1 | 1 |\n| 2 | 3 |\n| 3 | 5 |\n| 4 | 5 |\n| 5 | 5 |\n\n```sql\nSELECT ID, VAL,\n       COUNT(*) OVER(\n           ORDER BY VAL, ID\n           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n       ) AS CNT\nFROM T;\n```\n\nID가 3이고 VAL이 5인 행의 CNT 값은?",
    "choices": [
      "1",
      "2",
      "3",
      "5"
    ],
    "answer": 2,
    "explanation": "정답: 3. ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW는 첫 행부터 현재 물리적 행까지를 프레임으로 잡는다. ORDER BY VAL, ID 기준으로 정렬하면 ID 3 행은 세 번째 행이므로 프레임에는 ID 1, ID 2, ID 3 총 3개 행이 포함된다.\n\n**오답 풀이**\n- 1번: 현재 행만 세는 프레임이 아니다.\n- 2번: 현재 행 이전의 두 행만 고려한 값이다.\n- 3번: 첫 행부터 현재 행까지 3개이므로 정답이다.\n- 4번: RANGE 기준으로 동순위까지 포함하는 경우와 혼동한 값이다.\n\n**보충 개념**\nROWS는 물리적 행 단위로 프레임을 계산한다. 동점 정렬값이 있을 때 결과를 명확히 하려면 ORDER BY에 고유한 정렬 기준을 추가하는 것이 좋다."
  },
  {
    "id": 3731,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 중 최고 급여를 받는 직원을 구하는 조건으로 옳지 않은 것은?",
    "choices": [
      "SAL >= ANY (SELECT SAL FROM EMP)",
      "SAL >= ALL (SELECT SAL FROM EMP)",
      "SAL = (SELECT MAX(SAL) FROM EMP)",
      "SAL IN (SELECT MAX(SAL) FROM EMP)"
    ],
    "answer": 0,
    "explanation": "정답: 1. SAL >= ANY는 전체 급여 중 하나 이상보다 크거나 같으면 TRUE가 되므로 최고 급여자를 찾는 조건으로 부적절하다.\n\n**오답 풀이**\n- 1번: 최소 급여 이상인 대부분의 행이 만족할 수 있으므로 최고 급여 조건이 아니다.\n- 2번: 모든 급여보다 크거나 같아야 하므로 최고 급여 조건이다.\n- 3번: 최대 급여와 같은 직원을 찾으므로 적절하다.\n- 4번: MAX(SAL) 결과와 일치하는 직원을 찾으므로 적절하다.\n\n**보충 개념**\nANY는 서브쿼리 결과 중 하나라도 만족하면 TRUE이고, ALL은 모든 결과를 만족해야 TRUE이다. 최고값 비교에는 `>= ALL` 또는 `= MAX()`를 사용할 수 있다."
  },
  {
    "id": 3732,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "부서 ID가 100인 부서에서 시작하여 최상위부터 최하위 부서까지 출력하려고 한다. 계층형 질의의 CONNECT BY 조건으로 가장 적절한 것은?\n\n**<테이블>**\n부서(부서ID, 상위부서ID, 부서명)",
    "choices": [
      "START WITH 부서ID = 100 CONNECT BY PRIOR 상위부서ID = 부서ID",
      "START WITH 부서ID = 100 CONNECT BY PRIOR 부서ID = 상위부서ID",
      "CONNECT BY PRIOR 상위부서ID = 부서ID",
      "CONNECT BY 부서ID = PRIOR 상위부서ID"
    ],
    "answer": 1,
    "explanation": "정답: 2. 부모 행의 부서ID가 자식 행의 상위부서ID와 같아야 하위 부서 방향으로 탐색된다.\n\n**오답 풀이**\n- 1번: 부모의 상위부서ID와 자식의 부서ID를 비교하므로 상위 방향 탐색에 가깝다.\n- 2번: 하위 부서 방향 계층 탐색 조건이다.\n- 3번: 시작 조건이 없고 방향도 부적절하다.\n- 4번: 상위 방향 탐색 조건에 가깝다.\n\n**보충 개념**\n`CONNECT BY PRIOR 부모컬럼 = 자식컬럼` 형태는 부모에서 자식 방향으로 탐색한다. PRIOR가 어느 쪽에 붙는지가 방향을 결정한다."
  },
  {
    "id": 3733,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "부서별 평균 급여보다 높은 최대 급여를 가진 부서를 찾으려 한다. 모든 부서의 평균 급여보다 최대 급여가 큰 부서를 찾는 HAVING 절로 가장 적절한 것은?",
    "choices": [
      "HAVING MAX(SAL) > ANY (SELECT AVG(SAL) FROM EMP GROUP BY DEPTNO)",
      "HAVING AVG(SAL) > ANY (SELECT MAX(SAL) FROM EMP GROUP BY DEPTNO)",
      "HAVING MAX(SAL) > ALL (SELECT AVG(SAL) FROM EMP GROUP BY DEPTNO)",
      "HAVING AVG(SAL) > ALL (SELECT AVG(SAL) FROM EMP GROUP BY DEPTNO)"
    ],
    "answer": 2,
    "explanation": "정답: 3. 모든 부서의 평균 급여보다 큰 최대 급여를 찾으려면 MAX(SAL) > ALL(부서별 평균 급여)을 사용한다.\n\n**오답 풀이**\n- 1번: ANY는 하나의 평균 급여보다만 크면 되므로 조건이 약하다.\n- 2번: 평균 급여를 최대 급여와 비교하고 있어 의도와 다르다.\n- 3번: 모든 평균 급여보다 최대 급여가 큰 조건이다.\n- 4번: 평균 급여끼리 비교하는 조건으로 문제 의도와 다르다.\n\n**보충 개념**\nALL은 서브쿼리 결과 전체와 비교할 때 사용한다. 그룹 조건에는 WHERE가 아니라 HAVING을 사용해야 한다."
  },
  {
    "id": 3734,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "윈도우 함수 프레임에서 물리적인 행의 개수를 기준으로 범위를 지정하는 키워드는?",
    "choices": [
      "ROWS",
      "RANGE",
      "GROUPS",
      "PARTITION"
    ],
    "answer": 0,
    "explanation": "정답: 1. ROWS는 현재 행을 기준으로 물리적인 행 수를 기준으로 윈도우 프레임을 지정한다.\n\n**오답 풀이**\n- 1번: 물리적 행 기준 프레임을 지정한다.\n- 2번: RANGE는 정렬값의 논리적 범위를 기준으로 한다.\n- 3번: GROUPS는 동순위 그룹 단위의 프레임을 의미한다.\n- 4번: PARTITION은 분석 함수 적용 범위를 나누는 절이지 프레임 단위 키워드가 아니다.\n\n**보충 개념**\nROWS는 행 단위, RANGE는 값의 범위 단위로 프레임을 지정한다. 동점 값이 있을 때 ROWS와 RANGE의 결과가 달라질 수 있다."
  },
  {
    "id": 3735,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 테이블에서 COL1 = COL2인 행의 개수를 구하라.\n\n**<데이터>**\n| COL1 | COL2 |\n|---|---|\n| A | A |\n| B | C |\n| C | C |\n| NULL | NULL |\n| D | D |",
    "choices": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 2,
    "explanation": "정답: 3. A=A, C=C, D=D는 TRUE이지만 NULL=NULL은 TRUE가 아니라 UNKNOWN이므로 제외된다.\n\n**오답 풀이**\n- 1번: 같은 값인 행을 일부만 센 값이다.\n- 2번: 같은 값인 행이 3개이므로 부족하다.\n- 3번: NULL 비교를 제외하면 3개가 맞다.\n- 4번: NULL=NULL을 TRUE로 잘못 판단한 값이다.\n\n**보충 개념**\nSQL에서 NULL은 비교 연산자로 같음을 판단할 수 없다. NULL 여부는 IS NULL을 사용해야 한다."
  },
  {
    "id": 3736,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "고유키와 기본키에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "고유키는 중복 값을 허용하지 않는 제약조건이며 NULL은 여러 개 올 수 없다.",
      "기본키는 고유키와 NOT NULL 제약조건이 합쳐진 상태로 볼 수 있다.",
      "기본키는 한 테이블에 하나만 지정할 수 있다.",
      "고유키는 참조 무결성에서 참조 대상 후보가 될 수 있다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 고유키는 중복 값을 허용하지 않지만 DBMS에 따라 NULL은 여러 개 허용될 수 있으므로 'NULL은 여러 개 올 수 없다'고 단정하는 설명은 부적절하다.\n\n**오답 풀이**\n- 1번: 고유키의 NULL 허용 여부를 단정한 설명이므로 부적절하다.\n- 2번: 기본키는 고유성 및 NOT NULL을 만족한다.\n- 3번: 기본키는 테이블당 하나의 제약으로 지정한다.\n- 4번: 고유키는 외래키의 참조 대상이 될 수 있다.\n\n**보충 개념**\n기본키는 각 행을 대표 식별하는 키이므로 NULL이 허용되지 않는다. 고유키는 중복 방지 목적의 제약이며 NULL 처리 방식은 DBMS 구현에 따라 다를 수 있다."
  },
  {
    "id": 3737,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "아래의 SQL을 실행했을 경우 출력되지 않는 것은?\n\n```sql\nREGEXP_LIKE(문자열, '^[^mw][[:lower:]]*[u]*day$', 'i')\n```",
    "choices": [
      "Monday",
      "Sunday",
      "Friday",
      "Saturday"
    ],
    "answer": 0,
    "explanation": "정답: 1. 정규식 `^[^mw][[:lower:]]*[u]*day$`는 첫 글자가 m 또는 w가 아니어야 하고, 뒤에는 소문자가 0회 이상 반복된 뒤 u가 0회 이상 나오며 day로 끝나는 문자열을 찾는다. 옵션 'i'가 있으므로 대소문자는 구분하지 않는다. Monday는 첫 글자가 M이므로 `[^mw]` 조건을 만족하지 못해 출력되지 않는다.\n\n**오답 풀이**\n- 1번: Monday는 첫 글자가 M이므로 m 또는 w가 아닌 문자 조건을 만족하지 못한다.\n- 2번: Sunday는 첫 글자가 S이고 day로 끝나므로 매칭될 수 있다.\n- 3번: Friday는 첫 글자가 F이고 day로 끝나므로 매칭될 수 있다.\n- 4번: Saturday는 첫 글자가 S이고 day로 끝나므로 매칭될 수 있다.\n\n**보충 개념**\n`[^mw]`는 m 또는 w가 아닌 문자 1개를 의미한다. 옵션 `i`가 있으면 대소문자를 구분하지 않으므로 M과 W도 제외 대상이 된다."
  },
  {
    "id": 3738,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "테이블 컬럼과 제약조건 변경에 대한 설명으로 틀린 것은?",
    "choices": [
      "부적절한 DEFAULT 사용은 데이터 의미를 왜곡하거나 관리상 혼란을 줄 수 있다.",
      "NUMBER형 컬럼의 크기는 데이터 손실이 없으면 늘릴 수 있지만, 줄일 때는 기존 데이터에 따라 제한될 수 있다.",
      "NULL이 중복이 아니어야만 NOT NULL 제한조건을 사용할 수 있다.",
      "NOT NULL 제약조건을 추가하려면 해당 컬럼에 NULL 값이 없어야 한다."
    ],
    "answer": 2,
    "explanation": "정답: 3. NOT NULL 제약조건은 중복 여부와 관련이 없고, 해당 컬럼 값이 NULL이 아니어야 한다는 제약이다.\n\n**오답 풀이**\n- 1번: 부적절한 DEFAULT 사용은 데이터 품질에 영향을 줄 수 있다.\n- 2번: 컬럼 크기 축소는 기존 데이터 손실 가능성 때문에 제한될 수 있다.\n- 3번: 중복 여부는 UNIQUE 제약과 관련되고 NOT NULL과는 다르다.\n- 4번: 이미 NULL이 있는 컬럼에는 바로 NOT NULL 제약을 추가하기 어렵다.\n\n**보충 개념**\nNOT NULL은 값의 존재 여부를 제한하고 UNIQUE는 중복 여부를 제한한다. PRIMARY KEY는 UNIQUE와 NOT NULL 성격을 모두 가진다."
  },
  {
    "id": 3739,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "동일한 정렬값에 대해 같은 순위를 부여하되, 다음 순위는 건너뛰지 않고 연속된 순위를 부여하는 분석 함수는?",
    "choices": [
      "DENSE_RANK",
      "RANK",
      "ROW_NUMBER",
      "PERCENT_RANK"
    ],
    "answer": 0,
    "explanation": "정답: 1. DENSE_RANK는 동일 순위가 있어도 다음 순위를 건너뛰지 않는다.\n\n**오답 풀이**\n- 1번: 1, 2, 2, 3처럼 연속 순위를 부여한다.\n- 2번: RANK는 1, 2, 2, 4처럼 다음 순위를 건너뛴다.\n- 3번: ROW_NUMBER는 동일 정렬값이어도 서로 다른 번호를 부여한다.\n- 4번: PERCENT_RANK는 상대 순위를 0~1 범위로 계산한다.\n\n**보충 개념**\n순위 함수는 RANK, DENSE_RANK, ROW_NUMBER가 자주 비교된다. 공동 순위 이후 번호가 건너뛰는지 여부가 핵심 차이다."
  },
  {
    "id": 3740,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "Oracle 계층형 쿼리의 실행 순서와 관련된 설명으로 가장 적절한 것은?",
    "choices": [
      "START WITH 절이 WHERE 절보다 항상 나중에 수행된다.",
      "ORDER BY 절이 CONNECT BY 절보다 먼저 수행된다.",
      "WHERE 절은 계층 구조가 만들어진 뒤 조건에 맞지 않는 행을 제거할 수 있다.",
      "START WITH 절은 계층의 시작 행을 지정할 수 없다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 계층형 쿼리에서는 START WITH로 시작점을 정하고 CONNECT BY로 계층을 전개한 뒤 WHERE 조건에 따라 행을 필터링할 수 있다.\n\n**오답 풀이**\n- 1번: START WITH는 계층 시작점을 지정하는 절이다.\n- 2번: ORDER BY는 일반적으로 최종 결과 정렬 단계에 가깝다.\n- 3번: WHERE 절은 전개된 행에 대한 필터링에 사용될 수 있다.\n- 4번: START WITH는 계층 시작 행을 지정한다.\n\n**보충 개념**\n계층형 쿼리는 START WITH, CONNECT BY, PRIOR의 의미를 구분해야 한다. 형제 노드 정렬에는 ORDER SIBLINGS BY를 사용할 수 있다."
  },
  {
    "id": 3741,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 중복을 제거한 값의 개수를 구하는 표현으로 가장 적절한 것은?",
    "choices": [
      "COUNT(DISTINCT 컬럼명)",
      "DISTINCT COUNT(컬럼명)",
      "COUNT(ALL DISTINCT 컬럼명)",
      "UNIQUE COUNT(컬럼명)"
    ],
    "answer": 0,
    "explanation": "정답: 1. 중복을 제거한 값의 개수를 구할 때는 COUNT(DISTINCT 컬럼명)을 사용한다.\n\n**오답 풀이**\n- 1번: 올바른 문법이다.\n- 2번: DISTINCT의 위치가 부적절하다.\n- 3번: COUNT 안에서 ALL과 DISTINCT를 함께 사용할 수 없다.\n- 4번: 일반적인 SQL 집계 함수 문법이 아니다.\n\n**보충 개념**\nCOUNT(*)는 전체 행 수, COUNT(컬럼)는 NULL이 아닌 값의 수, COUNT(DISTINCT 컬럼)는 중복을 제거한 값의 수를 반환한다."
  },
  {
    "id": 3742,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "OUTER JOIN",
    "question": "아래 두 테이블에서 LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, INNER JOIN을 각각 수행하여 생성되는 행 수의 총합을 구하라.\n\n**<데이터>**\n| TAB1 | TAB2 |\n|---|---|\n| A | E |\n| B | F |\n| C | D |\n| G | G |\n\n**<조건>**\nTAB1.COL = TAB2.COL 조건으로 조인한다.",
    "choices": [
      "14개",
      "15개",
      "16개",
      "17개"
    ],
    "answer": 2,
    "explanation": "정답: 3. INNER JOIN은 G만 매칭되어 1건, LEFT JOIN은 TAB1 기준 4건(매칭 1 + TAB1 미매칭 A,B,C 3건), RIGHT JOIN은 TAB2 기준 4건(매칭 1 + TAB2 미매칭 E,F,D 3건), FULL OUTER JOIN은 매칭 1건 + TAB1 미매칭 A,B,C 3건 + TAB2 미매칭 E,F,D 3건 = 7건이므로 합계는 1 + 4 + 4 + 7 = 16건이다.\n\n**오답 풀이**\n- 1번: 일부 JOIN의 건수를 과소 계산한 값이다.\n- 2번: FULL OUTER JOIN을 6건으로 잘못 계산한 값이다.\n- 3번: 1 + 4 + 4 + 7 = 16으로 옳다.\n- 4번: 매칭 행이나 미매칭 행을 과대 계산한 값이다.\n\n**보충 개념**\nLEFT JOIN은 왼쪽 테이블의 모든 행을 보존하고, RIGHT JOIN은 오른쪽 테이블의 모든 행을 보존한다. FULL OUTER JOIN은 양쪽 미매칭 행을 모두 포함하므로 매칭된 행 수에 양쪽 미매칭 행 수를 더한 값이 된다."
  },
  {
    "id": 3743,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "Oracle에서 점수가 높은 상위 10명을 정확히 조회하는 SQL로 가장 적절한 것은?",
    "choices": [
      "SELECT * FROM EMP WHERE ROWNUM <= 10 ORDER BY SAL DESC",
      "SELECT * FROM (SELECT * FROM EMP ORDER BY SAL DESC) WHERE ROWNUM <= 10",
      "SELECT * FROM EMP WHERE ROWNUM > 10 ORDER BY SAL DESC",
      "SELECT * FROM EMP ORDER BY SAL DESC WHERE ROWNUM <= 10"
    ],
    "answer": 1,
    "explanation": "정답: 2. Oracle에서 ROWNUM은 ORDER BY보다 먼저 부여될 수 있으므로 먼저 인라인 뷰에서 정렬한 뒤 바깥 쿼리에서 ROWNUM 조건을 적용해야 한다.\n\n**오답 풀이**\n- 1번: ROWNUM이 먼저 적용되어 임의의 10건을 뽑은 뒤 정렬될 수 있다.\n- 2번: 정렬 후 상위 10건을 선택하는 올바른 방식이다.\n- 3번: ROWNUM > 10 조건은 일반적으로 원하는 결과를 반환하지 못한다.\n- 4번: SQL 문법상 WHERE 절 위치가 잘못되었다.\n\n**보충 개념**\nTop-N 쿼리는 정렬과 행 제한의 순서가 중요하다. Oracle 12c 이후에는 FETCH FIRST n ROWS ONLY도 사용할 수 있다."
  },
  {
    "id": 3744,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 실행 결과는?\n\n```sql\nSELECT NVL(COUNT(*), 9999)\nFROM TABLE_NAME\nWHERE 1 = 2;\n```",
    "choices": [
      "NULL",
      "1",
      "9999",
      "0"
    ],
    "answer": 3,
    "explanation": "정답: 4. COUNT(*)는 조건을 만족하는 행이 없으면 NULL이 아니라 0을 반환하므로 NVL이 적용되어도 0이다.\n\n**오답 풀이**\n- 1번: COUNT(*) 결과는 NULL이 아니다.\n- 2번: 조건 1=2는 항상 거짓이므로 1건이 아니다.\n- 3번: NVL은 첫 번째 인자가 NULL일 때만 9999를 반환한다.\n- 4번: COUNT(*) 결과가 0이므로 정답이다.\n\n**보충 개념**\nCOUNT는 집계 대상이 없어도 0을 반환한다. 반면 SUM, AVG 등은 대상 행이 없거나 모두 NULL이면 NULL을 반환할 수 있다."
  },
  {
    "id": 3745,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 중 동일한 이름의 컬럼을 조인 조건으로 사용하고, 중복 컬럼을 하나로 출력하는 조인 방식은?",
    "choices": [
      "INNER JOIN",
      "LEFT OUTER JOIN",
      "NATURAL JOIN",
      "RIGHT OUTER JOIN"
    ],
    "answer": 2,
    "explanation": "정답: 3. NATURAL JOIN은 양쪽 테이블에서 이름이 같은 컬럼을 자동으로 조인 조건으로 사용하며, 동일 이름 컬럼을 하나로 출력한다.\n\n**오답 풀이**\n- 1번: INNER JOIN 자체는 동일 이름 컬럼을 자동으로 하나로 출력하지 않는다.\n- 2번: LEFT OUTER JOIN은 왼쪽 행 보존 방식이며 동일 이름 컬럼 자동 처리와 직접 관련이 없다.\n- 3번: 동일 이름 컬럼을 기준으로 자동 조인한다.\n- 4번: RIGHT OUTER JOIN은 오른쪽 행 보존 방식이다.\n\n**보충 개념**\nNATURAL JOIN은 편리하지만 동일 이름 컬럼이 의도치 않게 조인 조건으로 사용될 수 있어 실무에서는 명시적 JOIN 조건을 선호하는 경우가 많다."
  },
  {
    "id": 3746,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 SQL 중 에러가 발생하는 것의 개수는?\n\n**<SQL>**\nㄱ. `SELECT 10 / 0 FROM DUAL;`\nㄴ. `SELECT TO_NUMBER('ABC') FROM DUAL;`\nㄷ. `SELECT NVL(NULL, 0) FROM DUAL;`\nㄹ. `SELECT SUBSTR('ABC', 1, 2) FROM DUAL;`",
    "choices": [
      "2개",
      "1개",
      "3개",
      "4개"
    ],
    "answer": 0,
    "explanation": "정답: 1. 10/0은 0으로 나누기 오류, TO_NUMBER('ABC')는 숫자 변환 오류가 발생한다. NVL과 SUBSTR은 정상 실행된다.\n\n**오답 풀이**\n- 1번: ㄱ, ㄴ 두 개가 오류이므로 2개가 정답이다.\n- 2번: 오류가 하나가 아니라 두 개이다.\n- 3번: ㄷ은 정상 실행된다.\n- 4번: ㄷ, ㄹ은 정상 실행된다.\n\n**보충 개념**\nOracle에서 0으로 나누면 ORA-01476 오류가 발생하고, 숫자로 변환할 수 없는 문자열을 TO_NUMBER에 전달하면 ORA-01722 오류가 발생한다."
  },
  {
    "id": 3747,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "다음 SQL의 결과로 가장 적절한 것은?\n\n**<조건>**\n전체 행 수는 105건이고, 특정 컬럼 COL1이 NULL이 아닌 행 수는 70건이다.\n\n```sql\nSELECT COUNT(*), COUNT(COL1)\nFROM T;\n```",
    "choices": [
      "105, 70",
      "70, 105",
      "70, NULL",
      "103, NULL"
    ],
    "answer": 0,
    "explanation": "정답: 1. COUNT(*)는 전체 행 수를 세고, COUNT(COL1)은 COL1이 NULL이 아닌 행만 센다.\n\n**오답 풀이**\n- 1번: 전체 행 수 105와 NULL 제외 COL1 개수 70이 맞다.\n- 2번: COUNT(*)와 COUNT(COL1)의 순서가 반대이다.\n- 3번: COUNT(COL1)은 NULL이 아니라 70을 반환한다.\n- 4번: 조건과 맞지 않는 값이다.\n\n**보충 개념**\nCOUNT(*)는 NULL 여부와 관계없이 행을 센다. COUNT(컬럼명)은 해당 컬럼 값이 NULL인 행을 제외하고 센다."
  },
  {
    "id": 3748,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "SQL Server에서 다음 결과를 도출하기 위한 조건으로 가장 적절한 것은?\n\n**<member>**\n| name |\n|---|\n| Jim |\n| Kim |\n| Tim |\n| Sam |\n\n**<실행 결과>**\n| name |\n|---|\n| Kim |\n| Tim |\n\n```sql\nSELECT *\nFROM member\n__________;\n```",
    "choices": [
      "WHERE name LIKE '_im'",
      "WHERE name LIKE '%im'",
      "WHERE name LIKE '[JT]im'",
      "WHERE name LIKE '[KT]im'"
    ],
    "answer": 3,
    "explanation": "정답: 4. SQL Server의 LIKE 패턴 `[KT]im`은 첫 글자가 K 또는 T이고 뒤가 im인 문자열을 찾으므로 Kim, Tim이 조회된다.\n\n**오답 풀이**\n- 1번: _im은 Jim, Kim, Tim처럼 임의의 한 글자 + im을 모두 포함한다.\n- 2번: %im은 im으로 끝나는 Jim, Kim, Tim을 모두 포함한다.\n- 3번: [JT]im은 Jim, Tim을 조회한다.\n- 4번: [KT]im은 Kim, Tim을 조회한다.\n\n**보충 개념**\nSQL Server LIKE에서 대괄호 []는 문자 목록 중 하나를 의미한다. `[KT]`는 K 또는 T 한 글자를 의미한다."
  },
  {
    "id": 3749,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "Oracle에서 SYSDATE가 `2025-01-01 13:30:00`일 때 다음 SQL의 실행 결과로 가장 적절한 것은?\n\n```sql\nSELECT TRUNC(SYSDATE),\n       ROUND(SYSDATE)\nFROM DUAL;\n```",
    "choices": [
      "2025/01/01 00:00:00, 2025/01/02 00:00:00",
      "2025/01/01 13:00:00, 2025/01/01 14:00:00",
      "2025/01/01 00:00:00, 2025/01/01 00:00:00",
      "2025/01/02 00:00:00, 2025/01/02 00:00:00"
    ],
    "answer": 0,
    "explanation": "정답: 1. 날짜 단위 TRUNC는 당일 00:00:00으로 절삭하고, ROUND는 정오 이후면 다음 날짜 00:00:00으로 반올림한다.\n\n**오답 풀이**\n- 1번: 13:30은 정오 이후이므로 ROUND 결과가 다음 날짜가 된다.\n- 2번: 기본 TRUNC/ROUND는 시각 단위가 아니라 날짜 단위로 처리된다.\n- 3번: 정오 이후 ROUND 결과를 잘못 판단했다.\n- 4번: TRUNC는 다음 날짜가 아니라 현재 날짜 00:00:00이다.\n\n**보충 개념**\nOracle 날짜 함수 TRUNC(date)는 지정 단위로 절삭하고 ROUND(date)는 지정 단위로 반올림한다. 단위 생략 시 기본은 일자 기준이다."
  },
  {
    "id": 3750,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 데이터에서 2등급에 해당하는 점수의 개수를 구하라.\n\n**<조건>**\n2등급 범위는 1200 이상 1400 이하이다.\n\n**<데이터>**\n| ID | SCORE |\n|---:|---:|\n| 1 | 1100 |\n| 2 | 1200 |\n| 3 | 1300 |\n| 4 | 1400 |\n| 5 | 1500 |",
    "choices": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 2,
    "explanation": "정답: 3. 1200 이상 1400 이하에 해당하는 값은 1200, 1300, 1400으로 총 3개이다.\n\n**오답 풀이**\n- 1번: 범위의 경계값을 제외한 경우보다도 작다.\n- 2번: 한쪽 경계값을 제외한 경우의 값이다.\n- 3번: BETWEEN처럼 양끝을 포함하면 3개이다.\n- 4번: 1100 또는 1500 중 하나를 잘못 포함한 값이다.\n\n**보충 개념**\nSQL의 BETWEEN A AND B는 A 이상 B 이하를 의미한다. 경계값을 포함한다는 점이 중요하다."
  },
  {
    "id": 3751,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "OUTER JOIN",
    "question": "다음 상황에서 TUTOR LEFT OUTER JOIN CLASS를 수행한 결과 행 수로 가장 적절한 것은?\n\n**<조건>**\n- 튜터 테이블에는 튜터 2명이 있다.\n- 클래스 테이블에는 클래스 4개가 있다.\n- LEFT OUTER JOIN의 왼쪽 테이블은 TUTOR이다.\n- 각 클래스는 특정 튜터에 속한다.\n- 두 튜터는 각각 최소 1개 이상의 클래스를 담당한다.",
    "choices": [
      "2개",
      "4개",
      "6개",
      "8개"
    ],
    "answer": 1,
    "explanation": "정답: 2. LEFT OUTER JOIN은 왼쪽 테이블의 행을 보존하지만, 오른쪽 테이블에 여러 행이 매칭되면 왼쪽 행은 매칭된 오른쪽 행 수만큼 반복된다. 클래스 4개가 모두 특정 튜터에 속하고, 두 튜터가 각각 최소 1개 이상의 클래스를 담당하므로 조인 결과는 클래스 행 기준으로 총 4건이다.\n\n**오답 풀이**\n- 1번: 왼쪽 테이블의 튜터 수만 단순히 반환되는 것이 아니다.\n- 2번: 클래스 4개가 모두 튜터와 매칭되므로 결과는 4건이다.\n- 3번: 튜터 수와 클래스 수를 단순 합산한 값이다.\n- 4번: 모든 튜터와 모든 클래스를 곱한 값으로 잘못 계산한 결과이다.\n\n**보충 개념**\nLEFT OUTER JOIN은 왼쪽 행을 보존한다. 오른쪽에 매칭되는 행이 여러 개 있으면 왼쪽 행은 그 수만큼 반복되고, 매칭되는 오른쪽 행이 없으면 NULL 확장 행이 1건 생성된다."
  },
  {
    "id": 3752,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "MERGE 문에서 각 절의 역할 연결로 가장 적절한 것은?\n\n**<보기>**\n1. `WHEN MATCHED THEN`\n2. `WHEN NOT MATCHED THEN`\n3. `ON 조건`\n4. `USING`\n\n**<역할>**\na. 매칭되지 않는 행에 대해 INSERT 수행\nb. 매칭되는 행에 대해 UPDATE 또는 DELETE 수행\nc. 병합에 사용할 원본 데이터 집합 지정\nd. 대상 테이블과 원본 데이터의 매칭 조건 지정",
    "choices": [
      "1-a, 2-b, 3-c, 4-d",
      "1-b, 2-a, 3-d, 4-c",
      "1-b, 2-a, 3-c, 4-d",
      "1-d, 2-c, 3-b, 4-a"
    ],
    "answer": 1,
    "explanation": "정답: 2. WHEN MATCHED는 매칭 시 UPDATE/DELETE, WHEN NOT MATCHED는 미매칭 시 INSERT, ON은 매칭 조건, USING은 원본 데이터 집합을 의미한다.\n\n**오답 풀이**\n- 1번: MATCHED와 NOT MATCHED의 역할이 바뀌었다.\n- 2번: 각 절의 역할이 올바르게 연결되었다.\n- 3번: 3과 4의 역할이 바뀌었다.\n- 4번: 전체 연결이 부적절하다.\n\n**보충 개념**\nMERGE는 조건에 따라 INSERT, UPDATE, DELETE를 한 문장에서 처리할 수 있는 명령이다. 기준은 대상 테이블과 원본 데이터의 ON 조건 매칭 여부이다."
  },
  {
    "id": 3753,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 2022년 11월, 2022년 12월, 2023년 3월, 2023년 5월 데이터를 조회하는 조건으로 가장 적절한 것은?",
    "choices": [
      "WHERE 기준월 BETWEEN '202211' AND '202305'",
      "WHERE 기준월 IN ('202211', '202212', '202303', '202305')",
      "WHERE 기준월 >= '202211' AND 기준월 <= '202305'",
      "WHERE 기준월 LIKE '2022%' OR 기준월 LIKE '2023%'"
    ],
    "answer": 1,
    "explanation": "정답: 2. 특정 네 개 월만 조회하려면 IN으로 해당 월을 명시하는 것이 가장 정확하다.\n\n**오답 풀이**\n- 1번: 2023년 1월, 2월, 4월 등 원하지 않는 월도 포함된다.\n- 2번: 필요한 네 개 월만 정확히 조회한다.\n- 3번: BETWEEN과 동일하게 중간 월까지 포함된다.\n- 4번: 2022년과 2023년 전체 월을 포함할 수 있다.\n\n**보충 개념**\n연속 구간은 BETWEEN을 사용하고, 불연속적인 값 목록은 IN을 사용하는 것이 적절하다."
  },
  {
    "id": 3754,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUP BY",
    "question": "다음 중 가능한 모든 조합의 소계를 생성하는 GROUP BY 확장 기능은?",
    "choices": [
      "ROLLUP",
      "GROUPING SETS",
      "GROUPING",
      "CUBE"
    ],
    "answer": 3,
    "explanation": "정답: 4. CUBE는 지정한 컬럼들의 가능한 모든 조합에 대한 소계와 총계를 생성한다.\n\n**오답 풀이**\n- 1번: ROLLUP은 계층적 소계를 생성한다.\n- 2번: GROUPING SETS는 사용자가 지정한 그룹 조합만 생성한다.\n- 3번: GROUPING은 해당 행이 소계 행인지 구분하는 함수이다.\n- 4번: 모든 조합의 소계를 생성하므로 정답이다.\n\n**보충 개념**\nROLLUP(A, B)는 (A,B), (A), ()를 생성한다. CUBE(A, B)는 (A,B), (A), (B), ()를 생성한다."
  },
  {
    "id": 3755,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "다음 UNPIVOT 결과로 가장 적절한 것은?\n\n**<원본 테이블>**\n| 상품 | 1월 | 2월 | 3월 |\n|---|---:|---:|---:|\n| A | 100 | NULL | 300 |\n\n```sql\nSELECT 상품, 월, 금액\nFROM 매출\nUNPIVOT (\n    금액 FOR 월 IN (\"1월\", \"2월\", \"3월\")\n);\n```\n\n**<조건>**\nUNPIVOT INCLUDE NULLS를 사용하지 않는다.",
    "choices": [
      "1월, 2월, 3월이 모두 출력되고 모든 금액이 채워져 있다.",
      "2월 행은 제외되고 1월과 3월 행만 출력된다.",
      "2월 행이 출력되며 금액은 NULL이다.",
      "모든 월이 출력되지만 금액이 원본과 다르게 변환된다."
    ],
    "answer": 1,
    "explanation": "정답: 2. Oracle UNPIVOT은 기본적으로 NULL 값을 제외하므로 2월 행은 출력되지 않는다.\n\n**오답 풀이**\n- 1번: NULL인 2월 금액이 있으므로 모든 금액이 채워진 결과가 아니다.\n- 2번: INCLUDE NULLS가 없으면 NULL 값 행은 제외된다.\n- 3번: INCLUDE NULLS를 사용한 경우에 가까운 결과이다.\n- 4번: UNPIVOT은 열을 행으로 변환할 뿐 금액을 임의로 바꾸지 않는다.\n\n**보충 개념**\nUNPIVOT은 여러 컬럼을 행으로 변환한다. NULL 행까지 포함하려면 INCLUDE NULLS 옵션을 명시해야 한다."
  },
  {
    "id": 3756,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "GROUP BY",
    "question": "다음 SQL의 괄호 안에 들어갈 수 없는 것은?\n\n```sql\nSELECT (   ), COUNT(EMPNO)\nFROM EMP\nGROUP BY JOB, DEPT;\n```",
    "choices": [
      "EMPNO",
      "JOB",
      "DEPT",
      "NULL"
    ],
    "answer": 0,
    "explanation": "정답: 1. GROUP BY에 포함되지 않은 일반 컬럼 EMPNO는 집계 함수 없이 SELECT 절에 올 수 없다.\n\n**오답 풀이**\n- 1번: EMPNO는 GROUP BY에 없고 집계 함수도 아니므로 사용할 수 없다.\n- 2번: JOB은 GROUP BY에 포함되어 사용할 수 있다.\n- 3번: DEPT는 GROUP BY에 포함되어 사용할 수 있다.\n- 4번: NULL 상수는 그룹과 무관하게 SELECT 절에 사용할 수 있다.\n\n**보충 개념**\nGROUP BY를 사용할 때 SELECT 절에는 GROUP BY 컬럼, 집계 함수, 상수 표현식 등이 올 수 있다. 그룹화되지 않은 일반 컬럼은 사용할 수 없다."
  },
  {
    "id": 3757,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "이름이 중복된 데이터 중 각 이름별로 가장 작은 ID만 남기고 나머지를 삭제하려고 한다. DELETE 조건으로 가장 적절한 것은?",
    "choices": [
      "WHERE ID NOT IN (SELECT MIN(ID) FROM T GROUP BY NAME)",
      "WHERE ID NOT IN (SELECT MAX(ID) FROM T GROUP BY ID)",
      "WHERE ID NOT IN (SELECT MAX(ID) FROM T GROUP BY NAME)",
      "WHERE ID IN (SELECT MAX(ID) FROM T GROUP BY ID)"
    ],
    "answer": 0,
    "explanation": "정답: 1. 각 NAME 그룹별 MIN(ID)를 남기고 나머지를 삭제하려면 ID가 그룹별 MIN(ID)에 포함되지 않는 행을 삭제한다.\n\n**오답 풀이**\n- 1번: 이름별 최소 ID만 보존하는 조건이다.\n- 2번: ID로 GROUP BY하면 각 ID 자체가 반환되어 중복 제거 목적에 맞지 않는다.\n- 3번: 이름별 최대 ID를 남기는 조건이므로 문제 의도와 다르다.\n- 4번: ID별 MAX(ID)는 사실상 모든 ID가 대상이 될 수 있어 부적절하다.\n\n**보충 개념**\n중복 데이터 삭제에서는 보존 기준을 먼저 정해야 한다. 보통 그룹별 MIN(ID) 또는 MAX(ID)를 남기고 나머지를 삭제한다."
  },
  {
    "id": 3758,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 중 NOT IN과 NOT EXISTS에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "NOT EXISTS는 상관 서브쿼리에서 조건을 만족하는 행이 없을 때 TRUE가 된다.",
      "NOT IN은 서브쿼리 결과에 NULL이 포함되면 의도와 다른 결과가 나올 수 있다.",
      "서브쿼리 결과에 NULL이 없고 비교 컬럼도 NULL이 아니라면 NOT IN을 NOT EXISTS로 바꿔도 같은 결과를 얻을 수 있다.",
      "서브쿼리 결과가 NULL을 포함해도 NOT IN과 NOT EXISTS의 결과는 항상 동일하다."
    ],
    "answer": 3,
    "explanation": "정답: 4. NOT IN은 비교 목록에 NULL이 포함되면 UNKNOWN 때문에 결과가 달라질 수 있어 NOT EXISTS와 항상 동일하지 않다.\n\n**오답 풀이**\n- 1번: NOT EXISTS의 올바른 설명이다.\n- 2번: NOT IN의 NULL 관련 주의점이다.\n- 3번: NULL이 배제된 경우 두 방식이 같은 결과를 낼 수 있다.\n- 4번: NULL 포함 시 항상 동일하다는 설명은 틀리다.\n\n**보충 개념**\n`NOT IN (subquery)`는 서브쿼리 결과에 NULL이 있으면 비교 결과가 UNKNOWN이 되어 행이 반환되지 않을 수 있다. NULL 가능성이 있으면 NOT EXISTS가 더 안전한 경우가 많다."
  },
  {
    "id": 3759,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUPING",
    "question": "ROLLUP 결과에서 GROUPING 함수를 이용해 합계 행의 표시명을 지정하려고 한다. 다음 중 가장 적절한 CASE 표현식은?",
    "choices": [
      "CASE WHEN GROUPING(DEPTNO) = 1 AND GROUPING(JOB) = 1 THEN '총계' WHEN GROUPING(JOB) = 1 THEN '소계' ELSE JOB END",
      "CASE WHEN GROUPING(DEPTNO) = 0 AND GROUPING(JOB) = 0 THEN '총계' ELSE NULL END",
      "CASE WHEN GROUPING(DEPTNO) = 1 THEN DEPTNO ELSE '소계' END",
      "CASE WHEN GROUPING(JOB) = 0 THEN '소계' ELSE JOB END"
    ],
    "answer": 0,
    "explanation": "정답: 1. GROUPING 값이 1이면 해당 컬럼이 집계로 인해 생성된 NULL임을 의미하므로 DEPTNO와 JOB이 모두 1이면 총계, JOB만 1이면 소계로 표시할 수 있다.\n\n**오답 풀이**\n- 1번: 총계와 소계를 구분하는 CASE로 적절하다.\n- 2번: GROUPING 값 0은 실제 그룹 컬럼이 존재하는 일반 행을 의미한다.\n- 3번: GROUPING 결과와 실제 컬럼 값을 혼동했다.\n- 4번: GROUPING(JOB)=0은 JOB이 존재하는 일반 상세 행이다.\n\n**보충 개념**\nGROUPING(컬럼)은 해당 컬럼이 집계에 의해 NULL로 표시된 경우 1, 실제 데이터에 의해 존재하는 경우 0을 반환한다. ROLLUP 결과의 소계와 총계를 구분할 때 유용하다."
  },
  {
    "id": 3760,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "아래 SQL의 실행 결과로 가장 적절한 것은?\n\n**<사원>**\n| 사원ID | 부서ID | 사원명 | 연봉 |\n|---|---:|---|---:|\n| 001 | 100 | 홍길동 | 2500 |\n| 002 | 100 | 강감찬 | 3000 |\n| 003 | 200 | 김유신 | 4500 |\n| 004 | 200 | 김선달 | 3000 |\n| 005 | 200 | 유학생 | 2500 |\n| 006 | 300 | 변사또 | 4500 |\n| 007 | 300 | 박문수 | 3000 |\n\n```sql\nSELECT Y.사원ID, Y.부서ID, Y.사원명, Y.연봉\nFROM (\n    SELECT 사원ID,\n           MAX(연봉) OVER(PARTITION BY 부서ID) AS 최고연봉\n    FROM 사원\n) X, 사원 Y\nWHERE X.사원ID = Y.사원ID\n  AND X.최고연봉 = Y.연봉;\n```\n\n※ 결과는 (사원ID, 부서ID, 사원명, 연봉) 순으로 표기하며, 행의 순서는 무관하다.",
    "choices": [
      "(003, 200, 김유신, 4500), (006, 300, 변사또, 4500)",
      "(001, 100, 홍길동, 2500), (005, 200, 유학생, 2500), (007, 300, 박문수, 3000)",
      "(002, 100, 강감찬, 3000), (003, 200, 김유신, 4500), (006, 300, 변사또, 4500)",
      "(003, 200, 김유신, 4500)"
    ],
    "answer": 2,
    "explanation": "정답: 3. 부서별 최고 연봉은 100부서 3000, 200부서 4500, 300부서 4500이므로 해당 연봉을 받는 강감찬, 김유신, 변사또가 조회된다.\n\n**오답 풀이**\n- 1번: 100부서의 최고 연봉자인 강감찬이 누락되었다.\n- 2번: MIN(연봉)을 기준으로 한 부서별 최저 연봉자 결과다.\n- 4번: 200부서 최고 연봉자만 포함되어 부족하다.\n\n**보충 개념**\nMAX(연봉) OVER(PARTITION BY 부서ID)는 집계 함수가 아니라 윈도우 함수이므로, 인라인 뷰 X에는 GROUP BY가 없어 7개 행이 모두 그대로 유지된 채 각 사원 행에 해당 부서의 최고 연봉이 함께 표시된다. 이후 자신의 연봉이 부서 최고 연봉과 같은 행만 필터링하면 부서별 최고 연봉자를 구할 수 있다."
  },
  {
    "id": 3761,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "모델링 관점 중 업무가 어떤 데이터와 관련되어 있는지 또는 데이터 간의 관계가 무엇인지에 집중하는 관점으로 가장 적절한 것은?",
    "choices": [
      "데이터 관점",
      "프로세스 관점",
      "상관 관점",
      "기능 관점"
    ],
    "answer": 0,
    "explanation": "정답: 1. 데이터 관점은 업무가 어떤 데이터와 관련되어 있는지, 데이터 간 관계가 무엇인지에 집중한다.\n\n**오답 풀이**\n- 1번: 데이터와 데이터 간 관계를 중심으로 보는 관점이다.\n- 2번: 프로세스 관점은 업무가 실제로 처리되는 절차와 흐름에 집중한다.\n- 3번: 상관 관점은 데이터와 프로세스의 상호 관련성을 보는 관점이다.\n- 4번: 기능 관점은 일반적으로 업무 기능이나 처리 단위에 초점을 둔다.\n\n**보충 개념**\n데이터 모델링에서는 데이터 관점, 프로세스 관점, 데이터와 프로세스의 상관 관점을 구분한다. 데이터 관점은 정적인 데이터 구조를 파악하는 데 중요하다."
  },
  {
    "id": 3762,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "데이터 모델과 SQL",
    "question": "데이터 용량과 성능에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "데이터 용량이 증가하면 조회 범위와 I/O 증가로 성능 저하가 발생할 수 있다.",
      "대량 데이터 테이블은 파티셔닝이나 인덱스 전략을 고려할 수 있다.",
      "데이터 용량이 증가해도 테이블 구조와 인덱스 설계는 성능에 영향을 주지 않는다.",
      "불필요한 중복 데이터는 저장 공간 증가와 정합성 문제를 유발할 수 있다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 데이터 용량이 증가할수록 테이블 구조, 인덱스 설계, 파티셔닝 여부는 성능에 큰 영향을 준다.\n\n**오답 풀이**\n- 1번: 데이터가 많아지면 더 많은 블록을 읽게 되어 I/O가 증가할 수 있다.\n- 2번: 대량 데이터에서는 파티셔닝과 인덱스 설계가 중요하다.\n- 3번: 구조와 인덱스 설계가 성능에 영향을 주지 않는다는 설명은 틀리다.\n- 4번: 중복 데이터는 저장 공간과 정합성 관리 비용을 증가시킨다.\n\n**보충 개념**\n데이터 모델과 성능은 밀접하게 연결된다. 대용량 테이블에서는 정규화, 반정규화, 인덱스, 파티셔닝 등을 함께 고려해야 한다."
  },
  {
    "id": 3763,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "다음 중 엔터티의 발생 시점에 따른 분류가 아닌 것은?",
    "choices": [
      "기본 엔터티",
      "중심 엔터티",
      "유형 엔터티",
      "행위 엔터티"
    ],
    "answer": 2,
    "explanation": "정답: 3. 엔터티의 발생 시점에 따른 일반적인 분류는 기본 엔터티, 중심 엔터티, 행위 엔터티이다.\n\n**오답 풀이**\n- 1번: 기본 엔터티는 업무에 원래 존재하는 독립적인 엔터티이다.\n- 2번: 중심 엔터티는 기본 엔터티로부터 발생하고 업무의 중심 역할을 한다.\n- 3번: 유형 엔터티는 발생 시점에 따른 표준 분류가 아니다.\n- 4번: 행위 엔터티는 두 개 이상의 엔터티 간 업무 행위로부터 발생한다.\n\n**보충 개념**\n발생 시점에 따른 엔터티 분류는 기본, 중심, 행위 엔터티로 구분한다. 예를 들어 고객은 기본 엔터티, 주문은 행위 엔터티로 볼 수 있다."
  },
  {
    "id": 3764,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "다음 설명에 해당하는 정규형으로 가장 적절한 것은?\n\n**<설명>**\n일반 속성이 주식별자에 종속되어 있고, 주식별자가 아닌 일반 속성 간의 이행 함수 종속이 제거된 상태이다.",
    "choices": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "비정규형"
    ],
    "answer": 2,
    "explanation": "정답: 3. 제3정규형은 제2정규형을 만족하면서 이행 함수 종속을 제거한 정규형이다.\n\n**오답 풀이**\n- 1번: 제1정규형은 속성의 원자성을 만족하는 단계이다.\n- 2번: 제2정규형은 부분 함수 종속을 제거하는 단계이다.\n- 3번: 이행 함수 종속 제거와 관련되므로 정답이다.\n- 4번: 비정규형은 정규화가 이루어지지 않은 상태이다.\n\n**보충 개념**\n이행 함수 종속은 A → B, B → C이면 A → C가 되는 종속 관계를 말한다. 제3정규화는 이러한 일반 속성 간 종속을 분리해 이상 현상을 줄인다."
  },
  {
    "id": 3765,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "인조 식별자에 대한 설명으로 틀린 것은?",
    "choices": [
      "업무 식별자가 복잡할 때 인위적으로 식별자를 만들 수 있다.",
      "인조 식별자는 보통 대체 식별자로 설계된다.",
      "속성의 수가 적으면 인조 식별자를 반드시 사용해야 한다.",
      "인조 식별자를 사용하더라도 업무적으로 유일성을 보장하는 제약을 고려해야 한다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 속성 수가 적다고 해서 인조 식별자를 반드시 사용해야 하는 것은 아니다.\n\n**오답 풀이**\n- 1번: 복합 업무 식별자가 지나치게 복잡하면 인조 식별자를 고려할 수 있다.\n- 2번: 인조 식별자는 설계상 인위적으로 부여한 식별자이다.\n- 3번: 반드시 사용해야 한다는 표현은 부적절하다.\n- 4번: 인조 식별자를 쓰더라도 업무 유일성은 별도 제약으로 관리해야 한다.\n\n**보충 개념**\n인조 식별자는 편의성과 성능 측면에서 장점이 있지만, 업무 의미를 직접 담지 않는다. 따라서 자연 식별자 후보의 유일성 관리가 함께 필요할 수 있다."
  },
  {
    "id": 3766,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "정규화",
    "question": "복합 주식별자를 가진 테이블에서 일반 속성이 주식별자 전체가 아니라 일부 속성에만 종속되어 있다. 이를 분리하는 정규화 단계로 가장 적절한 것은?",
    "choices": [
      "제1정규화",
      "제2정규화",
      "제3정규화",
      "반정규화"
    ],
    "answer": 1,
    "explanation": "정답: 2. 복합 식별자의 일부에만 종속되는 부분 함수 종속을 제거하는 것은 제2정규화이다.\n\n**오답 풀이**\n- 1번: 제1정규화는 반복 속성이나 다중값 속성을 제거한다.\n- 2번: 부분 함수 종속 제거에 해당한다.\n- 3번: 제3정규화는 이행 함수 종속을 제거한다.\n- 4번: 반정규화는 성능 등을 위해 의도적으로 중복을 허용하는 설계이다.\n\n**보충 개념**\n제2정규형은 제1정규형을 만족하면서 기본키 전체에 대해 완전 함수 종속을 만족해야 한다. 복합키 일부에만 의존하는 속성은 별도 엔터티로 분리한다."
  },
  {
    "id": 3767,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "상호배타 관계에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "하나의 상위 엔터티 인스턴스가 여러 하위 유형 중 하나에만 속해야 하는 경우를 표현할 수 있다.",
      "상호배타 관계는 하위 엔터티 간 중복 소속을 제한하는 의미를 가진다.",
      "상호배타 관계는 배타적 상속을 표현할 수 없다.",
      "상호배타 여부는 업무 규칙에 따라 결정된다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 상호배타 관계는 하위 유형 간 중복을 허용하지 않는 배타적 상속 구조를 표현할 수 있다.\n\n**오답 풀이**\n- 1번: 상위 인스턴스가 하나의 하위 유형에만 속하는 구조를 표현한다.\n- 2번: 하위 유형 간 중복을 제한한다는 설명은 적절하다.\n- 3번: 배타적 상속을 표현할 수 없다는 설명은 틀리다.\n- 4번: 상호배타 여부는 업무상 동시에 속할 수 있는지에 따라 결정된다.\n\n**보충 개념**\n슈퍼타입과 서브타입 관계에서 배타성은 한 인스턴스가 여러 서브타입에 동시에 속할 수 있는지 여부를 나타낸다. 상호배타는 동시에 여러 하위 유형에 속할 수 없다는 의미이다."
  },
  {
    "id": 3768,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "참조 무결성을 구현하는 키로 가장 적절한 것은?",
    "choices": [
      "기본키",
      "외래키",
      "후보키",
      "대체키"
    ],
    "answer": 1,
    "explanation": "정답: 2. 외래키는 자식 테이블의 값이 부모 테이블의 기본키 또는 유일키 값을 참조하도록 하여 참조 무결성을 구현한다.\n\n**오답 풀이**\n- 1번: 기본키는 개체 무결성과 관련이 깊다.\n- 2번: 외래키가 참조 무결성을 구현한다.\n- 3번: 후보키는 튜플을 유일하게 식별할 수 있는 속성 집합이다.\n- 4번: 대체키는 후보키 중 기본키로 선택되지 않은 키이다.\n\n**보충 개념**\n개체 무결성은 기본키, 참조 무결성은 외래키, 도메인 무결성은 CHECK 제약조건 등으로 구현할 수 있다."
  },
  {
    "id": 3769,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "데이터 모델링과 트랜잭션에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "트랜잭션은 논리적 연산 단위이다.",
      "데이터 모델링에서는 업무 트랜잭션의 흐름과 데이터 정합성을 고려할 수 있다.",
      "트랜잭션은 여러 작업이 하나의 단위로 커밋될 수 있다.",
      "데이터 모델링에서는 트랜잭션을 표현하거나 고려할 수 없다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 데이터 모델링에서는 업무 트랜잭션 단위와 데이터 정합성을 고려할 수 있으므로 트랜잭션을 표현하거나 고려할 수 없다는 설명은 틀리다.\n\n**오답 풀이**\n- 1번: 트랜잭션은 데이터베이스 상태를 변화시키는 논리적 작업 단위이다.\n- 2번: 모델링 시 업무 처리 단위와 정합성을 고려한다.\n- 3번: 트랜잭션 내 여러 작업은 함께 커밋될 수 있다.\n- 4번: 트랜잭션을 고려할 수 없다는 설명은 부적절하다.\n\n**보충 개념**\n데이터 모델은 정적인 구조만이 아니라 업무 처리 중 발생하는 데이터 생성·변경 관계도 고려해야 한다. 트랜잭션 분석은 모델의 정합성과 성능 검토에 도움을 준다."
  },
  {
    "id": 3770,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "바커 표기법에서 관계선에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "엔터티 간 관계는 선으로 표현하며, 필수성·선택성 등을 함께 나타낼 수 있다.",
      "관계는 반드시 점선으로만 표현한다.",
      "관계는 반드시 화살표로만 표현한다.",
      "바커 표기법에서는 엔터티 간 관계를 표현할 수 없다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 바커 표기법에서는 엔터티 간 관계를 선으로 표현하며, 관계의 필수성·선택성 등을 함께 나타낼 수 있다.\n\n**오답 풀이**\n- 1번: 관계 표현에 대한 설명으로 가장 적절하다.\n- 2번: 반드시 점선으로만 표현하지 않는다.\n- 3번: 반드시 화살표로만 표현하지 않는다.\n- 4번: 바커 표기법은 엔터티 간 관계 표현에 사용된다.\n\n**보충 개념**\nERD 표기법은 바커 표기법, IE 표기법 등 여러 방식이 있다. 각 표기법은 관계의 선택성, 식별성, 카디널리티를 표현하는 방식이 다르다."
  },
  {
    "id": 3771,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "다음 중 데이터 제어어(DCL)에 해당하는 명령어로만 묶인 것은?",
    "choices": [
      "CREATE, ALTER",
      "INSERT, UPDATE",
      "GRANT, REVOKE",
      "COMMIT, ROLLBACK"
    ],
    "answer": 2,
    "explanation": "정답: 3. GRANT와 REVOKE는 권한을 부여하고 회수하는 데이터 제어어(DCL)이다.\n\n**오답 풀이**\n- 1번: CREATE, ALTER는 DDL이다.\n- 2번: INSERT, UPDATE는 DML이다.\n- 3번: GRANT, REVOKE는 DCL이다.\n- 4번: COMMIT, ROLLBACK은 TCL이다.\n\n**보충 개념**\nSQL 명령어는 DDL, DML, DCL, TCL로 구분한다. DCL은 사용자 권한 제어와 관련된 명령어이다."
  },
  {
    "id": 3772,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "SQL Server에서 하위 5개의 점수를 조회하되, 5번째 점수와 같은 동점자도 모두 포함하려고 한다. 가장 적절한 방법은?",
    "choices": [
      "TOP(5)만 사용하고 ORDER BY 없이 조회한다.",
      "TOP(5) WITH TIES와 ORDER BY 점수 ASC를 사용한다.",
      "TOP(5) WITH TIES와 ORDER BY 점수 DESC를 사용한다.",
      "RANK()를 사용하되 ORDER BY 없이 조회한다."
    ],
    "answer": 1,
    "explanation": "정답: 2. 하위 5개를 뽑으려면 점수를 오름차순으로 정렬하고 TOP(5) WITH TIES를 사용해 5번째와 같은 점수도 포함한다.\n\n**오답 풀이**\n- 1번: ORDER BY가 없으면 하위 기준이 명확하지 않다.\n- 2번: 하위 5개와 동점자 포함 조건에 맞다.\n- 3번: DESC는 상위 점수 기준이다.\n- 4번: RANK도 정렬 기준 없이 사용할 수 없다.\n\n**보충 개념**\nWITH TIES는 마지막으로 선택된 행과 정렬 기준 값이 같은 행을 추가로 반환한다. Top-N 문제에서는 정렬 방향이 핵심이다."
  },
  {
    "id": 3773,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "SQL 실행 결과로 가장 적절하지 않은 것은?",
    "choices": [
      "ROUND(4.875, 2) = 4.88",
      "LENGTH('KOREAN') = 6",
      "DATE_FORMAT('2022-11-02', '%Y-%m-%d') = 2022-11-02",
      "SUBSTR('Gangneung Wonju', 8, 4) = 'g Wo'"
    ],
    "answer": 3,
    "explanation": "정답: 4. 'Gangneung Wonju'에서 8번째 문자는 n이므로 8번째부터 4글자는 'ng W'이다.\n\n**오답 풀이**\n- 1번: 4.875를 소수 둘째 자리까지 반올림하면 4.88이다.\n- 2번: KOREAN은 6글자이다.\n- 3번: MySQL 기준 DATE_FORMAT 결과는 지정한 형식의 날짜 문자열이 될 수 있다.\n- 4번: SUBSTR 시작 위치 계산이 틀렸다.\n\n**보충 개념**\n문자열 함수 문제는 시작 위치가 1부터인지, 길이 인수가 몇 글자를 의미하는지 정확히 확인해야 한다."
  },
  {
    "id": 3774,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 조건을 만족하는 행의 개수로 가장 적절한 것은?\n\n**<데이터>**\n| ID | AMT | VOL |\n|---:|---:|---:|\n| 1 | 2500 | 5 |\n| 2 | 3000 | 12 |\n| 3 | 4000 | 8 |\n| 4 | 5500 | 9 |\n\n```sql\nWHERE AMT BETWEEN 3000 AND 5000\n  AND VOL <= 10\n```",
    "choices": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 0,
    "explanation": "정답: 1. AMT가 3000 이상 5000 이하이고 VOL이 10 이하인 행은 ID 3 하나이다.\n\n**오답 풀이**\n- 1번: ID 3만 조건을 만족한다.\n- 2번: ID 2는 AMT는 맞지만 VOL이 12라 제외된다.\n- 3번: ID 1과 ID 4는 AMT 범위에서 벗어난다.\n- 4번: 모든 행이 조건을 만족하지 않는다.\n\n**보충 개념**\nBETWEEN은 양 끝값을 포함한다. AND 조건은 두 조건을 모두 만족해야 TRUE가 된다."
  },
  {
    "id": 3775,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 중 결과가 NULL이 아닌 것은?",
    "choices": [
      "NULLIF('AB', 'AB')",
      "SUBSTR('ABC', 1, -1)",
      "COALESCE('AB', 'CD')",
      "NULL + 10"
    ],
    "answer": 2,
    "explanation": "정답: 3. COALESCE('AB', 'CD')는 첫 번째 NULL이 아닌 값인 'AB'를 반환한다.\n\n**오답 풀이**\n- 1번: NULLIF는 두 값이 같으면 NULL을 반환한다.\n- 2번: Oracle에서 SUBSTR 길이가 음수이면 NULL이 반환된다.\n- 3번: 첫 번째 인자가 NULL이 아니므로 'AB'가 반환된다.\n- 4번: NULL이 포함된 산술 연산 결과는 NULL이다.\n\n**보충 개념**\nCOALESCE는 여러 인자 중 첫 번째 NULL이 아닌 값을 반환한다. NVL, NULLIF, COALESCE의 반환 규칙은 자주 출제된다."
  },
  {
    "id": 3776,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 SQL의 결과로 가장 적절한 것은?\n\n**<T1>**\n| COL1 |\n|---:|\n| 1 |\n| 2 |\n| 3 |\n| 4 |\n| 5 |\n\n**<T2>**\n| COL1 |\n|---:|\n| 1 |\n| 1 |\n| 1 |\n| 3 |\n| 6 |\n\n```sql\nSELECT COUNT(*)\nFROM T1, T2\nWHERE T1.COL1 = T2.COL1;\n```",
    "choices": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "정답: 3. T1의 1은 T2의 1 세 건과 매칭되고, T1의 3은 T2의 3 한 건과 매칭되므로 총 4건이다.\n\n**오답 풀이**\n- 1번: 매칭되는 값의 종류 수만 센 값이다.\n- 2번: T2의 1 중복을 일부만 계산한 값이다.\n- 3번: 1 매칭 3건 + 3 매칭 1건 = 4건이다.\n- 4번: T2 전체 행 수와 혼동한 값이다.\n\n**보충 개념**\n조인은 값이 중복되면 중복된 조합만큼 결과 행이 늘어난다. 등가 조인의 결과 건수는 매칭되는 행 조합의 수로 계산한다."
  },
  {
    "id": 3777,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 ORDER BY 절의 의미로 가장 적절한 것은?\n\n```sql\nORDER BY 주문번호 DESC, 금액 ASC\n```",
    "choices": [
      "주문번호 오름차순 정렬 후 금액 내림차순으로 정렬한다.",
      "주문번호 내림차순 정렬 후 같은 주문번호 내에서 금액 오름차순으로 정렬한다.",
      "금액만 오름차순으로 정렬하고 주문번호는 정렬하지 않는다.",
      "주문번호와 금액을 모두 기본 오름차순으로 정렬한다."
    ],
    "answer": 1,
    "explanation": "정답: 2. `ORDER BY 주문번호 DESC, 금액 ASC`는 먼저 주문번호를 내림차순으로 정렬하고, 주문번호가 같은 행들 사이에서는 금액을 오름차순으로 정렬한다.\n\n**오답 풀이**\n- 1번: 주문번호와 금액의 정렬 방향이 반대이다.\n- 2번: 제시된 ORDER BY 절의 의미와 일치한다.\n- 3번: 주문번호도 정렬 기준에 포함된다.\n- 4번: 주문번호에는 DESC가 명시되어 있으므로 기본 오름차순이 아니다.\n\n**보충 개념**\nORDER BY에서 각 정렬 기준은 왼쪽부터 우선 적용된다. ASC는 오름차순, DESC는 내림차순이며 ASC는 생략 가능하다."
  },
  {
    "id": 3778,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "학생 테이블을 생성하면서 학과 테이블을 참조하는 외래키를 설정하려고 한다. 다음 설명 중 옳지 않은 것은?",
    "choices": [
      "학생 테이블의 학과번호는 학과 테이블의 학과번호를 참조할 수 있다.",
      "외래키 컬럼에 DEFAULT 값이 지정되어 있으면 값을 생략했을 때 기본값이 입력될 수 있다.",
      "DEFAULT 값이 지정된 컬럼은 값을 생략하면 무조건 NULL이 입력된다.",
      "외래키 값은 부모 테이블에 존재하는 값이어야 한다."
    ],
    "answer": 2,
    "explanation": "정답: 3. DEFAULT 값이 지정되어 있으면 값을 생략했을 때 NULL이 아니라 기본값이 입력될 수 있다.\n\n**오답 풀이**\n- 1번: 학생의 학과번호가 학과 테이블을 참조하는 구조는 일반적이다.\n- 2번: DEFAULT는 명시 값을 생략했을 때 적용될 수 있다.\n- 3번: DEFAULT가 있으면 무조건 NULL이 입력된다는 설명은 틀리다.\n- 4번: 외래키는 참조 무결성을 만족해야 한다.\n\n**보충 개념**\nDEFAULT는 INSERT 시 해당 컬럼 값을 생략하면 적용되는 기본값이다. 단, 명시적으로 NULL을 입력하면 DEFAULT가 적용되지 않을 수 있다."
  },
  {
    "id": 3779,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "SAL 값을 기준으로 상위 3순위까지 조회하되, 동일 순위의 여러 행을 모두 포함하려고 한다. 가장 적절한 분석 함수는?",
    "choices": [
      "ROW_NUMBER",
      "DENSE_RANK",
      "COUNT",
      "NTILE"
    ],
    "answer": 1,
    "explanation": "정답: 2. 동일한 SAL 값에 같은 순위를 부여하고 3순위까지 포함하려면 DENSE_RANK를 사용할 수 있다.\n\n**오답 풀이**\n- 1번: ROW_NUMBER는 동점자도 서로 다른 번호를 부여한다.\n- 2번: DENSE_RANK는 동점자를 같은 순위로 처리하고 다음 순위를 건너뛰지 않는다.\n- 3번: COUNT는 순위 함수가 아니다.\n- 4번: NTILE은 행을 지정한 개수의 그룹으로 나눈다.\n\n**보충 개념**\n동순위를 포함한 Top-N 문제에서는 RANK 또는 DENSE_RANK를 고려한다. 순위 간 공백을 원하지 않으면 DENSE_RANK가 적절하다."
  },
  {
    "id": 3780,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "주문월이 '201001'인 데이터만 존재하는 테이블에서 다음 조건을 사용했을 때 결과로 가장 적절한 것은?\n\n```sql\nSELECT *\nFROM 주문\nWHERE 주문월 = '201010';\n```",
    "choices": [
      "NULL 1행이 반환된다.",
      "0이 반환된다.",
      "공집합이 반환된다.",
      "오류가 발생한다."
    ],
    "answer": 2,
    "explanation": "정답: 3. WHERE 조건을 만족하는 행이 없으면 SELECT 결과는 행이 없는 공집합이다.\n\n**오답 풀이**\n- 1번: 조건 불일치 시 NULL 행이 자동 생성되지 않는다.\n- 2번: SELECT *는 COUNT가 아니므로 0이라는 값이 반환되지 않는다.\n- 3번: 조건을 만족하는 행이 없으므로 공집합이다.\n- 4번: 단순 비교 조건이므로 오류가 아니다.\n\n**보충 개념**\nSELECT * 조회에서 조건에 맞는 행이 없으면 결과 행이 없다. COUNT(*)를 사용하면 조건 만족 행 수인 0이 반환된다."
  },
  {
    "id": 3781,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "사원 테이블을 셀프 조인하여 사원명과 매니저명을 조회하려고 한다. 매니저가 없는 사원은 '사장'으로 출력하는 표현식으로 가장 적절한 것은?",
    "choices": [
      "COALESCE(매니저명, '사장')",
      "NULLIF(매니저명, '사장')",
      "COALESCE(NULL, 사장)",
      "매니저명 = NULL"
    ],
    "answer": 0,
    "explanation": "정답: 1. 매니저명이 NULL이면 '사장'을 출력하려면 COALESCE(매니저명, '사장')을 사용한다.\n\n**오답 풀이**\n- 1번: 첫 번째 NULL이 아닌 값을 반환하므로 적절하다.\n- 2번: NULLIF는 두 값이 같으면 NULL을 반환하는 함수이다.\n- 3번: 문자열 리터럴 표기가 없고 매니저명 값을 고려하지 않는다.\n- 4번: NULL 비교는 = NULL이 아니라 IS NULL을 사용해야 한다.\n\n**보충 개념**\n셀프 조인은 같은 테이블을 서로 다른 별칭으로 참조해 계층 관계를 표현할 때 사용한다. 상위 값이 없을 때는 COALESCE나 NVL로 대체 값을 출력할 수 있다."
  },
  {
    "id": 3782,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "DDL",
    "question": "DELETE, TRUNCATE, DROP 명령어에 대한 설명으로 가장 적절하지 않은 것은?",
    "choices": [
      "특정 테이블에 대하여 WHERE 조건절이 없는 DELETE 명령을 수행하면 DROP TABLE 명령을 수행했을 때와 똑같은 결과를 얻을 수 있다.",
      "DROP 명령어는 테이블 정의 자체를 삭제하고, TRUNCATE 명령어는 테이블을 초기 상태로 만든다.",
      "TRUNCATE 명령어는 UNDO를 위한 데이터를 적게 생성하므로 동일 데이터량 삭제 시 DELETE보다 빠를 수 있다.",
      "DROP과 TRUNCATE는 일반적으로 Auto Commit되고, DELETE는 사용자 Commit으로 수행된다."
    ],
    "answer": 0,
    "explanation": "정답: 1. WHERE 없는 DELETE는 모든 행을 삭제하지만 테이블 구조는 남고, DROP TABLE은 테이블 정의 자체를 삭제하므로 결과가 같지 않다.\n\n**오답 풀이**\n- 1번: DELETE와 DROP의 결과를 같다고 했으므로 틀렸다.\n- 2번: DROP과 TRUNCATE의 차이를 적절히 설명한다.\n- 3번: TRUNCATE는 대량 삭제 시 DELETE보다 빠른 경우가 많다.\n- 4번: DDL 성격의 DROP/TRUNCATE와 DML인 DELETE의 트랜잭션 처리 차이를 설명한다.\n\n**보충 개념**\nDELETE는 행 삭제, TRUNCATE는 테이블 데이터 초기화, DROP은 객체 삭제이다. 세 명령어는 롤백 가능성과 구조 유지 여부가 다르다."
  },
  {
    "id": 3783,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 실행 결과로 가장 적절한 것은?\n\n```sql\nSELECT LTRIM('aaaabcd', 'a') AS RESULT\nFROM DUAL;\n```",
    "choices": [
      "abcd",
      "aaaabcd",
      "bcd",
      "NULL"
    ],
    "answer": 2,
    "explanation": "정답: 3. LTRIM('aaaabcd', 'a')는 문자열 왼쪽에서 문자 a를 반복적으로 제거한다. 'aaaabcd'의 왼쪽 a들이 모두 제거되므로 결과는 'bcd'이다.\n\n**오답 풀이**\n- 1번: 왼쪽 a가 모두 제거되므로 'abcd'가 아니라 'bcd'이다.\n- 2번: 왼쪽 제거가 수행되지 않은 결과이다.\n- 3번: 왼쪽의 a 네 개가 제거된 올바른 결과이다.\n- 4번: 제거 후 남는 문자열이 있으므로 NULL이 아니다.\n\n**보충 개념**\nLTRIM(char, set)은 문자열 왼쪽부터 set에 포함된 문자를 제거한다. 지정 문자가 아닌 문자를 만나면 제거를 멈춘다."
  },
  {
    "id": 3784,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 조건과 동일한 의미로 가장 적절한 것은?\n\n```sql\nWHERE (COL1, COL2) IN ((1, 3), (1, 4))\n```",
    "choices": [
      "WHERE COL1 = 1 AND COL2 IN (3, 4)",
      "WHERE COL1 IN (1, 3) AND COL2 IN (1, 4)",
      "WHERE COL1 = 3 AND COL2 = 4",
      "WHERE COL1 = 1 OR COL2 IN (3, 4)"
    ],
    "answer": 0,
    "explanation": "정답: 1. (COL1, COL2)가 (1,3) 또는 (1,4)인 경우이므로 COL1 = 1이고 COL2가 3 또는 4인 조건과 같다.\n\n**오답 풀이**\n- 1번: 두 튜플 조건을 정확히 단순화한 표현이다.\n- 2번: 원하지 않는 조합까지 포함할 수 있다.\n- 3번: 튜플 조건과 전혀 다르다.\n- 4번: OR 때문에 COL1이 1인 모든 행 또는 COL2가 3,4인 모든 행을 포함할 수 있다.\n\n**보충 개념**\n다중 컬럼 IN은 컬럼 조합 단위로 비교한다. 각 컬럼별 IN 조건으로 무조건 분해하면 잘못된 조합이 포함될 수 있다."
  },
  {
    "id": 3785,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "소수점 처리 함수에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "FLOOR는 주어진 수보다 작거나 같은 가장 큰 정수를 반환한다.",
      "TRUNC는 지정한 자리에서 값을 버림 처리할 수 있다.",
      "ROUND는 지정한 자리에서 반올림한다.",
      "CEIL은 소수점 이하를 내림 처리한다."
    ],
    "answer": 3,
    "explanation": "정답: 4. CEIL은 주어진 수보다 크거나 같은 가장 작은 정수를 반환하는 올림 함수이다.\n\n**오답 풀이**\n- 1번: FLOOR는 내림에 해당한다.\n- 2번: TRUNC는 지정 자리 이하를 버림 처리한다.\n- 3번: ROUND는 반올림 함수이다.\n- 4번: CEIL을 내림이라고 한 설명은 틀리다.\n\n**보충 개념**\n숫자 함수에서 CEIL은 올림, FLOOR는 내림, ROUND는 반올림, TRUNC는 버림을 의미한다."
  },
  {
    "id": 3786,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUP BY",
    "question": "다음 SQL에서 오류가 발생하는 원인으로 가장 적절한 것은?\n\n```sql\nSELECT ID, SUM(SAL)\nFROM EMP\nWHERE ID = (SELECT ID FROM A WHERE 조건 = 'Y')\nGROUP BY ID\nHAVING SUM(SAL) > 5000;\n```\n\n**<조건>**\n서브쿼리 `(SELECT ID FROM A WHERE 조건 = 'Y')`는 여러 행을 반환할 수 있다.",
    "choices": [
      "SELECT 절에서 SUM(SAL)을 사용했기 때문이다.",
      "= 연산자에 사용된 서브쿼리가 여러 행을 반환할 수 있기 때문이다.",
      "GROUP BY ID를 사용했기 때문이다.",
      "HAVING SUM(SAL) > 5000을 사용했기 때문이다."
    ],
    "answer": 1,
    "explanation": "정답: 2. = 연산자는 단일 값을 기대하므로 서브쿼리가 여러 행을 반환하면 단일 행 서브쿼리 오류가 발생할 수 있다.\n\n**오답 풀이**\n- 1번: GROUP BY ID와 함께 SUM(SAL)을 사용하는 것은 가능하다.\n- 2번: 다중 행 서브쿼리를 =로 비교하는 것이 오류 원인이다.\n- 3번: GROUP BY ID 자체는 오류가 아니다.\n- 4번: HAVING 절에서 집계 함수 조건을 사용하는 것은 가능하다.\n\n**보충 개념**\n서브쿼리 결과가 여러 행이면 = 대신 IN, ANY, ALL 등을 사용해야 한다. WHERE 절에는 집계 함수를 직접 사용할 수 없다는 별도 유형도 자주 출제된다."
  },
  {
    "id": 3787,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "테이블 별칭을 사용한 SQL 문장으로 적절하지 않은 것은?",
    "choices": [
      "SELECT A.C1 FROM U1.T1 A",
      "SELECT A.C1 FROM U1.T1 A WHERE A.C2 = 10",
      "SELECT U1.T1.C1 FROM U1.T1 A",
      "SELECT C1 FROM U1.T1 A"
    ],
    "answer": 2,
    "explanation": "정답: 3. 테이블에 별칭 A를 부여하면 해당 쿼리 블록에서는 원래 테이블명 대신 별칭을 사용해야 한다.\n\n**오답 풀이**\n- 1번: 별칭 A를 통해 컬럼을 참조하므로 적절하다.\n- 2번: WHERE 절에서도 별칭을 사용할 수 있다.\n- 3번: 별칭을 부여한 뒤 원래 전체 테이블명으로 참조하는 것은 부적절하다.\n- 4번: 컬럼명이 모호하지 않다면 별칭 없이 컬럼명만 쓸 수 있다.\n\n**보충 개념**\n테이블 별칭은 긴 테이블명을 간단히 쓰고 셀프 조인이나 다중 테이블 조인에서 컬럼 소속을 명확히 하기 위해 사용한다."
  },
  {
    "id": 3788,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "JOIN",
    "question": "NATURAL JOIN에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "동일 이름 컬럼이 여러 개 존재하여 의도하지 않은 조인 조건이 만들어지면 예상과 다른 결과가 발생할 수 있다.",
      "NATURAL JOIN은 데이터와 무관하게 항상 일정한 행 수를 반환한다.",
      "공통 컬럼이 없어도 두 테이블의 모든 행을 조인한다.",
      "NATURAL JOIN은 항상 두 테이블 행 수의 곱(데카르트 곱)을 반환한다."
    ],
    "answer": 0,
    "explanation": "NATURAL JOIN은 두 테이블에서 이름이 같은 모든 컬럼을 자동으로 등가 조인 조건으로 사용한다. \n의미가 다른데 이름만 같은 컬럼이 섞이면 의도치 않은 조건이 걸려 결과가 달라질 수 있으므로 \n①이 정답이다. \n② 반환 행 수는 공통 컬럼의 매칭 데이터에 따라 달라지므로 고정값이 아니다. \n③ 공통 컬럼이 없을 때 모든 행을 조합하는 것은 CROSS JOIN이며, NATURAL JOIN의 동작이 아니다. \n④ 행 수의 곱(데카르트 곱)을 만드는 것은 CROSS JOIN이다."
  },
  {
    "id": 3789,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "고객 등급을 우선순위에 따라 VVIP, VIP 순서로 정렬하려고 한다. 가장 적절한 ORDER BY 표현은?",
    "choices": [
      "ORDER BY CASE 등급 WHEN 'VVIP' THEN 1 WHEN 'VIP' THEN 2 ELSE 3 END",
      "ORDER BY 등급 ASC",
      "ORDER BY 등급 DESC",
      "ORDER BY CASE 등급 WHEN 'VIP' THEN 1 WHEN 'VVIP' THEN 2 ELSE 3 END"
    ],
    "answer": 0,
    "explanation": "정답: 1. VVIP를 1, VIP를 2로 매핑하면 VVIP가 VIP보다 먼저 정렬된다.\n\n**오답 풀이**\n- 1번: 원하는 사용자 정의 정렬 순서를 정확히 표현한다.\n- 2번: 문자열 오름차순은 업무 우선순서와 다를 수 있다.\n- 3번: 문자열 내림차순도 업무 우선순서와 다를 수 있다.\n- 4번: VIP가 VVIP보다 먼저 정렬된다.\n\n**보충 개념**\n업무상 정렬 순서가 문자 순서와 다를 때는 CASE 표현식을 ORDER BY에 사용한다. 등급, 상태값, 우선순위 정렬에서 자주 활용된다."
  },
  {
    "id": 3790,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 조건을 만족하는 값으로 가장 적절한 것은?\n\n```sql\nWHERE COL <= ALL (50, 15)\n```\n\n**<데이터>**\n| COL |\n|---:|\n| 10 |\n| 12 |\n| 15 |\n| 20 |\n| 50 |",
    "choices": [
      "10, 12, 15",
      "20, 50",
      "10, 12, 15, 20, 50",
      "50"
    ],
    "answer": 0,
    "explanation": "정답: 1. COL <= ALL(50, 15)는 COL이 50 이하이면서 동시에 15 이하이어야 하므로 결국 COL <= 15와 같다.\n\n**오답 풀이**\n- 1번: 15 이하인 10, 12, 15가 조건을 만족한다.\n- 2번: 20과 50은 15 이하 조건을 만족하지 않는다.\n- 3번: 모든 값이 조건을 만족하지 않는다.\n- 4번: 50은 15 이하가 아니므로 제외된다.\n\n**보충 개념**\nALL은 목록의 모든 값에 대해 조건이 참이어야 한다. `<= ALL`은 목록의 최솟값 이하인 조건과 같은 의미가 된다."
  },
  {
    "id": 3791,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "명절 선물을 받지 못한 회원을 찾기 위해, 전체 회원 집합에서 선물을 받은 회원 집합을 제외하려고 한다. 가장 적절한 집합 연산자는?",
    "choices": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "MINUS"
    ],
    "answer": 3,
    "explanation": "정답: 4. 전체 회원에서 선물을 받은 회원을 제외하려면 차집합 연산인 MINUS를 사용할 수 있다.\n\n**오답 풀이**\n- 1번: UNION은 합집합이다.\n- 2번: UNION ALL은 중복을 포함한 합집합이다.\n- 3번: INTERSECT는 교집합이다.\n- 4번: MINUS는 차집합으로 문제 목적에 맞다.\n\n**보충 개념**\nOracle에서는 차집합 연산자로 MINUS를 사용한다. 일부 DBMS에서는 EXCEPT라는 명칭을 사용한다."
  },
  {
    "id": 3792,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "집합 연산자에 대한 설명으로 가장 적절하지 않은 것은?",
    "choices": [
      "UNION 연산자는 합집합 결과에서 중복된 행을 하나의 행으로 만든다.",
      "UNION ALL 연산자는 집합 간의 결과가 중복되지 않는 경우 UNION과 결과가 동일하다.",
      "INTERSECT 연산자는 두 집합의 교집합을 반환하며 중복 행을 제거한다.",
      "UNION 연산자를 사용한 SQL은 각각의 집합에 ORDER BY 절을 사용할 수 있다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 집합 연산자를 사용할 때 ORDER BY는 일반적으로 전체 결과에 대해 마지막에 한 번만 사용할 수 있다.\n\n**오답 풀이**\n- 1번: UNION은 중복을 제거한다.\n- 2번: 중복이 없다면 UNION과 UNION ALL의 결과는 동일할 수 있다.\n- 4번: 각 집합마다 ORDER BY를 자유롭게 사용할 수 있다는 설명은 부적절하다.\n\n**보충 개념**\n집합 연산에서는 각 SELECT 문의 컬럼 개수와 데이터 타입 호환성이 중요하다. 최종 정렬은 집합 연산 전체 결과에 대해 ORDER BY를 적용한다."
  },
  {
    "id": 3793,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "GROUP BY",
    "question": "다음 SQL 문장에서 오류가 발생하는 원인으로 가장 적절한 것은?\n\n```sql\nSELECT DEPTNO, SUM(SAL)\nFROM EMP\nGROUP BY DEPTNO, SUM(SAL);\n```",
    "choices": [
      "SELECT 절에 일반 컬럼(DEPTNO)과 집계 함수(SUM)를 함께 사용했기 때문이다.",
      "SUM 함수의 인자로 단일 컬럼(SAL)만 지정해서 집계 대상이 모호하기 때문이다.",
      "GROUP BY 절에 집계 함수(SUM)를 사용했기 때문이다.",
      "ORDER BY 절 없이 집계 함수를 사용하면 정렬 기준이 없어 오류가 나기 때문이다."
    ],
    "answer": 2,
    "explanation": "정답: ③\n\n해설\n이 SQL은 GROUP BY 절에 SUM(SAL)과 같은 집계 함수를 사용했기 때문에 오류가 발생한다.\n\nGROUP BY 절은 집계하기 전에 데이터를 어떤 기준으로 묶을지 지정하는 절이다. 따라서 DEPTNO처럼 그룹화 기준이 되는 컬럼이나 일반 표현식은 사용할 수 있지만, SUM(SAL)처럼 그룹이 만들어진 뒤 계산되는 집계 함수는 GROUP BY 절에 직접 사용할 수 없다.\n\n따라서 오류 원인은 GROUP BY 절에 집계 함수를 사용한 것이므로 정답은 ③이다.\n\n오답 풀이\n\n① 일반 컬럼과 집계 함수를 함께 사용하는 것 자체가 항상 오류는 아니다. 예를 들어 GROUP BY DEPTNO처럼 일반 컬럼이 그룹화 기준에 포함되어 있으면 정상적으로 사용할 수 있다.\n\n② SUM(SAL)처럼 SUM 함수의 인자로 단일 컬럼을 지정하는 것은 정상적인 사용법이다.\n\n④ ORDER BY 절은 집계 함수 사용의 필수 조건이 아니다. 정렬 없이도 집계 함수는 사용할 수 있다.\n\n보충 개념\n집계 결과에 조건을 걸고 싶을 때는 WHERE 절이 아니라 HAVING 절을 사용한다.\n\nSELECT DEPTNO, SUM(SAL)\nFROM EMP\nGROUP BY DEPTNO\nHAVING SUM(SAL) > 5000;"
  },
  {
    "id": 3794,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUP BY",
    "question": "GROUP BY 확장 기능에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "ROLLUP은 시간이나 지역처럼 계층적 구조의 소계를 구할 때 유용하다.",
      "CUBE는 가능한 모든 조합의 소계를 생성한다.",
      "GROUPING SETS는 원하는 그룹 조합을 선택해서 표현할 수 있다.",
      "GROUP BY 확장 기능을 사용하면 결과를 정렬할 수 없다."
    ],
    "answer": 3,
    "explanation": "정답: 4. GROUP BY 확장 기능을 사용해도 ORDER BY 등을 통해 결과 정렬이 가능하다.\n\n**오답 풀이**\n- 1번: ROLLUP은 계층적 소계에 적합하다.\n- 2번: CUBE는 모든 조합의 소계를 만든다.\n- 3번: GROUPING SETS는 필요한 그룹 집합을 명시적으로 지정한다.\n- 4번: 정렬할 수 없다는 설명은 틀리다.\n\n**보충 개념**\nROLLUP, CUBE, GROUPING SETS는 소계와 총계 생성을 위한 GROUP BY 확장 기능이다. 소계 행 식별에는 GROUPING 함수를 사용할 수 있다."
  },
  {
    "id": 3795,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "JOIN",
    "question": "두 테이블을 CROSS JOIN했을 때 결과 행 수로 가장 적절한 것은?\n\n**<조건>**\n- T1 테이블 행 수: 3건\n- T2 테이블 행 수: 5건",
    "choices": [
      "3개",
      "5개",
      "8개",
      "15개"
    ],
    "answer": 3,
    "explanation": "정답: 4. CROSS JOIN은 두 테이블의 모든 조합을 생성하므로 3 × 5 = 15건이 된다.\n\n**오답 풀이**\n- 1번: 왼쪽 테이블 행 수만 센 값이다.\n- 2번: 오른쪽 테이블 행 수만 센 값이다.\n- 3번: 두 테이블 행 수를 더한 값이다.\n- 4번: 모든 조합 수를 계산한 값이다.\n\n**보충 개념**\nCROSS JOIN은 카테시안 곱을 생성한다. 조인 조건 누락으로 의도치 않게 발생하면 결과 건수가 급격히 증가할 수 있다."
  },
  {
    "id": 3796,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "SAL 기준 상위 5건을 조회하는 SQL로 가장 적절한 것은?",
    "choices": [
      "SELECT * FROM EMP WHERE ROWNUM <= 5 ORDER BY SAL DESC",
      "SELECT * FROM EMP WHERE ROWNUM = 5 ORDER BY SAL DESC",
      "SELECT * FROM EMP WHERE ROWNUM <= 5",
      "SELECT * FROM EMP ORDER BY SAL DESC FETCH FIRST 5 ROWS ONLY"
    ],
    "answer": 3,
    "explanation": "정답: 4. SAL 기준으로 정렬한 뒤 FETCH FIRST 5 ROWS ONLY를 사용하면 상위 5건을 조회할 수 있다.\n\n**오답 풀이**\n- 1번: Oracle에서 ROWNUM이 정렬 전에 부여될 수 있어 정확한 상위 5건 보장이 어렵다.\n- 2번: ROWNUM = 5 조건은 일반적으로 의도한 결과를 반환하지 못한다.\n- 3번: 정렬 기준 없이 5건만 조회한다.\n- 4번: 정렬 후 행 제한이 적용되는 명확한 방식이다.\n\n**보충 개념**\nTop-N 쿼리는 정렬 후 제한이 중요하다. Oracle 12c 이상에서는 FETCH FIRST 구문을 사용할 수 있다."
  },
  {
    "id": 3797,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 UNPIVOT 결과에 포함되는 AMOUNT_TYPE 값으로 가장 적절한 것은?\n\n**<원본>**\n| ID | AMOUNT1 | AMOUNT2 | AMOUNT3 |\n|---:|---:|---:|---:|\n| 1 | 10 | 20 | 30 |\n\n```sql\nSELECT ID, AMOUNT_TYPE, AMOUNT\nFROM T\nUNPIVOT (\n  AMOUNT FOR AMOUNT_TYPE IN (AMOUNT3, AMOUNT2, AMOUNT1)\n);\n```",
    "choices": [
      "AMOUNT1만 포함된다.",
      "AMOUNT3, AMOUNT2, AMOUNT1이 포함된다.",
      "AMOUNT2만 포함된다.",
      "모든 AMOUNT 값이 NULL로 출력된다."
    ],
    "answer": 1,
    "explanation": "정답: 2. UNPIVOT은 IN 목록에 지정된 여러 컬럼을 행으로 변환한다. 따라서 AMOUNT3, AMOUNT2, AMOUNT1이 AMOUNT_TYPE 값으로 포함된다.\n\n**오답 풀이**\n- 1번: AMOUNT1 하나만 변환되는 것이 아니다.\n- 2번: IN 목록에 지정된 세 컬럼이 모두 행으로 변환된다.\n- 3번: AMOUNT2 하나만 변환되는 것이 아니다.\n- 4번: 원본 값이 10, 20, 30으로 존재하므로 모두 NULL이 아니다.\n\n**보충 개념**\nUNPIVOT은 여러 컬럼을 행으로 변환한다. 결과 행의 출력 순서가 중요하면 ORDER BY를 별도로 작성해야 한다."
  },
  {
    "id": 3798,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "정규화",
    "question": "다음 중 이메일 형식을 찾는 정규표현식으로 적절하지 않은 것은?",
    "choices": [
      "REGEXP_SUBSTR(email, '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}')",
      "REGEXP_SUBSTR(email, '[[:alnum:]._%+-]+@[[:alnum:].-]+\\.[[:alpha:]]{2,}')",
      "REGEXP_SUBSTR(email, '[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+')",
      "REGEXP_SUBSTR(email, '[^@]+@[^@]+\\.[^@]+')"
    ],
    "answer": 2,
    "explanation": "정답: 3. 이메일 도메인 뒤에 점(.)과 최상위 도메인을 확인하는 부분이 없어 이메일 형식 검증으로 부적절하다.\n\n**오답 풀이**\n- 1번: 일반적인 이메일 패턴에 가깝다.\n- 2번: POSIX 문자 클래스를 사용한 이메일 패턴이다.\n- 3번: @ 뒤에 점(.)과 최상위 도메인을 요구하지 않아 부적절하다.\n- 4번: 단순하지만 @ 뒤 점을 요구한다.\n\n**보충 개념**\n정규표현식에서 `\\.`은 문자 그대로의 점을 의미한다. 이메일 검증은 복잡할 수 있으므로 시험에서는 제시된 패턴의 핵심 누락 여부를 확인한다."
  },
  {
    "id": 3799,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 SQL의 실행 결과로 가장 적절한 것은?\n\n```sql\nSELECT REGEXP_SUBSTR('aabbc', 'a*b+c') AS R1,\n       REGEXP_SUBSTR('abbc', 'a*b+c') AS R2\nFROM DUAL;\n```",
    "choices": [
      "aabbc, abbc",
      "abbc, aabbc",
      "NULL, abbc",
      "aabbc, NULL"
    ],
    "answer": 0,
    "explanation": "정답: 1. `a*`는 a가 0회 이상, `b+`는 b가 1회 이상 반복됨을 의미하므로 aabbc와 abbc가 각각 매칭된다.\n\n**오답 풀이**\n- 1번: 두 문자열 모두 패턴에 매칭된다.\n- 2번: 결과 순서가 반대이다.\n- 3번: aabbc도 패턴에 매칭된다.\n- 4번: abbc도 패턴에 매칭된다.\n\n**보충 개념**\n정규표현식에서 `*`는 0회 이상 반복, `+`는 1회 이상 반복을 의미한다. 패턴 전체가 문자열 일부와 매칭되면 REGEXP_SUBSTR은 해당 부분 문자열을 반환한다."
  },
  {
    "id": 3800,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "다음 윈도우 함수에서 VAL이 100인 행의 합계로 가장 적절한 것은?\n\n**<데이터>**\n| ID | VAL |\n|---:|---:|\n| 1 | 50 |\n| 2 | 100 |\n| 3 | 150 |\n\n```sql\nSELECT ID, VAL,\n       SUM(VAL) OVER(\n         ORDER BY VAL\n         ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING\n       ) AS SUM_VAL\nFROM T;\n```",
    "choices": [
      "50",
      "100",
      "150",
      "300"
    ],
    "answer": 3,
    "explanation": "정답: 4. VAL이 100인 현재 행을 기준으로 이전 1행 50, 현재 행 100, 다음 1행 150이 포함되어 합계는 300이다.\n\n**오답 풀이**\n- 1번: 이전 행만 계산한 값이다.\n- 2번: 현재 행만 계산한 값이다.\n- 3번: 다음 행만 계산한 값이다.\n- 4번: 이전, 현재, 다음 행을 모두 합산한 값이다.\n\n**보충 개념**\nROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING은 현재 행 기준 앞뒤 1행씩 포함하는 물리적 프레임이다."
  },
  {
    "id": 3801,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "계층형 쿼리에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "ORDER SIBLINGS BY는 같은 부모를 가진 형제 노드 간 정렬에 사용할 수 있다.",
      "NOCYCLE은 순환 구조로 인한 무한 탐색을 방지하는 데 사용할 수 있다.",
      "CONNECT BY는 계층 구조의 부모-자식 관계를 지정한다.",
      "WHERE 절은 CONNECT BY 수행 전에 항상 계층 자체를 완전히 차단한다."
    ],
    "answer": 3,
    "explanation": "정답: 4. WHERE 절은 계층 전개 후 결과 행을 필터링하는 방식으로 작동할 수 있으므로 항상 CONNECT BY 전에 계층 자체를 차단한다고 볼 수 없다.\n\n**오답 풀이**\n- 1번: 형제 노드 정렬에 ORDER SIBLINGS BY를 사용할 수 있다.\n- 2번: NOCYCLE은 순환 참조 방지에 사용된다.\n- 3번: CONNECT BY는 계층 관계를 정의한다.\n- 4번: WHERE 절의 계층형 쿼리 처리에 대한 설명이 지나치게 단정적이다.\n\n**보충 개념**\n계층형 쿼리에서는 START WITH, CONNECT BY, PRIOR, NOCYCLE, ORDER SIBLINGS BY의 의미를 구분해야 한다."
  },
  {
    "id": 3802,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 실행 결과로 가장 적절한 것은?\n\n**<데이터>**\n| COL1 |\n|---|\n| '10' |\n| '90' |\n| '100' |\n\n```sql\nSELECT TO_NUMBER(MIN(COL1)) + TO_NUMBER(MAX(COL1)) AS RESULT\nFROM T;\n```\n\n**<조건>**\nCOL1은 문자형 컬럼이다.",
    "choices": [
      "100",
      "110",
      "190",
      "1010"
    ],
    "answer": 0,
    "explanation": "정답: 1. 문자형 기준 정렬에서 MIN은 '10', MAX는 '90'이므로 숫자로 변환해 더하면 100이다.\n\n**오답 풀이**\n- 1번: 문자형 MIN/MAX 결과를 숫자로 변환해 더한 값이다.\n- 2번: 숫자형 최솟값 10과 최댓값 100을 더한 값과 혼동했다.\n- 3번: 90과 100을 더한 값이다.\n- 4번: 문자열 결합과 혼동한 값이다.\n\n**보충 개념**\n문자형 컬럼의 MIN/MAX는 숫자 크기가 아니라 문자 정렬 순서 기준으로 결정된다. 숫자 비교가 필요하면 명시적 형 변환이 필요하다."
  },
  {
    "id": 3803,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "이름이 n으로 끝나는 회원을 찾는 LIKE 조건으로 가장 적절한 것은?",
    "choices": [
      "WHERE NAME LIKE 'n%'",
      "WHERE NAME LIKE '%n'",
      "WHERE NAME LIKE '%n%'",
      "WHERE NAME LIKE '_n'"
    ],
    "answer": 1,
    "explanation": "정답: 2. `%n`은 임의의 문자열 뒤 마지막 문자가 n인 값을 찾는다.\n\n**오답 풀이**\n- 1번: n으로 시작하는 값을 찾는다.\n- 2번: n으로 끝나는 값을 찾는다.\n- 3번: n을 포함하는 모든 값을 찾는다.\n- 4번: 두 글자이고 두 번째 글자가 n인 값을 찾는다.\n\n**보충 개념**\nLIKE에서 `%`는 0개 이상의 임의 문자열, `_`는 정확히 한 글자를 의미한다. 끝 글자 조건은 `%문자` 형식으로 작성한다."
  },
  {
    "id": 3804,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "테이블 구조 변경에 대한 설명으로 틀린 것은?",
    "choices": [
      "기존 데이터가 있으면 컬럼 사이즈 축소 시 제한이 있을 수 있다.",
      "NULL만 입력된 컬럼은 경우에 따라 컬럼 사이즈 축소가 가능할 수 있다.",
      "DEFAULT 값을 변경하면 변경 이후 입력되는 데이터부터 새 기본값이 적용된다.",
      "DEFAULT 값을 변경하면 기존에 저장된 모든 데이터 값도 자동으로 새 기본값으로 변경된다."
    ],
    "answer": 3,
    "explanation": "정답: 4. DEFAULT 변경은 일반적으로 이후 INSERT에서 값이 생략된 경우에 적용되며, 기존 저장 데이터가 자동으로 변경되지는 않는다.\n\n**오답 풀이**\n- 1번: 기존 값이 줄이려는 크기를 초과하면 축소가 제한될 수 있다.\n- 2번: 실제 저장값이 제한에 걸리지 않으면 축소가 가능할 수 있다.\n- 3번: DEFAULT 변경은 이후 입력 데이터에 영향을 준다.\n- 4번: 기존 데이터가 자동 변경된다는 설명은 틀리다.\n\n**보충 개념**\nALTER TABLE로 컬럼 정의를 변경할 때 기존 데이터와 제약조건에 따라 허용 여부가 달라질 수 있다. DEFAULT는 저장된 값을 소급 변경하지 않는다."
  },
  {
    "id": 3805,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "DDL",
    "question": "아래 테이블에 대한 INSERT 문 중 오류가 발생하는 것은?\n\n```sql\nCREATE TABLE TEST45 (\n  COL1 NUMBER,\n  COL2 NUMBER,\n  COL3 NUMBER,\n  COL4 NUMBER\n);\n```",
    "choices": [
      "INSERT INTO TEST45 VALUES(1, 2, 3)",
      "INSERT INTO TEST45 VALUES(1, 2, 3, 4)",
      "INSERT INTO TEST45 (COL1, COL2, COL3) VALUES(1, 2, 3)",
      "INSERT INTO TEST45 (COL1, COL2, COL3, COL4) VALUES(1, 2, 3, 4)"
    ],
    "answer": 0,
    "explanation": "정답: 1. 컬럼 목록을 생략한 INSERT는 테이블의 전체 컬럼 수와 VALUES 값의 개수가 일치해야 하므로 3개 값만 넣으면 오류가 발생한다.\n\n**오답 풀이**\n- 1번: 컬럼은 4개인데 값은 3개이므로 오류가 발생한다.\n- 2번: 전체 4개 컬럼에 4개 값을 넣으므로 가능하다.\n- 3번: 컬럼 목록을 3개로 명시했으므로 3개 값을 넣을 수 있다.\n- 4번: 컬럼 4개와 값 4개가 일치한다.\n\n**보충 개념**\nINSERT에서 컬럼 목록을 생략하면 테이블 정의 순서대로 모든 컬럼에 값을 제공해야 한다. 일부 컬럼만 입력하려면 컬럼 목록을 명시해야 한다."
  },
  {
    "id": 3806,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "다음 세 테이블을 모두 등가 조인했을 때 결과 행 수로 가장 적절한 것은?\n\n**<T1>**\n| C1 | C2 | C3 |\n|---:|---:|---:|\n| 1 | 2 | 3 |\n\n**<T2>**\n| C1 | C2 | C3 |\n|---:|---:|---|\n| 1 | 2 | NULL |\n\n**<T3>**\n| C1 | C2 | C3 |\n|---:|---|---|\n| 1 | NULL | NULL |\n\n```sql\nSELECT COUNT(*)\nFROM T1, T2, T3\nWHERE T1.C1 = T2.C1\n  AND T2.C1 = T3.C1;\n```",
    "choices": [
      "0개",
      "1개",
      "2개",
      "3개"
    ],
    "answer": 1,
    "explanation": "정답: 2. 조인 조건이 C1만 비교하므로 세 테이블 모두 C1=1로 매칭되어 결과는 1건이다.\n\n**오답 풀이**\n- 1번: C1 값이 모두 1이므로 매칭 행이 존재한다.\n- 2번: 각 테이블에 매칭 행이 1개씩 있으므로 1건이다.\n- 3번: NULL 컬럼은 조인 조건에 사용되지 않는다.\n- 4번: 세 테이블 수와 결과 행 수를 혼동한 값이다.\n\n**보충 개념**\n조인 결과는 실제 조인 조건에 포함된 컬럼을 기준으로 결정된다. NULL 컬럼이 있어도 조인 조건에 포함되지 않으면 해당 NULL은 매칭 여부에 영향을 주지 않는다."
  },
  {
    "id": 3807,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "A 테이블과 B 테이블을 UNION하여 중복 제거한 결과가 1, 2, 3, 4, 5, 6일 때 결과 행 수로 가장 적절한 것은?",
    "choices": [
      "4개",
      "5개",
      "6개",
      "7개"
    ],
    "answer": 2,
    "explanation": "정답: 3. UNION 결과가 1, 2, 3, 4, 5, 6으로 총 6개의 서로 다른 값이므로 결과 행 수는 6개이다.\n\n**오답 풀이**\n- 1번: 결과 값의 개수를 적게 센 값이다.\n- 2번: 하나의 값을 누락한 값이다.\n- 3번: 서로 다른 값 6개가 출력된다.\n- 4번: 중복 제거 전 개수와 혼동한 값이다.\n\n**보충 개념**\nUNION은 중복을 제거한 합집합이다. UNION ALL은 중복을 제거하지 않고 모든 행을 반환한다."
  },
  {
    "id": 3808,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 SQL의 결과로 가장 적절한 것은?\n\n**<데이터>**\n| COL_B | COL_C | SCORE |\n|---:|---:|---:|\n| NULL | 10 | 5 |\n| 15 | 50 | 10 |\n| NULL | NULL | NULL |\n\n```sql\nSELECT NVL(MIN(COL_B), 0) AS A,\n       NVL(MAX(COL_C), 0) AS B,\n       SUM(NVL(SCORE, 0)) AS C\nFROM T;\n```",
    "choices": [
      "0, 50, 15",
      "15, 50, 15",
      "15, 10, 15",
      "0, 0, 0"
    ],
    "answer": 1,
    "explanation": "정답: 2. MIN(COL_B)는 NULL을 제외하고 15, MAX(COL_C)는 50, SUM(NVL(SCORE,0))는 5+10+0=15이다.\n\n**오답 풀이**\n- 1번: MIN은 NULL을 제외하므로 0이 아니라 15이다.\n- 2번: 각 집계 함수의 NULL 처리 결과가 맞다.\n- 3번: MAX(COL_C)를 10으로 잘못 계산했다.\n- 4번: 모든 값을 NULL 또는 0으로 처리한 잘못된 결과이다.\n\n**보충 개념**\n집계 함수 MIN, MAX는 NULL을 제외하고 계산한다. NVL을 집계 함수 안에 쓰는지 밖에 쓰는지에 따라 결과가 달라질 수 있다."
  },
  {
    "id": 3809,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "제약조건 변경에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "NOT NULL 제약조건을 추가하려면 기존 데이터에 NULL이 없어야 한다.",
      "이미 NULL 값이 들어 있는 컬럼에는 바로 NOT NULL 제약조건을 추가할 수 없다.",
      "기존 NULL 값을 수정한 뒤 NOT NULL 제약조건을 추가할 수 있다.",
      "기존 데이터에 NULL이 들어 있어도 NOT NULL 제약조건은 항상 오류 없이 추가된다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 기존 데이터에 NULL이 있으면 NOT NULL 제약조건 추가 시 오류가 발생할 수 있다.\n\n**오답 풀이**\n- 1번: NOT NULL 추가 전 기존 NULL 여부를 확인해야 한다.\n- 2번: NULL이 있는 상태에서는 바로 추가하기 어렵다.\n- 3번: NULL 값을 적절히 보정하면 제약조건 추가가 가능하다.\n- 4번: 항상 오류 없이 추가된다는 설명은 틀리다.\n\n**보충 개념**\n제약조건은 기존 데이터도 만족해야 한다. 따라서 NOT NULL, CHECK, UNIQUE 같은 제약조건을 추가할 때 기존 데이터 검증이 필요하다."
  },
  {
    "id": 3810,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "TCL",
    "question": "아래 SQL에서 `ROLLBACK TO SAVEPOINT SQL1` 실행 시 오류가 발생한 뒤, 같은 세션에서 계속해서 `SELECT * FROM TABLE50`을 수행한다고 할 때 결과 행 수로 가장 적절한 것은?\n\n```sql\nINSERT INTO TABLE50 VALUES(1);\nINSERT INTO TABLE50 VALUES(2);\nINSERT INTO TABLE50 VALUES(3);\nSAVEPOINT SQL1;\nINSERT INTO TABLE50 VALUES(4);\nINSERT INTO TABLE50 VALUES(5);\nCOMMIT;\nINSERT INTO TABLE50 VALUES(6);\nROLLBACK TO SAVEPOINT SQL1;\n\nSELECT * FROM TABLE50;\n```",
    "choices": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 2,
    "explanation": "정답: 3. COMMIT을 수행하면 이전 트랜잭션의 SAVEPOINT는 사라진다. 따라서 COMMIT 이후 `ROLLBACK TO SAVEPOINT SQL1`은 오류가 발생한다. 같은 세션에서 SELECT를 계속 수행하면 1~5는 이미 커밋되었고, 6은 현재 세션에서 입력된 상태이므로 총 6건이 조회된다.\n\n**오답 풀이**\n- 1번: SAVEPOINT로 정상 롤백된다고 잘못 해석한 값이다.\n- 2번: INSERT 6이 조회되지 않는다고 잘못 해석한 값이다.\n- 3번: 1~5와 6까지 총 6건으로 해석한 값이다.\n- 4번: INSERT는 6번까지만 수행되었으므로 7건이 아니다.\n\n**보충 개념**\nCOMMIT을 수행하면 해당 트랜잭션의 SAVEPOINT는 사라진다. COMMIT 이후 이전 SAVEPOINT로 롤백할 수 없다."
  },
  {
    "id": 3811,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "아래 설명으로 알맞은 데이터 모델링 단계는?\n\n**<지문>**\n시스템으로 구축하고자 하는 업무에 대해 Key, 속성, 관계 등을 정확하게 표현하고 재사용성이 높은 모델링이다.",
    "choices": [
      "논리적 데이터 모델링",
      "개념적 데이터 모델링",
      "물리적 데이터 모델링",
      "데이터베이스 모델링"
    ],
    "answer": 0,
    "explanation": "정답: 1. 논리적 데이터 모델링은 업무에서 필요한 데이터의 키, 속성, 관계를 구체적으로 표현하고 재사용성이 높은 데이터 구조를 만드는 단계이다.\n\n**오답 풀이**\n- 1번: 업무 데이터의 키, 속성, 관계를 논리적으로 정리하는 단계이므로 적절하다.\n- 2번: 개념적 데이터 모델링은 핵심 엔터티와 관계를 높은 추상화 수준에서 파악하는 단계이다.\n- 3번: 물리적 데이터 모델링은 DBMS, 인덱스, 저장 구조 등 물리 구현을 고려하는 단계이다.\n- 4번: 데이터베이스 모델링은 포괄적 표현이며 단계 명칭으로는 부정확하다.\n\n**보충 개념**\n개념 모델링은 업무 개념을 추상화하고, 논리 모델링은 속성·식별자·관계를 구체화한다. 물리 모델링은 실제 DBMS 구현 구조로 변환하는 단계이다."
  },
  {
    "id": 3812,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "엔터티 특징으로 적절하지 않은 것은?",
    "choices": [
      "엔터티는 고유한 식별자를 가진다.",
      "엔터티는 데이터 저장의 기본 단위이다.",
      "엔터티는 반드시 속성을 가진다.",
      "속성이 없는 엔터티가 있을 수 있다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 엔터티는 업무상 관리해야 하는 대상이며, 이를 설명하는 속성을 가져야 한다.\n\n**오답 풀이**\n- 1번: 엔터티는 인스턴스를 식별할 수 있는 식별자를 가져야 한다.\n- 2번: 엔터티는 업무 데이터를 저장하고 관리하는 기본 단위이다.\n- 3번: 엔터티는 하나 이상의 속성을 가져야 한다.\n- 4번: 속성이 없는 엔터티는 관리할 데이터가 없으므로 부적절하다.\n\n**보충 개념**\n엔터티는 업무에서 독립적으로 식별 가능한 대상이다. 엔터티는 인스턴스의 집합이며, 각 인스턴스는 속성값을 가진다."
  },
  {
    "id": 3813,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "속성 특징으로 적절하지 않은 것은?",
    "choices": [
      "속성은 엔터티의 특성을 나타낸다.",
      "속성에는 기본 속성과 파생 속성이 있다.",
      "파생 속성은 다른 속성에서 계산된다.",
      "파생 속성은 많을수록 좋다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 파생 속성은 계산으로 얻을 수 있으므로 무분별하게 많을수록 좋은 것이 아니라 중복과 정합성 문제를 고려해야 한다.\n\n**오답 풀이**\n- 1번: 속성은 엔터티 인스턴스를 설명하는 항목이다.\n- 2번: 속성은 기본 속성, 설계 속성, 파생 속성 등으로 분류할 수 있다.\n- 3번: 파생 속성은 다른 속성으로부터 계산되거나 변형되어 생성된다.\n- 4번: 파생 속성이 많으면 데이터 중복과 갱신 불일치가 발생할 수 있다.\n\n**보충 개념**\n파생 속성은 조회 성능이나 편의성을 위해 둘 수 있지만, 원천 속성과 값이 불일치하지 않도록 관리해야 한다."
  },
  {
    "id": 3814,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "식별자의 특징으로 적절하지 않은 것은?",
    "choices": [
      "식별자는 엔터티의 유일성을 보장한다.",
      "식별자는 최소성 조건을 만족해야 한다.",
      "주식별자는 엔터티를 고유하게 식별한다.",
      "주식별자의 값은 자주 변경될 수 있다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 주식별자는 인스턴스를 안정적으로 식별해야 하므로 자주 변경되는 값은 적절하지 않다.\n\n**오답 풀이**\n- 1번: 식별자는 인스턴스를 유일하게 구분한다.\n- 2번: 식별자는 유일성을 만족하는 최소 속성 집합이어야 한다.\n- 3번: 주식별자는 엔터티의 대표 식별자이다.\n- 4번: 주식별자는 안정성을 가져야 하므로 값 변경이 잦으면 부적절하다.\n\n**보충 개념**\n주식별자의 특징은 유일성, 최소성, 불변성, 존재성이다. 자주 바뀌는 속성은 주식별자 후보로 적합하지 않다."
  },
  {
    "id": 3815,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "식별자 관계에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "식별자 관계는 부모 엔터티와 종속적인 관계를 맺는다.",
      "비식별자 관계에서 부모와의 관계는 항상 필수 조건이다.",
      "식별자 관계는 부모의 식별자를 자식에게 전달한다.",
      "비식별자 관계는 자식 엔터티가 독립적으로 존재할 수 있다."
    ],
    "answer": 1,
    "explanation": "정답: 2. 비식별자 관계는 부모 식별자가 자식의 일반 속성 또는 외래키로 포함되는 관계이며, 부모와의 참여가 항상 필수인 것은 아니다.\n\n**오답 풀이**\n- 1번: 식별자 관계에서는 자식이 부모에 존재 종속적인 경우가 많다.\n- 2번: 비식별자 관계도 선택 관계가 가능하므로 항상 필수라고 할 수 없다.\n- 3번: 식별자 관계에서는 부모 식별자가 자식 주식별자에 포함된다.\n- 4번: 비식별자 관계에서는 자식이 자체 식별자를 가지고 독립성이 커질 수 있다.\n\n**보충 개념**\n식별자 관계는 부모의 식별자가 자식의 주식별자 일부가 되는 관계이다. 비식별자 관계는 부모의 식별자가 자식의 일반 외래키로 존재한다."
  },
  {
    "id": 3816,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "아래 고객, 주문 관련 ERD에 대한 설명으로 적절한 것은?\n\n**<ERD>**\n고객(고객번호, 고객명) 1 : N 주문(주문번호, 고객번호(FK))\n\n주문의 고객번호는 고객 엔터티의 고객번호를 참조한다.",
    "choices": [
      "주문에서의 고객번호는 고객 엔터티에서 상속받은 것이다.",
      "고객은 주문 엔터티의 자식 엔터티이다.",
      "주문번호는 고객 엔터티에서 상속받은 식별자이다.",
      "고객과 주문은 서로 아무 관계가 없다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 주문 엔터티의 고객번호는 고객 엔터티의 식별자를 참조하는 외래키로 볼 수 있다.\n\n**오답 풀이**\n- 1번: 주문의 고객번호는 고객의 고객번호를 참조하므로 적절하다.\n- 2번: 일반적으로 주문이 고객의 자식 엔터티이다.\n- 3번: 주문번호는 주문 자체를 식별하는 속성이다.\n- 4번: 고객과 주문은 1:N 관계를 가질 수 있다.\n\n**보충 개념**\n부모 엔터티의 식별자는 관계를 통해 자식 엔터티에 외래키로 전달될 수 있다. 식별자 관계인지 비식별자 관계인지에 따라 자식의 주식별자 포함 여부가 달라진다."
  },
  {
    "id": 3817,
    "sourceSubjectId": 4,
    "category": "데이터 모델과 SQL",
    "tag": "데이터 모델과 SQL",
    "question": "함수 종속성에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "일반 속성이 주식별자 전체에 함수 종속된 상태는 제2정규형의 조건과 관련된다.",
      "일반 속성이 주식별자 일부에만 종속되면 제2정규형을 만족한다.",
      "상품번호에 상품명이 종속되는 관계는 상품명이 상품번호를 결정한다는 뜻이다.",
      "함수 종속성은 정규화와 관련이 없다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 제2정규형은 제1정규형을 만족하면서 일반 속성이 복합 주식별자 전체에 완전 함수 종속되어야 한다.\n\n**오답 풀이**\n- 1번: 완전 함수 종속은 제2정규형과 관련된다.\n- 2번: 일부 식별자에만 종속되는 것은 부분 함수 종속으로 제2정규형 위반이다.\n- 3번: 상품번호에 상품명이 종속된다는 것은 상품번호가 상품명을 결정한다는 뜻이다.\n- 4번: 함수 종속성은 정규화의 핵심 판단 기준이다.\n\n**보충 개념**\n함수 종속은 X 값이 정해지면 Y 값이 하나로 정해지는 관계이다. 정규화는 부분 함수 종속과 이행 함수 종속을 제거하여 이상 현상을 줄인다."
  },
  {
    "id": 3818,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "아래의 경우 생성하는 식별자는?\n\n**<지문>**\n업무적으로 만들어지지는 않지만 원조식별자가 복잡한 구성을 갖고 있기 때문에 인위적으로 만든 식별자",
    "choices": [
      "외래키",
      "복합 식별자",
      "인조 식별자",
      "자연 식별자"
    ],
    "answer": 2,
    "explanation": "정답: 3. 업무 식별자가 복잡하거나 부적절할 때 설계자가 인위적으로 만든 식별자는 인조 식별자이다.\n\n**오답 풀이**\n- 1번: 외래키는 다른 엔터티를 참조하기 위해 전달받은 식별자이다.\n- 2번: 복합 식별자는 둘 이상의 속성으로 구성된 식별자이다.\n- 3번: 인위적으로 만든 식별자이므로 정답이다.\n- 4번: 자연 식별자는 업무적으로 자연스럽게 존재하는 식별자이다.\n\n**보충 개념**\n인조 식별자는 편리하지만 업무 의미를 직접 담지 않는다. 인조 식별자를 사용하더라도 업무상 유일성 제약은 별도로 고려해야 한다."
  },
  {
    "id": 3819,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "관계 표기법에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "IE 표기법에서는 관계의 필수 여부를 선과 기호로 표현할 수 있다.",
      "바커 표기법에서는 관계의 선택성을 표시할 수 있다.",
      "IE 표기법의 실선과 바커 표기법의 O 표시는 같은 의미로 항상 대응된다.",
      "관계 표기법은 엔터티 간 참여도와 관계 수를 표현하는 데 사용된다."
    ],
    "answer": 2,
    "explanation": "정답: 3. IE 표기법과 바커 표기법은 관계의 선택성, 필수성, 식별성을 표현하는 방식이 다르므로 특정 기호를 단순히 같은 의미로 항상 대응시키면 안 된다.\n\n**오답 풀이**\n- 1번: IE 표기법은 관계의 선택성과 카디널리티를 기호로 표현한다.\n- 2번: 바커 표기법도 관계 선택성과 필수성을 표현할 수 있다.\n- 3번: 서로 다른 표기법의 기호를 단순 대응시키는 설명은 부적절하다.\n- 4번: 관계 표기법은 엔터티 간 관계 구조를 표현하는 데 사용된다.\n\n**보충 개념**\nERD 표기법은 바커 표기법, IE 표기법 등 여러 방식이 있다. 표기법마다 선택 관계, 필수 관계, 식별 관계를 표현하는 기호가 다르므로 해석 기준을 구분해야 한다."
  },
  {
    "id": 3820,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "NULL",
    "question": "NULL에 대한 설명으로 적절한 것은?",
    "choices": [
      "NULL에는 일반 비교 연산자를 사용해 항상 TRUE 또는 FALSE를 얻을 수 있다.",
      "바커 표기법에서는 NULL 허용 여부를 알 수 없다.",
      "NULL은 미지의 값으로 일반 비교 연산으로는 비교 결과를 확정하기 어렵다.",
      "IE 표기법에서 NULL 허용 여부를 알 수 있다."
    ],
    "answer": 2,
    "explanation": "정답: 3. NULL은 알 수 없거나 존재하지 않는 값을 의미하며, 일반 비교 연산의 결과가 UNKNOWN이 될 수 있다.\n\n**오답 풀이**\n- 1번: NULL 비교 결과는 TRUE/FALSE가 아니라 UNKNOWN이 될 수 있다.\n- 2번: 표기법에 대한 설명보다 NULL의 본질적 설명으로는 부적절하다.\n- 3번: NULL의 의미와 비교 특성을 가장 정확히 설명한다.\n- 4번: 표기법 설명은 일반적인 NULL 연산 설명으로 보기 어렵다.\n\n**보충 개념**\nNULL 여부는 `= NULL`이 아니라 `IS NULL` 또는 `IS NOT NULL`로 판단한다. WHERE 절은 TRUE인 행만 반환하므로 UNKNOWN은 결과에서 제외된다."
  },
  {
    "id": 3821,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "CTAS에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "SELECT 결과를 기반으로 새 테이블을 만들 수 있다.",
      "제약조건이 모두 복사된다.",
      "기존 테이블의 구조를 기반으로 한다.",
      "일부 제약조건은 별도로 추가할 수 있다."
    ],
    "answer": 1,
    "explanation": "정답: 2. CTAS는 조회 결과를 기반으로 테이블을 생성하지만 기본키, 외래키, CHECK, DEFAULT 등의 제약조건이 모두 복사되는 것은 아니다.\n\n**오답 풀이**\n- 1번: CTAS는 SELECT 결과로 새 테이블을 생성한다.\n- 2번: 제약조건이 모두 복사된다는 설명은 틀리다.\n- 3번: 조회 대상 컬럼의 구조를 기반으로 테이블이 생성된다.\n- 4번: 필요한 제약조건은 생성 후 별도로 추가할 수 있다.\n\n**보충 개념**\nCTAS는 빠르게 테이블과 데이터를 복제할 때 사용한다. 그러나 인덱스, 제약조건, 트리거 등은 별도로 생성해야 하는 경우가 많다."
  },
  {
    "id": 3822,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "View에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "View는 조회 속도를 높이기 위해 사용된다.",
      "View는 일반적으로 실제 데이터를 저장하지 않는다.",
      "기본 테이블의 컬럼이 추가되어도 View를 통해 응용 프로그램에 미치는 영향을 줄일 수 있다.",
      "View는 다른 테이블의 데이터를 참조한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 일반 View는 SQL을 저장한 논리적 객체에 가까우며, 조회 속도를 높이는 것이 주된 목적이라고 보기 어렵다.\n\n**오답 풀이**\n- 1번: 일반 View는 조회 편의성, 보안, 독립성 제공 목적이 크며 속도 향상이 보장되지 않는다.\n- 2번: 일반 View는 실제 데이터를 저장하지 않고 기본 테이블을 참조한다.\n- 3번: View를 통해 응용 프로그램이 기본 테이블 구조 변경의 영향을 덜 받을 수 있다.\n- 4번: View는 기본 테이블 또는 다른 View의 데이터를 참조할 수 있다.\n\n**보충 개념**\nView는 논리적 테이블처럼 사용할 수 있는 객체이다. 보안, SQL 단순화, 논리적 데이터 독립성 제공에 활용된다."
  },
  {
    "id": 3823,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "Database의 논리적 업무 최소 단위는?",
    "choices": [
      "트랜잭션",
      "레코드",
      "Query",
      "테이블"
    ],
    "answer": 0,
    "explanation": "정답: 1. 트랜잭션은 데이터베이스에서 더 이상 분할할 수 없는 논리적 업무 처리 단위이다.\n\n**오답 풀이**\n- 1번: 논리적 업무 최소 단위로 적절하다.\n- 2번: 레코드는 테이블의 한 행을 의미한다.\n- 3번: Query는 트랜잭션을 구성하는 개별 SQL 문일 수 있지만 논리적 업무 단위로 보기 어렵다.\n- 4번: 테이블은 데이터를 저장하는 구조이다.\n\n**보충 개념**\n트랜잭션은 여러 SQL 문을 하나의 논리적 단위로 묶을 수 있다. 트랜잭션은 ACID 특성을 만족해야 한다."
  },
  {
    "id": 3824,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "정규화",
    "question": "아래 정규표현식 조건에 해당하지 않는 전화번호 형식으로 가장 적절한 것은?\n\n**<조건>**\n전화번호는 숫자와 하이픈으로 구성되며, 지역번호가 `02`로 시작하는 형태를 검사한다.",
    "choices": [
      "02-123-4567",
      "02-1234-5678",
      "031-123-4567",
      "02-9876-5432"
    ],
    "answer": 2,
    "explanation": "정답: 3. 조건은 `02`로 시작하는 전화번호 형태이므로 `031-123-4567`은 해당 조건에 맞지 않는다.\n\n**오답 풀이**\n- 1번: 02로 시작하는 전화번호 형식이다.\n- 2번: 02로 시작하는 전화번호 형식이다.\n- 3번: 031로 시작하므로 02 시작 조건에 맞지 않는다.\n- 4번: 02로 시작하는 전화번호 형식이다.\n\n**보충 개념**\n정규표현식에서 `^02`는 문자열이 02로 시작함을 의미한다. 하이픈과 숫자 개수 조건이 함께 제시되면 각 자리수를 정확히 확인해야 한다."
  },
  {
    "id": 3825,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "아래의 계층형 쿼리에 대한 설명으로 적절하지 않은 것은?\n\n```sql\nSELECT emp_no, mgr_no\nFROM emp\nSTART WITH mgr_no IS NULL\nCONNECT BY PRIOR emp_no = mgr_no;\n```\n\n**<조건>**\nemp_no는 하위 사원 번호, mgr_no는 상위 관리자 번호를 나타낸다.",
    "choices": [
      "계층 구조를 조회한다.",
      "상위 관리자부터 조회한다.",
      "역방향 탐색이다.",
      "순방향 탐색이다."
    ],
    "answer": 2,
    "explanation": "정답: 3. `CONNECT BY PRIOR emp_no = mgr_no`는 부모 행의 emp_no가 자식 행의 mgr_no와 같은 행을 찾아 내려가는 순방향 계층 탐색이다.\n\n**오답 풀이**\n- 1번: CONNECT BY를 사용하므로 계층 구조를 조회한다.\n- 2번: START WITH mgr_no IS NULL이면 최상위 관리자부터 시작한다.\n- 3번: 역방향이라는 설명은 틀리다.\n- 4번: 부모에서 자식으로 내려가는 순방향이다.\n\n**보충 개념**\n계층형 쿼리에서 PRIOR의 위치가 탐색 방향을 결정한다. `PRIOR 부모컬럼 = 자식컬럼`은 일반적으로 하위 방향 탐색이다."
  },
  {
    "id": 3826,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "서브쿼리",
    "question": "서브쿼리에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "서브쿼리는 메인쿼리 안에서 사용되는 또 다른 SELECT 문이다.",
      "서브쿼리의 내부 컬럼은 메인쿼리에서 항상 직접 참조할 수 있다.",
      "상관 서브쿼리는 메인쿼리의 컬럼을 참조할 수 있다.",
      "인라인 뷰는 FROM 절에서 사용되는 서브쿼리이다."
    ],
    "answer": 1,
    "explanation": "정답: 2. 서브쿼리 내부에서만 정의된 컬럼은 일반적으로 메인쿼리에서 직접 참조할 수 없으며, 인라인 뷰처럼 FROM 절에 별칭을 부여한 경우에만 그 결과 컬럼을 참조할 수 있다.\n\n**오답 풀이**\n- 1번: 서브쿼리의 기본 설명이다.\n- 2번: 서브쿼리 내부 컬럼을 항상 직접 참조할 수 있다는 설명은 틀리다.\n- 3번: 상관 서브쿼리는 메인쿼리의 컬럼을 참조한다.\n- 4번: FROM 절의 서브쿼리는 인라인 뷰라고 부른다.\n\n**보충 개념**\n서브쿼리는 SELECT, FROM, WHERE 등 여러 절에서 사용할 수 있다. 사용 위치에 따라 스칼라 서브쿼리, 인라인 뷰, 중첩 서브쿼리 등으로 구분된다."
  },
  {
    "id": 3827,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "아래 CASE 표현식과 같은 결과를 반환하는 함수로 가장 적절한 것은?\n\n```sql\nCASE\n  WHEN col1 = 'X' THEN NULL\n  ELSE col1\nEND\n```",
    "choices": [
      "NVL(col1, 'X')",
      "NULLIF(col1, 'X')",
      "COALESCE(col1, 'X')",
      "NVL2(col1, NULL, 'X')"
    ],
    "answer": 1,
    "explanation": "정답: 2. NULLIF(col1, 'X')는 col1과 'X'가 같으면 NULL을 반환하고, 다르면 col1을 반환한다.\n\n**오답 풀이**\n- 1번: NVL은 col1이 NULL이면 대체값을 반환한다.\n- 2번: CASE 표현식과 같은 의미이다.\n- 3번: COALESCE는 첫 번째 NULL이 아닌 값을 반환한다.\n- 4번: NVL2는 첫 번째 인자의 NULL 여부에 따라 두 번째 또는 세 번째 인자를 반환한다.\n\n**보충 개념**\nNULLIF(expr1, expr2)는 두 값이 같으면 NULL, 다르면 expr1을 반환한다. 특정 값과 같을 때 NULL로 바꾸는 경우 유용하다."
  },
  {
    "id": 3828,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL 중 Oracle 기준으로 결과가 다른 것은?\n\n**<TAB>**\n| COL1 | COL2 | COL3 |\n|---:|---:|---|\n| 1 | 2 | A |\n| 2 | 3 | B |\n| 3 | 2 | C |\n| 4 | 3 | D |",
    "choices": [
      "SELECT COL1, COL2, COL3 FROM TAB WHERE COL1 < 5",
      "SELECT T.* FROM TAB AS T",
      "SELECT * FROM TAB",
      "SELECT * FROM TAB WHERE COL2 IN (2, 3)"
    ],
    "answer": 1,
    "explanation": "정답: 2. Oracle에서는 FROM 절의 테이블 별칭에 AS 키워드를 사용할 수 없으므로 `SELECT T.* FROM TAB AS T`는 오류가 발생한다.\n\n**오답 풀이**\n- 1번: COL1이 모두 5보다 작으므로 전체 행이 조회된다.\n- 2번: Oracle 기준 테이블 별칭에 AS를 사용해 문법 오류가 발생한다.\n- 3번: 전체 행이 조회된다.\n- 4번: COL2가 2 또는 3인 전체 행이 조회된다.\n\n**보충 개념**\nOracle에서는 컬럼 별칭에는 AS를 사용할 수 있지만, 테이블 별칭에는 일반적으로 AS를 쓰지 않는다. `FROM TAB T`처럼 작성한다."
  },
  {
    "id": 3829,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "STADIUM 컬럼이 두 개 테이블에 모두 존재하는 조인 SQL에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "두 테이블에 같은 컬럼명이 있으면 컬럼명 앞에 테이블명 또는 별칭을 붙여 구분해야 한다.",
      "SELECT 절에서 STADIUM을 사용할 때 모호하면 테이블 별칭을 명시해야 한다.",
      "동일한 이름의 컬럼이 여러 테이블에 존재해도 항상 컬럼명만 단독으로 사용할 수 있다.",
      "조인 SQL에서는 컬럼 소속을 명확히 작성하는 것이 좋다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 조인 대상 테이블에 동일한 컬럼명이 있으면 컬럼명만 단독으로 사용했을 때 모호한 컬럼 오류가 발생할 수 있다.\n\n**오답 풀이**\n- 1번: 모호한 컬럼은 테이블명 또는 별칭으로 구분해야 한다.\n- 2번: SELECT 절에서도 모호한 컬럼은 별칭을 붙여야 한다.\n- 3번: 항상 단독 사용 가능하다는 설명은 틀리다.\n- 4번: 조인 SQL에서는 명시적 컬럼 참조가 가독성과 정확성을 높인다.\n\n**보충 개념**\n여러 테이블을 조인할 때 같은 이름의 컬럼이 존재하면 `A.STADIUM`, `B.STADIUM`처럼 소속을 명확히 해야 한다."
  },
  {
    "id": 3830,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "아래 SQL에 대한 결과 설명으로 가장 적절한 것은?\n\n```sql\nSELECT COALESCE(A, 50 * B, '50') AS RESULT\nFROM T;\n```",
    "choices": [
      "B가 NULL이 아니면 항상 B 값을 반환한다.",
      "A와 B가 NULL일 경우 100을 반환한다.",
      "A가 NULL일 경우에는 언제나 50 * B를 반환한다.",
      "A가 NULL이 아닐 경우 A 값을 반환한다."
    ],
    "answer": 3,
    "explanation": "정답: 4. COALESCE는 왼쪽부터 검사하여 첫 번째 NULL이 아닌 값을 반환하므로 A가 NULL이 아니면 A를 반환한다.\n\n**오답 풀이**\n- 1번: A가 NULL이 아니면 B와 무관하게 A를 반환한다.\n- 2번: A와 B가 NULL이면 세 번째 인자인 '50'이 반환될 수 있다.\n- 3번: B가 NULL이면 50 * B도 NULL이므로 세 번째 인자로 넘어갈 수 있다.\n- 4번: COALESCE의 규칙에 맞다.\n\n**보충 개념**\nCOALESCE(expr1, expr2, ...)는 첫 번째 NULL이 아닌 표현식을 반환한다. 인자 간 데이터 타입 호환성도 고려해야 한다."
  },
  {
    "id": 3831,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "JOIN",
    "question": "다음 NATURAL JOIN 결과에 대한 설명으로 가장 적절한 것은?\n\n**<TAB_A>**\n| KEYA | COL1 | COL2 |\n|---:|---|---|\n| 1 | A | 가 |\n| 2 | A | 가 |\n| 5 | C | 다 |\n\n**<TAB_B>**\n| KEYB | COL1 | COL2 |\n|---:|---|---|\n| 1 | A | 가 |\n| 3 | C | 다 |\n\n```sql\nSELECT *\nFROM TAB_A NATURAL JOIN TAB_B;\n```",
    "choices": [
      "COL1, COL2가 모두 같은 행이 조인되어 3건이 출력된다.",
      "KEYA와 KEYB가 같아야만 조인되므로 1건만 출력된다.",
      "NATURAL JOIN은 항상 카테시안 곱을 생성한다.",
      "동일 이름 컬럼이 없어 오류가 발생한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. NATURAL JOIN은 두 테이블의 동일 이름 컬럼인 COL1, COL2를 자동으로 조인 조건으로 사용하므로 (A, 가) 2건과 (C, 다) 1건이 매칭되어 총 3건이 출력된다.\n\n**오답 풀이**\n- 1번: 동일 이름 컬럼 COL1, COL2 기준으로 3건이 조인된다.\n- 2번: KEYA와 KEYB는 이름이 다르므로 NATURAL JOIN 조건에 포함되지 않는다.\n- 3번: 카테시안 곱은 CROSS JOIN의 특징이다.\n- 4번: COL1, COL2라는 동일 이름 컬럼이 있다.\n\n**보충 개념**\nNATURAL JOIN은 동일 이름 컬럼을 모두 조인 조건으로 사용한다. 의도하지 않은 컬럼이 조건에 포함될 수 있으므로 실무에서는 주의가 필요하다."
  },
  {
    "id": 3832,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "INNER JOIN",
    "question": "INNER JOIN 결과에서 KIM이라는 이름이 중복으로 출력되는 상황에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "조인 조건을 만족하는 행 조합이 여러 개이면 같은 값이 중복 출력될 수 있다.",
      "INNER JOIN은 중복 행을 자동으로 제거한다.",
      "INNER JOIN은 항상 한 테이블의 행 수만큼만 출력된다.",
      "중복 이름이 있으면 SQL은 반드시 오류가 발생한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. INNER JOIN은 조인 조건을 만족하는 행 조합을 모두 반환하므로 동일한 이름이 여러 행에서 매칭되면 중복 출력될 수 있다.\n\n**오답 풀이**\n- 1번: 조인 결과의 중복 발생 원인을 적절히 설명한다.\n- 2번: INNER JOIN은 DISTINCT가 없으면 중복을 제거하지 않는다.\n- 3번: 결과 행 수는 매칭 조합 수에 따라 달라진다.\n- 4번: 중복 이름 자체는 오류가 아니다.\n\n**보충 개념**\n조인 결과는 조건을 만족하는 행의 조합 수로 결정된다. 중복 제거가 필요하면 DISTINCT나 집계가 필요할 수 있다."
  },
  {
    "id": 3833,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "OUTER JOIN",
    "question": "LEFT OUTER JOIN 결과로 SMITH 행의 오른쪽 테이블 컬럼이 NULL로 출력되었다. 이에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "SMITH 행은 왼쪽 테이블에는 존재하지만 오른쪽 테이블에는 조인 조건을 만족하는 행이 없다.",
      "SMITH 행은 오른쪽 테이블에만 존재한다.",
      "LEFT OUTER JOIN에서는 매칭되지 않은 왼쪽 행이 모두 제거된다.",
      "NULL이 출력되면 SQL 문법 오류이다."
    ],
    "answer": 0,
    "explanation": "정답: 1. LEFT OUTER JOIN은 왼쪽 테이블의 행을 보존하며, 오른쪽에 매칭 행이 없으면 오른쪽 컬럼을 NULL로 채운다.\n\n**오답 풀이**\n- 1번: LEFT OUTER JOIN의 미매칭 행 처리 방식이다.\n- 2번: 오른쪽 테이블에만 존재하는 행은 LEFT OUTER JOIN에서 기본적으로 보존되지 않는다.\n- 3번: LEFT OUTER JOIN은 왼쪽 행을 제거하지 않고 보존한다.\n- 4번: NULL 출력은 정상적인 외부 조인 결과이다.\n\n**보충 개념**\nLEFT OUTER JOIN은 왼쪽 테이블 기준으로 모든 행을 반환한다. 매칭되는 오른쪽 행이 없으면 오른쪽 컬럼 값은 NULL이 된다."
  },
  {
    "id": 3834,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 보기 중 행의 수가 가장 많은 SQL은?\n\n**<TAB1>**\n| CODE | PCOLOR |\n|---:|---|\n| 1 | 빨강 |\n| 2 | 노랑 |\n| 3 | 파랑 |\n| 4 | 검정 |\n\n**<TAB2>**\n| CODE | PSIZE |\n|---:|---|\n| 1 | 소 |\n| 2 | 중 |\n| 3 | 대 |\n| 4 | 특대 |",
    "choices": [
      "SELECT CODE FROM TAB1 UNION ALL SELECT CODE FROM TAB2",
      "SELECT * FROM TAB1 JOIN TAB2 ON TAB1.CODE = TAB2.CODE",
      "SELECT * FROM TAB1, TAB2 WHERE TAB1.PCOLOR IN ('노랑','파랑','검정') AND TAB2.PSIZE IN ('소','중','대')",
      "SELECT * FROM TAB1 FULL OUTER JOIN TAB2 ON TAB1.CODE = TAB2.CODE"
    ],
    "answer": 2,
    "explanation": "정답: 3. 3번은 TAB1에서 3행, TAB2에서 3행을 선택해 조인 조건 없이 조합을 만들므로 3×3=9행이 된다.\n\n**오답 풀이**\n- 1번: TAB1 4행과 TAB2 4행을 UNION ALL 하므로 8행이다.\n- 2번: CODE가 모두 1:1로 매칭되므로 INNER JOIN 결과는 4행이다.\n- 3번: 선택된 3행과 3행의 조합으로 9행이 되어 가장 많다.\n- 4번: CODE가 모두 매칭되므로 FULL OUTER JOIN 결과는 4행이다.\n\n**보충 개념**\nFROM 절에 여러 테이블을 나열하고 조인 조건이 없으면 카테시안 곱이 발생한다. 결과 행 수는 각 입력 행 수의 곱이다."
  },
  {
    "id": 3835,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "제약 조건에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "PK는 NOT NULL이다.",
      "FK는 부모 테이블의 기본키 또는 고유키를 참조할 수 있다.",
      "UK는 항상 NOT NULL이다.",
      "CHECK는 특정 조건을 만족하는 값만 허용한다."
    ],
    "answer": 2,
    "explanation": "정답: 3. UNIQUE 제약조건은 중복을 제한하지만 DBMS에 따라 NULL을 허용할 수 있으므로 항상 NOT NULL이라고 할 수 없다.\n\n**오답 풀이**\n- 1번: 기본키는 유일성과 NOT NULL을 만족한다.\n- 2번: 외래키는 부모 테이블의 기본키 또는 고유키를 참조할 수 있다.\n- 3번: UNIQUE가 항상 NOT NULL이라는 설명은 틀리다.\n- 4번: CHECK는 조건식을 통해 값의 범위를 제한한다.\n\n**보충 개념**\nPRIMARY KEY는 UNIQUE와 NOT NULL 성격을 모두 가진다. UNIQUE는 중복 방지 제약이지만 NULL 처리 방식은 DBMS별로 차이가 있다."
  },
  {
    "id": 3836,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "아래 SQL과 같은 결과를 반환하는 SQL로 가장 적절한 것은?\n\n```sql\nSELECT *\nFROM A\nWHERE 번호 IN (\n    SELECT 번호\n    FROM B\n    WHERE A.성별 = B.성별\n);\n```",
    "choices": [
      "SELECT * FROM A WHERE EXISTS (SELECT 1 FROM B WHERE A.성별 = B.성별 AND A.번호 = B.번호)",
      "SELECT * FROM A JOIN B ON A.성별 = B.성별",
      "SELECT * FROM A WHERE A.성별 IN (SELECT B.성별 FROM B WHERE A.번호 = B.번호)",
      "SELECT * FROM A WHERE 번호 = ALL (SELECT 번호 FROM B WHERE A.성별 = B.성별)"
    ],
    "answer": 0,
    "explanation": "정답: 1. 원 SQL은 같은 성별의 B 행 중 A.번호와 같은 번호가 존재하는지 확인하므로 EXISTS에 성별과 번호 조건을 모두 넣은 1번과 같은 의미이다.\n\n**오답 풀이**\n- 1번: IN 조건을 EXISTS로 올바르게 변환한 형태이다.\n- 2번: 성별만 같으면 조인되어 번호 조건이 빠진다.\n- 3번: 성별 IN 조건으로 바뀌어 원문의 번호 포함 여부와 다르다.\n- 4번: ALL은 서브쿼리의 모든 번호와 같아야 하므로 의미가 다르다.\n\n**보충 개념**\nIN은 값이 서브쿼리 결과 집합에 포함되는지 확인한다. EXISTS로 바꿀 때는 동일한 비교 조건을 상관 조건으로 명확히 작성해야 한다."
  },
  {
    "id": 3837,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "아래 SQL 결과로 알맞은 것은?\n\n**<TAB_A>**\n| COL1 |\n|---:|\n| 1 |\n| 2 |\n| NULL |\n\n**<TAB_B>**\n| COL2 |\n|---:|\n| 1 |\n| 2 |\n| 3 |\n\n```sql\nSELECT COUNT(*)\nFROM TAB_B\nWHERE COL2 NOT IN (SELECT COL1 FROM TAB_A);\n```",
    "choices": [
      "NULL",
      "0",
      "1",
      "전체 건수"
    ],
    "answer": 1,
    "explanation": "정답: 2. NOT IN의 목록에 NULL이 포함되면 비교 결과가 UNKNOWN이 되어 조건을 만족하는 행이 없어 COUNT(*) 결과는 0이다.\n\n**오답 풀이**\n- 1번: COUNT(*)는 결과 행이 없어도 NULL이 아니라 0을 반환한다.\n- 2번: NULL이 포함된 NOT IN 조건 때문에 반환 행이 없다.\n- 3번: 3은 1,2와 다르지만 NULL과의 비교 때문에 UNKNOWN이 되어 제외된다.\n- 4번: 전체 건수가 반환되지 않는다.\n\n**보충 개념**\n`NOT IN` 서브쿼리 결과에 NULL이 있으면 의도와 달리 결과가 없을 수 있다. NULL 가능성이 있으면 `NOT EXISTS`를 고려하는 것이 안전하다."
  },
  {
    "id": 3838,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "아래 SQL 결과로 알맞은 것은?\n\n**<TAB>**\n| COL |\n|---|\n| A |\n| B |\n| C |\n| NULL |\n\n```sql\nSELECT *\nFROM TAB\nWHERE COL IN ('A', 'B', NULL);\n```",
    "choices": [
      "A, B, C, NULL",
      "A, B",
      "A, B, NULL",
      "NULL"
    ],
    "answer": 1,
    "explanation": "정답: 2. IN 목록에 NULL이 포함되어도 `COL = NULL`은 TRUE가 되지 않으므로 A와 B만 조회된다.\n\n**오답 풀이**\n- 1번: C와 NULL은 조건을 만족하지 않는다.\n- 2번: A와 B만 IN 목록의 실제 값과 일치한다.\n- 3번: NULL은 `IN (..., NULL)`로 조회되지 않는다.\n- 4번: NULL만 조회되지 않는다.\n\n**보충 개념**\nNULL 값을 조회하려면 `COL IS NULL` 조건을 별도로 사용해야 한다. `IN ('A','B',NULL)`은 `COL='A' OR COL='B' OR COL=NULL`과 유사하게 동작한다."
  },
  {
    "id": 3839,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "GROUP BY",
    "question": "아래 SQL 결과로 알맞은 것은?\n\n**<TAB>**\n| 나이_그룹 | 나이 |\n|---:|---:|\n| 1 | 10 |\n| 1 | 10 |\n| 2 | 20 |\n| 2 | 20 |\n| 3 | 30 |\n| 3 | 30 |\n| 3 | NULL |\n\n```sql\nSELECT AVG(나이) AS 평균_나이\nFROM TAB\nGROUP BY 나이_그룹;\n```",
    "choices": [
      "10, 20, 25",
      "10, 20, NULL",
      "10, 20, 30",
      "10, 20, 20"
    ],
    "answer": 2,
    "explanation": "정답: 3. AVG는 NULL을 제외하고 평균을 계산하므로 그룹 1은 10, 그룹 2는 20, 그룹 3은 30이다.\n\n**오답 풀이**\n- 1번: NULL을 0으로 포함하여 평균을 낸 값과 혼동한 것이다.\n- 2번: 그룹 3에는 NULL이 아닌 30 값이 있으므로 NULL이 아니다.\n- 3번: NULL을 제외한 평균 계산 결과이다.\n- 4번: 그룹 3의 평균을 잘못 계산했다.\n\n**보충 개념**\nAVG, SUM, MIN, MAX 등 대부분의 집계 함수는 NULL을 제외한다. COUNT(*)는 NULL 여부와 관계없이 행 수를 센다."
  },
  {
    "id": 3840,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUPING",
    "question": "아래 결과를 출력하기 위한 GROUPING SETS 절로 가장 적절한 것은?\n\n**<조건>**\n- 상세 집계: COL1, COL2별 집계\n- 추가 집계: COL2별 집계만 출력\n- COL1만 기준인 소계는 출력하지 않는다.",
    "choices": [
      "GROUP BY GROUPING SETS ((COL1, COL2), (COL2))",
      "GROUP BY ROLLUP (COL1, COL2)",
      "GROUP BY CUBE (COL1, COL2)",
      "GROUP BY GROUPING SETS ((COL1), ())"
    ],
    "answer": 0,
    "explanation": "정답: 1. (COL1, COL2) 상세 집계와 (COL2) 집계만 필요하므로 GROUPING SETS((COL1, COL2), (COL2))가 적절하다.\n\n**오답 풀이**\n- 1번: 필요한 두 그룹 집합만 정확히 지정한다.\n- 2번: ROLLUP(COL1, COL2)는 (COL1), ()도 생성한다.\n- 3번: CUBE는 모든 조합의 소계를 생성한다.\n- 4번: 필요한 (COL1, COL2), (COL2)가 없다.\n\n**보충 개념**\nGROUPING SETS는 원하는 그룹 조합을 직접 지정할 수 있다. ROLLUP과 CUBE보다 필요한 소계만 선택적으로 만들 때 유용하다."
  },
  {
    "id": 3841,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "아래 Window Function 설명에 맞는 것은?\n\n**<지문>**\n파티션별 윈도우의 전체 건수에서 현재 행보다 작거나 같은 건수에 대한 누적 백분율을 구하는 함수",
    "choices": [
      "CUME_DIST",
      "DENSE_RANK",
      "RANK",
      "PERCENT_RANK"
    ],
    "answer": 0,
    "explanation": "정답: 1. CUME_DIST는 현재 행보다 작거나 같은 행의 누적 분포 비율을 반환한다.\n\n**오답 풀이**\n- 1번: 누적 분포 비율을 구하는 함수이다.\n- 2번: DENSE_RANK는 동점 후 순위를 건너뛰지 않는 순위 함수이다.\n- 3번: RANK는 동점 후 순위를 건너뛰는 순위 함수이다.\n- 4번: PERCENT_RANK는 상대 순위를 0~1 범위로 반환한다.\n\n**보충 개념**\n분포 함수에는 CUME_DIST, PERCENT_RANK, NTILE, RATIO_TO_REPORT 등이 있다. CUME_DIST는 누적 분포, PERCENT_RANK는 상대 순위를 계산한다."
  },
  {
    "id": 3842,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "아래 설명을 만족하는 SQL로 알맞은 것은?\n\n**<지문>**\n부서별로 연봉을 오름차순 정렬하고, 현재 연봉 기준 -100부터 +200 사이의 연봉자 수를 구한다.",
    "choices": [
      "SELECT emp_id, salary, COUNT(*) OVER (PARTITION BY dep_id ORDER BY salary ROWS BETWEEN 100 PRECEDING AND 200 FOLLOWING) AS salary_count FROM emp",
      "SELECT emp_id, salary, COUNT(*) OVER (PARTITION BY dep_id ORDER BY salary RANGE BETWEEN 100 PRECEDING AND 200 FOLLOWING) AS salary_count FROM emp",
      "SELECT emp_id, salary, COUNT(*) OVER (PARTITION BY dep_id) AS salary_count FROM emp",
      "SELECT emp_id, salary, COUNT(*) OVER (ORDER BY salary RANGE BETWEEN 100 PRECEDING AND 200 FOLLOWING) AS salary_count FROM emp"
    ],
    "answer": 1,
    "explanation": "정답: 2. 연봉 값의 범위 -100부터 +200 사이를 기준으로 세야 하므로 ROWS가 아니라 RANGE를 사용하고, 부서별 계산을 위해 PARTITION BY dep_id가 필요하다.\n\n**오답 풀이**\n- 1번: ROWS는 물리적 행 수 기준이므로 연봉 값 범위 조건에 맞지 않는다.\n- 2번: 부서별 파티션과 연봉 값 범위 프레임을 올바르게 사용했다.\n- 3번: 부서 전체 건수만 계산하고 연봉 범위를 반영하지 않는다.\n- 4번: 부서별 파티션이 없어 전체 기준으로 계산된다.\n\n**보충 개념**\nROWS는 행 개수 기준, RANGE는 ORDER BY 값의 논리적 범위 기준이다. 급여 ± 범위 같은 문제는 RANGE 프레임을 사용한다."
  },
  {
    "id": 3843,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "아래 SQL에서 EMPLOYEE_ID가 7780인 행의 결과로 알맞은 것은?\n\n**<TAB>**\n| EMPLOYEE_ID | SALARY |\n|---:|---:|\n| 7780 | 4000 |\n| 7781 | 4000 |\n| 7782 | 3000 |\n| 7783 | 3000 |\n| 7784 | 2000 |\n\n```sql\nSELECT EMPLOYEE_ID,\n       ROW_NUMBER() OVER (ORDER BY SALARY, EMPLOYEE_ID) AS ROW_NUM,\n       RANK() OVER (ORDER BY SALARY) AS RANK_NUM,\n       DENSE_RANK() OVER (ORDER BY SALARY) AS DENSE_RANK_NUM\nFROM EMPLOYEES;\n```",
    "choices": [
      "4, 4, 3",
      "3, 3, 3",
      "4, 4, 4",
      "3, 4, 3"
    ],
    "answer": 0,
    "explanation": "정답: 1. SALARY 오름차순에서 2000이 1번째, 3000 두 행이 2~3번째, 4000 두 행이 4~5번째이다. ROW_NUMBER는 SALARY, EMPLOYEE_ID 기준으로 정렬하므로 7780은 4000 그룹의 첫 번째가 되어 ROW_NUMBER 4, RANK 4, DENSE_RANK 3이다.\n\n**오답 풀이**\n- 1번: ROW_NUMBER 4, RANK 4, DENSE_RANK 3으로 맞다.\n- 2번: RANK가 3이 될 수 없다.\n- 3번: DENSE_RANK는 4000을 세 번째 distinct 값으로 보므로 3이다.\n- 4번: ROW_NUMBER가 3이 될 수 없다.\n\n**보충 개념**\nROW_NUMBER는 행마다 고유 번호를 부여한다. RANK는 동점 이후 순위를 건너뛰고, DENSE_RANK는 동점 이후 순위를 건너뛰지 않는다. ROW_NUMBER는 동점이 있으면 추가 정렬 기준을 명시해야 결과가 안정적이다."
  },
  {
    "id": 3844,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "강좌번호가 100, 101인 과목을 동시에 듣는 학번을 구하는 SQL로 알맞은 것은?",
    "choices": [
      "SELECT 학번 FROM 수강 WHERE 강좌번호 = 100 AND 강좌번호 = 101",
      "SELECT 학번 FROM 수강 WHERE 강좌번호 = 100 INTERSECT SELECT 학번 FROM 수강 WHERE 강좌번호 = 101",
      "SELECT 학번 FROM 수강 WHERE 강좌번호 IN (100, 101)",
      "SELECT 학번 FROM 수강 WHERE 강좌번호 = 100 OR 101"
    ],
    "answer": 1,
    "explanation": "정답: 2. 100번 강좌를 듣는 학번 집합과 101번 강좌를 듣는 학번 집합의 교집합을 구해야 하므로 INTERSECT가 적절하다.\n\n**오답 풀이**\n- 1번: 한 행의 강좌번호가 동시에 100이면서 101일 수 없다.\n- 2번: 두 강좌를 모두 듣는 학번을 교집합으로 구한다.\n- 3번: 둘 중 하나만 듣는 학번도 포함된다.\n- 4번: `OR 101`은 올바른 조건식이 아니다.\n\n**보충 개념**\n동시에 만족해야 하는 조건이 서로 다른 행에 나뉘어 존재할 때는 INTERSECT, GROUP BY HAVING COUNT, 셀프 조인 등을 사용할 수 있다."
  },
  {
    "id": 3845,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "아래 결과를 출력하는 SQL의 빈칸에 적절한 것은?\n\n**<SQL>**\n```sql\nSELECT 이름,\n       점수,\n       (SELECT ( 1 )\n        FROM 점수테이블 T2\n        WHERE ( 2 )) AS 순위\nFROM 점수테이블 T1\nORDER BY 순위;\n```\n\n**<조건>**\n자기보다 점수가 높은 행의 개수에 1을 더해 등수를 구한다.",
    "choices": [
      "(1) COUNT(*) + 1, (2) T1.점수 < T2.점수",
      "(1) COUNT(*), (2) T1.점수 = T2.점수",
      "(1) RANK() + 1, (2) T1.점수 > T2.점수",
      "(1) SUM(점수), (2) T1.점수 < T2.점수"
    ],
    "answer": 0,
    "explanation": "정답: 1. 자신보다 점수가 높은 행의 개수를 세고 1을 더하면 등수를 구할 수 있으므로 `COUNT(*) + 1`과 `T1.점수 < T2.점수`가 적절하다.\n\n**오답 풀이**\n- 1번: 자기보다 높은 점수의 개수 + 1로 순위를 구한다.\n- 2번: 같은 점수의 개수를 세므로 순위가 아니다.\n- 3번: 서브쿼리 내부에서 RANK()를 그렇게 사용할 수 없다.\n- 4번: 점수 합계를 구하는 식으로 순위 계산과 다르다.\n\n**보충 개념**\n셀프 조인 또는 상관 서브쿼리로 순위를 계산할 수 있다. 현재 행보다 큰 값의 개수에 1을 더하면 내림차순 기준 순위가 된다."
  },
  {
    "id": 3846,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "행이 2건인 테이블에서 결과가 다른 SQL은?",
    "choices": [
      "SELECT * FROM T WHERE ROWNUM <= 1",
      "SELECT * FROM T WHERE ROWNUM < 2",
      "SELECT * FROM T WHERE ROWNUM = 1",
      "SELECT * FROM T WHERE ROWNUM = 2"
    ],
    "answer": 3,
    "explanation": "정답: 4. Oracle에서 ROWNUM은 반환되는 첫 행부터 1이 부여되므로 `ROWNUM = 2` 조건은 첫 행이 통과하지 못해 결과가 나오지 않는다.\n\n**오답 풀이**\n- 1번: 첫 번째 행 1건이 반환된다.\n- 2번: ROWNUM < 2는 첫 번째 행 1건이 반환된다.\n- 3번: ROWNUM = 1은 첫 번째 행 1건이 반환된다.\n- 4번: ROWNUM = 2는 일반적으로 0건이 된다.\n\n**보충 개념**\nROWNUM은 WHERE 조건을 통과하며 반환되는 순서대로 부여된다. N번째 이후 행을 구하려면 인라인 뷰에서 ROWNUM을 먼저 부여한 뒤 바깥 쿼리에서 필터링해야 한다."
  },
  {
    "id": 3847,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "아래 UPDATE 구문에 대한 설명으로 알맞은 것은?\n\n```sql\nUPDATE emp_test A\nSET salary = (\n    SELECT salary * 1.1\n    FROM emp_test B\n    WHERE A.employee_id = B.employee_id\n      AND B.department_id = 60\n);\n```\n\n**<조건>**\nUPDATE 문에는 별도의 WHERE 절이 없다.",
    "choices": [
      "department_id가 60인 사원들의 월급을 10% 인상하는 쿼리이다.",
      "UPDATE ... WHERE department_id = 60과 동일한 의미이다.",
      "오류가 발생한다.",
      "department_id가 60이 아닌 모든 사원들의 salary가 NULL로 수정된다."
    ],
    "answer": 3,
    "explanation": "정답: 4. UPDATE 문 자체에 WHERE 절이 없으므로 모든 행이 갱신 대상이며, 상관 서브쿼리가 department_id=60 조건을 만족하지 않는 행은 NULL을 반환하여 salary가 NULL로 갱신될 수 있다.\n\n**오답 풀이**\n- 1번: department_id=60 조건이며, 전체 UPDATE 대상 제한 조건이 아니다.\n- 2번: UPDATE 문에 WHERE가 없으므로 department_id=60 행만 갱신하는 것과 다르다.\n- 3번: 스칼라 서브쿼리 결과가 없으면 NULL로 처리될 수 있어 문법 오류는 아니다.\n- 4번: 조건에 맞지 않는 행의 salary가 NULL로 바뀔 수 있다.\n\n**보충 개념**\nUPDATE의 SET 절에 서브쿼리를 사용할 때는 UPDATE 대상 행을 제한하는 WHERE 절을 별도로 작성해야 한다. 그렇지 않으면 의도하지 않은 행까지 갱신될 수 있다."
  },
  {
    "id": 3848,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "아래 TABLE에 대한 SQL 수행 후 최종 SUM(COL1) 결과로 가장 적절한 것은?\n\n**<TABLE>**\n- COL1: PRIMARY KEY\n- COL2: CHECK (COL2 > 500)\n\n**<SQL>**\n```sql\nINSERT INTO T VALUES (500, 600);\nUPDATE T SET COL2 = 400 WHERE COL1 = 500;\nINSERT INTO T VALUES (500, 700);\nINSERT INTO T VALUES (270, 800);\nSELECT SUM(COL1) FROM T;\n```",
    "choices": [
      "770",
      "500",
      "0",
      "오류로 인해 모든 작업이 취소된다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 첫 번째 INSERT는 정상 수행되어 COL1=500 행이 저장된다. UPDATE는 COL2를 400으로 바꾸려 하므로 CHECK(COL2 > 500)를 위반해 실패한다. 두 번째 INSERT는 COL1=500이 이미 존재하므로 PRIMARY KEY를 위반해 실패한다. 마지막 INSERT는 정상 수행되어 COL1=270 행이 추가된다. 따라서 최종 SUM(COL1)은 500 + 270 = 770이다.\n\n**오답 풀이**\n- 1번: 정상 반영된 COL1 값 500과 270의 합이다.\n- 2번: 마지막 정상 INSERT를 누락한 값이다.\n- 3번: 정상 INSERT가 모두 취소되는 상황이 아니다.\n- 4번: 개별 DML 오류가 이전의 정상 수행 DML을 자동으로 모두 취소한다고 볼 수 없다.\n\n**보충 개념**\n제약조건을 위반한 DML은 실패하며 해당 변경은 반영되지 않는다. 이전에 정상 수행된 문장까지 자동으로 모두 취소되는 것은 아니다."
  },
  {
    "id": 3849,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUP BY",
    "question": "아래 SQL 결과로 알맞은 것은?\n\n```sql\nSELECT COL1,\n       SUM(매출) AS 총매출\nFROM 매출테이블\nGROUP BY COL1\nORDER BY 총매출;\n```\n\n**<조건>**\n부서1의 총매출은 18000이고, 부서2의 총매출은 11300이다.",
    "choices": [
      "부서1 18000, 부서2 11300",
      "부서2 11300, 부서1 18000",
      "부서1 11300, 부서2 18000",
      "정렬 순서는 보장되지 않는다."
    ],
    "answer": 1,
    "explanation": "정답: 2. ORDER BY 총매출은 기본 오름차순이므로 총매출이 작은 부서2 11300이 먼저 출력되고, 부서1 18000이 다음에 출력된다.\n\n**오답 풀이**\n- 1번: 총매출 내림차순 결과이다.\n- 2번: 총매출 오름차순 정렬 결과이다.\n- 3번: 부서별 총매출 값이 서로 바뀌었다.\n- 4번: ORDER BY가 있으므로 정렬 기준이 있다.\n\n**보충 개념**\nORDER BY에서 정렬 방향을 생략하면 기본값은 ASC이다. 별칭으로 지정한 집계 컬럼을 ORDER BY에서 사용할 수 있다."
  },
  {
    "id": 3850,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "GROUP BY",
    "question": "아래 SQL에 대한 결과로 알맞은 것은?\n\n```sql\nSELECT COL1,\n       MIN(COL2),\n       MAX(COL2),\n       SUM(COL2 + COL3)\nFROM T\nGROUP BY COL1;\n```\n\n**<조건>**\nCOL1이 NULL인 그룹에서는 COL2와 COL3 값이 모두 NULL이다.",
    "choices": [
      "COL1이 NULL인 그룹의 MIN, MAX, SUM 결과는 모두 NULL이다.",
      "COL1이 NULL인 그룹의 MIN, MAX, SUM 결과는 모두 0이다.",
      "COL1이 NULL인 그룹은 GROUP BY 결과에서 제외된다.",
      "SUM(COL2 + COL3)은 NULL을 0으로 자동 변환하여 계산한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 그룹 내 집계 대상 값이 모두 NULL이면 MIN, MAX, SUM 결과는 NULL이 된다.\n\n**오답 풀이**\n- 1번: 모든 집계 대상이 NULL인 경우의 결과로 적절하다.\n- 2번: 집계 함수는 NULL을 자동으로 0으로 바꾸지 않는다.\n- 3번: GROUP BY에서 NULL은 하나의 그룹으로 묶일 수 있다.\n- 4번: NULL이 포함된 산술 연산은 NULL이 된다.\n\n**보충 개념**\n집계 함수는 NULL을 제외하지만, 집계할 값이 모두 NULL이면 SUM, MIN, MAX는 NULL을 반환할 수 있다. COUNT는 대상에 따라 0을 반환할 수 있다."
  },
  {
    "id": 3851,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "아래 빈칸에 알맞은 명령어는?\n\n**<지문>**\n입력, 수정, 삭제한 데이터에 대해 전혀 문제가 없다고 판단됐을 경우 (  ) 명령어로 트랜잭션을 완료할 수 있다.",
    "choices": [
      "COMMIT",
      "ROLLBACK",
      "SAVEPOINT",
      "REVOKE"
    ],
    "answer": 0,
    "explanation": "정답: 1. COMMIT은 트랜잭션의 변경 내용을 확정하고 영구 반영하는 명령어이다.\n\n**오답 풀이**\n- 1번: 트랜잭션을 완료하고 변경 내용을 확정한다.\n- 2번: ROLLBACK은 변경 내용을 취소한다.\n- 3번: SAVEPOINT는 트랜잭션 중간 저장점을 만든다.\n- 4번: REVOKE는 권한 회수 명령이다.\n\n**보충 개념**\nTCL에는 COMMIT, ROLLBACK, SAVEPOINT 등이 있다. COMMIT 이후에는 일반적으로 해당 변경을 ROLLBACK으로 되돌릴 수 없다."
  },
  {
    "id": 3852,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "JOIN",
    "question": "아래 SQL에 대한 설명으로 적절한 것은?\n\n```sql\nSELECT 주문번호, 계좌번호\nFROM 주문\n     JOIN 주문내역 ON 주문.주문번호 = 주문내역.주문번호\nORDER BY 계좌번호 DESC;\n```",
    "choices": [
      "계좌번호를 오름차순으로 정렬한다.",
      "계좌번호를 내림차순으로 정렬한다.",
      "ORDER BY 절이 있으므로 조인이 수행되지 않는다.",
      "DESC는 NULL을 제외하는 조건이다."
    ],
    "answer": 1,
    "explanation": "정답: 2. ORDER BY 계좌번호 DESC는 계좌번호를 내림차순으로 정렬한다.\n\n**오답 풀이**\n- 1번: 오름차순은 ASC 또는 정렬 방향 생략 시 기본값이다.\n- 2번: DESC는 내림차순 정렬을 의미한다.\n- 3번: ORDER BY는 조인 결과를 정렬하는 절이다.\n- 4번: DESC는 NULL 제외 조건이 아니다.\n\n**보충 개념**\nORDER BY는 SELECT 결과의 출력 순서를 결정한다. ASC는 오름차순, DESC는 내림차순이다."
  },
  {
    "id": 3853,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "테이블의 데이터와 종속된 테이블을 지우는 명령어로 알맞은 것은?",
    "choices": [
      "TRUNCATE",
      "DROP CASCADE",
      "DELETE",
      "ALTER"
    ],
    "answer": 1,
    "explanation": "정답: 2. DROP CASCADE는 객체 삭제 시 종속된 객체까지 함께 삭제하는 옵션으로 사용할 수 있다.\n\n**오답 풀이**\n- 1번: TRUNCATE는 테이블 데이터만 빠르게 삭제하고 구조는 유지한다.\n- 2번: 종속 객체까지 함께 제거하는 의미에 가장 적절하다.\n- 3번: DELETE는 행 데이터를 삭제하는 DML이다.\n- 4번: ALTER는 객체 구조 변경 명령이다.\n\n**보충 개념**\nDROP은 객체 자체를 삭제한다. CASCADE 옵션은 종속된 제약조건이나 객체까지 함께 제거할 때 사용된다."
  },
  {
    "id": 3854,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "아래 SQL에 대한 결과로 알맞은 것은?\n\n```sql\nSELECT CASE\n         WHEN 상품구분 = 'A' THEN '취급'\n         WHEN 상품구분 = 'B' THEN '보류'\n         ELSE '취급안함'\n       END AS 처리결과\nFROM 상품;\n```\n\n상품구분이 'C'인 행의 처리결과는?",
    "choices": [
      "취급",
      "보류",
      "취급안함",
      "NULL"
    ],
    "answer": 2,
    "explanation": "정답: 3. CASE 조건 중 상품구분='C'에 해당하는 WHEN이 없으므로 ELSE 절의 '취급안함'이 반환된다.\n\n**오답 풀이**\n- 1번: 'A'일 때 반환되는 값이다.\n- 2번: 'B'일 때 반환되는 값이다.\n- 3번: 조건에 해당하지 않으므로 ELSE 값이 반환된다.\n- 4번: ELSE가 있으므로 NULL이 아니라 '취급안함'이다.\n\n**보충 개념**\nCASE 표현식은 조건을 위에서부터 평가하고 처음 TRUE인 결과를 반환한다. 일치하는 WHEN이 없고 ELSE가 있으면 ELSE 값을 반환한다."
  },
  {
    "id": 3855,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "아래 SQL에 대한 설명으로 알맞은 것은?\n\n```sql\nSELECT *\nFROM T\nWHERE COL1 LIKE 'A%';\n```",
    "choices": [
      "COL1이 대문자 A로 시작하는 모든 행을 조회한다.",
      "COL1이 A로 끝나는 모든 행을 조회한다.",
      "COL1에 A가 포함되지 않은 행을 조회한다.",
      "COL1의 두 번째 문자가 A인 행을 조회한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. LIKE 'A%'는 A로 시작하고 뒤에 임의의 문자열이 오는 값을 찾는다.\n\n**오답 풀이**\n- 1번: A로 시작하는 값 조건이다.\n- 2번: A로 끝나는 조건은 '%A'이다.\n- 3번: A가 포함되지 않는 조건은 NOT LIKE '%A%'와 가깝다.\n- 4번: 두 번째 문자가 A인 조건은 '_A%'이다.\n\n**보충 개념**\nLIKE에서 %는 0개 이상의 임의 문자열을 의미하고, _는 정확히 한 글자를 의미한다."
  },
  {
    "id": 3856,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "아래 SQL 결과를 출력하는 SQL로 알맞은 것은?\n\n**<DATA>**\n| COL1 | COL2 |\n|---:|---:|\n| 1 | NULL |\n| 2 | 1 |\n| 3 | 2 |\n\n**<조건>**\nCOL1 기준으로 정렬했을 때 이전 행의 COL1 값을 COL2처럼 출력한다.",
    "choices": [
      "SELECT COL1, LAG(COL1) OVER (ORDER BY COL1) AS COL2 FROM T",
      "SELECT COL1, LEAD(COL1) OVER (ORDER BY COL1) AS COL2 FROM T",
      "SELECT COL1, FIRST_VALUE(COL1) OVER (ORDER BY COL1) AS COL2 FROM T",
      "SELECT COL1, ROW_NUMBER() OVER (ORDER BY COL1) AS COL2 FROM T"
    ],
    "answer": 0,
    "explanation": "정답: 1. LAG는 현재 행 기준 이전 행의 값을 가져오므로 COL1이 1일 때 NULL, 2일 때 1, 3일 때 2를 반환한다.\n\n**오답 풀이**\n- 1번: 이전 행 값을 가져오는 LAG 사용이 적절하다.\n- 2번: LEAD는 다음 행 값을 가져온다.\n- 3번: FIRST_VALUE는 윈도우의 첫 번째 값을 반환한다.\n- 4번: ROW_NUMBER는 행 번호를 반환한다.\n\n**보충 개념**\nLAG는 이전 행, LEAD는 다음 행의 값을 참조하는 윈도우 함수이다. 시계열 비교나 이전 값 대비 변화량 계산에 자주 사용된다."
  },
  {
    "id": 3857,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "아래 SQL의 결과로 알맞은 것은?\n\n```sql\nSELECT COUNT(*) + COUNT(col1) + COUNT(DISTINCT col2) AS RESULT\nFROM T;\n```\n\n**<조건>**\n- 전체 행 수는 5건이다.\n- col1이 NULL이 아닌 행 수는 3건이다.\n- col2의 중복 제거 후 NULL이 아닌 값의 수는 2건이다.",
    "choices": [
      "5",
      "8",
      "10",
      "12"
    ],
    "answer": 2,
    "explanation": "정답: 3. COUNT(*)는 5, COUNT(col1)은 3, COUNT(DISTINCT col2)는 2이므로 합계는 10이다.\n\n**오답 풀이**\n- 1번: COUNT(*)만 계산한 값이다.\n- 2번: COUNT(DISTINCT col2)를 누락한 값이다.\n- 3번: 5 + 3 + 2 = 10으로 맞다.\n- 4번: NULL 또는 중복 값을 잘못 포함한 값이다.\n\n**보충 개념**\nCOUNT(*)는 전체 행 수를 센다. COUNT(컬럼)은 NULL이 아닌 값만 세고, COUNT(DISTINCT 컬럼)은 NULL을 제외하고 중복을 제거한 개수를 센다."
  },
  {
    "id": 3858,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "단일행 함수에 대한 설명으로 적절하지 않은 것은?",
    "choices": [
      "각 행에 개별적으로 적용된다.",
      "여러 인자를 넣을 수 있다.",
      "중첩 사용이 가능하다.",
      "GROUP BY 절에는 사용할 수 없다."
    ],
    "answer": 3,
    "explanation": "정답: 4. 단일행 함수는 SELECT, WHERE, ORDER BY뿐 아니라 GROUP BY 절에서도 사용할 수 있다.\n\n**오답 풀이**\n- 1번: 단일행 함수는 각 행에 대해 개별적으로 작동한다.\n- 2번: 함수에 따라 여러 인자를 받을 수 있다.\n- 3번: 함수의 인자로 다른 함수를 넣는 중첩 사용이 가능하다.\n- 4번: GROUP BY 절에 사용할 수 없다는 설명은 틀리다.\n\n**보충 개념**\n단일행 함수는 각 행마다 하나의 결과를 반환한다. 예를 들어 `GROUP BY SUBSTR(name, 1, 3)`처럼 함수 표현식을 그룹 기준으로 사용할 수 있다."
  },
  {
    "id": 3859,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "INNER JOIN",
    "question": "INNER JOIN에 대한 설명 중 적절하지 않은 것은?",
    "choices": [
      "조인 조건을 만족하는 행만 결과에 포함한다.",
      "ON 절을 사용하여 조인 조건을 명시할 수 있다.",
      "조인으로 사용되는 컬럼은 컬럼명이 반드시 같아야 한다.",
      "조인 조건이 같음 비교이면 등가 조인으로 볼 수 있다."
    ],
    "answer": 2,
    "explanation": "정답: 3. INNER JOIN에서 조인 컬럼의 이름이 반드시 같을 필요는 없으며 ON 절에서 서로 다른 이름의 컬럼도 조건으로 연결할 수 있다.\n\n**오답 풀이**\n- 1번: INNER JOIN은 조건을 만족하는 행만 반환한다.\n- 2번: ON 절로 조인 조건을 작성할 수 있다.\n- 3번: 컬럼명이 반드시 같아야 한다는 설명은 틀리다.\n- 4번: 같은 값 비교 조건이면 등가 조인이다.\n\n**보충 개념**\nUSING이나 NATURAL JOIN은 동일 이름 컬럼을 전제로 하지만, ON 절을 사용하는 일반 INNER JOIN은 컬럼명이 달라도 조인할 수 있다."
  },
  {
    "id": 3860,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "INNER JOIN",
    "question": "아래 SQL에 대한 결과로 알맞은 것은?\n\n**<T1>**\n| col1 | col2 | col3 |\n|---|---|---:|\n| 가 | A | 2 |\n| 나 | B | 3 |\n| 다 | C | NULL |\n\n**<T2>**\n| col1 | col2 |\n|---:|---|\n| 2 | A |\n| 3 | C |\n\n```sql\nSELECT *\nFROM T1 INNER JOIN T2 ON T1.COL2 = T2.COL2\nWHERE 1 = 1\n  AND T1.COL3 >= 3\n  AND T2.COL2 IN ('A', 'B');\n```",
    "choices": [
      "결과 없음",
      "가",
      "나",
      "다"
    ],
    "answer": 0,
    "explanation": "정답: 1. 조인 조건 T1.COL2 = T2.COL2를 만족하는 것은 A와 C이다. A 행은 T1.COL3이 2라서 `>= 3`을 만족하지 못하고, C 행은 COL3이 NULL이며 T2.COL2 IN ('A','B')도 만족하지 못하므로 최종 결과가 없다.\n\n**오답 풀이**\n- 1번: 모든 조건을 동시에 만족하는 행이 없다.\n- 2번: 가 행은 조인은 되지만 COL3 >= 3 조건을 만족하지 않는다.\n- 3번: 나 행은 T2에 COL2='B'가 없어 조인되지 않는다.\n- 4번: 다 행은 COL3이 NULL이고 T2.COL2가 C라 조건을 만족하지 않는다."
  },
  {
    "id": 20215,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "다음 중 키 엔터티(Key Entity, 기본 엔터티)에 해당하지 않는 것은?",
    "choices": [
      "사원",
      "프로젝트",
      "회사",
      "고객"
    ],
    "answer": 1,
    "explanation": "정답: 2. 키 엔터티(기본 엔터티)는 다른 엔터티의 도움 없이 독립적으로 생성되는 부모 성격의 엔터티이다. 사원·회사·고객은 그 자체로 존재하는 기본 엔터티이지만, 프로젝트는 회사·사원 등 선행 엔터티에 의해 발생하는 행위/중심 엔터티 성격이 강해 키 엔터티로 보기 어렵다.\n\n**오답 풀이**\n- ①: 독립적으로 생성되는 전형적인 키 엔터티이다.\n- ②: 정답. 다른 엔터티로부터 발생하는 종속적 성격이라 기본(키) 엔터티에 가장 거리가 멀다.\n- ③: 다른 엔터티 없이 존재하는 키 엔터티이다.\n- ④: 외부의 독립적 주체로 키 엔터티에 해당한다.\n\n**보충 개념**\n엔터티는 발생 시점에 따라 키(기본)·메인(중심)·액티브(행위) 엔터티로 구분한다. 키 엔터티는 다른 엔터티의 자식이 되지 않고 스스로 존재하는 엔터티를 말한다."
  },
  {
    "id": 20216,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "정규화",
    "question": "제3정규형(3NF)에 대한 설명으로 가장 거리가 먼 것은?",
    "choices": [
      "이행 함수 종속성을 배제하지 않는다.",
      "제1정규형의 정의를 만족해야 한다.",
      "제2정규형의 정의를 만족해야 한다.",
      "주식별자를 제외한 일반 속성 간의 함수적 종속성을 제거하는 과정이다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 제3정규형은 이행적 함수 종속성을 '제거'하는 단계이므로, '배제하지 않는다'는 설명은 정의에 정면으로 어긋난다.\n\n**오답 풀이**\n- ①: 정답. 3NF는 이행 종속을 제거하므로 '배제하지 않는다'는 틀린 설명이다.\n- ②: 정규화는 누적적이라 3NF는 1NF를 만족해야 한다. 옳다.\n- ③: 3NF는 2NF를 먼저 만족해야 한다. 옳다.\n- ④: 주식별자 외 일반 속성 간 종속(이행 종속) 제거가 3NF의 본질이다. 옳다.\n\n**보충 개념**\n이행적 함수 종속이란 A→B, B→C일 때 A→C가 성립하는 관계이다. 3NF는 이런 간접 종속을 별도 엔터티로 분리해 제거한다."
  },
  {
    "id": 20217,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "데이터 모델링을 구성하는 세 가지 관점(View)에 해당하지 않는 것은?",
    "choices": [
      "데이터 관점 (Data, What)",
      "프로세스 관점 (Process, How)",
      "상관 관점 (Interaction)",
      "기술 관점 (Technical)"
    ],
    "answer": 3,
    "explanation": "정답: 4. 데이터 모델링의 세 관점은 데이터(What), 프로세스(How), 그리고 둘의 상관 관점(Interaction)이다. 기술 관점은 여기에 포함되지 않는다.\n\n**오답 풀이**\n- ①: 무엇(What)을 다루는 데이터 관점으로 세 관점 중 하나이다.\n- ②: 어떻게(How) 처리하는지의 프로세스 관점으로 세 관점 중 하나이다.\n- ③: 데이터와 프로세스의 상호작용을 보는 상관 관점으로 세 관점 중 하나이다.\n- ④: 정답. 기술 관점은 데이터 모델링의 세 관점에 포함되지 않는다.\n\n**보충 개념**\n데이터 모델링의 세 관점은 데이터(정적 구조), 프로세스(동적 처리), 상관(데이터-프로세스 연관)으로 요약된다."
  },
  {
    "id": 20218,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "데이터 모델링의 유의점 중 '중복성(Duplication)'에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "동일한 정보가 여러 엔터티에 중복 저장되어 데이터의 불일치가 발생할 수 있다.",
      "비즈니스 프로세스 변화에 따라 모델이 유연하게 대처하지 못하는 상태를 의미한다.",
      "데이터 모델의 독립성을 확보하여 데이터 품질을 높이는 과정이다.",
      "데이터의 타입과 길이를 일관되게 유지하여 무결성을 보장하는 것이다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 모델링 유의점에서 중복성은 동일 정보가 여러 곳에 저장되어 갱신 시 데이터 불일치(이상현상)를 유발할 수 있다는 점을 경계하는 것이다.\n\n**오답 풀이**\n- ①: 정답. 중복 저장으로 인한 데이터 불일치 위험을 정확히 설명한다.\n- ②: 유연성(Flexibility) 부족에 대한 설명으로 중복성과는 다른 유의점이다.\n- ③: 데이터 독립성에 대한 설명으로 중복성의 정의가 아니다.\n- ④: 일관성/무결성 확보에 대한 설명으로 중복성과 직접 관련이 없다.\n\n**보충 개념**\n데이터 모델링의 3대 유의점은 중복(Duplication), 비유연성(Inflexibility), 비일관성(Inconsistency)이다. 중복은 한 정보를 여러 곳에 저장해 무결성을 깨뜨릴 위험을 의미한다."
  },
  {
    "id": 20219,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "ERD",
    "question": "다음 마더보드(Motherboard)와 컴퓨터(Computer) 간의 ERD 관계 해석으로 가장 적절한 것은? (단, 관계선에 'O' 표시가 존재함)\n\n<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"sans-serif\">\n  <rect x=\"20\" y=\"40\" width=\"130\" height=\"50\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <text x=\"85\" y=\"70\" text-anchor=\"middle\" font-size=\"16\" fill=\"#0f172a\">마더보드</text>\n  <rect x=\"310\" y=\"40\" width=\"130\" height=\"50\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <text x=\"375\" y=\"70\" text-anchor=\"middle\" font-size=\"16\" fill=\"#0f172a\">컴퓨터</text>\n  <line x1=\"150\" y1=\"65\" x2=\"310\" y2=\"65\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <circle cx=\"178\" cy=\"65\" r=\"7\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"198\" y1=\"53\" x2=\"198\" y2=\"77\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"282\" y1=\"53\" x2=\"282\" y2=\"77\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"294\" y1=\"53\" x2=\"294\" y2=\"77\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <text x=\"230\" y=\"118\" text-anchor=\"middle\" font-size=\"11\" fill=\"#64748b\">O = 선택적 참여 · | = 필수/하나</text>\n</svg>",
    "choices": [
      "모든 컴퓨터에는 반드시 마더보드가 하나만 존재해야 한다.",
      "컴퓨터에 마더보드를 장착할 수도 있고, 장착하지 않을 수도 있다.",
      "마더보드 엔터티는 컴퓨터 엔터티 없이 단독으로 존재할 수 없다.",
      "식별 관계를 통해 두 엔터티의 생명주기를 완벽히 분리한다."
    ],
    "answer": 1,
    "explanation": "정답: 2. 관계선의 'O'(원) 표시는 선택적 참여(Optional)를 의미합니다. 마더보드 쪽 끝에 'O'가 있으므로 '컴퓨터는 마더보드를 가질 수도, 갖지 않을 수도 있다'로 해석됩니다.\n\n**오답 풀이**\n- ①: '반드시 하나만'은 필수 참여(|)의 해석으로, 선택 기호 'O'와 모순됩니다.\n- ②: 정답.\n- ③: 마더보드의 필수 참여를 의미하나, 선택 기호는 컴퓨터→마더보드 방향에 위치합니다.\n- ④: 식별/비식별 관계는 부모의 주식별자를 자식이 상속하는지에 대한 것으로, 생명주기 분리와는 직접 관련이 없습니다.\n\n**보충 개념**: 관계 표기에서 O(동그라미)=선택적 참여(0 가능), |(막대)=필수 참여(최소 1), 까마귀발(crow's foot)=다(多, N)를 의미합니다."
  },
  {
    "id": 20220,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "비식별자 관계(Non-identifying Relationship)에 의해 속성을 생성하는 경우로 가장 적절하지 않은 것은?",
    "choices": [
      "여러 엔터티가 하나의 엔터티로 통합되었더라도 각 엔터티가 별도의 관계를 가지는 경우",
      "각 엔터티의 데이터 생명주기(Life Cycle)를 동일하게 관리하는 경우",
      "자식 엔터티에서 받은 속성(FK)이 반드시 필수가 아니어도 무방한 경우",
      "자식 엔터티에서 주식별자의 사용이 가능하더라도 별도의 주식별자를 생성하는 경우"
    ],
    "answer": 1,
    "explanation": "정답: 2. 부모와 자식의 생명주기를 동일하게 관리하는 경우는 강한 결합인 식별자 관계의 특징이다. 비식별자 관계는 두 엔터티의 생명주기를 별개로 관리할 때 사용하므로, ②는 비식별자 관계의 사례로 가장 적절하지 않다.\n\n**오답 풀이**\n- ①: 통합 후에도 별도 관계가 필요해 약하게 연결하는 비식별자 관계의 사례이다.\n- ②: 정답. 생명주기를 동일하게 관리하는 것은 식별자 관계의 특징이라 비식별자 관계로 부적절하다.\n- ③: 부모의 FK가 NULL을 허용(선택적)해도 되는 상황은 비식별자 관계의 전형적 사례이다.\n- ④: 부모 식별자를 받을 수 있어도 별도 주식별자를 두는 것은 비식별자 관계의 사례이다.\n\n**보충 개념**\n식별자 관계는 부모의 PK가 자식의 PK 일부가 되어 생명주기가 강하게 종속되고, 비식별자 관계는 부모 PK가 자식의 일반 속성(FK)으로만 상속되어 생명주기를 독립적으로 관리한다."
  },
  {
    "id": 20221,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "정규화",
    "question": "관계형 데이터베이스 정규화 과정 중, '이행적 함수 종속성(Transitive Functional Dependency)'을 제거하는 단계는?",
    "choices": [
      "제1정규화",
      "제2정규화",
      "제3정규화",
      "BCNF 정규화"
    ],
    "answer": 2,
    "explanation": "정답: 3. 이행적 함수 종속성(A→B→C로 인한 A→C)을 제거하는 단계는 제3정규화(3NF)이다.\n\n**오답 풀이**\n- ①: 1정규화는 속성의 원자값(반복그룹 제거)을 보장하는 단계이다.\n- ②: 2정규화는 부분 함수 종속을 제거하는 단계이다.\n- ③: 정답. 이행적 함수 종속 제거는 3정규화의 핵심이다.\n- ④: BCNF는 결정자이면서 후보키가 아닌 함수 종속을 제거하는 단계이다.\n\n**보충 개념**\n정규화 단계별 제거 대상: 1NF=원자값(반복그룹), 2NF=부분 종속, 3NF=이행 종속, BCNF=결정자 이상이다."
  },
  {
    "id": 20222,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "두 개 이상의 하위 엔터티 중 하나만 배타적으로 관계를 맺는 '상호배타적 관계(Arc Relationship)'의 사례로 가장 적절한 것은?",
    "choices": [
      "부서와 사원",
      "고객과 주문",
      "교수와 학생",
      "법인차량과 개인차량"
    ],
    "answer": 3,
    "explanation": "정답: 4. 상호배타적(Arc) 관계는 여러 엔터티 중 어느 하나와만 배타적으로 관계를 맺는 구조이다. 차량이 법인차량이거나 개인차량 중 하나에만 속하는 경우가 이에 해당한다.\n\n**오답 풀이**\n- ①: 부서와 사원은 일반적인 1:N 관계로 배타성이 없다.\n- ②: 고객과 주문도 단순 1:N 관계이다.\n- ③: 교수와 학생은 별개의 관계로 배타적 선택 구조가 아니다.\n- ④: 정답. 차량이 법인/개인 중 하나에만 속하는 전형적인 배타적(Arc) 관계이다.\n\n**보충 개념**\nArc(배타적) 관계는 한 엔터티가 둘 이상의 다른 엔터티 중 정확히 하나와만 관계를 맺어야 할 때 사용하며, ERD에서는 호(arc) 기호로 표현한다."
  },
  {
    "id": 20223,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "다음 학생과 수강 엔터티 간의 ERD에 대한 설명으로 가장 적절한 것은?\n\n<svg viewBox=\"0 0 500 160\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"sans-serif\">\n  <rect x=\"20\" y=\"35\" width=\"150\" height=\"74\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"20\" y1=\"62\" x2=\"170\" y2=\"62\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"95\" y=\"54\" text-anchor=\"middle\" font-size=\"15\" fill=\"#0f172a\">학생</text>\n  <text x=\"32\" y=\"84\" font-size=\"12\" fill=\"#0f172a\">학번 (PK)</text>\n  <text x=\"32\" y=\"101\" font-size=\"12\" fill=\"#64748b\">이름</text>\n  <rect x=\"330\" y=\"35\" width=\"150\" height=\"74\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"330\" y1=\"62\" x2=\"480\" y2=\"62\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"405\" y=\"54\" text-anchor=\"middle\" font-size=\"15\" fill=\"#0f172a\">수강</text>\n  <text x=\"342\" y=\"84\" font-size=\"12\" fill=\"#0f172a\">수강번호 (PK)</text>\n  <text x=\"342\" y=\"101\" font-size=\"12\" fill=\"#64748b\">학번 (FK)</text>\n  <line x1=\"170\" y1=\"72\" x2=\"330\" y2=\"72\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"196\" y1=\"60\" x2=\"196\" y2=\"84\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <circle cx=\"300\" cy=\"72\" r=\"6\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"330\" y1=\"72\" x2=\"312\" y2=\"60\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"330\" y1=\"72\" x2=\"312\" y2=\"72\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"330\" y1=\"72\" x2=\"312\" y2=\"84\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <text x=\"250\" y=\"138\" text-anchor=\"middle\" font-size=\"11\" fill=\"#64748b\">학생 1 : 수강 N (수강번호는 고유 식별자)</text>\n</svg>",
    "choices": [
      "수강번호는 학생별로 중복되어 부여될 수 있다.",
      "학생 테이블에 데이터가 존재하면 수강 목록에도 무조건 존재해야 한다.",
      "동일한 수강번호를 여러 학생이 공유하여 가질 수 없다.",
      "한 명의 학생은 반드시 하나의 과목만 수강해야 한다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 수강번호가 수강 엔터티의 주식별자(PK)이므로 각 수강번호는 단 하나의 행만 식별합니다. 따라서 동일한 수강번호를 여러 학생이 공유할 수 없습니다.\n\n**오답 풀이**\n- ①: 수강번호가 PK이므로 중복 부여될 수 없습니다.\n- ②: 수강 쪽 참여가 선택적(O)이므로, 학생이 존재해도 아직 수강하지 않았을 수 있어 수강 목록에 반드시 존재하지는 않습니다.\n- ③: 정답.\n- ④: 학생 1 : 수강 N 관계이므로 한 학생이 여러 과목을 수강할 수 있습니다.\n\n**보충 개념**: 학생(1):수강(N) 관계에서 수강은 자신의 주식별자(수강번호)로 각 행이 고유하게 식별되며, 학번을 외래키(FK)로 가져 어느 학생의 수강인지를 나타냅니다."
  },
  {
    "id": 20224,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "트랜잭션(Transaction)의 특성 중, \"작업이 모두 반영되거나 아니면 전혀 반영되지 않아야 한다(All or Nothing)\"는 부분 수정 불가능 원칙을 의미하는 것은?",
    "choices": [
      "원자성 (Atomicity)",
      "일관성 (Consistency)",
      "고립성 (Isolation)",
      "지속성 (Durability)"
    ],
    "answer": 0,
    "explanation": "정답: 1. 'All or Nothing', 즉 트랜잭션의 작업이 전부 반영되거나 전부 취소되어 부분 처리가 불가능하다는 원칙은 원자성(Atomicity)이다.\n\n**오답 풀이**\n- ①: 정답. 전부 반영 또는 전부 취소를 의미하는 원자성이다.\n- ②: 일관성은 트랜잭션 전후로 DB가 일관된 상태를 유지하는 성질이다.\n- ③: 고립성은 동시 실행 트랜잭션이 서로 간섭하지 않는 성질이다.\n- ④: 지속성은 완료된 트랜잭션 결과가 영구히 보존되는 성질이다.\n\n**보충 개념**\n트랜잭션의 ACID 특성은 원자성(Atomicity), 일관성(Consistency), 고립성(Isolation), 지속성(Durability)으로 구성된다."
  },
  {
    "id": 20225,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 문자열 처리 함수의 실행 결과가 나머지 셋과 다른 하나는? (Oracle 기준)",
    "choices": [
      "SELECT TRIM('xxSQLxx', 'x') FROM DUAL;",
      "SELECT RTRIM('SQLxx', 'x') FROM DUAL;",
      "SELECT REPLACE('xxSQLxx', 'x') FROM DUAL;",
      "SELECT LTRIM('xxSQL', 'x') FROM DUAL;"
    ],
    "answer": 0,
    "explanation": "정답: 1. ②③④는 모두 'SQL'을 반환하지만, ①은 문법 오류(ORA-00907)로 결과가 다르다. 오라클 TRIM은 `TRIM([LEADING|TRAILING|BOTH] 문자 FROM 문자열)` 형태만 허용하며, `TRIM('xxSQLxx', 'x')`처럼 콤마로 두 인수를 넘기는 문법은 지원하지 않는다.\n\n**오답 풀이**\n- ①: 정답. 콤마 구분 2인수 TRIM 문법은 오라클에서 오류(ORA-00907 missing right parenthesis)가 발생하여 값을 반환하지 못한다.\n- ②: RTRIM('SQLxx','x')는 오른쪽 끝의 'x'들을 제거해 'SQL'을 반환한다.\n- ③: REPLACE('xxSQLxx','x')처럼 세 번째 인수를 생략하면 'x'를 빈 문자열로 치환하여 'SQL'을 반환한다.\n- ④: LTRIM('xxSQL','x')는 왼쪽 앞의 'x'들을 제거해 'SQL'을 반환한다.\n\n**보충 개념**\nTRIM은 양쪽 한 종류의 문자만 제거하며 `FROM` 키워드를 쓴다. RTRIM/LTRIM은 두 번째 인수로 제거할 문자 집합을 받고, REPLACE는 세 번째 인수를 생략하면 대상 문자열을 삭제한다."
  },
  {
    "id": 20226,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "아래 SQL 문의 실행 결과로 추출되는 행의 개수는? (단, 데이터에는 'a_c', 'abc', 'acc'가 각각 1건씩 존재한다.)\n\n```sql\nSELECT * FROM TABLE_A \nWHERE COL LIKE '%a\\_c%' ESCAPE '\\';\n```",
    "choices": [
      "0",
      "1",
      "4",
      "6"
    ],
    "answer": 1,
    "explanation": "정답: 2. ESCAPE '\\'를 지정하면 `\\_`의 언더바는 와일드카드가 아니라 '_' 문자 그 자체를 의미한다. 따라서 패턴 `%a_c%`는 'a', 리터럴 '_', 'c'가 순서대로 포함된 문자열만 매칭한다.\n\n**오답 풀이**\n- ①: 'a_c'가 정확히 패턴을 만족하므로 0건이 아니다.\n- ②: 정답. 'a_c'만 'a'+리터럴'_'+'c' 패턴을 만족하여 1건이 반환된다.\n- ③: ESCAPE가 없을 때 '_'를 임의 한 글자로 보면 3건 모두 매칭되지만, 여기서는 ESCAPE로 리터럴 처리되어 4건이 될 수 없다.\n- ④: 전체 데이터는 3건뿐이므로 6건은 불가능하다.\n\n**보충 개념**\nLIKE에서 '_'는 임의의 한 글자, '%'는 임의의 0글자 이상을 뜻한다. ESCAPE 문자를 와일드카드 앞에 붙이면 해당 와일드카드를 리터럴 문자로 검색할 수 있다."
  },
  {
    "id": 20227,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "정규화",
    "question": "정규표현식 패턴 ^\\w*$에 매칭되지 않는 것은?",
    "choices": [
      "ER-123",
      "abcde",
      "SQL58",
      "admin123"
    ],
    "answer": 0,
    "explanation": "정답: 1. `\\w`는 단어 문자 클래스 [A-Za-z0-9_]를 의미하고 `^\\w*$`는 문자열 전체가 단어 문자로만 이루어져야 매칭된다. 'ER-123'은 하이픈(-)을 포함하므로 매칭되지 않는다.\n\n**오답 풀이**\n- ①: 정답. 하이픈 '-'은 `\\w`에 포함되지 않으므로 `^\\w*$` 전체 매칭에 실패한다.\n- ②: 'abcde'는 모두 영문자이므로 매칭된다.\n- ③: 'SQL58'은 영문자와 숫자뿐이므로 매칭된다.\n- ④: 'admin123'은 영문자와 숫자뿐이므로 매칭된다.\n\n**보충 개념**\n`^`는 문자열 시작, `$`는 끝, `*`는 0회 이상 반복을 뜻한다. `\\w`는 영문자·숫자·언더바를 포함하지만 하이픈·공백·점 등 특수문자는 포함하지 않는다."
  },
  {
    "id": 20228,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "DCL",
    "question": "다음 일련의 DCL 명령어가 수행된 후, 테이블 R에 대해 SELECT 권한을 유지하고 있는 유저를 모두 고르시오.\n\n```sql\nDBA : GRANT SELECT, INSERT, DELETE ON R TO U1;\nDBA : GRANT SELECT ON R TO U2 WITH GRANT OPTION;\nU2  : GRANT SELECT ON R TO U3;\nDBA : REVOKE DELETE ON R FROM U1;\n```",
    "choices": [
      "DBA, U1",
      "DBA",
      "DBA, U1, U3",
      "DBA, U1, U2, U3"
    ],
    "answer": 3,
    "explanation": "정답: 4. 명령을 순서대로 추적하면 DBA(소유자), U1, U2, U3 모두 SELECT 권한을 유지한다.\n\n**오답 풀이**\n- ①: U2(WITH GRANT OPTION으로 SELECT 보유)와 U3(U2로부터 SELECT 부여받음)가 빠져 있다.\n- ②: U1은 DELETE만 회수되었을 뿐 SELECT는 그대로 유지하므로 DBA만은 아니다.\n- ③: U2가 누락되었다. U2는 SELECT WITH GRANT OPTION을 받았고 회수되지 않았다.\n- ④: 정답. DBA는 객체 소유자이고, U1은 SELECT 유지(DELETE만 회수), U2는 SELECT 보유, U3는 U2로부터 SELECT를 전달받아 모두 SELECT 권한을 가진다.\n\n**보충 개념**\nGRANT는 권한 부여, REVOKE는 회수다. WITH GRANT OPTION을 받은 사용자는 같은 권한을 다른 사용자에게 재부여할 수 있다. 마지막 REVOKE는 U1의 DELETE만 대상으로 하므로 U1의 SELECT/INSERT에는 영향이 없다."
  },
  {
    "id": 20229,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "OUTER JOIN",
    "question": "다음 [CUST] 테이블과 [GRADE] 테이블 데이터가 주어졌을 때, 아래 3개의 SQL 문을 실행한 결과값(반환되는 행의 수)의 총합(ㄱ+ㄴ+ㄷ)으로 가장 적절한 것은?\n\n**[CUST]**\n\n| CUST_ID | AMOUNT |\n| ---: | ---: |\n| 1 | 100 |\n| 2 | 120 |\n| 3 | 200 |\n\n**[GRADE]**\n\n| GRADE | MIN_AMT | MAX_AMT |\n| --- | ---: | ---: |\n| A | 250 | 350 |\n| B | 150 | 249 |\n| C | 50 | 149 |\n| D | 0 | 49 |\n\n```sql\n-- (ㄱ) \nSELECT COUNT(*) FROM CUST CROSS JOIN GRADE;\n\n-- (ㄴ) \nSELECT COUNT(*) FROM CUST A \nINNER JOIN GRADE B ON A.AMOUNT BETWEEN B.MIN_AMT AND B.MAX_AMT;\n\n-- (ㄷ) \nSELECT COUNT(*) FROM CUST A \nFULL OUTER JOIN GRADE B ON A.AMOUNT BETWEEN B.MIN_AMT AND B.MAX_AMT;\n```",
    "choices": [
      "17",
      "18",
      "19",
      "20"
    ],
    "answer": 3,
    "explanation": "정답: 4. (ㄱ)12 + (ㄴ)3 + (ㄷ)5 = 20이다.\n\n(ㄱ) CROSS JOIN은 카티션 곱이므로 3 × 4 = 12행.\n(ㄴ) INNER JOIN(BETWEEN): 100→C, 120→C, 200→B로 각각 1건씩 매칭되어 3행.\n(ㄷ) FULL OUTER JOIN: 매칭 3행 + 미매칭 좌측(CUST) 0행(3건 모두 매칭됨) + 미매칭 우측(GRADE) 2행(A[250~350], D[0~49]는 매칭되는 AMOUNT가 없음) = 5행.\n\n**오답 풀이**\n- ①: 17은 (ㄷ)을 3으로 잘못 본 경우의 값으로, 미매칭 GRADE 2건을 더하지 않았다.\n- ②: 18은 계산 오류다.\n- ③: 19는 계산 오류다.\n- ④: 정답. 12 + 3 + 5 = 20이다.\n\n**보충 개념**\nFULL OUTER JOIN은 INNER 결과에 더해 양쪽의 미매칭 행을 모두 포함한다. BETWEEN 조인은 등가 조인이 아니므로 범위에 들어가는 행만 결합되고, 어느 행과도 결합되지 못한 GRADE 행은 우측 미매칭으로 별도 출력된다."
  },
  {
    "id": 20230,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "온라인 쇼핑몰의 결제 정보를 관리하는 다음 [결제내역] 테이블이 있다. 2025년 12월의 월별 총 결제 건수를 집계하고자 할 때, 다음 중 실행 결과가 올바르게 나오지 않는 SQL 구문은?\n\n**[결제내역]**\n\n| 결제번호 | 결제일시 |\n| --- | --- |\n| PAY001 | 2025-12-01 10:15:00 |\n| PAY002 | 2025-12-25 18:30:00 |\n| PAY003 | 2026-01-05 09:00:00 |",
    "choices": [
      "SELECT COUNT(*) FROM 결제내역 WHERE TO_CHAR(결제일시, 'YYYYMM') = '202512';",
      "SELECT COUNT(*) FROM 결제내역 WHERE 결제일시 >= TO_DATE('20251201', 'YYYYMMDD') AND 결제일시 < TO_DATE('20260101', 'YYYYMMDD');",
      "SELECT COUNT(*) FROM 결제내역 WHERE SUBSTR(TO_CHAR(결제일시, 'YYYY-MM-DD'), 1, 7) = '2025-12';",
      "SELECT COUNT(*) FROM 결제내역 WHERE TRUNC(결제일시) = TO_DATE('2025-12', 'YYYY-MM');"
    ],
    "answer": 3,
    "explanation": "정답: 4. ④는 2025년 12월 전체가 아니라 2025-12-01 하루만 집계하므로 결과가 올바르지 않다. TO_DATE('2025-12','YYYY-MM')은 일(日)이 명시되지 않아 해당 월의 1일(2025-12-01 00:00:00)로 보정된다. TRUNC(결제일시)는 시간만 제거하고 날짜는 보존하므로, 이 비교는 2025-12-01 데이터(PAY001) 1건만 매칭하여 정답 2건과 다르다.\n\n**오답 풀이**\n- ①: TO_CHAR로 'YYYYMM'='202512'를 비교해 12월 2건(PAY001, PAY002)을 정확히 집계한다.\n- ②: 12월 1일 이상 ~ 다음 해 1월 1일 미만 범위로 12월 2건을 정확히 집계한다.\n- ③: 'YYYY-MM-DD' 문자열에서 앞 7자리('2025-12')를 비교해 12월 2건을 정확히 집계한다.\n- ④: 정답(오답 구문). TO_DATE의 일 보정과 TRUNC 특성 때문에 12월 1일 1건만 집계되어 원하는 결과가 나오지 않는다.\n\n**보충 개념**\n월 전체를 조건으로 걸 때는 TO_CHAR(컬럼,'YYYYMM') 비교나 `>= 1일 AND < 다음달 1일` 범위 조건을 사용한다. TO_DATE에서 일을 생략하면 자동으로 1일이 되며, TRUNC(date)는 시·분·초만 잘라내고 일 단위는 유지한다는 점을 구분해야 한다."
  },
  {
    "id": 20231,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "오라클(Oracle)의 계층형 질의(Hierarchical Query)에 대한 설명으로 가장 틀린 것은?",
    "choices": [
      "START WITH 절은 계층 구조의 시작점을 지정하는 역할을 한다.",
      "CONNECT BY 절에 PRIOR 키워드를 사용하여 부모와 자식 간의 관계를 정의한다.",
      "ORDER SIBLINGS BY 구문은 동일한 부모를 가진 형제 노드 사이의 정렬을 위해 사용된다.",
      "WHERE 절은 START WITH 및 CONNECT BY 전개 이전에 먼저 적용되어 계층 구조를 형성할 대상 데이터를 제한한다."
    ],
    "answer": 3,
    "explanation": "정답: 4. WHERE 절(조인 조건 제외)은 START WITH와 CONNECT BY로 계층을 전개한 '이후'에 적용되어 결과 행을 걸러낸다. 따라서 '전개 이전에 먼저 적용된다'는 설명은 틀렸다.\n\n**오답 풀이**\n- ①: START WITH는 계층 전개의 루트(시작점)를 지정하므로 옳다.\n- ②: CONNECT BY의 PRIOR는 부모-자식 연결 방향을 정의하므로 옳다.\n- ③: ORDER SIBLINGS BY는 같은 부모를 가진 형제 노드 간 정렬에 사용되므로 옳다.\n- ④: 정답(틀린 설명). WHERE는 계층 전개 후에 적용되어 개별 행을 필터링하며, 전개 대상 자체를 사전에 제한하지 않는다.\n\n**보충 개념**\n오라클 계층형 질의의 처리 순서는 (1) START WITH로 루트 선정 → (2) CONNECT BY로 계층 전개 → (3) WHERE로 결과 필터링 순이다. 다만 CONNECT BY 절 내부에 명시한 조인 조건은 전개 과정에서 함께 평가된다."
  },
  {
    "id": 20232,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 테이블 컬럼에 데이터가 (10, 20, NULL, 30)으로 입력되어 있을 때, AVG(컬럼)의 결과값으로 옳은 것은?",
    "choices": [
      "15",
      "20",
      "30",
      "NULL"
    ],
    "answer": 1,
    "explanation": "정답: 2. AVG는 NULL을 제외하고 계산한다. NULL을 뺀 (10, 20, 30)의 합은 60이고 개수는 3이므로 60 ÷ 3 = 20이다.\n\n**오답 풀이**\n- ①: 15는 NULL을 0으로 포함해 60 ÷ 4로 잘못 계산한 값이다.\n- ②: 정답. NULL을 제외한 3개 값의 평균은 60 ÷ 3 = 20이다.\n- ③: 30은 최댓값일 뿐 평균이 아니다.\n- ④: AVG는 일부 값이 NULL이어도 나머지 값으로 평균을 계산하므로 NULL이 아니다.\n\n**보충 개념**\nCOUNT(*)를 제외한 그룹 함수(AVG, SUM, MAX, MIN, COUNT(컬럼))는 NULL을 무시한다. 평균은 NULL이 아닌 값의 합을 NULL이 아닌 값의 개수로 나눈다."
  },
  {
    "id": 20233,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "JOIN",
    "question": "조인(JOIN) 수행 시 우측 테이블의 모든 데이터를 포함하여 결과를 생성하는 조인 방식은?",
    "choices": [
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "FULL OUTER JOIN",
      "CROSS JOIN"
    ],
    "answer": 0,
    "explanation": "정답: 1. RIGHT OUTER JOIN은 우측(오른쪽) 테이블의 모든 행을 결과에 포함하고, 좌측 테이블에 매칭되는 행이 없으면 해당 컬럼을 NULL로 채운다.\n\n**오답 풀이**\n- ①: 정답. RIGHT OUTER JOIN은 우측 테이블의 모든 행을 보존한다.\n- ②: LEFT OUTER JOIN은 좌측 테이블의 모든 행을 보존한다.\n- ③: FULL OUTER JOIN은 양쪽 테이블의 모든 행을 보존하므로 '우측만'의 설명과 다르다.\n- ④: CROSS JOIN은 조인 조건 없이 두 테이블의 카티션 곱을 생성한다.\n\n**보충 개념**\nOUTER JOIN은 기준이 되는 테이블의 행을 모두 살리는 조인이다. LEFT는 왼쪽, RIGHT는 오른쪽, FULL은 양쪽을 모두 보존하며, 매칭되지 않는 상대 테이블 컬럼은 NULL로 표시된다."
  },
  {
    "id": 20234,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "서브쿼리",
    "question": "서브쿼리에 대한 설명 중 틀린 것은?",
    "choices": [
      "다중행 서브쿼리는 단일행 비교 연산자(=)와 함께 쓸 수 있다.",
      "서브쿼리는 메인쿼리보다 먼저 실행될 수 있다.",
      "서브쿼리의 반환 건수에 따라 단일행, 다중행으로 나뉜다.",
      "인라인 뷰는 FROM 절에 사용된다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 다중행 서브쿼리는 여러 행을 반환하므로 단일행 비교 연산자(=, >, < 등)와 함께 쓸 수 없고, IN·ANY·ALL·EXISTS 같은 다중행 연산자를 사용해야 한다. 다중행 결과에 '='를 쓰면 ORA-01427(단일 행 하위 질의에 두 개 이상의 행이 반환됨) 오류가 발생한다.\n\n**오답 풀이**\n- ①: 정답(틀린 설명). 다중행 서브쿼리에 '='를 쓰면 오류가 나므로 다중행 연산자를 써야 한다.\n- ②: 서브쿼리(특히 비연관 서브쿼리)는 메인쿼리보다 먼저 실행될 수 있으므로 옳다.\n- ③: 반환 건수에 따라 단일행(1건)·다중행(여러 건) 서브쿼리로 구분되므로 옳다.\n- ④: 인라인 뷰는 FROM 절에 쓰이는 서브쿼리이므로 옳다.\n\n**보충 개념**\n단일행 서브쿼리는 =, >, <, >=, <=, <> 등 단일행 연산자와 쓰고, 다중행 서브쿼리는 IN, ANY/SOME, ALL, EXISTS 등 다중행 연산자와 함께 사용한다. SELECT 절의 스칼라 서브쿼리, FROM 절의 인라인 뷰, WHERE 절의 중첩 서브쿼리로 위치별 분류도 가능하다."
  },
  {
    "id": 20235,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUPING",
    "question": "소계 함수(ROLLUP/CUBE)와 함께 사용되는 GROUPING 함수의 특징은?",
    "choices": [
      "집계 연산으로 생성된 NULL 항목에 대해 1을 반환한다.",
      "집계에 사용되지 않은 데이터는 무조건 에러가 난다.",
      "데이터 자체에 들어있는 NULL과 집계로 인한 NULL을 구분할 수 없다.",
      "ROLLUP에만 사용할 수 있다."
    ],
    "answer": 0,
    "explanation": "정답: 1. GROUPING 함수는 ROLLUP/CUBE/GROUPING SETS 가 만들어 낸 소계·총계 행의 NULL(집계로 인한 NULL)이면 1을, 그렇지 않으면 0을 반환한다.\n\n**오답 풀이**\n- ①: 정답.\n- ②: 집계에 쓰이지 않은 데이터로 에러가 나지 않는다. GROUPING 은 단지 0/1 을 돌려줄 뿐이다.\n- ③: 정반대다. GROUPING 함수의 존재 이유가 바로 '원본 데이터의 NULL'과 '집계로 생성된 NULL'을 구분하는 것이다.\n- ④: ROLLUP 뿐 아니라 CUBE, GROUPING SETS 에서도 사용할 수 있다.\n\n**보충 개념**\nGROUPING(컬럼) 은 해당 행이 그 컬럼에 대해 소계/총계로 집계되어 NULL 이 되었으면 1, 일반 상세 행이면 0 을 반환한다. CASE WHEN GROUPING(col)=1 THEN '합계' ELSE col END 식으로 소계 라벨을 붙이는 데 자주 쓰인다. 여러 컬럼을 묶어 표현하는 GROUPING_ID 함수도 있다."
  },
  {
    "id": 20236,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "NTILE(2) 윈도우 함수를 적용했을 때의 결과로 가장 적절한 것은? (단, 데이터는 1, 2, 3, 4 이다.)",
    "choices": [
      "1, 1, 2, 2",
      "1, 2, 3, 4",
      "1, 1, 1, 2",
      "2, 2, 1, 1"
    ],
    "answer": 0,
    "explanation": "정답: 1. NTILE(2) 는 정렬된 4개 행을 가능한 한 균등하게 2개 그룹으로 나눠 그룹 번호를 매긴다.\n\n**오답 풀이**\n- ①: 정답. 4행 ÷ 2그룹 = 그룹당 2행이므로 앞 두 행은 1, 뒤 두 행은 2 → 1, 1, 2, 2.\n- ②: ROW_NUMBER() 의 결과이지 NTILE 의 결과가 아니다.\n- ③: 3:1 로 나뉘는 형태로, 균등 분할 원칙과 맞지 않는다.\n- ④: NTILE 그룹 번호는 정렬 순서대로 1부터 증가하므로 2,2,1,1 처럼 역순으로 매겨지지 않는다.\n\n**보충 개념**\nNTILE(n) 은 전체 행을 n 개의 버킷으로 나눈다. 행 수가 버킷 수로 나누어떨어지지 않으면 앞쪽 버킷부터 한 행씩 더 채운다(예: 5행을 NTILE(2) → 3행+2행 = 1,1,1,2,2)."
  },
  {
    "id": 20237,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "집합 A={1, 2, 3}, B={6, 7}에 대하여 결과 집합이 {(1,6), (2,6), (3,6), (1,7), (2,7), (3,7)}로 출력되었다면, 어떤 조인을 사용한 것인가?",
    "choices": [
      "LEFT OUTER JOIN",
      "CROSS JOIN",
      "INNER JOIN",
      "SELF JOIN"
    ],
    "answer": 1,
    "explanation": "정답: 2. A의 3개 원소와 B의 2개 원소가 모든 조합(3×2=6건)으로 짝지어졌으므로 곱집합(Cartesian Product), 즉 CROSS JOIN 이다.\n\n**오답 풀이**\n- ①: LEFT OUTER JOIN 은 조인 조건과 기준 테이블이 필요하며, 모든 조합을 만들지 않는다.\n- ②: 정답. 조인 조건 없이 두 집합의 모든 조합을 생성하는 것이 CROSS JOIN 이다.\n- ③: INNER JOIN 은 조인 조건을 만족하는 행만 반환한다. 모든 조합이 나온 것과 다르다.\n- ④: SELF JOIN 은 한 테이블을 자기 자신과 조인하는 것으로, 서로 다른 두 집합 A·B의 조합과 무관하다.\n\n**보충 개념**\nCROSS JOIN 의 결과 건수는 두 테이블 행 수의 곱이다. `FROM A CROSS JOIN B` 또는 조인 조건 없는 `FROM A, B` 로 표현하며, 결과 컬럼 조합 {(1,6)...(3,7)} 처럼 모든 m×n 짝이 나온다."
  },
  {
    "id": 20238,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "JOIN",
    "question": "다음 조인(JOIN) 문법 중 실행 시 에러가 발생하는 것은?",
    "choices": [
      "SELECT * FROM T1 NATURAL JOIN T2 ON T1.ID = T2.ID;",
      "SELECT * FROM T1 JOIN T2 USING (ID);",
      "SELECT * FROM T1 JOIN T2 ON T1.ID = T2.ID;",
      "SELECT * FROM T1, T2 WHERE T1.ID = T2.ID;"
    ],
    "answer": 0,
    "explanation": "정답: 1. NATURAL JOIN 은 동일 이름 컬럼을 자동으로 조인 조건으로 사용하므로 ON 절이나 USING 절을 함께 쓸 수 없다. ON 을 붙이면 구문 오류가 발생한다.\n\n**오답 풀이**\n- ①: 정답(에러 발생). NATURAL JOIN 과 ON 을 동시에 사용해 문법 충돌이 난다.\n- ②: USING (ID) 는 양쪽의 ID 컬럼으로 조인하는 정상 문법이다.\n- ③: 명시적 ON 조건을 사용하는 표준 내부 조인으로 정상 실행된다.\n- ④: WHERE 절로 조인 조건을 주는 전통적 방식으로 정상 실행된다.\n\n**보충 개념**\nNATURAL JOIN, USING, ON 은 조인 조건을 지정하는 세 가지 방식이며 서로 함께 쓸 수 없다. NATURAL JOIN 은 이름이 같은 모든 컬럼을 자동 매칭하고, USING 은 지정한 공통 컬럼만, ON 은 임의의 조건식을 사용한다."
  },
  {
    "id": 20239,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 두 테이블이 있다. 아래 SQL문의 실행 결과로 반환되는 값은 무엇인가?\n\n**[Tbl_A]**\n\n| A | B | C | D |\n| ---: | --- | --- | ---: |\n| 1 | a | x | 1 |\n| 2 | a | z | 1 |\n| 2 | a | y | 2 |\n| 3 | b | y | 2 |\n\n**[Tbl_B]**\n\n| D | E | F |\n| --- | --- | ---: |\n| x | D | 5 |\n| y | E | 6 |\n| z | E | 9 |\n\n```sql\nSELECT COUNT(*)\nFROM (\n  SELECT DISTINCT A, B\n  FROM Tbl_A\n  WHERE C IN (\n    SELECT D\n    FROM Tbl_B\n    WHERE UPPER(E) = 'E'\n  )\n) X;\n```",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "정답: 2. 내부 인라인뷰가 (A,B) 조합 2건을 반환하므로 COUNT(*) 는 2 이다.\n\n**오답 풀이**\n- ①: 1건이 아니다. 조건을 만족하는 서로 다른 (A,B) 조합이 2개다.\n- ②: 정답. 아래 단계 추적 참조.\n- ③: 3건이 아니다. DISTINCT 로 (2,a) 의 중복이 1건으로 합쳐진다.\n- ④: 원본 행 수(4)이지, 조건·DISTINCT 적용 후 건수가 아니다.\n\n**보충 개념**\n단계 추적: ①Tbl_B 에서 UPPER(E)='E' 인 행 → (y,E),(z,E) 이므로 D 값 집합 = {y, z}. ②Tbl_A 에서 C IN ('y','z') 인 행 → (2,a,z),(2,a,y),(3,b,y) 3건. ③SELECT DISTINCT A,B → (2,a),(3,b) 2건. ④바깥 COUNT(*) = 2. 서브쿼리는 안쪽부터 평가되며 IN 절은 반환된 값 집합과의 포함 여부를 본다."
  },
  {
    "id": 20240,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "COLUMN1의 값이 NULL이 아닌 행을 조회하기 위한 조건절로 올바른 것은?",
    "choices": [
      "WHERE COLUMN1 IS NOT NULL;",
      "WHERE COLUMN1 <> NULL;",
      "WHERE COLUMN1 != NULL;",
      "WHERE COLUMN1 NOT NULL;"
    ],
    "answer": 0,
    "explanation": "정답: 1. NULL 여부 비교는 일반 비교 연산자가 아니라 IS NULL / IS NOT NULL 로만 해야 한다.\n\n**오답 풀이**\n- ①: 정답. IS NOT NULL 이 NULL 이 아닌 행을 정확히 걸러낸다.\n- ②: `<> NULL` 은 결과가 항상 UNKNOWN 이 되어 어떤 행도 반환하지 않는다.\n- ③: `!= NULL` 역시 UNKNOWN 으로 평가되어 한 건도 선택되지 않는다.\n- ④: `COLUMN1 NOT NULL` 은 유효한 WHERE 조건 문법이 아니어서 구문 오류다.\n\n**보충 개념**\nSQL 의 3값 논리에서 NULL 과의 산술/비교 연산 결과는 모두 UNKNOWN 이며, WHERE 는 TRUE 인 행만 반환한다. 따라서 NULL 판별은 반드시 IS NULL / IS NOT NULL 을 사용한다."
  },
  {
    "id": 20241,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "EXISTS 연산자에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "서브쿼리의 결과가 1건이라도 존재하면 TRUE를 반환하고 더 이상 검색하지 않는다.",
      "메인쿼리의 컬럼 값을 서브쿼리로 전달할 수 없다.",
      "결과 집합에 NULL 값이 포함된 경우 무조건 에러를 발생시킨다.",
      "성능상 항상 IN 연산자보다 불리하게 작동한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. EXISTS 는 서브쿼리가 행을 한 건이라도 찾는 순간 TRUE 로 확정하고 나머지 탐색을 멈춘다(존재 여부만 판단).\n\n**오답 풀이**\n- ①: 정답. 첫 매칭 행 발견 시 즉시 참으로 판정한다.\n- ②: EXISTS 는 보통 상관 서브쿼리로, 메인쿼리 컬럼 값을 서브쿼리로 전달해 사용한다.\n- ③: EXISTS 는 행의 '존재 여부'만 보므로 결과에 NULL 이 있어도 에러가 나지 않는다.\n- ④: 성능은 데이터 분포·인덱스에 따라 다르며, 항상 IN 보다 불리한 것은 아니다.\n\n**보충 개념**\nEXISTS 는 SELECT 절 내용과 무관하게 '행이 있는가'만 평가하므로 `SELECT 1` 을 흔히 쓴다. IN 은 서브쿼리 결과 값 집합과의 일치를 보고 NULL 처리에 주의가 필요한 반면, EXISTS 는 존재성만 따져 NULL 의 영향을 덜 받는다."
  },
  {
    "id": 20242,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "다음 SQL 문에 포함된 정렬 및 추출 옵션의 결과로 올바른 것은?\n\n```sql\nORDER BY SAL DESC NULLS LAST \nFETCH FIRST 3 ROWS ONLY;\n```",
    "choices": [
      "가장 급여가 높은 3명을 출력하되, 급여가 NULL인 데이터는 후순위로 미룬다.",
      "가장 급여가 낮은 3명을 출력한다.",
      "가장 급여가 높은 3명을 출력하되, 급여가 NULL인 데이터를 우선 출력한다.",
      "급여와 상관없이 상위 3개의 행만 출력한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. SAL DESC 로 급여 내림차순(높은 순) 정렬, NULLS LAST 로 NULL 을 맨 뒤로 보낸 뒤, FETCH FIRST 3 ROWS ONLY 로 상위 3행만 가져온다.\n\n**오답 풀이**\n- ①: 정답. 내림차순 + NULL 후순위 + 상위 3건 추출이라는 세 옵션의 의미를 모두 정확히 담았다.\n- ②: DESC 는 내림차순이므로 가장 낮은 3명이 아니라 가장 높은 3명이다.\n- ③: NULLS LAST 는 NULL 을 뒤로 미루는 것이라 우선 출력이 아니다.\n- ④: ORDER BY SAL 로 급여 기준 정렬이 적용되므로 '상관없이'가 아니다.\n\n**보충 개념**\nFETCH FIRST n ROWS ONLY 는 표준 SQL 의 Top-N 추출 구문으로 Oracle 12c 이상에서 지원한다. Oracle 기본 정렬은 ASC 시 NULLS LAST, DESC 시 NULLS FIRST 이므로, DESC 에서 NULL 을 뒤로 보내려면 NULLS LAST 를 명시해야 한다."
  },
  {
    "id": 20243,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "RANK() 함수와 DENSE_RANK() 함수의 결과 차이로 올바른 것은? (데이터는 100, 100, 200 이며 오름차순 기준이다.)",
    "choices": [
      "RANK: 1, 1, 3 / DENSE_RANK: 1, 1, 2",
      "RANK: 1, 2, 3 / DENSE_RANK: 1, 1, 2",
      "RANK: 1, 1, 2 / DENSE_RANK: 1, 2, 3",
      "두 함수의 결과는 동일하다."
    ],
    "answer": 0,
    "explanation": "정답: 1. 오름차순 정렬 시 동점인 100·100 이 공동 1위가 되고, 200 이 그 뒤 순위가 된다. RANK 는 공동 순위 뒤에 건너뛴 순위를 적용하고, DENSE_RANK 는 건너뛰지 않는다.\n\n**오답 풀이**\n- ①: 정답. 동점 두 행이 1,1 을 받고, RANK 는 다음 순위가 3(2를 건너뜀), DENSE_RANK 는 2 가 된다.\n- ②: 동점인데도 RANK 가 1,2,3 으로 다른 순위를 준 것은 틀렸다(동점은 같은 순위).\n- ③: RANK 결과 1,1,2 는 건너뛰기를 안 한 것이라 RANK 의 동작과 어긋난다.\n- ④: 동점이 있을 때 RANK 와 DENSE_RANK 는 후순위 처리가 달라 결과가 같지 않다.\n\n**보충 개념**\nRANK 는 동순위 다음에 '건너뛴' 순위를 부여하여 순위에 공백이 생긴다(1,1,3). DENSE_RANK 는 공백 없이 다음 순위를 연속으로 부여한다(1,1,2). ROW_NUMBER 는 동점이라도 유일한 일련번호(1,2,3)를 매긴다."
  },
  {
    "id": 20244,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "다음 [T1] 테이블에 대하여 아래 SQL 문을 실행했을 때, 출력되는 데이터의 순서로 가장 적절한 것은? (Oracle 기준)\n\n**<T1>**\n| COL1 | COL2 | COL3 |\n|---|---|---:|\n| A001 | 2024-12-15 | 110 |\n| A002 | NULL | 110 |\n| B001 | 2024-12-01 | 120 |\n| C001 | 2024-12-20 | 130 |\n| D001 | 2024-12-03 | 110 |\n\n```sql\nSELECT COL1, COL2, COL3 FROM T1\nORDER BY COL3 ASC, COL2 ASC;\n```",
    "choices": [
      "D001, A001, A002, B001, C001",
      "A001, A002, D001, B001, C001",
      "A002, A001, D001, C001, B001",
      "D001, A002, A001, B001, C001"
    ],
    "answer": 0,
    "explanation": "정답: 1. 1차 정렬키 COL3 ASC 로 110 그룹(A001, A002, D001)이 먼저 오고, 그 안에서 2차 정렬키 COL2 ASC 로 12-03(D001) → 12-15(A001) → NULL(A002) 순으로 정렬된다(Oracle ASC 는 NULL 을 마지막에 둔다). 이어서 COL3 가 120 인 B001, 130 인 C001 이 온다.\n\n**오답 풀이**\n- ①: 정답. COL3=110 그룹 내에서 COL2 오름차순(12-03, 12-15, NULL 후순위) → D001, A001, A002 순, 이어서 COL3 가 큰 B001, C001.\n- ②: COL3=110 그룹 안에서 COL2 가 가장 이른 12-03(D001)이 맨 앞에 와야 하는데 그룹의 맨 뒤에 놓여 COL2 ASC 순서와 어긋난다.\n- ③: NULL 인 A002 를 맨 앞에 두어 Oracle ASC 의 NULL 후순위 원칙과 어긋나고, 110 그룹 안에서도 12-15(A001) 가 12-03(D001) 보다 앞서며, COL3 이 120 인 B001 과 130 인 C001 의 순서까지 뒤바뀌었다.\n- ④: 같은 110 그룹 내에서 NULL(A002) 이 12-03(D001) 다음에 와 12-15(A001) 보다 앞서므로 COL2 ASC 순서와 어긋난다.\n\n**보충 개념**\nORDER BY 는 앞쪽 키부터 우선 적용하고, 값이 같은 그룹 내에서만 다음 키로 정렬한다. Oracle 은 ASC 정렬 시 NULL 을 가장 큰 값처럼 취급해 맨 뒤(NULLS LAST), DESC 시 맨 앞(NULLS FIRST)에 둔다."
  },
  {
    "id": 20245,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "서브쿼리",
    "question": "다음 중 스칼라 서브쿼리(Scalar Subquery)에 대한 설명으로 올바르지 않은 것은?",
    "choices": [
      "원칙적으로 단 1개의 행과 1개의 컬럼만 반환해야 한다.",
      "메인쿼리의 결과 건수만큼 반복 수행된다.",
      "서브쿼리의 실행 결과가 0건일 경우 에러를 발생시킨다.",
      "SELECT 절 등 단일 값이 요구되는 곳에 주로 사용된다."
    ],
    "answer": 2,
    "explanation": "정답: 3. 스칼라 서브쿼리는 결과가 0건이면 에러가 아니라 NULL을 반환한다. 따라서 ③은 틀린 설명이다.\n\n**오답 풀이**\n- ①: 스칼라 서브쿼리는 단일 값(1행 1컬럼)을 반환하는 것이 원칙이다. 2건 이상이면 \"single-row subquery returns more than one row\" 에러가 난다. 옳은 설명.\n- ②: SELECT 절의 스칼라 서브쿼리는 메인쿼리가 반환하는 각 행마다 반복 평가된다. 옳은 설명.\n- ③: 정답. 0건일 때는 에러가 아니라 NULL을 반환한다.\n- ④: SELECT 절, 일부 WHERE 비교 등 단일 값이 필요한 위치에서 사용된다. 옳은 설명.\n\n**보충 개념**\n스칼라 서브쿼리는 하나의 값을 돌려주는 서브쿼리로, 2건 이상이면 에러, 0건이면 NULL이다. SELECT 절에 두면 메인쿼리 행마다 실행되므로 동일 입력에 캐싱(필터 후 캐시)으로 성능을 보완한다."
  },
  {
    "id": 20246,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL 문의 실행 결과로 가장 적절한 것은?\n\n```sql\nSELECT COUNT(*) FROM DUAL \nHAVING COUNT(*) > 4;\n```",
    "choices": [
      "0",
      "1",
      "9999",
      "공집합 (No rows selected)"
    ],
    "answer": 3,
    "explanation": "정답: 4. DUAL은 행이 1건이므로 COUNT(*)는 1이고, HAVING COUNT(*) > 4 즉 1 > 4 가 거짓이 되어 그룹이 걸러져 한 행도 반환되지 않는다.\n\n**오답 풀이**\n- ①: 0이 출력되려면 행이 반환되되 카운트가 0이어야 하는데, HAVING이 거짓이면 행 자체가 사라진다. 0행 반환이지 값 0이 아니다.\n- ②: COUNT(*)=1이지만 HAVING 조건에서 탈락하므로 1은 출력되지 않는다.\n- ③: 근거 없는 값.\n- ④: 정답. HAVING 조건(1 > 4)이 거짓이라 그룹 전체가 제거되어 공집합이다.\n\n**보충 개념**\nGROUP BY가 없어도 집계 함수가 있으면 전체가 하나의 그룹이 된다. HAVING은 이 그룹 단위로 필터링하므로, 조건이 거짓이면 \"값 0\"이 아니라 \"행 없음(No rows)\"이 된다. 행이 1건도 없는 테이블에 대해 COUNT(*)만 쓰면 0이 나오지만, HAVING으로 그룹이 탈락하면 결과 자체가 비는 점이 다르다."
  },
  {
    "id": 20247,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "DDL",
    "question": "다음 아래와 같이 테이블을 생성하였다. 다음 중 INSERT 문의 실행 결과가 나머지 셋과 다른 하나는?\n\n```sql\nCREATE TABLE T1 (\n    COL1 NUMBER,\n    COL2 NUMBER,\n    CONSTRAINT CK_T1 CHECK (COL1 > 10 AND COL2 > 5)\n);\n```",
    "choices": [
      "INSERT INTO T1 VALUES (20, 3);",
      "INSERT INTO T1 VALUES (5, 3);",
      "INSERT INTO T1 VALUES (20, NULL);",
      "INSERT INTO T1 VALUES (5, NULL);"
    ],
    "answer": 2,
    "explanation": "정답: 3. CHECK 제약은 결과가 명시적으로 FALSE일 때만 거부하고, UNKNOWN(NULL 비교)이면 허용한다. ③만 입력에 성공하고 나머지는 실패한다.\n\n**오답 풀이**\n- ①: (20, 3) → 20>10 TRUE, 3>5 FALSE → TRUE AND FALSE = FALSE → 제약 위반, 실패.\n- ②: (5, 3) → 5>10 FALSE → FALSE → 실패.\n- ③: 정답(다른 하나). (20, NULL) → 20>10 TRUE, NULL>5 UNKNOWN → TRUE AND UNKNOWN = UNKNOWN → CHECK는 UNKNOWN을 위반으로 보지 않아 입력 성공.\n- ④: (5, NULL) → 5>10 FALSE → FALSE AND UNKNOWN = FALSE → 실패.\n\n**보충 개념**\nCHECK 제약은 3치 논리(TRUE/FALSE/UNKNOWN)에서 FALSE인 경우만 차단한다. NULL이 끼어 UNKNOWN이 되면 통과시키는 점이 핵심이며, AND 연산에서 FALSE는 다른 피연산자가 UNKNOWN이어도 FALSE를 유지한다는 점(④)과 구분해야 한다."
  },
  {
    "id": 20248,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUPING",
    "question": "다음 소계 쿼리 중, HAVING GROUPING(ID) + GROUPING(TYPE) != 1 의 결과는?",
    "choices": [
      "중간 소계 행을 제외한 일반 상세 데이터와 전체 총합계 행만 출력한다.",
      "모든 데이터를 출력한다.",
      "오직 전체 총합계 행 한 건만 출력한다.",
      "ID별 소계 행만 출력한다."
    ],
    "answer": 0,
    "explanation": "정답: 1. GROUPING 함수는 해당 컬럼이 집계로 묶여 NULL이 된 경우 1, 실제 값으로 그룹된 경우 0을 반환한다. ROLLUP(ID, TYPE) 기준으로 두 GROUPING의 합을 보면, 합이 1인 \"ID별 중간 소계\"만 제외된다.\n\n**오답 풀이**\n- ①: 정답. 상세 행은 GROUPING(ID)=0, GROUPING(TYPE)=0 → 합 0(≠1, 출력). ID별 소계 행은 GROUPING(ID)=0, GROUPING(TYPE)=1 → 합 1(=1, 제외). 전체 총합계 행은 GROUPING(ID)=1, GROUPING(TYPE)=1 → 합 2(≠1, 출력). 결국 중간 소계만 빠지고 상세+총합계가 남는다.\n- ②: 합이 1인 ID별 소계 행이 제거되므로 모든 데이터는 아니다.\n- ③: 총합계만 남기려면 합이 2인 행만 골라야 한다(!= 1로는 상세 행도 살아남음).\n- ④: ID별 소계는 합이 1이라 오히려 제거되는 대상이다.\n\n**보충 개념**\nGROUPING(컬럼)은 그 컬럼이 소계/총계로 묶여 NULL이 된 자리에서 1을 돌려주어, 데이터 본래의 NULL과 집계로 생긴 NULL을 구분한다. ROLLUP(A,B)에서 GROUPING 합은 상세 0, A별 소계 1, 총계 2로 단계가 구분되므로 합 값으로 특정 레벨만 골라낼 수 있다."
  },
  {
    "id": 20249,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUPING",
    "question": "GROUPING SETS 함수에 대한 설명으로 올바르지 않은 것은?",
    "choices": [
      "다양한 소계 집합을 한 번의 쿼리로 효율적으로 구할 수 있다.",
      "괄호 내에 명시된 인수의 순서가 달라지면 집계의 결과 항목 자체도 달라진다.",
      "정렬하려면 별도의 ORDER BY 절을 사용해야 한다.",
      "UNION ALL을 결합한 것과 동일한 결과를 생성할 수 있다."
    ],
    "answer": 1,
    "explanation": "정답: 2. GROUPING SETS는 나열된 각 집합을 독립적으로 집계하므로, 인수(집합)의 나열 순서가 바뀌어도 만들어지는 집계 항목 자체는 동일하다. 정렬 순서만 영향을 받을 수 있을 뿐이라 ②는 틀린 설명이다.\n\n**오답 풀이**\n- ①: 여러 GROUP BY 결과를 한 번의 스캔/쿼리로 묶어 구할 수 있다. 옳은 설명.\n- ②: 정답(틀린 설명). 순서가 달라져도 집계 결과 집합의 구성은 같다. ROLLUP(A,B)≠ROLLUP(B,A)처럼 순서가 의미 있는 것과 혼동한 것이다.\n- ③: GROUPING SETS는 정렬을 보장하지 않으므로 원하는 순서가 있으면 ORDER BY를 별도로 써야 한다. 옳은 설명.\n- ④: 각 그룹 집합에 대한 GROUP BY 결과를 UNION ALL로 이어 붙인 것과 동일한 결과를 만든다. 옳은 설명.\n\n**보충 개념**\nGROUPING SETS((A),(B),())는 A별, B별, 전체 집계를 각각 만들어 합친 것과 같다. ROLLUP은 컬럼 순서가 계층(소계 단계)을 결정해 순서에 민감하지만, GROUPING SETS는 나열된 집합 자체가 결과라 순서에 무관하다."
  },
  {
    "id": 20250,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "NVL2(COL1, 'A', 'B') 함수에서 COL1이 NULL일 경우 반환되는 결과는?",
    "choices": [
      "A",
      "B",
      "NULL",
      "에러"
    ],
    "answer": 1,
    "explanation": "정답: 2. NVL2(expr, val1, val2)는 expr이 NULL이 아니면 val1을, NULL이면 val2를 반환한다. COL1이 NULL이므로 두 번째 대체값 'B'가 반환된다.\n\n**오답 풀이**\n- ①: 'A'는 COL1이 NULL이 아닐 때 반환되는 값이다.\n- ②: 정답. COL1이 NULL이므로 세 번째 인자 'B'가 반환된다.\n- ③: NVL2는 인자에 따라 항상 둘 중 하나를 반환하며, NULL을 그대로 돌려주지 않는다.\n- ④: 문법상 정상 함수 호출이라 에러가 아니다.\n\n**보충 개념**\nNVL(expr, val)은 NULL이면 val로 치환하는 2인자 함수이고, NVL2(expr, val1, val2)는 NULL 여부에 따라 분기하는 3인자 함수다. \"NULL이 아닐 때 val1, NULL일 때 val2\" 순서를 헷갈리지 않는 것이 핵심이다."
  },
  {
    "id": 20251,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "다음 중 데이터 제어어(DCL)에 해당하지 않고, 데이터 조작어(DML)에 해당하는 것은?",
    "choices": [
      "GRANT",
      "REVOKE",
      "UPDATE",
      "COMMIT"
    ],
    "answer": 2,
    "explanation": "정답: 3. UPDATE는 테이블의 데이터 값을 변경하는 데이터 조작어(DML)이다. 나머지는 권한 제어(DCL) 또는 트랜잭션 제어(TCL)에 해당한다.\n\n**오답 풀이**\n- ①: GRANT는 권한을 부여하는 데이터 제어어(DCL)이다.\n- ②: REVOKE는 권한을 회수하는 데이터 제어어(DCL)이다.\n- ③: 정답. UPDATE는 행의 값을 수정하는 DML이다.\n- ④: COMMIT은 트랜잭션을 확정하는 명령으로 보통 TCL로 분류하며, DML은 아니다.\n\n**보충 개념**\nDML은 SELECT/INSERT/UPDATE/DELETE처럼 데이터 자체를 다루고, DCL은 GRANT/REVOKE로 권한을 제어한다. COMMIT/ROLLBACK/SAVEPOINT는 트랜잭션을 제어하는 TCL로 별도 분류하는 것이 일반적이다."
  },
  {
    "id": 20252,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "WHERE SAL > ANY (1000, 2000) 조건절의 논리적 의미와 동일한 것은?",
    "choices": [
      "SAL > 1000 OR SAL > 2000",
      "SAL > 1000 AND SAL > 2000",
      "SAL = 1000 OR SAL = 2000",
      "에러 발생"
    ],
    "answer": 0,
    "explanation": "정답: 1. > ANY(목록)은 목록의 값들 중 \"어느 하나라도\" 만족하면 참이므로 각 비교를 OR로 묶은 것과 같다. 즉 SAL이 목록의 최솟값보다 크면 참이며, SAL > 1000 OR SAL > 2000과 동치다.\n\n**오답 풀이**\n- ①: 정답. > ANY는 OR 결합이며, 실질적으로 SAL > MIN(1000) 과 같다.\n- ②: AND 결합은 > ALL의 의미다(모든 값보다 커야 함, 즉 SAL > 2000).\n- ③: 등호 OR 결합은 = ANY 즉 IN (1000, 2000)의 의미다.\n- ④: 다중행/다중값 비교에 ANY는 정상 문법이라 에러가 아니다.\n\n**보충 개념**\n> ANY는 \"최솟값보다 크면\" 참(OR), > ALL은 \"최댓값보다 크면\" 참(AND)이다. = ANY는 IN과 같고, != ALL은 NOT IN과 같다는 대응 관계를 함께 기억하면 좋다."
  },
  {
    "id": 20253,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "계층형 질의문 SELECT COUNT(*) FROM DUAL CONNECT BY LEVEL <= 2; 의 실행 결과로 옳은 것은?\n\n```sql\nSELECT COUNT(*) FROM DUAL CONNECT BY LEVEL <= 2;\n```",
    "choices": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 2,
    "explanation": "정답: 3. CONNECT BY LEVEL <= 2 는 LEVEL이 1, 2가 될 때까지 행을 전개하여 2개의 행을 생성한다. 그 위에 COUNT(*)를 적용하면 2가 반환된다.\n\n**오답 풀이**\n- ①: 행이 생성되므로 0이 아니다.\n- ②: DUAL은 본래 1행이지만 CONNECT BY LEVEL <= 2로 행이 2개로 늘어난다.\n- ③: 정답. LEVEL=1, LEVEL=2 두 행이 만들어져 COUNT(*)=2.\n- ④: LEVEL <= 2 조건은 LEVEL=3에서 전개를 멈추므로 3행이 아니다.\n\n**보충 개념**\nCONNECT BY LEVEL <= N 패턴은 START WITH 없이도 1행짜리 DUAL을 N행으로 늘리는 대표적인 행 생성(숫자 시퀀스) 기법이다. LEVEL은 1부터 시작해 조건을 만족하는 동안 1씩 증가한다."
  },
  {
    "id": 20254,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "데이터 그룹화 조건에서 집계 함수(SUM, COUNT 등)를 활용한 필터링이 가능한 절은?",
    "choices": [
      "WHERE 절",
      "GROUP BY 절",
      "HAVING 절",
      "ORDER BY 절"
    ],
    "answer": 2,
    "explanation": "정답: 3. 그룹으로 묶은 뒤 집계 결과를 조건으로 걸러내는 것은 HAVING 절의 역할이다. WHERE는 그룹화 이전 단계라 집계 함수를 조건으로 쓸 수 없다.\n\n**오답 풀이**\n- ①: WHERE는 GROUP BY 이전에 개별 행을 거르는 단계라 SUM/COUNT 같은 집계 함수를 조건에 쓸 수 없다.\n- ②: GROUP BY는 그룹을 묶는 기준을 정할 뿐 필터링 절이 아니다.\n- ③: 정답. HAVING은 그룹 집계 결과에 대해 조건을 거는 전용 절이다.\n- ④: ORDER BY는 정렬용이며 필터링 절이 아니다.\n\n**보충 개념**\n실행 순서는 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY 이다. 집계 함수는 GROUP BY로 그룹이 형성된 뒤에야 값이 정해지므로, 그 결과를 거르는 조건은 GROUP BY 다음에 오는 HAVING에만 쓸 수 있다."
  },
  {
    "id": 20255,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "정규화",
    "question": "다음 정규표현식 함수의 실행 결과로 추출되는 값은?\n\n```sql\nSELECT REGEXP_INSTR('123123123', '312') FROM DUAL;\n```",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "정답: 3. REGEXP_INSTR는 패턴이 처음 매칭되는 시작 위치를 1부터 반환한다. 문자열 '123123123'을 한 글자씩 보면 1(1) 2(2) 3(3) 1(4) 2(5) 3(6)… 이고, 부분문자열 '312'는 3번째 글자 '3'에서 시작해 '3'(3) '1'(4) '2'(5)로 처음 완성되므로 시작 위치는 3이다.\n\n**오답 풀이**\n- ①: 1번째부터 보면 '123'이라 '312'와 다르다.\n- ②: 2번째부터 보면 '231'이라 매칭되지 않는다.\n- ③: 정답.\n- ④: 4번째('1')부터 시작하면 '123'이라 더 늦은 매칭이며, 첫 매칭은 3번째다.\n\n**보충 개념**\nREGEXP_INSTR(소스, 패턴)은 매칭이 없으면 0, 있으면 매칭이 시작되는 1-base 위치를 돌려준다. 위치 인자를 생략하면 1번째 문자부터 탐색하며 가장 이른 매칭 위치를 반환한다."
  },
  {
    "id": 20256,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 [고객] 테이블에서 유효한 이메일 형식(영문자, 숫자, 언더바의 조합 @ 영문자, 숫자, 언더바의 조합.com 형태)을 가진 고객의 수를 계산하는 SQL 문으로 가장 올바른 것은? (Oracle 기준)\n\n**[고객]**\n\n| 고객ID | 이메일 |\n| ---: | --- |\n| 100 | dev_1@oracle.com |\n| 200 | master@test |\n| 300 | admin.user@db.com |\n| 400 | info@korea.com |",
    "choices": [
      "`SELECT COUNT(*) FROM 고객 WHERE REGEXP_LIKE(이메일, '^\\w+@\\w+\\.com$');`",
      "`SELECT COUNT(*) FROM 고객 WHERE REGEXP_LIKE(이메일, '^\\w*@\\w*.com$');`",
      "`SELECT COUNT(*) FROM 고객 WHERE REGEXP_LIKE(이메일, '.*@.*\\.com');`",
      "`SELECT COUNT(*) FROM 고객 WHERE REGEXP_LIKE(이메일, '[a-zA-Z0-9]@[a-zA-Z0-9].com');`"
    ],
    "answer": 0,
    "explanation": "정답: 1. 요구 형식은 (영문자·숫자·언더바)+ @ (영문자·숫자·언더바)+ .com 이고 \\w가 정확히 [A-Za-z0-9_]에 대응한다. 패턴 '^\\w+@\\w+\\.com$'은 시작/끝을 고정(^ $)하고 점을 \\.으로 리터럴 처리하므로, dev_1@oracle.com과 info@korea.com만 매칭되어 2건이 된다. master@test는 .com이 없고, admin.user@db.com은 로컬부에 점이 있어 \\w+가 @까지 도달하지 못해 제외된다.\n\n**오답 풀이**\n- ①: 정답.\n- ②: 점을 이스케이프하지 않아(.com) '.'이 임의 문자와 매칭되고, \\w*는 빈 로컬부도 허용해 형식 검증이 느슨하다.\n- ③: .*가 점·@를 포함한 아무 문자나 허용하고 ^ $ 고정도 없어 admin.user@db.com까지 통과시킨다.\n- ④: 단일 문자 한 글자만(+ 없음) 요구하고 .com의 점도 이스케이프하지 않아 길이가 긴 실제 이메일을 못 잡는다.\n\n**보충 개념**\n정규식에서 점(.)은 임의 한 문자를 뜻하므로 리터럴 마침표는 \\.으로 써야 한다. ^와 $로 전체를 고정하고 +(1회 이상)로 최소 길이를 강제해야 형식 검증이 정확해진다."
  },
  {
    "id": 20257,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL 문의 실행 결과로 가장 적절한 것은?\n\n```sql\nSELECT '''A''''' R1 FROM DUAL;\n```",
    "choices": [
      "A",
      "'A''",
      "''A''",
      "''''A''''"
    ],
    "answer": 1,
    "explanation": "정답: 2. 문자열 리터럴 안에서 작은따옴표 두 개('')는 따옴표 한 개를 의미한다. 리터럴은 맨 앞 '로 시작해 맨 뒤 '로 끝나며, 가운데 내용은 ''A''''이다. 이를 두 개씩 묶어 치환하면 '' → ', 다음 A, 그리고 '''' → '' 가 되어 최종 출력은 'A'' 이다.\n\n**오답 풀이**\n- ①: 이스케이프된 따옴표가 모두 사라진 결과로, 양쪽 따옴표가 남는다.\n- ②: 정답.\n- ③: 앞쪽 따옴표가 2개가 아니라 1개다(앞 ''→' 하나만 남음).\n- ④: 화면에 보이는 따옴표 수를 그대로 센 오답으로, '' 마다 1개로 줄어든다.\n\n**보충 개념**\nOracle에서 문자열 안에 작은따옴표를 넣으려면 ''로 두 번 적는다. 바깥쪽 따옴표 한 쌍을 벗겨내고 내부의 '' 각각을 '로 환원하면 실제 값을 얻는다. (대안으로 q'[...]' 형식의 인용 연산자도 있다.)"
  },
  {
    "id": 20258,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "DDL",
    "question": "다음 SQL 명령어를 실행했을 때의 결과에 대한 설명으로 적절한 것은?\n\n```sql\nDROP TABLE T1 CASCADE CONSTRAINTS;\n```",
    "choices": [
      "T1 테이블만 삭제한다.",
      "T1 테이블과 T1 테이블을 참조하는 외부 테이블의 FK 제약조건을 함께 삭제한다.",
      "자식 테이블의 데이터를 삭제한다.",
      "자식 테이블을 전부 삭제한다."
    ],
    "answer": 1,
    "explanation": "정답: 2. CASCADE CONSTRAINTS는 삭제 대상 테이블(T1)의 키를 참조하는 다른 테이블에 걸린 참조 무결성(외래키) 제약조건을 함께 제거한다. T1 자체는 삭제되지만, 자식 테이블이나 그 데이터는 그대로 남는다.\n\n**오답 풀이**\n- ①: T1을 참조하는 FK가 존재하면 CASCADE CONSTRAINTS 없이는 오류가 나며, 이 옵션은 FK 제거까지 수행하므로 'T1만 삭제'는 정확한 설명이 아니다.\n- ②: 정답.\n- ③: 자식 테이블의 데이터는 삭제하지 않는다(그것은 DELETE CASCADE의 동작이다).\n- ④: 자식 테이블 자체는 삭제되지 않고, 그 테이블에 걸린 FK 제약조건만 제거된다.\n\n**보충 개념**\nCASCADE CONSTRAINTS(테이블 DROP 옵션)와 ON DELETE CASCADE(데이터 행 연쇄 삭제)는 다르다. 전자는 참조 제약조건을 정리해 테이블을 떨어뜨리는 것이고, 후자는 부모 행 삭제 시 자식 행을 함께 지우는 것이다."
  },
  {
    "id": 20259,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUP BY",
    "question": "다음은 뷰(View)를 생성하고 이를 조회/수정하는 과정이다. 실행 시 오류(Error)가 발생하는 쿼리는?\n\n```sql\nCREATE VIEW V1 AS \nSELECT DEPTNO, SUM(SAL) AS SS \nFROM EMP GROUP BY DEPTNO;\n```",
    "choices": [
      "SELECT * FROM V1 WHERE SS > 5000;",
      "SELECT A.DEPTNO, B.DNAME FROM V1 A JOIN DEPT B ON A.DEPTNO = B.DEPTNO;",
      "SELECT DEPTNO, AVG(SS) FROM V1 GROUP BY DEPTNO;",
      "INSERT INTO V1 (DEPTNO, SS) VALUES (50, 8000);"
    ],
    "answer": 3,
    "explanation": "정답: 4. V1은 GROUP BY와 집계함수(SUM)로 정의된 뷰여서 각 행이 실제 기본 테이블의 단일 행과 1:1로 대응하지 않는다. 이런 그룹/집계 뷰는 갱신 불가능(non-updatable)하므로 INSERT/UPDATE/DELETE가 모두 오류를 낸다. SS는 SUM(SAL)의 결과일 뿐 실제 컬럼이 아니어서 값을 거꾸로 써넣을 수 없다.\n\n**오답 풀이**\n- ①: 뷰를 단순 조회하며 별칭 SS로 필터링하는 정상 SELECT다.\n- ②: 뷰와 DEPT 테이블을 DEPTNO로 조인하는 정상 조회다.\n- ③: 뷰 결과를 다시 그룹·집계하는 정상 조회다(SELECT는 제약 없음).\n- ④: 정답. 집계·GROUP BY 뷰라 DML(INSERT)이 허용되지 않아 오류가 난다.\n\n**보충 개념**\n뷰가 갱신 가능하려면 기본적으로 단일 테이블 기반이며 GROUP BY·집계함수·DISTINCT·집합연산 등이 없어야 한다. 이런 요소가 들어간 뷰는 읽기 전용으로만 사용할 수 있다."
  },
  {
    "id": 20260,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "TCL",
    "question": "다음 트랜잭션 실행 결과로 올바른 것은?\n\n```sql\ncreate table t1 (no number);\ninsert into t1 values (1); \ninsert into t1 values (2);\nsavepoint sv1; \nupdate t1 set no=4 where no=1;\nsavepoint sv1; \ndelete from t1 where no >= 2; \nrollback to sv1;\ninsert into t1 values(3); \ncommit;\nselect max(no) from t1;\n```",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "정답: 4. 같은 이름 sv1을 두 번 선언하면 이전 savepoint는 무효가 되고 가장 최근 선언 지점이 sv1이 된다. 단계별로 추적하면 다음과 같다.\n\n```sql\n-- {1, 2}\nsavepoint sv1;            -- (구) 무시됨\nupdate ... set no=4;      -- {4, 2}\nsavepoint sv1;            -- (신) 여기가 유효한 sv1\ndelete where no>=2;       -- {}  (4와 2 모두 삭제)\nrollback to sv1;          -- {4, 2}  delete만 취소\ninsert values(3);         -- {4, 2, 3}\ncommit;\n```\n\n최종 행은 {4, 2, 3}이고 MAX(no) = 4이다.\n\n**오답 풀이**\n- ①: update로 1은 이미 4가 되었으므로 1은 존재하지 않는다.\n- ②: 2는 남아 있지만 최댓값은 아니다.\n- ③: 3도 존재하지만 4보다 작다.\n- ④: 정답.\n\n**보충 개념**\nROLLBACK TO savepoint는 해당 지점 이후의 변경만 취소하고 트랜잭션 자체는 유지한다. 동일 이름으로 savepoint를 다시 만들면 더 최근 위치로 이동하므로, 여기서는 delete만 되돌려지고 update(no=4)는 보존된다."
  },
  {
    "id": 20261,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUP BY",
    "question": "다음은 [영업사원] 테이블과 [부서별실적] 테이블이다. 다음 SQL문의 실행 결과로 올바른 것은?\n\n**[영업사원]**\n\n| 사원명 | 소속부서 |\n| --- | --- |\n| SMITH | 영업1팀 |\n| ALLEN | 영업2팀 |\n| WARD | 영업1팀 |\n| MARTIN | 영업2팀 |\n\n**[부서별실적]**\n\n| 실적부서 | 달성액 |\n| --- | ---: |\n| 영업1팀 | 3000 |\n| 영업1팀 | 5000 |\n| 영업2팀 | 1000 |\n| 영업2팀 | 2000 |\n\n```sql\nWITH DeptPerf AS (\n  SELECT 실적부서, AVG(달성액) AS 평균달성액\n  FROM 부서별실적\n  GROUP BY 실적부서\n)\nSELECT A.사원명\nFROM 영업사원 A\nJOIN DeptPerf B ON A.소속부서 = B.실적부서\nWHERE B.평균달성액 > 3000;\n```",
    "choices": [
      "SMITH, WARD",
      "ALLEN, MARTIN",
      "SMITH, ALLEN, WARD, MARTIN",
      "반환되는 행 없음"
    ],
    "answer": 0,
    "explanation": "정답: 1. WITH 절 DeptPerf는 부서별 평균 달성액을 구한다. 영업1팀 = AVG(3000, 5000) = 4000, 영업2팀 = AVG(1000, 2000) = 1500이다. WHERE 평균달성액 > 3000 조건으로 영업1팀(4000)만 통과하고, 영업1팀 소속 사원은 SMITH와 WARD이다.\n\n**오답 풀이**\n- ①: 정답.\n- ②: ALLEN·MARTIN은 영업2팀이고 평균 1500으로 조건(>3000)에 미달한다.\n- ③: 두 팀 모두가 아니라 조건을 만족하는 영업1팀만 남는다.\n- ④: 영업1팀이 조건을 만족하므로 결과가 존재한다.\n\n**보충 개념**\nWITH(공통 테이블 표현식)는 인라인 뷰처럼 집계 결과를 임시 이름으로 만들어 메인쿼리에서 재사용한다. 부서로 조인한 뒤 집계값에 대한 필터는 WHERE로 가능하다(여기서는 이미 인라인 뷰로 집계가 끝났기 때문)."
  },
  {
    "id": 20262,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 함수의 반환 결과로 올바른 것은?\n\n```sql\nSELECT COALESCE(NULL, 1, 2) FROM DUAL;\n```",
    "choices": [
      "NULL",
      "1",
      "2",
      "에러"
    ],
    "answer": 1,
    "explanation": "정답: 2. COALESCE는 인자 목록을 왼쪽부터 평가해 처음으로 NULL이 아닌 값을 반환한다. 첫 인자 NULL은 건너뛰고 두 번째 인자 1이 NULL이 아니므로 1을 돌려준다.\n\n**오답 풀이**\n- ①: 모든 인자가 NULL일 때만 NULL을 반환하는데, 1이 있으므로 아니다.\n- ②: 정답.\n- ③: 1이 먼저 평가되어 채택되므로 2까지 가지 않는다.\n- ④: 정상 동작하는 표준 함수로 에러가 아니다.\n\n**보충 개념**\nCOALESCE(e1, e2, …)는 NVL의 다중 인자 버전으로, 첫 번째 비-NULL을 반환한다. 모든 인자가 NULL이면 NULL을 반환한다."
  },
  {
    "id": 20263,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음과 같이 PRIMARY KEY, NOT NULL 제약조건이 설정된 [도서목록] 테이블이 있다. 이 테이블을 복제하여 [추천도서] 테이블을 생성하는 다음 CTAS(Create Table As Select) 구문을 실행했을 때, [추천도서] 테이블에 자동적으로 적용되는 제약조건은?\n\n**[도서목록]**\n\n| 컬럼명 | 데이터타입 | 제약조건 |\n| --- | --- | --- |\n| 도서번호 | NUMBER | PRIMARY KEY |\n| 도서명 | VARCHAR2(100) | NOT NULL |\n| 저자명 | VARCHAR2(50) |  |\n\n```sql\nCREATE TABLE 추천도서 AS \nSELECT * FROM 도서목록 WHERE 도서번호 < 100;\n```",
    "choices": [
      "PRIMARY KEY",
      "NOT NULL",
      "PRIMARY KEY, NOT NULL",
      "적용되는 제약조건 없음"
    ],
    "answer": 1,
    "explanation": "정답: 2. CTAS는 컬럼 정의와 데이터, 그리고 명시적으로 선언된 NOT NULL 제약조건만 새 테이블로 복사한다. PRIMARY KEY, UNIQUE, FOREIGN KEY, CHECK 같은 제약조건은 승계되지 않는다. 따라서 도서명 컬럼의 NOT NULL만 [추천도서]에 적용된다.\n\n**오답 풀이**\n- ①: PRIMARY KEY는 CTAS로 복사되지 않는다(PK에 딸린 NOT NULL 속성도 함께 사라진다).\n- ②: 정답.\n- ③: PK가 복사되지 않으므로 'PRIMARY KEY, NOT NULL' 동시 적용은 틀리다.\n- ④: 명시적 NOT NULL은 복사되므로 '없음'은 아니다.\n\n**보충 개념**\nCTAS(CREATE TABLE AS SELECT)는 구조·데이터를 빠르게 복제하지만 인덱스와 대부분의 제약조건은 가져오지 않는다. 예외적으로 NOT NULL 컬럼 제약은 유지된다. PK 등은 별도 ALTER TABLE로 다시 추가해야 한다."
  },
  {
    "id": 20264,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 아래의 [T1] 테이블을 생성한 후, 데이터를 삽입하는 SQL 문 중 실행 시 오류(Error)가 발생하지 않고 정상적으로 실행되는 것은?\n\n```sql\nCREATE TABLE T1 (\n    COL1 NUMBER DEFAULT 9 PRIMARY KEY,\n    COL2 VARCHAR2(10) NOT NULL\n);\n```",
    "choices": [
      "INSERT INTO T1 VALUES (10);",
      "INSERT INTO T1 (COL1, COL2) VALUES (NULL, 'A');",
      "INSERT INTO T1 (COL2) VALUES ('A');",
      "INSERT INTO T1 (COL1) VALUES (10);"
    ],
    "answer": 2,
    "explanation": "정답: 3. COL1은 DEFAULT 9가 있는 PRIMARY KEY(NOT NULL), COL2는 NOT NULL이다. ③은 COL2에만 'A'를 넣고 COL1은 생략했으므로 COL1에 DEFAULT 9가 채워진다. 두 컬럼 모두 NOT NULL 조건을 만족하므로 정상 삽입된다.\n\n**오답 풀이**\n- ①: 컬럼 목록 없이 값 1개만 주면 컬럼 수(2개)와 값 개수가 달라 'not enough values' 오류가 난다.\n- ②: COL1은 PK라 NULL을 허용하지 않으므로 NULL 삽입 시 제약 위반 오류가 난다.\n- ③: 정답.\n- ④: COL2는 NOT NULL인데 생략되어 NULL이 들어가므로 제약 위반 오류가 난다(COL2에는 DEFAULT가 없다).\n\n**보충 개념**\n컬럼을 생략하면 DEFAULT가 지정된 컬럼은 기본값으로, DEFAULT가 없는 NOT NULL 컬럼은 NULL이 되어 제약 위반이 된다. PRIMARY KEY는 NOT NULL + UNIQUE를 함께 강제한다."
  },
  {
    "id": 21823,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "발생 시점에 따라 엔터티를 분류할 때, 다른 엔터티로부터 업무 행위의 결과로 발생하며 데이터가 자주 변경되고 인스턴스의 양이 가장 많은 특징을 가지는 엔터티는 무엇인가?",
    "choices": [
      "기본 엔터티",
      "중심 엔터티",
      "개념 엔터티",
      "행위 엔터티"
    ],
    "answer": 3,
    "explanation": "정답은 ④ 행위 엔터티다. 발생 시점 기준 엔터티는 기본(키)·중심·행위 엔터티로 나뉜다. 행위 엔터티는 두 개 이상의 다른 엔터티(주로 기본·중심 엔터티)로부터 발생하며, 업무가 진행될수록 계속 쌓이므로 데이터의 양이 많고 변경이 빈번하다(예: 주문, 이체, 접수).\n① 기본 엔터티는 다른 엔터티에 의존하지 않고 독립적으로 존재하며 자신의 주식별자를 가진다(예: 사원, 부서). ② 중심 엔터티는 기본 엔터티로부터 파생되어 업무의 중심을 이루는 엔터티다(예: 계약). ③ '개념 엔터티'는 발생 시점 분류의 표준 명칭이 아니라 오답 유인용 용어다.\n보충: 발생 시점 분류(기본/중심/행위)와 유무형 분류(유형/개념/사건)를 혼동하지 말 것."
  },
  {
    "id": 21824,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "다른 속성의 값을 계산하거나 특정 규칙으로 가공하여 저장하는 속성으로, 원본 속성이 바뀌면 값의 정합성 관리가 필요하고 되도록 최소화하는 것이 바람직한 속성은?",
    "choices": [
      "파생속성",
      "기본속성",
      "설계속성",
      "연관속성"
    ],
    "answer": 0,
    "explanation": "정답은 ① 파생속성이다. 파생속성(derived attribute)은 다른 속성이나 다른 엔터티의 속성값을 계산·가공하여 만들어진 속성이다(예: 나이=현재일-생년월일, 합계금액). 원천 데이터 변경 시 재계산이 필요해 정합성 관리 부담이 있으므로 꼭 필요한 경우에만 최소한으로 둔다.\n② 기본속성은 업무로부터 원래 도출되는 본래의 속성이다. ③ 설계속성은 업무상 존재하지 않지만 데이터 모델링·관리를 위해 새로 정의한 속성이다(예: 코드성 속성, 일련번호). ④ '연관속성'은 표준 분류 용어가 아닌 오답이다.\n보충: 속성은 특성에 따라 기본속성·설계속성·파생속성으로 분류된다."
  },
  {
    "id": 21825,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "엔터티, 인스턴스, 속성, 속성값 사이의 관계에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "하나의 엔터티는 두 개 이상의 인스턴스를 가진다.",
      "하나의 엔터티는 두 개 이상의 속성을 가진다.",
      "하나의 인스턴스는 하나의 속성에 대해 두 개 이상의 속성값을 가진다.",
      "하나의 속성은 하나의 속성값을 가진다."
    ],
    "answer": 2,
    "explanation": "정답(옳지 않은 것)은 ③이다. 하나의 인스턴스는 하나의 속성에 대해 오직 하나의 속성값만 가져야 한다(1NF, 원자값). 한 속성에 여러 값이 들어가면 다중값 속성으로 정규화(별도 엔터티 분리) 대상이 된다.\n① 엔터티는 두 개 이상의 인스턴스의 집합이므로 옳다. ② 엔터티는 두 개 이상의 속성을 가진다(속성이 하나뿐이면 엔터티로 성립하기 어렵다) — 옳다. ④ 하나의 인스턴스에서 하나의 속성은 하나의 속성값을 가진다 — 옳다.\n보충: 엔터티↔인스턴스, 속성↔속성값은 각각 '집합↔개체' 관계이며, '한 속성=한 값' 규칙이 관계형 모델의 원자성 전제다."
  },
  {
    "id": 21826,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "통신사 데이터 모델에 [고객], [서비스], [서비스이용], [청구], [납부] 엔터티가 있다. 한 고객은 여러 서비스를 이용할 수 있고 하나의 서비스는 여러 고객이 이용할 수 있다. 이 모델에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "[서비스이용]은 [고객], [서비스] 어느 쪽과도 관계를 맺지 않는 독립 엔터티이다.",
      "[서비스이용]은 [고객]과 [서비스]의 M:N 관계를 해소하는 교차(관계) 엔터티이다.",
      "[청구]는 [서비스이용]의 결과로 발생하는 행위 엔터티이다.",
      "[납부]는 [청구]에 대응하여 발생한다."
    ],
    "answer": 0,
    "explanation": "정답(옳지 않은 것)은 ①이다. [서비스이용]은 [고객]과 [서비스]의 다대다(M:N) 관계를 해소하기 위해 두 엔터티 사이에 도출된 교차(관계) 엔터티이므로, 양쪽 모두와 관계(외래식별자)를 맺는다. '어느 쪽과도 관계를 맺지 않는 독립 엔터티'라는 진술은 교차 엔터티의 본질과 정반대여서 틀렸다.\n② 고객·서비스가 M:N이면 반드시 교차 엔터티로 분해해야 하므로 옳다. ③ [청구]는 서비스 이용이라는 선행 사건으로부터 발생하는 행위 엔터티로 옳다. ④ [납부]는 [청구]에 대응(청구가 있어야 납부 발생)하므로 옳다.\n보충: M:N 관계는 관계형 모델에서 직접 구현되지 않아 교차 엔터티로 반드시 해소한다."
  },
  {
    "id": 21827,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "[고객]과 [주문] 엔터티가 \"한 명의 고객은 0건 이상의 주문을 하고, 모든 주문은 반드시 한 명의 고객에 속한다\"는 규칙으로 연결되어 있다. 이 관계에 대한 설명으로 옳은 것은?",
    "choices": [
      "[고객] 쪽 참여는 필수(mandatory)이다.",
      "[주문] 쪽 참여는 선택(optional)이다.",
      "고객:주문의 관계 차수(cardinality)는 1:M이다.",
      "주문이 없는 고객은 존재할 수 없다."
    ],
    "answer": 2,
    "explanation": "정답은 ③이다. \"한 고객이 0건 이상의 주문\"은 고객 1명에 주문이 여러 건(M) 대응할 수 있음을 뜻하므로 관계 차수는 1:M이다.\n① 고객은 주문이 \"0건 이상\"이므로 주문을 안 할 수도 있어 고객 쪽 참여는 선택(optional)이다 — 필수가 아니다. ② 모든 주문은 반드시 고객에 속하므로 주문 쪽 참여는 필수(mandatory)이다 — 선택이 아니다. ④ 고객은 주문이 0건일 수 있으므로 주문 없는 고객이 존재할 수 있다.\n보충: 참여도(선택/필수)와 관계 차수(1:1·1:M·M:N)는 별개 개념이다. \"0건 이상\"은 선택적 참여, \"반드시\"는 필수적 참여를 뜻한다."
  },
  {
    "id": 21828,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "비식별자 관계(non-identifying relationship)에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "부모 엔터티의 주식별자가 자식 엔터티의 일반 속성(외래키)으로 상속된다.",
      "ERD에서 관계선을 점선으로 표현한다.",
      "자식 엔터티는 부모와 무관하게 자신만의 주식별자를 독립적으로 구성한다.",
      "부모 엔터티의 주식별자가 자식 엔터티의 주식별자를 그대로 구성한다."
    ],
    "answer": 3,
    "explanation": "정답(옳지 않은 것)은 ④이다. '부모의 주식별자가 자식의 주식별자를 구성한다'는 것은 식별자 관계(identifying relationship)의 특징이다. 비식별자 관계에서는 부모의 주식별자가 자식으로 상속되되 자식의 '일반 속성(외래키)'이 되고, 자식은 자신의 독립된 주식별자를 갖는다.\n① 비식별자 관계에서 부모 키는 자식의 일반 속성으로 상속되므로 옳다. ② 비식별자 관계는 점선, 식별자 관계는 실선으로 표기하므로 옳다. ③ 자식이 독립적 주식별자를 가지는 것이 비식별자 관계의 핵심이므로 옳다.\n보충: 식별자 관계는 강한 종속(부모 키가 자식 주식별자에 포함, 실선), 비식별자 관계는 약한 종속(일반 속성 상속, 점선)이다."
  },
  {
    "id": 21829,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "피터 첸(Peter Chen) 표기법에서 관계(Relationship)를 나타내는 데 사용하는 기호는?",
    "choices": [
      "사각형",
      "타원",
      "마름모",
      "직선(선)"
    ],
    "answer": 2,
    "explanation": "정답은 ③ 마름모다. 피터 첸 표기법에서는 엔터티=사각형, 속성=타원, 관계=마름모, 그리고 이들을 잇는 연결선으로 ERD를 표현한다.\n① 사각형은 엔터티를 나타낸다. ② 타원은 속성을 나타낸다. ④ 직선(선)은 엔터티·속성·관계를 연결하는 선일 뿐 관계 자체의 기호가 아니다.\n보충: 실무에서 널리 쓰는 IE(까마귀발) 표기법이나 바커(Barker) 표기법에서는 관계를 선으로 표현해 피터 첸 표기법과 다르다. 표기법별 기호 차이를 구분해 둘 것."
  },
  {
    "id": 21830,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "주식별자를 구성하는 속성 중 하나라도 제외되면 각 인스턴스를 유일하게 구분할 수 없게 되어, 더 이상 줄일 수 없는 최소 속성 집합으로 구성해야 한다는 주식별자의 특성은?",
    "choices": [
      "대표성",
      "최소성",
      "불변성",
      "유일성"
    ],
    "answer": 1,
    "explanation": "정답은 ② 최소성이다. 최소성은 주식별자를 구성하는 속성이 유일성을 보장하는 데 꼭 필요한 최소한의 속성들로만 이뤄져야 한다는 특성이다. 구성 속성 중 하나만 빠져도 인스턴스 구분이 불가능해진다면 그 집합이 최소 집합임을 뜻한다.\n① 대표성은 주식별자가 엔터티를 대표하며 다른 엔터티와 참조 관계로 연결될 수 있어야 함을 의미한다. ③ 불변성은 주식별자 값이 자주 변하지 않아야 함을 의미한다. ④ 유일성은 주식별자로 모든 인스턴스를 유일하게 식별할 수 있어야 함을 의미한다 — 최소성이 전제하는 성질이지만 '하나라도 빠지면 안 되는 최소 집합'을 직접 규정하는 것은 최소성이다.\n보충: 주식별자의 4대 특성 = 유일성·최소성·불변성·존재성(대표성 포함하여 설명하기도 함)."
  },
  {
    "id": 21831,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "정규화",
    "question": "정규화 단계 중, 기본키(주식별자)가 아닌 일반 속성들 사이의 함수적 종속을 제거하는 데 초점을 두어 주식별자와의 직접적 관련성이 가장 낮은 것은?",
    "choices": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "answer": 2,
    "explanation": "정답은 ③ 제3정규형이다. 제3정규형은 기본키가 아닌 일반 속성들 사이의 이행적 함수 종속을 제거하는 단계로, 초점이 \"비(非)키 속성 간 종속\"에 있어 주식별자와의 직접 관련성이 가장 낮다.\n① 제1정규형은 모든 속성을 원자값으로 만들고 기본키를 확정하는 단계로 키와 밀접하다. ② 제2정규형은 기본키(복합키)의 일부에만 종속되는 부분 함수 종속을 제거하므로 키와 직접 관련된다. ④ BCNF는 모든 결정자가 후보키가 되도록 하는 단계로 후보키(식별자)와 직접 관련된다.\n보충: 1NF·2NF·BCNF는 키를 기준으로 정의되는 반면, 3NF만 일반 속성 간 종속을 다룬다는 점이 핵심 구분이다."
  },
  {
    "id": 21832,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "인조 식별자(artificial identifier)에 대한 설명으로 옳은 것은?",
    "choices": [
      "업무적으로 자연스럽게 존재하여 사용자가 쉽게 인지할 수 있는 식별자이다.",
      "원래 업무에 존재하던 속성을 그대로 주식별자로 사용한 것이다.",
      "업무적 의미와 무관하게 관리 편의를 위해 인위적으로 부여한 식별자이다.",
      "반드시 여러 속성을 조합하여 만든 복합 식별자만을 의미한다."
    ],
    "answer": 2,
    "explanation": "정답은 ③이다. 인조 식별자는 본질 식별자로 삼을 마땅한 속성이 없거나 본질 식별자가 복잡할 때, 업무적 의미와 무관하게 일련번호 등으로 인위적으로 새로 부여한 식별자다(예: 주문번호 시퀀스). 특정 업무 행위나 의미가 없어도 부여할 수 있다.\n① 업무적으로 자연스럽게 존재하고 사용자가 쉽게 인지하는 것은 본질(본질/자연) 식별자의 특징이다. ② 원래 업무 속성을 그대로 쓰는 것도 본질 식별자에 해당한다. ④ 인조 식별자는 단일 속성(대개 일련번호)인 경우가 많고 복합 여부와 무관하므로 '복합만'이라는 진술은 틀렸다.\n보충: 대표성 유무 기준으로 주식별자/보조식별자를, 생성 여부 기준으로 본질/인조 식별자를 구분한다."
  },
  {
    "id": 21833,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음은 오라클 계층형 질의(CONNECT BY)에서 사용하는 의사컬럼·연산자에 대한 설명이다. 옳지 않은 것을 모두 고른 것은?\n\n가. LEVEL은 계층의 깊이를 반환하며, 루트 노드는 0을 반환한다.\n나. CONNECT_BY_ISLEAF는 해당 행이 루트 노드이면 1을 반환한다.\n다. CONNECT_BY_ISCYCLE는 사이클이 발생하지 않은 정상 행에 대해 1을 반환한다.\n라. CONNECT_BY_ROOT는 각 행에 대해 계층의 최하위(리프) 노드 값을 반환하는 연산자다.",
    "choices": [
      "나, 다",
      "나, 다, 라",
      "가, 다, 라",
      "가, 나, 다, 라"
    ],
    "answer": 3,
    "explanation": "네 설명이 모두 틀렸으므로 정답은 ④(가·나·다·라)이다.\n\n- 가: LEVEL은 루트 노드가 0이 아니라 1부터 시작한다(자식으로 내려갈수록 2,3,...). 따라서 오류.\n- 나: CONNECT_BY_ISLEAF는 해당 행이 '리프(leaf)' 노드일 때 1을 반환한다. '루트'일 때가 아니므로 오류.\n- 다: CONNECT_BY_ISCYCLE는 NOCYCLE 옵션과 함께 사용해 '사이클을 유발하는' 행에 1을 반환한다. '사이클이 없는 정상 행'이 아니므로 오류.\n- 라: CONNECT_BY_ROOT는 각 행에 대해 계층의 '루트(최상위)' 노드 값을 반환하는 연산자다. '리프'가 아니므로 오류.\n\n보충: 계층형 질의 4대 요소로 LEVEL(깊이), CONNECT_BY_ISLEAF(리프 여부), CONNECT_BY_ISCYCLE(사이클 유발 여부, NOCYCLE 병행), CONNECT_BY_ROOT(루트 값)를 정확히 구분해 두어야 한다."
  },
  {
    "id": 21834,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "다음 SQL의 실행 결과로 옳은 것은? (단, 부서 테이블의 부서번호 컬럼에는 NULL이 포함된 행이 존재한다.)\n\n```sql\nSELECT 이름\nFROM   사원\nWHERE  부서번호 NOT IN (SELECT 부서번호 FROM 부서);\n```",
    "choices": [
      "사원 테이블의 전체 행이 조회된다",
      "부서번호가 NULL인 사원만 조회된다",
      "한 건도 조회되지 않는다(공집합)",
      "문법 오류가 발생한다"
    ],
    "answer": 2,
    "explanation": "정답은 ③이다. NOT IN 서브쿼리 결과 집합에 NULL이 하나라도 포함되면, 비교 결과가 어떤 행에서도 TRUE가 될 수 없어 전체 결과가 공집합이 된다.\n\n원리: `x NOT IN (a, b, NULL)`은 `x<>a AND x<>b AND x<>NULL`로 전개되는데, `x<>NULL`은 항상 UNKNOWN이다. AND 연산에서 하나라도 UNKNOWN이면 전체가 TRUE가 될 수 없으므로(최대 UNKNOWN) WHERE 절을 통과하는 행이 없다.\n\n- ①: NULL이 없다면 미매칭 행이 나올 수 있지만, NULL이 있으므로 전체 조회는 불가.\n- ②: NOT IN은 NULL 행을 특별히 골라내지 않는다.\n- ④: 문법 오류가 아니라 정상 실행되며 결과만 공집합이다.\n\n보충: 이 함정 때문에 실무·시험에서는 NOT IN 대신 NOT EXISTS를 권장한다. NOT EXISTS는 NULL에 영향받지 않는다."
  },
  {
    "id": 21835,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "부서별·직급별 연봉 합계를 다음과 같은 교차표 형태로 조회하려고 한다. 빈칸에 들어갈 올바른 구문은?\n\n| 부서 | 사원 | 대리 | 팀장 | 부장 |\n|------|------|------|------|------|\n| 인사팀 | ... | ... | ... | ... |\n| IT팀 | ... | ... | ... | ... |\n| 행정팀 | ... | ... | ... | ... |\n\n```sql\nSELECT *\nFROM   급여      -- 컬럼: 부서, 직급, 연봉\n( 빈칸 );\n```",
    "choices": [
      "UNPIVOT (SUM(연봉) FOR 직급 IN ('사원','대리','팀장','부장'))",
      "PIVOT (직급 FOR SUM(연봉) IN ('사원','대리','팀장','부장'))",
      "PIVOT (SUM(연봉) FOR 부서 IN ('인사팀','IT팀','행정팀'))",
      "PIVOT (SUM(연봉) FOR 직급 IN ('사원','대리','팀장','부장'))"
    ],
    "answer": 3,
    "explanation": "정답은 ④이다. PIVOT 구문은 `PIVOT (집계함수(값컬럼) FOR 회전기준컬럼 IN (열로 펼칠 값 목록))` 형태다. 여기서 값은 연봉의 합계이므로 SUM(연봉), 열로 펼칠 기준은 직급이므로 `FOR 직급 IN ('사원','대리','팀장','부장')`가 되어야 한다. 남은 부서는 자동으로 행(그룹) 기준이 된다.\n\n- ①: UNPIVOT은 반대 방향(열→행) 변환이므로 교차표를 만들지 못한다.\n- ②: 집계함수와 회전기준컬럼의 위치가 뒤바뀌어 문법 오류다.\n- ③: 직급이 아니라 부서를 열로 펼치므로 요구한 결과(직급별 열)와 다르다.\n\n보충: PIVOT의 FOR 대상은 '열 헤더가 될 컬럼'이며, IN 목록의 값이 그대로 결과 열 이름이 된다."
  },
  {
    "id": 21836,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "급여가 각각 1000, 2000, 3000인 세 행이 있는 사원 테이블에 대해 다음 SQL을 실행했을 때, 결과 컬럼에 나타나는 값을 위에서부터 순서대로 나열한 것은?\n\n```sql\nSELECT 급여,\n       FIRST_VALUE(급여) OVER (ORDER BY 급여) AS 결과\nFROM   사원;\n```",
    "choices": [
      "1000, 1000, 1000",
      "1000, 2000, 3000",
      "3000, 2000, 1000",
      "3000, 3000, 3000"
    ],
    "answer": 0,
    "explanation": "정답은 ①이다. FIRST_VALUE는 윈도우(정렬된 파티션) 내에서 '첫 번째' 값을 반환한다. `ORDER BY 급여`(오름차순)로 정렬하면 파티션의 첫 값은 최소값인 1000이며, 이 값이 모든 행에 대해 동일하게 반환된다. 따라서 결과는 1000, 1000, 1000이다.\n\n주의: ORDER BY만 있고 윈도우 프레임을 명시하지 않으면 기본 프레임은 `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`다. FIRST_VALUE는 프레임의 시작(UNBOUNDED PRECEDING)을 가리키므로 어느 행에서 보든 첫 값 1000으로 고정된다.\n\n- ②: 급여 원본값을 그대로 나열한 오답(윈도우 함수 미적용 착각).\n- ③: 내림차순 정렬로 오해한 경우.\n- ④: LAST_VALUE 기본 프레임 결과(현재 행까지의 마지막=자기 자신)와 혼동한 값.\n\n보충: 최소값 고정에 FIRST_VALUE+ORDER BY, 최대값에는 MAX() OVER() 또는 프레임을 확장한 LAST_VALUE를 쓴다."
  },
  {
    "id": 21837,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 WHERE 절과 논리적으로 동일한 조건은?\n\n```sql\nSELECT *\nFROM   회원\nWHERE  (사번, 회원번호) IN ((10005, 2003), (10007, 2005));\n```",
    "choices": [
      "(사번=10005 OR 회원번호=2003) AND (사번=10007 OR 회원번호=2005)",
      "(사번=10005 AND 회원번호=2003) OR (사번=10007 AND 회원번호=2005)",
      "사번 IN (10005, 10007) OR 회원번호 IN (2003, 2005)",
      "(사번=10005 AND 사번=10007) OR (회원번호=2003 AND 회원번호=2005)"
    ],
    "answer": 1,
    "explanation": "정답은 ②이다. 다중 컬럼 IN은 '튜플 단위' 비교다. 하나의 튜플 `(10005, 2003)`은 `사번=10005 AND 회원번호=2003`처럼 컬럼끼리 AND로 묶이고, IN 목록에 여러 튜플이 있으면 튜플들끼리는 OR로 연결된다. 따라서 `(사번=10005 AND 회원번호=2003) OR (사번=10007 AND 회원번호=2005)`가 정확히 동일하다.\n\n- ①: 컬럼 내부를 OR로, 튜플 간을 AND로 뒤집어 의미가 완전히 달라진다.\n- ③: 각 컬럼을 독립적으로 IN 비교하면 (10005, 2005)처럼 짝이 맞지 않는 조합까지 통과되어 결과가 넓어진다.\n- ④: 같은 컬럼을 서로 다른 값과 AND로 묶어 항상 거짓이 되는 잘못된 전개다.\n\n보충: 다중 컬럼 IN의 핵심은 '컬럼=AND, 행=OR'이다."
  },
  {
    "id": 21838,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "8명의 사원을 급여 내림차순으로 정렬한 뒤 다음 SQL을 실행했다. 그룹 컬럼에 부여되는 값을 위에서부터 순서대로 나열한 것은?\n\n```sql\nSELECT 이름,\n       NTILE(3) OVER (ORDER BY 급여 DESC) AS 그룹\nFROM   사원;\n```",
    "choices": [
      "1,1,2,2,3,3,3,3",
      "1,2,3,1,2,3,1,2",
      "1,1,1,2,2,2,3,3",
      "1,1,1,1,2,2,3,3"
    ],
    "answer": 2,
    "explanation": "정답은 ③(1,1,1,2,2,2,3,3)이다. NTILE(n)은 정렬된 행들을 n개 그룹으로 최대한 균등 분할한다. 8행을 3그룹으로 나누면 8 ÷ 3 = 2 나머지 2이므로, 앞쪽 그룹부터 나머지를 한 개씩 더 배분한다. 즉 그룹 크기는 3, 3, 2가 되어 1이 3개, 2가 3개, 3이 2개 → 1,1,1,2,2,2,3,3이다.\n\n- ①·④: 그룹별 개수 배분(3,3,2)을 잘못 계산한 경우.\n- ②: NTILE을 라운드로빈처럼 1,2,3을 번갈아 매기는 것으로 오해한 경우로, NTILE은 연속된 블록으로 나눈다.\n\n보충: 나머지가 있으면 '앞 그룹부터' 크기가 1씩 커진다. NTILE(4)로 8행이면 정확히 2,2,2,2."
  },
  {
    "id": 21839,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "두 테이블 부서와 사원을 결합하되, 매칭되지 않는 부서(사원이 한 명도 없는 부서)와 부서가 배정되지 않은 사원까지 양쪽 미매칭 행을 모두 결과에 포함시키려고 한다. 가장 적절한 방법은?",
    "choices": [
      "NVL 함수를 사용한 CROSS JOIN",
      "NVL 함수를 사용한 INNER JOIN",
      "FULL OUTER JOIN",
      "UNION"
    ],
    "answer": 2,
    "explanation": "정답은 ③이다. FULL OUTER JOIN은 조인 조건이 일치하는 행은 물론, 왼쪽·오른쪽 테이블 각각에서 대응 행이 없는 행까지 모두 결과에 포함하고 부족한 쪽 컬럼은 NULL로 채운다. '양쪽 미매칭을 모두 표시'하는 요구에 정확히 부합한다.\n\n- ①: CROSS JOIN은 두 테이블의 모든 조합(카티션 곱)을 만들 뿐 매칭/미매칭 개념이 없고, NVL로도 원하는 결합을 만들 수 없다.\n- ②: INNER JOIN은 양쪽이 일치하는 행만 남기므로 미매칭 행이 모두 사라진다. NVL을 붙여도 조인 결과 행 집합 자체는 늘지 않는다.\n- ④: UNION은 컬럼 구조가 같은 두 결과 집합을 세로로 합칠 뿐, 두 테이블을 컬럼 기준으로 가로 결합하는 조인이 아니다.\n\n보충: FULL OUTER JOIN은 (LEFT OUTER JOIN) UNION (RIGHT OUTER JOIN)으로도 표현할 수 있다. Oracle 구식 표기 `(+)`로는 양방향 외부조인을 한 번에 표현할 수 없다."
  },
  {
    "id": 21840,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "사용자 R1이 자신의 스키마에 테이블 주문을 생성해 소유하고 있다. 사용자 R2가 `SELECT * FROM R1.주문;`을 실행하자 조회 권한이 없어 오류가 발생했다. R2가 해당 테이블을 조회할 수 있도록 하는 가장 올바른 방법은?",
    "choices": [
      "R2가 CONNECT 롤을 다시 부여받는다",
      "R1이 `GRANT SELECT ON 주문 TO R2;`를 실행한다",
      "R2가 자신의 스키마에 동일한 이름의 테이블을 새로 만든다",
      "R2가 COMMIT을 실행한 뒤 다시 조회한다"
    ],
    "answer": 1,
    "explanation": "정답은 ②이다. 다른 사용자(R1)의 스키마 객체를 조회하려면 그 객체의 소유자가 SELECT 객체 권한을 부여해야 한다. 소유자 R1이 `GRANT SELECT ON 주문 TO R2;`를 실행하면 R2는 `R1.주문`을 조회할 수 있다.\n\n- ①: CONNECT 롤은 DB에 접속할 수 있는 권한(시스템 권한 성격)일 뿐, 특정 테이블의 조회 권한을 주지 않는다. R2는 이미 접속에 성공했으므로 접속 권한 문제가 아니다.\n- ③: 같은 이름의 빈 테이블을 자기 스키마에 만드는 것은 R1의 데이터를 조회하는 것과 무관하다.\n- ④: COMMIT은 트랜잭션 확정이며 권한과 무관하다. 권한 부족 오류는 COMMIT으로 해소되지 않는다.\n\n보충: 권한 회수는 `REVOKE SELECT ON 주문 FROM R2;`. 여러 사용자에게 열려면 PUBLIC에 부여할 수도 있다."
  },
  {
    "id": 21841,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL의 실행 결과로 옳은 것은?\n\n```sql\nSELECT REGEXP_REPLACE('2026/02/25',\n         '([0-9]{4})/([0-9]{2})/([0-9]{2})',\n         '\\3/\\2/\\1')\nFROM   DUAL;\n```",
    "choices": [
      "2026/02/25",
      "25/02/2026",
      "02/25/2026",
      "2026/25/02"
    ],
    "answer": 1,
    "explanation": "정답은 ②(25/02/2026)이다. 패턴 안의 괄호는 캡처 그룹을 만든다. `([0-9]{4})`가 그룹1='2026', 첫 `([0-9]{2})`가 그룹2='02', 둘째 `([0-9]{2})`가 그룹3='25'로 매칭된다. 치환 문자열 `\\3/\\2/\\1`은 역참조로 그룹3/그룹2/그룹1을 순서대로 넣으므로 25/02/2026이 된다.\n\n- ①: 원본 그대로로, 치환이 일어나지 않았다고 오해한 경우.\n- ③: 그룹 순서를 3/2/1이 아니라 2/3/1(월/일/연) 등으로 잘못 대응한 경우.\n- ④: 연도만 앞에 두고 뒤 두 그룹을 뒤집은 잘못된 대응.\n\n보충: 역참조는 오라클에서 `\\1`~`\\9`로 표기한다(일부 환경은 백슬래시 이스케이프 주의). 날짜 형식 뒤집기(YYYY/MM/DD → DD/MM/YYYY)에 자주 쓰인다."
  },
  {
    "id": 21842,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 실적 테이블에 대해 `SELECT SUM(1분기), SUM(2분기) FROM 실적;`을 실행했을 때의 결과로 옳은 것은?\n\n| 사원 | 1분기 | 2분기 |\n|------|-------|-------|\n| A | 4 | 10 |\n| B | (NULL) | 8 |\n| C | (NULL) | 5 |",
    "choices": [
      "4, 23",
      "NULL, 23",
      "4, NULL",
      "NULL, NULL"
    ],
    "answer": 0,
    "explanation": "정답은 ①(4, 23)이다. SUM을 포함한 집계함수는 대상 컬럼의 NULL을 '무시'하고 계산한다. 1분기는 4와 NULL 두 개인데 NULL을 제외하고 남은 4만 더해 4가 된다(0이나 NULL이 아니다). 2분기는 10+8+5 = 23이다.\n\n- ②: NULL이 섞이면 합계가 NULL이 된다는 오해. 집계함수는 NULL을 건너뛰므로 유효값이 하나라도 있으면 결과는 NULL이 아니다.\n- ③: 2분기가 NULL이라는 오해로, 2분기에는 NULL이 없다.\n- ④: 두 컬럼 모두 NULL로 오해한 경우.\n\n보충: 단, 대상 행이 전부 NULL이거나 조회 대상 행이 없으면 SUM 결과는 NULL이다(COUNT(*)만 0을 반환). NULL을 0으로 다루려면 `SUM(NVL(1분기,0))`을 쓴다. 또한 산술 연산(`4 + NULL`)은 NULL이 되지만, 집계함수의 NULL 무시와는 구분해야 한다."
  },
  {
    "id": 21843,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "Oracle에서 실행할 때, 다음 중 조회되는 행 수가 나머지 셋과 다른 것은? (사원 테이블에는 10건의 데이터가 있다.)",
    "choices": [
      "SELECT * FROM 사원 WHERE ROWNUM IN (1, 2);",
      "SELECT * FROM 사원 WHERE ROWNUM = 1;",
      "SELECT * FROM 사원 WHERE ROWNUM <= 1;",
      "SELECT * FROM 사원 WHERE ROWNUM < 2;"
    ],
    "answer": 0,
    "explanation": "ROWNUM은 조건을 통과한 결과 행에 1부터 순차적으로 부여되는 의사(pseudo)컬럼이다. ① ROWNUM IN (1,2)는 첫 행에 1, 둘째 행에 2가 부여되어 두 행 모두 통과하므로 2건이다. ② ROWNUM=1은 1건, ③ ROWNUM<=1은 1건, ④ ROWNUM<2 즉 ROWNUM=1도 1건이다. 따라서 ①만 2건으로 다르다. 참고로 ROWNUM은 1부터 부여되므로 ROWNUM=2나 ROWNUM>1처럼 첫 행이 통과하지 못하는 조건은 0건이 된다."
  },
  {
    "id": 21844,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "사원 테이블에 데이터가 있더라도 WHERE 1=2 조건으로 인해 대상 행이 하나도 없을 때, 다음 각 SQL의 실행 결과 중 나머지 셋과 다른 값을 반환하는 것은?",
    "choices": [
      "SELECT SUM(급여) FROM 사원 WHERE 1=2;",
      "SELECT AVG(급여) FROM 사원 WHERE 1=2;",
      "SELECT MAX(급여) FROM 사원 WHERE 1=2;",
      "SELECT COUNT(*) FROM 사원 WHERE 1=2;"
    ],
    "answer": 3,
    "explanation": "집계함수는 대상 행이 하나도 없어도 항상 한 행을 반환한다. SUM·AVG·MAX·MIN은 빈 집합에 대해 NULL을 반환하지만, COUNT(*)는 행 개수를 세므로 0을 반환한다. 따라서 ①②③은 모두 NULL, ④만 0으로 값이 다르다. NVL(SUM(급여),0)처럼 감싸지 않는 한 SUM 등은 0이 아니라 NULL임에 유의한다."
  },
  {
    "id": 21845,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "부서 테이블의 모든 행을 보존하면서 사원 테이블과 조인하려고 한다. 다음 중 조인 결과가 나머지 셋과 다른 것은?",
    "choices": [
      "SELECT * FROM 부서 D LEFT OUTER JOIN 사원 E ON D.부서번호 = E.부서번호;",
      "SELECT * FROM 부서 D, 사원 E WHERE D.부서번호 = E.부서번호(+);",
      "SELECT * FROM 부서 D, 사원 E WHERE D.부서번호(+) = E.부서번호;",
      "SELECT * FROM 사원 E RIGHT OUTER JOIN 부서 D ON E.부서번호 = D.부서번호;"
    ],
    "answer": 2,
    "explanation": "부서를 보존(왼쪽 보존)하려면 결핍이 생길 수 있는 사원 쪽에 (+)를 붙여야 한다. ① ANSI LEFT OUTER JOIN(부서 보존), ② (+)가 사원측이므로 부서 보존, ④ 사원 RIGHT OUTER JOIN 부서는 부서 보존으로 셋 다 동일하다. ③은 (+)가 부서측에 붙어 사원을 보존하는 반대 방향 아우터 조인이 되므로 결과가 다르다. Oracle의 (+)는 NULL로 채워질(부족한) 쪽에 붙는다는 규칙을 기억한다."
  },
  {
    "id": 21846,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 PIVOT 질의에 대한 설명으로 옳은 것은?\n\n```sql\nSELECT *\nFROM (SELECT 부서, 직급 FROM 사원)\nPIVOT (COUNT(*) FOR 직급 IN ('사원' AS 사원, '대리' AS 대리, '과장' AS 과장));\n```",
    "choices": [
      "부서별로 행이 묶이고 직급 값이 열로 전개되어 각 직급 인원수가 표시된다.",
      "PIVOT 절에는 집계함수 없이 전개할 컬럼만 나열한다.",
      "IN 절에 명시하지 않은 직급도 자동으로 결과 열에 나타난다.",
      "부서별 집계를 위해 반드시 GROUP BY 절을 함께 작성해야 한다."
    ],
    "answer": 0,
    "explanation": "PIVOT은 행 값을 열로 전개하는 기능으로, 인라인 뷰에 나열되었으나 피벗 대상도 집계 대상도 아닌 컬럼인 부서가 자동으로 그룹 기준이 된다. FOR 직급 IN (...)에 나열된 값이 각각 열이 되고 COUNT(*)로 인원수가 채워진다. ② PIVOT은 반드시 집계함수를 요구하고, ③ IN 절에 명시한 값만 열이 되며, ④ GROUP BY는 PIVOT이 암묵적으로 수행하므로 별도로 쓰지 않는다."
  },
  {
    "id": 21847,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "서브쿼리",
    "question": "다음 SQL에서 서브쿼리가 두 건 이상을 반환하여 오류(ORA-01427)가 나는 일이 없도록 보장하려면, 부서 테이블의 부서명 컬럼에 어떤 제약조건이 필요한가?\n\n```sql\nSELECT 사원명\nFROM 사원\nWHERE 부서번호 = (SELECT 부서번호 FROM 부서 WHERE 부서명 = '영업');\n```",
    "choices": [
      "CHECK 제약조건",
      "UNIQUE 제약조건",
      "NOT NULL 제약조건",
      "FOREIGN KEY 제약조건"
    ],
    "answer": 1,
    "explanation": "= 연산자를 사용하는 단일행 서브쿼리이므로, 서브쿼리가 두 건 이상을 반환하면 'ORA-01427: 단일 행 하위 질의에서 2개 이상의 행이 리턴됨' 오류가 발생한다. 부서명에 UNIQUE 제약이 있으면 부서명='영업'을 만족하는 행이 최대 1건임이 보장되어 안전하다. ③ NOT NULL은 값의 존재만 보장할 뿐 행 개수를 제한하지 못하고, ①CHECK·④FK는 유일성과 무관하다."
  },
  {
    "id": 21848,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "다음 SQL이 급여 오름차순으로 첫 행부터 현재 행까지의 급여 누적합계를 계산하도록 (㉠)에 들어갈 윈도우 프레임 절로 옳은 것은?\n\n```sql\nSELECT 급여, SUM(급여) OVER (ORDER BY 급여 (㉠)) AS 누적합계\nFROM 사원;\n```",
    "choices": [
      "RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING",
      "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING",
      "ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING",
      "ROWS UNBOUNDED PRECEDING"
    ],
    "answer": 3,
    "explanation": "ROWS UNBOUNDED PRECEDING은 ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW와 같으며, 첫 행부터 현재 행까지를 누적하므로 누적합계가 된다. ① 전체 행을 대상으로 해 모든 행이 총합으로 동일해지고, ② 앞뒤 1행씩(3행) 이동합계, ③ 현재 행부터 마지막까지의 역방향 누적이 된다."
  },
  {
    "id": 21849,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "트랜잭션의 특성(ACID) 중 고립성(Isolation)에 대한 설명으로 옳은 것은?",
    "choices": [
      "실행 중인 트랜잭션은 다른 트랜잭션의 연산에 영향을 받지 않는다.",
      "트랜잭션의 연산은 전부 반영되거나 전혀 반영되지 않는다.",
      "트랜잭션이 성공적으로 완료되면 그 결과는 영구적으로 반영된다.",
      "트랜잭션 수행 전후에 데이터베이스는 일관된 상태를 유지한다."
    ],
    "answer": 0,
    "explanation": "고립성(Isolation)은 동시에 수행되는 여러 트랜잭션이 서로의 중간 연산에 간섭받지 않고 독립적으로 수행되는 것처럼 보이는 성질이다. ②는 원자성(Atomicity, 전부 아니면 전무), ③은 지속성(Durability, 완료 결과의 영구 반영), ④는 일관성(Consistency, 무결성 유지)에 대한 설명이다."
  },
  {
    "id": 21850,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "기본키(Primary Key) 제약조건이 보장하는 특성으로 옳은 것은?",
    "choices": [
      "NULL 값을 허용하며 컬럼 값은 유일(UNIQUE)해야 한다.",
      "NULL 값을 허용하며 값의 중복도 허용된다.",
      "NULL 값을 허용하지 않으며(NOT NULL) 값은 유일(UNIQUE)해야 한다.",
      "NULL 값을 허용하지 않으나(NOT NULL) 값의 중복은 허용된다."
    ],
    "answer": 2,
    "explanation": "기본키는 행을 유일하게 식별하므로 NOT NULL(존재성)과 UNIQUE(유일성)를 동시에 만족해야 한다. 즉 NULL을 가질 수 없고 값이 중복될 수도 없다. ①②는 NULL을 허용한다는 점에서, ④는 중복을 허용한다는 점에서 틀리다. 참고로 UNIQUE 제약만 있는 컬럼은 NULL을 허용할 수 있다는 점이 기본키와의 차이다."
  },
  {
    "id": 21851,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "사원 테이블은 사원번호와 관리자번호(직속 상사의 사원번호)를 가진다. 최상위 관리자부터 하위 사원 방향으로 조직 계층을 전개하려 할 때, 올바른 계층 질의 절은? (START WITH 관리자번호 IS NULL을 사용한다고 가정)",
    "choices": [
      "CONNECT BY 사원번호 = PRIOR 관리자번호",
      "CONNECT BY PRIOR 사원번호 = 관리자번호",
      "CONNECT BY PRIOR 관리자번호 = 사원번호",
      "CONNECT BY 관리자번호 = 사원번호"
    ],
    "answer": 1,
    "explanation": "하향(순방향) 전개에서는 PRIOR가 부모(상위) 행의 컬럼에 붙는다. 부모의 사원번호(PRIOR 사원번호)가 자식의 관리자번호와 같은 행을 연결하므로 CONNECT BY PRIOR 사원번호 = 관리자번호가 옳다. ①③은 PRIOR 위치가 반대라 상향(역방향) 전개가 되고, ④는 PRIOR가 없어 부모-자식 관계가 지정되지 않으므로 계층이 전개되지 않는다."
  },
  {
    "id": 21852,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "사원 테이블(사원번호, 관리자번호, 직급)에 대한 다음 계층 질의 중, 계층(트리)이 정상적으로 전개되지 않는 것은?",
    "choices": [
      "SELECT * FROM 사원 START WITH 관리자번호 IS NULL CONNECT BY PRIOR 사원번호 = 관리자번호;",
      "SELECT * FROM 사원 START WITH 사원번호 = 1000 CONNECT BY PRIOR 사원번호 = 관리자번호;",
      "SELECT * FROM 사원 START WITH 관리자번호 IS NULL CONNECT BY PRIOR 사원번호 = 관리자번호 AND 직급 <> '인턴';",
      "SELECT * FROM 사원 START WITH 관리자번호 IS NULL CONNECT BY 사원번호 = 관리자번호;"
    ],
    "answer": 3,
    "explanation": "계층 질의에서 부모-자식 연결은 CONNECT BY 절의 PRIOR로 지정한다. ④는 CONNECT BY에 PRIOR가 없어 같은 행 내에서 사원번호=관리자번호를 비교할 뿐 상하위 관계를 전개하지 못하므로 루트 이후로 트리가 만들어지지 않는다. ①②는 시작점만 다를 뿐 정상 전개되고, ③은 AND 조건으로 특정 직급(인턴)을 가지치기해도 PRIOR가 있어 트리는 정상적으로 전개된다."
  },
  {
    "id": 21853,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUP BY",
    "question": "다음 [올림픽메달] 테이블에 대해 아래 SQL을 실행한 결과로 옳은 것은?\n\n| 선수 | 국가 | 메달 |\n|------|------|------|\n| 김하나 | KOR | 골드 |\n| 이두리 | KOR | 실버 |\n| 박세찬 | KOR | 실버 |\n| 정오름 | USA | 골드 |\n| 최네오 | USA | 브론즈 |\n\n```sql\nSELECT 메달, COUNT(*) AS 수\nFROM   올림픽메달\nWHERE  국가 = 'KOR'\nGROUP BY 메달;\n```",
    "choices": [
      "골드 1, 실버 2, 브론즈 1",
      "골드 1, 실버 2",
      "골드 1, 실버 1, 브론즈 1",
      "실버 2, 브론즈 1"
    ],
    "answer": 1,
    "explanation": "WHERE 국가='KOR' 로 먼저 행을 걸러내면 대상은 (김하나-골드, 이두리-실버, 박세찬-실버) 3건이다. 이를 메달로 GROUP BY 하면 '골드' 그룹 1건, '실버' 그룹 2건이 되어 결과는 골드 1, 실버 2 두 행이다. → 정답 ②.\n① 브론즈는 KOR 데이터에 없으므로 나타날 수 없다. ③ 실버는 2건이므로 1이 아니다. ④ 브론즈가 KOR에 없어 오답. GROUP BY 는 WHERE 로 필터링된 행에 대해서만 그룹을 만들며, 그룹 함수 COUNT(*)는 각 그룹의 행 수를 센다는 점이 핵심이다."
  },
  {
    "id": 21854,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "DDL",
    "question": "이미 데이터가 저장되어 있는 [사원] 테이블의 현재 컬럼 정의가 아래와 같다. 각 ALTER 문을 실행할 때 **오류가 발생하지 않는 것**은? (Oracle 기준)\n\n- 사번 NUMBER(6), 급여 NUMBER(8,2), 이름 VARCHAR2(20), 입사일 DATE\n- 이름 컬럼에는 최대 15자 문자열이, 급여에는 정수부 6자리 값이 실제로 들어 있다.",
    "choices": [
      "ALTER TABLE 사원 MODIFY 급여 NUMBER(4,2);",
      "ALTER TABLE 사원 MODIFY 이름 VARCHAR2(10);",
      "ALTER TABLE 사원 MODIFY 사번 DATE;",
      "ALTER TABLE 사원 MODIFY 입사일 TIMESTAMP;"
    ],
    "answer": 3,
    "explanation": "컬럼에 데이터가 존재할 때 타입/크기 변경은 '기존 데이터를 손실 없이 담을 수 있는가'가 관건이다.\n④ DATE 는 TIMESTAMP 의 부분집합이라 기존 날짜 값을 손실 없이 담을 수 있어 정상 변경된다. → 정답 ④.\n① NUMBER(8,2)→NUMBER(4,2) 는 정수부를 2자리로 줄이는데 기존에 6자리 값이 있어 축소 불가 → 오류. ② VARCHAR2(20)→VARCHAR2(10) 은 15자 데이터가 이미 있어 담을 수 없어 오류. ③ 숫자(NUMBER)를 DATE 로 암시적 변환할 수 없어 오류. 일반적으로 크기 확대·호환 타입으로의 변경은 허용되지만, 축소·비호환 변경은 컬럼이 비어 있을 때만 가능하다."
  },
  {
    "id": 21855,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 두 테이블에 대해 아래 SQL을 실행한 결과로 옳은 것은?\n\n[상품]\n| 상품ID |\n|--------|\n| 1 |\n| 2 |\n| 3 |\n\n[주문]\n| 상품ID |\n|--------|\n| 3 |\n\n```sql\nSELECT 상품ID\nFROM   상품 A\nWHERE  NOT EXISTS (\n         SELECT 1 FROM 주문 B WHERE B.상품ID = A.상품ID\n       );\n```",
    "choices": [
      "1",
      "1, 2",
      "(공집합)",
      "오류 발생"
    ],
    "answer": 1,
    "explanation": "NOT EXISTS 는 상관 서브쿼리가 한 건도 반환하지 않을 때 참이 되어 바깥 행을 남긴다. 상품ID 1·2 는 [주문]에 대응 행이 없어 서브쿼리가 공집합 → NOT EXISTS 참 → 결과에 포함. 상품ID 3 은 [주문]에 존재해 서브쿼리가 행을 반환 → NOT EXISTS 거짓 → 제외. 따라서 결과는 1, 2. → 정답 ②.\n① 1만 나오는 경우는 없다(2도 대응 주문이 없음). ③ 공집합이 되려면 모든 상품이 주문에 있어야 한다. ④ 문법상 정상 실행된다. NOT IN 과 달리 NOT EXISTS 는 NULL 이 섞여도 예기치 않게 전체가 걸러지지 않는다는 점도 함께 기억해 둘 것."
  },
  {
    "id": 21856,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 집합 연산자 중, 결과 집합에서 **중복 행을 제거하지 않고** 그대로 반환하는 것은?",
    "choices": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "EXCEPT (MINUS)"
    ],
    "answer": 1,
    "explanation": "UNION ALL 은 두 결과 집합을 단순히 이어 붙이며 중복 제거(정렬)를 수행하지 않아 중복 행이 그대로 남는다. → 정답 ②.\n① UNION 은 합집합을 만들며 중복을 제거한다. ③ INTERSECT 는 교집합으로 중복을 제거한 공통 행만 반환한다. ④ EXCEPT(오라클 MINUS)는 차집합으로 역시 중복을 제거한다. UNION/INTERSECT/EXCEPT 는 내부적으로 정렬·중복 제거가 일어나 상대적으로 비용이 크지만, UNION ALL 은 그 과정이 없어 성능상 유리하다는 점도 함께 알아 둘 것."
  },
  {
    "id": 21857,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 [이벤트] 테이블에 대해 아래 SQL을 실행할 때 반환되는 **행의 개수**는?\n\n[이벤트]\n| 일자 |\n|------|\n| 2024-01-15 |\n| 2024-03-20 |\n| 2024-05-10 |\n\n```sql\nSELECT EXTRACT(MONTH FROM 일자) FROM 이벤트\nUNION\nSELECT EXTRACT(YEAR  FROM 일자) FROM 이벤트;\n```",
    "choices": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": 3,
    "explanation": "EXTRACT(MONTH FROM 일자) 는 각 행에서 월을 뽑아 1, 3, 5 (서로 다른 3개)를 만든다. EXTRACT(YEAR FROM 일자) 는 세 행 모두 2024 이므로 2024 하나뿐이다. 두 결과를 UNION 하면 중복이 제거되어 {1, 3, 5, 2024} 4개 값이 남는다. → 정답 ④ 4개.\n① ② ③ 은 각 SELECT 의 중복 제거·합집합 계산을 잘못한 경우다. UNION 은 자료형이 호환되는 두 결과를 하나의 컬럼으로 합치며 중복을 제거한다는 점, EXTRACT 는 날짜에서 특정 필드(연·월·일 등)를 정수로 추출한다는 점이 핵심이다."
  },
  {
    "id": 21858,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "다음 중 SQL 명령어에 대한 설명으로 **옳지 않은** 것은?",
    "choices": [
      "TRUNCATE TABLE 은 WHERE 조건으로 특정 행만 지울 수 있는 DML 명령어이다.",
      "DELETE 문은 WHERE 절을 사용하여 테이블의 일부 행만 삭제할 수 있다.",
      "TRUNCATE TABLE 은 테이블의 모든 행을 삭제하고 저장 공간을 초기화하며, 일반적으로 롤백할 수 없다.",
      "DROP TABLE 은 테이블의 데이터뿐 아니라 구조(정의)까지 제거한다."
    ],
    "answer": 0,
    "explanation": "TRUNCATE TABLE 은 DDL 명령어이며, 조건 없이 테이블의 모든 행을 한 번에 제거한다. WHERE 로 일부만 지울 수 없고 DML 도 아니다. 따라서 ①은 두 가지 점(DML이라는 것, 조건 삭제 가능하다는 것)에서 틀린 설명이다. → 정답 ①.\n② DELETE 는 DML 로 WHERE 로 일부 행만 지울 수 있다(옳음). ③ TRUNCATE 는 데이터를 모두 지우고 세그먼트를 초기 상태로 되돌리며 자동 커밋되어 롤백 불가(옳음). ④ DROP 은 데이터와 테이블 정의 자체를 삭제(옳음). DML(DELETE) 대비 DDL(TRUNCATE)은 개별 행 로그를 남기지 않아 대량 삭제 시 빠르다는 차이도 함께 기억할 것."
  },
  {
    "id": 21859,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "INNER JOIN",
    "question": "다음 두 테이블에 대해 아래 SQL을 실행한 결과로 옳은 것은?\n\n[테이블1]\n| 컬럼1 | 컬럼2 |\n|-------|-------|\n| 1 | 10 |\n| 2 | 20 |\n| 3 | 30 |\n| 4 | 40 |\n\n[테이블2]\n| 컬럼1 |\n|-------|\n| 1 |\n| 2 |\n| 3 |\n| 4 |\n| 5 |\n\n```sql\nSELECT SUM(A.컬럼2)\nFROM   테이블1 A\nINNER JOIN 테이블2 B ON A.컬럼1 = B.컬럼1;\n```",
    "choices": [
      "120",
      "NULL",
      "100",
      "140"
    ],
    "answer": 2,
    "explanation": "INNER JOIN 은 양쪽 테이블에 조인 키가 모두 존재하는 행만 결합한다. 테이블1.컬럼1(1~4)과 테이블2.컬럼1(1~5)의 공통 값은 1,2,3,4 이며, 테이블2의 5 는 테이블1에 없어 매칭되지 않는다. 매칭된 4개 행의 테이블1.컬럼2 는 10+20+30+40 = 100 이다. → 정답 ③ 100.\n① 120·④ 140 은 존재하지 않는 값(예: 50/60 등)을 잘못 더한 경우다. ② NULL 은 매칭 행이 하나도 없을 때만 SUM 이 NULL 이 되므로 여기서는 해당하지 않는다. 내부 조인에서는 한쪽에만 있는 키(값 5)가 결과에서 탈락한다는 점이 핵심이다."
  },
  {
    "id": 21860,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 두 테이블을 조인 조건 없이 FROM 절에 함께 기술하여 조회할 때(카티션 곱), 반환되는 **행의 개수**는?\n\n[테이블X] (2개 행)\n| 값 |\n|----|\n| A |\n| B |\n\n[테이블Y] (2개 행)\n| 값 |\n|----|\n| 1 |\n| 2 |\n\n```sql\nSELECT *\nFROM   테이블X, 테이블Y;\n```",
    "choices": [
      "2개",
      "0개",
      "4개",
      "6개"
    ],
    "answer": 2,
    "explanation": "조인 조건이 없는 두 테이블을 FROM 절에 나열하면 카티션 곱(교차 조인)이 되어 두 테이블의 행 수를 곱한 만큼 결과가 생성된다. 테이블X 2행 × 테이블Y 2행 = 4행. → 정답 ③ 4개.\n① 2개는 한쪽 행 수만 센 경우, ② 0개는 공통 조건이 없어 결과가 없다고 오해한 경우, ④ 6개는 2+... 등 잘못 계산한 경우다. 카티션 곱은 곱(2×2=4)이며, 조인 조건을 빠뜨리면 의도치 않게 대량의 행이 만들어질 수 있으니 주의해야 한다."
  },
  {
    "id": 21861,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 MERGE 문을 실행한 후 [대상] 테이블의 상태로 옳은 것은?\n\n[대상] (실행 전)\n| ID | 값 |\n|----|----|\n| 1 | 50 |\n| 2 | 50 |\n\n[원본]\n| ID | 값 |\n|----|----|\n| 1 | 100 |\n| 2 | 100 |\n| 3 | 100 |\n\n```sql\nMERGE INTO 대상 T\nUSING 원본 S\nON (T.ID = S.ID)\nWHEN MATCHED THEN\n  UPDATE SET T.값 = S.값\nWHEN NOT MATCHED THEN\n  INSERT (ID, 값) VALUES (S.ID, S.값);\n```",
    "choices": [
      "ID1=100, ID2=100, ID3=100 (3행)",
      "ID1=50, ID2=50, ID3=100 (3행)",
      "ID1=100, ID2=100 (2행)",
      "ID1=50, ID2=50 (2행)"
    ],
    "answer": 0,
    "explanation": "MERGE 는 원본 각 행을 대상과 ON 조건으로 비교한다. ID 1·2 는 대상에 이미 존재(MATCHED)하므로 UPDATE 로 값이 100 으로 갱신되고, ID 3 은 대상에 없으므로(NOT MATCHED) 값 100 으로 INSERT 된다. 결과 대상은 (1,100),(2,100),(3,100) 세 행 모두 100. → 정답 ①.\n② 는 MATCHED 행이 갱신되지 않았다고 본 오답, ③ 은 NOT MATCHED INSERT 가 없었다고 본 오답, ④ 는 UPDATE·INSERT 둘 다 반영하지 않은 오답이다. MERGE 는 UPDATE(있으면 갱신)와 INSERT(없으면 삽입)를 한 문장으로 처리하는 UPSERT 구문이라는 점이 핵심이다."
  },
  {
    "id": 21862,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL 중 실행 시 **오류가 발생하는** 것은? (Oracle 기준, [판매] 테이블에는 제품명·단가·수량 컬럼이 있다)",
    "choices": [
      "SELECT 제품명, 단가 * 수량 AS 제품코드 FROM 판매 ORDER BY 제품코드;",
      "SELECT 제품명, 단가 FROM 판매 ORDER BY 2;",
      "SELECT 제품명, SUM(수량) AS 총수량 FROM 판매 GROUP BY 제품명;",
      "SELECT 제품명, 단가 * 수량 AS 제품코드 FROM 판매 WHERE 제품코드 > 1000;"
    ],
    "answer": 3,
    "explanation": "SELECT 문의 논리적 처리 순서는 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY 이다. 컬럼 별칭(AS 제품코드)은 SELECT 단계에서 비로소 정의되므로, 그보다 먼저 처리되는 WHERE 절에서는 별칭을 참조할 수 없다. 따라서 ④는 'WHERE 제품코드 > 1000'에서 별칭을 사용해 오류가 난다(원식 '단가*수량 > 1000'으로 써야 함). → 정답 ④.\n① ORDER BY 는 SELECT 이후에 처리되어 별칭 참조가 허용되므로 정상. ② ORDER BY 2 는 SELECT 목록의 두 번째 컬럼(단가)으로 정렬하는 위치 지정 방식으로 정상. ③ GROUP BY 제품명 에 대해 SUM 집계로 정상 실행된다. 별칭은 WHERE·GROUP BY·HAVING 에서는 못 쓰고 ORDER BY 에서만 쓸 수 있다는 규칙이 핵심이다."
  },
  {
    "id": 21863,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 연산 결과의 성격이 나머지 셋과 다른 하나는?",
    "choices": [
      "WHERE 1 > NULL",
      "NULL + 1",
      "NULL * 1",
      "NULL * NULL"
    ],
    "answer": 0,
    "explanation": "정답은 ①이다. ①의 `1 > NULL`은 값이 아니라 '비교 판정'으로, NULL과의 비교 결과는 항상 UNKNOWN이다. WHERE 절이 TRUE가 아닌 UNKNOWN이면 해당 행은 결과에서 제외되므로 어떤 행도 반환되지 않는다. 반면 ②·③·④는 산술식이며, 산술 연산에 NULL이 하나라도 포함되면 결과는 무조건 NULL 값이 된다(NULL+1=NULL, NULL*1=NULL, NULL*NULL=NULL). 즉 ②·③·④는 모두 'NULL이라는 값'을 산출하지만 ①은 '값'이 아니라 논리 3값(UNKNOWN) 판정으로 행 필터링에 작용한다는 점에서 다르다. 보충: SQL의 논리값은 TRUE/FALSE/UNKNOWN 3값이며, NULL과의 등호·부등호 비교는 예외 없이 UNKNOWN이 된다. NULL 여부는 반드시 IS NULL / IS NOT NULL로 판정해야 한다."
  },
  {
    "id": 21864,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SELECT 문의 결과 값이 나머지 셋과 다른 하나는?",
    "choices": [
      "SELECT 1 + NULL",
      "SELECT 1 * NULL",
      "SELECT 'X'",
      "SELECT NULL, NULL"
    ],
    "answer": 2,
    "explanation": "정답은 ③이다. ③은 상수 문자값 'X'를 반환하므로 결과가 NULL이 아닌 명확한 값이다. 나머지는 모두 NULL과 관련된 결과를 낸다: ① `1 + NULL`은 산술식에 NULL이 포함되어 NULL, ② `1 * NULL`도 같은 이유로 NULL, ④ `SELECT NULL, NULL`은 두 개의 NULL 컬럼을 반환한다. 따라서 값이 존재하는(non-null) 유일한 항목은 ③이다. 보충: NULL은 '값이 없음(미지의 상태)'을 뜻하므로 어떤 산술 연산과 결합해도 결과가 NULL로 전파된다. 값을 강제로 채우려면 NVL/COALESCE 같은 함수를 사용한다."
  },
  {
    "id": 21865,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "DDL",
    "question": "다음 SQL을 순서대로 실행했을 때, 마지막 SELECT의 결과 값으로 옳은 것은?\n\n```sql\nCREATE TABLE 상품 (\n  상품번호 INT IDENTITY(1,1),\n  수량     INT CHECK (수량 > 0)\n);\nINSERT INTO 상품 (수량) VALUES (-1);\nINSERT INTO 상품 (수량) VALUES (0);\nINSERT INTO 상품 (수량) VALUES (1);\n\nSELECT COUNT(*) FROM 상품;\n```",
    "choices": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 1,
    "explanation": "정답은 ②(1)이다. 수량 컬럼에는 `CHECK (수량 > 0)` 제약이 걸려 있으므로 0보다 큰 값만 삽입이 허용된다. -1은 조건 위반으로 거부, 0도 '초과(>)'가 아니라 거부되며, 1만 조건(1 > 0)을 만족해 정상 삽입된다. 따라서 실제로 저장된 행은 1건이고 COUNT(*)는 1이 된다. IDENTITY(1,1)은 시드 1, 증가치 1로 자동 채번될 뿐 행 수에는 영향을 주지 않는다(삽입 실패 행은 카운트되지 않음). 보충: CHECK 제약은 컬럼 값이 지정한 논리식을 만족할 때만 DML을 허용하며, 경계값(=0)은 부등호에 포함되지 않으므로 거부된다는 점에 유의한다."
  },
  {
    "id": 21866,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "DDL",
    "question": "뷰 `사원뷰`가 테이블 `사원`을 참조하고 있다. 이 상태에서 다음 문장을 실행할 때 실제로 삭제되는 대상으로 옳은 것은?\n\n```sql\nDROP TABLE 사원 RESTRICT;\n```",
    "choices": [
      "아무 것도 삭제되지 않는다",
      "사원 테이블만 삭제된다",
      "사원 테이블과 사원뷰가 함께 삭제된다",
      "사원뷰만 삭제된다"
    ],
    "answer": 0,
    "explanation": "정답은 ①이다. RESTRICT 옵션은 삭제하려는 객체를 참조(의존)하는 다른 객체가 하나라도 존재하면 삭제를 거부한다. `사원뷰`가 `사원` 테이블에 의존하고 있으므로 DROP은 오류로 실패하고, 결과적으로 테이블도 뷰도 아무 것도 삭제되지 않는다. ②·③은 참조 관계를 무시한 삭제로 RESTRICT 의미에 어긋난다(참조 객체를 함께 지우는 것은 CASCADE의 동작이다). ④ 뷰만 삭제되는 일은 없다. 보충: 반대로 `DROP TABLE 사원 CASCADE`를 쓰면 의존 객체(뷰 등)까지 연쇄 삭제된다. RESTRICT는 안전하게 '의존 있으면 거부', CASCADE는 '의존까지 제거'로 대비된다."
  },
  {
    "id": 21867,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "함수 `NVL(수당, 급여)`에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "수당이 NULL이면 급여를 반환한다",
      "수당이 NULL이 아니면 수당 값을 그대로 반환한다",
      "첫 번째 인자와 두 번째 인자의 데이터 타입은 서로 호환되어야 한다",
      "수당과 급여를 더한 합계를 반환한다"
    ],
    "answer": 3,
    "explanation": "정답(옳지 않은 것)은 ④이다. NVL(expr1, expr2)는 첫 번째 인자 expr1이 NULL이면 expr2를, NULL이 아니면 expr1을 반환하는 'NULL 치환' 함수일 뿐, 두 인자를 더하거나 산술 연산을 수행하지 않는다. ① 수당이 NULL이면 대체값인 급여를 반환하므로 옳다. ② 수당이 NULL이 아니면 수당을 그대로 반환하므로 옳다. ③ 두 인자의 데이터 타입은 호환(암시적 변환 가능)되어야 하므로 옳다. 보충: 세 개 이상 인자의 우선순위 치환은 COALESCE, 조건 분기 치환은 NVL2(expr, v1, v2)를 사용한다."
  },
  {
    "id": 21868,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "급여가 높은 '상위 3개 급여 수준'을 뽑되, 동일 급여자는 같은 순위로 모두 포함하고 순위를 건너뛰지 않아야 한다. 다음 빈칸에 들어갈 함수로 가장 적절한 것은?\n\n```sql\nSELECT 이름, 급여\nFROM (\n  SELECT 이름, 급여,\n         (   ) OVER (ORDER BY 급여 DESC) AS 순위\n  FROM 사원\n)\nWHERE 순위 <= 3;\n```",
    "choices": [
      "RANK()",
      "DENSE_RANK()",
      "ROW_NUMBER()",
      "NTILE(3)"
    ],
    "answer": 1,
    "explanation": "정답은 ②(DENSE_RANK)이다. DENSE_RANK는 동일 값에 같은 순위를 부여하면서 다음 순위를 건너뛰지 않으므로(1,1,2,3…), 순위 ≤ 3 조건이 '서로 다른 상위 3개 급여 수준'과 그 수준에 속한 모든 동순위자를 정확히 반환한다. ① RANK는 동순위 뒤 순위를 건너뛰어(1,1,3…) 3개 수준을 다 못 뽑을 수 있다. ③ ROW_NUMBER는 동순위여도 임의로 1,2,3을 매겨 같은 급여인데 일부만 나오는 문제가 생긴다. ④ NTILE(3)은 전체 행을 3개 그룹으로 등분하는 함수로 '상위 3개 급여 수준'과 무관하다. 보충: '상위 N명(정확히 N행)'이면 ROW_NUMBER, '상위 N위(동순위 포함, 결번 허용)'면 RANK, '상위 N수준(동순위 포함, 결번 없음)'이면 DENSE_RANK를 선택한다."
  },
  {
    "id": 21869,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "`부서` 테이블에 존재하지 않는 부서번호를 가지거나 부서번호가 NULL인, 즉 '어느 부서에도 속하지 않는' 사원을 모두 조회하려 한다. 가장 적절한 SQL은?",
    "choices": [
      "SELECT * FROM 사원 WHERE 부서번호 = NULL",
      "SELECT s.* FROM 사원 s INNER JOIN 부서 d ON s.부서번호 = d.부서번호 WHERE d.부서번호 IS NULL",
      "SELECT * FROM 사원 WHERE 부서번호 IN (SELECT 부서번호 FROM 부서)",
      "SELECT s.* FROM 사원 s LEFT OUTER JOIN 부서 d ON s.부서번호 = d.부서번호 WHERE d.부서번호 IS NULL"
    ],
    "answer": 3,
    "explanation": "정답은 ④이다. LEFT OUTER JOIN으로 모든 사원을 보존한 뒤, 조인에 실패해 부서 쪽 컬럼이 NULL로 채워진(=매칭되는 부서가 없는) 행만 `d.부서번호 IS NULL`로 걸러낸다. 이 방식은 '부서번호가 부서 테이블에 없는 고아 값'과 '부서번호 자체가 NULL인 사원'을 모두 포착한다. ① `= NULL`은 항상 UNKNOWN이라 결과가 비어 잘못된 표현이다(반드시 IS NULL 사용). ② INNER JOIN은 매칭된 행만 남기므로 d.부서번호가 NULL일 수 없어 항상 공집합이다. ③은 오히려 '부서에 속하는' 사원을 반환하며(반대 결과), 게다가 부서번호가 NULL인 사원은 IN 비교에서 제외된다. 보충: 안티조인은 OUTER JOIN + IS NULL 또는 NOT EXISTS로 구현하며, NOT IN은 서브쿼리 결과에 NULL이 섞이면 전체가 UNKNOWN이 되어 위험하다."
  },
  {
    "id": 21870,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "ROLLUP",
    "question": "`GROUP BY ROLLUP(부서, 직급)`을 수행할 때 생성되는 집계(그룹핑) 조합을 (부서, 직급) 형태로 나타냈다. 이 중 ROLLUP의 결과에 포함되지 않는 조합은? (여기서 a=특정 부서, b=특정 직급, NULL=소계 표시)",
    "choices": [
      "(a, b)",
      "(a, NULL)",
      "(NULL, b)",
      "(NULL, NULL)"
    ],
    "answer": 2,
    "explanation": "정답은 ③이다. ROLLUP(부서, 직급)은 지정한 컬럼의 '계층적 부분합'만 만든다. 즉 (부서, 직급) 상세 → (부서) 소계 → 전체합계 순으로 오른쪽 컬럼부터 차례로 제거한 조합만 생성하므로 그 결과는 (a,b), (a,NULL), (NULL,NULL) 세 종류다. ③ (NULL, b)처럼 '앞 컬럼(부서)만 없애고 뒤 컬럼(직급)만 남긴' 조합은 ROLLUP에서는 만들어지지 않는다. 이 (NULL, b) 조합까지 모두 얻으려면 대칭적으로 모든 부분집합을 생성하는 CUBE(부서, 직급)를 사용해야 한다. 보충: ROLLUP은 n+1개, CUBE는 2ⁿ개의 그룹핑 집합을 만든다. 특정 조합만 필요하면 GROUPING SETS로 명시한다."
  },
  {
    "id": 21871,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "관리 구문",
    "question": "특정 컬럼에 입력되는 값이 지정한 조건식(범위·목록 등)을 만족하도록 강제하여, 조건을 위반하는 값의 삽입·수정을 거부하는 제약조건은?",
    "choices": [
      "NOT NULL",
      "CHECK",
      "PRIMARY KEY",
      "FOREIGN KEY"
    ],
    "answer": 1,
    "explanation": "정답은 ②(CHECK)이다. CHECK 제약은 예를 들어 `CHECK (수량 > 0)`, `CHECK (성별 IN ('M','F'))`처럼 컬럼 값이 지정 논리식을 만족할 때만 DML을 허용하고, 위반하는 값은 거부한다. ① NOT NULL은 'NULL을 허용하지 않음'만 강제할 뿐 값의 범위/목록은 검사하지 않는다. ③ PRIMARY KEY는 유일성 + NOT NULL로 행을 식별하는 제약이다. ④ FOREIGN KEY는 참조 무결성(다른 테이블의 키 값 존재)을 보장하는 제약으로 조건식 검사와는 다르다. 보충: 값의 도메인(허용 범위/집합)을 제한하는 것이 CHECK의 역할이며, DEFAULT는 미입력 시 기본값 지정으로 검사가 아니다."
  },
  {
    "id": 21872,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUP BY",
    "question": "다음 SQL의 결과가 의미하는 대상으로 옳은 것은?\n\n```sql\nSELECT 고객번호\nFROM 주문\nGROUP BY 고객번호\nHAVING MAX(수량) > 10;\n```",
    "choices": [
      "주문 수량의 총합이 10을 초과한 고객",
      "주문 횟수가 10회를 초과한 고객",
      "모든 주문의 수량이 10을 초과한 고객",
      "주문 수량이 10을 초과한 주문을 한 번이라도 한 고객"
    ],
    "answer": 3,
    "explanation": "정답은 ④이다. 고객번호로 그룹화한 뒤 `HAVING MAX(수량) > 10`은 '그 고객의 주문 중 최대 수량이 10을 초과'하는 그룹만 남긴다. 어떤 그룹의 최댓값이 10보다 크다는 것은 그 고객이 수량 10을 넘는 주문을 적어도 한 건 했다는 뜻이므로 ④가 옳다. ① 총합 조건이라면 `SUM(수량) > 10`이어야 한다. ② 주문 횟수라면 `COUNT(*) > 10`이어야 한다. ③ '모든 주문이 10 초과'는 최솟값 조건 `MIN(수량) > 10`이어야 하며 MAX와 다르다. 보충: HAVING은 GROUP BY로 만들어진 그룹에 대한 필터로, 집계함수(MAX/MIN/SUM/COUNT/AVG) 결과를 조건으로 사용한다. 개별 행 필터인 WHERE와 구분해야 한다."
  },
  {
    "id": 21873,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "데이터 모델링의 특징에 해당하지 않는 것은?",
    "choices": [
      "추상화(Abstraction)",
      "단순화(Simplification)",
      "명확화(Clarity)",
      "최적화(Optimization)"
    ],
    "answer": 3,
    "explanation": "데이터 모델링의 세 가지 특징은 추상화·단순화·명확화이다. ① 추상화는 현실 세계를 일정한 형식(표기법)으로 간략히 표현하는 것, ② 단순화는 누구나 이해할 수 있도록 약속된 규약과 표기로 간결하게 표현하는 것, ③ 명확화는 애매모호함을 제거하고 정확하게 기술하는 것이다. ④ 최적화는 성능·자원 관점의 튜닝 개념으로 모델링의 본질적 특징이 아니므로 정답이다. 즉 모델링은 '무엇을' 정확히 표현하느냐(추상화·단순화·명확화)에 관한 것이지 성능 최적화 자체를 특징으로 삼지 않는다."
  },
  {
    "id": 21874,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "어느 은행이 예금 상품을 관리하기 위해 예금분류 엔터티를 두고, 각 예금의 원금·예치기간·이자율·계산이자를 관리하며 예금 종류마다 코드를 부여한다. 이때 속성 분류에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "예금분류 코드는 별도의 코드 엔터티로 분리해 관리하고, 예금 엔터티에는 코드 값만 저장한다.",
      "원금과 예치기간은 업무로부터 직접 입력받는 기본속성이다.",
      "이자율과 예치기간은 다른 속성으로부터 계산되어 나오는 파생속성이다.",
      "계산이자는 원금·이자율·예치기간으로부터 산출되는 파생속성이다."
    ],
    "answer": 2,
    "explanation": "속성은 성질에 따라 기본속성(업무로부터 직접 발생·입력), 설계속성(설계 과정에서 새로 만든 코드성 속성), 파생속성(다른 속성을 계산·가공하여 만든 속성)으로 나뉜다. ④ 계산이자는 원금×이자율×기간으로 산출되므로 파생속성이 맞다. ② 원금·예치기간은 계약 시 직접 입력되는 기본속성이 맞다. ① 코드성 값을 별도 코드 엔터티로 분리하고 참조 값만 저장하는 것은 설계속성/코드 관리의 전형이다. ③ 이자율은 상품 조건으로 주어지는 기본속성이고 예치기간도 기본속성이므로, 둘을 파생속성이라 한 ③이 틀렸다. 파생속성은 '계산 결과'인 계산이자에 해당한다."
  },
  {
    "id": 21875,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "각 속성이 가질 수 있는 값의 범위, 즉 데이터 타입·크기·허용 값의 집합을 정의한 것을 무엇이라 하는가?",
    "choices": [
      "제약조건",
      "도메인",
      "식별자",
      "관계"
    ],
    "answer": 1,
    "explanation": "② 도메인(Domain)은 각 속성이 가질 수 있는 값의 범위를 의미하며, 데이터 타입·길이·허용 값 목록 등으로 정의된다. 예컨대 '성별' 속성의 도메인은 {남, 여}, '점수'의 도메인은 0~100의 정수 등이다. ① 제약조건은 데이터 무결성을 지키기 위한 규칙(NOT NULL, UNIQUE 등)으로 도메인보다 넓은 개념이다. ③ 식별자는 엔터티의 인스턴스를 유일하게 구분하는 속성(집합)이다. ④ 관계는 엔터티 간의 연관성을 의미한다. 따라서 값의 범위 정의는 도메인이다."
  },
  {
    "id": 21876,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "ERD",
    "question": "ERD에서 관계(Relationship)를 표현할 때 사용하는 표기 요소가 아닌 것은?",
    "choices": [
      "관계명(Relationship Membership)",
      "관계차수(Cardinality)",
      "관계선택사양(Optionality)",
      "관계빈도(Relationship Frequency)"
    ],
    "answer": 3,
    "explanation": "관계를 표기할 때 다루는 요소는 ① 관계명(두 엔터티가 어떤 관계인지 명명), ② 관계차수(1:1, 1:M, M:N 등 카디널리티), ③ 관계선택사양(필수/선택, Optional·Mandatory)이다. ④ 관계빈도는 표준 관계 표기 요소가 아니므로 정답이다. 관계 표기 3요소는 '관계명·차수·선택사양'으로 암기하면 된다. 빈도는 트랜잭션 발생 횟수 등 성능 분석 관점의 용어일 뿐 관계의 구조적 표기 요소가 아니다."
  },
  {
    "id": 21877,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "엔터티",
    "question": "다음 중 엔터티(Entity)의 특징으로 옳지 않은 것은?",
    "choices": [
      "엔터티는 반드시 하나의 인스턴스만 가진다.",
      "엔터티는 두 개 이상의 속성을 가진다.",
      "각 인스턴스를 유일하게 구분하는 식별자를 가진다.",
      "업무에서 사용되며 다른 엔터티와 관계를 가진다."
    ],
    "answer": 0,
    "explanation": "정답(옳지 않은 것)은 ①이다. 엔터티는 두 개 이상의 인스턴스의 집합이어야 하므로 \"하나의 인스턴스만 가진다\"는 틀린 설명이다.\n② 엔터티는 두 개 이상의 속성을 가진다(옳음). ③ 각 인스턴스를 유일하게 식별하는 식별자를 가진다(옳음). ④ 업무에서 사용되고 다른 엔터티와 관계를 맺는다(옳음).\n보충: 엔터티의 특징 — 유일한 식별자, 2개 이상 인스턴스, 2개 이상 속성, 다른 엔터티와의 관계, 업무에서의 사용."
  },
  {
    "id": 21878,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "A-B-C-D 네 엔터티가 각각 1:M 식별자 관계로 연쇄 연결된 모델이 있다. 식별관계와 비식별관계에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "식별관계에서는 부모 엔터티의 기본키가 자식 엔터티의 기본키의 일부(구성 속성)로 상속된다.",
      "비식별관계로 변경하면 상위 엔터티와의 조인 없이도 데이터에 접근할 수 있어 조회 성능이 항상 향상된다.",
      "비식별관계에서는 부모 엔터티의 기본키가 자식 엔터티의 일반 속성(외래키)으로 상속된다.",
      "식별관계가 연쇄되면 하위 엔터티일수록 기본키를 구성하는 속성의 개수가 늘어난다."
    ],
    "answer": 1,
    "explanation": "식별관계는 부모 PK가 자식 PK의 일부로 상속되어 PK가 대물림되며(①·④ 옳음), 이 때문에 하위 엔터티에서 상위 키 값을 조인 없이 바로 참조할 수 있어 조회에 유리한 경우가 많다. 반대로 비식별관계는 부모 PK가 자식의 '일반 속성(FK)'으로만 내려오므로(③ 옳음), 상위 데이터를 얻으려면 오히려 조인이 더 필요해질 수 있다. 따라서 '비식별로 바꾸면 조인 없이 접근되어 조회 성능이 항상 향상된다'는 ②는 인과가 뒤바뀐 서술로 옳지 않다(정답). 비식별관계는 PK 전파를 끊어 모델을 단순화하지만, 상위 정보 조회 시 조인이 늘 수 있다는 트레이드오프가 있다."
  },
  {
    "id": 21879,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "정규화",
    "question": "다음 [주문] 테이블에서 사원번호 → 사원명, 사원부서 함수 종속이 존재한다.\n\n| 주문번호(PK) | 주문일자 | 사원번호 | 사원명 | 사원부서 |\n|---|---|---|---|---|\n| 1001 | 2026-01-02 | E01 | 홍길동 | 영업1팀 |\n| 1002 | 2026-01-03 | E01 | 홍길동 | 영업1팀 |\n\n기본키(주문번호) → 사원번호 → 사원명·사원부서 형태의 이행적 함수 종속을 제거하기 위해 수행해야 하는 정규화 단계는?",
    "choices": [
      "제1정규화",
      "제2정규화",
      "제3정규화",
      "반정규화"
    ],
    "answer": 2,
    "explanation": "이행적 함수 종속(A→B, B→C이므로 A→C)을 제거하는 단계는 제3정규화이다(정답 ③). 여기서는 주문번호→사원번호, 사원번호→사원명·사원부서로 이어지는 이행 종속이 있으므로, [사원] 엔터티(사원번호 PK, 사원명, 사원부서)를 분리하고 [주문]에는 사원번호만 FK로 남긴다. ① 제1정규화는 반복·다중값 속성을 제거해 원자값으로 만드는 단계, ② 제2정규화는 복합키에 대한 부분 함수 종속을 제거하는 단계이다. ④ 반정규화는 성능을 위해 정규화를 일부 되돌리는 것으로 종속 제거와 무관하고, 개정 출제범위에서 상세 기법은 SQLP로 이관되었다. 따라서 이행 종속 제거는 제3정규화이다."
  },
  {
    "id": 21880,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "데이터 모델링의 이해",
    "question": "트랜잭션(Transaction)이 가져야 할 특성(ACID)에 해당하지 않는 것은?",
    "choices": [
      "원자성(Atomicity)",
      "독립성(Independency)",
      "일관성(Consistency)",
      "영속성(Durability)"
    ],
    "answer": 1,
    "explanation": "트랜잭션의 4대 특성 ACID는 원자성(Atomicity, 모두 반영되거나 모두 취소), 일관성(Consistency, 실행 전후 데이터 무결성 유지), 고립성(Isolation, 수행 중 다른 트랜잭션이 끼어들 수 없음), 영속성(Durability, 완료된 결과는 영구 보존)이다. ②의 '독립성(Independency)'은 ACID 용어가 아니므로 정답이다. 여기서 헷갈리기 쉬운 것이 '고립성(Isolation)'인데, 이를 독립성으로 잘못 표현한 함정이다. 나머지 ①·③·④는 모두 ACID의 정식 항목이다."
  },
  {
    "id": 21881,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "식별자",
    "question": "식별자를 그 대표성·생성 방식에 따라 본질식별자와 인조식별자로 구분할 때, 설명으로 옳지 않은 것은?",
    "choices": [
      "인조식별자는 업무로부터 자연스럽게 만들어진 식별자로서 그 자체가 업무 규칙과 의미를 표현한다.",
      "본질식별자는 업무에 의해 자연스럽게 만들어지는 식별자이다.",
      "주식별자가 지나치게 많은 속성으로 구성될 때 이를 대체하기 위해 인조식별자를 사용할 수 있다.",
      "인조식별자는 일련번호처럼 인위적으로 부여한 식별자이다."
    ],
    "answer": 0,
    "explanation": "본질식별자는 업무에 의해 자연스럽게 만들어지는 식별자(②·맞음)이고, 인조식별자는 본질식별자가 복잡하거나 속성이 많을 때(③·맞음) 이를 대체하려고 일련번호 등으로 인위적으로 부여한 식별자(④·맞음)이다. 인조식별자는 업무적 의미가 없고 단지 유일성 확보용이므로, '업무로부터 자연스럽게 만들어져 업무 규칙과 의미를 표현한다'고 서술한 ①은 인조식별자가 아니라 본질식별자의 특징을 잘못 붙인 것으로 옳지 않다(정답). 인조식별자 도입 시 불필요한 인덱스가 늘 수 있고 본질식별자의 업무 규칙이 숨겨지는 단점이 있다."
  },
  {
    "id": 21882,
    "sourceSubjectId": 3,
    "category": "데이터 모델링의 이해",
    "tag": "ERD",
    "question": "다음 ERD의 [학생]—[수강] 관계를 읽은 것이다. 관계선은 학생 쪽 끝이 '실선(필수)'이고 수강 쪽 끝이 '까마귀발+실선(1개 이상 필수)'으로 표기되어 있다.\n\n```\n[학생] ||──────< [수강]\n```\n\n이 관계에 대한 해석으로 가장 옳은 것은?",
    "choices": [
      "한 명의 학생은 수강 신청을 하지 않을 수도 있다.",
      "하나의 수강 인스턴스는 여러 학생과 연결될 수 있다.",
      "한 명의 학생은 최대 한 개의 수강만 가질 수 있다.",
      "한 명의 학생은 반드시 최소 한 개 이상의 수강을 해야 한다."
    ],
    "answer": 3,
    "explanation": "까마귀발(Crow's Foot) 표기에서 학생 쪽이 필수(실선)이고 수강 쪽이 '까마귀발+필수' 표기이면, 학생 : 수강 = 1 : M이며 학생은 최소 1개 이상의 수강을 반드시 가져야 한다는 필수 참여를 의미한다. 따라서 ④가 옳다. ① '하지 않을 수도 있다'는 선택 참여(원, Optional) 표기일 때의 해석이므로 필수 표기와 배치되어 틀렸다. ② 하나의 수강이 여러 학생과 연결된다는 것은 M:N 또는 방향이 뒤바뀐 해석으로, 이 1:M 모델에서는 하나의 수강이 한 학생에 속한다. ③ '최대 한 개'는 1:1 해석으로 까마귀발(다수) 표기와 모순된다. 관계선은 '차수(1:M)'와 '선택사양(필수)'을 함께 읽어야 한다."
  },
  {
    "id": 21883,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "TCL",
    "question": "다음 DCL(데이터 제어어)에 대한 설명 중 옳은 것으로만 짝지어진 것은?\n\n가. DCL은 트랜잭션을 제어하는 명령어로, COMMIT과 ROLLBACK이 이에 속한다.\n나. GRANT 문으로 다른 사용자에게 권한을 부여할 수 있으며, WITH GRANT OPTION을 지정하면 부여받은 권한을 다시 다른 사용자에게 부여할 수 있다.\n다. REVOKE는 이미 부여한 권한을 회수하는 명령어로, 실행되면 변경된 데이터를 물리 디스크에 영구 저장한다.\n라. ROLE은 여러 개의 권한을 하나로 묶어 관리하는 권한의 집합으로, 사용자에게 ROLE을 부여하면 묶인 권한을 한 번에 부여할 수 있다.",
    "choices": [
      "가, 나",
      "나, 다",
      "나, 라",
      "가, 나, 라"
    ],
    "answer": 2,
    "explanation": "정답은 ③ 나, 라이다.\n\n나: GRANT는 권한을 부여하는 DCL이며, WITH GRANT OPTION을 붙이면 권한을 받은 사용자가 그 권한을 제3자에게 재부여(위임)할 수 있다. 옳은 설명이다.\n라: ROLE은 여러 시스템/객체 권한을 하나로 묶은 권한의 집합(권한 그룹)으로, 사용자·ROLE 관리를 단순화한다. 옳은 설명이다.\n\n오답 풀이\n가: COMMIT·ROLLBACK은 트랜잭션 제어어(TCL)이지 DCL이 아니다. DCL은 GRANT·REVOKE이다.\n다: REVOKE는 권한 회수 명령일 뿐, 데이터를 물리 디스크에 저장하는 것과는 무관하다. 데이터의 영구 저장(반영)은 COMMIT(TCL)의 역할이다.\n\n보충: SQL 명령어는 DDL(CREATE/ALTER/DROP/TRUNCATE), DML(SELECT/INSERT/UPDATE/DELETE), DCL(GRANT/REVOKE), TCL(COMMIT/ROLLBACK/SAVEPOINT)로 분류된다."
  },
  {
    "id": 21884,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "사원들을 급여 오름차순으로 정렬했을 때, 각 사원의 바로 직전(앞) 행의 급여를 함께 출력하려고 한다. (㉠)에 들어갈 윈도우 함수로 가장 적절한 것은?\n\n```sql\nSELECT 사원명, 급여,\n       (㉠) AS 직전급여\nFROM 사원;\n```",
    "choices": [
      "LAG(급여) OVER (ORDER BY 급여)",
      "LAG(급여) OVER (ORDER BY 급여 DESC)",
      "LEAD(급여) OVER (ORDER BY 급여)",
      "LEAD(급여) OVER (ORDER BY 급여 DESC)"
    ],
    "answer": 0,
    "explanation": "정답은 ①이다.\n\nLAG(컬럼)는 현재 행을 기준으로 정렬 순서상 '이전(앞) 행'의 값을 가져온다. 급여를 오름차순(ORDER BY 급여)으로 정렬하면 직전 행은 급여가 한 단계 작은 행이 되므로, LAG(급여) OVER (ORDER BY 급여)가 바로 직전급여를 반환한다.\n\n오답 풀이\n② ORDER BY를 DESC로 하면 정렬 방향이 뒤집혀, LAG가 가져오는 '이전 행'이 실제로는 급여가 더 큰 행이 되어 의도한 직전(작은쪽) 값이 아니다.\n③ LEAD는 '다음(뒤) 행'의 값을 가져오므로 직전이 아니라 직후 급여가 출력된다.\n④ LEAD + DESC는 방향까지 반대라 오름차순 기준의 직전 값과 다르다.\n\n보충: LAG(col, offset, default), LEAD(col, offset, default) 형태로 몇 행 앞/뒤를 볼지와 NULL 대체값을 지정할 수 있다."
  },
  {
    "id": 21885,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "부서 테이블의 부서명에는 'A연구소', '화학연구소', '연구소' 등의 값이 들어 있다. '연구소'로 끝나는 모든 부서명(글자 수와 무관하게, 'A연구소'·'화학연구소'·'연구소' 모두 포함)을 조회하는 WHERE 조건으로 옳은 것은?",
    "choices": [
      "WHERE 부서명 = '_연구소'",
      "WHERE 부서명 = '%연구소'",
      "WHERE 부서명 LIKE '_연구소'",
      "WHERE 부서명 LIKE '%연구소'"
    ],
    "answer": 3,
    "explanation": "정답은 ④이다.\n\nLIKE '%연구소'에서 %는 0글자 이상의 임의 문자열을 의미하므로, 'A연구소'(앞 1글자), '화학연구소'(앞 2글자), '연구소'(앞 0글자)까지 모두 매칭된다. '연구소'로 끝나기만 하면 앞 글자 수와 무관하게 조회된다.\n\n오답 풀이\n① = '_연구소'는 등호 비교이므로 와일드카드가 동작하지 않고, 문자 그대로 '_연구소'라는 값과만 일치한다.\n② = '%연구소' 역시 등호 비교라 '%'가 리터럴로 취급되어 문자 그대로 '%연구소'와만 일치한다. 와일드카드는 LIKE에서만 특수문자로 동작한다.\n③ LIKE '_연구소'의 _는 '정확히 1글자'를 의미하므로 'A연구소'만 매칭되고, '화학연구소'(앞 2글자)나 '연구소'(앞 0글자)는 제외된다.\n\n보충: % = 0글자 이상, _ = 정확히 1글자. 부분 일치 검색은 반드시 = 이 아닌 LIKE와 함께 써야 한다."
  },
  {
    "id": 21886,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 SQL의 실행 결과로 옳은 것은?\n\n```sql\nSELECT NVL2(NULL, 100, 200) AS 결과\nFROM DUAL;\n```",
    "choices": [
      "100",
      "200",
      "NULL",
      "실행 오류"
    ],
    "answer": 1,
    "explanation": "정답은 ②이다.\n\nNVL2(표현식, 참값, 거짓값)은 첫 번째 인자가 NULL이 '아니면' 두 번째 인자를, NULL '이면' 세 번째 인자를 반환한다. 여기서 첫 인자가 NULL이므로 세 번째 인자인 200이 반환된다.\n\n오답 풀이\n① 100은 첫 인자가 NULL이 아닐 때 반환되는 값이므로, 첫 인자가 NULL인 이 경우에는 나오지 않는다.\n③ NVL2는 인자로 지정한 값을 반환하는 함수라서 결과가 NULL이 되지 않는다(반환 값 자체가 NULL로 지정된 경우가 아니라면).\n④ NVL2는 정상적인 표준 함수 호출이므로 오류가 발생하지 않는다.\n\n보충: NVL(a, b)는 a가 NULL이면 b, NVL2(a, b, c)는 a가 NULL이 아니면 b·NULL이면 c를 돌려준다. 날짜·문자·숫자 등 다양한 타입에 쓸 수 있으며, EXTRACT 등 날짜 추출 함수와 결합해 'NULL이면 기본값, 아니면 연도 추출' 같은 처리에도 활용된다."
  },
  {
    "id": 21887,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "JOIN",
    "question": "사원 테이블은 아래와 같이 각 사원의 상사(관리자)를 상사번호 컬럼으로 참조한다.\n\n| 컬럼 | 설명 |\n|------|------|\n| 사원번호 | 사원의 고유 번호(PK) |\n| 사원명 | 사원 이름 |\n| 상사번호 | 그 사원의 상사(사원번호를 참조) |\n\n각 사원의 이름과 그 사원의 '상사 이름'을 함께 출력하려고 할 때, 조인 조건으로 옳은 것은?\n\n```sql\nSELECT e.사원명 AS 사원, m.사원명 AS 상사\nFROM 사원 e JOIN 사원 m\n  ON (㉠);\n```",
    "choices": [
      "e.사원번호 = m.사원번호",
      "e.상사번호 = m.사원번호",
      "e.사원번호 = m.상사번호",
      "e.상사번호 = m.상사번호"
    ],
    "answer": 1,
    "explanation": "정답은 ②이다.\n\n한 테이블 안에서 자기 자신을 다시 참조하는 셀프 조인이다. e를 '사원', m을 '상사'로 두면, 사원(e)의 상사번호가 상사(m)의 사원번호와 같아야 그 상사 행이 매칭된다. 따라서 e.상사번호 = m.사원번호가 옳다.\n\n오답 풀이\n① e.사원번호 = m.사원번호는 같은 행끼리 매칭되어 자기 자신을 상사로 붙일 뿐 상사 정보가 나오지 않는다.\n③ e.사원번호 = m.상사번호는 반대로 '내가 상사인 부하'를 찾는 조건이 되어 의도(내 상사 찾기)와 어긋난다.\n④ e.상사번호 = m.상사번호는 '같은 상사를 둔 동료'를 묶는 조건으로, 상사 이름을 붙이는 것과 무관하다.\n\n보충: 셀프 조인은 반드시 서로 다른 별칭(e, m)으로 같은 테이블을 두 번 참조한다. 상사가 없는 최상위 사원까지 보이려면 LEFT OUTER JOIN을 쓴다."
  },
  {
    "id": 21888,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 Oracle 전용 표기(+)로 작성된 SQL과 동일한 결과를 내는 ANSI 표준 조인으로 옳은 것은?\n\n```sql\nSELECT *\nFROM 사원 e, 부서 d\nWHERE e.부서번호 = d.부서번호(+);\n```",
    "choices": [
      "사원 e LEFT OUTER JOIN 부서 d ON e.부서번호 = d.부서번호",
      "사원 e RIGHT OUTER JOIN 부서 d ON e.부서번호 = d.부서번호",
      "사원 e INNER JOIN 부서 d ON e.부서번호 = d.부서번호",
      "사원 e FULL OUTER JOIN 부서 d ON e.부서번호 = d.부서번호"
    ],
    "answer": 0,
    "explanation": "정답은 ①이다.\n\nOracle의 (+) 표기는 '부족한 쪽(NULL을 채워 보존되지 않는 쪽)'에 붙인다. 여기서 (+)가 d.부서번호(부서 쪽)에 붙어 있으므로, 부서가 없어도 사원은 모두 보존된다. 즉 사원이 기준(왼쪽)으로 남는 LEFT OUTER JOIN이다.\n\n오답 풀이\n② RIGHT OUTER JOIN은 부서를 모두 보존하므로 (+)가 e 쪽에 붙은 경우와 같아 반대다.\n③ INNER JOIN은 양쪽 모두 매칭되는 행만 남겨, 부서가 없는 사원이 사라지므로 (+) 의미를 잃는다.\n④ FULL OUTER JOIN은 양쪽 모두 보존해 (+)가 한쪽에만 있는 경우와 결과가 다르다.\n\n보충: Oracle에서 (+)는 옵셔널(보존 안 되는) 테이블 쪽에 붙는다. '(+)가 붙은 반대편 테이블이 기준으로 살아남는다'로 기억하면 ANSI 변환이 쉽다."
  },
  {
    "id": 21889,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "학생(학번, 이름)과 수강(학번, 과목) 테이블이 있다. '강의를 수강하는(수강 기록이 있는) 학생'을 조회하려고 할 때, 그 방법으로 적절하지 않은 것은?",
    "choices": [
      "SELECT * FROM 학생 s WHERE EXISTS (SELECT 1 FROM 수강 c WHERE c.학번 = s.학번)",
      "SELECT * FROM 학생 s WHERE s.학번 IN (SELECT 학번 FROM 수강)",
      "SELECT 학번 FROM 학생 INTERSECT SELECT 학번 FROM 수강",
      "SELECT * FROM 학생 s WHERE NOT EXISTS (SELECT 1 FROM 수강 c WHERE c.학번 = s.학번)"
    ],
    "answer": 3,
    "explanation": "정답은 ④이다(적절하지 않은 것).\n\n④ NOT EXISTS는 수강 테이블에 해당 학번이 '존재하지 않는' 학생, 즉 강의를 하나도 수강하지 않는 학생을 조회한다. 문제 의도(수강하는 학생)와 정반대이므로 적절하지 않다.\n\n오답 풀이(모두 적절한 방법)\n① EXISTS는 수강 테이블에 같은 학번 행이 존재하는 학생만 남기므로 수강생을 정확히 조회한다.\n② IN 서브쿼리는 수강 테이블에 나타난 학번 집합에 포함되는 학생을 반환하므로 EXISTS와 사실상 동일한 결과다.\n③ INTERSECT는 학생의 학번과 수강의 학번의 교집합, 즉 양쪽 모두에 존재하는 학번(=수강한 학생)을 반환한다.\n\n보충: '존재하면' EXISTS/IN/INTERSECT, '존재하지 않으면' NOT EXISTS/NOT IN/MINUS(EXCEPT)로 매핑해 기억하면 유형을 빠르게 구분할 수 있다."
  },
  {
    "id": 21890,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "Oracle에서 사원 테이블 중 '사원번호가 가장 큰 사원 1명'을 조회하려고 한다. 올바른 SQL은?",
    "choices": [
      "SELECT * FROM (SELECT * FROM 사원 ORDER BY 사원번호 DESC) WHERE ROWNUM = 1",
      "SELECT TOP 1 * FROM 사원 ORDER BY 사원번호 DESC",
      "SELECT * FROM 사원 WHERE ROWNUM = 1 ORDER BY 사원번호 DESC",
      "SELECT * FROM 사원 WHERE 사원번호 = MAX(사원번호)"
    ],
    "answer": 0,
    "explanation": "정답은 ①이다.\n\nROWNUM은 정렬(ORDER BY)보다 먼저 매겨지므로, 먼저 인라인 뷰에서 사원번호 DESC로 정렬을 끝낸 뒤 바깥에서 ROWNUM = 1로 첫 행을 골라야 '가장 큰 사원번호 1건'을 정확히 얻는다.\n\n오답 풀이\n② TOP 절은 SQL Server(및 일부 DBMS) 문법으로, Oracle에서는 지원하지 않아 문법 오류가 난다.\n③ ROWNUM은 ORDER BY가 적용되기 전에 부여되므로, 정렬 전 임의의 1행이 먼저 뽑힌 뒤 정렬되어 '최대 사원번호'가 아닌 엉뚱한 행이 나온다.\n④ 집계 함수 MAX는 WHERE 절에서 직접 사용할 수 없다(집계 결과 비교는 서브쿼리나 HAVING로 해야 함). 문법 오류다.\n\n보충: Oracle 12c 이상에서는 ORDER BY 사원번호 DESC FETCH FIRST 1 ROW ONLY로도 같은 결과를 낼 수 있다. 핵심은 'ROWNUM은 정렬 이후가 아니라 이전에 매겨진다'는 실행 순서다."
  },
  {
    "id": 21891,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "TCL",
    "question": "비어 있는 주문 테이블에 대해 다음 명령을 순서대로 실행했다. 마지막 SELECT의 결과로 옳은 것은? (SAVEPOINT는 선언하지 않았다.)\n\n```sql\nINSERT INTO 주문 ...;      -- 30건 삽입\nTRUNCATE TABLE 임시로그;    -- (임시로그 테이블 비우기, DDL)\nINSERT INTO 주문 ...;      -- 10건 추가 삽입\nROLLBACK;\nSELECT COUNT(*) FROM 주문;\n```",
    "choices": [
      "0",
      "15",
      "30",
      "NULL"
    ],
    "answer": 2,
    "explanation": "정답은 ③ 30이다.\n\nTRUNCATE는 DDL이므로 실행 시점에 '암시적 커밋(implicit commit)'이 일어난다. 따라서 그 앞에서 주문에 넣은 30건은 TRUNCATE가 실행되는 순간 자동으로 커밋되어 확정된다. 이후 추가한 10건은 커밋되지 않은 상태에서 ROLLBACK되어 취소되므로, 최종적으로 주문에는 커밋된 30건만 남는다.\n\n오답 풀이\n① 0은 앞선 30건까지 롤백된 경우인데, DDL의 암시적 커밋 때문에 30건은 이미 확정되어 롤백 대상이 아니다.\n② 15는 근거가 되는 연산이 없다(함정용 숫자).\n④ COUNT(*)는 행이 0건이어도 0을 반환하지 NULL을 반환하지 않는다.\n\n보충: DDL(CREATE/ALTER/DROP/TRUNCATE)은 실행 전에 진행 중이던 트랜잭션을 자동 커밋한다. 그래서 DDL 앞의 DML은 ROLLBACK으로 되돌릴 수 없다는 점이 핵심이다."
  },
  {
    "id": 21892,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "고객 테이블에는 고객번호(NOT NULL)와 집주소 컬럼이 있고, 일부 고객은 집주소가 입력되지 않아 NULL이다. '집주소가 입력되지 않은(NULL) 고객의 수'를 구하는 식으로 옳은 것은?",
    "choices": [
      "COUNT(*)",
      "COUNT(집주소)",
      "COUNT(고객번호) - COUNT(집주소)",
      "COUNT(*) - COUNT(고객번호)"
    ],
    "answer": 2,
    "explanation": "정답은 ③이다.\n\nCOUNT(컬럼)은 해당 컬럼이 NULL인 행을 세지 않는다. 고객번호는 NOT NULL이라 COUNT(고객번호)는 전체 고객 수와 같고, COUNT(집주소)는 집주소가 있는(NULL이 아닌) 고객 수다. 따라서 두 값을 빼면 집주소가 NULL인 고객 수가 나온다.\n\n오답 풀이\n① COUNT(*)는 NULL 여부와 무관하게 모든 행(전체 고객)을 세므로 집주소 없는 고객만 세지 못한다.\n② COUNT(집주소)는 오히려 집주소가 '있는' 고객 수라 정반대다.\n④ 고객번호가 NOT NULL이면 COUNT(*)와 COUNT(고객번호)가 같아 결과가 항상 0이 되어 의미가 없다.\n\n보충: COUNT(*)는 NULL 포함 전체 행, COUNT(컬럼)은 그 컬럼의 NOT NULL 행만 센다. 이 차이를 이용해 '전체 - 값이 있는 수 = NULL의 수'를 계산할 수 있다."
  },
  {
    "id": 21893,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 SQL 문(SELECT)의 논리적 실행 순서를 바르게 나열한 것은?",
    "choices": [
      "SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY",
      "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY",
      "FROM → GROUP BY → WHERE → HAVING → SELECT → ORDER BY",
      "FROM → WHERE → HAVING → GROUP BY → SELECT → ORDER BY"
    ],
    "answer": 1,
    "explanation": "정답은 ②이다. SQL의 논리적 실행 순서는 FROM(테이블 확정) → WHERE(행 필터) → GROUP BY(그룹화) → HAVING(그룹 필터) → SELECT(컬럼 선택·별칭) → ORDER BY(정렬)이다.\n① SELECT가 맨 앞이라 틀림(SELECT는 거의 마지막). ③ WHERE가 GROUP BY 뒤라 틀림(행 필터가 그룹화보다 먼저). ④ HAVING이 GROUP BY보다 앞이라 틀림(HAVING은 그룹화 이후).\n보충: WHERE는 그룹화 전 개별 행을, HAVING은 그룹화 후 집계 결과를 필터링한다. SELECT의 컬럼 별칭을 WHERE·GROUP BY에서 못 쓰는 이유도 이 순서 때문이다."
  },
  {
    "id": 21894,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "전화번호 컬럼(전화번호)에서 '010'으로 시작하는 행만 조회하려고 한다. WHERE 조건으로 옳은 것은?",
    "choices": [
      "REGEXP_LIKE(전화번호, '[^010]')",
      "REGEXP_LIKE(전화번호, '010$')",
      "REGEXP_LIKE(전화번호, '^010')",
      "REGEXP_LIKE(전화번호, '02')"
    ],
    "answer": 2,
    "explanation": "정답은 ③이다. 정규표현식에서 캐럿(^)은 문자열의 시작 위치를 나타내는 앵커이므로 '^010'은 '010'으로 시작하는 문자열에 매칭된다. ① 대괄호 안의 ^([^...])는 '부정(제외)' 문자 클래스로, '[^010]'은 0 또는 1이 아닌 문자가 하나라도 있으면 매칭되어 의도와 정반대다. ② '$'는 문자열의 끝 앵커이므로 '010$'은 '010'으로 끝나는 문자열을 찾는다. ④ '02'는 문자열 어디에든 '02'가 포함되면 매칭되며 시작 위치를 강제하지 않는다. 보충: 대괄호 밖의 ^는 시작 앵커, 대괄호 안 첫 위치의 ^는 부정으로 의미가 완전히 다르다."
  },
  {
    "id": 21895,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 SQL을 실행했을 때 (결과1, 결과2)로 옳은 것은?\n\n```sql\nSELECT\n  CASE WHEN REGEXP_LIKE('BCD', 'B.D')  THEN 'BCD' ELSE 'NULL' END AS 결과1,\n  CASE WHEN REGEXP_LIKE('BCD', 'B\\.D') THEN 'BCD' ELSE 'NULL' END AS 결과2\nFROM DUAL;\n```",
    "choices": [
      "BCD, BCD",
      "NULL, BCD",
      "BCD, NULL",
      "NULL, NULL"
    ],
    "answer": 2,
    "explanation": "정답은 ③이다. 정규표현식에서 점(.)은 임의의 한 문자를 의미하고, 역슬래시로 이스케이프한 '\\.'는 리터럴 점 문자 그 자체를 의미한다. 결과1: 패턴 'B.D'는 B + (임의 한 문자) + D이므로 'BCD'(B-C-D)에 매칭되어 'BCD'를 반환한다. 결과2: 패턴 'B\\.D'는 B + 실제 마침표 + D를 요구하는데 'BCD'에는 마침표가 없으므로 매칭되지 않아 'NULL'을 반환한다. 따라서 (BCD, NULL)이다. ① 결과2가 매칭된다고 본 오답, ② 두 결과를 뒤바꾼 오답, ④ 둘 다 불일치로 본 오답이다. 보충: 특수문자를 문자 자체로 찾으려면 반드시 이스케이프해야 한다."
  },
  {
    "id": 21896,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "집합 연산자(UNION, UNION ALL, INTERSECT, MINUS)에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "두 SELECT 결과 컬럼의 데이터 타입이 상호 호환되더라도 반드시 완전히 동일한 데이터 타입으로 일치시켜야만 사용할 수 있다.",
      "UNION은 두 집합을 합친 뒤 중복 행을 제거하고 결과를 정렬한다.",
      "UNION ALL은 중복 행을 제거하지 않으며 별도의 정렬 작업을 수행하지 않는다.",
      "집합 연산에 참여하는 각 SELECT 문의 컬럼 개수는 서로 같아야 한다."
    ],
    "answer": 0,
    "explanation": "정답은 ①이다. 집합 연산자는 각 SELECT의 컬럼 개수가 같고 대응 컬럼의 데이터 타입이 '상호 호환(compatible)'되면 사용할 수 있으며, 반드시 완전히 동일한 타입일 필요는 없다(예: 숫자끼리, 문자끼리 호환되면 됨). '무조건 동일 타입이어야 한다'는 서술이 틀렸다. ② UNION은 중복을 제거하며 이를 위해 내부적으로 정렬(Sort Unique)이 수반되므로 옳다. ③ UNION ALL은 중복 제거와 정렬을 하지 않아 UNION보다 빠르므로 옳다. ④ 대응되는 컬럼 개수 일치는 집합 연산의 필수 조건이므로 옳다. 보충: UNION은 정렬 비용이 있고, 중복 제거가 불필요하면 UNION ALL이 성능상 유리하다."
  },
  {
    "id": 21897,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "DDL",
    "question": "CTAS(CREATE TABLE ... AS SELECT)로 새 테이블을 생성할 때에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "원본 테이블의 기본키(PK)·외래키(FK) 제약조건이 새 테이블에 그대로 함께 복사된다.",
      "원본에서 선택된 컬럼의 데이터 타입과 크기는 새 테이블에 전달된다.",
      "원본 컬럼에 설정된 NOT NULL 제약조건은 새 테이블에 전달된다.",
      "SELECT 절에서 컬럼에 별칭(alias)을 부여하면 그 별칭이 새 테이블의 컬럼명이 된다."
    ],
    "answer": 0,
    "explanation": "정답은 ①이다. CTAS는 SELECT 결과의 컬럼 구조와 데이터를 복사하지만 기본키(PK)·외래키(FK)·UNIQUE·CHECK 같은 제약조건은 승계되지 않는다. 즉 PK/FK는 복사되지 않으므로 ①이 틀렸다. ② 컬럼의 데이터 타입·크기는 그대로 전달되므로 옳다. ③ NOT NULL 제약조건은 CTAS로 함께 전달되는 유일한 제약이므로 옳다. ④ SELECT 절의 별칭은 생성되는 테이블의 컬럼명이 되므로(연산식·함수 컬럼은 별칭 필수) 옳다. 보충: 'NOT NULL과 컬럼 정의는 전달, 나머지 제약(PK/FK/UNIQUE/CHECK)은 미전달'이 CTAS의 핵심 규칙이다."
  },
  {
    "id": 21898,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "DDL",
    "question": "다음과 같이 정의된 주문 테이블에 INSERT를 실행할 때, 오류가 발생하는 것은?\n\n```sql\nCREATE TABLE 주문 (\n  주문번호 NUMBER,\n  주문일자 DATE,\n  상품코드 CHAR(3)\n);\n```",
    "choices": [
      "INSERT INTO 주문 VALUES (1, TO_DATE('20240606','YYYYMMDD'), '001');",
      "INSERT INTO 주문 (주문번호, 상품코드) VALUES (2, '002');",
      "INSERT INTO 주문 VALUES (3, SYSDATE, '003');",
      "INSERT INTO 주문 VALUES (4, 20240606, '004');"
    ],
    "answer": 3,
    "explanation": "정답은 ④다. 주문일자 컬럼은 DATE 타입인데 20240606은 숫자 리터럴이며, 오라클은 숫자를 날짜로 묵시적 변환하지 못하므로 오류(ORA-00932 등)가 발생한다. 날짜 값은 TO_DATE 등으로 변환하거나 날짜 리터럴을 사용해야 한다. ① TO_DATE로 문자열을 DATE로 명시 변환했으므로 정상이다. ② 컬럼 리스트를 명시해 주문번호·상품코드만 넣고 주문일자는 NULL로 들어가므로 정상이다(NOT NULL 제약 없음). ③ SYSDATE는 DATE 타입이므로 정상이다. 보충: VALUES에 컬럼 리스트를 생략하면 테이블 정의 순서·타입에 정확히 맞춰야 하며, 타입 불일치 시 묵시적 변환 가능 여부가 성패를 가른다."
  },
  {
    "id": 21899,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "주문일자 순서대로 금액의 '누적 합계'를 구하려고 한다. 빈칸에 들어갈 윈도우 절로 옳은 것은?\n\n```sql\nSELECT 주문일자, 금액,\n       SUM(금액) OVER (ORDER BY 주문일자\n                       ______________________________ ) AS 누적금액\nFROM 주문;\n```",
    "choices": [
      "ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING",
      "RANGE BETWEEN UNBOUNDED FOLLOWING AND CURRENT ROW",
      "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
      "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING"
    ],
    "answer": 2,
    "explanation": "정답은 ③이다. 첫 행부터 현재 행까지의 누적 합계는 프레임을 'UNBOUNDED PRECEDING(맨 처음) ~ CURRENT ROW(현재 행)'로 지정하면 얻는다. ① 'CURRENT ROW ~ UNBOUNDED FOLLOWING'은 현재 행부터 끝까지를 더하는 역방향 누적이라 의도와 다르다. ② 'UNBOUNDED FOLLOWING'을 프레임 시작으로 쓰는 것은 문법 오류다(시작 경계에 FOLLOWING 무한을 둘 수 없음). ④ '1 PRECEDING ~ 1 FOLLOWING'은 앞뒤 한 행씩만 포함하는 이동 구간이라 누적이 아니다. 보충: ORDER BY만 쓰고 프레임을 생략하면 기본값이 'RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW'라 역시 누적이 되지만, 동일 정렬값 동점 처리에서 ROWS와 차이가 날 수 있다."
  },
  {
    "id": 21900,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "주문일시(DATE, 시·분·초 포함) 컬럼에서 '2025년 10월 20일 하루 전체'에 해당하는 행을 조회하려고 한다. 조회 조건으로 옳지 않은 것은?",
    "choices": [
      "주문일시 >= TO_DATE('2025-10-20','YYYY-MM-DD') AND 주문일시 < TO_DATE('2025-10-21','YYYY-MM-DD')",
      "TRUNC(주문일시) = TO_DATE('2025-10-20','YYYY-MM-DD')",
      "주문일시 BETWEEN TO_DATE('2025-10-20','YYYY-MM-DD') AND TO_DATE('2025-10-21','YYYY-MM-DD')",
      "주문일시 >= TO_DATE('2025-10-20','YYYY-MM-DD') AND 주문일시 <= TO_DATE('2025-10-20','YYYY-MM-DD') + 1 - 1/86400"
    ],
    "answer": 2,
    "explanation": "정답은 ③이다. DATE에는 시·분·초가 포함되므로 TO_DATE('2025-10-20')은 실제로 '2025-10-20 00:00:00'을 의미한다. BETWEEN은 양 끝 경계를 포함하므로 ③은 상한이 '2025-10-21 00:00:00'까지 포함되어, 10월 21일 자정(00:00:00) 주문까지 잘못 조회한다. ① 20일 0시 이상이면서 21일 0시 '미만'이라 하루를 정확히 담는 표준 방식이다. ② TRUNC로 시분초를 잘라 날짜만 비교하므로 하루 전체가 정확히 걸린다. ④ 상한을 '20일 0시 + 1일 - 1초 = 20일 23:59:59'로 잡아 21일 자정을 배제하므로 옳다. 보충: 날짜 범위 조회에서 BETWEEN은 경계 포함 특성 때문에 다음날 자정 유입 위험이 있어 '>= 시작 AND < 다음날' 패턴이 안전하다."
  },
  {
    "id": 21901,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "다음과 같은 계층형 질의(START WITH ... CONNECT BY)에 대한 설명으로 옳지 않은 것은?\n\n```sql\nSELECT LEVEL, 사원명, 관리자ID\nFROM 사원\nSTART WITH 관리자ID IS NULL\nCONNECT BY PRIOR 사원ID = 관리자ID;\n```",
    "choices": [
      "START WITH는 계층 전개를 시작할 루트(최상위) 행의 조건을 지정한다.",
      "CONNECT BY PRIOR는 부모 행과 자식 행을 연결하는 전개 방향을 결정한다.",
      "LEVEL은 루트를 1로 하여 아래로 내려갈수록 1씩 증가하는 계층의 깊이를 반환한다.",
      "ORDER SIBLINGS BY 대신 일반 ORDER BY를 사용해도 형제 노드 간 정렬은 물론 계층 구조 자체는 항상 그대로 유지된다."
    ],
    "answer": 3,
    "explanation": "정답은 ④다. 계층형 질의 결과를 일반 ORDER BY로 정렬하면 전체 행이 정렬 기준대로 재배열되어 부모-자식 계층 순서(전개 순서)가 깨질 수 있다. 계층 구조를 유지한 채 형제(SIBLINGS) 노드만 정렬하려면 'ORDER SIBLINGS BY'를 써야 한다. ① START WITH는 전개의 시작점(루트) 조건을 지정하므로 옳다. ② CONNECT BY PRIOR는 PRIOR가 어느 쪽(부모/자식)을 가리키는지로 순방향/역방향 전개를 결정하므로 옳다. ③ LEVEL은 루트가 1이며 자식으로 내려갈수록 1씩 증가하는 깊이 값이므로 옳다. 보충: 계층 순서 유지 정렬은 ORDER BY가 아니라 ORDER SIBLINGS BY라는 점이 자주 출제된다."
  },
  {
    "id": 21902,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "WHERE 절에서 논리 연산자 AND, OR, NOT이 함께 사용될 때의 평가 순서에 대한 설명으로 옳은 것은?",
    "choices": [
      "같은 수준에서 괄호가 없으면 AND가 OR보다 먼저 평가된다.",
      "괄호가 없으면 OR가 AND보다 먼저 평가된다.",
      "논리 연산자는 우선순위 없이 항상 왼쪽에서 오른쪽 순서로만 평가된다.",
      "NOT은 AND, OR가 모두 평가된 뒤 가장 마지막에 평가된다."
    ],
    "answer": 0,
    "explanation": "정답은 ①이다. 논리 연산자의 우선순위는 NOT > AND > OR 순이므로, 괄호가 없으면 AND가 OR보다 먼저 평가된다. 예: 'A OR B AND C'는 'A OR (B AND C)'로 해석된다. ② OR가 AND보다 먼저라는 것은 우선순위를 뒤집은 틀린 설명이다. ③ 논리 연산자에는 분명한 우선순위(NOT>AND>OR)가 있으므로 '무조건 좌→우'는 틀리다. ④ NOT은 세 연산자 중 가장 먼저 평가되므로 '가장 마지막'은 틀리다. 보충: 의도한 조건을 확실히 하려면 괄호로 우선순위를 명시하는 것이 안전하며, AND/OR 혼용 시 괄호 누락은 대표적인 논리 오류 원인이다."
  },
  {
    "id": 21903,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUP BY",
    "question": "다음 SQL에 대한 설명으로 옳은 것은?\n\n```sql\nSELECT 사원명, 급여\nFROM 사원\nWHERE 급여 > ALL (SELECT MAX(급여)\n                  FROM 사원\n                  GROUP BY 부서번호);\n```",
    "choices": [
      "서브쿼리가 반환하는 부서가 하나뿐이라면, 단일 값과 비교하는 것과 결과가 같다.",
      "서브쿼리가 여러 부서(여러 행)를 반환하면 단일행 비교 오류가 발생한다.",
      "ALL을 ANY로 바꿔도 결과가 항상 동일하다.",
      "ALL 대신 등호(=)를 사용해도 결과가 동일하다."
    ],
    "answer": 0,
    "explanation": "`> ALL (집합)`은 집합의 '모든' 값보다 커야 하므로, 사실상 부서별 최고 급여들 중 가장 큰 값(전체 최댓값)보다 큰 사원을 조회한다.\n\n① 서브쿼리가 부서 하나만 반환하면 값이 하나뿐이라 단일 값 비교와 동일한 결과가 된다 → 옳음(정답).\n② ALL·ANY 같은 다중행 연산자는 여러 행을 정상적으로 처리하도록 만들어진 연산자라 오류가 나지 않는다 → 틀림.\n③ `> ALL`은 최댓값보다 큰 것, `> ANY`는 최솟값보다 큰 것을 의미해 결과가 서로 다르다 → 틀림.\n④ `=`는 단일행 연산자여서 서브쿼리가 여러 행을 반환하면 'single-row subquery returns more than one row' 오류가 발생하므로 동일하지 않다 → 틀림.\n\n보충: 다중행 서브쿼리 연산자는 IN, ANY(=SOME), ALL, EXISTS이며, `>ALL(max집합)`은 전체 최댓값 초과, `>ANY(max집합)`은 최솟값 초과와 같다."
  },
  {
    "id": 21904,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUPING",
    "question": "CUBE, ROLLUP, GROUPING SETS에 대한 설명으로 옳은 것은?",
    "choices": [
      "ROLLUP(부서, 직급)은 (부서,직급), (부서), (직급), () 의 4가지 집계를 생성한다.",
      "CUBE(부서, 직급)은 (부서,직급), (부서), () 의 3가지 집계만 생성한다.",
      "GROUPING SETS는 명시한 그룹 외에 전체 합계 ()를 항상 자동으로 포함한다.",
      "GROUPING SETS(부서, 직급)은 (부서), (직급) 두 그룹만 생성하며 UNION ALL로 표현할 수 있다."
    ],
    "answer": 3,
    "explanation": "④ GROUPING SETS는 나열한 집계 단위만 정확히 생성한다. `GROUPING SETS(부서, 직급)`은 (부서)별 집계와 (직급)별 집계 두 결과를 각각 만들어 붙인 것과 같고, `GROUP BY 부서 UNION ALL GROUP BY 직급`으로 표현 가능하다 → 옳음(정답).\n\n① ROLLUP(부서,직급)은 오른쪽부터 계층적으로 제거해 (부서,직급),(부서),() 의 3가지만 생성한다. (직급) 단독은 없다 → 틀림.\n② CUBE(부서,직급)은 가능한 모든 조합 (부서,직급),(부서),(직급),() 4가지를 생성한다 → 틀림.\n③ GROUPING SETS는 지정한 집계만 만들며 ()(전체합계)를 원하면 명시적으로 () 를 넣어야 한다 → 틀림.\n\n보충: ROLLUP은 n+1개, CUBE는 2^n개 집계 그룹을 만들고, GROUPING SETS는 원하는 조합만 골라 지정한다."
  },
  {
    "id": 21905,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 Round 함수 결과에 대한 설명 중 옳은 것을 모두 고른 것은?\n\n가. Round(136.2, -1) = 140\n나. Round(-7.532, 2) = -7.5\n다. Round(3.561, 0) = 3",
    "choices": [
      "가",
      "나",
      "가, 나",
      "나, 다"
    ],
    "answer": 0,
    "explanation": "정답은 ① 가이다.\n가. Round(136.2, -1)은 일의 자리에서 반올림해 140이다 → 옳다.\n나. Round(-7.532, 2)는 소수 셋째 자리(2)에서 반올림해 -7.53이다. -7.5가 아니므로 틀리다.\n다. Round(3.561, 0)은 소수 첫째 자리에서 반올림해 4이다. 3이 아니므로 틀리다.\n따라서 옳은 것은 (가)뿐이다.\n보충: Round(수, n)에서 n이 양수면 소수점 이하 n자리까지, n이 0이면 정수로, n이 음수면 정수부 |n|자리에서 반올림한다."
  },
  {
    "id": 21906,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 중 현재 날짜에서 '월(月)'을 추출하지 않는 것은?",
    "choices": [
      "EXTRACT(YEAR FROM SYSDATE)",
      "EXTRACT(MONTH FROM SYSDATE)",
      "TO_CHAR(SYSDATE, 'MM')",
      "TO_NUMBER(TO_CHAR(SYSDATE, 'MM'))"
    ],
    "answer": 0,
    "explanation": "① EXTRACT(YEAR FROM SYSDATE)는 '연도'를 추출하므로 월을 반환하지 않는다 → 정답.\n\n② EXTRACT(MONTH FROM SYSDATE)는 월을 숫자로 추출한다.\n③ TO_CHAR(SYSDATE, 'MM')은 월을 두 자리 문자열('07')로 반환한다.\n④ TO_NUMBER(TO_CHAR(SYSDATE,'MM'))은 그 문자열을 숫자(7)로 변환한 월이다.\n\n보충: EXTRACT는 날짜/타임스탬프에서 YEAR·MONTH·DAY·HOUR 등 특정 필드를 숫자로 뽑아내는 표준 함수다. 월을 얻는 대표 방법은 EXTRACT(MONTH FROM ...)과 TO_CHAR(...,'MM')이다."
  },
  {
    "id": 21907,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUP BY",
    "question": "다음 SELECT의 결과를 순서대로 바르게 나열한 것은?\n\n```sql\nSELECT SUM(성과급)\nFROM 사원\nGROUP BY 부서\nORDER BY 부서;\n```\n\n사원 테이블 데이터\n\n| 부서 | 성과급 |\n| --- | --- |\n| A | (NULL) |\n| A | (NULL) |\n| B | 10 |\n| B | 20 |\n| C | 30 |\n| C | 30 |",
    "choices": [
      "NULL, 0, 60",
      "NULL, 30, 60",
      "0, 30, 60",
      "60, 30, NULL"
    ],
    "answer": 1,
    "explanation": "집계 함수 SUM은 NULL을 계산에서 제외한다. 그러나 그룹의 모든 값이 NULL이면 더할 값 자체가 없으므로 결과는 0이 아니라 NULL이 된다.\n\n- A: 두 행 모두 NULL → 합계 대상 없음 → NULL\n- B: 10 + 20 = 30\n- C: 30 + 30 = 60\n\n부서 순으로 NULL, 30, 60 → 정답 ②.\n\n① A그룹을 0으로 본 오답(SUM은 전부 NULL이면 0이 아닌 NULL).\n③ 역시 NULL을 0으로 오인.\n④ 순서를 뒤집은 오답.\n\n보충: COUNT(*)는 NULL도 세어 A그룹이 2가 되지만, COUNT(성과급)·SUM·AVG는 NULL을 제외한다. 특히 전부 NULL인 그룹의 SUM/AVG/MAX/MIN은 NULL이다."
  },
  {
    "id": 21908,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 SQL의 결과를 순서대로 바르게 나열한 것은? (T1, T2, T3의 열 이름은 모두 코드)\n\n```sql\nSELECT 코드 FROM T1\nMINUS\nSELECT 코드 FROM T2\nUNION ALL\nSELECT 코드 FROM T3;\n```\n\n- T1: A, B\n- T2: B\n- T3: B, B, C",
    "choices": [
      "A, B, C",
      "A, A, B, C",
      "A, B, B, C",
      "B, B, C"
    ],
    "answer": 2,
    "explanation": "집합 연산자는 우선순위가 같아 위에서 아래로(왼쪽에서 오른쪽으로) 순서대로 평가된다. 따라서 (T1 MINUS T2) 를 먼저 계산하고 그 결과에 UNION ALL T3를 한다.\n\n1) T1 MINUS T2 = {A, B} - {B} = {A} (MINUS는 차집합이며 중복을 제거한다)\n2) {A} UNION ALL T3 = A, (B, B, C) = A, B, B, C\n\nUNION ALL은 중복을 제거하지 않고 그대로 이어 붙이므로 B가 두 번 남는다 → 정답 ③.\n\n① 최종 연산을 UNION(중복 제거)으로 오인한 오답.\n② A가 두 번이 될 근거 없음.\n④ MINUS 결과 {A}를 누락한 오답.\n\n보충: MINUS·INTERSECT·UNION은 중복을 제거하지만 UNION ALL만 중복을 유지한다. 우선순위를 바꾸려면 괄호를 사용한다."
  },
  {
    "id": 21909,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 SQL에 대한 설명으로 옳은 것은?\n\n```sql\nSELECT 배우명, 출연료\nFROM 출연 O\nWHERE 출연료 > (SELECT AVG(출연료)\n               FROM 출연 I\n               WHERE I.영화ID = O.영화ID);\n```",
    "choices": [
      "서브쿼리가 메인쿼리와 무관하게 딱 한 번만 실행되는 비연관 서브쿼리이다.",
      "서브쿼리를 먼저 한 번 실행해 상수 값을 구한 뒤 메인쿼리를 실행한다.",
      "서브쿼리에서는 메인쿼리의 컬럼을 참조할 수 없다.",
      "메인쿼리의 각 행마다 서브쿼리가 실행되어 값을 비교하는 연관(상관) 서브쿼리이다."
    ],
    "answer": 3,
    "explanation": "서브쿼리 내부에서 메인쿼리의 별칭 O의 컬럼(O.영화ID)을 참조하고 있으므로, 이 서브쿼리는 메인쿼리의 행에 의존해 실행되는 연관(상관) 서브쿼리다.\n\n④ 메인쿼리가 읽는 각 배우 행마다 그 배우가 속한 영화의 평균 출연료를 다시 계산해 비교한다 → 옳음(정답). 즉 '같은 영화 안에서 평균보다 많이 받은 배우'를 찾는다.\n\n① 연관 서브쿼리는 메인 행마다 반복 실행되므로 '한 번만' 실행되지 않는다 → 틀림.\n② 비연관 서브쿼리에 대한 설명이다. 이 쿼리는 O.영화ID 때문에 먼저 독립 실행할 수 없다 → 틀림.\n③ 연관 서브쿼리의 핵심이 바로 메인쿼리 컬럼 참조이므로 틀림.\n\n보충: 연관 서브쿼리는 EXISTS/NOT EXISTS와 자주 쓰이며, 외부 행마다 조건을 확인하는 방식으로 동작한다."
  },
  {
    "id": 21910,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "윈도우 함수",
    "question": "다음 쿼리에서 '박'의 순위와, RANK를 DENSE_RANK로 바꿨을 때 '박'의 순위를 바르게 짝지은 것은?\n\n```sql\nSELECT 이름,\n       RANK() OVER (ORDER BY 점수 DESC) AS 순위\nFROM 성적;\n```\n\n성적 테이블\n\n| 이름 | 점수 |\n| --- | --- |\n| 김 | 90 |\n| 이 | 90 |\n| 박 | 80 |\n| 최 | 70 |",
    "choices": [
      "3, 3",
      "3, 2",
      "4, 2",
      "4, 3"
    ],
    "answer": 1,
    "explanation": "RANK()는 동순위가 있으면 그 수만큼 다음 순위를 건너뛴다(공동 1위가 둘이면 다음은 3위). DENSE_RANK()는 동순위가 있어도 다음 순위를 건너뛰지 않는다.\n\n점수 내림차순: 김90·이90(공동 1위), 박80, 최70\n- RANK: 김=1, 이=1, 박=3(2를 건너뜀), 최=4 → 박은 3\n- DENSE_RANK: 김=1, 이=1, 박=2, 최=3 → 박은 2\n\n따라서 (3, 2) → 정답 ②.\n\n① DENSE_RANK가 건너뛴다고 오인.\n③④ RANK에서 박을 4로 오인(80보다 위는 90 두 명뿐이므로 3위).\n\n보충: ROW_NUMBER()는 동점이어도 임의로 유일한 번호(1,2,3,4)를 부여한다. 세 함수 모두 ORDER BY가 필수인 순위 윈도우 함수다."
  },
  {
    "id": 21911,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 계층형 질의의 동작으로 옳은 것은? (parent_id는 상위 category_id를 가리킨다)\n\n```sql\nSELECT category_id, parent_id, LEVEL\nFROM category\nSTART WITH category_id = 11\nCONNECT BY category_id = PRIOR parent_id;\n```",
    "choices": [
      "category_id 11에서 시작해 하위(자식) 방향으로 전개한다.",
      "category_id 2에서 시작해 하위(자식) 방향으로 전개한다.",
      "category_id 11에서 시작해 정방향(부모→자식)으로 전개한다.",
      "category_id 11에서 시작해 역방향(자식→부모, 상위)으로 전개한다."
    ],
    "answer": 3,
    "explanation": "START WITH가 category_id = 11이므로 전개는 11번 행에서 시작한다.\n\nCONNECT BY 조건이 `category_id = PRIOR parent_id`인 점이 핵심이다. PRIOR가 붙은 쪽(parent_id)이 '이전(상위 단계) 행'의 값이고, 다음에 찾을 행의 조건은 `category_id = 이전 행의 parent_id`다. 즉 현재 노드의 부모를 다음 노드로 찾아 올라가는 역방향(자식→부모, 상위) 전개다.\n\n따라서 11에서 시작해 그 부모, 다시 그 부모… 로 상위 계층을 따라 올라간다 → 정답 ④.\n\n① 방향이 반대다(이 조건은 자식이 아니라 부모를 찾는다).\n② 시작점이 11이지 2가 아니다.\n③ 정방향이라면 `PRIOR category_id = parent_id` 형태여야 한다.\n\n보충: 정방향(부모→자식)은 `CONNECT BY PRIOR category_id = parent_id`, 역방향(자식→부모)은 `CONNECT BY category_id = PRIOR parent_id`로 PRIOR의 위치가 방향을 결정한다."
  },
  {
    "id": 21912,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "JOIN",
    "question": "NATURAL JOIN에 대한 설명으로 옳은 것은?",
    "choices": [
      "조인에 사용되는 공통 컬럼에는 반드시 테이블명(별칭) 접두사를 붙여야 한다.",
      "두 테이블에 이름이 같은 컬럼이 하나도 없어도 조인 조건이 자동으로 만들어진다.",
      "NATURAL JOIN과 USING 절을 함께 사용하면 오류가 발생한다.",
      "컬럼 이름만 같으면 데이터 타입이 달라도 자동으로 조인된다."
    ],
    "answer": 2,
    "explanation": "③ NATURAL JOIN은 조인 조건을 자동으로 결정하는 방식이고 USING은 조인 컬럼을 명시하는 방식이므로, 둘을 함께 쓰면 문법 오류가 발생한다 → 옳음(정답).\n\n① NATURAL JOIN(및 USING)으로 묶인 공통 컬럼은 오히려 테이블 접두사를 붙이면 안 된다. 접두사를 붙이면 오류가 난다 → 틀림.\n② 이름이 같은 컬럼이 하나도 없으면 조인 조건이 만들어지지 않아 사실상 카티션 곱(교차 조인)이 된다 → 틀림.\n④ 이름이 같아도 데이터 타입이 호환되지 않으면 오류가 발생한다. 컬럼명만으로 무조건 조인되는 것은 아니다 → 틀림.\n\n보충: NATURAL JOIN은 같은 이름의 모든 컬럼을 자동으로 등가 조인하며, 결과에서 공통 컬럼은 한 번만 표시된다. 조인 컬럼을 통제하고 싶으면 USING 또는 ON을 쓴다."
  },
  {
    "id": 21913,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "TCL",
    "question": "트랜잭션(Transaction)과 TCL에 대한 다음 설명 중 옳은 것을 모두 고른 것은?\n\n가. DDL 문장을 실행하면 묵시적으로 COMMIT이 수행된다.\n나. 트랜잭션은 데이터베이스의 논리적 연산(작업) 단위이다.\n다. SAVEPOINT를 지정하면 해당 지점에서 트랜잭션 전체가 즉시 종료된다.",
    "choices": [
      "가",
      "다",
      "나, 다",
      "가, 나"
    ],
    "answer": 3,
    "explanation": "가(참): CREATE·ALTER·DROP 같은 DDL은 실행 직전·직후에 묵시적 COMMIT이 일어나므로, DDL 앞의 미완료 DML까지 함께 확정된다. 나(참): 트랜잭션은 '더 이상 나눌 수 없는 논리적 연산 단위'로 정의되며 원자성(Atomicity)을 보장한다. 다(거짓): SAVEPOINT는 트랜잭션 내에 되돌아갈 지점을 표시할 뿐 트랜잭션을 종료시키지 않는다. 이후 ROLLBACK TO 해당지점 을 실행하면 그 지점 이후 변경만 취소되고 트랜잭션은 계속 유지된다. 따라서 옳은 것은 가, 나 이므로 정답은 ④. 보충: 트랜잭션 종료는 COMMIT 또는 (전체)ROLLBACK으로만 이루어진다."
  },
  {
    "id": 21914,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "GROUP BY",
    "question": "다음 주문 테이블에 대해 아래 SQL을 실행할 때 결과로 반환되는 '건수' 값들을 모두 고른 것은?\n\n| 고객 | 배송일자 |\n|------|------------|\n| A | 2024-01-01 |\n| A | 2024-01-03 |\n| A | 2024-01-05 |\n| B | 2024-02-01 |\n| B | 2024-02-10 |\n| B | (NULL) |\n| C | 2024-03-01 |\n\n```sql\nSELECT 고객, COUNT(배송일자) AS 건수\nFROM 주문\nGROUP BY 고객\nHAVING COUNT(배송일자) >= 2;\n```",
    "choices": [
      "3",
      "2, 3",
      "1, 2, 3",
      "3, 4"
    ],
    "answer": 1,
    "explanation": "COUNT(컬럼)은 해당 컬럼이 NULL인 행을 세지 않는다. 고객별 COUNT(배송일자)는 A=3, B=2(마지막 NULL 제외), C=1이다. HAVING COUNT(배송일자) >= 2 조건으로 A(3), B(2)만 통과하고 C(1)는 걸러진다. 따라서 반환되는 건수 값은 2와 3이므로 정답은 ②. 오답: ①은 B가 누락, ③은 필터되는 C(1)를 포함, ④의 4는 어떤 고객에도 없는 값이다. 보충: COUNT(*)였다면 B는 3이 되어 결과가 달라진다 — COUNT(*)와 COUNT(컬럼)의 NULL 처리 차이가 핵심이다."
  },
  {
    "id": 21915,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "NULL",
    "question": "다음 SQL의 실행 결과로 옳은 것은?\n\n사원(사원명, 보너스): ('김', NULL), ('이', 50)\n\n```sql\nSELECT 사원명,\n       NVL2(보너스, 보너스 + 100, 0) AS 지급액\nFROM 사원;\n```",
    "choices": [
      "김 = 100, 이 = 150",
      "김 = 0, 이 = 50",
      "김 = 0, 이 = 150",
      "김 = NULL, 이 = 150"
    ],
    "answer": 2,
    "explanation": "NVL2(식, 값1, 값2)는 첫 인자 '식'이 NULL이 아니면 값1을, NULL이면 값2를 반환한다. 김은 보너스가 NULL이므로 값2인 0이 반환된다. 이는 보너스가 50(NOT NULL)이므로 값1인 '보너스 + 100' = 150이 반환된다. 따라서 김=0, 이=150 으로 정답은 ③. 오답: ①은 김을 NULL이 아닌 것처럼 계산, ②는 값1을 잘못 적용, ④는 NVL2가 NULL을 그대로 반환한다는 오해다. 보충: NVL(식, 대체값)은 인자가 2개(NULL일 때만 치환), NVL2는 인자가 3개로 NULL 여부에 따라 서로 다른 값을 돌려준다는 점을 구분해야 한다."
  },
  {
    "id": 21916,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "Oracle 계층형 질의(Hierarchical Query)에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "START WITH 절은 계층 구조 전개를 시작하는 루트(root) 행을 지정한다.",
      "LEVEL 의사컬럼은 시작 값을 임의로 지정할 수 있어 루트의 LEVEL이 반드시 1이 되는 것은 아니다.",
      "데이터에 순환(cycle)이 존재할 수 있는 경우 NOCYCLE 옵션으로 무한 전개를 방지할 수 있다.",
      "ORDER SIBLINGS BY 절은 동일한 부모를 가진 형제(sibling) 노드 사이에서만 정렬을 수행한다."
    ],
    "answer": 1,
    "explanation": "정답은 옳지 않은 진술인 ②. LEVEL은 계층 전개 깊이를 나타내는 의사컬럼으로, 루트 행은 항상 1에서 시작하고 한 단계 내려갈 때마다 1씩 증가한다. 사용자가 시작 값을 임의로 바꿀 수 없다. ①(참): START WITH가 전개의 시작점(루트)을 지정한다. ③(참): CONNECT BY NOCYCLE 을 사용하면 순환 데이터에서 무한 루프를 방지하고, CONNECT_BY_ISCYCLE로 순환 행을 식별할 수 있다. ④(참): ORDER SIBLINGS BY는 계층 구조를 깨지 않으면서 같은 부모 아래 형제 노드만 정렬한다. 보충: 전개 방향은 CONNECT BY PRIOR의 위치로 결정된다 — PRIOR가 부모키 쪽이면 부모→자식(순방향) 전개다."
  },
  {
    "id": 21917,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 두 테이블에 대해 아래 SQL을 실행할 때 반환되는 행의 수는?\n\nA(col): 1, 1, 2\nB(col): 2, 3\n\n```sql\nSELECT col FROM A\nUNION ALL\nSELECT col FROM B;\n```",
    "choices": [
      "5",
      "4",
      "3",
      "2"
    ],
    "answer": 0,
    "explanation": "UNION ALL은 두 결과 집합을 중복 제거 없이 그대로 이어 붙이며 정렬도 수행하지 않는다. A의 3건(1,1,2)과 B의 2건(2,3)이 모두 유지되어 총 5건(1,1,2,2,3)이 반환되므로 정답은 ①. 오답: ②(4)는 존재하지 않는 계산, ③(3)은 UNION(중복 제거)을 적용했을 때의 결과 {1,2,3}, ④(2)는 교집합(INTERSECT) 착각이다. 보충: UNION은 중복 제거 + 정렬 오버헤드가 있어 중복이 없음이 확실하거나 성능이 중요한 경우 UNION ALL을 사용한다."
  },
  {
    "id": 21918,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "ROLLUP",
    "question": "GROUP BY ROLLUP(부서, 직급) 을 사용한 집계에 대한 설명으로 옳은 것은?",
    "choices": [
      "(부서, 직급)별 집계와 함께 부서별 소계, 그리고 전체 합계 행이 생성된다.",
      "(부서, 직급)별 집계와 함께 직급별 소계도 함께 생성된다.",
      "ROLLUP은 GROUP BY 없이 단독으로 사용할 수 있다.",
      "ROLLUP(부서, 직급)과 CUBE(부서, 직급)의 결과 행 수는 항상 동일하다."
    ],
    "answer": 0,
    "explanation": "ROLLUP(a, b)는 인자 순서에 따라 계층적 소계를 만든다: (부서, 직급) → (부서) → () 세 수준의 그룹을 생성하므로, 상세 집계 + 부서별 소계 + 전체 합계가 나온다. 따라서 정답은 ①. ②(거짓): 직급 단독 소계는 ROLLUP이 만들지 않는다 — 모든 조합을 만드는 CUBE에서만 생성된다. ③(거짓): ROLLUP은 GROUP BY의 확장 문법으로 GROUP BY 없이 단독 사용할 수 없다. ④(거짓): CUBE(a,b)는 (a,b),(a),(b),() 네 그룹으로 ROLLUP(세 그룹)보다 결과 행이 많거나 같다. 보충: 어떤 소계 행인지 구분하려면 GROUPING 또는 GROUPING_ID 함수를 사용한다."
  },
  {
    "id": 21919,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "SQL 활용",
    "question": "다음 테이블 T와 SQL에 대해, id 순으로 출력되는 '이동합' 컬럼의 값을 순서대로 바르게 나열한 것은?\n\nT(id, val): (1, 100), (2, 200), (3, 300), (4, 400)\n\n```sql\nSELECT val,\n       SUM(val) OVER (ORDER BY id\n             ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS 이동합\nFROM T\nORDER BY id;\n```",
    "choices": [
      "100, 300, 600, 1000",
      "300, 500, 700, 700",
      "300, 600, 900, 700",
      "100, 200, 300, 400"
    ],
    "answer": 2,
    "explanation": "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING 은 현재 행 기준 바로 앞 1행 + 현재 행 + 바로 뒤 1행의 물리적 범위를 합산한다. id=1: 앞 행 없음 → 100+200=300. id=2: 100+200+300=600. id=3: 200+300+400=900. id=4: 뒤 행 없음 → 300+400=700. 따라서 300, 600, 900, 700 으로 정답은 ③. 오답: ①은 UNBOUNDED PRECEDING(누적합)의 결과, ④는 프레임을 무시하고 val을 그대로 둔 값이다. 보충: 프레임 경계 밖의 행은 자동으로 제외되므로 첫·마지막 행에서는 합산 대상이 줄어든다. ROWS(물리적 행 수)와 RANGE(값 범위)의 차이도 함께 이해해야 한다."
  },
  {
    "id": 21920,
    "sourceSubjectId": 6,
    "category": "SQL 활용",
    "tag": "NULL",
    "question": "다음 SQL의 실행 결과로 옳은 것은?\n\n사원(사원번호): 1, 2, 3\n관리(관리자번호): 1, NULL\n\n```sql\nSELECT 사원번호\nFROM 사원\nWHERE 사원번호 NOT IN (SELECT 관리자번호 FROM 관리);\n```",
    "choices": [
      "2, 3",
      "1",
      "한 건도 반환되지 않는다.",
      "1, 2, 3"
    ],
    "answer": 2,
    "explanation": "NOT IN은 내부적으로 '사원번호 <> 1 AND 사원번호 <> NULL' 형태로 전개된다. NULL과의 비교(<>)는 참도 거짓도 아닌 UNKNOWN을 반환하고, AND에 UNKNOWN이 섞이면 전체 조건이 결코 TRUE가 될 수 없다. 그 결과 모든 행이 탈락하여 한 건도 반환되지 않으므로 정답은 ③. 오답: ①(2,3)은 NULL을 무시했을 때의 잘못된 기대값, ②·④도 성립할 수 없다. 보충: 이것이 유명한 'NOT IN + NULL' 함정이다. 서브쿼리에 NULL이 포함될 수 있으면 NOT EXISTS를 쓰거나 서브쿼리에서 WHERE 관리자번호 IS NOT NULL 로 NULL을 제거해야 한다. NOT EXISTS는 NULL에 안전하다."
  },
  {
    "id": 21921,
    "sourceSubjectId": 7,
    "category": "관리 구문",
    "tag": "DCL",
    "question": "DCL(GRANT·REVOKE)과 권한에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "GRANT SELECT ON 사원 TO 사용자A; 는 사용자A에게 사원 테이블 조회 권한을 부여한다.",
      "WITH GRANT OPTION을 붙여 권한을 부여하면, 권한을 받은 사용자가 다시 다른 사용자에게 그 권한을 부여할 수 있다.",
      "REVOKE는 이전에 부여한 권한을 회수하는 명령이다.",
      "ROLE에 부여한 권한은 한 번 부여되면 REVOKE로 회수할 수 없다."
    ],
    "answer": 3,
    "explanation": "정답은 옳지 않은 진술인 ④. ROLE은 여러 권한을 묶은 집합으로, ROLE에 부여한 권한도 REVOKE로 회수할 수 있고 ROLE 자체도 사용자로부터 REVOKE할 수 있다. ①(참): GRANT 객체권한 ON 객체 TO 사용자 는 표준 객체 권한 부여 구문이다. ②(참): WITH GRANT OPTION은 권한의 재부여(전파)를 허용하며, 이 상태에서 부여자의 권한이 회수되면 연쇄적으로 회수(cascade)될 수 있다. ③(참): REVOKE는 GRANT의 반대로 권한을 회수한다. 보충: 권한은 시스템 권한(예: CREATE SESSION)과 객체 권한(예: SELECT ON 테이블)으로 나뉘며, ROLE을 쓰면 다수 사용자의 권한 관리를 단순화할 수 있다."
  },
  {
    "id": 21922,
    "sourceSubjectId": 5,
    "category": "SQL 기본",
    "tag": "SQL 기본",
    "question": "다음 SQL을 실행한 결과로 옳은 것은? (사원 테이블에는 총 10건의 행이 있다.)\n\n```sql\nSELECT *\nFROM 사원\nWHERE 1 = 0;\n```",
    "choices": [
      "사원 테이블의 전체 10건이 조회된다.",
      "문법 오류가 발생하여 실행되지 않는다.",
      "1 = 0 은 허용되지 않으므로 1 = 2 로 바꿔야 실행된다.",
      "조건이 항상 거짓이므로 한 건도 반환되지 않는다(공집합)."
    ],
    "answer": 3,
    "explanation": "WHERE 1 = 0 은 상수끼리의 비교로 어떤 행에 대해서도 항상 거짓(FALSE)이다. 따라서 모든 행이 필터링되어 결과는 0건, 즉 공집합이 되므로 정답은 ④. ①은 항상 참(1=1)일 때의 결과, ②·③은 문법 오해다 — 1=0 이나 1=2 모두 문법적으로 완전히 유효한 표현식이며 실행된다. 보충: WHERE 1=0 은 '데이터는 필요 없고 컬럼 구조만 복사'하려는 CTAS(CREATE TABLE ... AS SELECT * FROM t WHERE 1=0) 등에서 빈 껍데기 테이블을 만드는 관용적 기법으로 활용된다."
  }
];

const CATEGORY_INFO = {
  "데이터 모델링의 이해": {
    "icon": "◇",
    "desc": "엔터티 · 속성 · 관계 · 식별자 · 데이터 모델링"
  },
  "데이터 모델과 SQL": {
    "icon": "▦",
    "desc": "정규화 · 반정규화 · 데이터 구조와 성능"
  },
  "SQL 기본": {
    "icon": "SQL",
    "desc": "함수 · WHERE · GROUP BY · NULL · 트랜잭션"
  },
  "SQL 활용": {
    "icon": "↳",
    "desc": "JOIN · 서브쿼리 · 집합 · 윈도우 · 계층형 질의"
  },
  "관리 구문": {
    "icon": "⚙",
    "desc": "DDL · DCL · TCL · 권한 · 제약조건"
  }
};
