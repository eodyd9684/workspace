import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BoardUpdate = () => {
  const nav = useNavigate();
  //수정할 글번호
  const {boardNum} = useParams();

  //데이터 조회 state변수
  const [boardUpdate, setBoardUpdate] = useState({});
  
  
  //상세조회 데이터
  useEffect(() => {
    axios.get(`/api/boards/${boardNum}`)
    .then((res) => {
      console.log(res.data);
      setBoardUpdate(res.data);
    })
    .catch((error) => {console.log(error);})
  }, [])
  
  const changeInfo = (e) => {
    setBoardUpdate({...boardUpdate,
      [e.target.name] : e.target.value
    })
  }
  
  //수정완료 버튼 클릭 시 실행
  const changeBoard = () => {
    axios.put(`/api/boards/${boardUpdate.boardNum}`, boardUpdate)
    .then((res) => {
      alert('수정 완료')
      nav(`/detail/${boardNum}`);
    })
    .catch((error) => {console.log(error);})
  }
  
  
  return (
    <>
      <h1>게시글 수정 페이지</h1>
      <table>
        <thead>
          <tr>
            <td>작성일</td>
            <td>{dayjs(boardUpdate.regDate).format('YYYY-MM-DD HH:mm:ss')}</td>
            <td>작성자</td>
            <td>{boardUpdate.writer}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td><input name="title" type="text" value={boardUpdate.title} onChange={(e) => {changeInfo(e)}}/></td>
          </tr>
          <tr>
            <td>내용</td>
            <td><textarea cols={30} rows={5} name="content" value={boardUpdate.content} onChange={(e) => {changeInfo(e)}}></textarea></td>
          </tr>
        </thead>
      </table>
      <button type="button" onClick={(e) => {nav(`/detail/${boardNum}`)}}>뒤로가기</button>
      <button type="button"onClick={(e) => {changeBoard()}}>수정</button>
    </>
  );
};

export default BoardUpdate;
