"use client";
import Image from "next/image";
import React from "react";

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

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Centered text inside container */}
      <div className="container mx-auto h-full relative z-20">
        <div className="flex justify-between items-center h-full md:px-0 px-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Study In USA
          </h1>
          <h1 className="text-lg md:text-xl font-light text-white">
            Home / Study / USA
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
