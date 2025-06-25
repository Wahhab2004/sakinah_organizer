import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
	return (
		<section className="relative min-h-screen w-full bg-[#59543E] overflow-hidden h-[170vh] sm:h-[170vh]  md:h-[120vh] lg:h-[160vh]">
			{/* Background Image */}
			<Image
				className="h-[70vh] sm:h-[80vh] md:h-[100vh] lg:h-[180vh] w-full object-cover z-20"
				width={1000}
				height={1000}
				src="/images/flowe-2.jpg"
				alt="hero"
				priority
			/>
			<div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-[#59543E] from-10% via-[#6B664E]/90 from-40% to-[#F8F0CC]" />

			{/* About Us Section */}
			<div className="absolute top-0 right-0 bg-[#302C29] h-[80vh] sm:h-[100vh] md:h-[40rem] lg:h-[35rem] w-full  lg:w-[70rem] z-40 rounded-bl-[50px] sm:rounded-bl-[100px] lg:rounded-bl-[150px] xl:rounded-bl-[300px] ">
				<div className="px-4 sm:px-6 md:px-8  mt-4 sm:mt-6 md:mt-8 flex flex-col justify-center items-start h-full lg:ml-[5rem] ">
					<h1 className="font-head text-white text-[36px] sm:text-5xl md:text-6xl lg:text-[80px]">
						About Us
					</h1>
					<p className="text-white text-xs sm:text-base md:text-lg lg:text-xl text-justify font-light max-w-full lg:max-w-[60rem] mt-2 sm:mt-4">
						Sakinah Organizer adalah Wedding Organizer syar’i yang berkomitmen
						menghadirkan pernikahan penuh berkah sesuai nilai-nilai Islam.
						Bernaung dalam semangat dakwah Masjid Kampus UGM, Sakinah Organizer
						lahir sebagai bagian dari ekosistem Sakinah Academy, menyelaraskan
						visi dalam membangun keluarga muslim yang sakinah, mawaddah, wa
						rahmah.
					</p>

					<p className="text-white text-xs sm:text-base md:text-lg lg:text-xl text-justify font-light max-w-full lg:max-w-[60rem] mt-2 sm:mt-4">
						Dengan konsep pernikahan yang elegan, tertata, dan tetap menjaga
						kesucian syariat, kami hadir untuk membantu pasangan muslim dalam
						merancang hari istimewa mereka dengan penuh keberkahan. Melalui
						layanan yang profesional dan berlandaskan prinsip Islam, kami
						berharap bisa menjadi inspirasi bagi pernikahan Islami di
						Indonesia dan dunia.
					</p>

					<button className="bg-[#E1CD9F] w-[120px] sm:w-[140px] md:w-[160px] mt-2 sm:mt-4 md:mt-6 ml-auto py-2 rounded text-[#59543E] text-xs sm:text-base md:text-lg lg:text-xl hover:bg-[#AA9566] transition duration-300">
						<Link href="/reservation">Reservation</Link>
					</button>
				</div>
			</div>

			{/* Our Services */}
			<div className="absolute  bottom-0 w-full z-40 px-4 sm:px-6 md:px-8 lg:px-16 py-4 sm:py-6 mb-5 sm:mb-3 md:mb-5 lg:mb-10 mt-[5rem] md:mt-[0rem]">
				<h1 className="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-head">
					Our Service
				</h1>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2  mt-4 sm:mt-6">
					{[
						{ src: "/svg/service-01.svg", title: "MUA" },
						{ src: "/svg/service-02.svg", title: "Busana" },
						{ src: "/svg/service-03.svg", title: "Photographer" },
						{ src: "/svg/service-04.svg", title: "Videographer" },
						{ src: "/svg/service-05.svg", title: "Catering" },
						{ src: "/svg/service-06.svg", title: "Decoration" },
					].map((service, index) => (
						<div
							key={index}
							className="hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center"
						>
							<Image
								src={service.src}
								width={100}
								height={100}
								alt={`service-0${index + 1}`}
								className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
							/>
							<h2 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-center text-white mt-2">
								{service.title}
							</h2>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
