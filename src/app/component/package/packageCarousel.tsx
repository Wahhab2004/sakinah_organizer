"use client"; 

import React, { useState } from "react";
import { PackageCard } from "./package";
import {
  SakinahPackageData,
  MawaddahPackageData,
  WarahmahPackageData,
} from "./dataPackage";

export default function PackageCarousel() {
  const packages = [
    { data: SakinahPackageData },
    { data: MawaddahPackageData },
    { data: WarahmahPackageData },
  ];

  // State to track which package is expanded (null if none)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Toggle function to expand/collapse a package
  const togglePackage = (index: number | null) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="absolute z-40 w-full md:p-10 text-white mt-[22rem] md:mt-[27rem] lg:mt-[33rem]">
      {/* Desktop/Grid View */}
      <div className="hidden md:flex flex-row gap-4 px-4 pb-4">
        {packages.map((pkg, idx) => (
          <PackageCard data={pkg.data} key={idx} />
        ))}
      </div>

      {/* Mobile Carousel - vertical list with dropdown and arrow */}
      <div className="flex md:hidden flex-col  px-4 pb-4">
        {packages.map((pkg, idx) => (
          <div key={idx} className="flex-shrink-0 w-full">
            <div
              className="accordion bg-[#302C29]/80 rounded-xl mb-4 p-2 cursor-pointer"
              onClick={() => togglePackage(idx)}
            >
              <div className="flex items-center justify-between w-full">
                {/* Display package title or a brief preview */}
                <h3
                  className={`text-base lg:text-xl md:text-lg sm:text-base max-sm:text-xs text-[#C2AF84] px-2 h-[3.25rem] flex flex-col justify-center ${
                    expandedIndex === idx ? "font-bold" : "italic"
                  }`}
                >
                  {`Package ${idx + 1}`}
                </h3>
                <svg
                  className={`w-6 h-6 text-[#C2AF84] transition-transform duration-500 transform ${
                    expandedIndex === idx ? "rotate-0" : "rotate-180"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              {/* Expandable content */}
              {expandedIndex === idx && (
                <div
                  className="accordion-content w-full overflow-hidden transition-max-height duration-500 ease-in-out "
                >
                  <div className="mt-4 px-2">
                    <PackageCard data={pkg.data} />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}