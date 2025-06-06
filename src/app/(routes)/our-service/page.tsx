import Testimonial, { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Image from "next/image";
import Link from "next/link";

const dummyTestimonials: Testimonial[] = [
  {
    quote: "Produk ini sangat membantu tim kami dalam meningkatkan produktivitas dan kolaborasi. Sangat direkomendasikan!",
    name: "Andi Pratama",
    designation: "CEO, TechStartup",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    quote: "Pengalaman pengguna yang luar biasa! Desainnya intuitif dan sangat memudahkan pekerjaan sehari-hari.",
    name: "Siti Aisyah",
    designation: "Product Manager, InnovateCorp",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    quote: "Layanan pelanggan yang fantastis dan fitur yang sangat memenuhi kebutuhan bisnis kami.",
    name: "Budi Santoso",
    designation: "CTO, DigitalSolutions",
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    quote: "Solusi yang inovatif dan mudah diintegrasikan dengan sistem kami yang sudah ada.",
    name: "Rina Lestari",
    designation: "Lead Developer, CodeCrafters",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    quote: "Dengan alat ini, kami dapat menghemat waktu dan fokus pada hal yang benar-benar penting.",
    name: "Dewi Kartika",
    designation: "Marketing Director, GrowthX",
    src: "https://images.unsplash.com/photo-1522556189639-b1509e7e2f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  },
];

export default function OurService() {
	return (
		<div>
			{/* Hero Section */}
			<section className="relative h-[500px] sm:h-[600px] md:h-[200vh]">
				{/* Background Layers */}

				{/* Bottom */}
				<div
					className="absolute inset-0 z-30 pointer-events-none"
					style={{
						background:
							"linear-gradient(7deg, rgba(89, 84, 62, 0.97) 40%, rgba(101, 97, 79, 0.4) 50%, rgba(89, 84, 62, 0.97) 90%)",
					}}
				/>

				{/* Image */}
				<Image
					className="z-20 h-[150vh] object-cover absolute right-0 w-screen top-0 left-0 object-cover opacity-40"
					width={2000}
					height={1000}
					src="/svg/bg-ourservice.svg"
					alt="hero"
				/>

				<div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 xl:px-20 z-40 max-w-full -translate-y-[20rem] ">
					<div className="text-center md:text-start">
						<h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-head -translate-y-2 sm:-translate-y-2 ">
							CREATING MOMENTS
						</h1>
						<h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-head ">
							DELIVERING MEMORIES
						</h1>
					</div>

					<div className="mt-4 text-center md:text-start">
						<h4 className="font-semibold text-[#1E1E1E] text-lg sm:text-xl md:text-2xl">
							Sakinah Organizer
						</h4>

						<p className="mt-2 text-[#1E1E1E] text-sm sm:text-base md:text-lg lg:text-xl w-full md:w-1/2   ">
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

				{/* Creative Decor */}
				<section className="z-40 absolute bottom-0 -translate-y-[30rem] w-full">
					<div className="flex text-white z-20 absolute">
						<div className="md:w-1/2 lg:w-[50rem] lg:ml-20">
							<h1 className="font-head text-2xl sm:text-4xl md:text-5xl lg:text-[32px]  leading-tight">
								Creative Decor Experts
							</h1>

							<p className="text-xs sm:text-sm md:text-base  lg:text-xl mt-4 md:mt-6 lg:mt-10 text-justify">
								Dekorasi bukan hanya pemanis, tapi elemen penting yang
								membingkai momen sakral Anda. Sakinah Wedding menghadirkan
								sentuhan dekorasi yang elegan, hangat, dan penuh makna dari
								nuansa islami yang menenangkan hingga tema modern yang anggun.
								Setiap detail kami susun dengan cinta, agar suasana hari bahagia
								Anda terasa istimewa, berkelas, dan sesuai dengan impian.
							</p>
						</div>

						<Image
							src="/svg/bg-lovestory.svg"
							width={370}
							height={700}
							alt="love-story"
							className="absolute hidden md:block right-0 translate-x-[25rem]  top-0 lg:h-[55vh] object-cover "
						/>
					</div>
				</section>
			</section>

			{/* Professional Phootgrapher */}
			<section className="relative  md:h-[90vh] lg:h-[60vh] bg-[#604A32]">
				<div className="flex p-6 md:p-10 lg:p-16 text-white justify-center">
					<div className="md:w-1/3 ">
						<h1 className="font-head text-2xl sm:text-4xl md:text-5xl lg:text-[32px]  leading-tight">
							Professional Photographer
						</h1>

						<p className="text-xs sm:text-sm md:text-base  lg:text-xl mt-4 md:mt-6 lg:mt-10 text-justify">
							Tim photography Sakinah Wedding siap mengabadikan setiap momen
							dengan sentuhan artistik dan penuh makna. Setiap jepretan bukan
							sekadar gambar, tapi cerita cinta yang terekam abadi.
						</p>
					</div>

					<Image
						src="/images/service-2.png"
						width={370}
						height={550}
						alt="love-story"
						className="absolute hidden md:block right-0 top-0 lg:h-[55vh] object-cover"
					/>

					<Image
						src="/images/service-group.png"
						width={280}
						height={280}
						alt="love-story"
						className="absolute hidden md:block left-10 -top-0 -translate-y-28 z-50  "
					/>
				</div>
			</section>

			<AnimatedTestimonials testimonials={dummyTestimonials} />
		</div>
	);
}
