import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";
import PopUpModal from "./Modal";

export default function DetailProductPage() {
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
                    <a
                      className="text-decoration-none text-body"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item pl-0 d-flex align-items-center">
                    <a
                      className="text-decoration-none text-body"
                      href="#!"
                    >
                      Product
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item active pl-0 d-flex align-items-center"
                    aria-current="page"
                  >
                   Tumblr 1
                  </li>
                </ol>
              </nav>
            </div>
          </section>
          <section className="pt-11 product-details-layout-2">
            <div className="container">
              <div className="row">
                <div className="col-md-6 pr-xl-9 mb-8 mb-md-0">
                  <div className="galleries-product galleries-product-02 position-relative">
                    <div
                      className="slick-slider slider-for mx-0"
                      data-slick-options='{"slidesToShow": 1, "autoplay":false,"dots":false,"arrows":false,"asNavFor": ".slider-nav"}'
                    >
                      <div className="box px-0">
                        <div className="card p-0 rounded-0 border-0">
                          <a
                            href="https://files.elcodee.com/mitrasouvenir/images/product-07.jpg"
                            className="card-img"
                            data-gtf-mfp="true"
                            data-gallery-id={2}
                          >
                            <img
                              src="https://files.elcodee.com/mitrasouvenir/images/product-07.jpg"
                              alt="product gallery"
                              className="w-100"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="box px-0">
                        <div className="card p-0 rounded-0 border-0">
                          <a
                            href="https://files.elcodee.com/mitrasouvenir/images/product-15.jpg"
                            className="card-img"
                            data-gtf-mfp="true"
                            data-gallery-id={2}
                          >
                            <img
                              src="https://files.elcodee.com/mitrasouvenir/images/product-15.jpg"
                              alt="product gallery"
                              className="w-100"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="box px-0">
                        <div className="card p-0 rounded-0 border-0">
                          <a
                            href="https://files.elcodee.com/mitrasouvenir/images/product-16.jpg"
                            className="card-img"
                            data-gtf-mfp="true"
                            data-gallery-id={2}
                          >
                            <img
                              src="https://files.elcodee.com/mitrasouvenir/images/product-16.jpg"
                              alt="product gallery"
                              className="w-100"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="box px-0">
                        <div className="card p-0 rounded-0 border-0">
                          <a
                            href="https://files.elcodee.com/mitrasouvenir/images/product-17.jpg"
                            className="card-img"
                            data-gtf-mfp="true"
                            data-gallery-id={2}
                          >
                            <img
                              src="https://files.elcodee.com/mitrasouvenir/images/product-17.jpg"
                              alt="product gallery"
                              className="w-100"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slider slider-nav mx-n1"
                      data-slick-options='{"slidesToShow": 5, "autoplay":false,"dots":false,"arrows":false,"asNavFor": ".slider-for","focusOnSelect": true}'
                    >
                      <div className="box py-4 px-1">
                        <img
                          src="https://files.elcodee.com/mitrasouvenir/images/product-07.jpg"
                          className="w-100"
                          alt="product gallery"
                        />
                      </div>
                      <div className="box py-4 px-1">
                        <img
                          src="https://files.elcodee.com/mitrasouvenir/images/product-15.jpg"
                          className="w-100"
                          alt="product gallery"
                        />
                      </div>
                      <div className="box py-4 px-1">
                        <img
                          src="https://files.elcodee.com/mitrasouvenir/images/product-16.jpg"
                          className="w-100"
                          alt="product gallery"
                        />
                      </div>
                      <div className="box py-4 px-1">
                        <img
                          src="https://files.elcodee.com/mitrasouvenir/images/product-17.jpg"
                          className="w-100"
                          alt="product gallery"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <p className="d-flex align-items-center mb-1">
                    {/* <span className="text-line-through">$39.00</span> */}
                    <span className="fs-24 text-secondary font-weight-bold">
                     Tumblr 1
                    </span>
                    {/* <span className="badge badge-primary fs-16 ml-4 font-weight-600 px-3">
                      20%
                    </span> */}
                  </p>
                  <h2 className="fs-20 mb-2">Rp 235.000</h2>
                  <div className="d-flex align-items-center flex-wrap mb-3 lh-12">
                  <div className="d-flex align-items-center justify-content-center flex-wrap">
                      <span className="card-text fs-14 font-weight-400 lh-1">
                          20 <AiOutlineShoppingCart style={{ marginBottom: 2}} />
                        </span>
                        <span className="card-text fs-14 font-weight-400 pl-3 lh-3">
                          180 <AiOutlineEye style={{ marginBottom: 2}} />
                        </span>
                      </div>
                  </div>
                  <p className="text-secondary mb-2">
                    <svg className="icon icon-Timer fs-20 mr-2 align-text-bottom">
                      <use xlinkHref="#icon-Timer" />
                    </svg>
                    Tersisa 9 Stok
                  </p>
                  <div className="progress mb-4" style={{ height: "4px" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                    <PopUpModal />
                  <p className="mb-2">
                    <span className="text-secondary">
                      <svg className="icon icon-delivery-1 fs-20 mr-2 align-text-bottom">
                        <use xlinkHref="#icon-delivery-1" />
                      </svg>
                      Pengiriman ke seluruh indonesia
                    </span>
                  </p>
                  <p className="mb-5">
                    <span className="text-secondary">
                      <svg className="icon icon-Package fs-20 mr-2 align-text-bottom">
                        <use xlinkHref="#icon-Package" />
                      </svg>
                     Packaging bubble wrap / kayu
                    </span>
                  </p>
                  <div className="card border-0 bg-input rounded text-center">
                    <div className="pt-5">
                      <img
                        className="w-auto"
                        src="https://files.elcodee.com/mitrasouvenir/images/single-product-13.png"
                        alt="pay"
                      />
                    </div>
                    <div className="card-body pt-3 pb-4">
                      <p className="fs-14 font-weight-normal mb-0">
                        Metode Pembayaran
                      </p>
                    </div>
                  </div>
                  <ul className="list-unstyled pt-5 mb-0">
                    <li className="row mb-1">
                      <span className="d-block col-4 col-lg-2 text-secondary font-weight-600 fs-14">
                        SKU :
                      </span>
                      <span className="d-block col-8 col-lg-10">TMBLR001</span>
                    </li>
                    <li className="row">
                      <span className="d-block col-4 col-lg-2 text-secondary font-weight-600 fs-14">
                        Kategori:
                      </span>
                      <span className="d-block col-8 col-lg-10">
                        Botol
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-10 pt-lg-12 pb-10 pb-md-6 pb-lg-12 border-top">
            <div className="container">
              <div className="collapse-tabs">
                <ul
                  className="nav nav-pills mb-5 justify-content-center d-md-flex d-none"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active show fs-lg-34 fs-24 lh-129 font-weight-600 p-0 mr-md-10 mr-4"
                      id="pills-detail-tab"
                      data-toggle="pill"
                      href="#pills-detail"
                      role="tab"
                      aria-controls="pills-detail"
                      aria-selected="false"
                    >
                      Product Detail
                    </a>
                  </li>
                </ul>
                <div className="tab-content bg-white-md shadow-none py-md-5 p-0">
                  <div id="collapse-tabs-accordion-01">
                    <div
                      className="tab-pane tab-pane-parent fade show active"
                      id="pills-detail"
                      role="tabpanel"
                    >
                      <div className="card border-0 bg-transparent">
                        <div
                          className="card-header border-0 d-block d-md-none bg-transparent px-0 py-1"
                          id="headingDetails-01"
                        >
                          <h5 className="mb-0">
                            <button
                              className="btn lh-2 fs-18 py-1 px-6 shadow-none w-100 collapse-parent border text-primary"
                              data-toggle="false"
                              data-target="#detail-collapse-01"
                              aria-expanded="true"
                              aria-controls="detail-collapse-01"
                            >
                              Product Detail
                            </button>
                          </h5>
                        </div>
                        <div
                          id="detail-collapse-01"
                          className="collapsible collapse show"
                          aria-labelledby="headingDetails-01"
                          data-parent="#collapse-tabs-accordion-01"
                          style={{}}
                        >
                          <div
                            id="accordion-style-01"
                            className="accordion accordion-01 border-md-0 border p-md-0 p-6"
                          >
                            <div className="row">
                              <div className="col-lg-6 mb-lg-0 mb-7">
                                <div className="hover-shine pr-xl-13">
                                  <img
                                    src="https://files.elcodee.com/mitrasouvenir/images/single-product-05.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <p className="font-weight-600 text-secondary mb-2">
                                  For Normal, Oily, Combination Skin Types
                                </p>
                                <p className="mb-2">
                                  Complexion-perfecting natural foundation
                                  enriched with antioxidant-packed superfruits,
                                  vitamins, and other skin-nourishing nutrients.
                                  Creamy liquid formula sets with a pristine
                                  matte finish for soft, velvety smooth skin.
                                </p>
                                <p className="mb-5 mb-lg-7">
                                  Say hello to flawless, long-lasting foundation
                                  that comes in 7 melt-into-your-skin shades.
                                  This lightweight, innovative formula creates a
                                  smooth, natural matte finish that won’t settle
                                  into lines. It’s the perfect fit for your
                                  skin. 1 fl. oz.
                                </p>
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
          </section>
          <section className="pt-10 pb-11 pt-lg-12 pb-lg-13 border-top">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="text-center fs-34 mb-8">Customer Reviews</h3>
                </div>
                <div className="col-md-4">
                  <div className="card border-0 mb-3">
                    <div className="d-flex align-items-center">
                      <h4 className="fs-48 mr-6 mb-0">4.86</h4>
                      <div className="card-body p-0">
                        <ul className="list-inline d-flex rating-result mb-0">
                          <li className="list-inline-item mr-1">
                            <span className="text-primary lh-2">
                              <i className="fas fa-star" />
                            </span>
                          </li>
                          <li className="list-inline-item mr-1">
                            <span className="text-primary lh-2">
                              <i className="fas fa-star" />
                            </span>
                          </li>
                          <li className="list-inline-item mr-1">
                            <span className="text-primary lh-2">
                              <i className="fas fa-star" />
                            </span>
                          </li>
                          <li className="list-inline-item mr-1">
                            <span className="text-primary lh-2">
                              <i className="fas fa-star" />
                            </span>
                          </li>
                          <li className="list-inline-item mr-1">
                            <span className="text-primary lh-2">
                              <i className="fas fa-star" />
                            </span>
                          </li>
                        </ul>
                        <p className="mb-0">2947 Reviews</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 text-md-right mb-4 mb-md-0">
                  <a
                    href="#"
                    className="btn btn-outline-secondary border border-2x border-hover-secondary write-review fs-16"
                  >
                    <svg className="icon icon-Pencil">
                      <use xlinkHref="#icon-Pencil" />
                    </svg>
                    Tulis Review
                  </a>
                </div>
                <div className="col-12 overflow-hidden">
                  <div className="card border-0 mt-2 mb-7 form-review hide">
                    <div className="card-body p-0">
                      <form>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group mb-4">
                              <label
                                className="text-secondary font-weight-600"
                                htmlFor="reviewName"
                              >
                                Nama
                              </label>
                              <input
                                id="reviewName"
                                className="form-control border-0"
                                type="text"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group mb-4">
                              <label
                                className="text-secondary font-weight-600"
                                htmlFor="reviewEmail"
                              >
                                Whatsapp
                              </label>
                              <input
                                id="reviewEmail"
                                type="number"
                                name="email"
                                className="form-control border-0"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-secondary font-weight-600 mb-0 mr-2 mb-2">
                           Rating*
                          </p>
                          <div className="form-group mb-3 d-flex justify-content-start">
                            <div className="rate-input">
                              <input
                                type="radio"
                                id="star5"
                                name="rate"
                                defaultValue={5}
                              />
                              <label
                                htmlFor="star5"
                                title="text"
                                className="mb-0 mr-1 lh-1"
                              >
                                <i className="fal fa-star" />
                              </label>
                              <input
                                type="radio"
                                id="star4"
                                name="rate"
                                defaultValue={4}
                              />
                              <label
                                htmlFor="star4"
                                title="text"
                                className="mb-0 mr-1 lh-1"
                              >
                                <i className="fal fa-star" />
                              </label>
                              <input
                                type="radio"
                                id="star3"
                                name="rate"
                                defaultValue={3}
                              />
                              <label
                                htmlFor="star3"
                                title="text"
                                className="mb-0 mr-1 lh-1"
                              >
                                <i className="fal fa-star" />
                              </label>
                              <input
                                type="radio"
                                id="star2"
                                name="rate"
                                defaultValue={2}
                              />
                              <label
                                htmlFor="star2"
                                title="text"
                                className="mb-0 mr-1 lh-1"
                              >
                                <i className="fal fa-star" />
                              </label>
                              <input
                                type="radio"
                                id="star1"
                                name="rate"
                                defaultValue={1}
                              />
                              <label
                                htmlFor="star1"
                                title="text"
                                className="mb-0 mr-1 lh-1"
                              >
                                <i className="fal fa-star" />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-6">
                          <label
                            className="text-secondary font-weight-600"
                            htmlFor="reviewMessage"
                          >
                           Komentar
                          </label>
                          <textarea
                            id="reviewMessage"
                            className="form-control border-0"
                            name="message"
                            rows={5}
                            defaultValue={""}
                          />
                        </div>
                        <div className="justify-content-end d-flex">
                          <div className="mr-4">
                          </div>
                          <button
                            type="submit"
                            className="btn fs-16 btn-secondary"
                          >
                            Kirim
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 mt-lg-8">
                <h3 className="fs-20 mb-6">2947 Reviews</h3>
                <div className="border-bottom pb-4">
                  <div className="d-flex align-items-center mb-3">
                    <ul className="list-inline d-flex rating-result mb-0 fs-13">
                      <li className="list-inline-item mr-1 lh-1">
                        <span className="text-secondary">
                          <i className="fas fa-star" />
                        </span>
                      </li>
                      <li className="list-inline-item mr-1 lh-1">
                        <span className="text-secondary">
                          <i className="fas fa-star" />
                        </span>
                      </li>
                      <li className="list-inline-item mr-1 lh-1">
                        <span className="text-secondary">
                          <i className="fas fa-star" />
                        </span>
                      </li>
                      <li className="list-inline-item mr-1 lh-1">
                        <span className="text-secondary">
                          <i className="fas fa-star" />
                        </span>
                      </li>
                      <li className="list-inline-item mr-1 lh-1">
                        <span className="text-secondary">
                          <i className="fas fa-star" />
                        </span>
                      </li>
                    </ul>
                    <span className="divider fs-3 mx-2">
                      <i className="fas fa-circle" />
                    </span>
                    <span className="fs-14"> 3 days ago</span>
                  </div>
                  <div className="media mb-2">
                    <img
                      src="https://files.elcodee.com/mitrasouvenir/images/single-product-06.png"
                      className="mr-3"
                      alt="Avatar"
                    />
                    <div className="media-body">
                      <h5 className="mt-0 fs-14 text-uppercase">Jennifer C.</h5>
                      <p>/ Orlando, FL</p>
                    </div>
                  </div>
                  <p className="font-weight-600 text-secondary mb-2">
                    Favorite Foundation
                  </p>
                  <p className="mb-6">
                    I order the samples so as not to make mistakes when choosing
                    my color Is a good product as a light shade but the sample
                    doesn’t contain enough product to cover the skin and decide
                    clearly, around my eyes I used the “peach bisque”.I used
                    with primer all mu face and finished texture is good. At the
                    end for my latin tan skin a choose “golden peach” But is out
                    of stock the primer I think is a good match.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
