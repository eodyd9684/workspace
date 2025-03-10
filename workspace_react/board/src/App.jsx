import { Route, Routes } from 'react-router-dom'
import './App.css'
import BoardList from './components/BoardList'
import BoardDetail from './components/BoardDetail'
import BoardJoin from './components/BoardJoin'
import BoardUpdate from './components/BoardUpdate'
import QueryString from './components/QueryString'

function App() {

  return (
    
    <div className='container'>
      <h1>게시판</h1>
        <Routes>
          {/* 게시글 목록 페이지 */}
          <Route path='' element={<BoardList/>}></Route>
          {/* 상세 보기 페이지 */}
          <Route path='/detail/:boardNum' element={<BoardDetail/>}></Route>
          {/* 글 작성 페이지 */}
          <Route path='/join' element={<BoardJoin/>}></Route>
          {/* 수정 페이지 */}
          <Route path='/update/:boardNum' element={<BoardUpdate/>}></Route>

          {/* 쿼리 스트링 연습 페이지 */}
          <Route path='/test' element={<QueryString/>}></Route>
        </Routes>
    </div>
    
  )
}

export default App
