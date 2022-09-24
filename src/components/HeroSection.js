import React from 'react'
import styled from 'styled-components'
import logo from './../media/homepage/hphero.png'
import { NavBar } from './NavBar'

export const HeroSection = () => {
    return (
        <MainDiv>
            <SecondaryDiv>
                <NavBar />
                <ButtonDiv>
                    <HeroButton>
                        Book Now
                    </HeroButton>
                </ButtonDiv>
            </SecondaryDiv>
        </MainDiv>
    )
}
export const MainDiv = styled.div`
width: 100%;
height: 100%;

`

export const SecondaryDiv = styled.div`
background-image: url(${logo});
background-position:center;
height: 50rem;
width: 100vw;
display: flex;
flex-direction: column;
`

export const HeroButton = styled.button`
width: 10rem;
height: 5rem;
font-size: 2rem;
color: white;
font-weight: 100;
background-color: #E6BEAE;
border-radius: 0.5rem;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
&:hover {
    background-color: white;
    color: #E6BEAE;
}
`

export const ButtonDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 20rem;

`