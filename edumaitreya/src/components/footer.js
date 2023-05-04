
export default function Footer(){
    return(
      <footer>
        <div className="footer-down bg-black text-white px-5 py-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright text-center">
                  &copy; <span>2023 Siraru Community</span> .All rights Reserved ||
                <div className="credits" style={{ display: "inline" }}>
                {" "}Designed by <a className="text-white list-unstyled" style={{ textDecoration: "none" }} href="">Ahsan aka. Panthera</a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}