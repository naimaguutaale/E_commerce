import React from 'react'
function Products({items}) {
  return (
    <div className='mt-[150px]  ' >
    <div className=' w-full sm:w-[300px] h-[350px] rounded border-2 border-black sm:p-2 pt-20  '>
        <img className=' w-full h-[170px] ' src={items.image}/>
        <div className='flex  sm:justify-between mt-2 w-full'>
        <h1 className='font-semibold text-2xl'>{items.title.substring(0,10)}</h1>
       
        <h1 className='font-semibold  tex-2xl my-2 '>{items.category.name}</h1>
        </div>
        <div className='flex justify-between mt-2'>
        <h1 className='font-semibold '>${items.price}</h1>
        <i class="fa-solid fa-plus w-[40px] h-[40px] rounded-full text-3xl hidden sm:block "></i>
        <h1 className='font-semibold  tex-2xl my-2 '>{items.category.name}</h1>

    </div>
    </div></div>
  )
}

export default Products
