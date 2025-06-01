import Image from "next/image";

export default function LoveStory() {
	return (
		<section className="relative  md:h-[90vh] lg:h-[60vh] bg-[#604A32]">
			<div className="flex p-6 md:p-10 lg:p-16 text-white">
				<div className="md:w-1/2 lg:w-[50rem] lg:ml-20">
					<h1 className="font-head text-2xl sm:text-4xl md:text-5xl lg:text-[32px]  leading-tight" >
						Cinematic Love Story Begins Here
					</h1>

					<p className="text-xs sm:text-sm md:text-base  lg:text-xl mt-4 md:mt-6 lg:mt-10 text-justify">
						Di balik setiap pernikahan, tersimpan kisah cinta yang layak
						diceritakan dengan indah. Tim fotografi dan videografi Sakinah
						Wedding siap menangkap setiap momen sakral Anda dalam visual
						sinematik yang elegan dan emosional. Dengan teknik profesional dan
						sentuhan artistik, kami tidak sekadar mendokumentasikan acara, tapi
						mengabadikan cerita cinta Anda menjadi karya yang abadi.
					</p>
				</div>

				<Image
					src="/svg/bg-lovestory.svg"
					width={370}
					height={550}
					alt="love-story"
					className="absolute hidden md:block right-0 lg:right-32 top-0 lg:h-[55vh] "
				/>
			</div>
		</section>
	);
}
