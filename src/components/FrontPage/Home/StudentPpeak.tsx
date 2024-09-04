"use client";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useState } from "react";

const StudentPpeak = () => {
  const speakData = [
    {
      id: 1,
      name: "Rashmi Borah",
      title: "Northeastern University, Boston",
      img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?ga=GA1.2.1828852587.1722179846&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Rashmi Borah",
      title: "Northeastern University, Boston",
      img: "https://img.freepik.com/free-photo/portrait-pensive-young-girl-making-notes_171337-1646.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid",
    },
    {
      id: 3,
      name: "Rashmi Borah",
      title: "Northeastern University, Boston",
      img: "https://img.freepik.com/free-photo/girl-posing-with-bright-notepad_23-2147656269.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid",
    },
    {
      id: 4,
      name: "Rashmi Borah",
      title: "Northeastern University, Boston",
      img: "https://img.freepik.com/free-photo/young-woman-with-notebook-studio_23-2147844820.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < speakData.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div className=" relative md:px-0  py-16">
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
          <div className="flex justify-center  h-full">
            <div className=" text-center space-y-2 pt-20">
              <h1 className=" text-3xl md:text-5xl font-bold text-white">
                <span className="font-bold text-[#f6941e] ">Student's</span>{" "}
                Speak
              </h1>
              <div>
                <h1 className=" text-base md:text-lg  font-light text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  seddo eiusmod
                </h1>
                <h1 className="text-base md:text-lg  font-light text-white">
                  tempor incididunt ut labore et dolore magna aliqua.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 right-0 w-[80%] mx-auto z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {speakData
            .slice(currentIndex, currentIndex + 3)
            .map((data, index) => (
              <div
                key={data.id}
                className={`bg-white shadow-lg space-y-3 p-3 ${
                  index === 1 ? "transform scale-110" : ""
                }`}
              >
                <div className="relative flex flex-col justify-center items-center pt-5">
                  <Image src={data.img} alt="" width={300} height={300} />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="h-14 w-14 rounded-full bg-white bg-opacity-35 flex justify-center items-center">
                      <Play className="text-white" />
                    </div>
                  </div>
                </div>
                <div className=" space-y-1">
                  <h1 className="text-2xl font-semibold text-slate-800 text-center">
                    {data.name}
                  </h1>
                  <h1 className="text-center text-slate-600">{data.title}</h1>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center gap-6 mt-3 pb-12">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`h-12 w-12 rounded-full flex justify-center items-center ${
              currentIndex === 0
                ? "text-slat-800 bg-[#fdead2] cursor-not-allowed"
                : "text-white bg-[#f6941e]"
            }`}
          >
            <ArrowLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= speakData.length - 3}
            className={` h-12 w-12 rounded-full flex justify-center items-center ${
              currentIndex >= speakData.length - 3
                ? "text-slat-800 bg-[#fdead2] cursor-not-allowed"
                : "text-white bg-[#f6941e]"
            }`}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentPpeak;
