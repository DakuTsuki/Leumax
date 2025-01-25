import Image from 'next/image'
import React from 'react'
import aboutImg from '@/public/about-us.jpg'
import team1 from '@/public/team1.png'
import team2 from '@/public/team2.png'
import team3 from '@/public/team3.png'
import team4 from '@/public/team4.png'
import team5 from '@/public/team5.png'
import team6 from '@/public/team6.png'
import vision from '@/public/vision.png'
import support from '@/public/support.png'
import target from '@/public/target.png'
import twitter from '@/public/twitter.svg'
import linkedin from '@/public/linkedin.svg'


import node from '@/public/node-js.svg'
import python from '@/public/python.svg'
import js from '@/public/js.svg'
import php from '@/public/php.svg'
import mailchimp from '@/public/mailchimp.svg'
import docker from '@/public/docker.svg'
import Testimonial from '@/components/Testimonial'

export default function AboutUs() {

  const testimonials = [
    {
      id: 1,
      name: "Emmanuel Lawani",
      role: "client",
      body: "Great company to be trained on basic and advanced tech skills. Leumax has a great facility that helps to aid comprehension.",
      male: true
    },
    {
      id: 2,
      name: "Temilola Tolulope Oyenuga",
      role: "Employee",
      body: "I recently had the pleasure of working with Leumax Technology, and I must say their service and expertise exceeded my expectations. From the initial consultation to the final implementation, the team at Leumax demonstrated professionalism, proficiency, and a genuine commitment to delivering top-notch solutions.",
      female: true
    },
    {
      id: 3,
      name: "Nimfa Daniel",
      role: "Client",
      body: "I am thrilled to realized that Leumax Technology and Max Academy is one of the world best innovation founded by a computer guru with aim to regulate and promote first class technology to reflect modern digitalization to enhance personal values through effective skills acquisition to help in controlling and managing the increasing rate of unemployment in the global community to encourage job stability and self reliance. ",
      male: true
    },
    {
      id: 4,
      name: "Uduma Sharon",
      role: "Student, Leumax Academy",
      body: " I recently had the opportunity to enroll in Max Academy's tech training program, and I must say, it exceeded my expectations in every way possible.From the moment I stepped into their modern and dynamic learning environment, I knew I was in for something special. The instructors at Max Academy are not only highly knowledgeable in their respective fields but also incredibly passionate about sharing their expertise with students.",
      female: true
    },
    {
      id: 5,
      name: "Adedayo Olamide",
      role: "Student, Leumax Academy",
      body: "At Leumax Technology & Max Academy! The learning environment is top-notch and a great place to learn everything about tech. The knowledgeable instructors made grasping tech concepts engaging, enjoyable, and easy. It's truly a fantastic place to delve into everything about tech. Highly recommend!",
      female: true
    },
  ]
  return (
    <main className=" text-base xl:text-lg relative">
      <section className=" relative hero-img">
      <Image
          src={aboutImg}
          alt="contact page background image"
          className=" w-full h-96 object-cover relative"
        />
        <div className=" text-white-10 absolute left-0 right-0 m-auto top-0 bottom-0 z-30  px-5 lg:px-16 py-24 flex flex-col items-center justify-center  text-center">
          <h2 className=" lg:text-5xl md:text-4xl font-medium pt-10 lg:pt-20 leading-normal text-3xl">About Leumax Tech</h2>
          <p className=" capitalize mt-5 max-w-[600px]">
            Leumax Technology is a dedicated team passionate about bridging the
            gap between technology and education, empowering individuals and
            businesses{' '}
          </p>
        </div>
      </section>

      {/* leumax technology  */}

      <section className="  px-5 lg:px-16 py-24">
        <div className=" flex flex-col md:flex-row md:justify-between ">
          <p className=" text-sm md:text-base text-orange-10">Why Leumax Technology</p>
          <div className=" md:w-[70%] pt-5 md:pt-0">
            <p className=" text-base md:text-lg lg:text-xl capitalize">
            <span className=' text-darkgray-10'>Leumax is an innovation Centre</span> dedicated to accelerating the application of social capital and technology for <span className=' text-darkgray-10'>economic prosperity.</span>  We’re a technology company focused on building solutions to solve the <span className=' text-darkgray-10'>real-life problems.</span> 
              <br />
              <br />
              The <span className=' text-darkgray-10'>smarter future</span> we are building is fueled by the potential of new technologies that will elevate the ways our people engage with products and the way we solve almost everything with technology.
              <br />
              <br />
              It’s our job to help businesses of all sizes succeed online & offline, and we understand that it’s not a one-size-fits-all type of thing. That’s why we offer a variety of options and solutions tailored to meet your <span className=' text-darkgray-10'>specific needs.</span> 
            </p>
          </div>
        </div>
        <div className=' flex flex-wrap gap-y-16 justify-center md:gap-x-10 lg:gap-x-0 lg:justify-between pt-10'>

          <div className=' max-w-[500px] md:max-w-[300px] lg:max-w-[31%] rounded-lg px-5 py-12 shadow-xl flex flex-col items-center'>
            <div className=' bg-lightGray-10 h-[80px] w-[80px] rounded-full relative'>
              <div className='add-shadow bg-orange-10 h-16 w-16 rounded-full flex justify-center items-center absolute bottom-[5px] right-[5px]'>
              <Image src={target} alt='our mission image' className=' w-10 h-10'/>
              </div>
            </div>
            <div className=' text-center pt-12'>
              <h3 className=' font-medium pb-3 text-xl'>Our Mission</h3>
              <p> To accelerate and solve tech innovative ideas to reality in the digital ecosystem where technology can thrive.</p>
            </div>
          </div>

          <div className=' max-w-[500px] md:max-w-[300px] lg:max-w-[31%] rounded-lg px-5 py-12 shadow-xl flex flex-col items-center'>
            <div className=' bg-lightGray-10 h-[80px] w-[80px] rounded-full relative'>
              <div className='add-shadow bg-orange-10 h-16 w-16 rounded-full flex justify-center items-center absolute bottom-[5px] right-[5px]'>
              <Image src={vision} alt='our mission image' className=' w-10 h-10'/>
              </div>
            </div>
            <div className=' text-center pt-12'>
              <h3 className=' font-medium pb-3 text-xl'>Our Vision</h3>
              <p> To accelerate and solve tech innovative ideas to reality in the digital ecosystem where technology can thrive.</p>
            </div>
          </div>

          <div className=' max-w-[500px] md:max-w-[300px] lg:max-w-[31%] rounded-lg px-5 py-12 shadow-xl flex flex-col items-center'>
            <div className=' bg-lightGray-10 h-[80px] w-[80px] rounded-full relative'>
              <div className='add-shadow bg-orange-10 h-16 w-16 rounded-full flex justify-center items-center absolute bottom-[5px] right-[5px]'>
              <Image src={support} alt='our mission image' className=' w-10 h-10'/>
              </div>
            </div>
            <div className=' text-center pt-12'>
              <h3 className=' font-medium pb-3 text-xl'>Corporate Responsibility</h3>
              <p> To accelerate and solve tech innovative ideas to reality in the digital ecosystem where technology can thrive.</p>
            </div>
          </div>

        </div>
      </section>

      <section className=" px-5 md:px-10 lg:px-16 py-24 bg-white-10">
      <div className=" flex flex-col md:justify-between md:flex-row ">
          <p className=" text-sm md:text-base text-orange-10">Techmology Index</p>
          <div className=' md:w-[70%]'>
          <h2 className=" lg:text-5xl md:text-4xl text-2xl font-medium leading-snug">
          Technology which we are using in our platforms
          </h2>
          <p className=' max-w-[600px] pt-5'>Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.</p>
          </div>
        </div>
        <div className=' flex justify-center lg:justify-between items-center
        flex-wrap gap-y-10 gap-x-10 lg:gap-x-0 mt-12'>
          <div className=' relative w-[180px] border border-lightGray-10 py-16 flex justify-center items-center lg:w-[16%]'>
            <Image src={node} alt='node js image' className=' h-[60px] w-[60px]'/>
            <p className=' w-[75%] h-10 absolute left-0 right-0 mx-auto -bottom-5 border border-lightGray-10 
            rounded-full bg-white-10 flex justify-center items-center'>Node Js</p>
          </div>
          <div className=' relative w-[180px] border border-lightGray-10 py-16 flex justify-center items-center lg:w-[16%]'>
            <Image src={python} alt='node js image' className=' h-[60px] w-[60px]'/>
            <p className=' w-[75%] h-10 absolute left-0 right-0 mx-auto -bottom-5 border border-lightGray-10 
            rounded-full bg-white-10 flex justify-center items-center'>Python</p>
          </div>
          <div className=' relative w-[180px] border border-lightGray-10 py-16 flex justify-center items-center lg:w-[16%]'>
          <Image src={js} alt='node js image' className=' h-[60px] w-[60px]'/>
            <p className=' w-[75%] h-10 absolute left-0 right-0 mx-auto -bottom-5 border border-lightGray-10 
            rounded-full bg-white-10 flex justify-center items-center'>JavaScript</p>
          </div>
          <div className=' relative w-[180px] border border-lightGray-10 py-16 flex justify-center items-center lg:w-[16%]'>
            <Image src={php} alt='node js image' className=' h-[60px] w-[60px]'/>
            <p className=' w-[75%] h-10 absolute left-0 right-0 mx-auto -bottom-5 border border-lightGray-10 
            rounded-full bg-white-10 flex justify-center items-center'>PHP</p>
          </div>
          <div className=' relative w-[180px] border border-lightGray-10 py-16 flex justify-center items-center lg:w-[16%]'>
            <Image src={mailchimp} alt='node js image' className=' h-[60px] w-[60px]'/>
            <p className=' w-[75%] h-10 absolute left-0 right-0 mx-auto -bottom-5 border border-lightGray-10 
            rounded-full bg-white-10 flex justify-center items-center'>Mailchimp</p>
          </div>
          <div className=' relative w-[180px] border border-lightGray-10 py-16 flex justify-center items-center lg:w-[16%]'>
            <Image src={docker} alt='node js image' className=' h-[60px] w-[60px]'/>
            <p className=' w-[75%] h-10 absolute left-0 right-0 mx-auto -bottom-5 border border-lightGray-10 
            rounded-full bg-white-10 flex justify-center items-center'>Docker</p>
          </div>
        </div>
      </section>

      {/* testimonials */}

      <section className=' px-5 lg:px-16 py-24'>
        <div className=' md:w-[70%]'>
            <p className="border border-orange-10 inline px-2 py-1 rounded-full ">Testimonials</p>
            <h2 className=' lg:text-5xl md:text-4xl text-2xl font-medium leading-snug capitalize pt-8'>Amplifying the contentment expressed by our client</h2>
        </div>
        <div className=' pt-20 md:w-[70%] md:pr-5 md:ml-auto'>
          <Testimonial data={testimonials} />
          {/* <div className=' flex flex-col gap-10 items-start border-l border-l-orange-10 px-8 lg:px-16 max-w-[800px]'>
            <p>We have years of experience and hands-on you can bank on. We develop Solutions and Tools to ease your business processes via the web. We also train and support our </p>
            <div className=' flex items-center gap-8'>
              <Image src={avatar} alt='avatar image' width={60} height={60}/>
              <div>
                <p className=' text-lg font-semibold'>Olayode Usman</p>
                <p className=' text-sm'>Andela, Project Manager</p>
              </div>
            </div>
          </div>
          <div className=' flex justify-between items-center pt-20'>
            <Image src={left} alt='left arrow' width={30} height={30}/>
            <Image src={right} alt='right arrow' width={30} height={30}/>
          </div> */}
        </div>
      </section>
    </main>
  )
}
 