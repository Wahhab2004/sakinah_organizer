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
				className="z-20 h-[100vh] object-cover absolute right-0 w-full top-0 left-0 object-cover opacity-40"
				width={2000}
				height={1000}
				src="/svg/bg-ourservice.svg"
				alt="hero"
			/>

			<div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 xl:px-20 z-40 max-w-full lg:mt-20 ">
				<div className="text-center md:text-start">
					<h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-head -translate-y-2 sm:-translate-y-2 ">
						Creating Moments
					</h1>
					<h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-head ">
						Delivering Moments
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
			<div className="md:flex text-white justify-center xl:max-w-7xl xl:mx-auto">
				<div className="p-4 md:w-1/2 lg:w-[50rem] mt-10">
					<h1 className="font-head text-2xl sm:text-4xl md:text-5xl lg:text-[32px] leading-tight">
						Creative Decor Experts
					</h1>
					<p className="text-xs sm:text-sm md:text-base lg:text-xl mt-4 md:mt-6 lg:mt-10 text-justify">
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
					className="hidden md:block right-0 rounded-[1.5rem] xl:translate-x-10 top-0 md:h-[40vh] lg:h-[55vh] object-cover max-h-[50vh]"
				/>
			</div>
		</section>
	);
}

export function ProfessionalFotographer() {
	return (
		<section className="absolute z-30  md:h-[90vh] lg:h-[60vh] mt-[50vh] lg:mt-[70vh]">
			<div className="p-4 md:p-10 lg:p-16 text-white h-[50vh] relative flex flex-col md:flex-row justify-center">
				<div className="ml-0  md:ml-auto md:w-1/2  my-auto lg:ml-0 lg:w-1/3 ">
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
					className="absolute hidden md:block md:left-2 lg:left-0 rounded top-10 lg:mt-[1.5rem] xl:mt-0 xl:top-0 lg:w-[17rem] xl:h-[25rem] object-cover lg:translate-x-[43rem] xl:translate-x-[55rem] 2xl:translate-x-[70rem] z-50"
				/>

				<Image
					src="/images/service-group.png"
					width={280}
					height={280}
					alt="love-story"
					className="absolute hidden lg:block lg:w-[13rem] xl:w-[15rem] lg:left-14  xl:left-[10rem] top-[8rem] xl:top-5 -translate-y-28 z-50 mt-10 object-cover"
				/>
			</div>
		</section>
	);
}

export function WeddingFilmSpecialist() {
	return (
		<section className="absolute z-30 top-0 w-full h-[50vh] mt-[100vh] lg:mt-[140vh]">
			<div className="md:flex text-white p-4 md:p-6 lg:p-10">
				<div className="md:w-1/2 mt-10 lg:mt-20">
					<h1 className="font-head text-2xl sm:text-4xl md:text-5xl lg:text-[32px] leading-tight">
						Wedding Film Specialist
					</h1>

					<p className="text-xs sm:text-sm md:text-base lg:text-xl mt-4 md:mt-6 lg:mt-10 text-justify">
						Biarkan kisah cinta Anda hidup dalam alur yang indah melalui layanan
						videography dari Sakinah Wedding. Dengan gaya sinematik dan
						pengambilan gambar yang emosional, kami menangkap setiap detik
						berharga—dari akad yang khusyuk hingga senyum bahagia di resepsi.
						Bukan sekadar dokumentasi, tapi karya visual yang merangkum cinta,
						doa, dan harapan dalam satu cerita abadi.
					</p>
				</div>

				<div className="relative flex items-center justify-center md:w-1/2 md:ml-10 lg:ml-0 mt-[8rem]">
					<Image
						src="/svg/our-service-4-2.svg"
						width={276}
						height={323}
						alt="love-story"
						className="hidden md:block absolute right-0 translate-x-[1rem] lg:translate-x-[2rem] xl:-translate-x-[2rem] top-0 md:w-[15rem] lg:h-[40vh] object-cover"
					/>

					<Image
						src="/svg/our-service-4-1.svg"
						width={305}
						height={401}
						alt="love-story"
						className="hidden md:block absolute md:right-[8rem] lg:right-[12rem] -translate-y-10 xl:right-[15rem] md:w-[15rem] lg:h-[45vh] object-cover"
					/>
				</div>
			</div>
		</section>
	);
}

