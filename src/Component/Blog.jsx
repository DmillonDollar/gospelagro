import React from 'react'
import MainLayout from './MainLayout'
import BlogHeader from './BlogHeader'
import BlogPage from './BlogPage'
import Form from './Form'
import Footer from '../Footer/Footer'

const Blog = () => {
  return (
    <div className='relative'>
         <div className='bloghero relative '>
            <MainLayout>

                  {/* Home Text */}
               <div className=' flex w-full mt-10 '> 
                        <div className='flex flex-col gap-5 w-1/2 px-16'>
                              {/* <div>
                                <p className='text-white  raleway text-[1.3rem] font-thin '>AGRO</p>
                                </div> */}
                                <div>
                                <p className='text-5xl raleway text-[3rem] font-extrabold tracking-wide text-white'>BLOG</p>
                                </div>
                  
                            <div>
                            <p className='text-xl text-white mb-40'> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                            </div>

                          {/* <div className='text-center mb-16'>
                          <button className='border-4 border-yellow-300 px-16 py-4 rounded-full text-white font-bold hover:text-yellow-950 hover:bg-yellow-200'>
                            DISCOVER
                          </button>
                          </div> */}
                      </div>
                       
                    
                </div> 
        
            </MainLayout>
        </div>
                  {/* second layer */}
           <BlogHeader/>
           <BlogPage/>
           <Form/>

        <Footer/>
       
    </div>
  )
}

export default Blog