import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import styled from 'styled-components'

//All Check Out options for TheToddler

export const TheToddler4hr = () => {
  return (
    <div style={{width:'50vw', height:'40vh'}}>
    <PayPalScriptProvider options={{"client-id":"AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB"}}>
        <PayPalButtons createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: "1.00",
                        },
                    },
                ],
            });
        }}/>
    </PayPalScriptProvider>

    </div>
  )
}
export const TheToddler6hr = () => {
    return (
      <div style={{width:'50vw', height:'40vh'}}>
      <PayPalScriptProvider options={{"client-id":"AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB"}}>
          <PayPalButtons createOrder={(data, actions) => {
              return actions.order.create({
                  purchase_units: [
                      {
                          amount: {
                              value: "2.00",
                          },
                      },
                  ],
              });
          }}/>
      </PayPalScriptProvider>
  
      </div>
    )
  }
  export const TheToddler8hr = () => {
    return (
      <div style={{width:'50vw', height:'40vh'}}>
      <PayPalScriptProvider options={{"client-id":"AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB"}}>
          <PayPalButtons createOrder={(data, actions) => {
              return actions.order.create({
                  purchase_units: [
                      {
                          amount: {
                              value: "3.00",
                          },
                      },
                  ],
              });
          }}/>
      </PayPalScriptProvider>
  
      </div>
    )
  }

  export const TheCastle4hr = () => {
    return (
      <div style={{width:'50vw', height:'40vh'}}>
      <PayPalScriptProvider options={{"client-id":"AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB"}}>
          <PayPalButtons createOrder={(data, actions) => {
              return actions.order.create({
                  purchase_units: [
                      {
                          amount: {
                              value: "1.00",
                          },
                      },
                  ],
              });
          }}/>
      </PayPalScriptProvider>
  
      </div>
    )
  }
  export const TheCastle6hr = () => {
      return (
        <div style={{width:'50vw', height:'40vh'}}>
        <PayPalScriptProvider options={{"client-id":"AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB"}}>
            <PayPalButtons createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: "2.00",
                            },
                        },
                    ],
                });
            }}/>
        </PayPalScriptProvider>
    
        </div>
      )
    }
    export const TheCastle8hr = () => {
      return (
        <div style={{width:'20vw', height:'40vh',padding: '2rem'}}>
        <PayPalScriptProvider options={{"client-id":"AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB"}}>
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
            }}/>
            
        </PayPalScriptProvider>
    
        </div>
      )
    }