import { useState } from "react";
import "./index.css";
import styled from "styled-components";
import Calendly from "./Calendy";
import { TheCastleCheckout } from "./TheCastleCheckout";


function CastleRental() {
    const [toggleState, setToggleState] = useState(1);
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);



    const handleClick = event => {
        setIsShown(current => !current);

    };

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            
            <div className="bloc-tabs">
                <button
                    style={{ fontWeight: '100' }}
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>
                    Payment
                </button>
                <button style={{ fontWeight: '100' }}
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>
                    Questions?
                </button>
                
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}>
                    {/* <h1 style={{ fontSize: '2rem', fontWeight: '100', color: 'white', padding: '3rem 3rem 0rem 3rem' }}>Book your bouncer below then continue to step 2 to pay for your rental!</h1> */}
                    <TheCastleCheckout />
                </div>
                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}>
                    <ColDiv>
                        <p style={{ padding: '1.5rem', fontSize: '2rem' }}>Click on your reserved bouncer below!</p>
                        <p style={{ padding: '1.5rem', fontSize: '1rem' }}>If a booking mistake is made or availability is incorrect we will be reaching out to you!</p>

                        <button onClick={handleClick} style={{ margin: '1rem', borderRadius: '1rem', backgroundColor: 'white', fontSize: '2rem', fontWeight: '100', color: 'black', padding: '1rem' }}>Toddler</button>
                    </ColDiv>
                    {isShown && (
                        <TheCastleCheckout />
                    )}
                    
                    
                </div>
                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}>
                    <button onClick={handleClick}>test</button>
                    {isShown && (
                        <p>test</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CastleRental;


export const CTAButton = styled.button`
background-color: white;
border-radius: 0.5rem;
height: 4rem;
width: 10rem;
margin: 1rem;
font-size: 1.5rem;
&:hover {
   
    color: #E6BEAE;
}
`
export const RowDiv = styled.div`
display: flex;
flex-direction: row;

@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    /* phones */
    flex-direction: column;
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
}
`
export const ColDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
`
