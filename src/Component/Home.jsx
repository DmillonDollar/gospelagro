import React from 'react'
import MainLayout from './MainLayout'
import Hero from './Hero'
import Footer from '../Footer/Footer'
import SpecialOffer from './SpecialOffer'
import SpecialProduct from './SpecialProduct'
import AboutAgro from './AboutAgro'
import ScrollTrig from './ScrollTrig'
import ProductPage from './ProductPage'
import BlogHeader from './BlogHeader'
import BlogPage from './BlogPage'
import Form from './Form'
import Partner from './Partner'

const Home = () => {
  return (
    <div className='relative'>
         <div className='hero relative '>
            <MainLayout>

                  {/* Home Text */}
               <div className=' flex w-full mt-3 justify-center '> 
                <div className='flex flex-col gap-5 w-1/2 px-12'>
                       <div className=''>
                        <p className='text-white  raleway text-[1.3rem] font-thin '>AGRO</p>
                        </div>
                        <div>
                        <p className='text-5xl raleway text-[3rem] font-extrabold tracking-wide text-white'>FARMING</p>
                        </div>
                        <div>
                        <p className='raleway text-[3rem] font-extrabold tracking-wide text-white'> COMPANY</p>
                        </div>
                        <div>
                        <p className='text-xl text-white'> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                        </div>

                        <div className='text-center mb-16'>
                        <button className='border-4 border-yellow-300 px-16 py-4 rounded-full text-white font-bold hover:text-yellow-950 hover:bg-yellow-200'>
                          DISCOVER
                        </button>
                        </div>


                </div>
                       
                    
               </div> 

              <div>
              <span className='span'></span>
              </div>
        
            </MainLayout>
        </div>
                  {/* second layer */}
                  <div >
                  <SpecialOffer/>
                  <SpecialProduct/>
                  <AboutAgro/>
                  <ScrollTrig/>
                  <ProductPage/>
                  <BlogHeader/>
                  <BlogPage/>
                  <Partner/>
                  <Form/>
                  <Footer/>
                  </div>
          
       
    </div>
   
  )
}

export default Home
