package com.green.First;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

//anotaion 어노테이션
@RestController
public class TestController {

  //localhost:8080/t1
  @GetMapping("/t1")
  public String test1(){
    return "java";
  }
//http://localhost:8080/t2
  @GetMapping("/t2")
  public int test2(){
    return 10;
  }
@GetMapping("/t3")
public Person test3(){
    //person 클래스에 대한 객체를 하나 생성!
  //클래스명 객체명 = new 생성자호출;
  Person p = new Person("홍길동",20,"울산");
  return p;
  }

  @GetMapping("/t4")
  public List<Person> test4(){
    //Person 클래스에 대한 객체를 다수 저장할 수 있는 리스트 생성
    //자료형 변수명;
    List<Person> list = new ArrayList<>();

    Person p1 = new Person("kim", 20, "울산시");
    Person p2 = new Person("lee", 30, "부산시");
    Person p3 = new Person("hong", 40, "대구시");

    list.add(p1);
    list.add(p2);
    list.add(p3);

    return list;
  }
@GetMapping("/t5")
  public List<Student> test5(){
    List<Student> studentList = new ArrayList<>();

    studentList.add(new Student("kim",80,90,70));
    studentList.add(new Student("hong",70,20,50));
    studentList.add(new Student("lee",90,30,60));
    studentList.add(new Student("park",20,50,30));
    studentList.add(new Student("choi",30,40,20));

    return studentList;
  }

  //react에서 전달하는 데이터를 자바에서 받는 문법은 2가지 존재
  //1. 클래스를 활용하는 방법
  //react에서 전달하는 객체의 key와
  //자바에서 데이터를 받기 위해 매개변수에 선언한 클래스의 변수명이
  //동일하면 데이터를 자동으로 받아온다
  //2. Collection Framework의 Map을 활용하는 방법
  @PostMapping("/t6")
  public void test6(@RequestBody Student student){
    System.out.println(student.toString());
  }

  @PostMapping("/t7")
  public void test7(@RequestBody PhoneDTO phoneDTO){
    System.out.println(phoneDTO.toString());
  }

  @PostMapping("/t8")
  public int test8(@RequestBody Student student){
    int sum = student.getKorScore() + student.getEngScore() + student.getMathScore();
    return sum;
  }

  @PostMapping("/t9")
  public void test9(@RequestBody FoodlistDTO foodlistDTO){
    System.out.println(foodlistDTO.toString());
  }
  @GetMapping("/getLottoNum")
  public int getLottoNum(){
  int num = (int)(Math.random() * 45 + 1);
  return num;
  }
@GetMapping("/getBoardList")
  public List<Board> sendBoardList(){
  List<Board> boardList = new ArrayList<>();
  boardList.add(new Board(1, "제목 1", "김자바", 5, "제목1 내용입니다"));
  boardList.add(new Board(2, "제목 2", "이자바", 0, "제목2 내용입니다"));
  boardList.add(new Board(3, "제목 3", "박자바", 3, "제목3 내용입니다"));
  boardList.add(new Board(4, "제목 4", "정자바", 7, "제목4 내용입니다"));
  boardList.add(new Board(5, "제목 5", "나자바", 10, "제목5 내용입니다"));

  return boardList;
  }
@GetMapping("/getOderList")
  public List<Order> orderList(){
    List<Order> orderList = new ArrayList<>();
    orderList.add(new Order(101, 15000, 2, "데님 청바지", "abc"));
    orderList.add(new Order(102, 10000, 3, "맨투맨 반팔 티셔츠", "bbc"));
    orderList.add(new Order(103, 25000, 2, "오버핏 니트", "cbc"));
    orderList.add(new Order(104, 55000, 1, "롱 패딩", "dbc"));
    orderList.add(new Order(105, 12000, 3, "맨투맨 긴팔 티셔츠", "ebc"));

    return orderList;
  }
}
