// components/PackageCard.tsx
import { PackageData } from "./dataPackage";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export function HeroText() {
	return (
		<div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:-translate-y-10 xl:px-20 z-40 max-w-full ">
			<div className="text-center md:text-start">
				<h1 className="text-[#5F4931] text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-head">
					Akad Sakinah:
				</h1>
				<h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-head -translate-y-2 sm:-translate-y-2 ">
					Mengukir Janji dalam
				</h1>
				<h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-head -translate-y-4 sm:-translate-y-4 md:-translate-y-6">
					Cinta Naungan Ilahi
				</h1>
			</div>

			<div className="mt-4 text-center md:text-start">
				<h4 className="font-semibold text-[#1E1E1E] text-lg sm:text-xl md:text-2xl">
					Sakinah Organizer
				</h4>
				<Link href="/reservation">
					<p className="bg-[#302C29] w-[170px] sm:w-[190px] md:w-[220px] h-[35px] md:h-[40px] lg:mt-3 text-center text-white rounded-lg flex items-center justify-center mx-auto md:mx-0 text-sm sm:text-base md:text-lg lg:text-xl hover:bg-[#E1CD9F] transition duration-300">
						Reservation here!
					</p>
				</Link>
			</div>
		</div>
	);
}

export function Ellipse() {
	return (
		<div className="absolute bottom-0 w-full flex justify-center items-center z-40  translate-y-[5rem] sm:translate-y-[8rem] md:translate-y-[10rem] lg:translate-y-[13rem]">
			<Image
				className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] object-cover z-20 translate-x-[2rem] lg:translate-x-[5rem]"
				width={1000}
				height={1000}
				src="/svg/ellipse-1.svg"
				alt="hero"
			/>

			<Image
				className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] object-cover z-30"
				width={1000}
				height={1000}
				src="/svg/ellipse-2.svg"
				alt="hero"
			/>

			<Image
				className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] object-cover z-20 translate-x-[-2rem] lg:translate-x-[-5rem]"
				width={1000}
				height={1000}
				src="/svg/ellipse-3.svg"
				alt="hero"
			/>
		</div>
	);
}

interface PackageCardProps {
	titleColor?: string;
	data: PackageData;
}

// PackageCard component to display package details
export function PackageCard({
	titleColor = "text-[#E1CD9F]",
	data,
}: PackageCardProps) {
	const titleMap: Record<string, string> = {
		weddingOrganizer: "Wedding Organizer",
		venue: "Venue",
		decoration: "Dekorasi",
		documentation: "Documentation",
		catering: "Catering",
		mua: "MUA",
		busana: "Busana",
	};

	return (
		<div className="p-6 bg-[#59543E]/40 rounded-3xl shadow-lg w-full md:w-[300px] lg:w-[400px] h-fit md:h-full lg:h-fit pb-20 mx-auto transition-transform hover:scale-105">
			<h1 className={`font-head text-3xl text-center ${titleColor}`}>
				{data.name}
			</h1>
			<h2 className="font-head text-3xl text-center">{data.price}</h2>

			<div className="pl-4">
				{Object.entries(data).map(([key, value]) => {
					if (["name", "price"].includes(key) || !value) return null;

					const sectionTitle = titleMap[key] || key;

					const items = Array.isArray(value) ? value : [value];

					return (
						<div key={key} className="mt-4">
							<h3>
								<span className="font-head text-xl">{sectionTitle}</span>
							</h3>
							<ul className="list-decimal pl-5 mt-2">
								{items.map((item, idx) => (
									<li
										className="flex items-center gap-2 text-sm italic"
										key={idx}
									>
										- {item}
									</li>
								))}
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
}

// export default function SakinahPackage() {
// 	return <PackageCard data={SakinahPackageData} />;
// }

// export function MawaddahPackage() {
// 	return <PackageCard data={MawaddahPackageData} />;
// }

// export function WarahmahPackage() {
// 	return <PackageCard data={WarahmahPackageData} />;
// }
