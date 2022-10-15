// import "./styles.css";
import React, {  useState } from "react";
import { PackageAdd } from "./PackageAdd";
import { TheCastle4hr, TheCastle8hr, TheCastle6hr, TheCastle4hrHalf, TheCastle6hrHalf, TheCastle8hrHalf, TheCastle4hrFull, TheCastle6hrfull, TheCastle8hrfull } from "./PayPalCheckOut";
import styled from "styled-components";

export default function TestComp() {
    const [activeStuff, setActiveStuf]  = useState(<p style={{color:'white', padding: '2rem', width: '20vw'}}>Please make a selection</p>)
    function getBouncerDiv(bouncer) {
        switch (bouncer) {
            case "0":
                return <TheCastle4hr /> ;
            case "1":
                return <TheCastle6hr />;
            case "2":
                return <TheCastle8hr />;
            case "3":
                return <TheCastle4hrHalf />;
            case "4":
                return <TheCastle6hrHalf />;
            case "5":
                return <TheCastle8hrHalf />;
            case "6":
                return <TheCastle4hrFull />;
            case "7":
                return <TheCastle6hrfull />;
            case "8":
                return <div><PackageAdd /><TheCastle8hrfull /></div>;
            default:
                return null;
        }
    }
    return (
        <div className="App">
            <>
                <div>
                    <FormStyled>
                        <SelectDiv>
                            <SelectStyled htmlFor="tipoId" >
                                Select Package
                            </SelectStyled>
                            <StyledSelect onChange={ (event) => {
                                setActiveStuf(getBouncerDiv(event.target.value))
                            }}>
                                <option value="0" selected>4hr ($200)</option>
                                <option value="1" >6hr ($300)</option>
                                <option value="2">8hr ($400)</option>
                                <option value="3">4hr w/ Half Balloon Arch ($375)</option>
                                <option value="4">6hr w/ Half Balloon Arch ($475)</option>
                                <option value="5">8hr w/ Half Balloon Arch ($575)</option>
                                <option value="6">4hr w/ Full Balloon Arch ($425)</option>
                                <option value="7">6hr w/ Full Balloon Arch ($525)</option>
                                <option value="8">8hr w/ Full Balloon Arch ($625)</option>
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