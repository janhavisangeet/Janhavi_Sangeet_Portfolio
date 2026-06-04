import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "HTML",
      src: "/images/logos/html logo.png",
      hoverClass: "hover:border-orange-500 hover:shadow-orange-500/10 dark:hover:shadow-orange-500/20",
    },
    {
      title: "CSS",
      src: "/images/logos/css3-logo.png",
      hoverClass: "hover:border-blue-500 hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20",
    },
    {
      title: "JavaScript",
      src: "/images/logos/JavaScript.png",
      hoverClass: "hover:border-yellow-500 hover:shadow-yellow-500/10 dark:hover:shadow-yellow-500/20",
    },
    {
      title: "TypeScript",
      src: "/images/logos/Typescript.png",
      hoverClass: "hover:border-blue-600 hover:shadow-blue-600/10 dark:hover:shadow-blue-600/20",
    },
    {
      title: "React",
      src: "/images/logos/react logo.png",
      hoverClass: "hover:border-cyan-400 hover:shadow-cyan-400/10 dark:hover:shadow-cyan-400/20",
    },
    {
      title: "Node.js",
      src: "/images/logos/nodejs.png",
      hoverClass: "hover:border-green-500 hover:shadow-green-500/10 dark:hover:shadow-green-500/20",
    },
    {
      title: "Express",
      src: "/images/logos/express-js-logo.png",
      hoverClass: "hover:border-neutral-500 dark:hover:border-neutral-400 hover:shadow-neutral-500/10 dark:hover:shadow-neutral-400/20",
    },
    {
      title: "MongoDB",
      src: "/images/logos/mongodb logo.png",
      hoverClass: "hover:border-emerald-600 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/20",
    },
    {
      title: "Tailwind CSS",
      src: "/images/logos/tailwind.png",
      hoverClass: "hover:border-sky-400 hover:shadow-sky-400/10 dark:hover:shadow-sky-400/20",
    },
    {
      title: "GitHub",
      src: "/images/logos/github logo.png",
      hoverClass: "hover:border-neutral-800 dark:hover:border-neutral-200 hover:shadow-neutral-800/10 dark:hover:shadow-neutral-200/20",
    },
    {
      title: "Postman",
      src: "/images/logos/postman logo.png",
      hoverClass: "hover:border-orange-600 hover:shadow-orange-600/10 dark:hover:shadow-orange-600/20",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",
      hoverClass: "hover:border-black dark:hover:border-white hover:shadow-black/10 dark:hover:shadow-white/20",
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
            className={twMerge(
              `
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
              `,
              item.hoverClass
            )}
          >
            <Image
              src={item.src}
              width={40}
              height={40}
              alt={item.title}
              className="object-contain"
            />

            <p className="text-xs text-neutral-700 dark:text-neutral-300 text-center font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

