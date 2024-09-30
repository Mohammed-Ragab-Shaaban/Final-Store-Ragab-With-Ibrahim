import Footer from "../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import {
  faEnvelope,
  faPhoneFlip,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
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
      <div className="section contact-description">
        <div className="container">
          <div className="contact-info-container d-flex w-100  flex-column">
            <img className="leaf-img" src="/src/assets/basil-leaf.png" alt="" />
            <div className="info-boxs d-flex flex-wrap flex-lg-nowrap justify-content-center gap-4">
              <div className="info-box col-12 col-lg-4 p-4 text-center">
                <FontAwesomeIcon
                  className="contact_icon"
                  icon={faPhoneFlip}
                ></FontAwesomeIcon>
                <p>+123 456 7890</p>
                <p>+123 456 7890</p>
              </div>
              <div className="info-box col-12 col-lg-4 p-4 text-center">
                <FontAwesomeIcon
                  className="contact_icon"
                  icon={faEnvelope}
                ></FontAwesomeIcon>
                <p>info@example.com</p>
                <p>support@example.com</p>
              </div>
              <div className="info-box col-12 col-lg-4 p-4 text-center">
                <FontAwesomeIcon
                  className="contact_icon"
                  icon={faLocationDot}
                ></FontAwesomeIcon>
                <p>1569 Ave, New York,</p>
                <p>NY 10028, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section faq-section">
        <div className="container">
          <div className="faq-section-container d-flex flex-column align-items-center">
            <div className="h1-header">
              <h1>Frequently Asked Question!</h1>
            </div>
            <div className="img-container py-3">
              <img src="/src/assets/treePaper.png" alt="" />
            </div>
            <div className="accordion-container row mt-4 justify-content-between align-content-between w-100">
              <div className="accordion-left col-lg-6">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Pulvinar nostrud class cum facilis?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        I am item content. Click edit button to change this
                        text. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Ut elit tellus, luctus nec ullamcorper mattis,
                        pulvinar leo.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Pon excepturi numquam, facilis?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        I am item content. Click edit button to change this
                        text. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Ut elit tellus, luctus nec ullamcorper mattis,
                        pulvinar leo.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Pon excepturi numquam, facilis?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        I am item content. Click edit button to change this
                        text. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Ut elit tellus, luctus nec ullamcorper mattis,
                        pulvinar leo.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-right col-lg-6">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Pon excepturi numquam, facilis?
                      </button>
                    </h2>
                    <div
                      id="collapse-1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        This is the first item's accordion body. I am item
                        content. Click edit button to change this text. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar
                        leo.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Consequat nesciunt fusce facilisi?
                      </button>
                    </h2>
                    <div
                      id="collapse-2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        I am item content. Click edit button to change this
                        text. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Ut elit tellus, luctus nec ullamcorper mattis,
                        pulvinar leo.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Consequat nesciunt fusce facilisi?
                      </button>
                    </h2>
                    <div
                      id="collapse-3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        I am item content. Click edit button to change this
                        text. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Ut elit tellus, luctus nec ullamcorper mattis,
                        pulvinar leo.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
