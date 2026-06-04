"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      {open && isMobile() && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-[150] lg:hidden"
        />
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: "-100%" }}
            className="px-6 z-[200] pt-14 pb-10 bg-neutral-100 dark:bg-neutral-900 text-secondary dark:text-neutral-300 border-r border-neutral-200 dark:border-neutral-800 w-[14rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between transition-colors duration-300"
          >
            <div className="flex-1 overflow-auto mb-10">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 rounded-full backdrop-blur-sm flex items-center justify-center z-50 transition-colors duration-300"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["home", "about", "projects", "experience", "blog", "contact"];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the entry that is currently intersecting the viewport
      const visibleEntry = entries.find(entry => entry.isIntersecting);
      if (visibleEntry) {
        setActiveSection(visibleEntry.target.id);
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when the section occupies the center of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  const isActive = (href: string) => {
    if (pathname === "/") {
      const hash = href.split("#")[1] || "home";
      return activeSection === hash;
    } else {
      if (href === "/#blog" && pathname.startsWith("/blog")) {
        return true;
      }
      if (href === "/#projects" && pathname.startsWith("/projects")) {
        return true;
      }
      return false;
    }
  };

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) &&
              "bg-white dark:bg-neutral-800 shadow-lg text-primary dark:text-white",
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500",
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          className="text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
        >
          <link.icon className="h-4 w-4 flex-shrink-0" />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  const [openImage, setOpenImage] = useState(false);

  return (
    <>
      <div className="flex space-x-3 items-center">
        <Image
          src="/images/janhavi.png"
          alt="Janhavi Sangeet"
          height="48"
          width="48"
          onClick={() => setOpenImage(true)}
          className="object-cover object-top rounded-full flex-shrink-0 border cursor-pointer hover:scale-105 transition duration-300"
        />

        <div className="flex text-sm flex-col">
          <p className="font-bold text-primary  dark:text-white text xs">
            Janhavi Sangeet
          </p>

          {/* <p className="font-light text-secondary text-xs"> */}
          <p className="font-light text-primary dark:text-white text-xs ">
            Full Stack Developer (MERN)
          </p>
        </div>
      </div>

      <AnimatePresence>
        {openImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenImage(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/images/janhavi.png"
                alt="Profile"
                width={350}
                height={350}
                className="rounded-3xl object-cover shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
