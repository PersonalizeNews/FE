import React from 'react'
import './css/Hero.css'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='hero'>
      <h1>SyncFit</h1>
      <TypeAnimation
        className='type-animation'
        sequence={[
          `오늘 기분이 너무 좋아\n신나는 노래가 듣고 싶어!`,
          1000,
          "",
        ]}
        speed={200}
        repeat={Infinity}
      />
    </div>
  )
}

export default Hero