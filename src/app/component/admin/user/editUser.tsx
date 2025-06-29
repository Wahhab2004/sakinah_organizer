"use client";

import { useState, useEffect } from "react";

interface EditUserProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (data: {
		username: string;
		email: string;
		phone_number: string;
		role: string;
		password?: string;
	}) => void;
	userData: {
		id: number;
		username: string;
		email: string;
		phone_number: string;
		role: string;
		password?: string; // Optional, as it may not be shown in the UI
	} | null;
}



interface EditUserPayload {
	username: string;
	email: string;
	phone_number: string;
	role: string;
	password?: string; // Optional, as it may not be shown in the UI
}

const EditUser: React.FC<EditUserProps> = ({
	isOpen,
	onClose,
	onSave,
	userData,
}) => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		phone_number: "",
		role: "",
		password: "",
		repassword: "",
	});

	useEffect(() => {
		if (isOpen && userData) {
			setFormData({
				username: userData.username,
				email: userData.email,
				phone_number: userData.phone_number,
				role: userData.role,
				password: "",
				repassword: "",
			});
		}
	}, [isOpen, userData]);

	if (!isOpen) return null;

	const isPasswordMatch =
		formData.password === formData.repassword || formData.password === "";

	const handleSave = async () => {
		if (!isPasswordMatch) {
			alert("Password dan Re-Password tidak sama");
			return;
		}

		const payload: EditUserPayload = {
			username: formData.username,
			email: formData.email,
			phone_number: formData.phone_number,
			role: formData.role,
		};

		if (formData.password !== "") {
			payload.password = formData.password;
		}

		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${userData?.id}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(payload),
				}
			);

			if (!response.ok) {
				throw new Error("Gagal memperbarui user");
			}

			const updatedUser = await response.json();
			onSave(updatedUser);
			onClose();
			alert("User berhasil diperbarui!");
		} catch (error) {
			console.error("Error saat memperbarui:", error);
			alert("Terjadi kesalahan saat memperbarui user.");
		}
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
					<label className="text-sm">Username</label>
					<input
						type="text"
						value={formData.username}
						readOnly
						className="w-full p-2 border border-gray-300 rounded-xl"
					/>
				</div>

				<div className="mb-4">
					<label className="text-sm">Email</label>
					<input
						type="text"
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						className="w-full p-2 border border-gray-300 rounded-xl"
					/>
				</div>

				<div className="mb-4">
					<label className="text-sm">Phone Number</label>
					<input
						type="text"
						value={formData.phone_number}
						onChange={(e) =>
							setFormData({ ...formData, phone_number: e.target.value })
						}
						className="w-full p-2 border border-gray-300 rounded-xl"
					/>
				</div>

				<div className="mb-4">
					<label className="text-sm">Role</label>
					<select
						value={formData.role}
						onChange={(e) => setFormData({ ...formData, role: e.target.value })}
						className="w-full p-2 border border-gray-300 rounded-xl"
					>
						<option value="">Pilih Role</option>
						<option value="superadmin">superadmin</option>
						<option value="admin">admin</option>
					</select>
				</div>

				<div className="mb-4">
					<label className="text-sm">Password Baru (opsional)</label>
					<input
						type="password"
						value={formData.password}
						onChange={(e) =>
							setFormData({ ...formData, password: e.target.value })
						}
						className="w-full p-2 border border-gray-300 rounded-xl"
					/>
				</div>

				<div className="mb-4">
					<label className="text-sm">Re-Password</label>
					<input
						type="password"
						value={formData.repassword}
						onChange={(e) =>
							setFormData({ ...formData, repassword: e.target.value })
						}
						className={`w-full p-2 border ${
							formData.repassword && !isPasswordMatch
								? "border-red-500"
								: "border-gray-300"
						} rounded-xl`}
					/>
					{formData.repassword && !isPasswordMatch && (
						<p className="text-red-500 text-sm mt-1">Password tidak cocok</p>
					)}
				</div>

				<div>
					<button
						onClick={handleSave}
						disabled={!isPasswordMatch}
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

export default EditUser;
