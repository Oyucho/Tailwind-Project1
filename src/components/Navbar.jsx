import React, {useState} from 'react';
import { Link, } from 'react-scroll'


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>GSL.</h1>
          <ul className='hidden md:flex'>
          <li><Link to="home" smooth={true} duration={500}>HOME</Link></li>
          <li><Link to="plans" smooth={true} offset={-200} duration={500}>PLANS</Link></li>
          <li><Link to="servies" smooth={true} offset={-50} duration={500}>SERVISES</Link></li>
          <li><Link to="business" smooth={true} offset={-100} duration={500}>BUSINESS</Link></li>
          <li><Link to="number" smooth={true} offset={-50} duration={500}>+254 793486784</Link></li>
          </ul>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="plans" smooth={true} offset={-200} duration={500}>Plans</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="services" smooth={true} offset={-50} duration={500}>Services</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="business" smooth={true} offset={-100} duration={500}>Business</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
