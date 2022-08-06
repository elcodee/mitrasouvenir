import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PopUpModal from "./Modal";
import { AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";

export default function CatalogPage() {
  return (
    <>
      <div>
        <Header />

        <main id="content">
          <section className="py-2 bg-gray-2">
            <div className="container">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-site py-0 d-flex justify-content-center">
                  <li className="breadcrumb-item">
                    <a className="text-decoration-none text-body" href="/">
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item active pl-0 d-flex align-items-center"
                    aria-current="page"
                  >
                    Catalog Products
                  </li>
                </ol>
              </nav>
            </div>
          </section>
          <section>
            <div className="container container-xl">
              <h2 className="text-center mt-9 mb-8">Mitra Souvenir Catalog</h2>
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <p
                  className="fs-18 font-weight-500 my-lg-0 my-2"
                  style={{ color: "#696969" }}
                >
                  Kami Menemukan
                  <strong className="font-weight-bold text-secondary ml-2 mr-2">
                    95
                  </strong>
                  Produk Tersedia
                </p>
                <div className="d-flex align-items-center">
                  <div
                    className="dropdown show lh-1 rounded ml-lg-5 ml-0"
                    style={{ backgroundColor: "#f5f5f5" }}
                  >
                    <a
                      href="#"
                      className="dropdown-toggle custom-dropdown-toggle text-decoration-none text-secondary p-3 mw-210 position-relative d-block"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Kategori
                    </a>
                    <div
                      className="dropdown-menu custom-dropdown-item"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Tumblr
                      </a>
                      <a className="dropdown-item" href="#">
                        Mug
                      </a>
                      <a className="dropdown-item" href="#">
                        Glass
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-7">
            <div className="container container-xl">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                    className="card border-0 product mb-6"
                    data-animate="fadeInUp"
                  >
                     <a href="/product">
                    <div className="position-relative">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/product-01.jpg"
                        alt="Facial cleanser"
                      />
                      {/* <div className="card-img-overlay d-flex p-3">
                        <div>
                          <span className="badge badge-primary">-20%</span>
                        </div>
                      </div> */}
                    </div>
                    <div className="card-body pt-4 text-center">
                      <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                        <span className="fs-13 font-weight-500 text-decoration-through text-body pr-1">
                          $39.00
                        </span>
                        <span>$29.00</span>
                      </p>
                      <h2 className="card-title fs-15 font-weight-500 mb-2">
                        Facial cleanser
                      </h2>
                      <div className="d-flex text-muted align-items-center justify-content-center flex-wrap">
                      <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          20 <AiOutlineShoppingCart style={{ marginBottom: 2}} />
                        </span>
                        <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          180 <AiOutlineEye style={{ marginBottom: 2}} />
                        </span>
                      </div>
                    </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                    className="card border-0 product mb-6"
                    data-animate="fadeInUp"
                  >
                     <a href="/product">
                    <div className="position-relative">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/product-02.jpg"
                        alt="Bio-shroom Rejuvenating Serum"
                      />
                      <div className="card-img-overlay d-flex p-3">
                        <div />
                      </div>
                    </div>
                    <div className="card-body pt-4 text-center">
                      <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                        <span>$29.00</span>
                      </p>
                      <h2 className="card-title fs-15 font-weight-500 mb-2">
                          Bio-shroom Rejuvenating Serum
                      </h2>
                      <div className="d-flex text-muted align-items-center justify-content-center flex-wrap">
                      <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          20 <AiOutlineShoppingCart style={{ marginBottom: 2}} />
                        </span>
                        <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          180 <AiOutlineEye style={{ marginBottom: 2}} />
                        </span>
                      </div>
                    </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                    className="card border-0 product mb-6"
                    data-animate="fadeInUp"
                  >
                     <a href="/product">
                    <div className="position-relative">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/product-02.jpg"
                        alt="Bio-shroom Rejuvenating Serum"
                      />
                      <div className="card-img-overlay d-flex p-3">
                        <div />
                      </div>
                    </div>
                    <div className="card-body pt-4 text-center">
                      <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                        <span>$29.00</span>
                      </p>
                      <h2 className="card-title fs-15 font-weight-500 mb-2">
                          Bio-shroom Rejuvenating Serum
                      </h2>
                      <div className="d-flex text-muted align-items-center justify-content-center flex-wrap">
                      <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          20 <AiOutlineShoppingCart style={{ marginBottom: 2}} />
                        </span>
                        <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          180 <AiOutlineEye style={{ marginBottom: 2}} />
                        </span>
                      </div>
                    </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                    className="card border-0 product mb-6"
                    data-animate="fadeInUp"
                  >
                     <a href="/product">
                    <div className="position-relative">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/product-02.jpg"
                        alt="Bio-shroom Rejuvenating Serum"
                      />
                      <div className="card-img-overlay d-flex p-3">
                        <div />
                      </div>
                    </div>
                    <div className="card-body pt-4 text-center">
                      <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                        <span>$29.00</span>
                      </p>
                      <h2 className="card-title fs-15 font-weight-500 mb-2">
                          Bio-shroom Rejuvenating Serum
                      </h2>
                      <div className="d-flex text-muted align-items-center justify-content-center flex-wrap">
                      <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          20 <AiOutlineShoppingCart style={{ marginBottom: 2}} />
                        </span>
                        <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          180 <AiOutlineEye style={{ marginBottom: 2}} />
                        </span>
                      </div>
                    </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                    className="card border-0 product mb-6"
                    data-animate="fadeInUp"
                  >
                     <a href="/product">
                    <div className="position-relative">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/product-02.jpg"
                        alt="Bio-shroom Rejuvenating Serum"
                      />
                      <div className="card-img-overlay d-flex p-3">
                        <div />
                      </div>
                    </div>
                    <div className="card-body pt-4 text-center">
                      <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                        <span>$29.00</span>
                      </p>
                      <h2 className="card-title fs-15 font-weight-500 mb-2">
                          Bio-shroom Rejuvenating Serum
                      </h2>
                      <div className="d-flex text-muted align-items-center justify-content-center flex-wrap">
                      <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          20 <AiOutlineShoppingCart style={{ marginBottom: 2}} />
                        </span>
                        <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          180 <AiOutlineEye style={{ marginBottom: 2}} />
                        </span>
                      </div>
                    </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                    className="card border-0 product mb-6"
                    data-animate="fadeInUp"
                  >
                     <a href="/product">
                    <div className="position-relative">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/product-02.jpg"
                        alt="Bio-shroom Rejuvenating Serum"
                      />
                      <div className="card-img-overlay d-flex p-3">
                        <div />
                      </div>
                    </div>
                    <div className="card-body pt-4 text-center">
                      <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                        <span>$29.00</span>
                      </p>
                      <h2 className="card-title fs-15 font-weight-500 mb-2">
                          Bio-shroom Rejuvenating Serum
                      </h2>
                      <div className="d-flex text-muted align-items-center justify-content-center flex-wrap">
                      <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          20 <AiOutlineShoppingCart style={{ marginBottom: 2}} />
                        </span>
                        <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          180 <AiOutlineEye style={{ marginBottom: 2}} />
                        </span>
                      </div>
                    </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                    className="card border-0 product mb-6"
                    data-animate="fadeInUp"
                  >
                     <a href="/product">
                    <div className="position-relative">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/product-02.jpg"
                        alt="Bio-shroom Rejuvenating Serum"
                      />
                      <div className="card-img-overlay d-flex p-3">
                        <div />
                      </div>
                    </div>
                    <div className="card-body pt-4 text-center">
                      <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                        <span>$29.00</span>
                      </p>
                      <h2 className="card-title fs-15 font-weight-500 mb-2">
                          Bio-shroom Rejuvenating Serum
                      </h2>
                      <div className="d-flex text-muted align-items-center justify-content-center flex-wrap">
                      <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          20 <AiOutlineShoppingCart style={{ marginBottom: 2}} />
                        </span>
                        <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          180 <AiOutlineEye style={{ marginBottom: 2}} />
                        </span>
                      </div>
                    </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                    className="card border-0 product mb-6"
                    data-animate="fadeInUp"
                  >
                     <a href="/product">
                    <div className="position-relative">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/product-02.jpg"
                        alt="Bio-shroom Rejuvenating Serum"
                      />
                      <div className="card-img-overlay d-flex p-3">
                        <div />
                      </div>
                    </div>
                    <div className="card-body pt-4 text-center">
                      <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                        <span>$29.00</span>
                      </p>
                      <h2 className="card-title fs-15 font-weight-500 mb-2">
                          Bio-shroom Rejuvenating Serum
                      </h2>
                      <div className="d-flex text-muted align-items-center justify-content-center flex-wrap">
                      <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          20 <AiOutlineShoppingCart style={{ marginBottom: 2}} />
                        </span>
                        <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          180 <AiOutlineEye style={{ marginBottom: 2}} />
                        </span>
                      </div>
                    </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <PopUpModal />
      </div>
    </>
  );
}
