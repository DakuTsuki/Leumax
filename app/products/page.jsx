import React from 'react'
import Image from 'next/image'
import iot from '@/public/products-bg.jpg'
import halepay from '@/public/halepay-logo.png'
import rexion from '@/public/rexion-logo.png'

export default function Products() {


  return (
    <div className=' text-base xl:text-lg relative'>
        <section className=" relative hero-img">
        <Image
          src={iot}
          alt="iot robotics page background image"
          className="  w-full h-96 object-cover relative"
        />
        <div className=" text-white-10 absolute left-0 right-0 m-auto top-0 bottom-0  z-30 px-5 lg:px-16 py-24 flex flex-col items-center justify-center max-w-[600px] text-center">
          <h2 className=" lg:text-5xl md:text-4xl font-medium leading-normal text-3xl">Products</h2>
          <p className=" capitalize mt-5 max-w-[600px]"></p>
        </div>
      </section>

      <section className=" px-5 lg:px-16 py-24">
        <div className=" flex flex-col md:justify-between md:flex-row ">
          <p className=" text-sm md:text-base text-orange-10">Our Products</p>
            <h2 className=" lg:text-5xl md:text-4xl text-2xl font-medium leading-snug md:w-[70%]">
            Build and scale your business fast with our world-class senior developers
            </h2>
        </div>

        <div className=' flex flex-col gap-16 items-center md:justify-center lg:justify-start md:gap-8 md:flex-row pt-20 md:items-start'>

            <div className='max-w-[500px] md:max-w-[300px] lg:max-w-[200px] shadow-2xl px-4 py-10 flex flex-col items-center rounded-xl'>
                <div className=' w-[150px]'> 
                    <Image src={halepay} alt='halepay logo' className=' w-full aspect-square' />
                </div>
                <div className=' text-center pt-7'>
                    <h3 className=' font-medium text-xl pb-5'>HalePay</h3>
                    <p className=' text-darkgray-10'>Make all your financial transactions easier. With HalePay, you can now choose from a wide range of payment options to suit your business needs.</p>
                    <p className=' pt-10 font-medium text-lg'>Coming Soon!</p>
                </div>
            </div>

            <div className='max-w-[500px] md:max-w-[300px] lg:max-w-[200px] shadow-2xl px-4 py-10 flex flex-col items-center rounded-xl'>
                <div className=' w-[150px]'> 
                    <Image src={rexion} alt='rexion logo' className=' w-full aspect-square' />
                </div>
                <div className=' text-center pt-7'>
                    <h3 className=' font-medium text-xl pb-5'>Rexion</h3>
                    <p className=' text-darkgray-10'>Rexion Marketplace is the best online real estate platform for selling, buying and renting of property in africa. Where everyone meets.</p>
                    <p className=' pt-10 font-medium text-lg'>Coming Soon!</p>
                </div>
            </div>

        </div>
      </section>
    </div>
  )
}
