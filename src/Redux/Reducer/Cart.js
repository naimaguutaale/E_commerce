import { createSlice } from "@reduxjs/toolkit";

const Cart=createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalPrice:0

    },
    reducers:{
        AddCartItem:(state,action)=>{
            state.items.push(action.payload)
        },
calculateTotalPrice:(state)=>{
    let total=0
    state.items.forEach((item)=>{
 total+=item.price

    })
    state.totalPrice=total
},
removeItem:((state,action)=>{
    state.items=state.items.filter((item)=> item.id !=action.payload.id)
})


    }
})
export const {AddCartItem ,calculateTotalPrice,removeItem}=Cart.actions
export  default Cart.reducer