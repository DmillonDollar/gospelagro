import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataApi from '../DataContext/DataApi'




const Admin = () => {
  const context = useContext(DataApi)
  const {products, blogs, user, order} = context
  return (
    <div>
      <h1 className='mb-4 raleway font-extrabold text-4xl'>Dashboard</h1>

      <div className='flex  flex-wrap gap-16 justify-center'>
         
              <div className=' w-[30%] flex border-2 border-black p-3  bg-black text-white flex-col items-center gap-9 rounded-md'>
                          <Link to= '/admin/allblogs' className='flex flex-col items-center gap-4'>
                          <div>
                            <h1 className=' text-2xl'>No of Agro Blogs</h1>
                          </div> 
                          
                          <div>
                          <h1 className='text-3xl'>{blogs.length}</h1>
                          </div>
                          </Link>
                  </div>


          <div className=' w-[30%] flex border-2 border-black p-3  bg-black text-white flex-col items-center gap-9 rounded-md'>
                  <Link to= '/admin/product' className='flex flex-col gap-4 items-center'>
                 <div >
                   <h1 className=' text-2xl'>Inventory</h1>
                  </div> 
                  
                  <div>
                  <h1 className='text-3xl'>{products.length}</h1>
                  </div>
                  </Link>
          </div>


          <div className=' w-[30%] flex border-2 border-black p-3  bg-black text-white flex-col items-center gap-9 rounded-md'>
                  <Link to= '/admin/user'className='flex flex-col items-center gap-4' >
                  <div>
                    <h1 className=' text-2xl'>No of Users</h1>
                   </div> 
                   
                   <div>
                   <h1 className='text-3xl'>{user.length}</h1>
                   </div>
                   </Link>
           </div>


           <div className=' w-[30%] border-2 border-black p-3  bg-black text-white  gap-9 rounded-md'>
                  <Link to= '/admin/orders'className='flex flex-col items-center gap-4'>
                      <div >
                        <h1 className=' text-2xl'>No of Orders</h1>
                      </div> 
                      
                      <div>
                      <h1 className='text-3xl '>{order.length}</h1>
                      </div>
                  </Link>
           </div>
       
      </div>
    </div>
  )
}

export default Admin