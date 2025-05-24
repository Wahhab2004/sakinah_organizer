import Image from "next/image";
import Link from "next/link";

export default function OurService() {
	return (
		<div>
			{/* Hero Section */}
			<section className="relative h-[500px] sm:h-[600px] md:h-screen">
				{/* Background Layers */}
				{/* Top */}
				<div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-bl from-[#59543E]/90 from-20% via-[#F8F0CC]/0 from-30% to-[#F8F0CC]/10  " />

				{/* Bottom */}
				<div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-[#59543E]/90 from-20% via-[#F8F0CC]/0 from-30% to-[#F8F0CC]/10 " />

				{/* Image */}
				<Image
					className="z-20 h-screen object-cover absolute right-0 w-screen top-0 left-0 object-cover opacity-40"
					width={2000}
					height={1000}
					src="/svg/bg-ourservice.svg"
					alt="hero"
				/>

				<div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 xl:px-20 z-40 max-w-full ">
					<div className="text-center md:text-start">
						<h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-head -translate-y-2 sm:-translate-y-2 ">
							CREATING MOMENTS
						</h1>
						<h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-head -translate-y-4 sm:-translate-y-4 md:-translate-y-6">
							DELIVERING MEMORIES
						</h1>
					</div>

					<div className="mt-4 text-center md:text-start">
						<h4 className="font-semibold text-[#1E1E1E] text-lg sm:text-xl md:text-2xl">
							Sakinah Organizer
						</h4>

						<p className="mt-2 text-[#1E1E1E] text-sm sm:text-base md:text-lg lg:text-xl w-full md:w-1/2  ">
							Setiap layanan dari Sakinah Wedding dirancang untuk menciptakan
							momen spesial yang berkesan. Kami hadir untuk mewujudkan
							pernikahan impian Anda dengan detail yang indah dan penuh makna.
						</p>

						{/* Button yang lain belum sama kek gini. Ini dijadikan acuan aja nanti */}
						<button className="bg-[#302C29] w-[170px] sm:w-[190px] md:w-[220px] h-[35px] md:h-[40px] lg:mt-3 text-center text-white rounded-lg flex items-center justify-center mx-auto md:mx-0 text-sm sm:text-base md:text-lg lg:text-xl hover:bg-[#2C2927] hover:text-[#E1CD9F] transition duration-300">
							<Link href="/package">Our Package</Link>
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}
