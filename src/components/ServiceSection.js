import React from 'react'
import styled from 'styled-components'
import image from './../media/homepage/hprow1.png';

export const ServiceSection = () => {
    return (
        <ServiceMaster>
            <SubServiceDiv>
                <LeftDiv>
                    <SerivceImg src={image} />

                </LeftDiv>
                <RightDiv>
                    <ServiceTitle>THIS AIN'T YOUR NORMAL BOUNCE HOUSE COMPANY</ServiceTitle>
                    <ServiceDesc>Out with the old in with the new, forgot about the ugly old bounce houses your used too. We offer customizable bounce houses for every event, custom balloon arangemnets, set-up from start to finish leaving you only to worry about the party!
                    </ServiceDesc>
                </RightDiv>
            </SubServiceDiv>
        </ServiceMaster>
        
    )
}

export const ServiceMaster = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
padding: 5rem;
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

export const SubServiceDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    /* phones */
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
}
`

export const RightDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
padding: 3rem;
margin-top: 3rem;
width: 50%;
width: clamp(400px, 80vw, 600px);
height: clamp(200px, 70vh, 300px);
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
    margin-top: 4rem;
}

@media only screen and (max-width: 767px) {
    /* phones */
    margin-top: -3rem;
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
}
`

export const LeftDiv = styled.div`
padding: 1rem;
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

export const SerivceImg = styled.img`
width: clamp(400px, 80vw, 900px);
height: clamp(500px, 40vh, 300px);

`
export const ServiceTitle = styled.h1`
font-size: clamp(1rem, 3.5vw, 6rem); 
font-weight: 100;
padding: 0rem;
margin: 0rem;
`

export const ServiceDesc = styled.h2`
font-size: clamp(1rem, 1.5vw, 2rem); 
font-weight: 300;
`