import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarAdmin() {
	const pathname = usePathname();

	return (
		<>
			{/* Logo */}
			<div className="p-4 shadow flex justify-between items-center">
				<h1 className="text-3xl font-bold text-gray-600">Sakinah Organizer</h1>

				<p className="text-gray-600">Admin 1</p>
			</div>

			{/* Sidebar */}
			<nav className="float-left border h-[120vh]">
				<div className="p-4 w-full leading-10">
					<ul>
						{/* Dasbor */}
						<Link
							href="/dashboard"
							className={`flex items-center p-2 rounded mb-2 hover:bg-blue-100 group ${
								pathname === "/dashboard" ? "bg-blue-100" : ""
							}`} // Tambahkan "group"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								// Hover berdasarkan parent
							>
								<path
									d="M2.25 11.9991L11.204 3.04409C11.644 2.60509 12.356 2.60509 12.795 3.04409L21.75 11.9991M4.5 9.74909V19.8741C4.5 20.4951 5.004 20.9991 5.625 20.9991H9.75V16.1241C9.75 15.5031 10.254 14.9991 10.875 14.9991H13.125C13.746 14.9991 14.25 15.5031 14.25 16.1241V20.9991H18.375C18.996 20.9991 19.5 20.4951 19.5 19.8741V9.74909M8.25 20.9991H16.5"
									stroke="#5D6679"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className={`group-hover:stroke-[#1366D9] group-hover:stroke-2 ${
										pathname === "/dashboard" ? "stroke-[#1366D9] stroke-2" : ""
									}`}
								/>
							</svg>

							<li
								className={`ml-2 font-medium group-hover:text-[#1366D9] text-sm ${
									pathname === "/dashboard"
										? "text-[#1366D9]"
										: "text-gray-600 "
								} `} // Hover berdasarkan parent
							>
								Dashboard
							</li>
						</Link>

						{/* Reservasi */}
						<Link
							href="/reservasi"
							className={`flex items-center p-2 rounded mb-2 hover:bg-blue-100 group ${
								pathname === "/reservasi" ? "bg-blue-100" : ""
							}`} // Tambahkan "group"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.862 4.48725L18.549 2.79925C18.9007 2.44757 19.3777 2.25 19.875 2.25C20.3723 2.25 20.8493 2.44757 21.201 2.79925C21.5527 3.15092 21.7502 3.6279 21.7502 4.12525C21.7502 4.62259 21.5527 5.09957 21.201 5.45125L10.582 16.0702C10.0533 16.5986 9.40137 16.987 8.685 17.2002L6 18.0002L6.8 15.3152C7.01328 14.5989 7.40163 13.9469 7.93 13.4182L16.862 4.48725ZM16.862 4.48725L19.5 7.12525M18 14.0002V18.7502C18 19.347 17.7629 19.9193 17.341 20.3412C16.919 20.7632 16.3467 21.0002 15.75 21.0002H5.25C4.65326 21.0002 4.08097 20.7632 3.65901 20.3412C3.23705 19.9193 3 19.347 3 18.7502V8.25025C3 7.65351 3.23705 7.08121 3.65901 6.65926C4.08097 6.2373 4.65326 6.00025 5.25 6.00025H10"
									stroke="#5D6679"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className={`group-hover:stroke-[#1366D9] group-hover:stroke-2 ${
										pathname === "/reservasi" ? "stroke-[#1366D9] stroke-2" : ""
									}`}
								/>
							</svg>

							<li
								className={`ml-2 font-medium group-hover:text-[#1366D9] text-sm ${
									pathname === "/reservasi" ? "text-[#1366D9]" : "text-gray-600"
								}`} // Hover berdasarkan parent
							>
								Reservasi
							</li>
						</Link>

						{/* User*/}
						<Link
							href="/user"
							className={`flex items-center p-2 rounded mb-2 hover:bg-blue-100 group ${
								pathname === "/user" ? "bg-blue-100" : ""
							}`} // Tambahkan "group"
						>
							<svg
								width="24"
								height="25"
								viewBox="0 0 24 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.753 2.5C14.911 2.5 15.864 3.375 15.987 4.5H17.75C18.3201 4.49993 18.869 4.7163 19.2858 5.10537C19.7025 5.49444 19.956 6.02721 19.995 6.596L20 6.75V20.255C19.9998 20.825 19.7833 21.3736 19.3943 21.7901C19.0052 22.2066 18.4726 22.46 17.904 22.499L17.75 22.505H6.25C5.67987 22.5051 5.13098 22.2887 4.71425 21.8996C4.29751 21.5106 4.04402 20.9778 4.005 20.409L4 20.255V6.75C3.99993 6.17987 4.2163 5.63098 4.60537 5.21425C4.99444 4.79751 5.52721 4.54402 6.096 4.505L6.25 4.5H8.013C8.07382 3.95007 8.33539 3.44192 8.74761 3.07287C9.15983 2.70383 9.69372 2.49985 10.247 2.5H13.753ZM13.753 6.993H10.247C9.87852 6.9938 9.51554 6.90369 9.19022 6.73065C8.8649 6.55761 8.58729 6.30699 8.382 6.001L6.25 6C6.06876 6.00001 5.89366 6.06564 5.75707 6.18477C5.62048 6.30389 5.53165 6.46845 5.507 6.648L5.5 6.75V20.255C5.5 20.635 5.782 20.948 6.148 20.998L6.25 21.005H17.75C17.9314 21.005 18.1066 20.9392 18.2432 20.8199C18.3798 20.7005 18.4686 20.5357 18.493 20.356L18.5 20.255V6.75C18.5 6.56876 18.4344 6.39366 18.3152 6.25707C18.1961 6.12048 18.0316 6.03165 17.852 6.007L17.75 6H15.618C15.4128 6.30617 15.1353 6.55699 14.8099 6.73021C14.4846 6.90342 14.1216 6.99369 13.753 6.993ZM14.75 14.495C15.44 14.495 16 15.055 16 15.745V16.245C16 18.091 14.528 18.999 12 18.999C9.472 18.999 8 18.09 8 16.243V15.745C8 15.055 8.56 14.495 9.25 14.495H14.75ZM12 8.495C12.663 8.495 13.2989 8.75839 13.7678 9.22723C14.2366 9.69607 14.5 10.332 14.5 10.995C14.5 11.658 14.2366 12.2939 13.7678 12.7628C13.2989 13.2316 12.663 13.495 12 13.495C11.337 13.495 10.7011 13.2316 10.2322 12.7628C9.76339 12.2939 9.5 11.658 9.5 10.995C9.5 10.332 9.76339 9.69607 10.2322 9.22723C10.7011 8.75839 11.337 8.495 12 8.495ZM13.753 4H10.247C10.1467 3.99633 10.0466 4.01292 9.95285 4.04878C9.85908 4.08464 9.77349 4.13904 9.70122 4.20872C9.62894 4.2784 9.57145 4.36193 9.53218 4.45433C9.49291 4.54673 9.47267 4.6461 9.47267 4.7465C9.47267 4.8469 9.49291 4.94627 9.53218 5.03867C9.57145 5.13107 9.62894 5.2146 9.70122 5.28428C9.77349 5.35397 9.85908 5.40836 9.95285 5.44422C10.0466 5.48008 10.1467 5.49667 10.247 5.493H13.753C13.8533 5.49667 13.9534 5.48008 14.0471 5.44422C14.1409 5.40836 14.2265 5.35397 14.2988 5.28428C14.3711 5.2146 14.4286 5.13107 14.4678 5.03867C14.5071 4.94627 14.5273 4.8469 14.5273 4.7465C14.5273 4.6461 14.5071 4.54673 14.4678 4.45433C14.4286 4.36193 14.3711 4.2784 14.2988 4.20872C14.2265 4.13904 14.1409 4.08464 14.0471 4.04878C13.9534 4.01292 13.8533 3.99633 13.753 4Z"
									fill="#5D6679"
									className={`group-hover:stroke-[#1366D9]  group-hover:fill-[#1366D9] stroke-[0.5px] ${
										pathname === "/user"
											? "stroke-[#1366D9] fill-[#1366D9] stroke-[0.5px]"
											: ""
									}`}
								/>
							</svg>

							<li
								className={`ml-2 font-medium group-hover:text-[#1366D9] text-sm ${
									pathname === "/user"
										? "text-[#1366D9]"
										: "text-gray-600"
								}`} // Hover berdasarkan parent
							>
								User
							</li>
						</Link>

						{/* Jenis Paket */}
						<Link
							href="/jenis-paket"
							className={`flex items-center p-2 rounded mb-2 hover:bg-blue-100 group ${
								pathname === "/jenis-paket" ? "bg-blue-100" : ""
							}`} // Tambahkan "group"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.35 3.836C11.285 4.046 11.25 4.269 11.25 4.5C11.25 4.914 11.586 5.25 12 5.25H16.5C16.6989 5.25 16.8897 5.17098 17.0303 5.03033C17.171 4.88968 17.25 4.69891 17.25 4.5C17.2501 4.27491 17.2164 4.05109 17.15 3.836M11.35 3.836C11.492 3.3767 11.7774 2.97493 12.1643 2.68954C12.5511 2.40414 13.0192 2.25011 13.5 2.25H15C16.012 2.25 16.867 2.918 17.15 3.836M11.35 3.836C10.974 3.859 10.6 3.886 10.226 3.916C9.095 4.01 8.25 4.973 8.25 6.108V8.25M17.15 3.836C17.526 3.859 17.9 3.886 18.274 3.916C19.405 4.01 20.25 4.973 20.25 6.108V16.5C20.25 17.0967 20.0129 17.669 19.591 18.091C19.169 18.5129 18.5967 18.75 18 18.75H15.75M8.25 8.25H4.875C4.254 8.25 3.75 8.754 3.75 9.375V20.625C3.75 21.246 4.254 21.75 4.875 21.75H14.625C15.246 21.75 15.75 21.246 15.75 20.625V18.75M8.25 8.25H14.625C15.246 8.25 15.75 8.754 15.75 9.375V18.75M7.5 15.75L9 17.25L12 13.5"
									stroke="#5D6679"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className={`group-hover:stroke-[#1366D9] group-hover:stroke-2 ${
										pathname === "/jenis-paket"
											? "stroke-[#1366D9] stroke-2"
											: ""
									}`}
								/>
							</svg>

							<li
								className={`ml-2 font-medium group-hover:text-[#1366D9] text-sm ${
									pathname === "/jenis-paket"
										? "text-[#1366D9]"
										: "text-gray-600 "
								}`} // Hover berdasarkan parent
							>
								Jenis Paket
							</li>
						</Link>
					</ul>
				</div>
			</nav>
		</>
	);
}
