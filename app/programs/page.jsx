import React from "react";
import Image from "next/image";
import programs from "@/public/programs-bg.jpg";
import tech2jobs from "@/public/programs/tech2jobs.jpg";
import tech2kids from "@/public/programs/tech2kids.jpg";
import corps2tech from "@/public/programs/corps2tech.png";
import tech4japa from "@/public/programs/tech4japa.jpg";
import Button from "@/components/Button";
import Link from "next/link";
import "animate.css";

export default function Programs() {
  return (
    <main className=" text-base xl:text-lg relative">
      <section className=" relative hero-img">
        <Image
          src={programs}
          alt="contact page background image"
          className=" w-full h-96 object-cover relative"
        />
        <div className=" animate__animated animate__slideInLeft text-white-10 absolute left-0 right-0 m-auto top-0 bottom-0 px-5 z-30 lg:px-16 py-24 flex flex-col items-center justify-center max-w-[600px] text-center">
          <h2 className=" lg:text-6xl md:text-5xl font-medium leading-normal text-3xl">
            Our Programs
          </h2>
          <p className=" capitalize mt-5">
            For more information about our courses, get in touchwith Leumax
            Technology contacts
          </p>
        </div>
      </section>

      <section className=" animate__animated animate__fadeIn px-5 lg:px-16 py-24 ">
        <div className=" flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="  lg:text-5xl md:text-4xl text-2xl font-medium leading-snug md:max-w-[50%] max-w-[300px]">
            Explore our training programme
          </h2>
          <p className=" max-w-[500px] pt-4 md:max-w-[50%] lg:max-w-[450px]">
            We have years of experience and hands-on you can bank on. We develop
            Solutions and Tools to ease your business process via the web.{" "}
          </p>
        </div>

        <div className=" mt-24 max-w-[1000px] m-auto flex flex-col gap-24">
          <div className=" flex flex-col md:flex-row items-center justify-between md:gap-x-5 lg:gap-x-0">
            <Image
              src={tech2jobs}
              alt=" working man image"
              className=" max-w-[400px] h-[500px] md:h-auto  md:max-w-[40%] md:aspect-square object-cover"
            />
            <div className=" max-w-[500px] mt-8 md:mt-0">
              <h3 className=" text-3xl font-medium">Tech2jobs</h3>
              <p className=" pt-4 pb-8">
                Tech2Jobs is a basic to advanced tech training to get the youth
                bridge the employability gap. This is a 4-month programme
                powered by Leumax Technology.
              </p>
              <Link href={"/programs/tech2jobs"}>
                <Button
                  title={"Learn more"}
                  variant={"btn-orange"}
                  type={"button"}
                />
              </Link>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row items-center justify-between md:gap-x-5 lg:gap-x-0">
            <Image
              src={tech2kids}
              alt=" kids image"
              className=" max-w-[400px] h-[500px] md:h-auto  md:max-w-[40%] md:aspect-square object-cover"
            />
            <div className=" max-w-[500px] mt-8 md:mt-0">
              <h3 className=" text-3xl font-medium">Tech2kids</h3>
              <p className=" pt-4 pb-8">
                The earlier your kids begin to develop these tech skills, the
                more proficient they will become before they become adults, and
                it will foster opportunities for good analytical, computational
                and critical thinking skills
              </p>
              <Link href={"/programs/tech2kids"}>
                <Button
                  title={"Learn more"}
                  variant={"btn-orange"}
                  type={"button"}
                />
              </Link>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row items-center justify-between md:gap-x-5 lg:gap-x-0">
            <Image
              src={corps2tech}
              alt=" corps image"
              className=" max-w-[400px] h-[500px] md:h-auto  md:max-w-[40%] md:aspect-square object-cover"
            />
            <div className=" max-w-[500px] mt-8 md:mt-0">
              <h3 className=" text-3xl font-medium">Corps2tech</h3>
              <p className=" pt-4 pb-8">
                Corp2tech is tech educational programme for the corp members
                serving in the federation. Our goal is to create an insight
                avenue for the graduates interested in a technical skill and
                help bridge the employability gap in the country.
              </p>
              <Link href={"/programs/corps2tech"}>
                <Button
                  title={"Learn more"}
                  variant={"btn-orange"}
                  type={"button"}
                />
              </Link>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row items-center justify-between md:gap-x-5 lg:gap-x-0">
            <Image
              src={tech4japa}
              alt=" woman image"
              className=" max-w-[400px] h-[500px] md:h-auto  md:max-w-[40%] md:aspect-square object-cover"
            />
            <div className=" max-w-[500px] mt-8 md:mt-0">
              <h3 className=" text-3xl font-medium">Tech4japa</h3>
              <p className=" pt-4 pb-8">
                Tech4Japa is a tech program targeted program at individuals that
                have plans to re-locate abroad and be job ready in the tech
                industry. Our courses are taken by certified seasoned
                professionals with hands on knowledge.
              </p>
              <Link href={"/programs/tech4japa"}>
                <Button
                  title={"Learn more"}
                  variant={"btn-orange"}
                  type={"button"}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
