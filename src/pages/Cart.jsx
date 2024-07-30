import React, { useState } from 'react'
import Header from '../Components/Header'
import {useSelector ,useDispatch} from 'react-redux'
import {removeItem,calculateTotalPrice} from "../Redux/Reducer/Cart"
import Price from './Price'
import toast, { Toaster } from 'react-hot-toast'
// import Products from '../Components/Products'


function Cart() {
    const allItems=useSelector((state)=>state.cart.items)
    const dispatch=useDispatch()
    const handleRemoveItem=(data)=>{
      dispatch(removeItem(data))
      dispatch(calculateTotalPrice())
      toast.success("item has been deleted",{
        position:"top-right"
      })
    }
    
  return (
    
    <div>
        <Header/>

        <h1 className='pt-32 text-5xl sm:ml-64 mb-8  ml-11'  >Cart Order</h1>

        
         {allItems.length>0? 
  <div className='flex  '> 

          <div>

        
       
        {
          
        allItems.map((item)=>{
                return<div className='grid grid-cols-1'>
                <div className='  sm:ml-64 bg-slate-200 shadow-lg  mt-11 rounded sm:w-[400px] sm:h-[220px] w-[290px] ml-11  flex  justify-between items-center pr-7'>
                  <img className='w-[200px] h-[160px] mt-10' src={item.image}/>
                  <div className='ml-7 mt-10 mr-10'>
                  <h1  >{item.title.substring(0,25)}</h1>

                <h1 className='mt-4 font-semibold text-2xl'>${item.price}</h1>
                </div>
                <i onClick={ ()=>handleRemoveItem(item)} class="fa-solid fa-x text-2xl"></i>
                </div></div>
            })
        }
          </div>
        <Price/>
      </div>:<p className='text-center text-4xl' >The cart is Empty</p>
      }
      <Toaster/>
      </div>

  )
}

export default Cart