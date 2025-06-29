// Room
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


export interface User{
	id: number;
	username: string;
	password: string; // sebaiknya tidak disimpan dalam bentuk plaintext
	email: string;
	phone_number: string;
	role: string; // bisa "SuperAdmin", "Admin", atau lainnya
}


export const fetchUsers = async (): Promise<User[]> => {
	try {
		const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const response = await fetch(`${baseUrl}/users`, {
			cache: "no-store",
		});
		const jsonData = await response.json();
		return jsonData.data as User[];
	} catch (error) {
		console.error("Error fetching users:", error);
		return [];
	}
};

export const fetchUserById = async (id: string): Promise<User | null> => {
	try {
		const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const response = await fetch(`${baseUrl}/users/${id}`, {
			cache: "no-store",
		});
		if (!response.ok) {
			throw new Error(`Error fetching user with ID ${id}`);
		}
		const jsonData = await response.json();
		return jsonData.data as User;
	} catch (error) {
		console.error("Error fetching user by ID:", error);
		return null;
	}
};


export const handleDeleteUser = async (id: number): Promise<void> => {
	try {
		const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const response = await fetch(`${baseUrl}/users/${id}`, {
			method: "DELETE",
		});
		if (!response.ok) {
			throw new Error(`Error deleting user with ID ${id}`);
		}
	} catch (error) {
		console.error("Error deleting user:", error);
	}
};

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

export const fetchCalendarEventById = async (
	id: number
): Promise<CalendarEvent | null> => {
	try {
		const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const response = await fetch(`${baseUrl}/calendar/${id}`, {
			cache: "no-store",
		});
		if (!response.ok) {
			throw new Error(`Error fetching event with ID ${id}`);
		}
		const jsonData = await response.json();
		return jsonData.data as CalendarEvent;
	} catch (error) {
		console.error("Error fetching calendar event by ID:", error);
		return null;
	}
};
