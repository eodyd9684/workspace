-- 1. 도서 테이블 생성
CREATE TABLE TEST_BOOK (
    BOOK_ID INT PRIMARY KEY AUTO_INCREMENT,
    TITLE VARCHAR(100),
    AUTHOR VARCHAR(50),
    PUBLISHED_YEAR INT,
    CREATED_AT DATETIME DEFAULT SYSDATE()
);

-- 2. 대출 테이블 생성 (외래키 사용)
CREATE TABLE RENTAL (
    RENTAL_ID INT PRIMARY KEY AUTO_INCREMENT,
    BOOK_ID INT REFERENCES TEST_BOOK (BOOK_ID),
    BORROWER_NAME VARCHAR(50),
    RENTAL_DATE DATETIME DEFAULT SYSDATE(),
    RETURN_DATE DATETIME NULL
);

-- 3. 도서 데이터 삽입
INSERT INTO TEST_BOOK (TITLE, AUTHOR, PUBLISHED_YEAR) VALUES 
('데이터베이스 설계', '김철수', 2019),
('파이썬 프로그래밍', '이영희', 2021),
('웹 개발 기초', '박민준', 2018),
('운영체제 이론', '정하나', 2020),
('알고리즘 문제해결', '최수진', 2022);

-- 4. 대출 데이터 삽입
INSERT INTO RENTAL (BOOK_ID, BORROWER_NAME, RENTAL_DATE, RETURN_DATE) VALUES
(1, '김민수', '2024-01-05 14:00:00', '2024-01-15 12:00:00'),
(2, '이서연', '2024-02-01 10:30:00', NULL),
(3, '박지훈', '2024-01-20 16:45:00', '2024-01-30 09:00:00'),
(4, '정예원', '2024-02-10 11:15:00', NULL);

COMMIT;

#도서 제목, 저자, 대출자 이름, 대출 날짜를 조회하시오.

#출판 연도가 2020년 이후인 도서 중 대출된 적이 있는 도서의 모든 정보를 조회하시오.

#한 번도 대출되지 않은 도서의 제목과 저자를 조회하시오.

#모든 도서의 제목, 대출횟수, 대출 여부를 출력하세요. 대출 여부는 한번이라도 대출된 적이 있는
#책은 '대출기록있음', 대출된 적이 없는 도서에는 '대출이이력없음'으로 조회하시오.