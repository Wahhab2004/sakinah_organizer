import Image from "next/image";

export default function Reservation() {
	return (
		<div>
			<section className="relative h-[500px] sm:h-[600px] md:h-[70vh]">
				{/* Background Layers */}
				{/* Top */}
				<div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-bl from-[#59543E]/90 from-20% via-[#F8F0CC]/0 from-30% to-[#F8F0CC]/10  " />

				{/* Bottom */}
				<div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-[#59543E]/90 from-20% via-[#F8F0CC]/0 from-30% to-[#F8F0CC]/10 " />

				{/* Image */}
				<Image
					className="z-20 h-[70vh] object-cover absolute right-0 w-screen top-0 left-0 object-cover opacity-40"
					width={2000}
					height={1000}
					src="/svg/bg-reservasi.svg"
					alt="hero"
				/>

				<div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 xl:px-20 z-40 max-w-full ">
					<div className="text-center">
						<h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-head -translate-y-2 sm:-translate-y-2 ">
							Book Your Perfect Day with Us
						</h1>
						<p className="text-white text-sm sm:text-base md:text-lg lg:text-xl w-full   ">
							Pesan sekarang, dan buat momen bahagia Anda menjadi kenyataan!
						</p>
					</div>
				</div>
			</section>

			<div className="p-2 sm:p-10 md:p-15 lg:p-20 bg-[#59543E] pb-20">
				<div className="py-8 px-5 sm:p-10 md:p-15 lg:p-20 bg-[#302C29] text-white text-center  rounded-3xl">
					<h1 className="font-head  text-3xl sm:text-4xl md:text-5xl lg:text-[48px]">
						Reservation Form
					</h1>
					<p className="italic text-xs sm:text-sm md:text-base">
						*Waktu Minimal Reservasi adalah H-1 Bulan
					</p>

					<form method="POST" className="mt-10 lg:mt-20">
						{/* Name Pemesan */}
						<div className="relative mb-6">
							<label
								htmlFor="namaPemesan"
								className="flex items-center mb-2 text-sm "
							>
								Nama pemesan
							</label>

							<div className="relative ">
								<input
									type="text"
									name="name"
									id="namaPemesan"
									placeholder="Nama Pemesan"
									className="block w-full h-11 pr-5 pl-6 py-2.5 text-base font-normal shadow-xs placeholder:text-[#94867C] bg-[#4B443F]  rounded-full focus:outline-none"
									required
								/>

								<div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
									{/* User Icon */}
									<svg
										className="stroke-current ml-1"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											d="M20 21V20.1429C20 19.0805 20 18.5493 19.8997 18.1099C19.5578 16.6119 18.3881 15.4422 16.8901 15.1003C16.4507 15 15.9195 15 14.8571 15H10C8.13623 15 7.20435 15 6.46927 15.3045C5.48915 15.7105 4.71046 16.4892 4.30448 17.4693C4 18.2044 4 19.1362 4 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
											stroke=""
											strokeWidth="1.6"
											strokeLinecap="round"
											className="text-[#94867C]"
										/>
									</svg>
								</div>
							</div>
						</div>

						{/* Tanggal Akad */}
						<div className="relative mb-6">
							<label
								htmlFor="tanggalAkad"
								className="flex items-center mb-2 text-sm "
							>
								Tanggal Akad
							</label>

							<div className="relative ">
								<input
									type="date"
									name="name"
									id="tanggalAkad"
									className="block w-full h-11 pr-5 pl-6 py-2.5 text-base font-normal shadow-xs bg-[#4B443F]  rounded-full focus:outline-none"
									required
								/>
							</div>
						</div>

						{/* Waktu Mulai Akad */}
						<div className="relative mb-6">
							<label
								htmlFor="waktuMulaiAkad"
								className="flex items-center mb-2 text-sm "
							>
								Waktu Mulai Akad
							</label>

							<div className="relative ">
								<input
									type="time"
									name="name"
									id="waktuMulaiAkad"
									className="block w-full h-11 pr-5 pl-6 py-2.5 text-base font-normal shadow-xs bg-[#4B443F]  rounded-full focus:outline-none"
									required
								/>
							</div>
						</div>

						{/* Waktu Setelah Akad */}
						<div className="relative mb-6">
							<label
								htmlFor="waktuSetelahAkad"
								className="flex items-center mb-2 text-sm "
							>
								Waktu Setelah Akad
							</label>

							<div className="relative ">
								<input
									type="time"
									name="name"
									id="waktuSetelahAkad"
									className="block w-full h-11 pr-5 pl-6 py-2.5 text-base font-normal shadow-xs bg-[#4B443F]  rounded-full focus:outline-none"
									required
								/>
							</div>
						</div>

						{/* No Hp Pemesan */}
						<div className="relative mb-6">
							<label
								htmlFor="noHpPemesan"
								className="flex items-center mb-2 text-sm "
							>
								No. Hp pemesan
							</label>

							<div className="relative ">
								<input
									type="text"
									name="name"
									id="noHpPemesan"
									placeholder="No. Pemesan"
									className="block w-full h-11 pr-5 pl-6 py-2.5 text-base font-normal shadow-xs placeholder:text-[#94867C] bg-[#4B443F]  rounded-full focus:outline-none"
									required
								/>
							</div>
						</div>

						{/* Nama Mempelai Pria */}
						<div className="relative mb-6">
							<label
								htmlFor="namaMempelaiPria"
								className="flex items-center mb-2 text-sm "
							>
								Nama Mempelai Pria
							</label>

							<div className="relative ">
								<input
									type="text"
									name="name"
									id="namaMempelaiPria"
									placeholder="Nama Mempelai Pria"
									className="block w-full h-11 pr-5 pl-6 py-2.5 text-base font-normal shadow-xs placeholder:text-[#94867C] bg-[#4B443F]  rounded-full focus:outline-none"
									required
								/>
							</div>
						</div>

						{/* Nama Mempelai Wanita */}
						<div className="relative mb-6">
							<label
								htmlFor="namaMempelaiWanita"
								className="flex items-center mb-2 text-sm "
							>
								Nama Mempelai Wanita
							</label>

							<div className="relative ">
								<input
									type="text"
									name="name"
									id="namaMempelaiWanita"
									placeholder="Nama Mempelai Wanita"
									className="block w-full h-11 pr-5 pl-6 py-2.5 text-base font-normal shadow-xs placeholder:text-[#94867C] bg-[#4B443F]  rounded-full focus:outline-none"
									required
								/>
							</div>
						</div>

						{/* Kertu Identitas */}
						<div className="relative mb-6">
							<label htmlFor="kti" className="flex items-center mb-2 text-sm ">
								Kartu Identitas
							</label>

							<div className="relative ">
								<input
									type="file"
									name="name"
									id="kti"
									placeholder="Nama Mempelai Wanita"
									className="block w-full h-11 pr-5 pl-6 py-2.5 text-base font-normal shadow-xs placeholder:text-[#94867C] bg-[#4B443F]  rounded-full focus:outline-none"
									required
								/>
							</div>
						</div>

						{/* Pilihan Paket */}
						<div className="relative mb-6">
							<label
								htmlFor="pilihanPaket"
								className="flex items-center mb-2 text-sm "
							>
								Pilihan Paket
							</label>
						</div>

						
						{/* Layanan Tambahan */}
						<div className="relative mb-6">
							<label
								htmlFor="layananTambahan"
								className="flex items-center mb-2 text-sm "
							>
								Layanan Tambahan
							</label>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full bg-[#C2AF84] text-[#302C29] font-bolds rounded-full py-2.5 font-medium hover:bg-[#AB9A74] transition"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
