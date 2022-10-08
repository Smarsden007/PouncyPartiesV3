// import "./styles.css";
import React, {  useState } from "react";
import { TheCastle4hr, TheCastle8hr, TheCastle6hr, TheCastle4hrHalf, TheCastle6hrHalf, TheCastle8hrHalf, TheCastle4hrFull, TheCastle6hrfull, TheCastle8hrfull } from "./PayPalCheckOut";

export default function TestComp() {

    const [activeStuff, setActiveStuf]  = useState(<p style={{color:'white', padding: '2rem', width: '20vw'}}>Please make a selection</p>)
    function getBouncerDiv(bouncer) {
        switch (bouncer) {
            case "0":
                return <TheCastle4hr />;
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
                return <TheCastle8hrfull />;
            default:
                return null;
        }
    }
    return (
        <div className="App">
            <>
                <div>
                    <form>
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem' , marginTop:'4rem'}}>
                            <label htmlFor="tipoId" style={{ fontSize: '2rem', fontWeight: '100', color: 'white' }}>
                                Select Package
                            </label>
                            <select style={{ padding: '1rem', width: '20vw' }} onChange={ (event) => {
                                setActiveStuf(getBouncerDiv(event.target.value))
                            }}>
                                <option value="0" selected>4hr ($200)</option>
                                <option value="1" selected>6hr ($300)</option>
                                <option value="2">8hr ($400)</option>
                                <option value="3">4hr w/ Half Balloon Arch ($375)</option>
                                <option value="4">6hr w/ Half Balloon Arch ($475)</option>
                                <option value="5">8hr w/ Half Balloon Arch ($575)</option>
                                <option value="6">4hr w/ Full Balloon Arch ($425)</option>
                                <option value="7">6hr w/ Full Balloon Arch ($525)</option>
                                <option value="8">8hr w/ Full Balloon Arch ($625)</option>
                            </select>
                        </div>

                    </form>

                </div>

                {activeStuff}
            </>
        </div>
    )
}
