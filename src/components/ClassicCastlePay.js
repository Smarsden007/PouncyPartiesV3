import { useState } from "react";
import "./index.css";
import styled from "styled-components";

import { TheCastleCheckout } from "./TheCastleCheckout";

export const ClassicCastlePay = () => {
    const [toggleState, setToggleState] = useState(1);
    return (
        <div className="container">
            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}>
                    <h1 style={{ fontSize: '2rem', fontWeight: '100', color: 'white', padding: '3rem 3rem 0rem 3rem' }}>Book your bouncer below then continue to step 2 to pay for your rental!</h1>
                    <TheCastleCheckout />
                </div>
            </div>
        </div>
    );
}



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
