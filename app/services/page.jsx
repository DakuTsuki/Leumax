import Image from "next/image";
import React from "react";
import uiux from "@/public/ui-ux.png";
import cloud from "@/public/connection.png";
import web from "@/public/application.png";
import servicesImg from "@/public/services.jpg";
import digital from "@/public/digital-marketing.png";
import "animate.css";

export default function Services() {
  return (
    <div className=" text-base xl:text-lg relative">
      <section className="  relative hero-img">
        <Image
          src={servicesImg}
          alt="contact page background image"
          className=" w-full h-96 object-cover relative"
        />
        <div className=" animate__animated animate__slideInLeft text-white-10 absolute left-0 right-0 m-auto top-0 bottom-0 z-30  px-5 lg:px-16 py-24 flex flex-col items-center justify-center text-center">
          <h2 className=" lg:text-5xl md:text-4xl font-medium leading-normal text-3xl">
            Our Services
          </h2>
          <p className=" capitalize mt-5 max-w-[600px]">
            From innovative startups to big name corporations, <br />
            we help tech companies around the world turn their challenging ideas
            into secure and viable products.
          </p>
        </div>
      </section>

      {/* amazing team */}

      <section className=" animate__animated animate__fadeIn px-5 md:px-10 lg:px-16 py-24 bg-white-10">
        <div className=" flex flex-col md:justify-between md:flex-row ">
          <p className=" text-sm md:text-base text-orange-10">Our Services</p>
          <div className=" md:w-[70%]">
            <h2 className=" lg:text-5xl md:text-4xl text-2xl font-medium leading-snug">
              Build and scale your business fast with our world-class senior
              developers
            </h2>
            <p className=" max-w-[600px] pt-5">
              We provide people & businesses everywhere access to safe and
              affordable technological services
            </p>
          </div>
        </div>
        <div
          className=" flex justify-center lg:justify-between items-center
        flex-wrap gap-y-10 gap-x-10 lg:gap-x-0 mt-12"
        >
          <div
            className=" relative max-w-[500px] md:max-w-[310px] lg:max-w-[48%] md:py-16 flex flex-col lg:flex-row items-center
            gap-x-8 shadow-lg px-4 py-12 rounded-lg lg:px-8 lg:gap-5 lg:items-start lg:py-12"
          >
            <Image src={web} alt="web icon" className=" w-[60px] h-[60px]" />
            <div className=" text-center mt-8 lg:text-left lg:mt-0">
              <h4 className=" text-lg text-darkgray-10">SOFTWARE</h4>
              <h3 className=" text-xl pt-3 pb-3 font-medium ">
                Web & Mobile Development
              </h3>
              <p>
                We build and deploy quality, scalable and secure web and mobile
                apps products in a easy way.
              </p>
            </div>
          </div>
          <div
            className=" relative max-w-[500px] md:max-w-[310px] lg:max-w-[48%] md:py-16 md:-mb-32 flex flex-col lg:flex-row items-center
            gap-x-8 shadow-lg px-4 py-12 rounded-lg lg:px-8 lg:gap-5 lg:items-start lg:py-12"
          >
            <Image src={uiux} alt="web icon" className=" w-[60px] h-[60px]" />
            <div className=" text-center mt-8 lg:text-left lg:mt-0">
              <h4 className=" text-lg text-darkgray-10">PRODUCT DESIGN</h4>
              <h3 className=" text-xl pt-3 pb-3 font-medium ">UX/UX Design</h3>
              <p>
                We create designs that convert browsers into loyal, paying
                customers who become your brand promoters.
              </p>
            </div>
          </div>
          <div
            className="relative max-w-[500px] md:max-w-[310px] lg:max-w-[48%] md:py-16 flex flex-col lg:flex-row items-center
            gap-x-8 shadow-lg px-4 py-12 rounded-lg lg:px-8 lg:gap-5 lg:items-start lg:py-12"
          >
            <Image
              src={digital}
              alt="web icon"
              className=" w-[60px] h-[60px]"
            />
            <div className=" text-center mt-8 lg:text-left lg:mt-0">
              <h4 className=" text-lg text-darkgray-10">MARKETING</h4>
              <h3 className=" text-xl pt-3 pb-3 font-medium">
                Digital Marketing
              </h3>
              <p>
                We provide an agile digital transformation services. We offer
                enterprise consulting and assistance in reaching your business
                goals.
              </p>
            </div>
          </div>
          <div
            className=" relative max-w-[500px] md:max-w-[310px] lg:max-w-[48%] md:py-16 md:-mb-32 flex flex-col lg:flex-row items-center
            gap-x-8 shadow-lg px-4 py-12 rounded-lg lg:px-8 lg:gap-7 lg:items-start lg:py-12"
          >
            <Image src={cloud} alt="web icon" className=" w-[60px] h-[60px]" />
            <div className=" text-center mt-8 lg:text-left lg:mt-0">
              <h4 className=" text-lg text-darkgray-10">NETWORKING</h4>
              <h3 className=" text-xl pt-3 pb-3 font-medium ">
                Cloud & Data Engineering
              </h3>
              <p>
                We optimize infrastructure and applications on the cloud for IT
                growth infrastructure and organization to support your business
                into the future.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}
