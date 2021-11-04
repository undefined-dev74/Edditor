import React from 'react';
import { useSelector } from 'react-redux';
import { Section } from '../Timeline/Timeline.styled';
import TodoItemsList from '../TodoItems';
import { ListContainer } from './TodoList.styled';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  return (
    <Section>
      <ListContainer>
        {todos.map(todo => (
          <TodoItemsList
            key={todo.id}
            keyId={todo.id}
            title={todo.title}
            completed={todo.false}
            time={todo.time}
          />
        ))}
      </ListContainer>
    </Section>
  );
};

export default TodoList;
