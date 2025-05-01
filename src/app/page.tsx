import Image from "next/image";

export default function Home() {
	return (
		<>
			{/* z1: efek */}
			<div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-[#6B664E]/100 via-[#F8F0CC]/40 to-[#59543E]/95" />

			{/* z2: Gambar */}
			<Image
				className="z-10 h-screen w-[40rem] rounded-t-full object-cover absolute right-[15rem] top-0"
				width={1000}
				height={1000}
				src="/images/hero-section.jpeg"
				alt="hero"
			/>
			<section className="h-screen p-8 w-1/2 text-justify z-30 absolute flex justify-center mt-32">
				{/* <Hero /> */}

				{/* z3: Teks */}
				<div className="">
					<h2 className="text-white text-[80px] font-head">Sakinah</h2>
					<h1 className="text-white text-[100px] font-head -mt-5">Wedding</h1>

					<h4 className="font-bold mt-6 text-[#1E1E1E] text-xl">Sakinah Organizer</h4>

					<p className="italic mt-6 text-[#1E1E1E] text-lg">
						Sakinah Wedding menghadirkan layanan pernikahan islami dengan
						sentuhan elegan dan penuh makna. Kami berkomitmen menjadikan momen
						sakral Anda indah, berkesan, dan tak terlupakan.
					</p>
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

		</div>
	);
}
