import React from 'react'
import styled from 'styled-components'
import { paymentData, decorationsData, deliveryData } from '../data/faqData'

export const FaqDetails = () => {
  return (
    <MasterDiv>

      <SubDiv>

        <StyledTitle>
          Delivery/Pick-up
        </StyledTitle>
        <FaqCard>
          {deliveryData.map((delivery) => (<>
            <StyledSubTitle>
              {delivery.question}
            </StyledSubTitle>
            <StyledP>
              {delivery.answer}
            </StyledP>
          </>
          ))}
        </FaqCard>
      </SubDiv>

      <SubDiv>
        <StyledTitle>
          Payments/Cancelations
        </StyledTitle>
        <FaqCard>
          {paymentData.map((payments) => (<>
            <StyledSubTitle>
              {payments.question}
            </StyledSubTitle>
            <StyledP>
              {payments.answer}
            </StyledP>
          </>
          ))}
        </FaqCard>
      </SubDiv>

      <SubDiv>
        <StyledTitle>
          Decorations
        </StyledTitle>
        <FaqCard>
          {decorationsData.map((decorations) => (<>
            <StyledSubTitle>
              {decorations.question}
            </StyledSubTitle>
            <StyledP>
              {decorations.answer}
            </StyledP>
          </>
          ))}
        </FaqCard>
      </SubDiv>
    </MasterDiv>
  )
}


export const MasterDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
`
export const SubDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin: 5rem;
`
export const StyledTitle = styled.h1`
font-size: 3rem;
font-weight: 100;
margin-bottom: 1rem;
color: black;
`
export const StyledSubTitle = styled.h2`
font-size: 2rem;
font-weight: 100;
padding: 2rem;
color: white;

`
export const StyledP = styled.p`
font-size: 1rem;
padding: 2rem;
color: white;

`
export const FaqCard = styled.div`
background-color:#E6BEAE;
border-radius: 0.5rem;
width: 80vw;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`