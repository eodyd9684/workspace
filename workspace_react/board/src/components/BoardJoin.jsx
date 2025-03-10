import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardJoin = () => {
  const nav = useNavigate();
  
  const [boardJoin, setBoardJoin] = useState({
    title : '',
    writer : '',
    content : ''
  });

  const changeData = (e) => {
    setBoardJoin({...boardJoin,
      [e.target.name] : e.target.value
  })
  }

   //console.log(boardJoin);

   const insertBoard = () => {
    axios
    .post('/api/boards', boardJoin)
    .then(() => {
      alert('게시글 등록 성공')
      nav('/')
    })
    .catch((error) => {
      console.log(error);
    });
   }

 

  return (
    <>
      <div>게시글 작성 페이지</div>
      <table>
        <thead>
          <tr>
            <td>제목</td>
            <td>
              <input type="text" name="title" value={boardJoin.title} onChange={(e) => {changeData(e)}} />
            </td>
          </tr>
          <tr>
            <td>작성자</td>
            <td>
              <input type="text" name="writer" value={boardJoin.writer} onChange={(e) => {changeData(e)}}/>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>
              <textarea cols={50} rows={5} name="content" value={boardJoin.content} onChange={(e) => {changeData(e)}}></textarea>
            </td>
          </tr>
        </thead>
      </table>
      <button type="button" onClick={(e) => {insertBoard()}}>
        글등록
      </button>
    </>
  );
};

export default BoardJoin;
