import "./About.css";
import Footer from "../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "../Components/imageSlider/ImageSlider";
import { Link } from "react-router-dom";
export default function About() {
  const slides = [
    { url: "/src/assets/image-01.jpg", title: "img-1" },
    { url: "/src/assets/image-02.jpg", title: "img-2" },
    { url: "/src/assets/farming01.jpg", title: "img-3" },
    { url: "/src/assets/farming02.jpg", title: "img-4" },
  ];
  return (
    <div>
      <div className="section about-header-section">
        <div className="container h-100">
          <div className="about-header-container h-100 d-flex justify-content-center align-items-center">
            <h1 className="h1-header">About Us</h1>
          </div>
        </div>
      </div>
      <div className="about-description section">
        <div className="container">
          <div className="about-description-container">
            <img className="desc-img" src="/src/assets/basil-leaf.png" alt="" />
            <div className="about-content row py-3 gap-3 flex-wrap flex-lg-nowrap">
              <div className="description col-12 col-lg-6">
                <h2>We Are Your Favourite Store.</h2>
                <p>
                  Tuas quisquam quo gravida proident harum, aptent ligula anim
                  consequuntur, ultrices mauris, nunc voluptates lobortis,
                  varius, potenti placeat! Fuga omnis. Cubilia congue.
                  Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos
                  ultrices natus distinctio ultrices consequuntur numqu.
                </p>
                <p>
                  Officiis fuga harum porro et? Similique rhoncus atque! Netus
                  blanditiis provident nunc posuere. Rem sequi, commodo, lorem
                  tellus elit, hic sem tenetur anim amet quas, malesuada
                  proident platea corrupti expedita.
                </p>
              </div>
              <div className="about-img-container  col-12 col-lg-6">
                <img
                  className="about-img"
                  src="/src/assets/banner-01.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Statistics section">
        <div className="container">
          <div className="Statistics-container text-center">
            <h4 className="mt-3">Numbers Speak For Themselves!</h4>
            <div className="Statistics-content d-flex justify-content-between py-4">
              <div>
                <span>5,000 +</span>
                <p>Curated Products</p>
              </div>
              <div>
                <span>800 +</span>
                <p>Curated Products</p>
              </div>
              <div>
                <span>40 +</span>
                <p>Product Categories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="organic-quality section">
        <div className="container">
          <div className="organic-quality-content row flex-wrap flex-lg-nowrap">
            <div className="col-12 col-lg-6 pb-4 left-box d-flex flex-column align-items-center gap-3 ">
              <div className="slider">
                <ImageSlider slides={slides} />
              </div>
              <div className="stars d-flex gap-2">
                <FontAwesomeIcon
                  className="icon"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="icon"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="icon"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="icon"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="icon"
                  icon={faStar}
                ></FontAwesomeIcon>
              </div>
              <p className="w-75 text-center">
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div>
                <img className="client" src="/src/assets/client.png" alt="" />
                <span className="ms-4">Mila Kunit</span>
              </div>
            </div>
            <div className="col-12 col-lg-6 right-box d-flex gap-3 flex-column align-content-around">
              <div className="d-flex gap-3 pt-3">
                <div className="organic-img-container">
                  <img
                    className="organic-img"
                    src="/src/assets/organic-badge-freeimg.png"
                    alt="organic badge picture"
                  />
                </div>
                <div>
                  <h3>Certified Products</h3>
                  <p>
                    Click edit button to change this text. Lorem ipsum dolor sit
                    amet
                  </p>
                </div>
              </div>
              <div>
                <h2 className="right-box-header">
                  We Deal With Various Quality Organic Products!
                </h2>
              </div>
              <div className="pb-3">
                <img src="/src/assets/treePaper.png" alt="treePaper picture" />
              </div>
              <div className="d-flex gap-5 flex-sm-row flex-column">
                <ul className="left-list pe-5 ">
                  <div className="icon_box">
                    <FontAwesomeIcon
                      className="check_icon"
                      icon={faCheckCircle}
                    ></FontAwesomeIcon>
                    <li>Fresh fruits</li>
                  </div>
                  <div className="icon_box">
                    <FontAwesomeIcon
                      className="check_icon"
                      icon={faCheckCircle}
                    ></FontAwesomeIcon>
                    <li>Dry fruits</li>
                  </div>
                  <div className="icon_box">
                    <FontAwesomeIcon
                      className="check_icon"
                      icon={faCheckCircle}
                    ></FontAwesomeIcon>
                    <li>Fresh vegetables</li>
                  </div>
                  <div className="icon_box">
                    <FontAwesomeIcon
                      className="check_icon"
                      icon={faCheckCircle}
                    ></FontAwesomeIcon>
                    <li>Dried vegetables</li>
                  </div>
                  <div className="icon_box">
                    {" "}
                    <FontAwesomeIcon
                      className="check_icon"
                      icon={faCheckCircle}
                    ></FontAwesomeIcon>
                    <li>Dried vegetables</li>
                  </div>
                </ul>
                <ul className="right-list ">
                  <div className="icon_box">
                    <FontAwesomeIcon
                      className="check_icon"
                      icon={faCheckCircle}
                    ></FontAwesomeIcon>
                    <li>Beauty products</li>
                  </div>
                  <div className="icon_box">
                    <FontAwesomeIcon
                      className="check_icon"
                      icon={faCheckCircle}
                    ></FontAwesomeIcon>
                    <li>Milk products</li>
                  </div>
                  <div className="icon_box">
                    <FontAwesomeIcon
                      className="check_icon"
                      icon={faCheckCircle}
                    ></FontAwesomeIcon>
                    <li>Organic honey</li>
                  </div>
                  <div className="icon_box">
                    <FontAwesomeIcon
                      className="check_icon"
                      icon={faCheckCircle}
                    ></FontAwesomeIcon>
                    <li>Organic tea</li>
                  </div>
                </ul>
              </div>
              <div className="button-container d-flex justify-content-center justify-content-lg-start">
                <button className="btn-shopping">
                  <Link className="cart-shopping-link" to={"#"}>
                    <span className="d-flex gap-2">
                      <span className="icon-shopping-wrapper">
                        <FontAwesomeIcon
                          icon={faCartShopping}
                        ></FontAwesomeIcon>
                      </span>
                      <span> start shopping</span>
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
