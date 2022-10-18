import React from 'react'

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaWhatsapp,
    FaPhone,
    FaMailBulk,
    FaGlobe,
} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h1 className='font-bold uppercase pt-4'>Find us on</h1>
                <p>Talk to us whenever, wherever, we'll listen</p>
                
                    
                    <div className='py-1' >
                    <FaMailBulk />Sales@globilinksolution.com
                    </div>
                     <div className='py-1'>
                    <FaGlobe />www.globilinksolution.com
                    </div>
                    <div className='py-1'>
                    <FaWhatsapp />+254 799507509
                    </div>
                    <div className='py-1'>
                    <FaPhone />+254 793486784
                    </div>

                    
            </div>
            
            <div className='col-span-2 pt-8 md:pt-2'>
                 <form className='flex flex-row'>
                     <input className='w-full p-2 mr-4 rounded-md mb-4 ' type="name" placeholder='Enter name..'/>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="location" placeholder='Enter location..'/>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="phone number" placeholder='Enter phone..'/>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="message" placeholder='Message..'/>
                    <button className='p-2 mb-4'>Send message</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Oyucho, GSL. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
            <FaGlobe />
        </div>
        </div>
    </div>
  )
}

export default Contact