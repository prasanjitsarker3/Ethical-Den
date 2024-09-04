"use client";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  Map,
  MapPin,
  Phone,
} from "lucide-react";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" bg-slate-800">
      <div className=" w-full container mx-auto  py-8  text-white">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 py-12">
          <div className=" space-y-3 md:text-start text-center ">
            <h1 className=" text-3xl font-semibold text-slate-300">NORTHWAY</h1>
            <h1 className=" text-base ">
              Travel Blog Elementor Template Kit. Powered by Design8. All rights
              reserved.
            </h1>
            <div className=" flex items-center md:justify-start justify-center gap-4">
              <Facebook />
              <Linkedin />
              <Github />
            </div>
          </div>
          <div className=" space-y-2 md:text-start text-center">
            <h1 className=" text-2xl "> Category</h1>
            <h1>Immigrations</h1>
            <h1>Study Abroad</h1>
            <h1>Uncategorized</h1>
            <h1>Scholarship</h1>
          </div>
          <div className=" space-y-2 md:text-start text-center">
            <h1 className=" text-2xl "> Latest Post</h1>
            <h1>Study In China</h1>
            <h1>Ulbright Scholarship</h1>
            <h1>How To Apply</h1>
            <h1>Univeries</h1>
          </div>
          <div className=" space-y-2 md:text-start text-center">
            <h1 className=" text-2xl "> Contact Us</h1>
            <h1 className=" flex items-center md:justify-start justify-center gap-2">
              <MapPin size={24} className="text-[#f6941e] " /> Kha-12/2(4th
              floor), Pragati Sarani, Gulshan, Dhaka-1212
            </h1>
            <h1 className=" flex items-center md:justify-start justify-center gap-2">
              <Phone size={18} className="text-[#f6941e]" />
              +880 1607-002687
            </h1>
            <h1 className=" flex items-center md:justify-start justify-center gap-2">
              <Mail size={18} className="text-[#f6941e]" />{" "}
              info@northwayglobal.com.bd
            </h1>
          </div>
        </div>

        <div className=" border-b "></div>
        <div className=" text-center py-6">
          <h1>Designed and Developed By Ethical Den</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
