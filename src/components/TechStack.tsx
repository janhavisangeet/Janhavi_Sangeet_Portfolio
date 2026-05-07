import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";

export const TechStack = () => {
  const stack = [
    {
      title: "HTML",
      src: "/images/logos/html logo.png",
    },
    {
      title: "CSS",
      src: "/images/logos/css3-logo.png",
    },
    {
      title: "JavaScript",
      src: "/images/logos/javascript-logo.png",
    },
    {
      title: "TypeScript",
      src: "/images/logos/typescript_logo_.png",
    },
    {
      title: "React",
      src: "/images/logos/react logo.png",
    },
    {
      title: "Node.js",
      src: "/images/logos/nodejs.png",
    },
    {
      title: "Express",
      src: "/images/logos/express-js-logo.png",
    },
    {
      title: "MongoDB",
      src: "/images/logos/mongodb logo.png",
    },
    {
      title: "Tailwind CSS",
      src: "/images/logos/tailwind.png",
    },
    {
      title: "GitHub",
      src: "/images/logos/github logo.png",
    },
    {
      title: "Postman",
      src: "/images/logos/postman logo.png",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",
    },
  ];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-6"
      >
        Tech Stack
      </Heading>

      <div className="flex flex-wrap gap-4">
        {stack.map((item) => (
          <div
            key={item.title}
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-2
              w-24
              h-24
              rounded-2xl
              border
              border-neutral-200
              dark:border-neutral-800
              bg-white
              dark:bg-neutral-900
              hover:scale-105
              transition-all
              duration-300
              shadow-sm
              hover:shadow-lg
            "
          >
            <Image
              src={item.src}
              width={40}
              height={40}
              alt={item.title}
              className="object-contain"
            />

            <p className="text-xs text-neutral-700 dark:text-neutral-300 text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
