import React from 'react';

function Header({ search }) {
  return (
    <div className="flex justify-between sm:gap-4 text-2xl md:text-3xl
     bg-gray-950 text-white p-3 fixed items-center w-full mb-20 ">
      <h1 className=" sm:text-5xl sm:ml-11">E-Commerce</h1>
      <ul className=" hidden sm:flex  gap-4 md:gap-11 ">
        <li>Home</li>
        <li>About</li>
      </ul>
      <form className="  ">
        <input
          onClick={search}
          type="search"
          placeholder="Search"
          className="w-[180px] ml-4"
        />
      </form>
      <i className="fa-solid fa-cart-shopping text-yellow-300 text-3xl md:text-4xl mr-8 sm:mr-20 ml-4"></i>
    </div>
  );
}

export default Header;
