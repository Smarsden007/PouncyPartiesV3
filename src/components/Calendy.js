import React from 'react'
import styled from "styled-components";
import { InlineWidget } from 'react-calendly';
import { ColDiv } from './CastleRental';

export const CalendlyRun = () => {

  return (
    
    <ColDiv>
      <BookDiv>
        <BookTitle>Booking Instructions:</BookTitle>
        <BookingInst><span style={{fontWeight:'800'}}>1.</span> Select your desired bouncer below and fill out the form along with the desired date.<span style={{fontWeight:'500'}}>Please ensure to select the proper start time!</span></BookingInst>
        <BookingInst><span style={{fontWeight:'800'}}>2.</span> Next you will be directed to a payment session to secure your booking, here you will select your desired length of rental and packages.</BookingInst>
        <BookingInst><span style={{fontWeight:'800'}}>3.</span> Once your payment has been completed a member of our team will send you a rental agreement and discuss any details nessecary</BookingInst>
      </BookDiv>
    <div style={{ width: '55vw',}}>
      
        <InlineWidget 
                url={"https://calendly.com/hello-pouncy?background_color=e6beae&text_color=fdfdfd&primary_color=ffffff"}
                
            />
        

      </div>
      </ColDiv>
  )
}
export const BookTitle = styled.h1`
font-size: 2rem;
font-weight: 100;
padding: 1rem;
`
export const BookDiv = styled.div`
background-color: #e6beae;
border-radius: .5rem;
padding: 1rem;
font-size: 2rem;
color: white;
margin: 2rem;
width: 50vw;
`
export const BookingInst = styled.h2`
font-size: 1rem;
font-weight: 200;
padding: .5rem;
`