"use client";

import { FaqData } from "@/app/component/faq/data";
import { FAQHolder } from "@/app/component/faq/faqHolder";
import Image from "next/image";
import React from "react";

export default function FAQ() {
	
	return (
		<div className="relative h-[1600px] lg:h-[2200px]">
			<Image
				className="absolute z-10 w-full h-[2200px] object-cover top-0 left-0 right-0 bottom-0"
				width={2000}
				height={5000}
				src="/svg/bg-faq.svg"
				alt="hero"
			/>

			<div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-[#59543E] from-6% via-[#F8F0CC]/10 from-10% to-[#F8F0CC]/40 h-[2200px]" />

			<div className="flex flex-col gap-4 items-center z-30 absolute mt-[7rem] lg:mt-[10rem] w-full text-white ">
				<h1 className="font-head text-2xl md:text-4xl lg:text-5xl xl:text-[66px] font-semibold text-center">Plan It With Peace</h1>
				<h1 className="font-head text-2xl md:text-4xl  lg:text-5xl xl:text-[66px] -translate-y-4 text-center font-semibold">
					All Your Wedding Questions Answered
				</h1>

				<div className="text-sm md:text-lg lg:text-xl xl:text-2xl text-center w-[20rem] md:w-[40rem] lg:w-[50rem] xl:w-[60rem] xl:max-w-[70rem]">
					<p>Semua jawaban pernikahan Anda ada di sini!</p>

					<p>
						Rencanakan hari bahagia dengan tenang bersama Sakinah Organizer!
					</p>
				</div>
			</div>

			<section className="absolute  z-20 w-[100%] mt-[23rem] lg:mt-[30rem]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
					<div
						className="accordion-group flex flex-col items-center"
						data-accordion="default-accordion"
					>
						{FaqData.map((item: FaqData, index) => (
							<FAQHolder
								key={index}
								answer={item.answer}
								question={item.question}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
