import React from 'react'
import image from '../assets/grocies/pexels-mikhail-nilov-6981004.jpg'
import MainLayout from './MainLayout'

const BlogSingle = () => {
  return (
    <div className='relative'>
       <div className='bloghero relative  '>
          <MainLayout>
                <div className='flex gap-4'>
                    <div className='w-1/2'>
                        <img/>
                    </div>
                    <div className='w-1/2 flex flex-col gap-3'>
                        <h1>Blog Title</h1>
                        <h4>Blog Subtitle </h4>
                        <p>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem, ipsum natus nobis delectus animi exercitationem voluptas odit vel harum expedita, perspiciatis voluptate perferendis earum.".slice(0, 80)}......</p>
                        <div className='flex gap-3 items-center'>
                        <img src= {image} className='w-10 h-10 rounded-[50%]'/>
                        <div className='blog'>

                        </div>
                        <p>Written by Rachael</p>
                        </div>
                        
                    </div>
                </div>
            </MainLayout>
        </div>
    </div>
       
    
  )
}

export default BlogSingle