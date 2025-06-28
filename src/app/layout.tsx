"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { usePathname } from "next/navigation";

const fontBody = Poppins({
	variable: "--font-body",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();

	const path = ["/admin", "/dashboard", "/reservasi", "/jenis-paket", "/user"];
	return (
		<html lang="en">
			<body className={`${fontBody.className} antialiased`}>
				{!path.includes(pathname) && <Navbar />}
				{children}
				{!path.includes(pathname) && <Footer />}
			</body>
		</html>
	);
}
