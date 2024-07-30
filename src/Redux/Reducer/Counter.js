import { createSlice } from "@reduxjs/toolkit";

const Counter= createSlice({
    //Function 1
    name:"tasbih",
    initialState:{
    
        value:0
    },
        //Function 2

     reducers:{
        Increment:(state)=>{
            state.value++


        },
              //Function 3
         
        decrement:(state)=>{
            if(state.value>0){
            state.value--}

        },
        reset:(state)=>{
            state.value=0
        }
     }
})
//Reducer connecting Store then main root
export const {Increment, decrement,reset}=Counter.actions
export default Counter.reducer
