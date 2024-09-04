"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/128/1584/1584897.png",
    title: "Clients profile",
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/128/14753/14753052.png",
    title: "Onboarding meeting",
  },
  {
    id: 3,
    image: "https://cdn-icons-png.flaticon.com/128/751/751463.png",
    title: "University search",
  },
  {
    id: 4,
    image: "https://cdn-icons-png.flaticon.com/128/2815/2815429.png",
    title: "Statement purpose",
  },
  {
    id: 5,
    image: "https://cdn-icons-png.flaticon.com/128/1940/1940690.png",
    title: "University Shortlist",
  },
];
const newSteps = [
  {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/128/942/942799.png",
    title: "University Application",
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/128/942/942799.png",
    title: "Arranging interview",
  },
  {
    id: 3,
    image: "https://cdn-icons-png.flaticon.com/128/179/179457.png",
    title: "Visa application",
  },
];

const Application = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="pb-12">
        <h1 className="text-2xl md:text-5xl font-bold vigaRegular text-slate-800 text-center">
          <span className="font-bold vigaRegular text-[#f6941e]">Our</span>{" "}
          Application Process
        </h1>
        <p className="text-slate-500 text-center pt-2 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className=" relative w-full mx-auto md:px-0 px-8">
        <div className=" hidden md:block">
          <div className="absolute top-1/3 left-28 right-28 transform -translate-y-1/2 h-0.5 z-0">
            <div className="border border-dashed border-gray-300"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-5 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="w-full space-y-5">
              <div className="flex justify-center">
                <motion.div
                  whileHover={{
                    backgroundColor: "#f8a94b",
                    transition: { duration: 0.2 },
                  }}
                  className={`${
                    step.id === 8
                      ? "bg-[#f6941e]"
                      : "bg-white border border-dashed border-gray-400"
                  } w-24 h-24 md:w-32 md:h-32 z-10 rounded-full flex justify-center items-center m-4 md:m-0`}
                >
                  <Image
                    src={step.image}
                    alt={`Step ${step.id}`}
                    width={50}
                    height={50}
                  />
                </motion.div>
              </div>
              <motion.div
                className="h-20 border border-slate-200 px-12 md:py-2 py-4"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
              >
                <h1 className="text-2xl text-slate-800">{step.title}</h1>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative w-full mx-auto mt-16 md:px-0 px-8">
        <div className=" hidden md:block">
          <div className=" w-1/2 absolute top-1/3 left-28 right-0 transform -translate-y-1/2 h-0.5 z-0">
            <div className="border border-dashed border-gray-300 mr-16"></div>
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-5 gap-8">
          {newSteps.map((step) => (
            <div key={step.id} className="w-full space-y-5">
              <div className="flex justify-center">
                <motion.div
                  whileHover={{
                    backgroundColor: "#f8a94b",
                    transition: { duration: 0.2 },
                  }}
                  className={`${
                    step.id === 3
                      ? "bg-[#f6941e]"
                      : "bg-white border border-dashed border-gray-400"
                  } w-24 h-24 md:w-32 md:h-32 z-10 rounded-full flex justify-center items-center m-4 md:m-0`}
                >
                  <Image
                    src={step.image}
                    alt={`Step ${step.id}`}
                    width={50}
                    height={50}
                  />
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
                className=" h-20 border border-slate-200 px-12 md:py-2 py-4"
              >
                <h1 className=" text-2xl text-slate-800">{step.title}</h1>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Application;
