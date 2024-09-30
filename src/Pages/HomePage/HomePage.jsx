import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section1 from "./Section1";
import "./HomePage.css";
import Section2 from "./Section2";
// import Footer from "../Components/Footer/Footer";
import SliderSwiper from "../Components/swiper/SliderSwiper";
import SlideSwiperJuices from "../Components/swiper/SlideSwiperJuices";

export default function HomePage() {
  return (
    <div>
      <Section1 />
      <Section2 />
    <SliderSwiper/>
    <hr className="container my-5" />
    <SlideSwiperJuices />
    </div>
  );
}
