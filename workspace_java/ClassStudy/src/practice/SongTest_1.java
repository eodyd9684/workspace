package practice;

import java.util.Arrays;

public class SongTest_1 {

  String title;
  String artist;
  String album;
  int year;
  String[] composer;


  public void setTitle(String title){
    this.title = title;
  }
  public void setArtist(String artist){
    this.artist = artist;
  }
  public void setAlbum(String album){
    this.album = album;
  }
  public void setYear(int year){
    this.year = year;
  }
  public void setComposer(String[] composer){
    this.composer = composer;
  }
  public void setAll(){
    System.out.println("노래 : " + title );
    System.out.println("가수 : " + artist);
    System.out.println("앨범 : " + album);
    System.out.println("발표년도 : " + year);
    System.out.println("작곡가 : " + Arrays.toString(composer));
    //Arrays.toString(composer); 배열 반복
  }
}
