import React from 'react'
import Image from 'next/image'
import iot from '@/public/robotics-bg.jpg'
import ai from '@/public/ai.png'
import Button from '@/components/Button'
import Faq from '@/components/Faq'

export default function IoT() {

  const data = ([
    {
      title: 'IoT',
      body: `IoT or the Internet of Things refers to the physical objects that are connected to the internet and share data with other devices. It contains sensors, software, processing abilities, and many other technologies. IoT devices connect and exchange data with various systems and devices over different communication networks. \r
      IoT is the most used technology nowadays. Whether a kitchen appliance or security monitor, IoT allows you to connect objects to the networks through embedded devices. Now, communication between processes, people, and things is possible without any hindrance. With less human interference, physical objects can share data and collect it through the cloud, mobile technologies, analytics, big data, cloud computing, and more.`,
    },
    {
      title: 'Robotics',
      body: "Robotics is the study and development of robots and their robotic systems. Robotics is an interdisciplinary branch of engineering and science that combines various engineering disciplines such as: Mechanical, Electrical, Information, Computer science.",
    },
    {
      title: 'Artificial Intelligence',
      body: "Artificial intelligence (AI) is technology that enables computers and machines to simulate human learning, comprehension, problem solving, decision making, creativity and autonomy. Applications and devices equipped with AI can see and identify objects. They can understand and respond to human language. They can learn from new information and experience. They can make detailed recommendations to users and experts. They can act independently, replacing the need for human intelligence or intervention (a classic example being a self-driving car). ",
    },
  ])
  const itemClasses = {
    base: "pt-4",
    title: "text-xl",
    indicator: "ml-auto",
    content: "pb-8"
  };

  

  return (
    <div className=' text-base xl:text-lg relative'>
        <section className=" relative hero-img">
        <Image
          src={iot}
          alt="iot robotics page background image"
          className="  w-full h-96 object-cover relative"
        />
        <div className=" text-white-10 absolute left-0 right-0 m-auto top-0 bottom-0  z-30 px-5 lg:px-16 py-24 flex flex-col items-center justify-center max-w-[600px] text-center">
          <h2 className=" lg:text-5xl md:text-4xl font-medium leading-normal text-3xl">Ai & Robotics</h2>
          <p className=" capitalize mt-5 max-w-[600px]">
          Robots, IoT and artificial intelligence are 
          leading digital transformation          </p>
        </div>
      </section>

      {/* faq section  */}

      <section className=" px-5 lg:px-16 py-24 ">
          <div className=' max-w-[900px] mx-auto'>
            <Faq data={data} style={itemClasses}/>
          </div>
      </section>

      <section className=" px-5 lg:px-16 py-24  ">
        <div className=' flex flex-col md:flex-row md:gap-x-5 md:justify-between items-center max-w-[1000px] mx-auto'>
        <div className=' md:w-[40%]'>
            <Image src={ai} alt='Ai image' className=' w-full' />
        </div>
        <div className=' md:max-w-[56%] mt-10 md:mt-0 text-center md:text-left'>
            <h3 className=' text-2xl lg:text-3xl font-medium'>We trained and implement AI for companies</h3>
            <p className=' py-4'>IoT is the most used technology nowadays. Whether a kitchen appliance or security monitor, IoT allows you to connect objects to the networks through embedded devices. Now, communication between processes, people, and things is possible without any hindrance.</p>
            <Button title={"Contact us"} variant={"btn-orange"} type={"button"} />
        </div>
        </div>
      </section>
    </div>
  )
}
