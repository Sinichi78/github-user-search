import React from "react";
import search from "/icon-search.svg"

export default function Search(props){
   

    return(
        <nav className=" rounded-xl ">
            <form className="p-3 mt-7 flex justify-between"
            action="
            "
            onSubmit={(e) => {
                e.preventDefault();
                props.getUser();
              }}>
            <div className="flex gap-3">
                <img src={search} alt="" className=" max-w-full h-5 mt-3" />
                <input value={props.users} onChange={props.handleChange} type="text" placeholder="Search Github username" className=" w-52 font-mono outline-none" />
            </div>
            <button id="submitInput" type="submit" className=" bg-blue-500 p-3 w-28 rounded-lg text-white font-bold font-mono">
                Search
            </button>
            </form>
            
        </nav>
    )
}