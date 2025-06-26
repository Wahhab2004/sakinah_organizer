"use client";

import { useState, useEffect } from "react";

interface EditModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (data: {
		servisTambahan: string;
		pembayaran: string;
		accTim: string;
	}) => void;
	reservationId: string | null;
	getReservationById: (id: string) => {
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
	} | null;
}

const EditModal: React.FC<EditModalProps> = ({
	isOpen,
	onClose,
	onSave,
	reservationId,
	getReservationById,
}) => {
	const [formData, setFormData] = useState({
		namaCustomer: "",
		tanggalBooking: "",
		tanggalAcara: "",
		waktuAcara: "",
		kategoriCustomer: "",
		pilihanPaket: "",
		servisTambahan: "",
		pembayaran: "",
		accTim: "",
		noWaPemesan: "",
	});

	// Mengupdate formData berdasarkan reservationId saat isOpen berubah
	useEffect(() => {
		if (isOpen && reservationId) {
			const reservation = getReservationById(reservationId);
			if (reservation) {
				setFormData(reservation);
			}
		}
	}, [isOpen, reservationId, getReservationById]);

	if (!isOpen) return null;

	const handleSave = () => {
		onSave({
			servisTambahan: formData.servisTambahan,
			pembayaran: formData.pembayaran,
			accTim: formData.accTim,
		});
		onClose();
	};

	return (
		<div
			className="modal"
			style={{
				display: isOpen ? "block" : "none",
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				background: "rgba(0,0,0,0.5)",
			}}
		>
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					background: "white",
					padding: "20px",
					borderRadius: "5px",
					width: "400px",
				}}
			>
				<h2 className="text-2xl font-semibold mb-4 font-head">Edit Data</h2>
				<div className="mb-4">
					<label className="text-sm">Nama Customer</label>
					<input
						type="text"
						value={formData.namaCustomer}
						readOnly
						className="w-full p-2 border border-gray-300 rounded-xl"
					/>
				</div>
				<div className="mb-4">
					<label className="text-sm">Servis Tambahan</label>
					<input
						type="text"
						value={formData.servisTambahan}
						onChange={(e) =>
							setFormData({ ...formData, servisTambahan: e.target.value })
						}
						className="w-full p-2 border border-gray-300 rounded-xl"
					/>
				</div>
				<div className="mb-4">
					<label className="text-sm">Pembayaran</label>
					<input
						type="text"
						value={formData.pembayaran}
						onChange={(e) =>
							setFormData({ ...formData, pembayaran: e.target.value })
						}
						className="w-full p-2 border border-gray-300 rounded-xl"
					/>
				</div>
				<div className="mb-4">
					<label className="text-sm">ACC Tim</label>
					<input
						type="text"
						value={formData.accTim}
						onChange={(e) =>
							setFormData({ ...formData, accTim: e.target.value })
						}
						className="w-full p-2 border border-gray-300 rounded-xl"
					/>
				</div>
				<div className="mb-4">
					<label className="text-sm">No WA Pemesan</label>
					<input
						type="text"
						value={formData.noWaPemesan}
						readOnly
						className="w-full p-2 border border-gray-300 rounded-xl"
					/>
				</div>
				<div>
					<button
						onClick={handleSave}
						style={{
							padding: "5px 10px",
							background: "#4CAF50",
							color: "white",
							border: "none",
							borderRadius: "3px",
						}}
					>
						Simpan
					</button>
					<button
						onClick={onClose}
						style={{
							marginLeft: "10px",
							padding: "5px 10px",
							background: "#ccc",
							border: "none",
							borderRadius: "3px",
						}}
					>
						Tutup
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditModal;
