"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative h-[60vh] w-full">
      <Image
        src={
          "https://img.freepik.com/free-photo/people-celebrating-canada-day_23-2151440532.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
        }
        alt="Wooden house"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      <div className="container mx-auto h-full relative z-20">
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center md:gap-0 gap-6 h-full md:px-0 px-8">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-semibold text-white"
          >
            Study In USA
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl font-light text-white"
          >
            Home / Study / USA
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
