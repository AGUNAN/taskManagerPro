import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Card = () => {
  return (
   <>
    <div className='w-[500px] h-[200px] bg-[#27c9f1] flex flex-col justify-between items-center shadow-emerald-400 shadow-sm p-4 m-4 rounded-2xl'>
      <div className=''>
        <p>Data</p>
      </div>
      <div className='flex flex-row gap-5' >
        <MdOutlineDelete className='size-8 text-white  cursor-pointer' />
        <FaRegEdit className='size-8 text-white  cursor-pointer' />
      </div>

    </div>
    
   </>
  )
}

export default Card