import React from 'react'
import partner1 from '../assets/grocies/partner2.jpg'
import partner2 from '../assets/grocies/partner.jpg'
import partner3 from '../assets/grocies/partner3.jpg'
import partner4 from '../assets/grocies/partner4.jpg'
import partner5 from '../assets/grocies/partner5.jpg'

const Partner = () => {
  return (
    <div className=' mt-20'>
        <div className='mb-5 text-center'>
            <h1 className='raleway font-extrabold text-3xl'>Our Top <span className='font-sans font-thin text-[#b3b3b3]'>Partner</span></h1>
        </div>
        <div className='px-16 flex gap-[80px] justify-center'>
            <div>
                <img src={partner1}/>
            </div>

            <div>
            <img src={partner2}/> 
            </div>

            <div>
            <img src={partner3}/>
            </div>

            <div>
            <img src={partner4}/>
            </div>

            <div>
            <img src={partner5}/>
            </div>

        </div>
    </div>
  )
}

export default Partner