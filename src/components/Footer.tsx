export default function Footer(){
    return(
        <footer className="pt-10 pt-lg-14 pb-11 footer bg-gray">
          <div className="container container-xl">
            <div className="row mt-0 mt-lg-15 align-items-center">
              <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center order-2 order-lg-1 mt-4 mt-md-7 mt-lg-0">
                <p className="mb-0">© 2022 Mitra Souvenir.</p>
                <ul className="list-inline fs-18 ml-3 mb-0">
                  <li className="list-inline-item mr-4">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item mr-4">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item mr-4">
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-4 text-md-center order-1 order-lg-2">
                <img
                  src="https://files.elcodee.com/mitrasouvenir/images/logo-black-x1.png"
                  alt="Glowing"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4 text-md-right order-3 mt-4 mt-md-7 mt-lg-0">
                <img
                  src="https://files.elcodee.com/mitrasouvenir/images/icon-pay.png"
                  alt="Pay"
                />
              </div>
            </div>
          </div>
        </footer>
    )
}