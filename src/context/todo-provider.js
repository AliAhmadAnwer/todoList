import { AccessTimeOutlined } from "@mui/icons-material";
import React, { useReducer } from "react";
import TodoContext from "./todo-context";

const defaultTodoState = {
  todoList: [
    { id:'1',
    title:'AA',
    description:'BB',
    status: 'pending',
    priority: 'normal',
  }
  ]
};

const todoReducer = (state, action) => {
  if (action.type === "NEW") {
    let updateTodo;

    updateTodo = state.todoList.concat(action.item);
    return {
      todoList: updateTodo,
    };

  }
  else  if(action.type === 'Delete'){

    let newUpdateTodo  = state.todoList.filter((todo) => todo.id !== action.item )
    let index = state.todoList.findIndex((todo)=> todo.id === action.item)
    // console.log(index)

    return{
      todoList: newUpdateTodo,
    }

  }
  else if ( action.type === 'Edit'){

    

    // let updateTodo = state.todoList.filter((todo)=> todo.id === action.item )

    let findIndex = state.todoList.findIndex((todo) => todo.id === action.item )
    const list = [].concat(state.todoList.filter((todo)=> todo.id === action.item))
    console.log(list)

    return{
      todoList: list
    }
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
  const deleteTodoHandler = (itemId) => {
    dispatchTodoAction({type: 'Delete' , item: itemId})

  }
  const editTodoHandler = (itemId)=>{
    dispatchTodoAction({type: 'Edit', item: itemId})
  }

  

  const todoContext = {
    todoList: todoState.todoList,
    newTodo: newTodoHandler,
    deleteTodo: deleteTodoHandler,
    editTodo: editTodoHandler
  };



  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
