package practice;

import java.util.Arrays;

public class SongTest_2 {
  public static void main(String[] args) {
   String[] composer = {"김자바","이자바","박자바"};
    SongTest_1 st1 = new SongTest_1();
    st1.title = "ABC";
    st1.artist = "Def";
    st1.album = "1집";
    st1.year = 2025;
    st1.composer = composer;
  st1.setAll();
  }

}
