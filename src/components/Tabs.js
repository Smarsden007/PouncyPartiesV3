import { useState } from "react";
import "./index.css";
import styled from "styled-components";
import test from './../media/icons8-castle-66.png'
import test2 from './../media/icons8-balloon-arch-100.png'
import test3 from './../media/icons8-sticker-100.png'
import test4 from './../media/icons8-decorations-100.png'
import test5 from './../media/icons8-photographer-100.png'
import { ServiceMaster } from "./ServiceSection";



function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
            <div className="container">
                <div className="bloc-tabs">
                    <button
                        style={{ fontWeight: '100' }}
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Pouncers
                    </button>
                    <button style={{ fontWeight: '100'}}
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Decorations
                    </button>
                    <button
                        style={{ fontWeight: '100'}}
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Photography
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    > <img src={test} style={{ width: '7rem' }} />
                        <h2 style={{ color: 'white', fontWeight: '200', fontSize: '2rem' }}>Our Inventory</h2>
                        <p style={{ textAlign: 'center', width: '50%' }} >
                            We currently offer 3 style options and 2 different sizes. We have our Classic Castle and the Bastille that measures 13' in width and 13' in length. In addition to these we also have The Toddler which is 8' in width and 8' in length with a netting surrounding to keep an eye on the little ones.
                        </p>
                        <CTAButton style={{ fontWeight: '100' }}> Learn More</CTAButton>

                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <RowDiv>
                            <ColDiv style={{ padding: '1rem' }}>
                                <img src={test2} style={{ width: '7rem',margin:'1rem' }} />
                                <h2 style={{ color: 'white', fontWeight: '200', fontSize: '2rem' }}>Balloons</h2>

                                <p style={{ textAlign: 'center' }}>
                                    Pricing and sizes available for all of our bouncers, we offer 3 color options by default with addtional colors available upon request.
                                </p>
                            </ColDiv>
                            <ColDiv style={{ padding: '1rem' }}>
                                <img src={test3} style={{ width: '7rem',margin:'1rem' }} />

                                <h2 style={{ color: 'white', fontWeight: '200', fontSize: '2rem' }}>Vinyl Prints</h2>

                                <p style={{ textAlign: 'center' }}>
                                    The bounce house is your canvas! Send us your desired designs and get them on the bounce house for your event! Check the FAQ for guidelines on supported images.
                                </p>
                            </ColDiv>
                            <ColDiv style={{ padding: '1rem' }}>
                                <img src={test4} style={{ width: '7rem',margin:'1rem' }} />

                                <h2 style={{ color: 'white', fontWeight: '200', fontSize: '2rem' }}>Back Drops</h2>

                                <p style={{ textAlign: 'center' }}>
                                    We offer custom backdrops perfect for every event! Typically bundled with balloons and vinyl prints, your dream event comes to life!
                                </p>
                            </ColDiv>
                        </RowDiv>
                        <CTAButton style={{ fontWeight: '100' ,margin:'1rem'}}> Learn More</CTAButton>
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <img src={test5} style={{ width: '7rem' ,margin:'1rem'}} />

                        <h2 style={{ color: 'white', fontWeight: '200', fontSize: '2rem' }}>Meet Our Photographer</h2>

                        <p style={{ textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                            recusandae totam quidem repudiandae omnis veritatis nostrum
                            laboriosam architecto optio rem, dignissimos voluptatum beatae
                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                        </p>
                        <CTAButton style={{ fontWeight: '100' }}> Learn More</CTAButton>

                    </div>
                </div>
            </div>
    );
}

export default Tabs;

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