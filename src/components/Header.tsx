import { AiOutlineHome, AiOutlineShopping } from "react-icons/ai";
import LoginModal from "./LoginModal";

export default function Header() {
  return (
    <>
      <header className="main-header navbar-light header-sticky header-sticky-smart">
        <div className="topbar bg-primary">
          <div className="container">
            <p className="mb-0 fs-16 font-weight-600 text-white text-center">
              Mitra Souvenir
            </p>
          </div>
        </div>
        <div className="sticky-area bg-white">
          <div className="container container-xxl">
            <nav className="navbar navbar-expand-xl px-0 d-block">
              <div className="d-none d-xl-block">
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="w-50">
                    <ul className="navbar-nav hover-menu main-menu px-0 mx-xl-n5">
                      <li
                        className="nav-item py-2 py-xl-7 sticky-py-xl-6 px-0 px-xl-5"
                      >
                        <a
                          className="nav-link p-0"
                          href="/"
                        >
                          <AiOutlineHome style={{ fontSize: 18, marginBottom: 5, marginRight: 2 }}/> Beranda
                        </a>
                      </li>
                      <li
                        className="nav-item py-2 py-xl-7 sticky-py-xl-6 px-0 px-xl-5"
                      >
                        <a
                          className="nav-link p-0"
                          href="/catalog"
                        >
                          <AiOutlineShopping style={{ fontSize: 18, marginBottom: 5, marginRight: 2 }}/> Catalog
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto flex-shrink-0 px-10">
                    <div className="d-flex mt-3 mt-xl-0 align-items-center w-100 justify-content-center">
                      <a
                        className="navbar-brand mx-auto d-inline-block py-0"
                        href="index.html"
                      >
                        <img
                          src="https://files.elcodee.com/mitrasouvenir/images/logo-black.png"
                          alt="Glowing"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="w-50">
                    <div className="d-flex align-items-center justify-content-end">
                      <ul className="navbar-nav flex-row justify-content-xl-end d-flex flex-wrap text-body py-0 navbar-right">
                        <li className="nav-item">
                          <a
                            className="nav-link pr-3 py-0"
                            href="#"
                            data-toggle="modal"
                            data-target="#sign-in"
                          >
                            {/* <svg className="icon icon-user-light">
                              <use xlinkHref="#icon-user-light" />
                            </svg> */}
                            <LoginModal />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center d-xl-none">
                <button
                  className="navbar-toggler border-0 px-0 canvas-toggle"
                  type="button"
                  data-canvas="true"
                  data-canvas-options='{"width":"250px","container":".sidenav"}'
                >
                  <span className="fs-24 toggle-icon" />
                </button>
                <div className="mx-auto">
                  <a
                    className="navbar-brand d-inline-block mr-0 py-5"
                    href="index.html"
                  >
                    <img
                      src="https://files.elcodee.com/mitrasouvenir/images/logo-black.png"
                      alt="Glowing"
                    />
                  </a>
                </div>
                {/* <svg className="icon icon-user-light fs-28">
                  <use xlinkHref="#icon-user-light" />
                </svg> */}
                <LoginModal />
              </div>
            </nav>
          </div>
        </div>
      </header>


      {/* Mobile Menu */}
      <div className="sidenav canvas-sidebar bg-white">
  <div className="canvas-overlay" />
  <div className="pt-5 pb-7 card border-0 h-100">
    <div className="d-flex align-items-center card-header border-0 py-0 pl-8 pr-7 mb-9 bg-transparent">
      <a href="/" className="d-block w-179px">
        <img src="https://files.elcodee.com/mitrasouvenir/images/logo-black.png" alt="Glowing" />
      </a>
      <span className="canvas-close d-inline-block text-right fs-24 ml-auto lh-1 text-primary"><i className="fal fa-times" /></span>
    </div>
    <div className="overflow-y-auto pb-6 pl-8 pr-7 card-body pt-0">
      <ul className="navbar-nav main-menu px-0">
        <li className="nav-item dropdown py-1 px-0">
          <a className="nav-link text-muted p-0" href="/">
          <AiOutlineHome style={{ fontSize: 18, marginBottom: 5, marginRight: 2 }}/> Beranda
          </a>
        </li>
        <li className="nav-item dropdown py-1 px-0">
          <a className="nav-link text-muted p-0" href="/catalog">
          <AiOutlineShopping style={{ fontSize: 18, marginBottom: 5, marginRight: 2 }}/> Catalog
          </a>
        </li>
      </ul>
    </div>
    <div className="card-footer bg-transparent border-0 mt-auto pl-8 pr-7 pb-0 pt-4">
      <ul className="list-inline d-flex align-items-center mb-3">
        <li className="list-inline-item mr-4">
          <a href="#" className="fs-20 lh-1"><i className="fab fa-facebook-f" /></a>
        </li>
        <li className="list-inline-item mr-4">
          <a href="#" className="fs-20 lh-1"><i className="fab fa-instagram" /></a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="fs-20 lh-1"><i className="fab fa-twitter" /></a>
        </li>
      </ul>
      <p className="mb-0 text-gray">
        © 2022 Mitra Souvenir.<br />
        All rights reserved.
      </p>
    </div>
  </div>
</div>

    </>
  );
}
