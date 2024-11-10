import React from 'react'
import { Link } from 'react-router-dom'


const ProductPage = () => {
  return (
    <div className='mt-20 px-16'>
        <div>
            <div className='flex gap-4 mb-6'>
                <div className='raleway w-1/2'>
                    <h1 className='text-5xl font-extrabold leading-[80px]'>AGRO <span className='font-thin font-sans text-[#b3b3b3]'>PRODUCTS</span></h1>
                    <p className='raleway font-thin text-[15px] mb-10'>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                    
                    <Link to= '/product'>
                    <button className='border-4 border-[#fcdb5a] px-[28px] py-[14px] rounded-full hover:bg-[#fcdb5a] font-semibold raleway text-xs text-[#4f4a37] cursor-pointer mb-4'>
                        MORE PRODUCT
                    </button> 
                    </Link>
                
                </div>
                <div className='raleway w-[25%] fruit flex items-center justify-center hover:opacity-60'>
                    <Link to= '/products'>
                    <h1 className='font-extrabold text-4xl text-white'>FRUITS</h1>
                    </Link>
                </div>

                <div className='raleway w-[25%] vege flex items-center justify-center hover:opacity-60'>
                    <Link to= '/products'>
                    <h1 className='font-extrabold text-4xl text-white'>VEGETABLES</h1>
                    </Link>
                </div>

            </div>


            {/* second part */}

            <div className='flex gap-4'>
                
                <div className='raleway w-[25%] wheat flex items-center justify-center hover:opacity-60'>
                    <Link to= '/products'>
                    <h1 className='font-extrabold text-4xl text-white'>WHEAT</h1>
                    </Link>
                </div>

                <div className='raleway w-[25%] sun flex items-center justify-center hover:opacity-60'>
                    <Link to= '/products'>
                    <h1 className='font-extrabold text-4xl text-white '>SUNLIGHT</h1>
                    </Link>
                </div>

                <div className='raleway w-[50%] spice flex items-center justify-center hover:opacity-60'>
                    <Link to= '/products'>
                    <h1 className='font-extrabold text-4xl text-white'>FARM PRODUCTS</h1>
                    </Link>
                </div>

            </div>
            
           
        </div>
    </div>
  )
}

export default ProductPage