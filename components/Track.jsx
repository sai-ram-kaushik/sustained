'use client'
import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Track = ({track,index}) => {

  return (
      <div className=" overflow-hidden border border-slate-500/45 rounded-md p-3 w-full h-fit
      shadow-md">
         <p className='text-md font-semibold text-black text-lg'>
           Track {index + 1}
         </p>
         <p className='text-md font-semibold mb-6 text-green-800 text-xl'>{track.name}</p>
         <div className='mt-3'>

             <div className='mt-3'>
               {track?.items.map((item,index) => (
                  <div className='flex flex-row items-center gap-x-3 space-y-2' key={index}>
                     <div className='rounded-full bg-slate-600 p-1'/>
                     <p className='text-black text-base font-semibold '>
                       {item}
                     </p>
                  </div>
               ))}
             </div>
           
         </div>
      </div>
  )
}

export default Track