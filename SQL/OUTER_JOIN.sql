
#outer join
SELECT * FROM customer;
SELECT * FROM orders;

-- 주문자ID, 주문상품명, 주문수량, 주문자명을 INNER JOIN으로 조회
SELECT C.CUSTOMER_ID
		, NAME
		, PRODUCT_NAME
		, ORDER_CNT
FROM customer C LEFT OUTER JOIN orders O
ON C.CUSTOMER_ID = O.CUSTOMER_ID;

SELECT C.CUSTOMER_ID
		, NAME
		, PRODUCT_NAME
		, ORDER_CNT
FROM orders O RIGHT OUTER JOIN customer C
ON C.CUSTOMER_ID = O.CUSTOMER_ID;

SELECT * FROM book_category;
SELECT * FROM book;

#BOOK_CATEGORY 테이블에 존재하는 모든 카테고리에 대한
#카테고리번호, 카테고리이름, 책이름, 책 가격을 조회
SELECT C.CATE_CODE
		, 	CATE_NAME
		,	BOOK_NAME
		,	BOOK_PRICE
FROM book_category C LEFT OUTER JOIN book B
ON C.CATE_CODE = B.CATE_CODE;













