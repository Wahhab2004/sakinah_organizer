import Image from "next/image";

export default function LoveStory() {
	return (
		<section className="relative h-[70vh] bg-[#604A32]">
			<div className="flex p-16 text-white">
				<div className="w-[50rem] ml-20">
					<h1 className="font-head text-[32px]">
						Cinematic Love Story Begins Here
					</h1>

					<p className="text-xl mt-10 text-justify">
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
					width={300}
					height={450}
					alt="love-story"
					className="absolute right-32 top-0"
				/>
			</div>
		</section>
	);
}
