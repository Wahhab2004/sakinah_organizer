
import CurrentDate from "@/app/component/CurrentDate";
import { MonthCalendar } from "./calendarAdmin";

export default function DashboardPage() {
	return (
		<main>
			<CurrentDate />
			<MonthCalendar />
		</main>
	);
}
