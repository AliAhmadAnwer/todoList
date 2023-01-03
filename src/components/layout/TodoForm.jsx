import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TodoContext from "../../context/todo-context";
import moment from "moment";
import userInput from "../../hooks/user-input";

export default function TodoForm(props) {
  const currDate = moment().format(moment.HTML5_FMT.DATETIME_LOCAL);
  const todoCtx = useContext(TodoContext);

  // useEffect(()=>{
  //   titleChangeHandlers(todoCtx.editTodo.titleInput)
  // },[])
  

  const isValid = (value) => value.trim() !== "";

  const {
    userInputValue: titleInput,
    inputChangeHandler: titleChangeHandlers,
    validate: titleIsValid,
    hasError: titleErrorHandle,
    inputBlurHandle: titleBlurHandle,
    reset: titleReset,
  } = userInput(isValid);

  const {
    userInputValue: descInput,
    inputChangeHandler: descChangeHandler,
    validate: descIsValid,
    hasError: descErrorHandle,
    inputBlurHandle: descBlurHandle,
    reset: descReset,
  } = userInput(isValid);

  const {
    userInputValue: startDate,
    inputChangeHandler: startDateHandler,
    validate: startDateIsValid,
    hasError: startDateErrorHandle,
    inputBlurHandle: startDateBlurHandle,
    reset: startDateReset,
  } = userInput(isValid);

  const {
    userInputValue: endDate,
    inputChangeHandler: endDateHandler,
    validate: endDateIsValid,
    hasError: endDateErrorHandle,
    inputBlurHandle: endDateBlurHandle,
    reset: endDateReset,
  } = userInput(isValid);

  

  const [taskStatus, setTaskStatus] = useState("pending");

  const [taskPriority, setTaskPriority] = useState("minor");

  const taskStatusHandler = (e) => {
    setTaskStatus(e.target.value);
  };

  const priorityChangeHandler = (e) => {
    setTaskPriority(e.target.value);
  };

  let formIsValid = false;
  if (titleIsValid && descIsValid && startDateIsValid && endDateIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const data = {
      title: titleInput,
      desc: descInput,
      date: startDate,
      status: taskStatus,
      priority: taskPriority,
      id: (todoCtx.todoList.length + 1).toString(),
    };
    // props.onAddTodo(data)

    todoCtx.newTodo(data);
    titleReset();
    descReset();
    startDateReset();
    endDateReset();
    setTaskStatus("pending");
    setTaskPriority("minor");
    formIsValid = false;
    props.setAddNew(false);
  };

  return (
    <div sx={{ borderRadius: "50%", background: "#000" }}>
      <Dialog open={props.addNew} sx={{ borderRadius: "50%" }}>
        <DialogContent sx={{ width: "auto ", padding: "60px" }}>
          <Form onSubmit={formSubmitHandler}>
            <Label>Task</Label>
            <Input
              onError={titleErrorHandle ? titleErrorHandle : null}
              onBlur={titleBlurHandle}
              type="text"
              value={titleInput}
              onChange={titleChangeHandlers}
            />

            {titleErrorHandle && (
              <ErrorMessage>Please Enter The Title</ErrorMessage>
            )}

            <Label>Description</Label>
            <TextArea
              onError={descErrorHandle ? descErrorHandle : null}
              onBlur={descBlurHandle}
              type="textarea"
              value={descInput}
              onChange={descChangeHandler}
            />
            {descErrorHandle && (
              <ErrorMessage>Please Enter Description</ErrorMessage>
            )}
            <OuterDiv>
              <InnerDiv>
                <Label>Start Date</Label>

                <Input
                  onError={startDateErrorHandle ? startDateErrorHandle : null}
                  onBlur={startDateBlurHandle}
                  type={"datetime-local"}
                  min={currDate}
                  value={startDate}
                  onChange={startDateHandler}
                />
                {startDateErrorHandle && (
                  <ErrorMessage>Please Enter Start Date</ErrorMessage>
                )}
              </InnerDiv>
              <InnerDiv>
                <Label>End Date</Label>

                <Input
                  onError={endDateErrorHandle ? endDateErrorHandle : null}
                  onBlur={endDateBlurHandle}
                  type={"datetime-local"}
                  disabled={!startDate}
                  min={startDate}
                  value={endDate}
                  onChange={endDateHandler}
                />
                {endDateErrorHandle && (
                  <ErrorMessage>Please Enter End Date</ErrorMessage>
                )}
              </InnerDiv>
            </OuterDiv>
            <OuterDiv>
              <InnerDiv>
                <Label>Status</Label>
                <Select value={taskStatus} onChange={taskStatusHandler}>
                  <option value="pending">Pending</option>
                  <option value="inProgress">In Progress</option>
                  <option value="complete">Complete</option>
                </Select>
              </InnerDiv>
              <InnerDiv>
                <Label>Priority</Label>
                <Select value={taskPriority} onChange={priorityChangeHandler}>
                  <option value="minor">Minor</option>
                  <option value="normal">Normal</option>
                  <option value="critical">Critical</option>
                </Select>
              </InnerDiv>
            </OuterDiv>

            <BtnDiv>
              <AddNewButton
                type="button"
                onClick={() => props.setAddNew(false)}
              >
                Cancel
              </AddNewButton>

              <AddNewButton disabled={!formIsValid} type="submit">
                Add New
              </AddNewButton>
            </BtnDiv>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const Form = styled.form`
  width: 100%;
`;
const Label = styled.label`
  font-size: 20px;
  color: black;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  margin: 15px 0px;
  padding: 10px;
  font-size: 18px;
  outline: none;
  background: ${(p) => (p.onError ? "#f3b26f73" : "#fff")};
  border: ${(p) => (p.onError ? "1px solid red" : "1px solid black")};
  border-radius: 10px;
`;
const TextArea = styled.textarea`
  width: 100%;
  margin: 15px 0px;
  height: 70px;
  padding: 10px;
  font-size: 15px;
  outline: none;
  background: ${(props) => (props.onError ? "#f3b26f73" : "#fff")};
  border: ${(props) => (props.onError ? "1px solid red" : "1px solid black")};
  border-radius: 10px;
`;
const BtnDiv = styled.div`
  width: 100%;
  text-align: end;
`;

const AddNewButton = styled.button`
  width: 139px;
  height: 34px;
  cursor: pointer;
  border: none;
  background: #884cb2;
  border-radius: 10px;
  color: #fff;
  right: 0;
  margin-left: 10px;
  &:disabled {
    background: gray;
  }
`;

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  /* justify-content: flex-start; */
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  width: 100%;
  /* height: 30px; */
  margin: 15px 0px;
  padding: 10px;
  font-size: 18px;
  outline: none;
  border: 1px solid #000;
  border-radius: 10px;
  background: #fff;
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
`;
