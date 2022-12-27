import { Container, styled } from '@mui/material'
import React from 'react'

const Dashboard = (props) => {
  return (
    <>

        <DashboardContainer fixed maxWidth='xl' >
            {props.children}
        </DashboardContainer>
    </>
  )
}

export default Dashboard



const DashboardContainer = styled(Container)`

max-width: 1400px;
width: 100%;
height: 90vh;
background: #FFFFFF;
box-shadow: 0px 4px 40px #8CA4D8;
border-radius: 30px;
padding : 71px !important;
overflow-y: scroll;
display: flex;
justify-content: space-between;

`
