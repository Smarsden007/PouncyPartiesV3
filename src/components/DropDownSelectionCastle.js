// import "./styles.css";
import React, { useState } from "react";
import { TheCastle4hr, TheCastle8hr, TheCastle6hr, TheCastle4hrHalf, TheCastle6hrHalf, TheCastle8hrHalf, TheCastle4hrFull, TheCastle6hrfull, TheCastle8hrfull } from "./PayPalCheckOut";
import styled from "styled-components";

export default function TestComp() {
    const [activeStuff, setActiveStuf] = useState(<p style={{ color: 'white', padding: '2.25rem', width: '20vw', fontSize: '1.25rem' }}>Make your selections and checkout with PayPal or with a Credit or Debit Card.</p>)
    function CheckDropDown() {
        if (document.getElementById("Bouncer1").value === "0" && document.getElementById("Bouncer2").value === "0") {
            return <TheCastle4hr />
        } else if (document.getElementById("Bouncer1").value === "1" && document.getElementById("Bouncer2").value === "0") {
            return <TheCastle6hr />
        } else if (document.getElementById("Bouncer1").value === "2" && document.getElementById("Bouncer2").value === "0") {
            return <TheCastle8hr />
        } else if (document.getElementById("Bouncer1").value === "0" && document.getElementById("Bouncer2").value === "1") {
            return <TheCastle4hrHalf />
        } else if (document.getElementById("Bouncer1").value === "1" && document.getElementById("Bouncer2").value === "1") {
            return <TheCastle6hrHalf />
        } else if (document.getElementById("Bouncer1").value === "2" && document.getElementById("Bouncer2").value === "1") {
            return <TheCastle8hrHalf />
        } else if (document.getElementById("Bouncer1").value === "0" && document.getElementById("Bouncer2").value === "2") {
            return <TheCastle4hrFull />
        } else if (document.getElementById("Bouncer1").value === "1" && document.getElementById("Bouncer2").value === "2") {
            return <TheCastle6hrfull />
        } else if (document.getElementById("Bouncer1").value === "2" && document.getElementById("Bouncer2").value === "2") {
            return <TheCastle8hrfull />
        } else {
            return <p>Make a Selection</p>
        }
    }
    return (
        <div className="App">
            <>
                <div>
                    <FormStyled >
                        <div>
                            <SelectDiv onChange={(event) => {
                                console.log('######### on change')
                                setActiveStuf(CheckDropDown(event.target.value))
                            }}>
                                <SelectStyled htmlFor="tipoId" >
                                    Select Length
                                </SelectStyled>
                                <StyledSelect id="Bouncer1" >
                                    <option selected value="5" >Please Make A Selection</option>
                                    <option value="0" >4hr ($200)</option>
                                    <option value="1" >6hr ($300)</option>
                                    <option value="2">8hr ($400)</option>
                                </StyledSelect>
                                <SelectStyled htmlFor="tipoId" >
                                    Balloons
                                </SelectStyled>
                                <StyledSelect id="Bouncer2">
                                    <option selected value="5" >Please Make A Selection</option>
                                    <option value="0" >No Thank You</option>
                                    <option value="1" >Half Arch ($175)</option>
                                    <option value="2">Full Arch ($225)</option>
                                </StyledSelect>
                            </SelectDiv>
                        </div>
                    </FormStyled>
                </div>
                {activeStuff}
            </>
        </div>
    )
}

export const SelectDiv = styled.div`
display: flex;
flex-direction: column;
padding: 2rem;
margin-top: -1rem;
display: flex;
flex-direction: column;
justify-content: center;

@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
   margin-top: -1rem;
}

@media only screen and (max-width: 480px) {
    margin-top: 0rem;
}
`
export const SelectStyled = styled.label`
font-size: 2rem;
font-weight: 100;
color: white;


@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
   margin-top: -1rem;
   align-items: center;
   align-content: center;
   justify-content: center;
   text-align: center;
}

@media only screen and (max-width: 480px) {
    margin-top: 0rem;
    text-align: center;
}
`
export const FormStyled = styled.form`
display: flex;
flex-direction: column;
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {

}

@media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
   align-content: center;
   align-self: center;
}
`
export const StyledSelect = styled.select`
display: flex;
flex-direction: column;

padding: 1rem;
width: 20vw;
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    width: 50vw;
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
   align-content: center;
   align-self: center;
}

@media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
   align-content: center;
   align-self: center;
   width: 60vw;
   
}
`