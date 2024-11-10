import React from 'react'
import { Link } from 'react-router-dom'

const AboutText = () => {
  return (
    <div className='abouthero mt-20 flex flex-col gap-5 px-16 raleway mb-10'>
        <div>
            <h1 className='font-extrabold text-3xl'>WE ARE <span className='font-thin  text-[#b3b3b3] font-sans'>AGRICULTURE FARM</span></h1>
        </div>
        <div className='flex flex-col gap-8 max-w-[50%] font-thin   font-sans'>
            <p>We believe in helping brands create through strategy, story-telling, digital products, and integrated experiences on web, mobile, and in the world. And you’re here, friends, because you also believe.</p>
            <p>Our team has a passion for making things with real value. This has led us to assemble a multi-talented group that can do just about anything: from building sets to photographing food, crafting websites to developing apps, beautiful design to adventure cinematography. Designers, engineers, creatives, makers, developers, artists, unite. Let’s do something real-special together.</p>
            <p>Our team has a passion for making things with real value. This has led us to assemble a multi-talented group that can do just about anything: from building sets to photographing food, crafting websites to developing apps, beautiful design to adventure cinematography. Designers, engineers, creatives, makers, developers, artists, unite. Let’s do something real-special together.</p>

            <div>
                <Link to= '/blog'>
                    <button className='border-4 border-[#fcdb5a] px-[28px] py-[14px] rounded-full hover:bg-[#fcdb5a] font-semibold raleway text-xs text-[#4f4a37] cursor-pointer'>
                        MORE ABOUT
                    </button> 
                </Link>  
            </div>
        </div>
    </div>
  )
}

export default AboutText