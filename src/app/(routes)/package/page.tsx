import {
	Ellipse,
	HeroText,
} from "@/app/component/package/package";
import Image from "next/image";
import PackageCarousel from "@/app/component/package/packageCarousel";

export default function Package() {
	return (
		<div className="bg-[#59543E]">
			{/* Hero Section */}
			<section className="relative h-[500px] sm:h-[600px] md:h-screen">
				{/* Background Layers */}
				<div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-r from-[#59543E] from-0% via-[#F8F0CC]/10 from-10% to-[#F8F0CC]/0  " />
				{/* Image */}
				<Image
					className="z-20 h-screen object-cover absolute right-0 w-screen top-0 left-0 object-cover opacity-40"
					width={1000}
					height={1000}
					src="/svg/bg-package.svg"
					alt="hero"
				/>

				<HeroText />
				<Ellipse />
			</section>

			<div className="relative h-[1800px] bg-[#59543E] mx-auto">
				<Image
					className="absolute z-10 w-full h-[1850px] object-cover top-0 left-0 right-0 bottom-0"
					width={2000}
					height={5000}
					src="/svg/bg-package-02.svg"
					alt="hero"
				/>

				<div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-[#59543E] from-30% via-[#F8F0CC]/10 from-10% to-[#F8F0CC]/40 h-[2200px]" />

				{/* Package Details */}
				{/* Package Title */}
				<div className="text-white top-0 right-0 left-0  text-center w-[100%] mx-auto z-30 absolute bg-[#59543E] h-[600px]">
					<h1 className="font-head text-3xl sm:text-4xl md:text-5xl lg:text-[64px]  mt-[8rem] sm:mt-[10rem] md:mt-[12rem] lg:mt-[15rem]">
						Akad Package
					</h1>
					<p className="lg:mt-10 italic text-xs sm:text-sm md:text-base lg:text-lg p-3 lg:w-[70%]  mx-auto">
						Bersiaplah menyambut awal baru yang penuh berkah dengan Akad Sakinah
						Package, dirancang khusus untuk mengiringi langkah suci Anda menuju
						kehidupan rumah tangga yang sakinah, mawaddah, wa rahmah. Kami hadir
						untuk memastikan prosesi akad nikah berjalan khidmat, hangat, dan
						penuh nilai-nilai Islami, sambil mengabadikan setiap momen dengan
						keindahan dan ketulusan.
					</p>
				</div>

				<div className="absolute z-40 w-full md:p-10 text-white mt-[22rem] md:mt-[27rem] lg:mt-[33rem]">
					<PackageCarousel />
				</div>
			</div>
		</div>
	);
}
