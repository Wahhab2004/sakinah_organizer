import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer
			className="bg-[#302C29] text-white py-2  w-full relative z-40 "
			id="contact"
		>
			<div className="text-[#E1CD9F]/80 max-w-[1400px] mx-auto  p-4 md:p-6 mb-10 ">
				{/* Brand */}
				<div>
					<h1 className="text-xl sm:text-2xl md:text-3xl md:text-4xl font-semibold">
						Sakinah Organizer
					</h1>
					<h3 className="md:text-xl font-medium">By Masjid Kampus UGM</h3>
				</div>

				{/* Content Grid */}
				<div className="flex flex-col lg:flex-row justify-between mt-2 lg:mt-10 gap-4 md:gap-8 lg:gap-10">
					{/* Contact Info */}
					<div className="flex flex-col gap-2 md:gap-4 lg:gap-6 flex-1">
						{/* Head Office */}
						<div className="flex gap-4 items-start">
							<Image
								className="w-[21px] h-[31px] md:w-[25px] md:h-[35px] lg:w-[31px] lg:h-[41px]"
								width={31}
								height={41}
								src="/svg/icon-location.svg"
								alt="logo location"
							/>
							<div>
								<h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">Head Office</h2>
								<Link
									href="https://maps.app.goo.gl/umjX2S4hUw9QKksn6"
									target="_blank"
								>
									<p className="text-xs md:text-sm">
										Sekretariat Takmir Masjid Kampus UGM, Sayap Utara Masjid
										Kampus UGM, Jalan Tevesia 1 Bulaksumur, Caturtunggal, Depok,
										Sleman, Daerah Istimewa Yogyakarta 55281
									</p>
								</Link>
							</div>
						</div>

						{/* WhatsApp */}
						<div className="flex gap-4 items-center">
							<Image
								className="w-[21px] h-[21px] md:w-[25px] md:h-[25px	] lg:w-[31px] lg:h-[31px]"
								width={31}
								height={31}
								src="/svg/icon-whatsapp.svg"
								alt="logo whatsapp"
							/>
							<div>
								<h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">Whatsapp</h2>
								<Link href="https://wa.me/6281225400933" target="_blank">
									<p className="text-xs md:text-sm">+62 812 2540 0933</p>
								</Link>
							</div>
						</div>

						{/* Email */}
						<div className="flex gap-4 items-center">
							<Image
								className="w-[21px] h-[21px] md:w-[25px] md:h-[25px	] lg:w-[31px] lg:h-[31px]"
								width={31}
								height={31}
								src="/svg/icon-email.svg"
								alt="logo email"
							/>
							<div>
								<h2 className="text-xs sm: text-sm md:text-base lg:text-lg xl:text-xl font-semibold">Email</h2>
								<Link
									href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdMWGhqksmqbHMLrQZmRgRwLLrsJPQCpJtgSTJVKTHJbBgljJLcZSPntrvrlqRlMGBPKTJl"
									target="_blank"
								>
									<p className="text-xs md:text-sm">sowedding.maskamugm@gmail.com</p>
								</Link>
							</div>
						</div>
					</div>

					{/* Services & Info */}
					<div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-2 md:gap-4 lg:gap-10 ">
						{/* Services */}
						<div className="flex flex-col gap-1 lg:gap-4 items-center w-[256px]">
							<h2 className="text-sm md:text-lg lg:text-xl font-semibold text-center">Service</h2>
							<div className="flex gap-8 justify-center font-medium">
								<ul className="list-disc text-xs sm:text-sm  leading-5 lg:leading-6">
									<li>Decoration</li>
									<li>Photography</li>
									<li>Videography</li>
									<li>Event Planner</li>
								</ul>
								<ul className="list-disc text-xs sm:text-sm leading-5 lg:leading-6">
									<li>MC and Qori&apos;</li>
									<li>Catering</li>
									<li>MUA</li>
									<li>Attire</li>
								</ul>
							</div>
						</div>

						{/* Information */}
						<div className="flex flex-col gap-1 lg:gap-4 items-center w-[256px]">
							<h2 className="text-sm md:text-lg lg:text-xl font-semibold text-center">Information</h2>
							<div className="flex gap-8 justify-center font-medium">
								<ul className="list-disc text-xs sm:text-sm leading-5 lg:leading-6">
									<li>About Us</li>
									<li>Service</li>
									<li>Package</li>
								</ul>
								<ul className="list-disc text-xs sm:text-sm leading-5 lg:leading-6">
									<li>Reservation</li>
									<li>Contact</li>
									<li>FAQ</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Social Media */}
					<div className="flex flex-col gap-1 md:gap-2 lg:gap-4 items-center flex-1">
						<h2 className="font-semibold text-center text-sm md:text-lg lg:text-xl">
							Follow Us on Social Media
						</h2>
						<div className="flex gap-4 justify-center items-center">
							<Link href="https://www.facebook.com/maskamugm/" target="_blank">
								<Image
									className="w-[36px] h-[36px]"
									width={36}
									height={36}
									src="/svg/icon-facebook.svg"
									alt="logo facebook"
								/>
							</Link>

							<Link
								href="https://www.instagram.com/masjidkampusugm/"
								target="_blank"
							>
								<Image
									className="w-[36px] h-[36px]"
									width={36}
									height={36}
									src="/svg/icon-instagram.svg"
									alt="logo instagram"
								/>
							</Link>

							<Link href="https://x.com/masjidkampusugm/" target="_blank">
								<Image
									className="w-[30px] h-[30px]"
									width={30}
									height={30}
									src="/svg/icon-x.svg"
									alt="logo twitter"
								/>
							</Link>

							<Link
								href="https://www.youtube.com/@masjidkampusugm"
								target="_blank"
							>
								<Image
									className="w-[36px] h-[36px]"
									width={36}
									height={36}
									src="/svg/icon-youtube.svg"
									alt="logo youtube"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="flex justify-center items-center w-full h-[40px] md:h-[50px] lg:h-[80px] bg-[#383533] ">
				<h2 className="italic font-semibold text-center text-xs sm:text-sm lg:text-base md:text-xl text-[#8B816F]">
					&copy; Sakinah Organizer. All Rights Reserved
				</h2>
			</div>
		</footer>
	);
}
