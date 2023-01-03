import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../../context/todo-context";

const TodoList = (props) => {
  const todoCtx = useContext(TodoContext);

  return (
    <>
      {todoCtx.todoList.map((todoItem) => (
        <TodoItem
          id={todoItem.id}
          key={todoItem.id}
          title={todoItem.title}
          description={todoItem.desc}
          status={todoItem.status}
          priority={todoItem.priority}
          addnew = {props.setAddNew}
        />
      ))}
    </>
  );
};

export default TodoList;
