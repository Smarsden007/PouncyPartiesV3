import React from 'react'

import { InlineWidget } from 'react-calendly';
import { RowDiv } from './CastleRental';

export const CalendlyRun = () => {

  return (
    <RowDiv>
    <div style={{width:'100vw'}}>
        <InlineWidget
                
                url={"https://calendly.com/hello-pouncy?background_color=e6beae&text_color=fdfdfd&primary_color=ffffff"}
                
            />
        

      </div>
      </RowDiv>
  )
}

