import React,{useState } from 'react'
import styled from 'styled-components'

const TodoStatus = (props) => {
    const [statusOption , setStausOption] = useState(props.status)


  const statusHandler = (e) => {

    setStausOption(e.target.value)

  }


  return (
    <Status  style={props.style} status={statusOption} value={statusOption} onChange={statusHandler}>
        <option value={'Pending'} >Pending</option>
        <option value={'In Progress'}>In Progress</option>
        <option value={'Compelete'}>Compelete</option>

      </Status>
  )
}

export default TodoStatus


const Status = styled("select")`
outline: none;
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
  /* margin: auto; */
  font-size: 12px;

  option {
appearance: none;

    background: #fff;
      border: none;
      padding: 5px 15px;
  }

`;