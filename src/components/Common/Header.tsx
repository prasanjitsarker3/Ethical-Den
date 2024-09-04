"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  Home,
  Instagram,
  Menu,
  MoonIcon,
  Phone,
  Route,
  SunIcon,
  X,
} from "lucide-react";
import { Avatar, Button } from "@nextui-org/react";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`${
        scrolling
          ? "bg-white dark:bg-slate-800 fixed w-full z-40"
          : "fixed w-full z-40 bg-white"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto py-3 flex justify-between items-center md:px-0 px-0">
        <div className="">
          <div className="flex items-center gap-3 ">
            <Link
              href={"/"}
              className=" text-2xl font-bold vigaRegular text-gray-400"
            >
              NORT
              <span className="font-bold vigaRegular text-[#f6941e]">H</span>WAY
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <div className=" flex items-center gap-3">
            <h1 className="text-lg text-[#1F2937] hover:text-[#f6941e] cursor-pointer">
              Home
            </h1>
            <h1 className="text-lg text-slate-800 hover:text-[#f6941e] cursor-pointer">
              About us
            </h1>
            <h1 className="text-lg text-[#f6941e] flex items-center cursor-pointer">
              Study Distention <ChevronDown className="mt-1" />
            </h1>
            <h1 className="text-lg text-slate-800 flex items-center hover:text-[#f6941e] cursor-pointer">
              Gallery <ChevronDown className=" mt-1" />
            </h1>
            <h1 className="text-lg text-slate-800 hover:text-[#f6941e] cursor-pointer">
              Blogs
            </h1>
            <h1 className="text-lg text-slate-800 hover:text-[#f6941e] cursor-pointer">
              Contact us
            </h1>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button className=" px-4 py-1 border border-[#f6941e] text-[#f6941e] hover:bg-[#f6941e] hover:text-white flex items-center gap-1">
            Enquired Now <ArrowRight size={16} />
          </button>
        </div>
        <button className="md:hidden text-slate-800" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden md:hidden"
      >
        <div className="flex flex-col items-center bg-white dark:bg-slate-800 pb-32 space-y-3">
          <h1 className="text-lg text-[#1F2937] hover:text-[#f6941e] cursor-pointer">
            Home
          </h1>
          <h1 className="text-lg text-slate-800 hover:text-[#f6941e] cursor-pointer">
            About us
          </h1>
          <h1 className="text-lg text-[#f6941e] flex items-center">
            Study Distention <ChevronDown className="mt-1" />
          </h1>
          <h1 className="text-lg text-slate-800 flex items-center hover:text-[#f6941e] cursor-pointer">
            Gallery <ChevronDown className=" mt-1" />
          </h1>
          <h1 className="text-lg text-slate-800 hover:text-[#f6941e] cursor-pointer">
            Blogs
          </h1>
          <h1 className="text-lg text-slate-800 hover:text-[#f6941e] cursor-pointer">
            Contact us
          </h1>
          <button className=" px-4 py-1 border border-[#f6941e] text-[#f6941e] hover:bg-[#f6941e] hover:text-white flex items-center gap-1">
            Enquired Now <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
