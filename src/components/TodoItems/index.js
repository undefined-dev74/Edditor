import React, { useState } from 'react';
import {
  TimelineDetails,
  Title,
  TodoIcons,
  TodoItems,
  TodoList,
  TodoValue,
} from './TodoItem.styled';

import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../../app/todoSlice';

const TodoItemsList = ({ keyId, title, completed, time }) => {
  const dispatch = useDispatch();
  const [clicked, setclicked] = useState(false);

  const handleCompleteClick = () => {
    setclicked(!clicked);
    dispatch(toggleComplete({ id: keyId, completed: !completed }));
  };

  const toggleCheck = clicked
    ? 'bi bi-check-circle-fill'
    : 'bi bi-check-circle';

  const handleDelete = () => {
    dispatch(deleteTodo({ id: keyId }));
  };

  return (
    <TodoItems>
      <TodoList>
        <TodoValue>
          <Title>{title}</Title>
          <TimelineDetails>
            <h6>Today</h6>
            <p>{time}</p>
          </TimelineDetails>
        </TodoValue>
        <TodoIcons>
          <IconButton
            aria-label="complete"
            size="small"
            color="success"
            onClick={handleCompleteClick}
          >
            <i className={toggleCheck}></i>
          </IconButton>
          <IconButton aria-label="edit" size="small" color="secondary">
            <i className="bi bi-pencil-square"></i>
          </IconButton>
          <IconButton
            aria-label="delete"
            size="small"
            color="error"
            onClick={handleDelete}
          >
            <i className="bi bi-trash"></i>
          </IconButton>
        </TodoIcons>
      </TodoList>
    </TodoItems>
  );
};

export default TodoItemsList;
