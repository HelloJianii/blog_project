/* eslint-disable */
// warning 메시지 없애주는 코드

import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["남자코트 추천", "강남 우동맛집", "파이썬 독학"]);
  let [good, setGood] = useState(0);

  function 함수() {
    setGood(good + 1);
  }

  function handleClick() {
    let copy = [...글제목];
    copy[0] = "여자코트 추천";
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span onClick={함수} style={{ cursor: "pointer" }}>
            👍
          </span>{" "}
          {good}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
