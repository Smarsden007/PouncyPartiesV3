import React from 'react'
import photo from '../media/logos/logo.png'
import styled from "styled-components";


export const NavBar = () => {
    return (
        <NavMasterDiv>
            <LogoDiv>
                <img style={{ padding: '2rem', width: '20rem' }} src={photo} alt='img' />
            </LogoDiv>
            <NavDiv>
                <PouncyNav>
                    <PouncyUl>
                        <PouncyLi><a href="/about">Home</a></PouncyLi>
                        <PouncyLi><a href="/contact">FAQ</a></PouncyLi>
                        <PouncyLi><a href="/press">Rentals</a></PouncyLi>
                        <PouncyLi><a href="/press">Booking</a></PouncyLi>
                    </PouncyUl>
                </PouncyNav>
            </NavDiv>

        </NavMasterDiv>
    )
}


export const NavMasterDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`
export const LogoDiv = styled.div`
margin: 1rem;
display: block;

`

export const NavDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
width: 60%;

`
export const PouncyNav = styled.nav`
display: block;
flex-direction: row;
justify-content: flex-end;
width: 60%;
padding-top: 2rem;
`

export const PouncyUl = styled.ul`
display: flex;
flex-direction: row;
justify-content: flex-end;
padding: 1rem;
`

export const PouncyLi = styled.li`
padding: 2rem;
font-size: clamp(1rem, 2.5vw, 2rem); 
font-weight: 100;
`
