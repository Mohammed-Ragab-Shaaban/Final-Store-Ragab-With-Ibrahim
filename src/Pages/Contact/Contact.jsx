import "./Contact.css";
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
    </div>
  );
}
