import Image from "next/image";

export default function Home() {
	return (
		<>
			{/* z1: efek */}
			<div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-[#6B664E]/100 via-[#F8F0CC]/40 to-[#59543E]/95" />

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
		</>
	);
}
