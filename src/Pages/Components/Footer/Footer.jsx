import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer mt-4 footer_section">
      <div className="container">
        <div className="footer_section_container ">
          <div className="footer-top d-flex row py-5">
            <div className="d-flex flex-column col-12 col-lg-5 gap-5 text-center text-lg-start ">
              <div className="img-container">
                <img
                  className="logo-img"
                  src="/src/assets/white-logo.png"
                  alt="logo picture"
                />
              </div>
              <p className="footer-paragraph">
                Maecenas mi justo, interdum at consectetur vel, tristique et
                arcu. Ut quis eros blandit, ultrices diam in, elementum ex.
                Suspendisse quis faucibus urna. Suspendisse pellentesque.
              </p>
            </div>
            <div className="col-12 col-lg-3 col-md-6 text-center text-md-start ">
              <div className="ul-1 d-flex flex-column justify-content-start">
                <h4 className="mb-3">Quick Links</h4>
                <ul>
                  <li>
                    <Link className="link" to={"#"}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to={"#"}>
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to={"#"}>
                      CheckOut
                    </Link>
                  </li>{" "}
                  <li>
                    <Link className="link" to={"#"}>
                      Contact
                    </Link>
                  </li>{" "}
                  <li>
                    <Link className="link" to={"#"}>
                      Home
                    </Link>
                  </li>{" "}
                  <li>
                    <Link className="link" to={"#"}>
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to={"#"}>
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="ul-2 d-flex flex-column justify-content-start">
                <h4 className="mb-3">Site Links</h4>
                <ul>
                  <li>
                    <Link className="link" to={"#"}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to={"#"}>
                      Shipping Details
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to={"#"}>
                      Offers Coupons
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to={"#"}>
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 text-center text-md-start">
              <div className="ul-1 ">
                <h4 className="mb-3">Download Our Mobile App</h4>
                <p className="footer-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  aliquam gravida sollicitudin. Praesent porta enim mi, non
                  tincidunt libero interdum sit amet.
                </p>
              </div>
              <div className="ul-2 d-flex flex-column ">
                <h4 className="mb-3">Quick Links</h4>
                <ul>
                  <li>
                    <Link className="link" to={"#"}>
                      Know More About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to={"#"}>
                      Visit Store
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to={"#"}>
                      Let’s Connect
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to={"#"}>
                      Locate Stores
                    </Link>
                  </li>
                </ul>
                <div className="app-store-img-container d-flex gap-3 flex-column flex-sm-row justify-content-center justify-content-md-start align-items-center ">
                  <img
                    className="app-store-img"
                    src="/src/assets/play-store.png"
                    alt=""
                  />
                  <img
                    className="app-store-img"
                    src="/src/assets/app-store.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom ">
        <div className="container">
          <div className="footer-bottom-container py-3 d-flex flex-column align-items-center gap-3 flex-md-row justify-content-between">
            <div className="copy-right">Copyright © 2024 | Organic Store</div>
            <div className="d-flex gap-3">
              <FontAwesomeIcon
                className="icon"
                icon={faTelegram}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="icon"
                icon={faFacebook}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="icon"
                icon={faTwitter}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="icon"
                icon={faInstagram}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
