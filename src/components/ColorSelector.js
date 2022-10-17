import React from 'react'
import styled from "styled-components";
import { RowDiv } from './CastleRental';
import "./ColorSelector.css";

export const ColorSelector = () => {


    return (
        <div style={{backgroundColor: 'wheat'}}>
            <form>
                <RowDiv style={{width: '17vw'}}>
                
                <label class="container">
                    <input type="radio" checked="checked" name="radio" />
                    <span class="checkmark" style={{backgroundColor: 'purple'}}></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
                </RowDiv>
            </form>
        </div>
    )
}


export const SelectionStyle = styled.input`
background-color: red;
color: black;
`