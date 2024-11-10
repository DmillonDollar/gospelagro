import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import cattle from '../assets/grocies/cattle.png'
import harvest from '../assets/grocies/harvesta.png'
import farms from '../assets/grocies/farms.png'
import technic from '../assets/grocies/technic.png'

const ScrollTrig = () => {
  const [countup, setCountup] = useState(false)
  return (
    <div className='grid grid-cols-4 mt-20 px-16 py-24 raleway bg-[#fcdb5a]  place-content-center'>
      {/* first */}
        <div className='flex gap-2'>
            <div>
                <img src={harvest}/>
            </div>
            
            <div>
                  <ScrollTrigger onEnter={()=> setCountup(true)} onExit={()=> setCountup(false)}>
                      <h1 className='text-4xl font-extrabold 
                       leading-14'>
                        {
                          countup && <CountUp start={0} end={19500} duration={2.75}/>
                        }
                        
                      </h1>
                  </ScrollTrigger>

                <p className='text-[#4f4a37] font-bold'>Tons of Harvesta</p>
            </div>
        </div>

{/* second */}

        <div className='flex gap-2'>
            <div>
                <img src={cattle}/>
            </div>
            
            <div>
                  <ScrollTrigger onEnter={()=> setCountup(true)} onExit={()=> setCountup(false)}>
                      <h1 className='text-4xl font-extrabold 
                       leading-14'>
                        {
                          countup && <CountUp start={0} end={2720} duration={2.75}/>
                        }
                        
                      </h1>
                  </ScrollTrigger>

                <p className='text-[#4f4a37] font-bold'>Units of Cattle</p>
            </div>
        </div>


{/* third */}
        <div className='flex gap-2'>
            <div>
                <img src={farms}/>
            </div>
            
            <div>
                  <ScrollTrigger onEnter={()=> setCountup(true)} onExit={()=> setCountup(false)}>
                      <h1 className='text-4xl font-extrabold 
                       leading-14'>
                        {
                          countup && <CountUp start={0} end={1000} duration={2.75}/>
                        }
                        
                      </h1>
                  </ScrollTrigger>

                <p className='text-[#4f4a37] font-bold'>Hectares of farm</p>
            </div>
        </div>


{/* fourth */}
        <div className='flex gap-2'>
            <div>
                <img src={technic}/>
            </div>
            
            <div>
                  <ScrollTrigger onEnter={()=> setCountup(true)} onExit={()=> setCountup(false)}>
                      <h1 className='text-4xl font-extrabold 
                       leading-14'>
                        {
                          countup && <CountUp start={0} end={128} duration={2.75}/>
                        }
                        
                      </h1>
                  </ScrollTrigger>

                <p className='text-[#4f4a37] font-bold'>Units of technic</p>
            </div>
        </div>
    </div>
  )
}

export default ScrollTrig