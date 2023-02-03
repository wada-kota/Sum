import React, { useState } from 'react';
import './App.css';



export const App = () => {

  const [ leftNumber, setLeftNumber ] = useState();
  const [ rightNumber, setRightNumber ] = useState();
  const [ sum, setSum ] = useState();

  const getLeftNumber = (event) => {
    // 値を消した後、0が表示されてしまう。
    // 数字以外が入力できる？
    const inputNumber = Number(event.target.value);
    if(inputNumber === "0") {
      setLeftNumber();
    }
    setLeftNumber(inputNumber);
  }

  const getRightNumber = (event) => {
    // 値を消した後、0が表示されてしまう。
    // 数字以外が入力できる？
    const inputNumber = Number(event.target.value);
    setRightNumber(inputNumber);
  }

  const onClickSum = () => setSum(leftNumber + rightNumber);

  return (
    <>
      <h3>計算アプリだよ</h3>
      <div className='mathArea'>
        <input type="number" onChange={getLeftNumber} value={leftNumber}/>
        <p>+</p>
        <input type="number" onChange={getRightNumber} value={rightNumber}/>
        <p>=</p>
        <p> { sum } </p>
      </div>
      <button onClick={onClickSum}>計算</button>
    </>
  );
}
