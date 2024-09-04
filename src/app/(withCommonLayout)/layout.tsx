"use client";
import Header from "@/components/Common/Header";
import Footer from "@/components/FrontPage/Home/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Spinner } from "@nextui-org/react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center py-8 md:px-0 px-8 space-x-3">
              <h1 className=" text-2xl font-bold vigaRegular text-gray-400">
                NORT
                <span className="font-bold vigaRegular text-[#f6941e]">H</span>
                WAY
              </h1>
              <Spinner color="warning" />
            </div>
          </motion.div>
        </div>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default CommonLayout;
