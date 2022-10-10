import { useState } from "react";
import "./index.css";
import styled from "styled-components";
import { TheCastleCheckout } from "./TheCastleCheckout";


function CastleRental() {
    const [toggleState, setToggleState] = useState(1);
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);

    };

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container2">
            
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
                        <PayP>Question?</PayP>
                        <p style={{ padding: '1rem', fontSize: '1.75rem' }}>Awnser</p>

                        
                    </ColDiv>
                   
                    
                    
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
export const PayP = styled.p`

font-size: (5rem, 60vw, 3rem);

`