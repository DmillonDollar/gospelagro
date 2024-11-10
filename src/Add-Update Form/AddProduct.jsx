import React, { useContext } from 'react'
// import DataContext from '../Registration/UseContext/DataContext'
import DataApi from '../DataContext/DataApi'
// import Loading from '../Loading/Loading'
import Loading from '../Component/Loading'

const AddProduct = () => {
    const context = useContext(DataApi)
    const {addProduct, product, setProduct, setImages, loading} = context
  return (
    <div className='hero flex items-center justify-center h-screen max-md:h-[110vh] raleway'>
    <div className=' flex justify-center items-center '>
        <div className='flex bg-white/30 backdrop-blur-md  p-5 items-center '>
        
            <div className='w-full text-white font-sans '>

                <div className='flex justify-center flex-col items-center w-full font-bold text-xl'>
            
                    <h1 className='font-extrabold text-3xl '>ADD PRODUCT</h1>
                    {loading && <Loading/>}
                </div>

                <div className='mt-2'> 
                    <input 
                    autoComplete='off'
                    type='text'
                    placeholder='Enter Product Name'
                    name='productName'
                    value={product.name}
                    onChange={(e)=> setProduct({...product, name:e.target.value})}
                    className='w-full outline-none rounded p-1 text-black'
                    />
                </div>
                
            
                
                <div className='mt-4'>
                <input
                autoComplete='off'
                type='text'
                placeholder='Enter Category'
                name='categories'
                value={product.category}
                onChange={(e)=> setProduct({...product, category: e.target.value})}
                className='w-full outline-none rounded p-1  text-black'
                />
                </div>

                 <div className='text-lg font-semibold mb-1'>
                <label className='inline-block mb-2'>Car Images</label>
                <div>
                    <input
                    type='file' multiple
                    placeholder='Select An Image'
                    onChange={(e)=> setImages( e.target.files)}
                    className='w-full outline-none rounded p-1 bg-slate-900'
                    />
                </div>
                 </div>


                <div className='mt-3'> 
                <input
                autoComplete='off'
                type='text'
                placeholder='Enter $ Price'
                name='price'
                value={product.price}
                onChange={(e)=> setProduct({...product, price: e.target.value})}
                className='w-full outline-none rounded p-1  text-black'
                />
                </div>



                <div className='mt-3'>
                <textarea className='w-full h-32 text-black'
                type= 'text'
                placeholder='Description'
                value={product.description}
                onChange={(e)=> setProduct({...product, description: e.target.value})}
                ></textarea>
                </div>

                 
                <div className='flex items-center justify-center mt-2 font-extrabold text-3xl'><button className='bg-slate-900 text-white dashboards-header w-full  p-2 rounded  outline-none'
                onClick={addProduct}>ADD</button></div>

    
            </div>
        </div>
    </div>
    
    

</div>
  )
}

export default AddProduct