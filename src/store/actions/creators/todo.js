import { ADD_TODO, REMOVAL_TODO, SORTING_TODO, TOGGLE_TODO } from "../types/todo";

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removalTodo =(id)=>({
    type:REMOVAL_TODO,
    payload:{id},
})
export const sortingTodo = () =>({
  type:SORTING_TODO,
})