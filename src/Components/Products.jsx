import React from 'react'
import { AddCartItem, calculateTotalPrice } from '../Redux/Reducer/Cart'
import { useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'

function Products({items}) {
  const dispatch=useDispatch()
  

const handleCartItem=()=>{
  dispatch(AddCartItem(items))
  dispatch(calculateTotalPrice())
  toast.success("item has been added",{
    position:"top-right"
  })
}


  return (
    <div className=' sm:mt-[80px]  mt-[140px] ' >
    <div id='box' className='  ml-2 mr-40 sm:w-full w-[160px] sm:h-[350px] pb-7  rounded border-2 border-black sm:p-2 sm:pt-20 pt-6 px-3 '>
        <img className=' w-full sm:h-[170px] h-[130px] ' src={items.image}/>
        <div className='flex  sm:justify-between mt-2 w-full'>
        <h1 className='font-semibold text-2xl'>{items.title.substring(0,10)}</h1>
       
        <h1 className='font-semibold  tex-2xl my-2 '>{items.category.name}</h1>
        </div>
        <div className='flex justify-between  mt-2'>
        <h1 className='font-semibold '>${items.price}</h1>
        <i id='active'  onClick={handleCartItem} class="fa-solid fa-plus w-[40px] h-[40px]  ml-[300xp] rounded-full text-3xl hidden sm:block "></i>
        <h1 className='font-semibold  tex-2xl my-2 '>{items.category.name}</h1>

    </div>
    <Toaster/>
    </div></div>
    
  )

}

export default Products
