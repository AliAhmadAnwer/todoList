import React, { useContext, useState } from "react";
import styled from "styled-components";

import { Radio } from "../../Icons/index";
import CircleRing from "../../Icons/CircleRing";
import TodoContext from "../../context/todo-context";

const TodoItem = (props) => {
  const [statusOption, setStausOption] = useState(props.status);
  const [priorityOption, setPriorityOption] = useState(props.priority);
  const todoCtx = useContext(TodoContext)

  const statusHandler = (e) => {
    setStausOption(e.target.value);
  };

  const priorityHandle = (e) => {
    setPriorityOption(e.target.value);
  };

  const editHandler = (e) => {
    todoCtx.editTodo(e.target.id)
  };

  const deleteHandler = (e) => {
    todoCtx.deleteTodo(e.target.id)
  };

  return (
    <Container>
      <Radio />
      <OuterDiv>
        <TodoHeading>{props.title}</TodoHeading>
        <TodoDescription>{props.description}</TodoDescription>
      </OuterDiv>

      <Status
        status={statusOption}
        value={statusOption}
        onChange={statusHandler}
      >
        <option value={"pending"}>Pending</option>
        <option value={"inProgress"}>In Progress</option>
        <option value={"complete"}>Compelete</option>
      </Status>

      <Priority priority={priorityOption}>
        <CircleRing />

        <select value={priorityOption} onChange={priorityHandle}>
          <option value={"minor"}>Minor</option>
          <option value={"normal"}>Normal</option>
          <option value={"critical"}>Critical</option>
        </select>
      </Priority>

      <MenuButton>
        <button id={props.id} onClick={(e) => editHandler(e)} addNew = {props.addnew}>Edit</button>
        <button id={props.id} onClick={(e) => deleteHandler(e)}>Delete</button>
      </MenuButton>
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
const OuterDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const TodoHeading = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #000000;
  margin-left: 6px;
  width: 50%;
`;

const TodoDescription = styled.p`
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  margin-left: 6px;
  width: 50%;
`;

const Status = styled("select")`
  outline: none;
  appearance: none;
  background: ${(props) =>
    props.status === "pending"
      ? "rgba(242, 153, 74, 0.2)"
      : props.status === "inProgress"
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

const Priority = styled.div`
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

  select {
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }
`;

const MenuButton = styled.span`
  background: #8b8a8a;
  display: flex;
  justify-content: center;
  align-items: center;


  border: none;
  button{
    margin-left: 10px;
  }

`;
