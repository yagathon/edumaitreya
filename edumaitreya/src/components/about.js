import Brand from "./../images/logo/siraru.png";

const sliderContainer = [...document.querySelectorAll('.img-slider-container')];
const nextBtn = [...document.querySelectorAll('.next-slider')];
const prevBtn = [...document.querySelectorAll('.prev-slider')];

sliderContainer.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerwidth = (containerDimension.width) * 0.5;

  nextBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerwidth;
  });

  prevBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerwidth;
  });
});

export default function AboutUs() {
  return (
    <div className="fitting-content" id="about">
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="about-us">
          <div className="title-container" data-aos="fade-up">
            <h2 className="text-center fw-bold">TENTANG SIRARU</h2>
          </div>
          <div className="row row-center mt-5">
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <h3 className="about-us-title fw-bold" data-aos="fade-right">KOMUNITAS SIRARU</h3>
              <p data-aos="fade-right">Siraru adalah komunitas yang melangkah menuju industri yang bergerak dalam bidang pengembangan diri.
                Komunitas Siraru berdiri sejak 26 Agustus 2022.
                Filosofi Siraru adalah hewan yang selalu mencari cahaya dan haus akan cahaya sampai dia terbakar.
                Maknanya kita manusia yang haus akan ilmu dan tidak pernah berhenti mencari ilmu pengetahuan.
              </p>
              <div data-aos="fade-right">
              <a href="#" className="btn btn-2 text-white mb-3">Pelajari sekarang</a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <h4 className="about-us-subtitle fw-bolder" data-aos="fade-left">VISI SIRARU</h4>
              <p data-aos="fade-left">Menjadi wadah dalam pengembangan karakter dan potensi setiap individu.
                Saling berkolaborasi dan mengembangkan media informasi untuk memberikan dampak positif pada lingkungan.</p>
              <h4 className="about-us-subtitle fw-bolder" data-aos="fade-left">MISI SIRARU</h4>
              <p data-aos="fade-left">Membuat program produktif yang melibatkan anggota untuk menggerakan roda perekonomian dari berbagai sektor.
                Membuat yayasan sebagai support system dan menjalin silaturahmi yang baik.
              </p>
            </div>
            <div className="col-md-12">
              <h5 className="text-center mt-4" data-aos="fade-up">Kami didukung oleh:</h5>
              <section className="img-slider mt-4" data-aos="fade-up">
                <button className="prev-slider h1 fw-bold" data-aos="fade-right">{"<"}</button>
                <button className="next-slider h1 fw-bold" data-aos="fade-left">{">"}</button>
                <div className="img-slider-container">
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}