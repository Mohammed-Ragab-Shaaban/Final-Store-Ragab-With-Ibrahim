import Footer from "../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  return (
    <div>
      <div className="section contact-header-section">
        <div className="container h-100">
          <div className="contact-header-container d-flex justify-content-center align-items-center h-100">
            <h1 className="h1-header">Get In Touch</h1>
          </div>
        </div>
      </div>
      <div className="contact-description section">
        <div className="container">
          <div className="contact-info-container d-flex w-100  flex-column">
            <img className="leaf-img" src="/src/assets/basil-leaf.png" alt="" />
            <div className="info-boxs row gap-4">
              <div className="info-box col-12 col-lg-4 p-4 text-center">
                <FontAwesomeIcon
                  className="icon"
                  icon={faTelegram}
                ></FontAwesomeIcon>
                <p>+123 456 7890</p>
                <p>+123 456 7890</p>
              </div>
              <div className="info-box col-12 col-lg-4 p-4 text-center">
                <FontAwesomeIcon
                  className="icon"
                  icon={faMessage}
                ></FontAwesomeIcon>
                <p>info@example.com</p>
                <p>support@example.com</p>
              </div>
              <div className="info-box col-12 col-lg-4 p-4 text-center">
                <FontAwesomeIcon
                  className="icon"
                  icon={faTelegram}
                ></FontAwesomeIcon>
                <p>1569 Ave, New York,</p>
                <p>NY 10028, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
