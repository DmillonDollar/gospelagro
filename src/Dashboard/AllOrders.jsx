import React, {useContext} from 'react'
import car from '../assets/grocies/apples.png'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DataApi from '../DataContext/DataApi'


const AllOrder = () => {
  const context = useContext(DataApi)
  const {order} = context
  // const userid = JSON.parse(localStorage.getItem('user')).user.uid
  return (
    <div>
      <h1 className='raleway mb-3 font-extrabold text-4xl'>Orders</h1>

      <div className='flex justify-center'>
          <table className='border-collapse border-2 border-white  bg-[#000000] text-white border-solid' >
          <th className='border border-white px-2 text-2xl'>ProductName</th>
          <th className='border border-white px-2 text-2xl'>UserName</th>
          <th className='border border-white px-2 text-2xl'>User PhoneNumber</th>
             <th className='border border-white px-2 text-2xl'>Payment Id</th>
             <th className='border border-white px-2 text-2xl'> Category</th>
             <th className='border border-white px-2 text-2xl'> Description</th>
             <th className='border border-white px-2 text-2xl'>Image</th>
             <th className='border border-white px-2 text-2xl'>Price</th>
             

             <tbody>
              {!order.length === 0 ?
              order.cartItems.map((items)=>{
                const {name, category, description, imageurl,price } = items;
                <tr>
                <td className='border border-white p-2 align-text-top'>{name}</td>
                <td className='border border-white p-2 align-text-top'>{order.addressinfo.name}</td>
                <td className='border border-white p-2 align-text-top'>{order.addressinfo.phonenumber}</td>
                  <td className='border border-white p-2 align-text-top'>{items.paymentId}</td>
                  <td className='border border-white px-2 align-text-top '>{category}</td>
                  <td className='border border-white p-2 align-text-top'>{description}</td>
                  <td className='border border-white p-2 '><div className='flex justify-center w-full'>
                  <img src={imageurl} width='200px'className=''/>
                    </div> </td>
                  <td className='border border-white p-2 align-text-top'>{price}</td>
  
                  <td className='border border-white p-2 '>
                    <div> 
                    {/* <Link to ='/update'>
                      <FaPenAlt className='hover:text-[#F8E231] cursor-pointer text-xl'/>
                    </Link>  */}
                    
                       <FaTrashAlt className='hover:text-[#F8E231] cursor-pointer'/>
                    </div>
                    </td>
                </tr>
              }) : <p>No Order Yet</p>
            }
             
             </tbody>


           
          </table>
      </div>
    </div>

  )
}

export default AllOrder