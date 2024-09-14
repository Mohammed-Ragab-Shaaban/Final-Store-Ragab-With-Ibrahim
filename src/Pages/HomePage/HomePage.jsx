import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section1 from "./Section1";
import "./HomePage.css";
import Section2 from "./Section2";
import Footer from "../Components/Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}
