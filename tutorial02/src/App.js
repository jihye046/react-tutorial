/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 자주 바뀌거나, 중요한 데이터는 변수 말고 state에 저장해서 사용
  // 일반 문자 또는 배열 형태로 사용 가능
  // [A,B] - A: 초기값, B: A값을 변경하고싶을 때 함수로 사용
  let [title, updateTitle] = useState(['남자 코트 추천', '여자 코트 추천', '어린이 코트 추천']); // state에 저장한 경우
  let [like, updateLike] = useState(0)
  let posts = '강남 고기 맛집' // 변수에 저장한 경우

  const newArray = () => {
    // 새로운 배열에 기존 배열을 복사
    let array = [...title]; // 값 복사를 할 때 [title]을 쓰지 않고 앞에 ...을 붙여줘야함 -> 랜더링 오류 방지 차원
    // 새로운 배열의 첫번째 값을 변경
    array[0] = '여자 코트 추천' // 첫번째 값을 변경
    // 초기값을 변경하려면 함수로 사용(updateTitle())
    updateTitle(array)
  }

  const sortArray = () => {
    const array = [...title]
    const sortedArray = array.sort()
    updateTitle(sortedArray)
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={ newArray }>버튼</button>
      <button onClick={ ()=>{ sortArray() } }>글정렬</button>
      <div className='list'>
        <h3>{ title[0] } <span onClick={ ()=>{ updateLike(like + 1) } }>👍</span> {like} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{ title[1] }</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{ title[2] }</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
      <Modal/>
    </div>
  );
}

// HTML을 한 단어로 줄여서 쓸 수 있는 방법: Component 문법
// Component 만드는 법: 축약을 원하는 HTML 함수 생성 후 원하는 곳에서 <함수명/>으로 사용. 함수명 시작은 대문자로 짓는것이 관행
// Component를 사용하면 좋은 곳: 반복 출현하는 HTML 부분 / 자주 변경되는 HTML UI 부분
// Component 위치: App()과 나란히 위치하면 됨
const Modal = () => {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
