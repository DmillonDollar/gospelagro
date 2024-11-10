import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo-no-background.png'
import { FaBagShopping,  FaPerson, FaX} from 'react-icons/fa6'
import { FaHamburger } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { signOut } from 'firebase/auth'
import { auth } from '../Firebase/firebase'
import { useSelector } from 'react-redux'


const Nav = () => {

  const [open , setOpen] = useState(false)

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  const navigate = useNavigate()

  // const user = localStorage.getItem("users") ?? []


const logOut = async()=>{
    try{
        // const provider = new GoogleAuthProvider()
        // await  revokeAccessToken(auth, provider)
        await signOut(auth)
        localStorage.clear()
        toast.success("Sign Out Successful")
        navigate("/login")
    }catch(error){
      toast.error("Sign Out Successful")
        
    }
}

const cartItems = useSelector((state) => state.cart)

  return (

    <div className='flex justify-between sm:px-16 py-5 px-8 sm:py-6 relative '>

      

      { open && <div className='absolute min-h-screen bg-amber-300 w-1/2 top-0 right-0'>

         <div><FaX className='w-6 h-6 text-amber-500 font-bold max-sm:right-8 max-xl:right-16 absolute top-5 cursor-pointer xl:right-8 max-lg:top-7 bg-white rounded-sm' onClick={handleOpen}/></div>
         
         <div className='flex flex-col items-center w-full absolute top-24'>
         <ul className='flex flex-col gap-8 regular items-center'>
                <li className='text-[#ffff] transition-all hover:text-white hover:bg-amber-500  w-[14rem]  rounded-md p-2 text-center cursor-pointer'><Link to='/'>Home</Link></li>
                <li className='text-[#ffff] transition-all hover:text-white  hover:bg-amber-500  w-[14rem] rounded-md text-center p-2 cursor-pointer'><Link to='/products'>Products</Link></li>
                <li className='text-[#ffff] transition-all hover:text-white hover:bg-amber-500  w-[14rem] rounded-md text-center p-2 cursor-pointer'><Link to='/blog'>Blogs</Link></li>
                <li className='text-[#ffff] transition-all hover:text-white hover:bg-amber-500  w-[14rem] text-center rounded-md p-2 cursor-pointer'><Link to='/blog'>Contacts</Link></li>

                {/* {user ?<li className='text-[#ffff] transition-all hover:text-white hover:bg-amber-500  w-[14rem] text-center rounded-md p-2 cursor-pointer'><Link to='/order'>Order</Link></li>: ''} */}
                <li className='text-[#ffff] transition-all hover:text-white hover:bg-amber-500  w-[14rem] text-center rounded-md p-2 cursor-pointer'><Link to='/order'>Order</Link></li>
                
                <li className='text-[#ffff] transition-all hover:text-white hover:bg-amber-500  w-[14rem] rounded-md text-center p-2 cursor-pointer'><Link to='/admin'>Admin</Link></li>
                {/* {user.user.email === 'favourduru24@gmail.com' ? <li className='text-[#ffff] transition-all hover:text-white hover:bg-amber-500  w-[14rem] rounded-md text-center p-2 cursor-pointer'><Link to='/admin'>Admin</Link></li> : ''} */}
                
            </ul>
         </div>
      </div>}


        <div className=''>
            <Link to='/'> 
            <img src={logo} width='150px'/>
            </Link>
        </div> 

            <div className='flex items-center gap-16 max-lg:hidden'>
            <ul className='flex gap-8 regular items-center '>
                <li className='text-[#ffff] transition-all hover:text-[#8bf50a] hover:border-b-2 hover:border-b-[#8bf50a]'><Link to='/'>Home</Link></li>
                <li className='text-[#ffff] transition-all hover:text-[#8bf50a] hover:border-b-2 hover:border-b-[#8bf50a]'><Link to='/products'>Products</Link></li>
                <li className='text-[#ffff] transition-all hover:text-[#8bf50a] hover:border-b-2 hover:border-b-[#8bf50a]'><Link to='/blog'>Blogs</Link></li>
                <li className='text-[#ffff] transition-all hover:text-[#8bf50a] hover:border-b-2 hover:border-b-[#8bf50a]'><Link to='/about'>About</Link></li>
                <li className='text-[#ffff] transition-all hover:text-[#8bf50a] hover:border-b-2 hover:border-b-[#8bf50a]'><Link to='/order'>Order</Link></li>
                {/* {user ?<li className='text-[#ffff] transition-all hover:text-[#8bf50a] hover:border-b-2 hover:border-b-[#8bf50a]'><Link to='/order'>Order</Link></li>: ""} */}

                <li className='text-[#ffff] transition-all hover:text-[#8bf50a] hover:border-b-2 hover:border-b-[#8bf50a]'><Link to='/admin'>Admin</Link></li>
                {/* {user.user.email === "favourduru24@gmail.com" ?<li className='text-[#ffff] transition-all hover:text-[#8bf50a] hover:border-b-2 hover:border-b-[#8bf50a]'><Link to='/admin'>Admin</Link></li>: ""}  */}
            </ul>
            </div>

            <div className='flex items-center gap-8 max-lg:hidden'> 
            <div className='text-[#ffff] hover:text-[#8bf50a] '><Link to='/login'><FaPerson className='w-6 h-6'/></Link></div>

            <div className='text-[#ffff] hover:text-[#8bf50a] transition-all flex flex-col'><Link to='/cart'>
              <div className='flex gap-2'>
              <FaBagShopping className='w-6 h-6'  />
              <p>{cartItems.length}</p>
                </div> 
                
                </Link>
            </div>
            <Link to= '/signup'>
           <button className='text-white px-8 py-3 hover:bg-transparent hover:border-amber-300 hover:border-2 bg-amber-300 hover:text-gray-100 transition-all rounded-full font-bold'>
               Get Started
            </button></Link>

           {/* {user ? <Link to= '/login'>
           <button className='text-white px-8 py-3 hover:bg-transparent hover:border-amber-300 hover:border-2 bg-amber-300 hover:text-gray-100 transition-all rounded-full font-bold' onClick={logOut}>
              Sign Out
            </button></Link>: <Link to= '/signup'>
           <button className='text-white px-8 py-3 hover:bg-transparent hover:border-amber-300 hover:border-2 bg-amber-300 hover:text-gray-100 transition-all rounded-full font-bold'>
               Get Started
            </button></Link> } */}
            </div>

            <div className='text-amber-300 hidden max-lg:block cursor-pointer '
            onClick={handleOpen}>
              <FaHamburger className='w-6 h-6'/>
            </div>  

            

       </div>
  )
}

export default Nav