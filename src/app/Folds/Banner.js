"use client";
import Image from 'next/image'
import React from 'react';
import images from '../constants/images';
import Cards from './Cards';

const Banner = () => {

  return (
    <>
    <nav className='flex justify-between items-center py-4 px-2 sm:px-10 md:py-6'>
         <Image alt='logo' src={images.logo} className='w-36 sm:w-56 lg:w-64' priority />
         <a href='https://warranty.stealth-masters.com/' target='_blank' rel='noopener noreferrer'>
    <button className='border-2 border-slate-300 rounded-md sm:rounded-lg py-1 sm:py-2 px-3 text-[9px] sm:text-xs md:text-sm font-semibold sm:font-bold hover:bg-black hover:text-white transition-colors'>
      Unlock Your Warranty Here
    </button>
  </a>
      </nav>
      <section className='w-full flex px-2 mt-5 sm:mt-0 sm:px-10 justify-center items-center'>
            <div className='w-2/12 sm:pl-0 md:pl-[0.5%] lg:pl-[2.5%] xl:pl-[3.5%] 2xl:pl-[5%] sm:mb-20 mb-8'>
               <h1 className='text-[3vw] leading-tight whitespace-nowrap z-10 relative font-bold'>Secured And Ready</h1>
               <h1 className='text-[3vw] leading-tight whitespace-nowrap z-10 relative font-bold'>At A Moment's Notice.</h1>
               <div className='absolute bg-[#ffffffb5] w-auto sm:py-7 py-3 pr-3 md:pr-6 lg:pr-10 xl:pr-16 text-[8px] sm:text-[1.5vw] md:text-lg text-[#4d4d4d] mt-2 sm:mt-4 rounded-2xl'>
                  <p className='whitespace-nowrap'>Equipped with an RFID lock, this shelf provides</p>
                  <p className='whitespace-nowrap'>quick access to its secret concealment bay. Use</p>
                  <p className='whitespace-nowrap'>any of your three cards or two fobs to unlock it</p>
                  <p className='whitespace-nowrap'>instantly, combining convenience with security.</p>
               </div>
            </div>
            <div className='w-11/12 flex justify-end'>
               <Image src={images.lifestyle} className='w-10/12' alt='banner' priority/>
            </div>
      </section>
      <section className='w-full flex lg:gap-x-8 px-2 sm:px-10 justify-center items-center mt-8 sm:mt-14'>
          <div className='w-5/12 lg:w-5/12 xl:w-4/12 2xl:pl-7'>
             <h1 className='text-[3vw] leading-tight whitespace-nowrap font-bold'>Elegantly Hidden</h1>
             <h1 className='text-[3vw] leading-tight font-bold'>Within Reach.</h1>
             <p className='text-[#4d4d4d] pr-3 mt-2 sm:mt-4 text-[9px] sm:text-[1.5vw] md:text-lg'>Within our shelves, your firearms remain hidden and near. This design not only ensures quick access to your weapon in case of emergency but also maintains the aesthetic integrity of your home without compromising on safety and security.</p>
          </div>
          <div className='w-7/12 flex gap-3 sm:gap-6'>
             <Image src={images.mask} className='rounded-lg w-7/12'/>   
             <div className='flex flex-col gap-y-3 sm:gap-y-4'>
                <Image src={images.blanca} loading="lazy"/>
                <Image src={images.cafe} loading="lazy"/>
                <Image src={images.negra} loading="lazy"/>
             </div>
          </div>
      </section>
      <section className='w-full flex justify-center items-center sm:items-start mt-10 sm:mt-20 px-2'>
           <div className='w-6/12 sm:w-7/12 lg:w-6/12 sm:pl-10'>
              <h1 className='text-[3vw] sm:text-[2.5vw] leading-tight font-bold mt-3'>Conceal More Than Your Firearms.</h1>
              <p className='text-[#4d4d4d] text-[9px] sm:text-[1.5vw] md:text-lg mt-3'>You can secure a wider range of personal valuables in the shelf’s concealment bay. Beyond safeguarding firearms in your home, it is a versatile solution for storing jewelry, prescription or recreational drugs, adult toys, and more.</p>
           </div>
           <div className='w-6/12 sm:w-5/12'>
              <Image src={images.mask2} loading="lazy"/>
           </div>
      </section>
    <Cards/>
    <section className='mt-10 md:mt-28'>
        <h1 className='text-lg sm:text-[3vw] leading-tight font-bold text-center'>More To It</h1>
        <h1 className='text-lg sm:text-[3vw] leading-tight font-bold text-center'>Than Meets The Eye.</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-7 px-2 sm:px-10 xl:px-32 mt-10'>
            <div className='bg-[#e6dcc833] p-3 sm:p-10 rounded-xl'>
                <h1 className='font-bold text-xl 2xl:mb-6 mb-3'>Expansive Concealment Bay</h1>
                <p className='text-[#4d4d4d] text-sm sm:text-lg'>The bay offers maximum storage to securely hide your valuables. Its thoughtful design ensures you can store your valuables discreetly and safely.</p>
            </div>
            <div className='bg-[#e6dcc833] p-3 sm:p-10 rounded-xl'>
                <h1 className='font-bold text-xl 2xl:mb-6 mb-3'>Customize Your Storage Space</h1>
                <p className='text-[#4d4d4d] text-sm sm:text-lg'>The foam insert inside the concealment bay can be easily tailored to fit specific items, providing a snug and secure environment for each piece without compromise.</p>
            </div>
            <div className='bg-[#e6dcc833] p-3 sm:p-10 rounded-xl'>
                <h1 className='font-bold text-xl 2xl:mb-6 mb-3'>Designed For Functionality</h1>
                <p className='text-[#4d4d4d] text-sm sm:text-lg'>Supported by a robust steel mounting bracket, this shelf can be installed on drywalls, studs, or concrete walls. Inside, a pneumatic arm allows the bay to open with a smooth, silent motion.</p>
            </div>
            <div className='bg-[#e6dcc833] p-3 sm:p-10 rounded-xl'>
                <h1 className='font-bold text-xl 2xl:mb-6 mb-3'>Masterfully Crafted</h1>
                <p className='text-[#4d4d4d] text-sm sm:text-lg'>Available in two designs and three colors, these floating shelves use natural wood and laminated wood-based boards. Our attention to detail and craftsmanship ensures that you get the finest.</p>
            </div>
        </div>
    </section>
    <section className='w-full px-2 sm:px-0 sm:w-9/12 flex flex-col mx-auto mt-10'>
          <Image src={images.secret} className='w-full'/>
          <Image src={images.buttons} className='my-10'/>
      </section>
    </>
  )
}

export default Banner