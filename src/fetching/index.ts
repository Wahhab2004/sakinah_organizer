// Room
export interface Room {
	pricePerNight: number;
	image: string;
	id: string;
	rating: number;
	roomNumber: string;
	roomStatus: string;
}

// Payment
export interface Payments {
	id: string;
	idReservation: string;
	totalAmountPaid: number;
	paymentMethod: string;
	paymentStatus: string;
	proofOfPayment: string;
	sender: string;
}

// Review
export interface Review {
	id: string;
	idReservation: string;
	idRoom: string;
	idAccount: string;
	rating: number;
	review: string;
	reviewDate: Date;
}

// Account
export interface Account {
	id: string;
	name: string;
	username: string;
	gender: string;
	dataOfBirth: string;
	phoneNumber: string;
	photoProfile: string;
	email: string;
	password: string;
	passport: string;
	country: string;
	role: string;
}

export interface CalendarEvent {
	id: number;
	date: string; // format: "YYYY-MM-DD"
	time_start: string; // format: "HH:mm:ss"
	time_end: string; // format: "HH:mm:ss"
	event_type_name: string;
	event_type_id: number;
	package_name: string;
	package_id: number;
	event_name: string;
	customer_name: string;
	customer_phone: string;
	customer_email: string;
	customer_type_name: string;
	customer_type_id: number;
	price: number;
	groom: string;
	bride: string;
	speaker: string;
	qori: string | null;
	mc: number;
	created_at: string; // ISO date string
	updated_at: string; // ISO date string
	room_name: string;
	room_id: number;
	proof_of_payment: string;
	kta: string;
	facilities: string; // bisa dipecah jadi array kalau diperlukan
	addons: Record<string, number>; // atau bisa ditentukan lebih spesifik
	addon_ids: number[] | null;
	acc_admin: "Disetujui" | "Ditolak" | "Pending"; // bisa diubah sesuai state yang mungkin
	acc_takmir: "Disetujui" | "Ditolak" | "Pending";
	acc_email: "Confirmed" | "Unconfirmed" | "Pending";
	payment: "Paid" | "Unpaid" | "Partial"; // sesuai sistem pembayaran
}


export const fetchCalendarEvents = async (): Promise<CalendarEvent[]> => {
	try {
		const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const response = await fetch(`${baseUrl}/calendar`, {
			cache: "no-store",
		});
		const jsonData = await response.json();

		return jsonData.data as CalendarEvent[];
	} catch (error) {
		console.error("Error fetching calendar events:", error);
		return [];
	}
};

export const fetchRooms = async (): Promise<Room[]> => {
	try {
		const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const response = await fetch(`${baseUrl}/room`, {
			cache: "no-store",
		});
		const jsonData = await response.json();

		return jsonData.data as Room[];
	} catch (error) {
		console.error("Error fetching rooms:", error);
		return [];
	}
};

export const fetchRoomById = async (id: string): Promise<Room | null> => {
	try {
		const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const response = await fetch(`${baseUrl}/room?id=${id}`, {
			cache: "no-store",
		});
		const jsonData = await response.json();

		return jsonData.data as Room;
	} catch (error) {
		console.error("Error fetching room by ID:", error);
		return null;
	}
};

export const fetchAccount = async (): Promise<Account[]> => {
	try {
		const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const response = await fetch(`${baseUrl}/guests`, {
			cache: "no-store",
		});
		const jsonData = await response.json();

		return jsonData.data as Account[];
	} catch (error) {
		console.error("Error fetching reservations:", error);
		return [];
	}
};

export const fetchPayments = async (): Promise<Payments[]> => {
	try {
		const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const response = await fetch(`${baseUrl}/payments`, {
			cache: "no-store",
		});
		const jsonData = await response.json();

		return jsonData.data as Payments[];
	} catch (error) {
		console.error("Error fetching reservations:", error);
		return [];
	}
};
