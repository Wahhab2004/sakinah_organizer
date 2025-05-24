"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
	const pathhname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const menus = [
		{ name: "Home", path: "/" },
		{ name: "Our Service", path: "/our-service" },
		{ name: "Package", path: "/package" },
		{ name: "Reservation", path: "/reservation" },
		{ name: "Contact Us", path: "#contact" },
		{ name: "FAQ", path: "/faq" },
	];

	const navStyle = `items-center bg-[#302C29]/60 absolute lg:fixed left-1/2 transform -translate-x-1/2 z-50 shadow-md w-full transition-all duration-500 ${
		isScrolled
			? "lg:top-10 lg:rounded-full lg:w-[80%] xl:w-[60%]"
			: "lg:top-0 lg:rounded-none lg:w-screen"
	}`;

	const linkStyle = (menuPath: string) => `
		hover:scale-110 transition-transform duration-300 relative pb-2
		after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-white after:origin-left after:transition-transform after:duration-500
		${pathhname === menuPath ? "after:scale-x-100 font-semibold" : "after:scale-x-0 hover:after:scale-x-100"}
	`;

	return (
		<nav className={navStyle}>
			<div className="lg:hidden flex justify-between items-center px-4 py-5">
				<div className="text-white font-semibold">Sakinah Wedding</div>
				<button
					className="text-white focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? "✖" : "☰"}
				</button>
			</div>

			<ul
				className={` lg:flex justify-center items-center space-y-4 lg:space-y-0 lg:space-x-14 text-white lg:h-[80px]  text-center transition-all duration-300 ${
					isOpen ? "h-[350px] flex flex-col space-y-4 lg:space-y-0 lg:flex-row " : "hidden lg:flex" 
				}`}
			>
				{menus.map((menu) => (
					<Link href={menu.path} key={menu.name}>
						<li className={linkStyle(menu.path)}>{menu.name}</li>
					</Link>
				))}
			</ul>
		</nav>
	);
}
