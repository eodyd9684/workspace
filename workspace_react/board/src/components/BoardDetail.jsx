import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./BoardDetail.module.css";

const BoardDetail = () => {
  const nav = useNavigate();

  const {boardNum} = useParams();

  //조회한 상세 정보를 저장할 state 변수
  const [boardInfo, setBoardInfo] = useState({});

  //해당 게시글의 댓글 목록을 저장할 state 변수
  const [replyList, setReplyList] = useState([]);

  //등록할 댓글 정보를 저장 할 state 변수
  const [replyInfo, setReplyInfo] = useState({
    writer : '',
    content : '',
    boardNum : boardNum
  });


  //댓글 입력 시 실행되는 함수
  const changeReplyInfo = (e) => {
    setReplyInfo({
      ...replyInfo,
      [e.target.name] : e.target.value
    })
  }

  //서버에서 정보 조회
  useEffect(() => {
    axios
      .get(`/api/boards/${boardNum}`)
      .then((res) => {
        console.log(res.data);
        setBoardInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [num, setNum] = useState(0);
  //댓글 목록 조회, 마운트 + num값이 변결될때도 실행
  useEffect(() => {
    axios
      .get(`/api/replies/${boardNum}`)
      .then((res) => {
        console.log(res.data);
        setReplyList(res.data);
      })
      .catch((error) => console.log(error));
  }, [num]);

  //조회 쿼리 여러개 동시 실행하기
  // useEffect(() => {
  //   axios.all([axios.get(`/api/boards/${boardNum}`), 
  //   axios.get(`/api/replies/${boardNum}`)
  //   ])
  //   .then(axios.spread((res1, res2) => {
  //     console.log(res1.data);
  //     setBoardInfo(res1.data);
  //     console.log(res2.data);
  //     setReplyList(res2.data);
  //   }))
  //   .catch(error => console.log(error));
  // }, []);

  //게시글 삭제
  const deleteBoard = () => {
    const result = confirm("삭제할까요?");
    if (!result) {
      return;
    }
    axios
      .delete(`/api/boards/${boardNum}`)
      .then((res) => {
        alert("삭제 완료");
        nav("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //댓글 등록기능
  const insertReply = () => {
    axios.post('/api/replies', replyInfo)
    .then(res => {
      alert('댓글 등록 성공');
      setNum(num + 1);
      setReplyInfo({
       ...replyInfo,
       writer : '',
       content : ''
      });
    })
    .catch(error => console.log(error))
  }
  //console.log(dayjs(boardInfo.regDate).format('YYYY-MM-DD'));

  //댓글 삭제 기능
  const deleteReply = (replyNum) => {
    const result = confirm('삭제할까요?')

    if(!result){
      return;
    }

    axios.delete(`/api/replies/${replyNum}`)
    .then(res => {
      //다시 댓글 목록을 조회 -> num값 변경
      setNum(num + 1);
    })
    .catch(error => console.log(error))
  }

  return (
    <div className={styles.detail_container}>
      <h1>게시글 상세 정보 페이지 + 댓글 목록</h1>
      <div className="table-div">
        <table className={styles.detail_table}>
          <colgroup>
            <col width={"10%"} />
            <col width={"*"} />
            <col width={"10%"} />
            <col width={"15%"} />
            <col width={"10%"} />
            <col width={"15%"} />
          </colgroup>
          <tbody>
            <tr>
              <td>작성일</td>
              <td>{dayjs(boardInfo.regDate).format("YYYY-MM-DD HH:mm:ss")}</td>
              <td>작성자</td>
              <td>{boardInfo.writer}</td>
              <td>조회수</td>
              <td>{boardInfo.readCnt}</td>
            </tr>
            <tr>
              <td>제목</td>
              <td colSpan={5} className={styles.left_text}>
                {boardInfo.title}
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td colSpan={5} className={styles.left_text}>
                {boardInfo.content}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.btn_div}>
        <button type="button" onClick={(e) => {nav("/");}}>목록가기</button>
        <button type="button" onClick={(e) => {nav(`/update/${boardNum}`);}}>수정</button>
        <button type="button" onClick={(e) => {deleteBoard();}}>삭제</button>
      </div>
      <div className={styles.reg_reply_div}>
        <input type="text" placeholder="작성자" name="writer" value={replyInfo.writer} onChange={e => changeReplyInfo(e)}/>
        <input type="text" placeholder="댓글 내용 입력" name="content"
         value={replyInfo.content} onChange={e => changeReplyInfo(e)}/>
        <button type="button" onClick={e => insertReply()}>댓글등록</button>
      </div>
      <div className="reply-list-div">
        {replyList.map((reply, i) => {
          return (
            <div key={i} className={styles.reply}>
              <span>{reply.writer}</span>
              <span>{dayjs(reply.regDate).format('YYYY.MM.DD')}</span>
              <div>
                <p>{reply.content}</p>
                <button type="button" onClick={e => deleteReply(reply.replyNum)}>삭제</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoardDetail;
