import React from 'react'
import styled from 'styled-components'
import { detailsData } from '../data/detailsData'
import Castle from '../media/homepage/Castleback.png'

export const Details = () => {
    return (
        <DetailsMaster>
            {detailsData.map((details) => (
                <DetailsSub>
                    <DetailsCard>
                        <DetailsImageWrapper className={details.imgClass}>
                            {details.icon}
                        </DetailsImageWrapper>
                        <DetailsTitle>
                            {details.title}
                        </DetailsTitle>
                        <DetailsDesc>
                            {details.desc}
                        </DetailsDesc>
                    </DetailsCard>
                </DetailsSub>
            ))}
        </DetailsMaster>
    )
}
export const DetailsMaster = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
padding: 2rem;
display: grid;
grid-template-columns: repeat(3, 1fr);
margin-bottom: 1rem;
grid-gap: .2rem;
margin-top: -3rem;
grid-row-gap: 5rem;

	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 2rem;
        
	}
	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const DetailsSub = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items:center;
align-content: center;
`

export const DetailsCard = styled.div`
font-size: .75rem;
background-image: url(${Castle});
width: 25vw;
height: 50vh;
border-radius: 1rem;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
align-content: center;
padding: 3rem;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
/* transform: translate(0%);
  transition: 0.3s ease-out; */
  transition: transform .2s; /* Animation */


 
    &:hover {
  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
 
}
@media only screen and (max-width: 1100px) {
    /* tablets and desktop */
  width: 40vw;
    
}

@media only screen and (max-width: 767px) {
    /* phones */
    width: 40vw;
    
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
}
@media screen and (max-width: 568px) {
		width: 80vw;
	}
`

export const DetailsTitle = styled.h2`
font-size: 2rem;
font-weight: 100;
color: white;
`

export const DetailsDesc = styled.h3`
color: white;
font-weight: 100;
`
export const DetailsImageWrapper = styled.div`
	
`;