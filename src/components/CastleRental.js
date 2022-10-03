import { useState } from "react";
import "./index.css";
import styled from "styled-components";
import test from './../media/icons8-castle-66.png'

import { TheCastle8hr } from "./PayPalCheckOut";
import TestComp from "./TestComp";



function CastleRental() {
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
            <div className="container">
                <h1>The Classic Castle</h1>
                <div className="bloc-tabs">
                    <button
                        style={{ fontWeight: '100' }}
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Toddler
                    </button>
                    <button style={{ fontWeight: '100'}}
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Classic Castle
                    </button>
                    <button
                        style={{ fontWeight: '100'}}
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Bastille
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    > <img  alt='icon-castle' src={test} style={{ width: '7rem' }} />
                        <h2 style={{ color: 'white', fontWeight: '200', fontSize: '2rem' }}>Our Inventory</h2>
                        <p style={{ textAlign: 'center', width: '50%' }} >
                            We currently offer 3 style options and 2 different sizes. We have our Classic Castle and the Bastille that measures 13' in width and 13' in length. In addition to these we also have The Toddler which is 8' in width and 8' in length with a netting surrounding to keep an eye on the little ones.
                        </p>
                        <TheCastle8hr />
                    </div>


{/* start of new row */}
                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <ColDiv>
                        <RowDiv style={{padding:'3rem'}}>
                            <ColDiv style={{width: '30vw', padding: '1rem'}}>
                            <h1 style={{fontSize:'3rem', fontWeight: '100', color: 'white'}} >The Classic Castle</h1>
                            <p>total 1</p>
                            <p>desc 2</p>
                            </ColDiv>
                            <TestComp />
                        </RowDiv>
                        </ColDiv>
                    </div>





                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                       
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