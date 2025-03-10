import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from './BoardList.module.css'
import dayjs from "dayjs";

const BoardList = () => {

  const nav = useNavigate();

  const [boardList, setBoardList] = useState([]);
  
  useEffect(() => {
    axios.get('/api/boards')
  .then((res) => {
    console.log(res.data);
    setBoardList(res.data);
  })
  .catch((error) => {console.log(error);})
  }, [])
  
  const [list, setList] = useState({
    age : '',
    name : ''
  });
  
  const changeData = (e) => {
    setList({
      ...list,
      [e.target.name] : e.target.value
    })
  }
  //검색창에 입력한 데이터를 저장할 변수
  const [searchData, setSearchData] = useState({
    searchKeyword : 'TITLE',
    searchValue : ''
  });
  
  //검색창 내용 변경 시 실행되는 함수
  const changeSearchData = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name] : e.target.value
    })
  }

  console.log(searchData);

  //검색 버튼 클릭 시 실행 함수
  const searchList = () => {
    axios.get(`/api/boards?searchKeyword=${searchData.searchKeyword}&searchValue=${searchData.searchValue}`)
    .then(res => setBoardList(res.data))
    .catch(error => console.log(error))
  }

  return (
    <>
    <div>
      <select name="searchKeyword" value={searchData.searchKeyword} onChange={(e) => {changeSearchData(e)}}>
        <option value="TITLE">제목</option>
        <option value="WRITER">작성자</option>
      </select>
      <input type="text" name="searchValue" value={searchData.searchValue} onChange={(e) => {changeSearchData(e)}} />
      <button type="button" onClick={e => searchList()}>검색</button>
    </div>
      <div>자유게시판</div>
      <table className={styles.list}>
        <thead>
          <tr>
            <td>No</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
            <td>조회수</td>
          </tr>
        </thead>
        <tbody>
          {
            boardList.length === 0
            ?
            <tr>
              <td colSpan={5}>등록된 게시글이 없습니다.</td>
            </tr>
            :
            boardList.map((board, i) => {
              return(
              <tr key={i}>
                <td>{boardList.length - i}</td>
                <td><span onClick={(e) => {nav(`/detail/${board.boardNum}`)}}>{board.title}</span></td>
                <td>{board.writer}</td>
                <td>{dayjs(board.regDate).format('YYYY-MM-DD')}</td>
                <td>{board.readCnt}</td>
              </tr>)
            })
          }
        </tbody>
      </table>
      <button type="button" onClick={(e) => {nav('/join')}}>글쓰기</button>
      {/* 아래 나이, 이름 입력값을 Query String 방식으로 */}
      {/* 버튼 클릭 시 /test url로 전달하세요. */}
      <div>Query String 실습</div>
      <div>나이 : <input type="text" name="age" value={list.age} onChange={(e) => {changeData(e)}}/></div>
      <div>이름 : <input type="text" name="name" value={list.name} onChange={(e) => {changeData(e)}}/></div>
      <button type="button" onClick={(e) => {
        nav(`/test?age=${list.age}&name=${list.name}`)
      }}>Query String 실행</button>
    </>
  );
};

export default BoardList;
