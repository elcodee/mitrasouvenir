export default function Header() {
  return (
    <>
      <header className="main-header navbar-light header-sticky header-sticky-smart">
        <div className="topbar bg-primary">
          <div className="container">
            <p className="mb-0 fs-16 font-weight-600 text-white text-center">
              Open Custome Design Tumblr
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
                          Beranda
                          {/* <span className="caret" /> */}
                        </a>
                      </li>
                      <li
                        className="nav-item py-2 py-xl-7 sticky-py-xl-6 px-0 px-xl-5"
                      >
                        <a
                          className="nav-link p-0"
                          href="/"
                        >
                          Tentang
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto flex-shrink-0 px-10">
                    <div className="d-flex mt-3 mt-xl-0 align-items-center w-100 justify-content-center">
                      <a
                        className="navbar-brand mx-auto d-inline-block py-0"
                        href="/"
                      >
                        <img
                          src="https://files.elcodee.com/mitrasouvenir/images/logo-black.png"
                          alt="Glowing"
                        />
                      </a>
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
                    href="/"
                  >
                    <img
                      src="https://files.elcodee.com/mitrasouvenir/images/logo-black.png"
                      alt="Glowing"
                    />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
