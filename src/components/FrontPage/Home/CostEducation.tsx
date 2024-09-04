import Image from "next/image";
import React from "react";

const CostEducation = () => {
  return (
    <div className=" w-full container mx-auto md:px-0 px-8">
      <div className="w-full flex flex-col md:flex-row justify-between md:gap-0 gap-12 py-16">
        <div className=" md:w-1/2 w-full mx-auto">
          <Image
            src={
              "https://img.freepik.com/free-photo/international-day-education-cartoon-style_23-2151007392.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
            }
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className=" md:w-1/2 w-full mx-auto">
          <div className=" space-y-4">
            <h1 className=" text-3xl md:text-5xl font-bold text-slate-800">
              <span className="font-bold text-[#f6941e] ">Cost</span> of
              education
            </h1>
            <p className=" text-lg text-justify">
              In the U.S., tuition fees vary based on the state, the university
              funding model, and the student’s country of origin. So, listing an
              average is a rather difficult task. However, thanks to the folks
              at College Board, they’ve rendered an estimate of last year’s
              average tuition costs, which will roughly reflect the next few
              years.
            </p>
            <div>
              <li className=" text-lg text-[#f6941e]">Total Expenses 41535</li>
              <li className=" text-lg text-slate-800">
                Tuition Fees for one-year (Indicative) 25000
              </li>
              <li className=" text-lg text-slate-800">
                Living and Accommodation 15000
              </li>
              <li className=" text-lg text-slate-800">
                Airfare from India to USA 1000
              </li>
              <li className=" text-lg text-slate-800">
                Airfare from India to USA 1000
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostEducation;
