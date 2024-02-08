import Image from "next/image";
import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-transparent h-20 w-screen text-white">
      <div className="flex items-center justify-between px-12 py-5 w-screen">
        <Image src="/logo.png" height={80} width={80} alt="logo" />

        <div className="list-none flex space-x-12 justify-between">
          <div>
            <li className="hover:font-bold cursor-pointer relative">
              Home
              <div className="py-[1px] bg-green-500 opacity-0 transition-opacity hover:opacity-100 duration-200"></div>
            </li>
          </div>

          {/* <div>
            <li className="hover:font-bold cursor-pointer">Home</li>
            <div className="py-[1px] bg-[#189B39]"></div>
          </div> */}
          <div>
            <li className="hover:font-bold cursor-pointer">
              About Us
              <div className="py-[1px] bg-green-500 opacity-0 transition-opacity hover:opacity-100 duration-200"></div>
            </li>
          </div>

          <div>
            <li className="hover:font-bold cursor-pointer">
              Portfolios
              <div className="py-[1px] bg-green-500 opacity-0 transition-opacity hover:opacity-100 duration-200"></div>
            </li>
          </div>

          <div>
            <li className="hover:font-bold cursor-pointer">Contact</li>
            <div className="py-[1px] bg-green-500 opacity-0 transition-opacity hover:opacity-100 duration-200"></div>
          </div>
        </div>

        <div>
          <button className="text-white px-12 py-2 rounded-md bg-[#189B39]">
            Pitch Us
          </button>
        </div>
      </div>
    </nav>
  );
}
