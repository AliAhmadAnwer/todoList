import React from "react";
import TodoItem from "./TodoItem";

const Dummy_Todo = [
  {
    id: 1,
    title: "MyFist Todo",
    description: "Ali is Great dev",
    status: "Pending",
    priority: "Normal",
  },
  {
    id: 2,
    title: "MyFist Todo",
    description: "Ali is Great dev",
    status: "Compelete",
    priority: "Minor",
  },
];

const TodoList = () => {
  return (
    <>
      {Dummy_Todo.map((todoItem) => (
        <TodoItem
          id = {todoItem.id}
          key={todoItem.id}
          title={todoItem.title}
          description={todoItem.description}
          status={todoItem.status}
          priority={todoItem.priority}
        />
      ))}
    </>
  );
};

export default TodoList;
