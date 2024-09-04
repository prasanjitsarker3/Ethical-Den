import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const PopularUniversity = () => {
  const university = [
    {
      id: 1,
      img: "https://cdn-icons-png.flaticon.com/128/30/30465.png",
      name: "University of Connecticut, Connecticut (Public Ivy)",
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/128/3845/3845897.png",
      name: "Arizona State University, Phoenix, Arizona",
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/128/30/30465.png",
      name: "University of Connecticut, Connecticut (Public Ivy)",
    },
    {
      id: 4,
      img: "https://cdn-icons-png.flaticon.com/128/30/30465.png",
      name: "University of Connecticut, Connecticut (Public Ivy)",
    },
    {
      id: 5,
      img: "https://cdn-icons-png.flaticon.com/128/3845/3845897.png",
      name: "Arizona State University, Phoenix, Arizona",
    },
    {
      id: 6,
      img: "https://cdn-icons-png.flaticon.com/128/30/30465.png",
      name: "University of Connecticut, Connecticut (Public Ivy)",
    },
  ];

  return (
    <div className=" py-16">
      <div className="relative w-full py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.freepik.com/premium-photo/symbolic-fusion-knowledge-achievement_388444-85892.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid" // Replace with your background image URL
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="opacity-50" // Adjust the opacity as needed
          />
        </div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        {/* Content */}
        <div className="relative container mx-auto md:px-0 px-8 py-16 z-20">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
              <span className="font-bold text-[#f6941e]">Popular</span>{" "}
              University
            </h1>

            <div className="w-[100%] mx-auto py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {university.map((data) => (
                  <div
                    key={data.id}
                    className="p-5 bg-hover-gradient relative overflow-hidden bg-white bg-opacity-90 space-y-2 flex flex-col justify-center items-center text-center"
                  >
                    <Image
                      src={data.img}
                      alt=""
                      width={70}
                      height={70}
                      className=" z-20"
                    />
                    <h1 className="text-2xl font-semibold text-slate-800 z-20">
                      {data.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-full mx-auto">
              <button className=" mx-auto px-3 py-2 text-white border hover:bg-[#fdead2] hover:text-[#f6941e] border-white flex justify-center items-center gap-3">
                See More <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularUniversity;
