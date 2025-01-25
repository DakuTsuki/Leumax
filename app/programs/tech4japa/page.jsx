import React from 'react'
import Image from 'next/image'
import hero from '@/public/programs/tech4japa-bg.jpg'
import jobs from '@/public/programs/tech2jobs-more.jpg'
import corp from '@/public/programs/corps2tech-more.png'
import kids from '@/public/programs/tech2kids-more.jpg'
import mark from '@/public/mark.png'
import Link from 'next/link'
import 'animate.css';
import ProgramForm from '@/components/ProgramForm'

export default function Tech2Business() {

  const courses = [
    "Software Engineering Certificate Program (SECP)",
    "Product Design Certificate Program (PDCP)",
    "Data Analytics Certificate Program (DACP)",
    "Web Development Certificate Program (WACP)",
    "Cyber Security Certificate Program (CSCP)",
];

  return (
    <main className="text-base xl:text-lg relative">
      <section className=" relative hero-img">
        <Image
          src={hero}
          alt="tech2jobs page background image"
          className=" w-full h-96 object-cover relative"
        />
        <div className=" animate__animated animate__slideInLeft text-white-10 absolute z-30 left-0 right-0 m-auto top-0 bottom-0 px-5 lg:px-16 flex flex-col items-center justify-center max-w-[600px] text-center">
          <h2 className=" lg:text-5xl md:text-4xl font-medium leading-normal text-3xl">Tech4Japa</h2>
        </div>
      </section>

      <section className=" animate__animated animate__fadeIn px-5 lg:px-16 py-24 max-w-[700px]  m-auto">
        <div>
          <h2 className=" text-2xl md:text-3xl md font-medium border-b pb-2 border-b-lightGray-10">
            Tech4Japa
          </h2>
          <p className=" pt-10">
          Tech4Japa is a tech program targeted program at individuals that have plans to re-locate abroad and be job ready in the tech industry. Our courses are taken by certified seasoned professionals with hands on knowledge.
          </p>
        </div>
        <div className=' pt-10'>
            <h3 className=' font-medium text-xl border-b pb-2'>Courses</h3>
            <ul className=' list-disc flex flex-col gap-y-3 mt-4'>
            <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <div>
                        <h4 className=' font-medium'>Software Engineering Certificate Program (SECP)                     </h4>
                        <span className=' text-darkgray-10 text-sm'>Python, Nodejs, JavaScript, Git, SQL, MongoDB, Docker, Postman.</span>
                      </div>
                  </li>
                  <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <div>
                        <h4 className=' font-medium'>Product Design Certificate Program (PDCP)</h4>
                        <span className=' text-darkgray-10 text-sm'>UI & UX, Product Design, Figma, Photoshop, Illustrator, Design Thinking.</span>
                      </div>
                  </li>
                  <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <div>
                        <h4 className=' font-medium'>Data Analytics Certificate Program (DACP)</h4>
                        <span className=' text-darkgray-10 text-sm'>Python, Excel, Tableua, PowerBi, SQL, NumPY.</span>
                      </div>
                  </li>
                  <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <div>
                        <h4 className=' font-medium'>Web Development Certificate Program (WACP)</h4>
                        <span className=' text-darkgray-10 text-sm'>HTML5, CSS3, Boostrap 5, JavaScript & ReactJS, Nodejs, PHP, SQL, MongoDB, Git.</span>
                      </div>
                  </li>
                  <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <div>
                        <h4 className=' font-medium'>Cyber Security Certificate Program (CSCP)</h4>
                        <span className=' text-darkgray-10 text-sm'>Metasploit framework, Kali Linux Os, Parrot OS, Nmap, Wireshark, Kali Linux, Firewalls, Metasploit, Parrot os, Nmap, kali Linux</span>
                      </div>
                  </li>
            </ul>
        </div>
        <ProgramForm courses={courses} price={"N250,000.00"} program={"Tech4Japa"}/>
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
            <Link href={'/programs/tech2jobs'} className=' max-w-[400px] md:max-w-[31%] relative more-card'>
                <Image src={jobs} alt='tech2jobs image' className=' w-full aspect-video object-cover'/>
                <div className=' flex items-center gap-2 z-30 absolute bottom-5 left-4 text-white-10'> <p>Tech2Jobs </p>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3386 4.91971L2.86315 16.3952L0.977539 14.5096L12.453 3.0341H2.33863V0.367432H17.0053V15.0341H14.3386V4.91971Z" fill="white"/>
                    </svg>
                </div>
            </Link>
            <Link href={'/programs/tech2kids'} className=' max-w-[400px] md:max-w-[31%] relative more-card'>
                <Image src={kids} alt='corps image' className=' w-full aspect-video object-cover'/>
                <div className=' flex items-center gap-2 z-30 absolute bottom-5 left-4 text-white-10'><p>Tech2Kids </p>
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
