// import "./styles.css";
import React, {  useState } from "react";
import { TheCastle4hr, TheCastle8hr, TheCastle6hr, TheCastle4hrHalf, TheCastle6hrHalf, TheCastle8hrHalf, TheCastle4hrFull, TheCastle6hrfull, TheCastle8hrfull } from "./PayPalCheckOut";
import styled from "styled-components";

export default function TestComp() {
    const [activeStuff, setActiveStuf]  = useState(<p style={{color:'white', padding: '2rem', width: '20vw'}}>Please make a selection</p>)
    
    
    function CheckDropDown() {
        if  (document.getElementById("Bouncer").value === "0"){
            return <TheCastle4hr />
        }else if(document.getElementById("Bouncer").value === "1" ){
            return <TheCastle6hr />
        }else if(document.getElementById("Bouncer").value === "2"){
            return <TheCastle8hr />
        }else if(document.getElementById("Bouncer").value === "0" && document.getElementById("Bouncer2").value === "0"){
            return <TheCastle4hr />
        }else if(document.getElementById("Bouncer").value === "1" && document.getElementById("Bouncer2").value === "1"){
            return <TheCastle6hrHalf />
        }else if(document.getElementById("Bouncer").value === "5"){
            return <TheCastle8hrHalf />
        }else if(document.getElementById("Bouncer").value === "6"){
            return <TheCastle4hrFull />
        }else if(document.getElementById("Bouncer").value === "7"){
            return <TheCastle6hrfull />
        } else{
            return <TheCastle8hrfull />
        }

    }
    return (
        <div className="App">
            <>
                <div>
                    <FormStyled>
                        <SelectDiv onChange={ (event) => {
                                setActiveStuf(CheckDropDown(event.target.value))
                            }}>
                            <SelectStyled htmlFor="tipoId" >
                                Select Package
                            </SelectStyled>
                            <StyledSelect id="Bouncer" >
                                <option value="0" selected>4hr ($200)</option>
                                <option value="1" >6hr ($300)</option>
                                <option value="2">8hr ($400)</option>
                            </StyledSelect>
                            <StyledSelect id="Bouncer2" >
                                <option value="0" selected>No Thank You</option>
                                <option value="1" >6hr ($300)</option>
                                <option value="2">8hr ($400)</option>
                                <option value="3">4hr w/ Half Balloon Arch ($375)</option>
                            </StyledSelect>
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