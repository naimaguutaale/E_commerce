import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment,decrement,reset } from './Reducer/Counter'

const Tasbih=()=> {
    const value=useSelector((state)=>state.tasbih.value)
    const dispatch=useDispatch()
    const handleIncrement=()=>{
        dispatch(Increment())

    }
    const handleDecrement=()=>{
        dispatch(decrement())

    }
    const handleReset=()=>{
        dispatch(reset())

    }
  return (
    <div className='text-center m-auto mt-32 bg-slate-100 rounded shadow-lg w-[400px] h-[430px]'>
       <h1 className='text-5xl pt-10'>{value}</h1>
        <button onClick={handleIncrement} className='px-10 py-2 m-4 text-3xl bg-blue-600 mt-20  text-white '>Increment</button>
        <button onClick={handleDecrement} className='px-10 py-2 m-4 text-3xl bg-blue-600  text-white'>Decrement</button>
        <button onClick={handleReset} className='px-10 py-2 m-4 text-3xl bg-blue-600 w-[230px]  text-white'>Reset</button>
        </div>
  )
}

export default Tasbih