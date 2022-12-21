import { useState } from 'react';
import React from 'react'
import styled from 'styled-components';
import TodoList from './TodoList';
import AlertDialog from './Dialog';


const TodosContainer = () => {
  const [addNew, setAddNew] = useState(false)
  const addNewHandle = ()=>{
    setAddNew(true)
  }
  return (
    <div>
      <Header>
        <Heading  variant='h1'>
        You’ve got <span >{`7 task`}</span> today 
        </Heading>
        <AddNewButton onClick={addNewHandle}>Add New</AddNewButton>
        </Header>
        
    <AlertDialog addNew={addNew} setAddNew={setAddNew} />
    <span style={{fontSize: '18px' , fontWeight : 500 , color : '#1D262C' ,}}>On Hold</span>
    <TodoList />

    </div>
  )
}

export default TodosContainer


const Header = styled.div`
  display: flex;
  flex-direction: row;
`

const Heading = styled.h1`
font-weight: 700;
font-size: 36px;
font-style: normal;
color: #1D262C;
margin-bottom: 40px;

>span{
    color: #F3477A;
}

`

const AddNewButton = styled.button`
  width: 139px;
height: 34px;
margin-top: 13px;
margin-left: 30px;
border: none;
background: #884CB2;
border-radius: 10px;
color: #fff;
`