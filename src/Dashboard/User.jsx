import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import DataApi from '../DataContext/DataApi'

const User = () => {
  const context = useContext(DataApi)
  const {user} = context
  return (
    <div>
    <h1>User</h1>

    <div className='flex'>
        <table className='border-collapse border-2 border-white  bg-[#000000] text-white border-solid' >
           <th className='border border-white px-2 text-2xl'>UserName</th>
           <th className='border border-white px-2 text-2xl'>User Email</th>
           <th className='border border-white px-2 text-2xl'>Account Creation Date</th>
           
             <tbody>
             {!user.length === 0  ? user.map((item)=>{
               const {name,uid,email,date} = item;
             <tr>
             
           
               <td className='border border-white p-2 align-text-top'>{name}</td>
               <td className='border border-white px-6 align-text-top '>{email}</td>
               <td className='border border-white p-2 align-text-top'>{date}</td>
              
               
 
               <td className='border border-white p-2 '><div> 
                    <FaTrashAlt className='hover:text-[#F8E231] cursor-pointer text-xl'/>
                 </div>
                 </td>
         
             </tr>
                }) :<p className='text-red-300 text-3xl font-extrabold'>No Active User Yet</p>}
            </tbody>
          
        </table>
    </div>
  </div>
  )
}

export default User