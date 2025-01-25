import React from 'react'
import Image from 'next/image'
import hero from '@/public/programs/tech2kids-bg.jpg'
import jobs from '@/public/programs/tech2jobs-more.jpg'
import corp from '@/public/programs/corps2tech-more.png'
import japa from '@/public/programs/tech4japa-more.jpg'
import mark from '@/public/mark.png'
import Link from 'next/link'
import 'animate.css';
import ProgramForm from '@/components/ProgramForm'

export default function Tech2Kids() {
  return (
    <main className="text-base xl:text-lg relative">
      <section className=" relative hero-img">
        <Image
          src={hero}
          alt="tech2jobs page background image"
          className=" w-full h-96 object-cover relative"
        />
        <div className=" animate__animated animate__slideInLeft text-white-10 absolute z-30 left-0 right-0 m-auto top-0 bottom-0 px-5 lg:px-16 flex flex-col items-center justify-center max-w-[600px] text-center">
          <h2 className=" lg:text-5xl md:text-4xl font-medium leading-normal text-3xl">Tech2Kids</h2>
        </div>
      </section>

      <section className=" animate__animated animate__fadeIn px-5 lg:px-16 py-24 max-w-[700px]  m-auto">
        <div>
          <h2 className=" text-2xl md:text-3xl md font-medium border-b pb-2 border-b-lightGray-10">
            Tech2Kids
          </h2>
          <p className=" pt-10">
          Tech2Kids is a training basically for kids, we help children get involved in computer science and coding from a young age. <br /> <br /> Technical Skills is what every Child Should Learn, How to Use Devices, Emails · Word Processing, Exposing them to the digital skills for future makes them remain relevant in the society. kids should start acquiring tech skills relevant to their prospects earlier in life. <br /><br /> The earlier your kids begin to develop these tech skills, the more proficient they will become before they become adults, and it will foster opportunities for good analytical, computational and critical thinking skills
          </p>
        </div>
        <div className=' pt-10'>
            <h3 className=' font-medium text-xl border-b pb-2'>Courses</h3>
            <ul className=' flex flex-col gap-y-3 mt-4'>
             

                <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <h4 className=' font-medium'>Coding Toys</h4>
                  </li>
                  <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <h4 className=' font-medium'>Coding Games</h4>
                  </li>
                  <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <h4 className=' font-medium'>Online Research / Email</h4>
                  </li>
                  <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <h4 className=' font-medium'>Graphics / Video Creation</h4>
                  </li>
                  <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <h4 className=' font-medium'>Programming Languages.</h4>
                  </li>
            </ul>
        </div>
        <ProgramForm courses={false} price={"N100,000.00"} program={"Tech2Kids"}/>
      </section>

      <section className=" px-5 lg:px-16 py-24">
        <h2 className=' lg:text-4xl md:text-3xl text-2xl text-center md:text-left font-medium leading-snug'>More on Leumax Programs:</h2>
        <div className=' flex justify-center lg:justify-between gap-y-5 gap-x-5 lg:gap-x-0 items-center flex-wrap mt-10'>
            <Link href={'/programs/corps2tech'} className=' max-w-[400px] md:max-w-[31%]  relative more-card'>
                <Image src={corp} alt='tech2jobs image' className=' w-full aspect-video object-cover'/>
                <div className=' flex items-center gap-2 absolute z-30 bottom-5 left-4 text-white-10'> <p>Corps2Tech </p>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3386 4.91971L2.86315 16.3952L0.977539 14.5096L12.453 3.0341H2.33863V0.367432H17.0053V15.0341H14.3386V4.91971Z" fill="white"/>
                    </svg>
                </div>
            </Link>
            <Link href={'/programs/tech4japa'} className=' max-w-[400px] md:max-w-[31%]  relative more-card'>
                <Image src={japa} alt='corps image' className=' w-full aspect-video object-cover'/>
                <div className=' flex items-center gap-2 absolute bottom-5 z-30 left-4 text-white-10'><p>Tech4Japa</p>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3386 4.91971L2.86315 16.3952L0.977539 14.5096L12.453 3.0341H2.33863V0.367432H17.0053V15.0341H14.3386V4.91971Z" fill="white"/>
                    </svg>
                </div>
            </Link>
            <Link href={'/programs/tech2jobs'} className=' max-w-[400px] md:max-w-[31%] relative more-card'>
                <Image src={jobs} alt='tech2jobs image' className=' w-full aspect-video object-cover'/>
                <div className=' flex items-center gap-2 z-30 absolute bottom-5 left-4 text-white-10'> <p>Tech2Jobs </p>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3386 4.91971L2.86315 16.3952L0.977539 14.5096L12.453 3.0341H2.33863V0.367432H17.0053V15.0341H14.3386V4.91971Z" fill="white"/>
                    </svg>
                </div>
            </Link>
        </div>
      </section>
    </main>
  )
}
