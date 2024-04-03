'use client'
import React from 'react'
import Collapsible from 'react-collapsible';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Track = ({track,index}) => {

  return (
      <div className=" overflow-hidden border border-slate-500/45 rounded-md p-3 w-full min-h-[150px]
      shadow-md">
         <p className='text-md font-semibold text-green-800'>
           Track {index + 1}
         </p>
         <p className='text-md font-semibold mb-6 text-slate-700'>{track.name}</p>
         <div className='mt-3'>
           <Collapsible trigger={
             <div 
               className='flex flex-row items-center justify-between w-full mt-5'
             >
               <p className='text-sm text-slate-400'>Sub tracks</p>
               <div>
                <MdOutlineKeyboardArrowDown size={25} className='fill-slate-400'/>
               </div>
             </div>
           }> 
             <div className='mt-3'>
               {track?.items.map((item,index) => (
                  <div 
                   key={index}
                   className='flex flex-row items-center gap-x-3 space-y-2'>
                     <div className='rounded-full bg-slate-600 p-1'/>
                     <p className='text-slate-400 text-sm'>
                       {item} 
                     </p>
                  </div>
               ))}
             </div>
           </Collapsible>
         </div>
      </div>
  )
}

export default Track