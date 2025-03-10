
#회원 테이블
CREATE TABLE REACT_MEMBER(
	MEM_ID VARCHAR(10) PRIMARY KEY
	,MEM_NAME VARCHAR(10) NOT NULL
	,MEM_PW VARCHAR(10) NOT NULL
	,MEM_TEL VARCHAR(15) UNIQUE
	,MEM_INTRO VARCHAR(30)
	,JOIN_DATE DATETIME DEFAULT SYSDATE()
);

INSERT INTO REACT_MEMBER VALUES('kim', '이순신', '1234', '010-2222-2222', '안녕하세요', NOW());
COMMIT;

SELECT * FROM react_member;

DROP TABLE board;

CREATE TABLE BOARD(
	BOARD_NUM INT PRIMARY KEY AUTO_INCREMENT
	,TITLE VARCHAR(30) NOT NULL
	,WRITER VARCHAR(30) NOT NULL
	,CONTENT VARCHAR(30)
	,READ_CNT INT DEFAULT 0
	,REG_DATE DATETIME DEFAULT SYSDATE()
	);
	
INSERT INTO BOARD VALUES(1, '안녕하세요', '임꺽정', '안녕', 7, NOW());
COMMIT;

SELECT * FROM board
WHERE TITLE LIKE '%java%';

SELECT * FROM board;

DELETE FROM board
WHERE BOARD_NUM = 40;

CREATE TABLE BOARD_REPLY (
	REPLY_NUM INT PRIMARY KEY AUTO_INCREMENT
	, CONTENT VARCHAR(30) NOT NULL
	, WRITER VARCHAR(20) NOT NULL
	, REG_DATE DATETIME DEFAULT SYSDATE()
	, BOARD_NUM INT NOT NULL REFERENCES BOARD (BOARD_NUM)
);

SELECT * FROM board;

INSERT INTO BOARD_REPLY VALUES(1, 'aa', 'bb', NOW(), 1);
COMMIT;
SELECT * FROM board_reply;