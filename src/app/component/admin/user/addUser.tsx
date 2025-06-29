"use client";

import { useState } from "react";

interface FormDataType {
	username: string;
	password: string;
	repassword: string;
	email: string;
	phone_number: string;
	role: string; // jika ada
}

interface AddUserProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (data: {
		username: string;
		password: string;
		repassword: string;
		email: string;
		phone_number: string;
		role: string;
	}) => void;
}

const AddUser: React.FC<AddUserProps> = ({ isOpen, onClose, onSave }) => {
	const [formData, setFormData] = useState<FormDataType>({
		username: "",
		password: "",
		repassword: "",
		email: "",
		phone_number: "",
		role: "",
	});

	const isPasswordMatch = formData.password === formData.repassword;

	const handleSave = async () => {
		try {
			const response = await fetch("http://localhost:8080/api/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Gagal menambahkan user");
			}

			const newUser = await response.json();

			onSave(newUser);
			onClose();
			alert("User berhasil ditambahkan!");
		} catch (error) {
			console.error("Error saat menyimpan:", error);
			alert("Terjadi kesalahan saat menyimpan user.");
		}
	};

	if (!isOpen) return null;

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
				<h2 className="text-2xl font-semibold mb-4">Tambah User</h2>

				{[
					{ label: "Username", key: "username", type: "text" },
					{ label: "Password", key: "password", type: "password" },
					{ label: "Re-Password", key: "repassword", type: "password" },
					{ label: "Email", key: "email", type: "text" },
					{ label: "Phone", key: "phone_number", type: "text" },
				].map((field) => (
					<div className="mb-4" key={field.key}>
						<label className="text-sm">{field.label}</label>
						<input
							type={field.type}
							value={formData[field.key as keyof FormDataType] || ""}
							onChange={(e) =>
								setFormData({ ...formData, [field.key]: e.target.value })
							}
							className={`w-full p-2 border ${
								field.key === "repassword" &&
								formData.repassword &&
								!isPasswordMatch
									? "border-red-500"
									: "border-gray-300"
							} rounded-xl`}
						/>
					</div>
				))}

				{formData.repassword && !isPasswordMatch && (
					<p className="text-red-500 text-sm -mt-2 mb-2">Password tidak sama</p>
				)}

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

export default AddUser;
