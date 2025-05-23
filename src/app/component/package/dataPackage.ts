export interface PackageData {
	name: string;
	price: string;
	weddingOrganizer: string[];

	venue: string[];
	decoration: string[];
	documentation?: string[];
	catering?: string;
	mua?: string[];
	busana?: string[];
}

export const SakinahPackageData: PackageData = {
	name: "Sakinah Package",
	price: "IDR 7.690.000,-",
	weddingOrganizer: [
		"Konsultasi Konsep Akad Nikah",
		"Koordinasi dengan Vendor",
		"Technical Meeting",
		"Tim WO",
		"MC Full Uniform",
		"Qori' Full Uniform",
		"Tim Teknis",
		"Tim Keamanan",
	],
	venue: [
		"Ruang Utama Maskam",
		"Ruang Transit",
		"Meeting Room",
		"Spot Foto Seluruh Area Maskam",
	],
	decoration: ["Backdrop Akad", "Wedding Aisle", "Hand Bouquet"],
};

export const MawaddahPackageData: PackageData = {
	name: "Mawaddah Package",
	price: "IDR 14.040.000,-",
	weddingOrganizer: [
		"Konsultasi Konsep Akad Nikah",
		"Koordinasi dengan Vendor",
		"Technical Meeting",
		"Tim WO",
		"MC Full Uniform",
		"Qori' Full Uniform",
		"Tim Teknis",
		"Tim Keamanan",
	],
	venue: [
		"Ruang Utama Maskam",
		"Ruang Transit",
		"Meeting Room",
		"Ruang Serbaguna",
		"Spot Foto Seluruh Area Maskam",
	],
	decoration: ["Backdrop Akad", "Wedding Aisle", "Hand Bouquet"],
	documentation: ["1 Paket Foto Post Wedding"],
	catering: "Katering (50 pax)",
};

export const WarahmahPackageData: PackageData = {
	name: "Warahmah Package",
	price: "IDR 21.790.000,-",
	weddingOrganizer: [
		"Konsultasi Konsep Akad Nikah",
		"Koordinasi dengan Vendor",
		"Technical Meeting",
		"Tim WO",
		"MC Full Uniform",
		"Qori' Full Uniform",
		"Tim Teknis",
		"Tim Keamanan",
	],
	venue: [
		"Ruang Utama Maskam",
		"Ruang Transit",
		"Meeting Room",
		"Ruang Serbaguna",
		"Spot Foto Seluruh Area Maskam",
	],
	decoration: ["Backdrop Akad", "Wedding Aisle", "Hand Bouquet"],
	documentation: [
		"1 Paket Foto Post Wedding",
		"Fotografer dan Videografer Akad",
	],
	catering: "Katering (50 pax)",
	mua: [
		"Make Up Syar’i dan Hair Do Pengantin",
		"Make Up Syar’i dan Hair Do Ibu Pengantin 1x",
	],
	busana: [
		"1 Sepasang Busana Pengantin",
		"2 Pasang Busana Kedua Orang Tua Pengantin",
	],
};
