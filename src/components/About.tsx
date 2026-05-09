"use client";
import { Paragraph } from "@/components/Paragraph";
import { Highlight } from "./Highlight";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/about/profile1.jpeg",
    "/images/about/profile2.jpeg",
    "/images/about/profile3.jpeg",
    "/images/about/profile4.jpeg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              // className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
              className="rounded-2xl object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 hover:scale-105 transition duration-300"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey, I&apos;m Janhavi — <Highlight> MERN stack developer </Highlight>{" "}
          passionate about building modern web applications and turning ideas
          into real-world solutions.
        </Paragraph>

        <Paragraph className=" mt-4">
          I&apos;ve worked on projects like a{" "}
          <Highlight>
            project management SaaS platform, an EdTech application, and a PDF
            management system
          </Highlight>{" "}
          during my internship, where I focused on creating scalable features,
          improving user experience, and building efficient full-stack
          workflows.
        </Paragraph>

        <Paragraph className=" mt-4">
          I enjoy exploring different areas of web development, solving problems
          through code, and continuously improving my skills by working on
          practical projects and learning new technologies.
        </Paragraph>

        <Paragraph className=" mt-4">
          Currently, I&apos;m also learning <Highlight>Next.js</Highlight> and
          exploring ways to build more optimized and production-ready
          applications.
        </Paragraph>

        <Paragraph className=" mt-4">
          Beyond coding, I enjoy <Highlight>dancing</Highlight>, traveling, and
          discovering new experiences that inspire creativity and fresh
          perspectives.
        </Paragraph>

        <Paragraph className=" mt-4">
          This space is where I share my projects, learning experiences, and
          insights from my journey in web development.
        </Paragraph>

        <Paragraph className=" mt-4">Thanks for stopping by.</Paragraph>
      </div>
    </div>
  );
}
