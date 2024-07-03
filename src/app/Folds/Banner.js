"use client";
import Image from 'next/image'
import React from 'react';
import images from '../constants/images';
import Cards from './Cards';

const Banner = () => {

  return (
    <>
    <nav className='flex justify-between items-center px-10 py-6'>
         <Image alt='logo' src={images.logo} className='w-56 lg:w-64' priority />
         <button className='border-2 border-slate-300 rounded-lg py-2 px-4 text-sm font-bold hover:bg-black hover:text-white transition-colors'>Unlock Your Warranty Here</button>
      </nav>
      <section className='w-full flex px-10 justify-center items-center'>
            <div data-scroll data-scroll-speed="0.2" className='w-2/12 pl-[7%] sm:pl-0 md:pl-[0.5%] lg:pl-[2.5%] xl:pl-[3.5%] 2xl:pl-[5%] mb-20'>
               <h1 className='text-[3vw] leading-tight whitespace-nowrap z-10 relative font-bold'>Secured And Ready</h1>
               <h1 className='text-[3vw] leading-tight whitespace-nowrap z-10 relative font-bold'>At A Moment's Notice.</h1>
               <div className='absolute bg-[#ffffffb5] w-auto py-7  sm:pr-3 md:pr-6 lg:pr-10 xl:pr-16 sm:text-xs  md:text-sm lg:text-lg xl:text-xl 2xl:text-xl text-[#807316] mt-4 rounded-lg'>
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
      <section className='w-full flex px-10 justify-center items-center mt-14'>
          <div data-scroll data-scroll-speed="0.2" className='w-5/12 lg:w-5/12 xl:w-4/12 2xl:pl-7'>
             <h1 className='text-[3vw] leading-tight whitespace-nowrap font-bold'>Elegantly Hidden</h1>
             <h1 className='text-[3vw] leading-tight font-bold'>Within Reach.</h1>
             <p className='text-[#807316] pr-3 mt-4 text-xs lg:text-sm xl:text-lg 2xl:text-xl'>Within our shelves, your firearms remain hidden and near. This design not only ensures quick access to your weapon in case of emergency but also maintains the aesthetic integrity of your home without compromising on safety and security.</p>
          </div>
          <div className='w-7/12 flex gap-6'>
             <Image src={images.mask} className='rounded-lg w-7/12'/>   
             <div className='flex flex-col gap-y-4'>
                <Image src={images.blanca} loading="lazy"/>
                <Image src={images.cafe} loading="lazy"/>
                <Image src={images.negra} loading="lazy"/>
             </div>
          </div>
      </section>
      <section className='w-full flex justify-center mt-16'>
           <div className='w-7/12 lg:w-6/12 pl-10'>
              <h1 className='text-[2.5vw] leading-tight font-bold mt-3'>Conceal More Than Your Firearms.</h1>
              <p className='text-[#807316] text-xs xl:text-lg mt-3'>You can secure a wider range of personal valuables in the shelf’s concealment bay. Beyond safeguarding firearms in your home, it is a versatile solution for storing jewelry, prescription or recreational drugs, adult toys, and more.</p>
           </div>
           <div className='w-5/12'>
              <Image src={images.mask2} loading="lazy"/>
           </div>
      </section>
    <Cards/>
    <section className='mt-10'>
        <h1 className='text-[3vw] leading-tight font-bold text-center'>More To It</h1>
        <h1 className='text-[3vw] leading-tight font-bold text-center'>Than Meets The Eye.</h1>

        <div className='grid grid-cols-2 gap-7 px-10 xl:px-32 mt-10'>
            <div className='bg-[#e6dcc8ad] p-10 rounded-xl'>
                <h1 className='font-bold text-[2vw] mb-3'>Expansive Concealment Bay</h1>
                <p className='text-[#807316] text-sm'>The bay offers maximum storage to securely hide your valuables. Its thoughtful design ensures you can store your valuables discreetly and safely.</p>
            </div>
            <div className='bg-[#e6dcc8ad]  p-10 rounded-xl'>
                <h1 className='font-bold text-[2vw] mb-3'>Customize Your Storage Space</h1>
                <p className='text-[#807316] text-sm'>The foam insert inside the concealment bay can be easily tailored to fit specific items, providing a snug and secure environment for each piece without compromise.</p>
            </div>
            <div className='bg-[#e6dcc8ad] p-10 rounded-xl'>
                <h1 className='font-bold text-[2vw] mb-3'>Designed For Functionality</h1>
                <p className='text-[#807316] text-sm'>Supported by a robust steel mounting bracket, this shelf can be installed on drywalls, studs, or concrete walls. Inside, a pneumatic arm allows the bay to open with a smooth, silent motion.</p>
            </div>
            <div className='bg-[#e6dcc8ad] p-10 rounded-xl'>
                <h1 className='font-bold text-[2vw] mb-3'>Masterfully Crafted</h1>
                <p className='text-[#807316] text-sm'>Available in two designs and three colors, these floating shelves use natural wood and laminated wood-based boards. Our attention to detail and craftsmanship ensures that you get the finest.</p>
            </div>
        </div>
    </section>
    <section className='w-9/12 flex flex-col mx-auto mt-10'>
          <Image src={images.secret} className='w-full'/>
          <Image src={images.buttons} className='my-10'/>
      </section>
    </>
  )
}

export default Banner