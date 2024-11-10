import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import MainLayout from '../Component/MainLayout'
import Nav from '../Component/Nav'



const AdminLayout = () => {
  return (
    <div className=''>
        <div className='bg-slate-900'>
        <Nav/>
      </div>

      <div className='flex gap-11 mb-30 '>
    <ul className='flex flex-col gap-20 p-6 w-[12%] bg-slate-950 text-white   h-screen ' >
            <li className='text-[16px] font-bold hover:text-white hover:border-b-2 hover:border-b-green-400 hover:transition-colour ease-in-out delay-150 duration-75 '><Link to ='/admin'>DASHBOARD</Link></li>
            <li className='text-[16px] font-bold hover:text-white hover:border-b-2 hover:border-b-green-400  w-20 hover:transition-colour ease-in-out delay-150 duration-75'><Link to= '/admin/product'>PRODUCTS</Link></li>


            <li className='text-[16px] font-bold hover:text-white hover:border-b-2 hover:border-b-green-400  w-12 hover:transition-colour ease-in-out delay-150 duration-75'><Link to= '/admin/user'>USERS</Link></li>
           
            
            <li className='text-[16px] font-bold hover:text-white hover:border-b-2 hover:border-b-green-400  w-12 hover:transition-colour ease-in-out delay-150 duration-75'><Link to= '/admin/allblogs'>BLOGS</Link></li>


            <li className='text-[16px] font-bold hover:text-white hover:border-b-2 hover:border-b-green-400  w-14 hover:transition-colour ease-in-out delay-150 duration-75'><Link to= '/admin/orders'>ORDERS</Link></li>
        </ul>
       <div className='p-6 '>
          <Outlet/>
       </div>
     </div>
   
     

    </div>
       
       
    
  )
}

export default AdminLayout