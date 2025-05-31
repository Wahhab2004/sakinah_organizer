export default function Video() {
	return (
		<section className="relative h-[100vh]">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/IBFWlwnrpdU?si=XPSGznuToNhiaFR0"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
				className="absolute top-0 left-0 w-full h-full"
			></iframe>
		</section>
	);
}
