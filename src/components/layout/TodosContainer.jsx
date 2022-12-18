import React from 'react'
import styled from 'styled-components';
import TodoList from './TodoList';


const TodosContainer = () => {
  return (
    <div>
        <Heading  variant='h1'>
        You’ve got <span >{`7 task`}</span> today 
        </Heading>

    <span style={{fontSize: '18px' , fontWeight : 500 , color : '#1D262C' ,}}>On Hold</span>
    <TodoList />

    </div>
  )
}

export default TodosContainer


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