import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
  deadline?: string; 
}

const loadFromLocalStorage = (): Todo[] => {
  try {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (state: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(state));
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: loadFromLocalStorage(),
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string; deadline?: string }>) => {
      state.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
        createdAt: new Date().toISOString(),
        deadline: action.payload.deadline,
      });
      saveToLocalStorage(state);
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      saveToLocalStorage(newState);
      return newState;
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      saveToLocalStorage([...state])
    },

    updateTodo: (state, action: PayloadAction<{ id: number; text: string; deadline?: string }>) => {
      const { id, text, deadline } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        todo.deadline = deadline;
      }
      saveToLocalStorage(state);
    },

    reorderTodos: (_state, action: PayloadAction<Todo[]>) => {
      saveToLocalStorage(action.payload);
      return action.payload;
    },
  },
});



export const { addTodo, deleteTodo, toggleTodo, updateTodo, reorderTodos } = todoSlice.actions;
export default todoSlice.reducer;
