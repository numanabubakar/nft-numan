'use client'
import React, { useState, useEffect } from "react";
import "./header.css"
import Button from './Button/button'
import { AiOutlineUserAdd } from 'react-icons/ai'
function Header() {
   
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
        }
        };
        
        window.addEventListener("resize", handleResize);
        
        return () => {
        window.removeEventListener("resize", handleResize);
        };
        }, []);
  return (
    <nav className="border-white-200 mb-10 container  mx-auto my-5">
    <div className="w-full mx-auto">
        <div className="mx-2 flex flex-wrap items-center justify-between">
            <a href="#" className="flex">
               
                <span className="self-center text-lg font-semibold whitespace-nowrap">NFT MarketPlace</span>
            </a>
            <div className="flex md:hidden md:order-2">
                <button data-collapse-toggle="mobile-menu-3" type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white-400 hover:text-white-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                    aria-controls="mobile-menu-3" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                    </svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div   className={` md:flex justify-between items-end w-full md:w-auto md:order-1 ${ isMobileMenuOpen ? "" : "hidden"}`}id="mobile-menu-3">
                <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <a href="#"
                            className="navb active md:bg-transparent text-white block pl-3 pr-4 py-5 md:text-blue-700 md:p-0 rounded "
                            aria-current="page">Marketplace</a>
                    </li>
                    <li>
                        <a href="#"
                            className="text-white-700 hover:bg-white-50 border-b border-white-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-5 navb md:p-0">Ranking</a>
                    </li>
                    <li>
                        <a href="#"
                            className="text-white-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-5 navb md:p-0 ">Connect a wallet</a>
                    </li>
                    <li>
                        <Button title="Sign Up" iconComp={<AiOutlineUserAdd />}/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
  )
}

export default Header