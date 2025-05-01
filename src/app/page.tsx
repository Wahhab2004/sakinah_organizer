import Image from "next/image";

export default function Home() {
	return (
		<div>
			{/* Hero section */}
			<section className="relative h-screen">
				{/* Background Layers */}
				<div className="absolute inset-0 z-10 bg-[#59543E]" />
				<div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-[#59543E] from-6% via-[#F8F0CC]/10 from-10% to-[#F8F0CC]/40" />

				{/* Image */}
				<Image
					className="z-20 h-screen w-[40rem] rounded-t-full object-cover absolute right-[25rem] top-0"
					width={1000}
					height={1000}
					src="/images/hero-section.jpeg"
					alt="hero"
				/>

				{/* Text Content */}
				<div className="absolute h-screen p-8 w-1/2 text-justify z-30 flex justify-center mt-24">
					<div>
						<h1 className="text-white text-[120px] font-head">Sakinah</h1>
						<h1 className="text-white text-[140px] font-head -mt-24">
							Wedding
						</h1>
						<h4 className="font-bold text-[#1E1E1E] text-xl">
							Wedding Organizer
						</h4>
						<p className="italic mt-4 text-white text-lg">
							Sakinah Wedding menghadirkan layanan pernikahan islami dengan
							sentuhan elegan dan penuh makna. Kami berkomitmen menjadikan momen
							sakral Anda indah, berkesan, dan tak terlupakan.
						</p>
						<div className="bg-[#302C29] w-[150px] h-[25px] mt-6"></div>
					</div>
				</div>
			</section>

			{/* About US */}
			<section className="relative h-screen bg-[#59543E]">
				{/* Background Layers */}
				{/* Image */}
				<Image
					className="h-screen w-full object-cover z-20"
					width={1000}
					height={1000}
					src="/images/flowe-2.jpg"
					alt="hero"
				/>
				<div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-[#59543E] from-6% via-[#F8F0CC]/10 from-10% to-[#F8F0CC]/40" />
				<div className="absolute top-0 right-0 bg-[#302C29] h-[30rem] w-[60rem] z-40 rounded-bl-full ">
					<div className="ml-[15rem] mt-4">
						<h1 className="font-head text-white text-[80px]">About Us</h1>
						<p className="w-[40rem] text-white text-lg text-justify italic">
							Sakinah Wedding adalah layanan pernikahan profesional yang
							menghadirkan konsep elegan, islami, dan penuh makna. Kami
							menyediakan paket pernikahan lengkap mulai dari dekorasi, rias
							pengantin, dokumentasi, hingga catering halal. Dengan tim yang
							berpengalaman dan pelayanan yang personal, kami siap mewujudkan
							momen sakral Anda menjadi kenangan yang tak terlupakan.
						</p>
						<div className="bg-[#59543E] w-[150px] h-[25px] mt-6"></div>
					</div>
				</div>
			</section>

			test aja
		</div>
	);
}
