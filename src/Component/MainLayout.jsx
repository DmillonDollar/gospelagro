import React from 'react'
import Nav from './Nav'
import Footer from '../Footer/Footer'


const MainLayout = ({children}) => {
  return (
    <div className='w-full'>
       <Nav/>
       <div className=''>
          {children}
       </div>
    </div>
       
       
    
  )
}

export default MainLayout