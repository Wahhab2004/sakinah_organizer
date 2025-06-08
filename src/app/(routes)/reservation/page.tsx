import Image from "next/image";
import ReservationForm from "@/app/component/reservation/reservation";
import { MonthCalendar } from "./calendar";

export default function Reservation() {
	const sampleEvents: { title: string; date: Date }[] = [
		{ title: "Kajian Umum", date: new Date(2025, 4, 1) }, // 1 Mei 2025
		{ title: "Rapot Web", date: new Date(2025, 4, 5) }, // 5 Mei 2025
	];
	return (
		<div>
			<section className="relative h-[500px] sm:h-[600px] md:h-[150vh]">
				{/* Background Layers */}
				{/* Top */}
				<div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-bl from-[#59543E]/90 from-20% via-[#F8F0CC]/0 from-30% to-[#F8F0CC]/10  " />

				{/* Bottom */}
				<div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-[#59543E]/90 from-20% via-[#F8F0CC]/0 from-30% to-[#F8F0CC]/10 " />

				{/* Image */}
				<Image
					className="z-20 h-[150vh] object-cover absolute right-0 w-screen top-0 left-0 object-cover opacity-40"
					width={2000}
					height={1000}
					src="/svg/bg-reservasi.svg"
					alt="hero"
				/>

				<div className="absolute inset-0 flex flex-col justify-start mt-32 px-4 sm:px-6 md:px-8 xl:px-20 z-40 max-w-full ">
					<div className="text-center">
						<h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-head -translate-y-2 sm:-translate-y-2 ">
							Book Your Perfect Day with Us
						</h1>
						<p className="text-white text-sm sm:text-base md:text-lg lg:text-xl w-full   ">
							Pesan sekarang, dan buat momen bahagia Anda menjadi kenyataan!
						</p>
					</div>
				</div>

				<div className="p-4">
					<MonthCalendar
						currentDate={new Date(2025, 4, 1)}
						events={sampleEvents}
					/>
				</div>
			</section>

			<div className="p-2 sm:p-10 md:p-15 lg:p-20 bg-[#59543E] pb-20">
				<div className="py-8 px-5 sm:p-10 md:p-15 lg:p-20 bg-[#302C29] text-white text-center  rounded-3xl">
					<h1 className="font-head  text-3xl sm:text-4xl md:text-5xl lg:text-[48px]">
						Reservation Form
					</h1>
					<p className="italic text-xs sm:text-sm md:text-base">
						*Waktu Minimal Reservasi adalah H-1 Bulan
					</p>

					<ReservationForm />
				</div>
			</div>
		</div>
	);
}
