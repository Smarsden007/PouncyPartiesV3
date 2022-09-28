import React from "react"
import './GallerySection.css'

import img1 from './../media/herogallery/row1img1.png'
import img2 from './../media/herogallery/row1img2.png'
import img3 from './../media/herogallery/row1img3.png'
import img21 from './../media/herogallery/row2img1.png'
import img22 from './../media/herogallery/row2img2.png'
import img23 from './../media/herogallery/row2img3.png'
import img31 from './../media/herogallery/row3img1.png'
import img32 from './../media/herogallery/row3img2.png'
import img33 from './../media/herogallery/row3img3.png'

export default function HomeGallery(props) {
    return (
        <section className="galsection">
            <div className="row">
  <div className="column">
    <img alt='img' style={{padding:'.5rem'}} src={img1}/>
    <img alt='img' style={{padding:'.5rem'}} src={img2}/>
    <img alt='img' style={{padding:'.5rem'}} src={img3}/>
  
    
  </div>
  <div className="column">
    <img alt='img' style={{padding:'.5rem'}} src={img21}/>
    <img alt='img' style={{padding:'.5rem'}} src={img22}/>
    <img alt='img' style={{padding:'.5rem'}} src={img23}/>
 
  </div>
  <div className="column">
    <img alt='img' style={{padding:'.5rem'}} src={img31}/>
    <img alt='img' style={{padding:'.5rem'}} src={img32}/>
    <img alt='img' style={{padding:'.5rem'}} src={img33}/>
   
    
  </div>
 
</div>
        </section>
    )
}