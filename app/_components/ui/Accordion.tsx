"use client";
import React, { useState } from "react";

type AccordionSection = {
  title: string;
  content: string;
};

type AccordionProps = {
  sections: AccordionSection[];
};

const Accordion: React.FC<AccordionProps> = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" flex flex-wrap gap-[20px] items-start justify-center">
      {sections.map((section, index) => (
        <div
          key={index}
          className="bg-white p-2 rounded-lg shadow-md text-center w-[48%] "
        >
          <button
            className="w-full flex justify-between items-center p-4 "
            onClick={() => toggleSection(index)}
          >
            <span className="text-[#00bcd5] text-[18px] font-bold leading-[21px]">
              {section.title}
            </span>
            <span className="text-[18px] font-bold leading-[21px]">
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white text-left">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
