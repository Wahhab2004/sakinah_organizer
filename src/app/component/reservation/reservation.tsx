"use client";
import React, { useState } from "react";
import { ReservationData, Sakinah, Mawaddah, Warahmah } from "./data";

// Komponen untuk menampilkan satu kartu paket dengan input radio
interface PackageRadioCardProps {
	data: ReservationData;
	isSelected: boolean;
	onSelect: (value: string) => void;
}

function PackageRadioCard({
	data,
	isSelected,
	onSelect,
}: PackageRadioCardProps) {
	return (
		<div
			className={`p-6 bg-[#59543E]/40 rounded-3xl shadow-lg w-full md:w-[300px] lg:w-[380px] h-fit transition-transform ${
				isSelected ? "scale-105 border-2 border-[#C2AF84]" : "hover:scale-105"
			}`}
		>
			<div className="flex items-center mb-4">
				<input
					type="radio"
					id={data.name}
					name="reservation-package"
					value={data.name}
					checked={isSelected}
					onChange={() => onSelect(data.name)}
					className="mr-2 accent-[#C2AF84]"
					aria-labelledby={`${data.name}-label`}
				/>
				<label
					id={`${data.name}-label`}
					className="text-[#C2AF84] font-head text-2xl"
				>
					{data.name}
				</label>
			</div>
			<h2 className="font-head text-2xl text-center text-[#E1CD9F]">
				{data.price}
			</h2>
			<div className="pl-4 mt-4">
				<h3 className="font-head text-xl">Fasilitas:</h3>
				<ul className="pl-5 mt-2 list-disc text-start">
					{data.facilities.map((facility, idx) => (
						<li className="text-sm text-white" key={idx}>
							{facility}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

// Komponen utama untuk menampilkan semua paket sebagai radio
export function ReservationRadio() {
	const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

	const packages: ReservationData[] = [Sakinah, Mawaddah, Warahmah];

	const handleSelect = (value: string) => {
		setSelectedPackage(value);
	};

	return (
		<div className="container mx-auto py-8">
			{/* <h1 className="text-3xl font-bold text-[#C2AF84] mb-6 text-center">
				Pilih Paket Reservasi
			</h1> */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{packages.map((pkg) => (
					<PackageRadioCard
						key={pkg.name}
						data={pkg}
						isSelected={selectedPackage === pkg.name}
						onSelect={handleSelect}
					/>
				))}
			</div>
			{selectedPackage && (
				<div className="mt-6 text-center">
					<p className="text-lg text-[#C2AF84]">
						Paket yang dipilih:{" "}
						<span className="font-bold">{selectedPackage}</span>
					</p>
				</div>
			)}
		</div>
	);
}

export function ReservationCheckbox() {
	return (
		<div className="flex flex-col gap- items-start justify-center text-sm">
			<div>
				<input type="checkbox" id="mua" name="mua" value="mua" />
				<label htmlFor="mua" className="ml-2 text-[#C2AF84]">
					MUA
				</label>
			</div>
			<div>
				<input type="checkbox" id="busana" name="busana" value="busana" />
				<label htmlFor="busana" className="ml-2 text-[#C2AF84]">
					Busana
				</label>
			</div>
			<div>
				<input type="checkbox" id="catering" name="catering" value="catering" />
				<label htmlFor="catering" className="ml-2 text-[#C2AF84]">
					Catering
				</label>
			</div>
			<div>
				<input
					type="checkbox"
					id="dokumentasi"
					name="dokumentasi"
					value="dokumentasi"
				/>
				<label htmlFor="dokumentasi" className="ml-2 text-[#C2AF84]">
					Dokumentasi
				</label>
			</div>
		</div>
	);
}

export default function ReservationForm() {
	return (
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

			{/* Tanggal */}
			<div className="relative mb-6">
				<label
					htmlFor="waktuMulaiAkad"
					className="flex items-center mb-2 text-sm "
				>
					Tanggal
				</label>

				<div className="relative ">
					<input
						type="date"
						name="name"
						id="waktuMulaiAkad"
						className="block w-full h-11 pr-5 pl-6 py-2.5 text-base font-normal shadow-xs bg-[#4B443F]  rounded-full focus:outline-none"
						required
					/>

					<span className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
						<svg
							className="w-5 h-5 text-[#C2AF84]"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</span>
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

					<span className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
						<svg
							className="w-6 h-6 text-[#C2AF84]"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					</span>
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
					<span className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
						<svg
							className="w-6 h-6 text-[#C2AF84]"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					</span>
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

			{/* Kategori Mempelai */}
			{/* <div className="relative mb-6">
				<label
					htmlFor="kategoriMempelai"
					className="flex items-center mb-2 text-sm "
				>
					Kategori Mempelai
				</label>

				<div className="relative ">
					<select name="1" id="1">
						<option value="1">1</option>
						<option value="1">1</option>
						<option value="1">1</option>
						<option value="1">1</option>
					</select>
				</div>
			</div> */}

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

				<ReservationRadio />
			</div>

			{/* Layanan Tambahan */}
			<div className="relative mb-6">
				<label
					htmlFor="layananTambahan"
					className="flex items-center mb-2 text-sm "
				>
					Layanan Tambahan
				</label>

				<ReservationCheckbox />
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				className="w-full bg-[#C2AF84] text-[#302C29] font-bolds rounded-full py-2.5 font-medium hover:bg-[#AB9A74] transition"
			>
				Submit
			</button>
		</form>
	);
}


export function Calendar() {
	return(
		<div>
			
		</div>
	)
}