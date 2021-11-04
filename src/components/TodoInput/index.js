import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../app/todoSlice';
import { Section } from '../Timeline/Timeline.styled';
import { Button, FormControl } from './TodoInput.styled';

// const inputRef = useRef(true);

// const changeFocus = () => {
//   inputRef.current.disabled = false;
//   inputRef.current.focus();
// };

// const update = (id, value) => {
//   dispatch(updateTodo({ id: keyId, title: value }));
// };

const TodoInput = props => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (value === '') {
      alert('You must enter text');
      return false;
    } else {
      dispatch(
        addTodo({
          title: value,
        })
      );
      setValue('');
    }
  };

  return (
    <Section style={{ padding: 0 }}>
      <FormControl>
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            className=" text-input form-control shadow-sm"
            maxLength={80}
            placeholder="write a note or paste a link"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
        </form>
        <Button onClick={onSubmit}>
          Add Task
          <span>
            <i className="bi bi-arrow-left-circle"></i>
          </span>
        </Button>
      </FormControl>
    </Section>
  );
};

export default TodoInput;
