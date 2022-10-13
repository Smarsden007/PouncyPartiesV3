import React from 'react'
import { ColDiv, RowDiv, } from './CastleRental'
import TestComp from './TestComp'
import castle from '../media/Classic.png'
import styled from "styled-components";

export const TheCastleCheckout = () => {
  return (
    <ColDiv>
                        <RowDiv style={{ padding: '2rem', height: 'auto' , overflowWrap: "break-a"}}>
                            <ColDiv style={{ width: '30vw', height:'40vw', padding: '1rem' }}>
                                <h1 style={{ fontSize: '3rem', fontWeight: '100', color: 'white' }} >The Classic Castle</h1>
                                <img alt="productimage"style={{ borderRadius: '1rem' , width: '20vw'}} src={castle} />
                                <RespH1>Every Rental Includes:</RespH1>
                                <RespP>🎈Entrance Turf</RespP>
                                <RespP>🎈Shoe Rack</RespP>
                                <RespP>🎈Rules Sign (Customization Available)</RespP>
                                <RespP>🎈Blower & 25FT Extention Cord</RespP>
                                <RespH1>Addtional Information:</RespH1>
                                <RespP>🎈Generator Available Upon Request ($50 Charge)</RespP>
                                <RespP style={{fontSize: '1rem'}}>🎈Free Delivery in Marin and Sonoma County</RespP>
                            </ColDiv>
                            <TestComp />
                        </RowDiv>
                    </ColDiv>
  )
}
//need to go through and make all text boxes responsive and have the entire component flex column on mobile.


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