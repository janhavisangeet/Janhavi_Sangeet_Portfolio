"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto my-10">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.slug}
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Link
            key={`blog-${blog.title}`}
            href={`/blog/${blog.slug}`}
            className="relative my-10 block"
            onMouseEnter={() => setHovered(blog.slug)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence mode="wait">
              {hovered === blog.slug && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1.02,
                    scaleY: 1.03,
                  }}
                  exit={{
                    opacity: 0,
                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  className="
                    absolute
                    z-0
                    pointer-events-none
                    inset-0
                    h-full
                    w-full
                    rounded-2xl
                    bg-neutral-100
                    dark:bg-neutral-900
                    border
                    border-neutral-200
                    dark:border-neutral-800
                    shadow-lg
                  "
                />
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-20 p-3 rounded-2xl">
              <Image
                src={blog.image}
                alt="thumbnail"
                height="200"
                width="200"
                className="
                  rounded-xl
                  object-cover
                  h-40
                  w-60
                  shadow-sm
                "
              />

              <div className="flex flex-col col-span-3">
                <Heading className="text-lg md:text-lg lg:text-lg text-black dark:text-white">
                  {blog.title}
                </Heading>

                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 text-neutral-700 dark:text-neutral-300">
                  {blog.description}
                </Paragraph>

                <div className="flex flex-wrap gap-2 mt-4">
                  {blog.tags?.map((tag, index) => (
                    <span
                      key={`tag-${blog.slug}-${index}`}
                      className="
                        text-xs
                        px-2
                        py-1
                        text-secondary
                        dark:text-neutral-300
                        border
                        border-neutral-200
                        dark:border-neutral-700
                        bg-white
                        dark:bg-neutral-800
                        rounded-md
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
