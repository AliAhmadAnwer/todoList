import React from 'react'
import TodoItem from './TodoItem'


const Dummy_Todo = [
  {
    id: 1,
    title: 'MyFist Todo',
    description: 'Ali is Great dev',
    status: 'pending',
    priority: 'Minor'
  },
  {
    id: 1,
    title: 'MyFist Todo',
    description: 'Ali is Great dev',
    status: 'pending',
    priority: 'Minor'
  }
]


const TodoList = () => {
  return (

  <>
    <TodoItem />
    <TodoItem />
    <TodoItem />
</>



    )
}

export default TodoList