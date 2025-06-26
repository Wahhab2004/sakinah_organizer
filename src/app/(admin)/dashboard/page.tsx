import { MonthCalendar } from "@/app/(user)/reservation/calendar";
import CurrentDate from "@/app/component/CurrentDate";

export default function DashboardPage() {
	return (
		<main>
			<CurrentDate />
			<MonthCalendar />
		</main>
	);
}
