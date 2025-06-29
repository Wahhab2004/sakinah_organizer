
export interface User{
	id: number;
	username: string;
	password: string; // sebaiknya tidak disimpan dalam bentuk plaintext
	repassword?: string; // hanya untuk form input, tidak disimpan di database
	email: string;
	phone_number: string;
	role: string; // bisa "SuperAdmin", "Admin", atau lainnya
}


// Get the users from the API
export async function fetchUsers() {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const response = await fetch(`${baseUrl}/users`, {
            method: "GET",
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

// Add a new user to the API
export async function addUser(userData: User)  {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const response = await fetch(`${baseUrl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error("Failed to add user");
        }
        return await response.json();
    } catch (error) {
        console.error("Error adding user:", error);
        throw error;
    }
}

// Update an existing user in the API
export async function updateUser(userId: number, userData: User)  {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const response = await fetch(`${baseUrl}/users/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error("Failed to update user");
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
}

// Delete a user from the API
export async function deleteUser(userId: number)  {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const response = await fetch(`${baseUrl}/users/${userId}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to delete user");
        }
        return await response.json();
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
}