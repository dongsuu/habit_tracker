import React from 'react';
import { Component, useState } from 'react';

const SimpleHabit = (props) => {
  const [count,setCount] = useState(0);

  const handleIncrement = () =>{
    setCount(count+1);
  }
  const handleDecrement = () =>{
    setCount(count-1);
  }
  const reSet = () =>{
    setCount(0);
  }
  return(
    <>
    <h1>Habit-Tracker</h1>
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button 
        className="habit-button habit-increase"
        onClick = {handleIncrement}>
        plus
        </button>
        <button 
        className="habit-button habit-decrease"
        onClick = { count > 0 ? handleDecrement : 0}>
        minus
        </button>
        <button 
        className="habit-button habit-reset"
        onClick = {reSet}>
        Reset
        </button>
    </li>
    </>
    )
}

export default SimpleHabit;
