package practice;

public class StudentTest {
  public static void main(String[] args) {
    Student student = new Student();

    student.name = "김나박이";
    student.age = 29;
    student.address = "울산";
    student.number = 19;
    student.phone = "010-1111-1111";
    student.setAll();

  }
}
