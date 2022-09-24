import React from 'react'
import styled from 'styled-components'
import { servicesData } from '../data/servicesData.js'
export const ServiceSection = (
    reverse
) => {
    return (
        <ServiceMaster>
            {servicesData.map((service) => {
                console.log(servicesData)
                if (service.reverse === 1) {
                    return <SubServiceDiv reverse={reverse}>
                        <LeftDiv>
                            <SerivceImg src={service.imgClass} />
                        </LeftDiv>
                        <RightDiv>
                            <ServiceTitle style={{textAlign:'right'}}>{service.title}</ServiceTitle>
                            <ServiceDesc style={{textAlign:'right'}}>{service.desc}</ServiceDesc>
                            <ServiceDesc style={{textAlign:'right'}}>{service.desc2}</ServiceDesc>
                            <ServiceDesc style={{textAlign:'right'}}>{service.desc3}</ServiceDesc>
                        </RightDiv>
                    </SubServiceDiv>
                } else {
                    return <SubServiceDiv>
                        <LeftDiv>
                            <SerivceImg src={service.imgClass} />
                        </LeftDiv>
                        <RightDiv>
                            <ServiceTitle>{service.title}</ServiceTitle>
                            <ServiceDesc>{service.desc}<ServiceDesc>{service.desc2}</ServiceDesc><ServiceDesc>{service.desc3}</ServiceDesc>
                            </ServiceDesc>
                        </RightDiv>
                    </SubServiceDiv>
                }
            })}
        </ServiceMaster>
    )
}

export const ServiceMaster = styled.div`
display: flex;
flex-direction: column;
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
flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
justify-content: center;
padding: 2rem;
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
padding: 2rem;
margin-top: 3rem;
width: 50%;
width: clamp(400px, 80vw, 600px);
height: clamp(200px, 70vh, 300px);
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
    margin-top: 6rem;
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
width: clamp(400px, 50vw, 900px);
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
padding: 0.25rem;
`