"use client";

import { useState } from "react";
import { FormatTanggalIndoUser } from "@/app/component/format-tanggal/formatTanggal";
import dataDummyReservasi from "@/app/component/admin/reservasi/dataDummyReservasi";
import AlertDelete from "@/app/component/admin/reservasi/alertDelete";
import EditModal from "@/app/component/admin/reservasi/modal";

interface Reservation {
	id: string;
	namaCustomer: string;
	tanggalBooking: string;
	tanggalAcara: string;
	waktuAcara: string;
	kategoriCustomer: string;
	pilihanPaket: string;
	servisTambahan: string;
	pembayaran: string;
	accTim: string;
	noWaPemesan: string;
}

export default function Reservasi() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedReservationId, setSelectedReservationId] = useState<
		string | null
	>(null);
	const [reservations, setReservations] =
		useState<Reservation[]>(dataDummyReservasi);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	const handleOpenModal = (reservationId: string) => {
		setSelectedReservationId(reservationId);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedReservationId(null);
	};

	const handleSave = (data: {
		servisTambahan: string;
		pembayaran: string;
		accTim: string;
	}) => {
		if (selectedReservationId) {
			const updatedReservations = reservations.map((res) =>
				res.id === selectedReservationId ? { ...res, ...data } : res
			);
			setReservations(updatedReservations);
		}
	};

	const handleDelete = (reservationId: string) => {
		const updatedReservations = reservations.filter(
			(res) => res.id !== reservationId
		);
		setReservations(updatedReservations);
		// alert("Data dihapus"); // Opsional, bisa diganti dengan notifikasi lain
	};

	// Search
	const [filteredReservations] =
		useState(reservations);

	const totalPages = Math.ceil(filteredReservations.length / itemsPerPage);

	// Mengatur halaman
	const getPaginatedData = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return filteredReservations.slice(startIndex, endIndex);
	};

	// Fungsi pindah halaman selanjutnya
	const handleNext = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	// Fungsi pindah halaman sebelumnya
	const handlePrevious = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	// Fungsi untuk mendapatkan reservasi berdasarkan ID
	const getReservationById = (id: string) => {
		return reservations.find((res) => res.id === id) || null;
	};

	return (
		<section className="mt-10">
			<div className="ml-[235px] border shadow rounded-lg p-4 w-[83%] ">
				<table className="w-full text-left mt-2 tracking-wide">
					<thead>
						<tr>
							{[
								"#",
								"NAMA CUSTOMER",
								"TANGGAL BOOKING",
								"TANGGAL ACARA",
								"WAKTU ACARA",
								"KATEGORI CUSTOMER",
								"PILIHAN PAKET",
								"SERVIS TAMBAHAN",
								"PEMBAYARAN",
								"ACC TIM",
								"NO WA PEMESAN",
								"AKSI",
							].map((header, idx) => (
								<th key={idx} className="text-[#5D6679] text-[10px] pr-2">
									{header}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{getPaginatedData().length > 0 ? (
							getPaginatedData().map((reservasi) => (
								<tr
									key={reservasi.id}
									className="text-gray-700 text-xs border-b"
								>
									<td className="py-4">{reservasi.id}</td>
									<td className="py-4">{reservasi.namaCustomer}</td>
									<td className="py-4">
										{FormatTanggalIndoUser(reservasi.tanggalBooking)}
									</td>
									<td className="py-4">
										{FormatTanggalIndoUser(reservasi.tanggalAcara)}
									</td>
									<td className="py-4">{reservasi.waktuAcara}</td>
									<td className="py-4">{reservasi.kategoriCustomer}</td>
									<td className="py-4">{reservasi.pilihanPaket}</td>
									<td className="py-4">{reservasi.servisTambahan}</td>
									<td className="py-4">{reservasi.pembayaran}</td>
									<td className="py-4">{reservasi.accTim}</td>
									<td className="py-4">{reservasi.noWaPemesan}</td>
									<td className="flex gap-2 py-4 text-[10px]">
										<button
											onClick={() => handleOpenModal(reservasi.id)}
											className="bg-yellow-500 text-white p-1 rounded"
										>
											Edit
										</button>
										<AlertDelete
											onDelete={async () => handleDelete(reservasi.id)}
										/>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td className="p-4 text-center text-gray-500" colSpan={8}>
									No reservations found.
								</td>
							</tr>
						)}
					</tbody>
				</table>

				<EditModal
					isOpen={isModalOpen}
					onClose={handleCloseModal}
					onSave={handleSave}
					reservationId={selectedReservationId}
					getReservationById={getReservationById}
				/>
			</div>

			{/* Pagination Controls */}
			<div className="flex justify-evenly mt-8 mb-20 items-center">
				<button
					onClick={handlePrevious}
					disabled={currentPage === 1}
					className="border rounded-lg text-xs text-gray-600 border-gray-600 hover:bg-gray-200 px-4 py-2"
				>
					Previous
				</button>
				<span className="text-gray-600">
					Page {currentPage} of {totalPages}
				</span>
				<button
					onClick={handleNext}
					disabled={currentPage === totalPages}
					className="border rounded-lg text-xs text-gray-600 border-gray-600 hover:bg-gray-200 px-4 py-2"
				>
					Next
				</button>
			</div>
		</section>
	);
}
