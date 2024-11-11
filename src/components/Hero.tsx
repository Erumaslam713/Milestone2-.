import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero'className='min-h-screen bg-no-repeat bg-[url (\public/banner.jpeg  )]  bg-left  lg:bg-[15%] bg-cover'
        style={{backgroundSize: "35%" , backgroundPosition:"left100px top 100px "}}>
      <Navbar/>
      <div className='container grid lg:grid-cols-2 h-[calo(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
            <div >
                <p data-aos="zoom-in-up">I'm</p>
                <p data-aos="zoom-in-up">Erum</p>
                <p data-aos="zoom-in-up">Aslam</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
