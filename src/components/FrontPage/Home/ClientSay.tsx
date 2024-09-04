/* eslint-disable react/no-unescaped-entities */
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const ClientSay = () => {
  const clietSays = [
    {
      id: 1,
      des: "We are the representatives of more than 30+ universities in Australian countries and our admission",
      rating: 5,
      img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?ga=GA1.2.1828852587.1722179846&semt=ais_hybrid",
      name: "Lisa Down",
      title: "Student",
    },
    {
      id: 2,
      des: "We are the representatives of more than 30+ universities in Australian countries and our admission",
      rating: 5,
      img: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?ga=GA1.2.1828852587.1722179846&semt=ais_hybrid",
      name: "Lisa Down",
      title: "Student",
    },
    {
      id: 3,
      des: "We are the representatives of more than 30+ universities in Australian countries and our admission",
      rating: 5,
      img: "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?ga=GA1.2.1828852587.1722179846&semt=ais_hybrid",
      name: "Lisa Down",
      title: "Student",
    },
  ];
  return (
    <div className=" w-full container mx-auto md:px-0 px-8 py-16">
      <div className=" py-12 space-y-2">
        <h1 className=" text-3xl md:text-5xl font-bold text-slate-800">
          <span className="font-bold text-[#f6941e] ">What's</span> Our Student
          Say
        </h1>
        <div className=" text-base text-slate-400">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
          <p>incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        {clietSays.map((data) => (
          <div key={data.id}>
            <div
              className={`bg-white shadow-md p-5 space-y-3 ${
                data.id === 2 ? "border-b border-b-[#f6941e]" : ""
              }`}
            >
              <Quote size={20} className="text-[#f6941e]" />
              <h1 className=" text-base text-slate-700">{data.des}</h1>
              <div className=" flex items-center gap-3  text-[#f6941e]">
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
              </div>
              <div className=" flex items-center gap-8">
                <div className=" h-16 w-16 rounded-full bg-[#E3E4E8] flex justify-center items-center">
                  <Image src={data.img} alt="" width={50} height={50} />
                </div>
                <div>
                  <h1 className=" text-xl text-slate-800 font-semibold">
                    {data.name}
                  </h1>
                  <h1>{data.title}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSay;
