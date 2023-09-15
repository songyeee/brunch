import React from 'react'
import logo from './logo.png'
import styled from 'styled-components'

const Img = styled.div `
display: flex;
  img {
    margin: 0 auto;
    display: flex;
    width: 300px;
    height: 120px;
    justify-content: center;
  }
`

function Header() {
  return (
    <Img>
    <img className='logo' alt ='logo' src={logo} />
    </Img>
  )
}

export default Header