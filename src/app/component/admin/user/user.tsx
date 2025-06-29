// pages/UserPage.tsx
import { useCallback, useEffect, useState } from "react";
import PaginationControl from "../paginationControl";
import EditUser from "./editUser";
import AddUser from "./addUser";
import { User } from "@/fetching";
import AlertDelete from "../reservasi/alertDelete";
import SearchBar from "../SearchBar";

export default function UserPage() {
	const [users, setUser] = useState<User[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(false);
	const [editUser, setEditUser] = useState<User | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	const [isAddOpen, setIsAddOpen] = useState(false);
	const [isEditOpen, setIsEditOpen] = useState(false);
	const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
	const fetchUsers = async () => {
		try {
			const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
			const response = await fetch(`${baseUrl}/users`);
			const data = await response.json();

			setUser(data.data); // update semua data
			setFilteredUsers(data.data); // sync ke filtered juga
			setLoading(false); // selesai loading
		} catch (error) {
			console.error("Error fetching users:", error);
		}
	};

	useEffect(() => {
		fetchUsers(); // ✅ hanya dijalankan sekali saat mount
	}, []);

	const getPaginatedData = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return filteredUsers.slice(startIndex, endIndex); // ✅ pakai filtered
	};

	const totalPages = Math.ceil(filteredUsers.length / itemsPerPage); // ✅ benar

	const handleNext = () =>
		currentPage < totalPages && setCurrentPage(currentPage + 1);
	const handlePrevious = () =>
		currentPage > 1 && setCurrentPage(currentPage - 1);

	const handleOpenAddModal = () => setIsAddOpen(true);
	const handleOpenEditModal = (id: number) => {
		setSelectedUserId(id);
		const userToEdit = users.find((user) => user.id === id);
		if (userToEdit) {
			setEditUser(userToEdit);
		}
		setIsEditOpen(true);
	};

	const handleCloseAddModal = () => setIsAddOpen(false);
	const handleCloseEditModal = () => {
		setIsEditOpen(false);
		setSelectedUserId(null);
	};

	const handleSave = (data: {
		username: string;
		email: string;
		phone_number: string;
		role: string;
		password?: string;
		repassword?: string;
	}) => {
		if (selectedUserId) {
			const updatedUsers = users.map((user) =>
				user.id === selectedUserId ? { ...user, ...data } : user
			);
			setUser(updatedUsers);
		}
		fetchUsers();
		handleCloseAddModal();
		handleCloseEditModal();
	};

	const handleDeleteUser = async (id: number) => {
		try {
			const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
			const response = await fetch(`${baseUrl}/users/${id}`, {
				method: "DELETE",
			});
			if (!response.ok) throw new Error("Delete failed");
			setUser((prev) => prev.filter((user) => user.id !== id));
		} catch (error) {
			console.error("Error deleting user:", error);
		}
	};

	const handleSearchResult = useCallback((results: User[]) => {
		setFilteredUsers(results);
		setCurrentPage(1);
	}, []);

	return (
		<>
			<div className="flex justify-between items-center ml-20 mb-4 py-2 px-8">
				<SearchBar<User>
					data={users}
					searchField="username"
					onSearchResult={handleSearchResult}
					placeholder="Cari username..."
					loading={loading}
				/>
				<button
					onClick={handleOpenAddModal}
					className="bg-blue-500 text-white px-4 py-2 rounded"
				>
					Tambah
				</button>
			</div>

			<AddUser
				isOpen={isAddOpen}
				onClose={handleCloseAddModal}
				onSave={handleSave}
			/>

			<UserTable
				users={getPaginatedData()}
				onEdit={handleOpenEditModal}
				onDelete={handleDeleteUser}
				currentPage={currentPage}
				itemsPerPage={itemsPerPage}
			/>

			<EditUser
				isOpen={isEditOpen}
				onClose={handleCloseEditModal}
				userData={editUser}
				onSave={handleSave}
			/>

			<PaginationControl
				totalPages={totalPages}
				currentPage={currentPage}
				onNext={handleNext}
				onPrevious={handlePrevious}
			/>
		</>
	);
}

interface UserTableProps {
	users: User[];
	onEdit: (id: number) => void;
	onDelete: (id: number) => void;
	currentPage: number;
	itemsPerPage: number;
}

function UserTable({
	users,
	onEdit,
	onDelete,
	currentPage,
	itemsPerPage,
}: UserTableProps) {
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedUsers = users.slice(startIndex, startIndex + itemsPerPage);

	return (
		<div className="ml-[200px] border shadow rounded-lg p-4 w-[85%]">
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
					{paginatedUsers.length > 0 ? (
						paginatedUsers.map((user) => (
							<tr key={user.id} className="text-gray-700 text-xs border-b">
								<td className="py-4">{user.id}</td>
								<td className="py-4">{user.username}</td>
								<td className="py-4">{user.email}</td>
								<td className="py-4">{user.phone_number}</td>
								<td className="py-4">{user.role}</td>
								<td className="flex gap-2 py-4 text-[10px]">
									<button
										onClick={() => onEdit(user.id)}
										className="bg-yellow-500 text-white p-1 rounded"
									>
										Edit
									</button>
									<AlertDelete onDelete={async () => onDelete(user.id)} />
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={6} className="p-4 text-center text-gray-500">
								Tidak ada data user.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
