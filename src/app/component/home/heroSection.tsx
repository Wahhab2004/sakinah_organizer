import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="relative h-[80vh] sm:h-[120vh]  md:h-screen w-full overflow-hidden flex flex-col justify-center md:items-start">
			{/* Background Layers */}
			<div className="absolute inset-0 z-10 bg-[#59543E]" />

			{/* Desktop */}
			<div className="hidden lg:block absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-[#6B664E]/10 from-0% via-[#F8F0CC]/30 from-60% to-[#F8F0CC]/10 " />

			{/* tablet */}
			<div className="hidden md:block absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-[#6B664E] from-0% via-[#6B664E]/80 from-10% to-[#F8F0CC]/10 " />

			{/* Mobile */}
			<div className="md:hidden absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-[#59543E] from-0% via-[#6B664E]/90 from-10% to-[#F8F0CC]/10" />

			{/* Image */}
			<Image
				className="z-20 w-full lg:w-[27rem] xl:w-[40rem] lg:rounded-t-full object-cover absolute 
					right-0 top-0 lg:right-[10%] xl:right-[10rem]
					h-[80vh] sm:h-[120vh] lg:h-screen"
				width={1000}
				height={1000}
				src="/images/hero-section.jpeg"
				alt="hero"
				priority
			/>

			{/* Text Content */}
			<div className="relative z-30 flex items-center  md:h-screen px-4 sm:px-6 md:px-16 w-full lg:w-1/2 mt-10">
				<div className="text-center md:text-left max-w-2xl">
					<h2 className="text-white text-[36px] sm:text-6xl md:text-[80px] lg:text-[100px] xl:text-[120px] font-head leading-tight">
						Sakinah
					</h2>
					<h1 className="text-white text-[36px] sm:text-7xl md:text-8xl lg:text-9xl xl:text-[140px] font-head -mt-4 sm:-mt-6 md:-mt-6 lg:-mt-8 xl:-mt-10">
						Wedding
					</h1>
					<h4 className="font-bold text-[#1E1E1E] text-lg sm:text-xl md:text-2xl mt-2">
						Wedding Organizer
					</h4>
					<p className="italic mt-4 text-white text-xs sm:text-base md:text-xl mx-auto lg:mx-0">
						Sakinah Wedding menghadirkan layanan pernikahan islami dengan
						sentuhan elegan dan penuh makna. Kami berkomitmen menjadikan momen
						sakral Anda indah, berkesan, dan tak terlupakan.
					</p>
					<button className="bg-[#302C29] w-[140px] sm:w-[150px] mt-6 mx-auto lg:mx-0 py-2 rounded text-white text-sm sm:text-base md:text-lg lg:text-xl hover:bg-[#E1CD9F] transition duration-300">
						Our Service
					</button>
				</div>
			</div>
		</section>
	);
}
