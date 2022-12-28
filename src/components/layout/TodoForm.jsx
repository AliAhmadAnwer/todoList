import React, { useState, useContext } from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TodoContext from "../../context/todo-context";
import moment from "moment/moment";
import userInput from "../Hooks/user-input";



export default function TodoForm(props) {
  const currDate = moment().format(moment.HTML5_FMT.DATETIME_LOCAL);

  const valueFc = (value) =>  value.trim() !== '' 

  const {userInputValue: titleInput,
  inputChangeHandler: titleChangeHandlers,
  validate: titleIsValid, hasError: titleErrorHandle, inputBlurHandle: titleBlurHandle} = userInput(valueFc)

  const {userInputValue: descInput,
  inputChangeHandler: descChangeHandler} = userInput(valueFc)

  const {userInputValue: startDate,
  inputChangeHandler: startDateHandler} = userInput(valueFc)

  const {userInputValue: endDate,
  inputChangeHandler: endDateHandler} = userInput(valueFc)

  

  const todoCtx = useContext(TodoContext);

  let formIsValid = false

  
 

  const [taskStatus, setTaskStatus] = useState("pending");

  const [taskPriority, setTaskPriority] = useState("minor");

 


  const taskStatusHandler = (e) => {
    setTaskStatus(e.target.value);
  };

  const priorityChangeHandler = (e) => {
    setTaskPriority(e.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if(titleIsValid){
      formIsValid = true
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

    
    setTaskStatus("pending");
    setTaskPriority("minor");
    props.setAddNew(false);
   
    

  };


  return (
    <div sx={{ borderRadius: "50%", background: "#000" }}>
      <Dialog open={props.addNew} style={{ borderRadius: "50%" }}>
        <DialogContent sx={{ maxWidth: "700px", padding: "60px" }}>
          <Form  onSubmit={formSubmitHandler}>
            <Label>Task</Label>
            <Input
            onBlur={titleBlurHandle}
              type="text"
              value={titleInput}
              onChange={titleChangeHandlers}
            />
            {titleErrorHandle ? <p>Please Enter The Title</p> : ''}
           
            <Label>Description</Label>
            <TextArea
              type="textarea"
              value={descInput}
              onChange={descChangeHandler}
            />
            <OuterDiv>
              <InnerDiv>
                <Label>Start Date</Label>

                <Input
                  type={"datetime-local"}
                  min={currDate}
                  value={startDate}
                  onChange={startDateHandler}
                />
              </InnerDiv>
              <InnerDiv>
                <Label>End Date</Label>

                <Input
                  type={"datetime-local"}
                  disabled={!startDate}
                  min={startDate}
                  value={endDate}
                  step="3600"
                  onChange={endDateHandler}
                />
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
              <AddNewButton onClick={() => props.setAddNew(false)}>
                Cancel
              </AddNewButton>

              <AddNewButton type="button"  >Add New</AddNewButton>
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
  border: 1px solid #000;
  border-radius: 10px;
`;
const TextArea = styled.textarea`
  width: 100%;
  margin: 15px 0px;
  height: 70px;
  padding: 10px;
  font-size: 15px;
  outline: none;
  border: 1px solid #000;
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
