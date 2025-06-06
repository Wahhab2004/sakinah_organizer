"use client";
import React, { useState } from "react";
import { FaqData } from "./data";

// FAQHolder component for individual accordion items
interface FAQHolderProps {
	item: FaqData;
	isOpen: boolean;
	onToggle: () => void;
	index: number;
}

export function FAQHolder({ item, isOpen, onToggle, index }: FAQHolderProps) {
	return (
		<div
			className="accordion bg-[#302C29]/80 md:p-2 rounded-xl mb-4 lg:p-4 p-1 w-11/12"
			id={`faq-${index}`}
		>
			<button
				className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-green-900 w-full transition duration-500"
				onClick={onToggle}
				aria-controls={`collapse-${index}`}
			>
				<h5
					className={`lg:text-xl transition-all duration-500 transform lg:px-6 md:px-4 sm:px-2 max-sm:px-1 md:text-lg sm:text-base max-sm:text-xs text-[#C2AF84] h-[3.25rem] flex flex-col justify-center ${
						isOpen ? "font-bold" : "italic"
					}`}
				>
					{item?.question}
				</h5>
				<svg
					className={`w-6 h-6 text-[#C2AF84] transition-transform duration-500 transform ${
						isOpen ? "rotate-0" : "rotate-180"
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
			</button>
			<div
				id={`collapse-${index}`}
				className={`accordion-content w-full overflow-hidden pr-4 transition-max-height duration-500 ease-in-out ${
					isOpen ? "max-h-screen" : "max-h-0"
				}`}
				aria-labelledby={`heading-${index}`}
			>
				<p className="lg:text-xl text-[#C2AF84] font-normal leading-6 py-2 lg:px-6 md:px-4 sm:px-2 max-sm:px-1 md:text-lg sm:text-base max-sm:text-xs">
					{item?.answer}
				</p>
			</div>
		</div>
	);
}

// FAQList component to manage multiple FAQHolder components
export function FAQList() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		// Jika accordion yang diklik sudah terbuka, tutup; jika tidak, buka dan tutup yang lain
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="faq-list w-full flex flex-col items-center">
			{FaqData.map((item, index) => (
				<FAQHolder
					key={index}
					item={item}
					isOpen={openIndex === index}
					onToggle={() => handleToggle(index)}
					index={index}
				/>
			))}
		</div>
	);
}
