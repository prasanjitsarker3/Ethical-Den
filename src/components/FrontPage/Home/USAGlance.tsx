"use client";
import React from "react";
import { motion } from "framer-motion";

const USAGlance = () => {
  const galanceData = [
    {
      id: 1,
      name: "Course Duration",
      first: "4 Years (Bachelor's) 2 Years (Master's)",
    },
    {
      id: 2,
      name: "Intake",
      first: "January,May,September",
    },
    {
      id: 3,
      name: "Application Free",
      first: "40 To 200 (USD)",
    },
    {
      id: 4,
      name: "Requirements",
      first: "GRE/GMAT + IELTS/TOEFL/PTE, Academics-Above 55%",
    },
    {
      id: 4,
      name: "Language Proficiecy",
      first: "IELTS- 6+, TOEFL-70+, Duolingo-90+, PTE-50+",
    },
    {
      id: 4,
      name: "Tution Fee (Yearly)",
      first: "10000 To 55000 (USD)",
    },
    {
      id: 4,
      name: "Living Cost (Yearly)",
      first: "10000 To 18000 (USD)",
    },
    {
      id: 4,
      name: "Visa Application",
      first: "160(USD) SEVIS Fee 350 (USD)",
    },
    {
      id: 4,
      name: "Air Ticket",
      first: "100000 To 150000 (BDT)",
    },
    {
      id: 4,
      name: "Processing Time",
      first: "9-12 Months",
    },
    {
      id: 4,
      name: "Part Time Work",
      first: "20 Hrs (per Week)",
    },
    {
      id: 4,
      name: "Post Study Work Permit",
      first: "Months Extension For STEM, (Science, Tech, Engg & Maths)",
    },
  ];
  return (
    <div className=" w-full container mx-auto md:px-0 px-8 py-16">
      <div>
        <h1 className=" text-3xl md:text-5xl font-bold text-slate-800 py-12 text-center">
          <span className="font-bold text-[#f6941e] ">USA</span> At a Glance
        </h1>
        <div className=" grid md:grid-cols-4 gap-x-2">
          {galanceData.map((data) => (
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              transition={{ duration: 0.5, timing: "easeInOut" }}
              key={data.id}
              className="bg-white h-36 shadow-md rounded-sm"
            >
              <div className=" text-center">
                <h1 className=" bg-[#f6941e] text-white text-lg py-3">
                  {data.name}
                </h1>
                <h1 className=" text-base pt-6">{data.first}</h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default USAGlance;
