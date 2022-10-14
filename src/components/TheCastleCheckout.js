import React from 'react'
import {  RowDiv, } from './CastleRental'
import TestComp from './TestComp'
import castle from '../media/Classic.png'
import styled from "styled-components";

export const TheCastleCheckout = () => {
  return (
    <ColDiv2>
                        <RowDiv style={{ padding: '2rem', height: 'auto' , overflowWrap: "break-a"}}>
                            <ColDiv2>
                                <CastleDescH1 style={{ fontWeight: '100', color: 'white' }} >The Classic Castle</CastleDescH1>
                                <img alt="productimage"style={{ borderRadius: '1rem' , width: '20vw'}} src={castle} />
                                
                                <RespP>Our Classic Castle bounce house is perfect for every event! This inflatable includes a turf rug, shoe rack and a rules sign.</RespP>
                            </ColDiv2>
                            <ColDiv2>
                            <TestComp />
                          </ColDiv2>
                        </RowDiv>
                    </ColDiv2>
  )
}
//need to go through and make all text boxes responsive and have the entire component flex column on mobile.

// style={{ width: '30vw', padding: '1rem',margin: '2rem', marginTop: '-4rem' }}
export const RespH1 = styled.h1`
font-size: calc(27px + 0.390625vw);
font-weight: 400;
text-align: left;
color: white;

`
export const RespP = styled.p`
font-size: calc(12px + 0.390625vw);
font-weight: 200;
text-align: left;
color: white;

`
export const CastleDescH1 = styled.h1`
font-size: 3rem;
text-align: center;
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    width: 40vw;
    font-size: 2rem;
}

@media only screen and (max-width: 480px) {
 font-size: 1.5rem;
}

`
export const ColDiv2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
width: 30vw;
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    width: 40vw;
}

@media screen and (min-width: 600px) {
   
}
`