import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='hero'>Hero
    <div className='flex-1 pt-36 padding-x'><h1 className="her0_title">
        Find, book, or rent a car - quickly and easily!
    </h1>
    <p className="hero_subtitle">
        Streamline your car rental experience with our effortless booking process/
    </p>
    <CustomButton/>
    </div>
    </div>
  )
}

export default Hero