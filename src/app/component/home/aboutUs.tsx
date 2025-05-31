import Image from "next/image";

export default function AboutUs() {
	return (
		<section className="relative h-[135vh] bg-[#59543E]">
			{/* Background Layers */}
			{/* Image */}
			<Image
				className="h-[135vh] w-full object-cover z-20"
				width={1000}
				height={1000}
				src="/images/flowe-2.jpg"
				alt="hero"
			/>
			<div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-[#59543E] from-10% via-[#6B664E]/90 from-40% to-[#F8F0CC]" />

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

			{/* Our Services */}
			<div className="absolute bottom-0  h-[35rem] z-40 w-full px-16 py-6">
				<h1 className="text-center text-white text-[80px] font-head">
					Our Service
				</h1>

				<div className="flex justify-between items-center gap-4">
					<div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
						<Image
							src="/svg/service-01.svg"
							width={300}
							height={300}
							alt="service-01"
						/>

						<h2 className="font-semibold text-xl text-center font-white mt-4 text-white">
							MUA
						</h2>
					</div>
					<div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
						<Image
							src="/svg/service-02.svg"
							width={300}
							height={300}
							alt="service-02"
						/>

						<h2 className="font-semibold text-xl text-center font-white mt-4 text-white">
							Busana
						</h2>
					</div>
					<div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
						<Image
							src="/svg/service-03.svg"
							width={300}
							height={300}
							alt="service-03"
						/>

						<h2 className="font-semibold text-xl text-center font-white mt-4 text-white">
							Photographer
						</h2>
					</div>
					<div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
						<Image
							src="/svg/service-04.svg"
							width={300}
							height={300}
							alt="service-04"
						/>

						<h2 className="font-semibold text-xl text-center font-white mt-4 text-white">
							Videographer
						</h2>
					</div>
					<div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
						<Image
							src="/svg/service-05.svg"
							width={300}
							height={300}
							alt="service-05"
						/>

						<h2 className="font-semibold text-xl text-center font-white mt-4 text-white">
							Catering
						</h2>
					</div>
					<div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
						<Image
							src="/svg/service-06.svg"
							width={300}
							height={300}
							alt="service-06"
						/>

						<h2 className="font-semibold text-xl text-center font-white mt-4 text-white">
							Decoration
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
}
