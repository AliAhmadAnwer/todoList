import React, { useState } from "react";
import styled from "styled-components";

import { Menu, Radio } from "../../Icons/index";
import TodoMenu from "./TodoMenu";
import MenuItem from '@mui/material/MenuItem';
import TodoStatus from "./TodoStatus";
import TodoPriority from "./TodoPriority";


const TodoItem = () => {


  


  return (
    <Container>
      <Radio />

      <TodoHeading>Monitor system performance and adjust hardware.</TodoHeading>

      
      <TodoStatus style={{margin: 'auto'}}/>
      <TodoPriority style={{margin: 'auto'}}/>

      
       

     

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

