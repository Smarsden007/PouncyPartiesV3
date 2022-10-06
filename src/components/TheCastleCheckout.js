import React from 'react'
import { ColDiv, RowDiv, } from './CastleRental'
import TestComp from './TestComp'
import castle from '../media/Classic.png'

export const TheCastleCheckout = () => {
  return (
    <ColDiv>
                        <RowDiv style={{ padding: '3rem' }}>
                            <ColDiv style={{ width: '30vw', padding: '1rem' }}>
                                <h1 style={{ fontSize: '3rem', fontWeight: '100', color: 'white' }} >The Classic Castle</h1>
                                <img style={{ borderRadius: '1rem' }} src={castle} />
                                <p>total 1</p>
                                <p> We currently offer 3 style options and 2 different sizes. We have our Classic Castle and the Bastille that measures 13' in width and 13' in length. In addition to these we also have The Toddler which is 8' in width and 8' in length with a netting surrounding to keep an eye on the little ones.</p>
                            </ColDiv>
                            <TestComp />
                        </RowDiv>
                    </ColDiv>
  )
}
