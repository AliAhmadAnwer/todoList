import React, { useState } from "react";
import styled from "styled-components";

import { Menu, Radio } from "../../Icons/index";
import TodoMenu from "./TodoMenu";
import TodoPriority from "./TodoPriority";

const TodoItem = (props) => {
  const [statusOption, setStausOption] = useState(props.status);

  const statusHandler = (e) => {
    setStausOption(e.target.value);
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
        <option value={"compelete"}>Compelete</option>
      </Status>

      <TodoPriority priority={props.priority} style={{ margin: "auto" }} />

      <TodoMenu
        ButtonText={
          <MenuButton>
            <Menu />
          </MenuButton>
        }
      />
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

const MenuButton = styled.button`
  background: #8b8a8a;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  border: none;
  svg {
    height: 15px;
    width: 15px;
  }
`;