export function EventMaestro() {
	return (
		<section className="absolute z-30 top-0 w-full h-[50vh] mt-[150vh] lg:mt-[240vh]">
			<div className="flex text-white p-4 md:p-6 lg:p-10">
				<div className="md:w-1/2 lg:w-[40rem] ">
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
					className="hidden md:block translate-x-[2rem] xl:translate-x-[4rem] -translate-y-2 lg:translate-y-0 xl:translate-y-4 md:w-[23rem] lg:w-[25rem] xl:w-[30rem] object-cover "
				/>
			</div>
		</section>
	);
}

export function EventHost() {
	return (
		<section className="absolute z-30 top-0 w-full h-[100vh] mt-[200vh]  lg:mt-[360vh]">
			<div className="flex text-white p-4 md:p-6 lg:p-10 relative">
				<div className="md:w-1/2 lg:w-[35rem] xl:w-[40rem]">
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
					className="absolute hidden md:block right-[2.5rem] w-[20rem] lg:w-[18rem] xl:w-[25rem] object-cover -bottom-[5rem] lg:-bottom-[3rem]"
				/>

				<div className="flex flex-row justify-between w-full gap-4 md:absolute left-[1.5rem] xl: left-[2.5rem] -bottom-[7rem] lg:-bottom-[10rem] xl:-bottom-[12rem] md:w-[7rem] lg:w-[10rem] xl:w-[13rem] relative hidden md:flex">
					<Image
						src="/svg/our-service-6-4.svg"
						width={238}
						height={238}
						alt="love-story"
						className="hidden md:block object-cover"
					/>
					<Image
						src="/svg/our-service-6-3.svg"
						width={238}
						height={238}
						alt="love-story"
						className="hidden md:block object-cover"
					/>
					<Image
						src="/svg/our-service-6-2.svg"
						width={238}
						height={238}
						alt="love-story"
						className="hidden md:block object-cover"
					/>
				</div>
			</div>
		</section>
	);
}

export function ProfessionalMakeOver() {
	return (
		<section className="absolute z-30  md:h-[90vh] lg:h-[60vh] mt-[250vh] md:mt-[270vh] lg:mt-[500vh]">
			<div className="flex p-4 md:p-6 lg:p-10 text-white">
				<div className="w-full md:w-1/2 w-[40rem] ml-auto ">
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
					className="absolute hidden md:block left-[12rem] lg:left-[15rem] xl:left-[18rem] top-10 z-40 md:w-[12rem] lg:w-[15rem] xl:w-[18rem] object-cover"
				/>

				<Image
					src="/svg/our-service-7-1.svg"
					width={460}
					height={400}
					alt="love-story"
					className="absolute hidden md:block lg:left-10 lg:-top-6 md:w-[15rem] lg:w-[18rem] xl:w-[20rem] object-cover"
				/>
			</div>
		</section>
	);
}

export function ElegantAttire() {
	return (
		<section className="absolute z-30 top-0 w-full h-[50vh] mt-[290vh] md:mt-[315vh] lg:mt-[570vh]">
			<div className="flex text-white ">
				<div className="md:w-1/2 lg:w-[30rem] p-4 md:p-6 lg:p-10">
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
					className="absolute hidden md:block w-[9rem] lg:w-[13rem] xl:w-[15rem] top-20 translate-x-[25rem] lg:translate-x-[30rem] xl:translate-x-[35rem] object-cover "
				/>

				<Image
					src="/svg/service-02.svg"
					width={300}
					height={490}
					alt="love-story"
					className="absolute hidden md:block w-[9rem] lg:w-[13rem]  xl:w-[15rem] top-20 translate-x-[32rem] lg:translate-x-[39rem] xl:translate-x-[48rem] object-cover "
				/>

				<Image
					src="/svg/service-03.svg"
					width={300}
					height={490}
					alt="love-story"
					className="absolute hidden md:block w-[9rem] lg:w-[13rem] xl:w-[15rem] top-20 translate-x-[40rem] lg:translate-x-[50rem] xl:translate-x-[63rem] object-cover "
				/>
			</div>
		</section>
	);
}
