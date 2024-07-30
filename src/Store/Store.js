
import { configureStore } from '@reduxjs/toolkit'
import Counter from '../Redux/Reducer/Counter'

const Store=configureStore({
reducer:{
    tasbih:Counter
}
})

export default Store