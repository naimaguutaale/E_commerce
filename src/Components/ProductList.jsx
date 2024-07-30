import axios from 'axios'
import {useEffect, useState } from 'react'
import Products from './Products'
import { ClipLoader } from 'react-spinners'
import Header from './Header'

function ProductList() {
    const [data, setData]=useState([])
    const[loading,setLoading]=useState(false)
    const[searchItem,setSearchItem]=useState("")
const handleSearch=(event)=>{
  setSearchItem(event.target.value)

}


    const getAllProducts=()=>{
      setLoading(true)
        axios.get("https://fakestoreapi.com/products").then((Response)=>{
            setData(Response.data)
            // console.log(Response.data)
            setLoading(false)

        }).catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{
      getAllProducts()
    },[])

    
  return  loading===true?<ClipLoader loading={loading} /> : <div >
    <Header search={handleSearch}/>
    {
  <div 
   className=' pm-[200px] grid sm:grid-cols-[300px_300px_300px_300px] sm:gap-6 sm:ml-10   mr-[-50]  grid-cols-[200px_200px] '>
       {
        data.filter((Products)=>{
          return searchItem.toLowerCase()==""?Products:
          Products.title.toLowerCase().includes(searchItem.toLowerCase())

        }).map((item)=>{
            return  <Products items={item}/>
            
        })
       } 
    </div>
}
    </div>
  
}

export default ProductList