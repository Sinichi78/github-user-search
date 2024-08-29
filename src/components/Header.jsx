import React from "react";
import moon from "/icon-moon.svg";

export default function Header() {
  return (
    <header className=" font-bold font-mono flex justify-between text-center align-middle text-2xl ">
      <p>devfinder</p>

      <button className="flex gap-2 text-center mt-3 hover:text-black text-gray-500 hover:filter hover:brightness-0">
        <p className=" font-semi-bold text-sm ">Dark</p>
        <img className=" max-w-full h-5" src={moon}   alt="" />
      </button>
    </header>
  );
}
