"use client";

import { useState, useEffect } from "react";

interface EditModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (data: {
		jenisPaket: string;
		customer: string;
		hargaAsli: string;
		hargaDiskon: string;
		fasilitas: string;
	}) => void;
	jenisPaketId: string | null;
	getJenisPaketId: (id: string) => {
		jenisPaket: string;
		customer: string;
		hargaAsli: string;
		hargaDiskon: string;
		fasilitas: string;
	} | null;
}

const EditPaket: React.FC<EditModalProps> = ({
	isOpen,
	onClose,
	onSave,
	jenisPaketId,
	getJenisPaketId,
}) => {
	const [formData, setFormData] = useState({
		jenisPaket: "",
		customer: "",
		hargaAsli: "",
		hargaDiskon: "",
		fasilitas: "",
	});

	useEffect(() => {
		if (isOpen && jenisPaketId) {
			const jenisPaket = getJenisPaketId(jenisPaketId);
			if (jenisPaket) {
				setFormData(jenisPaket);
			}
		}
	}, [isOpen, jenisPaketId, getJenisPaketId]);

	if (!isOpen) return null;

	const handleSave = () => {
		onSave({
			jenisPaket: formData.jenisPaket,
			customer: formData.customer,
			hargaAsli: formData.hargaAsli,
			hargaDiskon: formData.hargaDiskon,
			fasilitas: formData.fasilitas,
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
				<h2 className="text-2xl font-semibold mb-4">Edit User</h2>
				<div className="mb-4">
					<label className="text-sm">Jenis Paket</label>
					<input
						type="text"
						value={formData.jenisPaket}
						readOnly
						className="w-full p-2 border border-gray-300 rounded-xl"
					/>
				</div>
				<div className="mb-4">
					<label className="text-sm">Customer</label>
					<input
						type="text"
						value={formData.customer}
						onChange={(e) =>
							setFormData({ ...formData, customer: e.target.value })
						}
						className="w-full p-2 border border-gray-300 rounded-xl"
					/>
				</div>
				<div className="mb-4">
					<label className="text-sm">hargaAsli</label>
					<input
						type="text"
						value={formData.hargaAsli}
						onChange={(e) =>
							setFormData({ ...formData, hargaAsli: e.target.value })
						}
						className="w-full p-2 border border-gray-300 rounded-xl"
					/>
				</div>
				<div className="mb-4">
					<label className="text-sm">hargaDiskon</label>
					<input
						type="text"
						value={formData.hargaDiskon}
						onChange={(e) =>
							setFormData({ ...formData, hargaDiskon: e.target.value })
						}
						className="w-full p-2 border border-gray-300 rounded-xl"
					/>
				</div>
				<div className="mb-4">
					<label className="text-sm">Fasilitas</label>
					<input
						type="text"
						value={formData.fasilitas}
						onChange={(e) =>
							setFormData({ ...formData, fasilitas: e.target.value })
						}
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

export default EditPaket;
