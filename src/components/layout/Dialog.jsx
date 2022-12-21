import * as React from 'react';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TodoStatus from './TodoStatus';
import TodoPriority from './TodoPriority';



export default function AlertDialog(props) {
  const [title, setTitle] = React.useState();

  const titleChangeHandler = (event)=>{
    setTitle(event.target.value)
  }

  const formSubmitHandler = (event)=>{
    event.preventDefault()

    console.log(title)
    setTitle('')
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
            <Input type='text' value={title} onChange={titleChangeHandler} />
            <Label>Description</Label>
            <TextArea type='textarea' />
            <Footer>
                <FooterDiv>
            <Label> Status</Label>
            <TodoStatus style={{margin: 'none', width: '150px', marginTop: '15px'}}/>
            </FooterDiv>
            <FooterDiv>
            <Label> Priority</Label>
            <TodoPriority style={{margin: 'none', width: '100px', marginTop: '15px'}} />
            </FooterDiv>
            </Footer>

            <BtnDiv>
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
    padding-left: 5px;
    font-size: 18px;
    outline: none;
`
const TextArea = styled.textarea`
    width: 100%;
    margin: 15px 0px;
    height: 70px;
    padding-left: 5px;
    padding-top: 5px;
    font-size: 15px;
    outline: none;
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
`

const Footer = styled.div`
   width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    
`
const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    
    
`