import React from 'react'
import { ContactForm } from '../../components/Contact'
import { RenderMap } from '../../components/RenderMap'

const page = () => {
  return (
    <div>
      <ContactForm/>
      <div className='container mx-auto p-3 mt-8'>
        <p className='font-semibold text-lg text-black text-center'>Contact Us:</p>
        <p className='text-center text-xl font-medium mt-2'>Dr. Prateek Mittal, Mobile: 7838682667, Email: 	prateekmittal.set@mriu.edu.in</p>
        <div className='py-5'>
          <p className='font-semibold text-lg text-black text-center'>Adress</p>
          <p className='text-center text-xl font-medium mt-2'>Sector - 43, Manav Rachna International Institute of Research and Studies
            <br/>
            Aravli Hills, Faridabad, 121003
          </p>
        </div>
      </div>
      <RenderMap/>
    </div>
  )
}

export default page