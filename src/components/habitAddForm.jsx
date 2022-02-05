import React from 'react';
import {memo} from 'react';

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (evnet) =>{
    evnet.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value= '';
  }
  return (
      <form className="add-form" onSubmit={onSubmit}>
        <input ref = {inputRef} type="text" className="add-input" placeholder="Write your Habit"></input>
        <button className="add-button">Add</button>
      </form>
  );
})

export default HabitAddForm
