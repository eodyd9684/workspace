package com.green.First;

public class FoodlistDTO {
  private String food;
  private int count;
  private String add;
  private String want;
  private String date;

  public String getFood() {
    return food;
  }

  public void setFood(String food) {
    this.food = food;
  }

  public int getCount() {
    return count;
  }

  public void setCount(int count) {
    this.count = count;
  }

  public String getAdd() {
    return add;
  }

  public void setAdd(String add) {
    this.add = add;
  }

  public String getWant() {
    return want;
  }

  public void setWant(String want) {
    this.want = want;
  }

  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  @Override
  public String toString() {
    return "FoodlistDTO{" +
            "food='" + food + '\'' +
            ", count=" + count +
            ", add='" + add + '\'' +
            ", want='" + want + '\'' +
            ", date='" + date + '\'' +
            '}';
  }
}
