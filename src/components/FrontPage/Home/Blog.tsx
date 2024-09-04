import { m } from "framer-motion";
import { Calendar, MessageSquare, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      name: "Emotional Intelligence in Education Building",
      img: "https://img.freepik.com/free-photo/young-students-learning-together-group-study_23-2149211067.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid",
      date: "July,2024",
      comment: "25",
    },
    {
      id: 2,
      name: "Emotional Intelligence in Education Building",
      img: "https://img.freepik.com/free-photo/cheerful-teen-preparing-homework_23-2147666639.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid",
      date: "July,2024",
      comment: "20",
    },
    {
      id: 1,
      name: "Emotional Intelligence in Education Building",
      img: "https://img.freepik.com/free-photo/apple-books-desk_23-2147666645.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid",
      date: "July,2024",
      comment: "33",
    },
  ];
  return (
    <div className=" w-full container mx-auto md:px-0 px-8 py-16">
      <div className=" py-12 text-center">
        <h1 className=" text-3xl md:text-5xl font-bold text-slate-800 text-center">
          Our Latest <span className="font-bold text-[#f6941e] ">Blog</span>
        </h1>
        <p className=" text-base text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-12 py-8">
        {blogs.map((data) => (
          <div key={data.id}>
            <div className=" bg-white shadow-md">
              <Image
                src={data.img}
                alt=""
                width={300}
                height={300}
                className=" w-full h-60"
              />
              <div className=" p-3 space-y-1">
                <h1 className=" text-lg text-slate-600 flex items-center gap-3">
                  <Calendar />
                  {data.date}
                </h1>
                <h1 className=" text-2xl font-semibold text-slate-800">
                  {data.name}
                </h1>
                <div className=" border-b border-slate-200 pb-2"></div>
                <div className=" flex justify-between items-center">
                  <h1 className=" flex items-center gap-2">
                    <User /> Back Theme
                  </h1>
                  <h1 className=" flex items-center gap-2">
                    <MessageSquare />
                    {data.comment} Comments
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
