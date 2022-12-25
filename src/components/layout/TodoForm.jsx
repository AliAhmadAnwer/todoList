import  React,{useState, useContext} from 'react';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TodoContext from '../../context/todo-context';




export default function TodoForm(props) {

  const todoCtx = useContext(TodoContext)
  const [taskTitle, setTaskTitle] = useState();

  const [taskDesc, setTaskDesc] = useState()

  const [taskDate, setTaskDate] = useState()

  const titleChangeHandler = (event)=>{
    setTaskTitle(event.target.value)
  }

  const descChangeHandler = (e)=>{
    setTaskDesc(e.target.value)
  }

  const dateChangeHandler = (e)=>{
    setTaskDate(e.target.value)
  }

  const formSubmitHandler = (event)=>{
    event.preventDefault()

    const data={
        title: taskTitle,
        desc: taskDesc,
        date: taskDate
    }
    // props.onAddTodo(data)
     
     
    
    console.log(data)
    setTaskTitle('')
    setTaskDesc('')
    setTaskDate('')
    props.setAddNew(false)

  }

  return (
    <div sx={{borderRadius: '50%', background: '#000' }}>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog open={props.addNew} style={{borderRadius: '50%', }}>
        <DialogContent sx={{maxWidth: '700px', padding:'60px',  }}>
         <Form onSubmit={formSubmitHandler} >
            <Label>Task</Label>
            <Input type='text' value={taskTitle} onChange={titleChangeHandler} />
            <Label>Description</Label>
            <TextArea type='textarea' value={taskDesc} onChange={descChangeHandler} />
            <OuterDiv>
              <InnerDiv>
            <Label>Date</Label>
            <Input type='date' value={taskDate} onChange={dateChangeHandler} />
            </InnerDiv>
            <InnerDiv>
            <Label>Time</Label>
            <Input type='time' />
            </InnerDiv>
            </OuterDiv>
            <OuterDiv>
              <InnerDiv>
            <Label>Status</Label>
            <Select>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Complete</option>
            </Select>
            </InnerDiv>
            <InnerDiv>
            <Label>Priority</Label>
            <Select>
              <option>Minor</option>
              <option>Normal</option>
              <option>Critical</option>
            </Select>
            </InnerDiv>
            </OuterDiv>
            

            <BtnDiv>
            <AddNewButton type='button' onClick={() => props.setAddNew(false)} >Cancel</AddNewButton>

            <AddNewButton type='button' onClick={formSubmitHandler} >Add New</AddNewButton>
            </BtnDiv>

         </Form>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}





const Form = styled.form`
    width: 100%;
`
const Label = styled.label`
    font-size: 20px;
    color: black;
   
`

const Input = styled.input`
    width: 100%;
    height: 30px;
    margin: 15px 0px;
    padding: 10px;
    font-size: 18px;
    outline: none;
    border: 1px solid #000;
    border-radius: 10px;
`
const TextArea = styled.textarea`
    width: 100%;
    margin: 15px 0px;
    height: 70px;
    padding: 10px;
    font-size: 15px;
    outline: none;
    border: 1px solid #000;
    border-radius: 10px;
`
const BtnDiv = styled.div`
    width: 100%;
    text-align: end;
`

const AddNewButton = styled.button`
  width: 139px;
height: 34px;
cursor: pointer;
border: none;
background: #884CB2;
border-radius: 10px;
color: #fff;
right: 0;
margin-left: 10px;
`

const OuterDiv = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
/* justify-content: flex-start; */
`

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

`

const Select = styled.select`
  width: 100%;
    /* height: 30px; */
    margin: 15px 0px;
    padding: 10px;
    font-size: 18px;
    outline: none;
    border: 1px solid #000;
    border-radius: 10px;
`

