import React from 'react'
import photo from '../media/logos/logo.png'
import styled from "styled-components";

//changes last made on 09/23 V1

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
                        <PouncyLi><a href="/press">Props</a></PouncyLi>
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
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
display: flex;
flex-direction: column;
justify-content: center;
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
}
`

export const LogoDiv = styled.div`
margin: 1rem;
display: block;
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    /* phones */
    margin: none;
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
}
`

export const NavDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
width: 60%;
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    /* phones */
    width: 100%;
    justify-content: center;
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
}
`

export const PouncyNav = styled.nav`
display: block;
flex-direction: row;
justify-content: flex-end;
width: 60%;
padding-top: 2rem;
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    /* phones */
    padding-top:3rem;
    margin-top: -6rem;
    justify-content: center;
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
}
`

export const PouncyUl = styled.ul`
display: flex;
flex-direction: row;
justify-content: flex-end;
padding: 1rem;
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    /* phones */
    padding: 0rem;
    justify-content: center;
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
}
`

export const PouncyLi = styled.li`
padding: 2rem;
font-size: clamp(1rem, 2.5vw, 2rem); 
font-weight: 100;
&:hover {
color: white;
}
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    /* phones */
    padding: 1rem;
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
}
`
