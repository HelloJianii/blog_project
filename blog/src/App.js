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
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순 정렬
      </button>
      <button onClick={handleClick}>click</button>
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
    </div>
  );
}

export default App;
