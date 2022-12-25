import React,{useContext} from "react";
import styled from "styled-components";

import { Menu, Radio } from "../../Icons/index";
import TodoMenu from "./TodoMenu";

import TodoStatus from "./TodoStatus";
import TodoPriority from "./TodoPriority";
import TodoContext from "../../context/todo-context";
import TodoForm from "./TodoForm";


const TodoItem = (props) => {

  const todoCtx = useContext(TodoContext)

  const addTodoHandler = (data)=>{
    
    todoCtx.newTodo({
          id : props.id, 
          title : props.title,
          description : props.description,
          status : props.status,
          priority : props.priority
    })
  }


  


  return (
    <Container>
      <Radio />

      <TodoHeading>{props.title}</TodoHeading>

      
      <TodoStatus status={props.status} style={{margin: 'auto'}}/>
      <TodoPriority priority={props.priority} style={{margin: 'auto'}}/>

     

      <TodoMenu ButtonText={ <MenuButton>
        <Menu />
      </MenuButton>} />
      <TodoForm onAddTodo = {addTodoHandler} />
    </Container>
  );
};

export default TodoItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 22px 0px;
  border-bottom: 0.5px solid #e0e0e0;
  position: relative;
`;

const TodoHeading = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  margin-left: 6px;
  width: 50%;
`;





const MenuButton = styled.button`
  background: #8b8a8a;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  border: none;
  svg{
    height: 15px;
    width: 15px;
  }
`;

