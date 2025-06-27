"use client";

import { useState, useEffect } from "react";

interface EditModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (data: { nama: string; email: string; phone: string }) => void;
	userId: string | null;
	getUserId: (id: string) => {
		nama: string;
		email: string;
		phone: string;
		role: string;
	} | null;
}

const EditUser: React.FC<EditModalProps> = ({
    isOpen,
    onClose,
    onSave,
    userId,
    getUserId,
}) => {
    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        phone: "",
        role: "",
    });

    useEffect(() => {
        if (isOpen && userId) {
            const reservation = getUserId(userId);
            if (reservation) {
                setFormData(reservation);
            }
        }
    }, [isOpen, userId, getUserId]);

    if (!isOpen) return null;

    const handleSave = () => {
        onSave({
            nama: formData.nama,
            email: formData.email,
            phone: formData.phone,
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
                    <label className="text-sm">Nama</label>
                    <input
                        type="text"
                        value={formData.nama}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded-xl"
                    />
                </div>
                <div className="mb-4">
                    <label className="text-sm">email</label>
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
                    <label className="text-sm">phone</label>
                    <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
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

export default EditUser;