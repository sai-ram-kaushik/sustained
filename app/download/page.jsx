'use client'
import { useRouter } from 'next/navigation'
import React from 'react'



const downloads = [
   {  
    name:"Paper format",
    link:'https://drive.google.com/file/d/1vtm-_nXPvD1fdCi24wW_y20Q38KgJnAC/view?usp=sharin'
   },

   {  
    name:"PPT format",
    link:'https://docs.google.com/presentation/d/1ObtQhxwQzPcVeQjhdyXGyvxvJeHnfnhv/edit?usp=sharing&ouid=117398821527591168210&rtpof=true&sd=true'
   },

   {  
    name:"Program Schedule",
    link:'/call-for-papers'
   },

   {  
    name:"Guidelines",
    link:'/call-for-papers'
   },
]
const page = () => {
 const router = useRouter();
 return (
   <div className='container mx-auto py-5 pb-10'>
     {downloads.map((item,index) => (
       <div 
        key={index}
        className='flex flex-row items-center gap-x-1 cursor-pointer underline group'
        onClick={() => router.push(item.link)}
      >
         <div className='w-1 h-1 bg-black rounded-full'/>
         <p className='text-md font-semibold group-hover:text-blue-600'>{item.name}</p>
       </div>
     ))}
   </div>
 )
}

export default page