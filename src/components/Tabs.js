import { useState } from "react";
import "./index.css";
import test from './../media/herogallery/row1img1.png'
function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                <button
                    style={{ fontWeight: '100', fontSize: '2rem' }}
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Pouncers
                </button>
                <button style={{ fontWeight: '100', fontSize: '2rem' }}
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Decorations
                </button>
                <button
                    style={{ fontWeight: '100', fontSize: '2rem' }}
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Photography
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <h2 style={{color: 'white', fontWeight: '200'}}>Our Inventory</h2>
                    <hr />
                    {/* <img src={test} /> */}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum?
                    </p>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <h2>Content 2</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                        voluptatum qui adipisci.
                    </p>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <h2>Content 3</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                        recusandae totam quidem repudiandae omnis veritatis nostrum
                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tabs;