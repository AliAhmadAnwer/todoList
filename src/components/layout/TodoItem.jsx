import React, { useState } from "react";
import styled from "styled-components";
import CircleRing from "../../Icons/CircleRing";
import { Menu, Radio } from "../../Icons/index";
import TodoMenu from "./TodoMenu";
import MenuItem from '@mui/material/MenuItem';


const TodoItem = () => {


  const [status , setStaus] = useState()


  const statusHandler = (e) => {

    setStaus(e.target.value)
  }


  return (
    <Container>
      <Radio />

      <TodoHeading>Monitor system performance and adjust hardware.</TodoHeading>

      
      <TodoStatus status={status} value={status} onChange={statusHandler}>
        <option >Pending</option>
        <option >In Progress</option>
        <option>Compelete</option>

      </TodoStatus>

      
       <TodoPriority priority="minor">
        <CircleRing />

        <select>
        <option >Pending</option>
        <option >In Progress</option>
        <option>Compelete</option>
        </select>
      </TodoPriority>

     

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

const TodoStatus = styled("select")`
appearance: none;
  background: ${(props) =>
    props.status === "Pending"
      ? "rgba(242, 153, 74, 0.2)"
      : props.status === "In Progress"
      ? "rgba(86, 204, 242, 0.2)"
      : "rgba(39, 174, 96, 0.2)"};
  border-radius: 8.5px;
  padding: 5px 15px;
  text-align: center;

  border: none;
  margin: auto;
  font-size: 12px;

  option {
appearance: none;

    background: #fff;
      border: none;
      padding: 5px 15px;
  }

`;

const TodoPriority = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #5c626d;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  

  svg {
    margin-right: 4px;
    circle {
      stroke: ${({ priority }) =>
        priority === "minor"
          ? "#219653"
          : priority === "normal"
          ? "#F2C94C"
          : "#EB5757"};
    }
  }

  select{
    appearance: none;
    border: none;
    
  }


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

