import React from 'react'
import { ColDiv, RowDiv, } from './CastleRental'
import TestComp from './TestComp'
import castle from '../media/Classic.png'

export const TheCastleCheckout = () => {
  return (
    <ColDiv>
                        <RowDiv style={{ padding: '2rem', height: 'auto' , overflowWrap: "break-a"}}>
                            <ColDiv style={{ width: '30vw', height:'40vw', padding: '1rem' }}>
                                <h1 style={{ fontSize: '3rem', fontWeight: '100', color: 'white' }} >The Classic Castle</h1>
                                <img alt="productimage"style={{ borderRadius: '1rem' , width: '20vw'}} src={castle} />
                                <p style={{ fontSize: '2rem', fontWeight: '300'}}>Every Rental Includes:</p>
                                <p style={{paddingLeft: '1rem', positon: 'fixed',fontSize: '1.5rem'}}>🎈Entrance Turf</p>
                                <p style={{paddingLeft: '1rem',positon: 'fixed',fontSize: '1.5rem'}}>🎈Shoe Rack</p>
                                <p style={{paddingLeft: '1rem',positon: 'fixed',fontSize: '1.5rem'}}>🎈Rules Sign (Customization Available)</p>
                                <p style={{paddingLeft: '1rem',positon: 'fixed',fontSize: '1.5rem'}}>🎈Blower & 25FT Extention Cord</p>
                                <p style={{ fontSize: '2rem',  fontWeight: '300'}}>Addtional Information:</p>
                                <p style={{paddingLeft: '1rem',positon: 'fixed',fontSize: '1rem'}}>🎈Generator Available Upon Request ($50 Charge)</p>
                                <p style={{paddingLeft: '1rem',positon: 'fixed',fontSize: '1rem'}}>🎈Free Delivery in Marin and Sonoma County</p>
                            </ColDiv>
                            <TestComp />
                        </RowDiv>
                    </ColDiv>
  )
}
//need to go through and make all text boxes responsive and have the entire component flex column on mobile.
