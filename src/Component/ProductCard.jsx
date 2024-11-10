import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart } from '../Redux/CartSlice'
// import { Navigate } from 'react-router-dom'
import DataApi from '../DataContext/DataApi'
import { Link } from 'react-router-dom'
// 

const  ProductCard = ()=> {
    // const context = useContext(myContext)
    // const { mode, product,  } = context;
    const context = useContext(DataApi)
    const {products, searchkey,filterType, filterPrice} = context

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    console.log(cartItems)

    // add to cart
    const addCart = (product) => {
        dispatch(addToCart(product))
        toast.success('add to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])



    

    return (
        <section className="text-gray-600 raleway">
            <div className=" px-16 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" >Our Latest Collection</h1>
                    <div className="h-1 w-20 bg-[rgb(252,219,90)] rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {products.length > 0 ? products.filter((obj) => obj.name.toLowerCase().includes(searchkey))
                        .filter((obj) => obj.category.toLowerCase().includes(filterType))
                        .filter((obj) => obj.price.includes(filterPrice)).map((item, index) => {
                            const { name, price, imageUrl, id } = item;
                            return (
                                <div  className="p-4 md:w-1/4  drop-shadow-lg ">
                                    <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" >
                                        <div className="flex justify-center cursor-pointer" >

                                            <Link  to={`/productinfo/${id}`}>
                                            <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={item.images[0]} alt="blog"/>
                                            </Link>
                                          
                                            {/* <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={item.images[0]} alt="blog"  onClick={()=> window.location.href = `/productinfo/${item.id}`}/> */}

                                        </div>
                                        <div className="p-5 border-t-2">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" >Agro Collection</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{name}</h1>
                                            {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                            <p className="leading-relaxed mb-3">$ {price}</p>
                                            <div className=" flex justify-center">
                                                <button onClick={() => addCart(item)} type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        }): <p className='text-red-500 flex jusity-center items-center text-3xl'>Reload the site</p>}
                </div>
               
            </div>
        </section >

    )
}
export default ProductCard
