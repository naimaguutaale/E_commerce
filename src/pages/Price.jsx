import React from 'react'
import { useSelector } from 'react-redux'

function Price() {
    const Price= useSelector((state)=>state.cart.totalPrice)
    const totalQuantity= useSelector((state)=>state.cart.items)
  return (
    <div  className='bg-slate-100 sm:mt-10 sm:w-[300px] h-[200px] pr-10 rounded sm:right-96  mr-52 ml-10 mt-[1000px] shadow-lg sm:fixed '>
        <h1 className='ml-3 mt-1'>Total Quantity</h1>
        <h1 className='font-bold mt-4 ml-3'>{totalQuantity.length}</h1>
        <h1 className='font-bold mt-4 ml-3'>${Price}</h1>
        <button className='font-bold px-20 sm:py-2 bg-blue-700 sm:ml-10 mt-4 text-white'>Pay Now</button>
        </div>
  )
}

export default Price