import React from 'react'
import MainLayout from './MainLayout'
import AboutAgro from './AboutAgro'
import farm from '../assets/grocies/farm.mp4'
import AboutText from './AboutText'
import ScrollTrig from './ScrollTrig'
import Form from './Form'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div className='relative'>
    <div className='bloghero relative  '>
       <MainLayout>
        <div className='relative'>
                
             {/* Home Text */}
             {/* <div className='overlay'></div> */}
        <video src={farm} className='w-full h-[60vh] object-cover'  autoPlay loop/>
            <div className='video-text fontHeader text-white'>
                <h1 className='font-extrabold text-5xl raleway'>ABOUT OUR COMPANY</h1>
                <p className='xl:max-w-[30rem]'>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
            </div>
        </div>

   
       </MainLayout>
   </div>
             {/* second layer */}
             <div>
              <AboutText/>
              <ScrollTrig/>
             <AboutAgro/>
             <Form/>
             <Footer/>
             </div>
   
  
</div>
  )
}

export default About