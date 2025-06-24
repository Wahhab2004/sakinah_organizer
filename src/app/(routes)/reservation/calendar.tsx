"use client";

import React, { useState, useEffect } from "react";
import {
	format,
	startOfMonth,
	endOfMonth,
	startOfWeek,
	endOfWeek,
	addMonths,
	subMonths,
	isSameDay,
	eachDayOfInterval,
	isSameMonth,
} from "date-fns";
import { cn } from "@/lib/utils";

interface Event {
	title: string;
	date: Date;
}

interface MonthCalendarProps {
	currentDate?: Date;
	events?: Event[];
}

export function MonthCalendar({
	currentDate = new Date(),
	events = [],
}: MonthCalendarProps) {
	const [date, setDate] = useState(currentDate);

	// Sinkronkan dengan tanggal saat ini saat komponen dimuat
	useEffect(() => {
		setDate(new Date()); // Set ke tanggal saat ini (08 Juni 2025)
	}, []);

	// Hitung hari dalam bulan, termasuk hari kosong di awal dan akhir untuk mengisi grid
	const monthStart = startOfMonth(date);
	const monthEnd = endOfMonth(date);
	const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }); // Mulai dari Senin
	const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
	const days = eachDayOfInterval({ start: startDate, end: endDate });

	const handlePrevious = () => {
		setDate((prev) => subMonths(prev, 1));
		console.log(
			"Navigating to previous month:",
			format(subMonths(date, 1), "MMMM yyyy")
		);
	};

	const handleNext = () => {
		setDate((prev) => addMonths(prev, 1));
		console.log(
			"Navigating to next month:",
			format(addMonths(date, 1), "MMMM yyyy")
		);
	};

	// const handleToday = () => {
	// 	setDate(new Date());
	// 	console.log("Navigating to today:", format(new Date(), "MMMM yyyy"));
	// };

	// Ambil event untuk hari tertentu
	const getEventsForDay = (day: Date): string[] => {
		return events
			.filter((event) => isSameDay(event.date, day))
			.map((event) => event.title);
	};

	return (
		<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#383533] text-gray-200 rounded-lg p-4 z-40 w-[1092px] h-[720px]">
			{/* Header Navigasi */}
			<div className="flex justify-center gap-4 items-center mb-4 text-[#CFC6B5]">
				<button
					onClick={handlePrevious}
					className="px-2 py-1 rounded text-xl font-bold hover:text-white"
				>
					←
				</button>
				<h2 className="text-xl font-semibold">{format(date, "MMMM yyyy")}</h2>
				<button
					onClick={handleNext}
					className="px-2 py-1 rounded text-xl font-bold hover:text-white"
				>
					→
				</button>
			</div>

			{/* Tombol "Today" */}
			{/* <div className="mb-4 text-center">
				<button
					onClick={handleToday}
					className="px-3 py-1 bg-[#C2AF84] hover:bg-[#887750] rounded text-white"
				>
					Today
				</button>
			</div> */}

			{/* Hari dalam Seminggu */}
			<div className="grid grid-cols-7 gap-1 text-end text-xs uppercase mb-2">
				{["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Ahad"].map(
					(day) => (
						<div key={day} className="p-1 text-[#CFC6B5]">
							{day}
						</div>
					)
				)}
			</div>

			{/* Grid Hari */}
			<div className="grid grid-cols-7 gap-4">
				{days.map((day) => {
					const isCurrentMonth = isSameMonth(day, date);
					const isToday = isSameDay(day, new Date()); // Perbarui ke tanggal saat ini
					const dayEvents = getEventsForDay(day);

					return (
						<div
							key={day.toISOString()}
							className={cn(
								"p-2 text-center rounded-xl w-[140px] h-[85px]",
								isCurrentMonth ? "bg-[#1F1B18]" : "bg-[#302C29] text-white/70",
								isToday && "border-2 border-[#C2AF84]"
							)}
						>
							<div className="text-sm text-end font-medium">{format(day, "d")}</div>
							{dayEvents.length > 0 && (
								<div className="text-xs ] text-start">
									{dayEvents.map((event, index) => (
										<div key={index}>{event}</div>
									))}
								</div>
							)}
							{isCurrentMonth && dayEvents.length === 0 && (
								<div className="text-xs text-[#C2AF84] text-start ">
									- Kajian Umum
									<br />- Rapot Web
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
