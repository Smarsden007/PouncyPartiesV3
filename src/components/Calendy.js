import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

const Calendly = () => {
   
    
    return (
      <div style={{width:'70vw'}}>
        <InlineWidget
                url={"https://calendly.com/hello-pouncy"}
                
            />
        

      </div>

    );

}
    
export default Calendly;