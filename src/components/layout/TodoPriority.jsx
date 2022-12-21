import React,{useState} from 'react'
import styled from 'styled-components'
import CircleRing from "../../Icons/CircleRing";

const TodoPriority = (props) => {
    const [priorityOption, setPriorityOption] = useState(props.priority)



    const priorityHandle = (e)=>{
        setPriorityOption(e.target.value)
    }







  return (
    <Priority style={props.style} priority={priorityOption}>
        <CircleRing />

        <select   value={priorityOption} onChange={priorityHandle} >
        <option value={'Minor'}>Minor</option>
        <option value={'Normal'}>Normal</option>
        <option value={'Critical'}>Critical</option>
        </select>
      </Priority>
  )
}

export default TodoPriority

const Priority = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #5c626d;
  /* margin: auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  

  svg {
    margin-right: 4px;
    circle {
      stroke: ${({ priority }) =>
        priority === "Minor"
          ? "#219653"
          : priority === "Normal"
          ? "#F2C94C"
          : "#EB5757"};
    }
  }

  select{
    appearance: none;
    border: none;
    outline: none;
    background: none;
    
  }


`;