import React from 'react'
import { Link } from 'react-router-dom'
import about from '../assets/grocies/about.png'

const AboutAgro = () => {
  return (
    <div className='grid grid-cols-3 about mt-20 px-16'>
        <div className='flex flex-col gap-14'>
            <div>
                <h1 className='raleway text-[3rem] font-extrabold'>ABOUT AGRO</h1>
                <span className='text-[3rem] font-thin font-sans text-[#b3b3b3]'>FARM COMPANY</span>
            </div>
            <div>
                <Link to= '/blog'>
                    <button className='border-4 border-[#fcdb5a] px-[28px] py-[14px] rounded-full hover:bg-[#fcdb5a] font-semibold raleway text-xs text-[#4f4a37] cursor-pointer'>
                        MORE ABOUT
                    </button> 
                </Link>  
            </div>
        </div>

        <div>
            <img src={about}/>
        </div>

        <div className='flex flex-col gap-4 text-[#4f4a37] font-light raleway text-[15px]'>
            <div>
                <p>
                Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                </p>
            </div>
            <div>
                <p>
                The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classi
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutAgro