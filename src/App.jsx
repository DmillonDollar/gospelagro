import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Product from './Component/Product'
import Blog from './Component/Blog'
import Order from './Component/Order'
import Login from './Registration/Login'
import Admin from './Dashboard/Admin'
import About from './Component/About'
import { ToastContainer } from 'react-toastify'
import SignUp from './Registration/SignUp'
import AllBlog from './Dashboard/AllBlog'
import AllProduct from './Dashboard/AllProduct'
import User from './Dashboard/User'
import AdminLayout from './Dashboard/AdminLayout'
import AllOrders from './Dashboard/AllOrders'
import AddBlog from './Add-Update Form/AddBlog'
import UpdateBlog from './Add-Update Form/UpdateBlog'
import AddProduct from './Add-Update Form/AddProduct'
import UpdateProduct from './Add-Update Form/UpdateProduct'
import BlogSingle from './Component/BlogSingle'
import ProductInfo from './Component/ProductInfo'
import Cart from './Component/Cart'
import  Missing from './Component/Missing'

const App = () => {
  return (
    <Router>
      <Routes>
      
      <Route  path='/' element = {<Home/>}/>
      <Route  path='/products' element = {<Product/>}/>
      <Route  path='/cart' element = {<Cart/>}/>
      <Route  path='/productinfo/:id' element = {<ProductInfo/>}/>
      <Route  path='/about' element = {<About/>}/>
      <Route  path='/blog' element = {<Blog/>}/>
      <Route  path='/blogsinfo/:id' element = {<BlogSingle/>}/>

      {/* <Route  path='/order' element = {
        <ProtectedRoute>  <Order/></ProtectedRoute>
      }/> */}
      <Route  path='/order' element = {
          <Order/>
      }/>
      <Route  path='/login' element = {<Login/>}/>
      <Route  path='/signup' element = {<SignUp/>}/>
      <Route  path='/admin' element = {<AdminLayout/>}>
        {/* <Route index element ={
          <ProtectedAdmin>  <Admin/></ProtectedAdmin>
        }/> */}
        <Route index element ={
         <Admin/>
        }/>
        <Route path='orders' element={<AllOrders/>}/>
        <Route path='allblogs' element={<AllBlog/>} />
        <Route path='user' element={<User/>} />
        <Route path='product' element={<AllProduct/>} />
      
      </Route>
    {/* <Route path='/addproduct' element = {
          <ProtectedAdmin> <AddProduct/> </ProtectedAdmin>
  } /> */}
  <Route path='/addproduct' element = {
          <AddProduct/>
  } />
    {/* <Route path='/updateproduct' element = {
       <ProtectedAdmin> <UpdateProduct/> </ProtectedAdmin>
  } /> */}
   <Route path='/updateproduct' element = {
        <UpdateProduct/> 
  } />
    {/* <Route path='/addblog' element = {
       <ProtectedAdmin> <AddBlog/> </ProtectedAdmin>
  } /> */}
   <Route path='/addblog' element = {
        <AddBlog/>
  } />
    {/* <Route path='/updateblog' element = {
       <ProtectedAdmin> <UpdateBlog/> </ProtectedAdmin>
  } /> */}
   <Route path='/updateblog' element = {
        <UpdateBlog/>
  } />
  <Route path= '*' element={<Missing/>}/>
      
    </Routes>
      <ToastContainer/>
    </Router>
    
  )
}

export default App


// const ProtectedRoute = ({children})=> {
//   const user = localStorage.getItem("user")
//   if(user){
//     return children
//   }
//   else{
//     return Navigate('/login')
//   }
// }

// const ProtectedAdmin=({children})=>{
//   const users = localStorage.getItem("user")  
//     const user = JSON.parse(users)
//     if(user.user.email==="favourduru24@gmail.com"){
//       return children
//     }else{
//       return Navigate('/login')
//     }
// }