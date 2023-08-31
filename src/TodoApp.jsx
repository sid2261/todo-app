import React from 'react'
import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

let nextId = 4;
const initialTodos = [
  { id: 1, text: "Learn Javascript", done: true},
  { id: 2, text: "Build Spotify Clone", done: false},
  { id: 3, text: "Learn React", done: false},
];
function TodoApp() {
    const [todos, setTodos] = useState(initialTodos);
    function handleAddTodo(text) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                text,
                done: false,
            },
        ]); 
    }
  return (
    <>
    <h2>TodoApp</h2>
    <AddTodo onAddTodo={handleAddTodo}/>
    <TodoList todos={todos} />
    </>
  )
}

export default TodoApp

