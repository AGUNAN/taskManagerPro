import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import SideBar from "./SideBar";
import { SiCreatereactapp } from "react-icons/si";
const NavBar = () => {
    const [toggle,setToggle]=useState(false)
  return (
    <>
  
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% shadow-md shadow-emerald-400 w-full items-center justify-between flex flex-col  p-3">
        <div  className="flex flex-row justify-center itens-center">
           <IoMenu onClick={()=>setToggle(!toggle)} className="size-8 mr-10 text-black "/>
           <h1 className=" text-black font-bold text-4xl pr-10">TASK MANAGER</h1>
           <SiCreatereactapp  className="size-8 mr-10 text-black "/>
        
        </div>
        
    </div>
    <div>
            {toggle && <SideBar/>}
    </div>
    </>
  )
}

export default NavBar