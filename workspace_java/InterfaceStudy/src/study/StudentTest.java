package study;

public class StudentTest implements StudentUtil{
  @Override
  public int getTotalScore(Student student) {
    int sum = student.getKorScore() + student.getMathScore() + student.getEngScore();
    return sum;
  }

  @Override
  public Student getHighScoreStudent(Student s1, Student s2) {

    return getTotalScore(s1) > getTotalScore(s2) ? s1 : s2;
  }

  @Override
  public String getGradeByStudentName(Student[] arr, String name) {
    String grade = "학생 정보 없음";

    for(int i = 0; i < arr.length; i++){
      if (arr[i].getName().equals(name)){
       double avg = getTotalScore(arr[i]) / 3.0;
       grade = getGradeByAvg(avg);
       break;
      }
    }
    return grade;

  }
  //평균점수로 등급을 문자열로 리턴하는 메서드
  public String getGradeByAvg(double avg){
   String grade = "";
    if(avg >= 90 && avg <=100){
      grade = "A";
    }
    else if (avg >=80) {
      grade = "B";
    }
    else if (avg >= 70){
      grade = "C";
    }
    else {
      grade = "D";
    }

    return grade;
  }

  @Override
  public int[] getTotalScoresToArray(Student[] s1) {
    int[] resultArr = new int[s1.length];

    for(int i = 0; i < s1.length; i++){
      resultArr[i] = getTotalScore(s1[i]);
    }


    return resultArr;
  }
}
