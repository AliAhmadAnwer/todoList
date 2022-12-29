import React, { useReducer } from "react";
import TodoContext from "./todo-context";

const defaultTodoState = {
  todoList: [],
};

const todoReducer = (state, action) => {
  if (action.type === "NEW") {
    let updateTodo;

    updateTodo = state.todoList.concat(action.item);
    return {
      todoList: updateTodo,
    };
  }

  return defaultTodoState;
};

const TodoProvider = (props) => {
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoState
  );

  const newTodoHandler = (item) => {
    dispatchTodoAction({ type: "NEW", item: item });
  };

  const todoContext = {
    todoList: todoState.todoList,
    newTodo: newTodoHandler,
  };

  console.log(todoContext.todoList);

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
