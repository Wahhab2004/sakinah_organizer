import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
	return (
		<section className="relative h-[500px] sm:h-[600px] md:h-[100vh]">
			{/* Bottom */}
			<div
				className="absolute inset-0 z-[30] pointer-events-none"
				style={{
					background:
						"linear-gradient(15deg, rgba(89, 84, 62, 1) 20%, rgba(101, 97, 79, 0.4) 50%, rgba(89, 84, 62, 0.97) 80%)",
				}}
			/>

			{/* Image */}
			<Image
				className="z-20 h-[100vh] object-cover absolute right-0 w-screen top-0 left-0 object-cover opacity-40"
				width={2000}
				height={1000}
				src="/svg/bg-ourservice.svg"
				alt="hero"
			/>

			<div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 xl:px-20 z-40 max-w-full  ">
				<div className="text-center md:text-start">
					<h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-head -translate-y-2 sm:-translate-y-2 ">
						Creating Moments
					</h1>
					<h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-head ">
						Delivering Mome
					</h1>
				</div>

				<div className="mt-4 text-center md:text-start">
					<h4 className="font-semibold text-[#1E1E1E] text-lg sm:text-xl md:text-2xl">
						Sakinah Organizer
					</h4>

					<p className="mt-2 text-[#1E1E1E] text-sm sm:text-base md:text-lg lg:text-xl w-full md:w-1/2   ">
						Setiap layanan dari Sakinah Wedding dirancang untuk menciptakan
						momen spesial yang berkesan. Kami hadir untuk mewujudkan pernikahan
						impian Anda dengan detail yang indah dan penuh makna.
					</p>

					<button className="bg-[#302C29] w-[120px] sm:w-[140px] md:w-[160px] mt-6 mx-auto lg:mx-0 py-2 rounded text-[#C2AF84] text-xs sm:text-base md:text-lg lg:text-xl hover:bg-[#211E1B] transition duration-300">
						<Link href="/package">Our Package</Link>
					</button>
				</div>
			</div>
		</section>
	);
}

export function CreativeDecor() {
	return (
		<section className="absolute z-30 top-0 w-full h-[50vh] mt-10">
			<div className="flex text-white ">
				<div className="md:w-1/2 lg:w-[50rem] lg:ml-20 mt-10">
					<h1 className="font-head text-2xl sm:text-4xl md:text-5xl lg:text-[32px]  leading-tight">
						Creative Decor Experts
					</h1>

					<p className="text-xs sm:text-sm md:text-base  lg:text-xl mt-4 md:mt-6 lg:mt-10 text-justify">
						Dekorasi bukan hanya pemanis, tapi elemen penting yang membingkai
						momen sakral Anda. Sakinah Wedding menghadirkan sentuhan dekorasi
						yang elegan, hangat, dan penuh makna dari nuansa islami yang
						menenangkan hingga tema modern yang anggun. Setiap detail kami susun
						dengan cinta, agar suasana hari bahagia Anda terasa istimewa,
						berkelas, dan sesuai dengan impian.
					</p>
				</div>

				<Image
					src="/svg/bg-lovestory.svg"
					width={370}
					height={700}
					alt="love-story"
					className="hidden md:block right-0 translate-x-[10rem]  top-0 lg:h-[55vh] object-cover "
				/>
			</div>
		</section>
	);
}

export function ProfessionalFotographer() {
	return (
		<section className="absolute z-30  md:h-[90vh] lg:h-[60vh] mt-[70vh]">
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
					className="absolute hidden md:block right-12 top-0 lg:h-[55vh] object-cover"
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
	);
}

export function WeddingFilmSpecialist() {
	return (
		<section className="absolute z-30  md:h-[90vh] lg:h-[60vh] mt-[140vh]">
			<div className="flex p-6 md:p-10 lg:p-16 text-white justify-center">
				<div className="ml-[35rem] w-[50rem] ">
					<h1 className="font-head text-2xl sm:text-4xl md:text-5xl lg:text-[32px] leading-tight">
						Wedding Film Specialist
					</h1>

					<p className="text-xs sm:text-sm md:text-base  lg:text-xl mt-4 md:mt-6 lg:mt-10 text-justify">
						Biarkan kisah cinta Anda hidup dalam alur yang indah melalui layanan
						videography dari Sakinah Wedding. Dengan gaya sinematik dan
						pengambilan gambar yang emosional, kami menangkap setiap detik
						berharga—dari akad yang khusyuk hingga senyum bahagia di resepsi.
						Bukan sekadar dokumentasi, tapi karya visual yang merangkum cinta,
						doa, dan harapan dalam satu cerita abadi.
					</p>
				</div>

				<Image
					src="/svg/our-service-4-2.svg"
					width={276}
					height={323}
					alt="love-story"
					className="absolute hidden md:block left-[18rem] top-20 z-40"
				/>

				<Image
					src="/svg/our-service-4-1.svg"
					width={305}
					height={401}
					alt="love-story"
					className="absolute hidden md:block left-10 top-15 -translate-y-28   "
				/>
			</div>
		</section>
	);
}

