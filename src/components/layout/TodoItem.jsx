import React from "react";
import styled from "styled-components";

import { Menu, Radio } from "../../Icons/index";
import TodoMenu from "./TodoMenu";

import TodoStatus from "./TodoStatus";
import TodoPriority from "./TodoPriority";


const TodoItem = (props) => {


  


  return (
    <Container>
      <Radio />

      <TodoHeading>{props.title}</TodoHeading>

      
      <TodoStatus status={props.status} style={{margin: 'auto'}}/>
      <TodoPriority priority={props.priority} style={{margin: 'auto'}}/>

     

      <TodoMenu ButtonText={ <MenuButton>
        <Menu />
      </MenuButton>} />
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

