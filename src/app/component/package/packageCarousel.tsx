import React from "react";
import {PackageCard} from "./package";
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

	return (
		<div className="w-full">
			{/* Desktop/Grid View */}

			{/* Mobile Carousel - horizontal scroll */}
			<div className="flex md:hidden gap-4 overflow-x-auto px-4 pb-4">
				{packages.map((pkg, idx) => (
					<div className="flex-shrink-0 w-[280px]" key={idx}>
						<PackageCard data={pkg.data} />
					</div>
				))}
			</div>

			<div className="hidden md:flex flex-row gap-4 px-4 pb-4">
				{packages.map((pkg, idx) => (
					<PackageCard data={pkg.data} key={idx} />
				))}
			</div>
		</div>
	);
}
