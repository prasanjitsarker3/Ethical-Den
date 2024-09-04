import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhyStudy = () => {
  return (
    <div className=" w-full container mx-auto md:px-0 px-8">
      <div className="w-full flex flex-col md:flex-row justify-between gap-24  py-16">
        <div className=" md:w-1/2 w-full h-full mx-auto bg-blue-100">
          <Image
            src={
              "https://img.freepik.com/free-photo/two-students-studying-together-online-with-laptop-park_1150-4115.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
            }
            alt=""
            width={500}
            height={500}
            className=" h-[26rem] w-full shadow-md rounded-sm"
          />
        </div>
        <div className=" md:w-1/2 w-full mx-auto">
          <div className=" space-y-4">
            <h1 className=" text-3xl md:text-5xl font-bold text-slate-800">
              Why Study
              <span className="font-bold text-[#f6941e] ">in USA ?</span>
            </h1>
            <p className=" text-lg text-justify">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-
            </p>
            <h1 className=" text-2xl md:text-3xl font-semibold text-slate-800">
              Quick facts
            </h1>
            <div className=" space-y-2">
              <h1 className=" text-base flex items-center gap-3">
                <Star className=" text-[#f6941e]" />
                USA hosts more than a million international students{" "}
              </h1>
              <h1 className=" text-base flex items-center gap-3">
                <Star className=" text-[#f6941e]" />
                Over 25% of world’s top 100 universities are in the USA
              </h1>
              <h1 className=" text-base flex items-center gap-3">
                <Star className=" text-[#f6941e]" />
                Post-study stay back visas (OPT) up to 3 years for STEM programs
              </h1>
              <h1 className=" text-base flex items-center gap-3">
                <Star className=" text-[#f6941e]" />
                Internships (CPT) up to 12 months while studying
              </h1>
              <h1 className=" text-base flex items-center gap-3">
                <Star className=" text-[#f6941e]" />
                USA hosts more than a million international students{" "}
              </h1>
            </div>
            <button className=" px-3 py-1 bg-[#f6941e] text-white flex items-center gap-2">
              See More <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between gap-24  py-16">
        <div className=" md:w-1/2 w-full mx-auto">
          <div className=" space-y-6">
            <h1 className=" text-3xl md:text-5xl font-bold text-slate-800">
              <span className="font-bold text-[#f6941e] ">Careers</span> &
              Industry
            </h1>
            <p className=" text-lg text-justify">
              One of the most technologically powerful and dynamic countries,
              USA is the largest & most dominant economy globally. Sectors that
              empower this world’s most productive economy include Healthcare,
              Technology, Construction, Retail, Manufacturing, Finance &
              Insurance and Real Estate. Top jobs with high remuneration
              prospects for international students include Medicine, Computer &
              Information Systems Managers, Architectural & Engineering Managers
              and Marketing & Financial Managers. Standard of living in the USA
              is among the highest in the world with high per capita income.
              This nation performs very well in many measures of well-being such
              as income & wealth, health status, jobs and earnings, education &
              skills and environmental quality.
            </p>

            <button className=" px-3 py-1 border border-[#f6941e] hover:bg-[#f6941e] hover:text-white text-slat-800 flex items-center gap-2">
              See More <ArrowRight />
            </button>
          </div>
        </div>
        <div className=" md:w-1/2 w-full h-full mx-auto bg-blue-100">
          <Image
            src={
              "https://img.freepik.com/free-photo/portrait-pensive-young-girl-making-notes_171337-1646.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
            }
            alt=""
            width={500}
            height={500}
            className=" h-96 w-full shadow-md rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyStudy;
