import AboutUs from "./component/home/aboutUs";
import HeroSection from "./component/home/heroSection";
import PhotoCollage from "./component/home/images";
import LoveStory from "./component/home/loveStory";
import Video from "./component/home/video";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<AboutUs />
			<PhotoCollage />
			<LoveStory />
			<Video />
		</div>
	);
}
