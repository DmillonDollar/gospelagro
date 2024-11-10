import React from 'react'
import pig from '../assets/grocies/pig.png'
import tree from '../assets/grocies/tree.png'
import fruit from '../assets/grocies/vege.png'
import vegetables from '../assets/grocies/vegetbles.png'
import wheat from '../assets/grocies/wheat.png'
import machinery from '../assets/grocies/machinery.png'

const SpecialOffer = () => {
  return (
    <div className='mt-16 flex flex-col gap-10 items-center'>
            <div className='text-4xl  '>
                  <h1 className='font-extrabold raleway tracking-widest text-center'>
                    SPECIAL <span className='font-thin  text-[#b3b3b3] font-sans '>OFFERS</span>
                  </h1>
            </div>

            <div className='font-thin  text-[#b3b3b3] flex justify-center'>
                  <p className=' xl:max-w-[30rem] font-sans leading-6 text-center'>
                  Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                  </p>
            </div>

              <div className='grid xl:grid-cols-6  lg:grid-cols-5 md:grid-cols-3 grid-cols-3 place-content-center gap-20'>
                <div className=' flex flex-col items-center gap-2'>
                      <div>
                      <img src={pig}  />
                      </div>
                      <div>
                      <p className='font-sans text-gray-700'>Farm Livestock</p>
                      
                      </div>
                </div>

                <div className=' flex flex-col items-center gap-2'>
                  <div>
                  <img src={tree}  />
                  </div>
                  <div>
                  <p className='font-sans text-gray-700'>Garden Tillage</p>
                  </div>
                </div>


                <div className=' flex flex-col items-center gap-2'>
                  <div>
                  <img src={fruit}  />
                  </div>
                  <div>
                  <p className='font-sans text-gray-700'>Fresh Fruit</p>
                  </div>
                </div>


                <div className=' flex flex-col items-center gap-2'>
                  <div>
                  <img src={vegetables}  />
                  </div>
                  <div>
                  <p className='font-sans text-gray-700'>Vegetables</p>
                  </div>
                </div>


                <div className=' flex flex-col items-center gap-2'>
                  <div>
                  <img src={wheat}  />
                  </div>
                  <div>
                  <p className='font-sans text-gray-700'>Awesome Wheat</p>
                  </div>
                </div>


                <div className=' flex flex-col items-center gap-2'>
                  <div>
                  <img src={machinery}  />
                  </div>
                  <div>
                  <p className='font-sans text-gray-700'>Agro Machinery</p>
                  </div>
                </div>

              
              </div>

           </div>
  )
}

export default SpecialOffer