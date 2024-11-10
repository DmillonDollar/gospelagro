import React, {useContext} from 'react'
import MainLayout from './MainLayout'
import DataApi from '../DataContext/DataApi'
import Loading from './Loading'

const Order = () => {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid
  const context = useContext(DataApi)
  const { loading, order } = context

  return (
    <div>
    <div className='producthero relative '>
    <MainLayout>

          {/* Home Text */}
      <div className=' flex w-full mt-10 mb-80'> 
                <div className='flex flex-col gap-5 w-1/2 px-16'>
                       <div>
                        <p className='text-white  raleway text-[1.3rem] font-thin '>EXPLORE </p>
                        </div> 
                        <div>
                        <p className='text-5xl raleway text-[3rem] font-extrabold tracking-wide text-white'> YOUR ORDER</p>
                        </div>
          
                    <div>
                    <p className='text-xl text-white mb-40'> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                    </div>

                  {/* <div className='text-center mb-16'>
                  <button className='border-4 border-yellow-300 px-16 py-4 rounded-full text-white font-bold hover:text-yellow-950 hover:bg-yellow-200'>
                    DISCOVER
                  </button>
                  </div> */}
              </div>
              
            
        </div> 

    </MainLayout>
</div>
          

    <div>
      {loading && <Loading />}
      {!order.length > 0 ?
        (<>
          <div className=" pt-10">
            {
              order.filter(obj => obj.userid == userid).map((order) => {
                // order.cartItems.map()
                return (
                  <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    {
                      order.cartItems.map((item) => {
                        return (
                          <div className="rounded-lg md:w-2/3">
                            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                              <img src={item.images[0]} alt="product-image" className="w-full rounded-lg sm:w-40" />
                              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                  <h2 className="text-lg font-bold text-gray-900" >{item.title}</h2>
                                  <p className="mt-1 text-xs text-gray-700" >{item.description}</p>
                                  <p className="mt-1 text-xs text-gray-700" >{item.price}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </>)
        :
        (
          <h2 className=' text-center tex-2xl text-black'>No Order</h2>
        )

      }
    </div>

</div>
  )
}

export default Order