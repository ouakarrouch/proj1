import React from 'react'
import "./Hero.css"
import {PrimaryButton} from '../../components/index';

const Hero = () => {
  return (
    <div className="hero-main">
        <div className="hero-text">
            <h6 className="hero-subtitle">welcome to Cybrog</h6>
            <h4 className="hero-title"><em>Browse</em> our Popular ganes here</h4>
            <PrimaryButton>
              Browse Now
            </PrimaryButton>
            
        </div>
    </div>
  )
}

export default Hero