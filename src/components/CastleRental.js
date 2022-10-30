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
                    className={toggleState === 1 ? "content  active-content2" : "content"}>

                    <TheCastleCheckout />
                </div>
                <div
                    className={toggleState === 2 ? "content  active-content2" : "content"}>
                    <ColDiv style={{ textAlign: 'center', padding: '1rem'}}>
                        <PayP style={{ padding: '1rem', fontSize: '2.5rem' }}>How soon do you drop off/pick-up?</PayP>
                        <p style={{ padding: '1rem', fontSize: '1.25rem' }}>We typically arrive 30-45 minutes prior to arrival, if balloons are selected please exepect an hour prior to start time. For pick we arrive about 20 minutes after the events end time.</p>
                        <PayP style={{ padding: '1rem', fontSize: '2.5rem' }}>What do you need to have a bounce house at a park?</PayP>
                        <p style={{ padding: '1rem', fontSize: '1.25rem' }}>You must check with the city and seee if there are required permits to have the bouncer.</p>
                        <PayP style={{ padding: '1rem', fontSize: '2.5rem' }}>Can you cancel a reservation?</PayP>
                        <p style={{ padding: '1rem', fontSize: '1.25rem' }}>We require a 14-day cancelation notice for a full refund, if you are outside of that window we allow a reschedule based upon availablility.</p>
                        <PayP style={{ padding: '1rem', fontSize: '2.5rem' }}>Still have questions? Call or text us at the number below!</PayP>
                        <PayP>707-707-7077</PayP>

                        
                    </ColDiv>
                   
                    
                    
                </div>
                <div
                    className={toggleState === 3 ? "content  active-content2" : "content"}>
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