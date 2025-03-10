import "./App.css";
import Board from "./components/Board";
import Counter from "./components/Counter";
import Header from "./components/Header";
import List from "./components/List";
import Lotto from "./components/Lotto";

function App() {
  //구조분해할당(배열, 객체)
  // const arr = [1, 2, 3];
  // const [a, b, c] = arr;

  return (
    <>
      {/* <Header hobby={'react'} age={20}/>
    <div className={'sss'}></div> */}
      {/* <Counter/> */}
      {/* <Lotto /> */}
      <Board/>
    </>
  );
}

export default App;
