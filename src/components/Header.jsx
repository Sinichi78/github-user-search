import React, { useDebugValue } from "react";
import moon from "/icon-moon.svg";
import sun from "/icon-sun.svg";

export default function Header(props) {
  return (
    <div className={`${props.darkMode && "dark"}`}>
      <header className=" font-bold font-mono flex justify-between text-center align-middle text-2xl ">
        <p className="dark:text-white">devfinder</p>

        <button
  onClick={props.toggleDarkMode}
  className="flex gap-2 text-center mt-3 group"  
>
  {props.darkMode ? (
    <p className="text-sm dark:text-white group-hover:text-gray-500">Light</p>  
  ) : (
    <p className="text-sm text-gray-500 group-hover:text-black">Dark</p>  
  )}
  {props.darkMode ? (
    <img
      className="max-w-full h-5 group-hover:brightness-50"  
      src={sun}
      alt="sun icon"
    />
  ) : (
    <img
      className="max-w-full h-5 group-hover:brightness-0"  
      src={moon}
      alt="moon icon"
    />
  )}
</button>
      </header>
    </div>
  );
}
