"use client";

import NavbarAdmin from "../component/admin/NavbarAdmin";



export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<NavbarAdmin />
			{children}
		</>
	);
}
