import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';

const Plan = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Plan</h2>
          <h3 className='text-5xl font-bold text-white py-8'>Internet plans.</h3>
          <p className='text-3xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
            voluptatum iste.
          </p>
          <div class="inline-flex">
             <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                Home
                  </button>
             <button class="bg-transparent hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-r">
               Business
              </button>
               </div>
        </div>

        <div className='grid md:grid-cols-3'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Bronze</span>
            <p>Perfect to get started</p>
            <div>
              <p className='text-6xl font-bold py-4 flex'>6mbps</p>
            </div>
            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Unlimited Internet.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Customer Data Protection.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />HD Video screaning and VoIP calls.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />HD Surveilance streaming.</p>
                </div>
                <button className='w-full py-4 my-4'>KSH 2500/mo</button>
            
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Silver</span>
            <p>Perfect for domestic use</p>
            <div>
              <p className='text-6xl font-bold py-4 flex'>12mbps</p>
            </div>
            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                 <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Unlimited Internet.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Customer Data Protection.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />HD Video screaning and VoIP calls.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />HD Surveilance streaming.</p>
                </div>
                <button className='w-full py-4 my-4'>KSH 3000/mo</button>
            
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Gold</span>
            <p>Awsome for remote network</p>
            <div>
              <p className='text-6xl font-bold py-4 flex'>10mbps</p>
            </div>
            
            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Unlimited Internet.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Customer Data Protection.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />HD Video screaning and VoIP calls.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />HD Surveilance streaming.</p>
               </div> 
                <button className='w-full py-4 my-4'>KSH 10999/mo</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
