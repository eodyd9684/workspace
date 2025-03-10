import React from "react";

const Map_4 = () => {
  const studentList = [
    {
      name: "김자바",
      age: 20,
      korScore: 70,
      engScore: 80,
    },
    {
      name: "이자바",
      age: 30,
      korScore: 90,
      engScore: 90,
    },
    {
      name: "박자바",
      age: 40,
      korScore: 60,
      engScore: 100,
    },
  ];

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <td>학생이름</td>
            <td>나이</td>
            <td>국어점수</td>
            <td>영어점수</td>
          </tr>
        </thead>
        <tbody>
          {
          studentList.map((list, i) => {
            return (
              <tr key={i}>
                <td>{list.name}</td>
                <td>{list.age}</td>
                <td>{list.korScore}</td>
                <td>{list.engScore}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Map_4;
