import React from 'react';
import { useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom';

function Header({ search }) {
  
  const numberOfItems=useSelector((state)=>state.cart.items)
  return (
    <div className="flex justify-between sm:gap-4 sm:text-2xl md:text-3xl
     bg-gray-950 text-white sm:p-3 fixed items-center w-full mb-20 ">
      <h1 className=" sm:text-5xl sm:ml-11">E-Commerce</h1>
      <ul className=" hidden sm:flex  gap-4 md:gap-11 ">
      <NavLink to="/"> <li>Home</li></NavLink>  
       <NavLink to="/about"> <li>About</li></NavLink>
      </ul>
      <form className="  ">
        <input
          onChange={search}
          type="search"
          placeholder="Search"
          className="sm:w-[290px] ml-4 text-black sm:h-[50px] h-[40px]"
        />
      </form>
      <NavLink  to="/cart">
      <i className="fa-solid fa-cart-shopping text-yellow-300 text-3xl md:text-4xl mr-8 sm:mr-20 ml-4 ">  {numberOfItems.length}</i>
      </NavLink>
    </div>
  );
}

export default Header;