export function EventMaestro() {
	return (
		<section className="absolute z-30 top-0 w-full h-[50vh] mt-[210vh]">
			<div className="flex text-white ">
				<div className="md:w-1/2 lg:w-[50rem] lg:ml-20 ">
					<h1 className="font-head text-2xl sm:text-4xl md:text-5xl lg:text-[32px]  leading-tight">
						Event Maestro
					</h1>

					<p className="text-xs sm:text-sm md:text-base  lg:text-xl mt-4 md:mt-6 lg:mt-10 text-justify">
						Di balik momen pernikahan yang indah, ada tim yang bekerja dengan
						sepenuh hati. Sakinah Wedding menghadirkan layanan Event Organizer
						profesional yang siap membantu Anda mewujudkan pernikahan
						impian—terencana, tertata, dan bebas stres. Dari konsep awal hingga
						eksekusi hari H, setiap detail kami kelola dengan cermat dan penuh
						kepedulian. Karena bagi kami, pernikahan bukan hanya acara, tapi
						kisah berharga yang pantas dirangkai dengan sempurna.
					</p>
				</div>

				<Image
					src="/svg/our-service-5.svg"
					width={500}
					height={400}
					alt="love-story"
					className="hidden md:block translate-x-[5rem] -translate-y-10 lg:h-[55vh] object-cover "
				/>
			</div>
		</section>
	);
}

export function EventHost() {
	return (
		<section className="absolute z-30 top-0 w-full h-[100vh] mt-[280vh]">
			<div className="flex text-white ">
				<div className="md:w-1/2 lg:w-[50rem] lg:ml-20 ">
					<h1 className="font-head text-2xl sm:text-4xl md:text-5xl lg:text-[32px]  leading-tight">
						Event Host Extradiornaire
					</h1>

					<p className="text-xs sm:text-sm md:text-base lg:text-xl mt-4 md:mt-6 lg:mt-10 text-justify">
						Acara yang berjalan khidmat dan berkesan dimulai dari penyampaian
						yang tepat. Sakinah Wedding menghadirkan MC profesional yang tak
						hanya fasih dalam membawakan acara, tetapi juga menghadirkan suasana
						hangat, santun, dan sesuai dengan nilai-nilai islami. Dipadukan
						dengan kehadiran Qori’ Al-Qur’an yang membacakan ayat suci dengan
						lantunan merdu, setiap momen terasa lebih sakral, menyentuh, dan
						diberkahi. Bersama kami, pernikahan Anda bukan hanya indah, tapi
						juga penuh makna spiritual.
					</p>
				</div>

				<Image
					src="/svg/our-service-6-1.svg"
					width={450}
					height={600}
					alt="love-story"
					className="absolute hidden md:block right-[5.5rem] object-cover "
				/>

				<div className="flex flex-row justify-between w-full gap-4 md:absolute md:left-[5rem] bottom-[5rem] md:w-[30rem] relative ">
					<Image
						src="/svg/our-service-6-4.svg"
						width={238}
						height={238}
						alt="love-story"
						className="object-cover"
					/>
					<Image
						src="/svg/our-service-6-3.svg"
						width={238}
						height={238}
						alt="love-story"
						className="object-cover"
					/>
					<Image
						src="/svg/our-service-6-2.svg"
						width={238}
						height={238}
						alt="love-story"
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
}

export function ProfessionalMakeOver() {
	return (
		<section className="absolute z-30  md:h-[90vh] lg:h-[60vh] mt-[390vh]">
			<div className="flex p-6 md:p-10 lg:p-16 text-white justify-center">
				<div className="ml-[45rem] w-[40rem] ">
					<h1 className="font-head text-2xl sm:text-4xl md:text-5xl lg:text-[32px] leading-tight">
						Professional Make Over
					</h1>

					<p className="text-xs sm:text-sm md:text-base  lg:text-xl mt-4 md:mt-6 lg:mt-10 text-justify">
						Tampil anggun dan memukau di hari istimewamu bersama layanan make up
						wedding dari Sakinah Organizer—rias profesional yang tahan lama,
						menyesuaikan karakter dan tema pernikahanmu, siap menjadikanmu pusat
						perhatian di setiap momen sakral.
					</p>
				</div>

				<Image
					src="/svg/our-service-7-2.svg"
					width={330}
					height={323}
					alt="love-story"
					className="absolute hidden md:block left-[25rem] top-10 z-40"
				/>

				<Image
					src="/svg/our-service-7-1.svg"
					width={460}
					height={400}
					alt="love-story"
					className="absolute hidden md:block left-10 top-15 -translate-y-28   "
				/>
			</div>
		</section>
	);
}

export function ElegantAttire() {
	return (
		<section className="absolute z-30 top-0 w-full h-[50vh] mt-[470vh]">
			<div className="flex text-white ">
				<div className="md:w-1/2 lg:w-[30rem] lg:ml-20 ">
					<h1 className="font-head text-2xl sm:text-4xl md:text-5xl lg:text-[32px]  leading-tight">
						Elegant Attire
					</h1>

					<p className="text-xs sm:text-sm md:text-base  lg:text-xl mt-4 md:mt-6 lg:mt-10 text-justify">
						Tampil memukau di hari bahagia dengan koleksi attire wedding dari
						Sakinah Organizer—perpaduan elegan antara desain klasik dan sentuhan
						modern yang dirancang khusus untuk mencerminkan keanggunan,
						kesakralan, dan kepribadianmu sebagai pengantin. Setiap detail
						busana kami dirancang dengan penuh cinta untuk membuatmu merasa
						istimewa dan percaya diri di setiap langkah menuju pelaminan.
					</p>
				</div>

				<Image
					src="/svg/service-01.svg"
					width={300}
					height={490}
					alt="love-story"
					className="absolute hidden md:block -top-20 translate-x-[40rem] object-cover "
				/>

				<Image
					src="/svg/service-02.svg"
					width={300}
					height={490}
					alt="love-story"
					className="absolute hidden md:block -top-20 translate-x-[55rem] object-cover "
				/>

				<Image
					src="/svg/service-03.svg"
					width={300}
					height={490}
					alt="love-story"
					className="absolute hidden md:block -top-20 translate-x-[70rem] object-cover "
				/>
			</div>
		</section>
	);
}
