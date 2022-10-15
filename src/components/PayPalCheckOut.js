import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import styled from "styled-components";

//All Check Out options for TheToddler
//Regular Rentals
export const TheCastle4hr = () => {
    return (
        <PayPalDiv style={{ padding: '1rem' }}>
            <PayPalScriptProvider options={{ "client-id": "AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB" }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: $200.00</h2>

                <PayPalButtons style={{
                    color: "black",
                    layout: "vertical",
                    height: 48,
                    width: 200,
                    tagline: false,
                    shape: "rect"
                }} createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "2.00",
                                },
                            },
                        ],
                    });
                }} />
            </PayPalScriptProvider>

        </PayPalDiv>
    )
}
export const TheCastle6hr = () => {
    return (
        <PayPalDiv style={{ padding: '1rem' }}>
            <PayPalScriptProvider options={{ "client-id": "AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB" }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: $300.00</h2>

                <PayPalButtons style={{
                    color: "black",
                    layout: "vertical",
                    height: 48,
                    width: 200,
                    tagline: false,
                    shape: "rect"
                }} createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "2.00",
                                },
                            },
                        ],
                    });
                }} />
            </PayPalScriptProvider>

        </PayPalDiv>
    )
}
export const TheCastle8hr = () => {
    return (
        <PayPalDiv style={{ padding: '1rem' }}>
            <PayPalScriptProvider options={{ "client-id": "AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB" }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: $400.00</h2>

                <PayPalButtons style={{
                    color: "black",
                    layout: "vertical",
                    height: 48,
                    width: 200,
                    tagline: false,
                    shape: "rect"
                }} createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "2.00",
                                },
                            },
                        ],
                    });
                }} />
            </PayPalScriptProvider>

        </PayPalDiv>
    )
}
//Rental with half-arch
export const TheCastle4hrHalf = () => {
    return (
        <div style={{ width: '30vw', height: '40vh', padding: '2rem' }}>
            <PayPalScriptProvider options={{ "client-id": "AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB" }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: <span style={{color:'black'}}>$375.00 </span> + Taxes</h2>
                <PayPalButtons style={{
                    color: "white",
                    layout: "vertical",
                    height: 48,
                    width: 200,
                    tagline: false,
                    shape: "rect"
                }} createOrder={(data, actions) => {
                    return actions.order.create({

                        purchase_units: [
                            {
                                amount: {
                                    value: "3.00",
                                },

                            },
                        ],
                    });
                }} />

            </PayPalScriptProvider>

        </div>
    )
}
export const TheCastle6hrHalf = () => {
    return (
        <div style={{ width: '30vw', height: '40vh', padding: '2rem' }}>
            <PayPalScriptProvider options={{ "client-id": "AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB" }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: $475.00</h2>

                <PayPalButtons style={{
                    color: "white",
                    layout: "vertical",
                    height: 48,
                    width: 200,
                    tagline: false,
                    shape: "rect"
                }} createOrder={(data, actions) => {
                    return actions.order.create({

                        purchase_units: [
                            {
                                amount: {
                                    value: "3.00",
                                },

                            },
                        ],
                    });
                }} />

            </PayPalScriptProvider>

        </div>
    )
}
export const TheCastle8hrHalf = () => {
    return (
        <div style={{ width: '30vw', height: '40vh', padding: '2rem' }}>
            <PayPalScriptProvider options={{ "client-id": "AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB" }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: $575.00</h2>

                <PayPalButtons style={{
                    color: "white",
                    layout: "vertical",
                    height: 48,
                    width: 200,
                    tagline: false,
                    shape: "rect"
                }} createOrder={(data, actions) => {
                    return actions.order.create({

                        purchase_units: [
                            {
                                amount: {
                                    value: "3.00",
                                },

                            },
                        ],
                    });
                }} />

            </PayPalScriptProvider>

        </div>
    )
}
//Rental with full-arch

export const TheCastle4hrFull = () => {
    return (
        <div style={{ width: '30vw', height: '40vh', padding: '2rem' }}>
            <PayPalScriptProvider options={{ "client-id": "AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB" }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: $425.00</h2>

                <PayPalButtons style={{
                    color: "white",
                    layout: "vertical",
                    height: 48,
                    width: 200,
                    tagline: false,
                    shape: "rect"
                }} createOrder={(data, actions) => {
                    return actions.order.create({

                        purchase_units: [
                            {
                                amount: {
                                    value: "00.01",
                                },

                            },
                        ],
                    });
                }} />

            </PayPalScriptProvider>

        </div>
    )
}
export const TheCastle6hrfull = () => {
    return (
        <div style={{ width: '30vw', height: '40vh', padding: '2rem' }}>
            <PayPalScriptProvider options={{ "client-id": "AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB" }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: $525.00</h2>

                <PayPalButtons style={{
                    color: "white",
                    layout: "vertical",
                    height: 48,
                    width: 200,
                    tagline: false,
                    shape: "rect"
                }} createOrder={(data, actions) => {
                    return actions.order.create({

                        purchase_units: [
                            {
                                amount: {
                                    value: "3.00",
                                },

                            },
                        ],
                    });
                }} />

            </PayPalScriptProvider>

        </div>
    )
}
export const TheCastle8hrfull = () => {
    return (
        <div style={{ width: '30vw', height: '40vh', padding: '2rem' }}>
            <PayPalScriptProvider options={{ "client-id": "AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB" }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: $625.00</h2>

                <PayPalButtons style={{
                    color: "white",
                    layout: "vertical",
                    height: 48,
                    width: 200,
                    tagline: false,
                    shape: "rect"
                }} createOrder={(data, actions) => {
                    return actions.order.create({

                        purchase_units: [
                            {
                                amount: {
                                    value: "3.00",
                                },

                            },
                        ],
                    });
                }} />

            </PayPalScriptProvider>

        </div>
    )
}

export const PayPalDiv = styled.div`
width: 25vw;
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    width: 60vw;
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
}
`