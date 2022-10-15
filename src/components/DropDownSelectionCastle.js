// import "./styles.css";
import React, { useState } from "react";
import { TheCastle4hr, TheCastle8hr, TheCastle6hr, TheCastle4hrHalf, TheCastle6hrHalf, TheCastle8hrHalf, TheCastle4hrFull, TheCastle6hrfull, TheCastle8hrfull } from "./PayPalCheckOut";
import styled from "styled-components";

export default function TestComp() {
    const [activeStuff, setActiveStuf] = useState(<p style={{ color: 'white', padding: '2rem', width: '20vw' }}>Please make a selection</p>)
    const [activeStuff2, setActiveStuf2] = useState(<p style={{ color: 'white', padding: '2rem', width: '20vw' }}>Please make a selection for color</p>)
    const Bouncer = document.getElementById("Bouncer")
    const Balloons = document.getElementById("Bouncer2")
    
    function CheckoutValidation(){
        if(Bouncer.value === "0" && Balloons.value === "0"){
            //disabble button here
        } else {
            //enable button here
        }
    }
// need to plan for color selection validation as well for button.
    function CheckForBalloons(){
        if(Balloons.value === "1" || "2"){
            return <p>test</p>
        }else{
            return <></>
        }
    }
    
    function CheckDropDown() {
        if (Bouncer.value === "0" && Balloons.value === "0") {
            console.log("##########")
            return <TheCastle4hr />
        } else if (Bouncer.value === "1" && Balloons.value === "0") {
            return <TheCastle6hr />
        } else if (Bouncer.value === "2" && Balloons.value === "0") {
            return <TheCastle8hr />
        } else if (Bouncer.value === "0" && Balloons.value === "1") {
            return <TheCastle4hrHalf />
        } else if (Bouncer.value === "1" && Balloons.value === "1") {
            return <TheCastle6hrHalf />
        } else if (Bouncer.value === "2" && Balloons.value === "1") {
            return <TheCastle8hrHalf />
        } else if (Bouncer.value === "0" && Balloons.value === "2") {
            return <TheCastle4hrFull />
        } else if (Bouncer.value === "1" && Balloons.value === "2") {
            return <TheCastle6hrfull />
        } else if (Bouncer.value === "2" && Balloons.value === "2") {
            return <div><p>Please Select 3 colors</p><TheCastle8hrfull /></div>
        } else {
            return <p>Make a Selection</p>
        }
    }
    return (
        <div className="App">
            <>
                <div>
                    <FormStyled>
                        <SelectDiv onChange={(event) => {
                            setActiveStuf(CheckDropDown(event.target.value))
                        }}>
                            <SelectStyled htmlFor="tipoId" >
                                Select Package
                            </SelectStyled>
                            <StyledSelect id="Bouncer" >
                                <option value="0" >4hr ($200)</option>
                                <option value="1" >6hr ($300)</option>
                                <option value="2">8hr ($400)</option>
                            </StyledSelect>
                            <SelectStyled htmlFor="tipoId" >
                                Balloons
                            </SelectStyled>
                            <StyledSelect id="Bouncer2"  onChange={(event) => {
                            setActiveStuf2(CheckForBalloons(event.target.value))
                        }}>
                                <option value="0" >No Thank You</option>
                                <option value="1" >Half Arch ($175)</option>
                                <option value="2">Full Arch ($225)</option>
                            </StyledSelect>
                            {activeStuff2}
                        </SelectDiv>
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