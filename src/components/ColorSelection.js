import React, { useState } from "react";
import styled from 'styled-components'
import { ColDiv } from './CastleRental'
import { StyledSelect, SelectStyled } from "./DropDownSelectionCastle";
export const ColorSelection = () => {
    // const [colors, setColors] = useState()

   
    


    return (


        <ColorSelector>
            <ColDiv>
            <StyledSelect id="Color1" >
                                <option selected >Please Make a Selection</option>
                                <option value="0" >Red</option>
                                <option value="1" >Blue</option>
                                <option value="2">Green</option>
                            </StyledSelect>
                            <SelectStyled htmlFor="tipoId" >
                                Balloons
                            </SelectStyled>
                            <StyledSelect id="Color2">
                                <option selected >Please Make a Selection</option>
                                <option value="0" > Red</option>
                                <option value="1" > Blue</option>
                                <option value="2"> Green</option>
                            </StyledSelect>
            </ColDiv>
            {/* <ColorSquare>
            
            </ColorSquare> */}
        </ColorSelector>
    )
}


export const ColorSelector = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
background-color: white;
border-radius: 0rem 0rem .5rem .5rem;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
width: 50%;
`