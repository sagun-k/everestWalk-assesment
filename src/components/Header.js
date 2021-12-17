import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
      <nav className="flex fixed-top w-full items-center justify-between flex-wrap bg-teal-500 p-6 shadow-2xl ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
           <Link to="/" >EverestWalk Shop</Link> 
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow text-dark">
            {/* <label htmlFor="filter">Filter</label>

            <select >
              <option value="">Electronic</option>
              <option value="">Prtice</option>
              <option value="">Opel</option>
              <option value="">Audi</option>
            </select> */}
          </div>
          <div>
            <Link
              to="/cart"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-minecart" viewBox="0 0 16 16">
  <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z"/>
</svg>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
