import BannerImage1 from "./../images/banner/banner.png";
import BannerImage2 from "./../images/banner/banner1.png";
import BannerImage3 from "./../images/banner/banner2.png";
export default function Program() {
  return (
    <div className="fitting-content" style={{ backgroundColor: "#eeeeee" }} id="program">
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="title-container" data-aos="fade-up">
          <h2 className="text-center fw-bold">PROGRAM SIRARU</h2>
        </div>
        <div className="row py-4">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="program-container my-2" data-aos="fade-right">
              <div className="row">
                <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12">
                  <img className="img-fluid mt-3 mb-3" src={BannerImage1} alt="" />
                </div>
                <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                  <div className="program-title">
                    <h5>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit</h5>
                  </div>
                    <ul>
                      <li>
                        Waktu&#9;: 00:00 WIB - selesai
                      </li>
                      <li>
                        Tempat&#9;: Lorem ipsum dolor si amet consectetur adipisicing elit
                      </li>
                    </ul>
                  <div className="accordion mt-3 mb-3" id="program-1">
                    <div className="panel-accr accordion-item">
                      <h2 className="accordion-header" id="program-heading-1">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#program-collapse-1" aria-expanded="false" aria-controls="program-collapse-1">
                          Deskripsi Program
                        </button>
                      </h2>
                      <div id="program-collapse-1" className="accordion-collapse collapse" aria-labelledby="program-heading-1">
                        <div className="accordion-body">
                          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="program-container my-2" data-aos="fade-left">
              <div className="row">
                <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12">
                  <img className="img-fluid mt-3 mb-3" src={BannerImage2} alt="" />
                </div>
                <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                  <div className="program-title">
                    <h5>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit</h5>
                  </div>
                    <ul>
                      <li>
                        Waktu&#9;: 00:00 WIB - selesai
                      </li>
                      <li>
                        Tempat&#9;: Lorem ipsum dolor si amet consectetur adipisicing elit
                      </li>
                    </ul>
                  <div className="accordion mt-3 mb-3" id="program-2">
                    <div className="panel-accr accordion-item">
                      <h2 className="accordion-header" id="program-heading-2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#program-collapse-2" aria-expanded="false" aria-controls="program-collapse-2">
                          Deskripsi Program
                        </button>
                      </h2>
                      <div id="program-collapse-2" className="accordion-collapse collapse" aria-labelledby="program-heading-2">
                        <div className="accordion-body">
                          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="program-container my-2" data-aos="fade-right">
              <div className="row">
                <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12">
                  <img className="img-fluid mt-3 mb-3" src={BannerImage3} alt=""/>
                </div>
                <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                  <div className="program-title">
                    <h5>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit</h5>
                  </div>
                    <ul>
                      <li>
                        Waktu&#9;: 00:00 WIB - selesai
                      </li>
                      <li>
                        Tempat&#9;: Lorem ipsum dolor si amet consectetur adipisicing elit
                      </li>
                    </ul>
                  <div className="accordion mt-3 mb-3" id="program-3">
                    <div className="panel-accr accordion-item">
                      <h2 className="accordion-header" id="program-heading-3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#program-collapse-3" aria-expanded="false" aria-controls="program-collapse-3">
                          Deskripsi Program
                        </button>
                      </h2>
                      <div id="program-collapse-3" className="accordion-collapse collapse" aria-labelledby="program-heading-3">
                        <div className="accordion-body">
                          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
    </div>
  );
}