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

	useEffect(() => {
		setDate(new Date()); 
	}, []);

	
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

	// Ambil event untuk hari tertentu
	const getEventsForDay = (day: Date): string[] => {
		return events
			.filter((event) => isSameDay(event.date, day))
			.map((event) => event.title);
	};

	return (
		<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  mt-[8rem] ml-20 text-black rounded-[30px] p-6 z-40 w-[1092px] h-[720px] shadow-lg border border-gray-200 bg-white">
			{/* Header Navigasi */}
			<div className="flex justify-between gap-4 items-center mb-4 ">
				<button
					onClick={handlePrevious}
					className="px-2 py-1 rounded text-xl font-bold hover:text-gray-700 transition duration-300 ease-in-out"
				>
					←
				</button>
				<h2 className="text-xl font-semibold">{format(date, "MMMM yyyy")}</h2>
				<button
					onClick={handleNext}
					className="px-2 py-1 rounded text-xl font-bold hover:text-gray-700 transition duration-300 ease-in-out"
				>
					→
				</button>
			</div>

			{/* Hari dalam Seminggu */}
			<div className="grid grid-cols-7 gap-1 text-end text-xs uppercase mb-2">
				{["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Ahad"].map(
					(day) => (
						<div key={day} className="p-1 ">
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
								"p-2 text-center rounded-xl w-[140px] h-[85px] shadow-md hover:shadow-lg transition duration-300 ease-in-out",
								isCurrentMonth ? "bg-white" : "bg-gray-100 text-black/40",
								isToday && "border-2 border-blue-500",
							)}
						>
							<div className="text-sm text-end font-medium">
								{format(day, "d")}
							</div>
							{dayEvents.length > 0 && (
								<div className="text-xs ] text-start">
									{dayEvents.map((event, index) => (
										<div key={index}>{event}</div>
									))}
								</div>
							)}
							{isCurrentMonth && dayEvents.length === 0 && (
								<div className="text-xs  text-start ">
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
