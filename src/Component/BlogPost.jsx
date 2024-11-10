import React from 'react'
import { Link } from 'react-router-dom'

const BlogPost = () => {
  return (
    <div className='relative'>
        <div className='grid grid-cols-3 px-16 gap-6 '>
            <div className='blog1 px-3'>
                <div className='bg-[#fcdb5a] w-14 text-center font-bold text-[1.3rem] p-2'> <h1>3 <span className='font-sans font-medium text-[15px] text-[#b3b3b3]'>Dec</span></h1></div>
            </div>

            <div className='blog2 px-3'>
                <div className='bg-[#fcdb5a] w-14 text-center font-bold text-[1.3rem] p-2'> <h1>3 <span className='font-sans font-medium text-[15px] text-[#b3b3b3]'>Dec</span></h1></div>
            </div>

            <div className='blog3 px-3'>
                <div className='bg-[#fcdb5a] w-14 text-center font-bold text-[1.3rem] p-2'> <h1>3 <span className='font-sans font-medium text-[15px] text-[#b3b3b3]'>Dec</span></h1></div>
            </div>
        </div>


        <div className='grid grid-cols-3 px-16 gap-6 text-center absolute top-44 left-5'>
          <div className='p-6 raleway bg-white w-[90%] '>
            <h3 className='text-[#fcdb5a] text-[14px] leading-10 '>DIET/TIPS & GUIDES </h3>
            <h4 className='text-[20px] leading-10 font-bold'> Tips for Ripening your Fruit</h4>
            <p className='mb-8'>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
              <div>
                  <Link to= '/blog'>
                      <button className='border-4 border-[#fcdb5a] px-[28px] py-[14px] rounded-full hover:bg-[#fcdb5a] font-semibold raleway text-xs text-[#4f4a37] cursor-pointer'>
                          READ MORE
                      </button> 
                  </Link>  
              </div>
          </div>

          <div className='p-6 raleway bg-white w-[90%] '>
            <h3 className='text-[#fcdb5a] text-[14px] leading-10 '>ORGANIC FOOD/TIPS & GUIDES </h3>
            <h4 className='text-[20px] leading-10 font-bold'> Health Benefit of a Raw Food</h4>
            <p className='mb-8'>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>

            <div>
                  <Link to= '/blog'>
                      <button className='border-4 border-[#fcdb5a] px-[28px] py-[14px] rounded-full hover:bg-[#fcdb5a] font-semibold raleway text-xs text-[#4f4a37] cursor-pointer'>
                          READ MORE
                      </button> 
                  </Link>  
              </div>
          </div>

          <div className='p-6 raleway bg-white w-[90%] '>
            <h3 className='text-[#fcdb5a] text-[14px] leading-8 '>DIET/ORGANIC FOOD & GUIDES </h3>
            <h4 className='text-[20px] leading font-bold'> Super Foods you should be eating</h4>
            <p className='mb-8'>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>

            <div>
                  <Link to= '/blog'>
                      <button className='border-4 border-[#fcdb5a] px-[28px] py-[14px] rounded-full hover:bg-[#fcdb5a] font-semibold raleway text-xs text-[#4f4a37] cursor-pointer'>
                          READ MORE
                      </button> 
                  </Link>  
              </div>
          </div>
              
        </div>

        

    </div>

  
 
    
  )
}

export default BlogPost