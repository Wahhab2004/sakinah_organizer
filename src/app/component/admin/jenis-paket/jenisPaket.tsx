import { useState } from "react";
import { jenisPaket } from "./dataDummyPaket";
import AlertDelete from "../reservasi/alertDelete";
import PaginationControl from "../paginationControl";
import EditUser from "./editPaket";
import dataDummyPaket from "./dataDummyPaket";

export default function JenisPaketPage() {
	const [packages, setPackage] = useState<jenisPaket[]>(dataDummyPaket);

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	const totalPages = Math.ceil(packages.length / itemsPerPage);

	const getPaginatedData = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return packages.slice(startIndex, endIndex);
	};

	const handleDelete = (packageId: string) => {
		const updatePackage = packages.filter((res) => res.id !== packageId);
		setPackage(updatePackage);
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
	const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

	const handleOpenModal = (userId: string) => {
		setSelectedPackageId(userId);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedPackageId(null);
	};

	const handleSave = (data: {
		jenisPaket: string;
		customer: string;
		hargaAsli: string;
		hargaDiskon: string;
		fasilitas: string;
	}) => {
		if (selectedPackageId) {
			const updatedPackages = packages.map((paket) =>
				paket.id === selectedPackageId ? { ...paket, ...data } : paket
			);
			setPackage(updatedPackages);
		}
		handleCloseModal();
	};

	const getPackageById = (id: string) => {
		return packages.find((paket) => paket.id === id) || null;
	};

	

	return (
		<>
			<div className="ml-[235px] border shadow rounded-lg p-4 w-[83%] ">
				<table className="w-full text-left mt-2 tracking-wide">
					<thead>
						<tr>
							{[
								"#",
								"JENIS PAKET",
								"CUSTOMER",
								"HARGA ASLI",
								"HARGA DISKON",
								"FASILITAS",
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
							getPaginatedData().map((jenis) => (
								<tr
									key={jenis.id}
									className="text-gray-700 text-xs border-b"
								>
									<td className="py-4">{jenis.id}</td>
									<td className="py-4">{jenis.jenisPaket}</td>
									<td className="py-4">{jenis.customer}</td>
									<td className="py-4">{jenis.hargaAsli}</td>
									<td className="py-4">{jenis.hargaDiskon}</td>
									<td className="py-4">{jenis.fasilitas}</td>
									<td className="flex gap-2 py-4 text-[10px]">
										<button
											onClick={() => handleOpenModal(jenis.id)}
											className="bg-yellow-500 text-white p-1 rounded"
										>
											Edit
										</button>
										<AlertDelete onDelete={() => handleDelete(jenis.id)} />
									</td>
								</tr>
							))
						) : (
							<tr>
								<td className="p-4 text-center text-gray-500" colSpan={6}>
									No packages found.
								</td>
							</tr>
						)}
					</tbody>
				</table>

				<EditUser
					isOpen={isModalOpen}
					onClose={handleCloseModal}
					jenisPaketId={selectedPackageId}
					onSave={handleSave}
					getJenisPaketId={getPackageById}
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
