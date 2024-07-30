import { configureStore } from "@reduxjs/toolkit";
import Cart from "../Redux/Reducer/Cart";

const CartStore = configureStore({
    reducer:{
        cart:Cart
    }
})
export default CartStore