import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// import Store from './Store/Store'
import { BrowserRouter } from 'react-router-dom'
// import Header from './Components/Header.jsx'
// import ProductList from './Components/ProductList.jsx'
import { Provider } from 'react-redux'
import CartStore from './Store/CartStore.js'
import App from './App.jsx'
// import { Provider } from 'react-redux'
// import Tasbih from './Redux/Tasbih'

ReactDOM.createRoot(document.getElementById('root')).render(
 
   <Provider store={CartStore}>
    <BrowserRouter>

    {/* <Header/>  */}
     {/* <ProductList/>  */}
<App/>
 </BrowserRouter>
 </Provider>
    // {/* <Provider store={Store}>
    // <Tasbih/>
    // </Provider> */}
    
)
