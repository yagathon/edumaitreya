import { useState } from "react";
import BannerImage1 from "./../images/banner/banner.png";
import BannerImage2 from "./../images/banner/banner1.png";
import BannerImage3 from "./../images/banner/banner2.png";
import FrontImage1 from "./../images/logo/siraru.png";

export default function Banner() {

  const [count, setCount] = useState(0);

  return (
    <div className="banner min-vh-100" style={count === 1 ? { backgroundImage: `url(${BannerImage2})` } : count === -1 ? { backgroundImage: `url(${BannerImage3})` } : { backgroundImage: `url(${BannerImage1})` }} id="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <figure className="text-center">
              <blockquote className="blockquote">
                <h1>KOMUNITAS SIRARU</h1>
              </blockquote>
            </figure>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={FrontImage1} alt="" height={"120px"} width={"auto"} />
          </div>
        </div>
      </div>
    </div>
  );
}