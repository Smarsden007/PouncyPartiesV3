import React from 'react'
import styled from 'styled-components'
import svg from './../media/Footer.svg'
import logo from './../media/logos/logo.png'
export const Footer = () => {
  return (
    <FooterDiv>
        <SubFooterDiv>
          <img style={{width:'100%', height:'80%'}} src={logo}/>
        </SubFooterDiv>
        </FooterDiv>
  )
}
export const FooterDiv = styled.div`
background-image: url(${svg});
background-repeat: no-repeat;
height: 50vh;
width: 100%;
display: flex;
flex-direction: row;
`

export const SubFooterDiv = styled.div`
display: flex;
flex-direction: row;
margin: 5rem;
`