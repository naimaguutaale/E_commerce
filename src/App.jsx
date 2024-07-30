import { Route ,Routes} from "react-router-dom";

import React from 'react'
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";

function App() {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/about" element={<About/>}/>
</Routes>
  
}

export default App
