import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: false },
  { id: 3, title: 'Todo 3', completed: false },
];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        time: new Date().toLocaleTimeString('en-US', {
          hour12: true,
          hour: 'numeric',
          minute: 'numeric',
        }),
      };
      state.push(newTodo);
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      console.log(index);
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },

    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },

    updateTodo: (state, action) => {
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.title };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
