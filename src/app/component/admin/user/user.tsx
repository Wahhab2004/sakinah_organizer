import { useState } from "react";
import dataDummyUser, { User } from "./dataDummyReservasi";
import AlertDelete from "../reservasi/alertDelete";
import PaginationControl from "../paginationControl";
import EditUser from "./editUser";

export default function UserPage() {
	const [users, setUser] = useState<User[]>(dataDummyUser);

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	const totalPages = Math.ceil(users.length / itemsPerPage);

	const getPaginatedData = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return users.slice(startIndex, endIndex);
	};

	const handleDelete = (reservationId: string) => {
		const updatedReservations = users.filter((res) => res.id !== reservationId);
		setUser(updatedReservations);
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevious = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

	const handleOpenModal = (userId: string) => {
		setSelectedUserId(userId);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedUserId(null);
	};

    const handleSave = (data: { nama: string; email: string; phone: string }) => {
        if (selectedUserId) {
            const updatedUsers = users.map((user) =>
                user.id === selectedUserId ? { ...user, ...data } : user
            );
            setUser(updatedUsers);
        }
        handleCloseModal();
    };

    const getUserId = (id: string) => {
        return users.find((user) => user.id === id) || null;
    };

	return (
		<>
			<div className="ml-[235px] border shadow rounded-lg p-4 w-[83%] ">
				<table className="w-full text-left mt-2 tracking-wide">
					<thead>
						<tr>
							{["#", "NAMA", "EMAIL", "PHONE", "ROLE", "AKSI"].map(
								(header, idx) => (
									<th key={idx} className="text-[#5D6679] text-[10px] pr-2">
										{header}
									</th>
								)
							)}
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
									<td className="py-4">{reservasi.nama}</td>
									<td className="py-4">{reservasi.email}</td>
									<td className="py-4">{reservasi.phone}</td>
									<td className="py-4">{reservasi.role}</td>
									<td className="flex gap-2 py-4 text-[10px]">
										<button
											onClick={() => handleOpenModal(reservasi.id)}
											className="bg-yellow-500 text-white p-1 rounded"
										>
											Edit
										</button>
										<AlertDelete onDelete={() => handleDelete(reservasi.id)} />
									</td>
								</tr>
							))
						) : (
							<tr>
								<td className="p-4 text-center text-gray-500" colSpan={6}>
									No users found.
								</td>
							</tr>
						)}
					</tbody>
				</table>

				<EditUser
					isOpen={isModalOpen}
					onClose={handleCloseModal}
					userId={selectedUserId}
					onSave={handleSave}
                    getUserId={getUserId}
				/>
			</div>

			<PaginationControl
				totalPages={totalPages}
				currentPage={currentPage}
				onNext={handleNext}
				onPrevious={handlePrevious}
			/>
		</>
	);
}
