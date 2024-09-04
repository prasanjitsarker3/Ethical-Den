"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";

const FAQSection = () => {
  return (
    <div className="w-full container mx-auto md:px-0 px-8 md:pt-32 pt-[800px]">
      <div className="flex flex-col md:flex-row justify-between gap-16 py-16">
        <div className="md:w-1/2 w-full mx-auto">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-800">
              Study In <span className="font-bold text-[#f6941e]">USA</span>{" "}
              FAQ's
            </h1>
            <h2 className="text-lg text-slate-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <div className="mt-6">
              <Accordion defaultExpandedKeys={["1"]}>
                <AccordionItem
                  key="1"
                  aria-label="Can you work while studying in the United States?"
                  title="Can you work while studying in the United States?"
                >
                  Yes, international students can work on-campus part-time
                  during the school year and full-time during breaks, subject to
                  certain restrictions.
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="What are the requirements for a student visa?"
                  title="What are the requirements for a student visa?"
                >
                  To obtain a student visa, you typically need a Form I-20 from
                  a U.S. school, proof of financial support, a valid passport,
                  and a visa application form.
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="How much does it cost to study in the USA?"
                  title="How much does it cost to study in the USA?"
                >
                  The cost of studying in the USA varies widely, but tuition can
                  range from $20,000 to $50,000 per year, plus living expenses.
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="Can I get financial aid as an international student?"
                  title="Can I get financial aid as an international student?"
                >
                  Yes, some universities offer scholarships and financial aid to
                  international students, but opportunities are often limited
                  and competitive.
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="What are the options for housing while studying?"
                  title="What are the options for housing while studying?"
                >
                  Students can choose to live on-campus in dormitories, or
                  off-campus in rented apartments or houses, depending on their
                  preferences and budget.
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full mx-auto">
          {/* Add any content or an image here, if needed */}
          <Image
            src={
              "https://img.freepik.com/free-photo/brunette-woman-with-books-standing-red-background-high-quality-photo_114579-62390.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
            }
            alt=""
            width={500}
            height={500}
            className=" w-full h-[55vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
