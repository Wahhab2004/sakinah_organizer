import {
	CreativeDecor,
	ElegantAttire,
	EventHost,
	EventMaestro,
	HeroSection,
	ProfessionalFotographer,
	ProfessionalMakeOver,
	WeddingFilmSpecialist,
} from "@/app/component/our-service/ourService";
export default function OurService() {
	return (
		<div>
			<HeroSection />

			<div className="relative h-[350vh] md:h-[360vh] lg:h-[700vh] bg-black">
				<div className="absolute top-0 right-0 left-0 md:h-[360vh] lg:h-[700vh] inset-0 z-20 pointer-events-none bg-gradient-to-b from-[#59543E] from-0% via-[#604A32]/50 via-20% to-[#E1D4AD]/30 via-40% to-[#F8F0CC]/10 " />

				<CreativeDecor />
				<ProfessionalFotographer />
				<WeddingFilmSpecialist />
				<EventMaestro />
				<EventHost />
				<ProfessionalMakeOver />
				<ElegantAttire />
			</div>
		</div>
	);
}
