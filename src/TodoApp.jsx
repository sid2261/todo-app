import React from 'react'
import { useState } from 'react';
import AddTodo from './AddTodo';

function TodoApp() {
    const [todos, setTodos] = useState(initialTodos);
    function handleAddTodo(text) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                todo: text,
                done: false,
            },
        ]); 
    }
  return (
    <>
    <h2>TodoApp</h2>
    <AddTodo onAddTodo={handleAddTodo}/>
    </>
  )
  let nextId = 4;
  const initialTodos = [
    { id: 1, todo: "Learn Javascript", done: true},
    { id: 2, todo: "Build Spotify Clone", done: false},
    { id: 3, todo: "Learn React", done: false},
  ];
}

export default TodoApp

