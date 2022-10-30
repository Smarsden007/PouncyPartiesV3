import React, { useRef, useEffect } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import styled from "styled-components";

//All Check Out options for TheToddler
//Regular Rentals
export const TheCastle4hr = () => {
    return (
        <PayPalDiv style={{ padding: '1rem' }}>
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
                                    value: "200.00",
                                },
                            },
                        ],
                    });
                }} />

        </PayPalDiv>
    )
}
export const TheCastle6hr = () => {
    return (
        <PayPalDiv style={{ padding: '1rem' }}>
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
                                    value: "300.00",
                                },
                            },
                        ],
                    });
                }} />

        </PayPalDiv>
    )
}
export const TheCastle8hr = () => {
    return (
        <PayPalDiv style={{ padding: '1rem' }}>
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
                                    value: "400.00",
                                },
                            },
                        ],
                    });
                }} />

        </PayPalDiv>
    )
}
//Rental with half-arch
export const TheCastle4hrHalf = () => {
    return (
        <PayPalDiv style={{ padding: '1rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: $375.00</h2>

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
                                    value: "375.00",
                                },
                            },
                        ],
                    });
                }} />

        </PayPalDiv>
    )
}
export const TheCastle6hrHalf = () => {
    return (
        <PayPalDiv style={{ padding: '1rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: $475.00</h2>

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
                                    value: "475.00",
                                },
                            },
                        ],
                    });
                }} />

        </PayPalDiv>
    )
}
export const TheCastle8hrHalf = () => {
    return (
        <PayPalDiv style={{ padding: '1rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: $575.00</h2>

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
                                    value: "575.00",
                                },
                            },
                        ],
                    });
                }} />

        </PayPalDiv>
    )
}
//Rental with full-arch

export const TheCastle4hrFull = () => {
    return (
        <PayPalDiv style={{ padding: '1rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: $425.00</h2>

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
                                    value: "425.00",
                                },
                            },
                        ],
                    });
                }} />
   

        </PayPalDiv>
    )
}
export const TheCastle6hrfull = () => {
    return (
        <PayPalDiv style={{ padding: '1rem' }}>
            
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: $525.00</h2>

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
                                    value: "525.00",
                                },
                            },
                        ],
                    });
                }} />
         

        </PayPalDiv>
    )
}
export const TheCastle8hrfull = () => {
    return (
        <PayPalDiv style={{ padding: '1rem' }}>
           
                <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white' }}>Total: $625.00</h2>

                <PayPalButtons style={{
                    color: "black",
                    layout: "vertical",
                    height: 48,
                    width: 200,
                    tagline: false,
                    shape: "rect"
                }} createOrder={(data, actions,err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                amount: {
                                    value: "625.00",
                                },
                            },
                        ],
                        onApprove: async (data, actions ) => {
                            const order = await actions.order.capture();
                            
                            return actions.order.capture().then(function(details) {
                                                alert('Transaction completed by ' + details.payer.name.given_name);
                                              });
                        },
                        onError: (err) => {
                            console.log(err)
                        }
                    }
                    );
                    
                }} />

        </PayPalDiv>
    )
}
//test
// export function TheCastle8hrfull() {
//     const paypal = useRef();
//     useEffect(() => {
//       window.paypal
//         .Buttons({
//           createOrder: (data, actions, err) => {
//              actions.order.create({
//               intent: "CAPTURE",
//               purchase_units: [
//                 {
//                   description: "Cool looking table",
//                   amount: {
//                     currency_code: "USD",
//                     value: 650.0,
//                   },
//                 },
//               ],
//             });
//           },
//           onApprove: async (data, actions) => {
//             const order = await actions.order.
//             capture();
//             console.log(order);
//             return actions.order.capture().then(function(details) {
//                 alert('Transaction completed by ' + details.payer.name.given_name);
//               });
//           },
//           onError: (err) => {
//             console.log(err);
//           },
//         })
//         .render(paypal.current);
//     }, [1]);
  
//     return (
//       <div>
//         <div ref={paypal}></div>
//       </div>
//     );
//   }

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