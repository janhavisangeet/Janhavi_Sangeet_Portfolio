"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";

export const WorkHistory = () => {
  return (
    <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12 py-4 mt-8">
      {timeline.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative group/timeline flex md:flex-row flex-col gap-2 md:gap-8"
          key={`timeline-${index}`}
        >
          {/* Glowing node indicator centered on the timeline border line */}
          <div className="absolute -left-8 md:-left-12 top-1.5 flex items-center justify-center">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 dark:bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 dark:bg-emerald-400 border-2 border-white dark:border-black shadow-sm"></span>
            </span>
          </div>

          {/* Date Section */}
          <div className="w-full md:w-40 flex-shrink-0 pt-0.5">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/50">
              {item.date}
            </span>
          </div>

          {/* Experience Card */}
          <div className="flex-1 bg-white dark:bg-neutral-900/30 p-6 rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/60 transition-all duration-300">
            <Heading
              as="h5"
              className="text-lg md:text-xl lg:text-xl font-bold bg-none text-emerald-600 dark:text-emerald-400"
            >
              {item.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-bold text-neutral-800 dark:text-neutral-200 mt-1">
              {item.title}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm text-neutral-600 dark:text-neutral-400 mt-2 mb-4 leading-relaxed">
              {item.description}
            </Paragraph>

            <div className="space-y-2.5">
              {item.responsibilities.map((responsibility, idx) => (
                <Step key={idx}>{responsibility}</Step>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-2.5 items-start my-2">
      <IconCircleCheckFilled className="h-4 w-4 mt-0.5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
      <Paragraph className="text-sm md:text-sm lg:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {children}
      </Paragraph>
    </div>
  );
};

