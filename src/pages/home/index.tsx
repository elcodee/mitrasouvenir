import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PopUpModal from "./Modal";
import { AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";

export default function HomePage() {
  return (
    <>
      <div>
        <Header />

        <main id="content">
          <section
            className="slick-slider slider mx-0"
            data-slick-options='{"slidesToShow": 1,"infinite":true,"autoplay":true,"dots":false,"arrows":false,"fade":true,"cssEase":"ease-in-out","speed":600}'
          >
            <div className="box px-0">
              <div
                className="bg-img-cover-center py-12 py-lg-17"
                style={{
                  backgroundImage:
                    'url("https://files.elcodee.com/mitrasouvenir/images/bg-slider-01.jpg")',
                }}
              >
                <div className="container container-xl pt-6 pb-7">
                  <div data-animate="fadeInDown">
                    <p className="text-secondary mb-5 text-uppercase font-weight-600">
                      Essenstial Items
                    </p>
                    <h1 className="mb-4 fs-56 lh-128">
                      Beauty Inspired <br />
                      by Real Life
                    </h1>
                    <p
                      className="fs-18 lh-166 mb-7"
                      style={{ maxWidth: "454px" }}
                    >
                      Made using clean, non-toxic ingredients, our products are
                      designed for everyone.
                    </p>
                  </div>
                  <a
                    href="/"
                    className="btn btn-secondary rounded bg-hover-primary border-0"
                    data-animate="fadeInUp"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="box px-0">
              <div
                className="bg-img-cover-center py-12 py-lg-17"
                style={{
                  backgroundImage:
                    'url("https://files.elcodee.com/mitrasouvenir/images/bg-slider-02.jpg")',
                }}
              >
                <div className="container container-xl pt-6 pb-7">
                  <div data-animate="fadeInDown">
                    <p className="text-secondary mb-5 text-uppercase font-weight-600">
                      New collection
                    </p>
                    <h1 className="mb-4 fs-56 lh-128">
                      Get The Perfectly <br />
                      Hydrated Skin
                    </h1>
                    <p
                      className="fs-18 lh-166 mb-7"
                      style={{ maxWidth: "454px" }}
                    >
                      Made using clean, non-toxic ingredients, our products are
                      designed for everyone.
                    </p>
                  </div>
                  <a
                    href="/"
                    className="btn btn-secondary rounded bg-hover-primary border-0"
                    data-animate="fadeInUp"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="box px-0">
              <div
                className="bg-img-cover-center py-12 py-lg-17"
                style={{
                  backgroundImage:
                    'url("https://files.elcodee.com/mitrasouvenir/images/bg-slider-03.jpg")',
                }}
              >
                <div className="container container-xl pt-6 pb-7">
                  <div data-animate="fadeInDown">
                    <p className="text-secondary mb-5 text-uppercase font-weight-600">
                      Get the glow
                    </p>
                    <h1 className="mb-4 fs-56 lh-128">
                      Be Your
                      <br />
                      Kind of Beauty
                    </h1>
                    <p
                      className="fs-18 lh-166 mb-7"
                      style={{ maxWidth: "454px" }}
                    >
                      Made using clean, non-toxic ingredients, our products are
                      designed for everyone.
                    </p>
                  </div>
                  <a
                    href="/"
                    className="btn btn-secondary rounded bg-hover-primary border-0"
                    data-animate="fadeInUp"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-11 pb-xl-9 pb-5">
            <div className="container container-xl">
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div
                    className="card bg-transparent border-0 align-items-center text-center mb-xl-0 mb-6"
                    data-animate="fadeInUp"
                  >
                    <div className="card-img">
                      <svg className="icon icon-box-01 fs-70 text-primary">
                        <use xlinkHref="#icon-box-01" />
                      </svg>
                    </div>
                    <div className="card-body text-center">
                      <h3 className="card-title fs-20 mb-2">Free Shipping</h3>
                      <p className="cart-text fs-18 mb-0">
                        Free Shipping for orders over $130
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div
                    className="card bg-transparent border-0 align-items-center text-center mb-xl-0 mb-6"
                    data-animate="fadeInUp"
                  >
                    <div className="card-img">
                      <svg className="icon icon-box-02 fs-70 text-primary">
                        <use xlinkHref="#icon-box-02" />
                      </svg>
                    </div>
                    <div className="card-body text-center">
                      <h3 className="card-title fs-20 mb-2">Returns</h3>
                      <p className="cart-text fs-18 mb-0">
                        Within 30 days for an exchange.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div
                    className="card bg-transparent border-0 align-items-center text-center mb-xl-0 mb-6"
                    data-animate="fadeInUp"
                  >
                    <div className="card-img">
                      <svg className="icon icon-box-03 fs-70 text-primary">
                        <use xlinkHref="#icon-box-03" />
                      </svg>
                    </div>
                    <div className="card-body text-center">
                      <h3 className="card-title fs-20 mb-2">Online Support</h3>
                      <p className="cart-text fs-18 mb-0">
                        24 hours a day, 7 days a week
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div
                    className="card bg-transparent border-0 align-items-center text-center mb-xl-0 mb-6"
                    data-animate="fadeInUp"
                  >
                    <div className="card-img">
                      <svg className="icon icon-box-04 fs-70 text-primary">
                        <use xlinkHref="#icon-box-04" />
                      </svg>
                    </div>
                    <div className="card-body text-center">
                      <h3 className="card-title fs-20 mb-2">
                        Flexible Payment
                      </h3>
                      <p className="cart-text fs-18 mb-0">
                        Pay with Multiple Credit Cards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-md-11 pt-9">
            <div className="container container-xl">
              <h2 className="text-center mb-3" data-animate="fadeInUp">
                Our Featured Products
              </h2>
              <p className="mb-9 fs-18 text-center" data-animate="fadeInUp">
                Get the skin you want to feel
              </p>
              <div
                className="slick-slider mx-n2"
                data-slick-options='{"slidesToShow": 4,"dots":false,"arrows":true,"responsive":[{"breakpoint": 1368,"settings": {"arrows":false,"dots":true}},{"breakpoint": 1200,"settings": {"slidesToShow":3,"arrows":false,"dots":true}},{"breakpoint": 992,"settings": {"slidesToShow":2,"arrows":false,"dots":true}},{"breakpoint": 768,"settings": {"slidesToShow": 2,"arrows":false,"dots":true}},{"breakpoint": 576,"settings": {"slidesToShow": 1,"arrows":false,"dots":true}}]}'
              >
                <div className="box">
                  <div
                    className="card border-0 product"
                    data-animate="fadeInUp"
                  >
                    <div className="position-relative">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/product-01.jpg"
                        alt="Facial cleanser"
                      />
                      <div className="card-img-overlay d-flex p-3">
                        <div>
                          <span className="badge badge-primary">-20%</span>
                        </div>
                        <div className="my-auto w-100 content-change-vertical">
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="View products"
                            className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                          >
                            <svg className="icon icon-shopping-bag-open-light fs-24">
                              <use xlinkHref="#icon-shopping-bag-open-light" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick view"
                            className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                          >
                            <span data-toggle="modal" data-target="#quick-view">
                              <svg className="icon icon-eye-light fs-24">
                                <use xlinkHref="#icon-eye-light" />
                              </svg>
                            </span>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to wishlist"
                            className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                          >
                            <svg className="icon icon-star-light fs-24">
                              <use xlinkHref="#icon-star-light" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                            className="add-to-compare ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle"
                          >
                            <svg className="icon icon-arrows-left-right-light fs-24">
                              <use xlinkHref="#icon-arrows-left-right-light" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-4 text-center">
                      <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                        <span className="fs-13 font-weight-500 text-decoration-through text-body pr-1">
                          $39.00
                        </span>
                        <span>$29.00</span>
                      </p>
                      <h2 className="card-title fs-15 font-weight-500 mb-2">
                        <a href="/">Facial cleanser</a>
                      </h2>
                      <div className="d-flex align-items-center justify-content-center flex-wrap">
                      <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          20 <AiOutlineShoppingCart style={{ marginBottom: 2}} />
                        </span>
                        <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          180 <AiOutlineEye style={{ marginBottom: 2}} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div
                    className="card border-0 product"
                    data-animate="fadeInUp"
                  >
                    <div className="position-relative">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/product-02.jpg"
                        alt="Bio-shroom Rejuvenating Serum"
                      />
                      <div className="card-img-overlay d-flex p-3">
                        <div />
                        <div className="my-auto w-100 content-change-vertical">
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="View products"
                            className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                          >
                            <svg className="icon icon-shopping-bag-open-light fs-24">
                              <use xlinkHref="#icon-shopping-bag-open-light" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick view"
                            className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                          >
                            <span data-toggle="modal" data-target="#quick-view">
                              <svg className="icon icon-eye-light fs-24">
                                <use xlinkHref="#icon-eye-light" />
                              </svg>
                            </span>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to wishlist"
                            className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                          >
                            <svg className="icon icon-star-light fs-24">
                              <use xlinkHref="#icon-star-light" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                            className="add-to-compare ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle"
                          >
                            <svg className="icon icon-arrows-left-right-light fs-24">
                              <use xlinkHref="#icon-arrows-left-right-light" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-4 text-center">
                      <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                        <span>$29.00</span>
                      </p>
                      <h2 className="card-title fs-15 font-weight-500 mb-2">
                        <a href="/">
                          Bio-shroom Rejuvenating Serum
                        </a>
                      </h2>
                      <div className="d-flex align-items-center justify-content-center flex-wrap">
                      <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          20 <AiOutlineShoppingCart style={{ marginBottom: 2}} />
                        </span>
                        <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          180 <AiOutlineEye style={{ marginBottom: 2}} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div
                    className="card border-0 product"
                    data-animate="fadeInUp"
                  >
                    <div className="position-relative">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/product-03.jpg"
                        alt="Coffee Bean Caffeine Eye Cream"
                      />
                      <div className="card-img-overlay d-flex p-3">
                        <div>
                          <span className="badge badge-warning">New</span>
                        </div>
                        <div className="my-auto w-100 content-change-vertical">
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="View products"
                            className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                          >
                            <svg className="icon icon-shopping-bag-open-light fs-24">
                              <use xlinkHref="#icon-shopping-bag-open-light" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick view"
                            className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                          >
                            <span data-toggle="modal" data-target="#quick-view">
                              <svg className="icon icon-eye-light fs-24">
                                <use xlinkHref="#icon-eye-light" />
                              </svg>
                            </span>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to wishlist"
                            className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                          >
                            <svg className="icon icon-star-light fs-24">
                              <use xlinkHref="#icon-star-light" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                            className="add-to-compare ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle"
                          >
                            <svg className="icon icon-arrows-left-right-light fs-24">
                              <use xlinkHref="#icon-arrows-left-right-light" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-4 text-center">
                      <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                        <span>$29.00</span>
                      </p>
                      <h2 className="card-title fs-15 font-weight-500 mb-2">
                        <a href="/">
                          Coffee Bean Caffeine Eye Cream
                        </a>
                      </h2>
                      <div className="d-flex align-items-center justify-content-center flex-wrap">
                      <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          20 <AiOutlineShoppingCart style={{ marginBottom: 2}} />
                        </span>
                        <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          180 <AiOutlineEye style={{ marginBottom: 2}} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div
                    className="card border-0 product"
                    data-animate="fadeInUp"
                  >
                    <div className="position-relative">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/product-04.jpg"
                        alt="Coffee Bean Caffeine Eye Cream"
                      />
                      <div className="card-img-overlay d-flex p-3">
                        <div>
                          <span className="badge badge-primary">-20%</span>
                        </div>
                        <div className="my-auto w-100 content-change-vertical">
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="View products"
                            className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                          >
                            <svg className="icon icon-shopping-bag-open-light fs-24">
                              <use xlinkHref="#icon-shopping-bag-open-light" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick view"
                            className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                          >
                            <span data-toggle="modal" data-target="#quick-view">
                              <svg className="icon icon-eye-light fs-24">
                                <use xlinkHref="#icon-eye-light" />
                              </svg>
                            </span>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to wishlist"
                            className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                          >
                            <svg className="icon icon-star-light fs-24">
                              <use xlinkHref="#icon-star-light" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                            className="add-to-compare ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle"
                          >
                            <svg className="icon icon-arrows-left-right-light fs-24">
                              <use xlinkHref="#icon-arrows-left-right-light" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-4 text-center">
                      <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                        <span className="fs-13 font-weight-500 text-decoration-through text-body pr-1">
                          $39.00
                        </span>
                        <span>$29.00</span>
                      </p>
                      <h2 className="card-title fs-15 font-weight-500 mb-2">
                        <a href="/">
                          Coffee Bean Caffeine Eye Cream
                        </a>
                      </h2>
                      <div className="d-flex align-items-center justify-content-center flex-wrap">
                      <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          20 <AiOutlineShoppingCart style={{ marginBottom: 2}} />
                        </span>
                        <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          180 <AiOutlineEye style={{ marginBottom: 2}} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div
                    className="card border-0 product"
                    data-animate="fadeInUp"
                  >
                    <div className="position-relative">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/product-05.jpg"
                        alt="Facial cleanser"
                      />
                      <div className="card-img-overlay d-flex p-3">
                        <div />
                        <div className="my-auto w-100 content-change-vertical">
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="View products"
                            className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                          >
                            <svg className="icon icon-shopping-bag-open-light fs-24">
                              <use xlinkHref="#icon-shopping-bag-open-light" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick view"
                            className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                          >
                            <span data-toggle="modal" data-target="#quick-view">
                              <svg className="icon icon-eye-light fs-24">
                                <use xlinkHref="#icon-eye-light" />
                              </svg>
                            </span>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to wishlist"
                            className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                          >
                            <svg className="icon icon-star-light fs-24">
                              <use xlinkHref="#icon-star-light" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                            className="add-to-compare ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle"
                          >
                            <svg className="icon icon-arrows-left-right-light fs-24">
                              <use xlinkHref="#icon-arrows-left-right-light" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-4 text-center">
                      <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                        <span>$29.00</span>
                      </p>
                      <h2 className="card-title fs-15 font-weight-500 mb-2">
                        <a href="/">Facial cleanser</a>
                      </h2>
                      <div className="d-flex align-items-center justify-content-center flex-wrap">
                      <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          20 <AiOutlineShoppingCart style={{ marginBottom: 2}} />
                        </span>
                        <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                          180 <AiOutlineEye style={{ marginBottom: 2}} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-9 pt-lg-10">
            <div className="container container-xl">
              <div className="row">
                <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                  <div
                    className="card border-0 banner banner-01 hover-zoom-in hover-shine"
                    data-animate="fadeInUp"
                  >
                    <div
                      className="card-img bg-img-cover-center"
                      style={{
                        backgroundImage:
                          'url("https://files.elcodee.com/mitrasouvenir/images/banner-01.jpg")',
                      }}
                    />
                    <div className="card-img-overlay d-inline-flex flex-column p-6 p-md-8">
                      <h6 className="card-subtitle mb-2 text-secondary letter-spacing-01">
                        NEW COLLECTION
                      </h6>
                      <h3
                        className="card-title fs-34 lh-129"
                        style={{ maxWidth: "310px" }}
                      >
                        Intensive Glow C+ Serum
                      </h3>
                      <div className="mt-4">
                        <a
                          href="#"
                          className="fs-16 font-weight-600 btn text-secondary hover-white bg-white bg-hover-secondary shadow-1"
                        >
                          Explore More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div
                    className="card border-0 banner banner-01 hover-zoom-in hover-shine"
                    data-animate="fadeInUp"
                  >
                    <div
                      className="card-img bg-img-cover-center"
                      style={{
                        backgroundImage:
                          'url("https://files.elcodee.com/mitrasouvenir/images/banner-02.jpg")',
                      }}
                    />
                    <div className="card-img-overlay d-inline-flex flex-column p-6 p-md-8">
                      <h3 className="card-title fs-34 lh-129 mb-2">
                        25% off Everything
                      </h3>
                      <p
                        className="card-text text-secondary font-weight-500"
                        style={{ maxWidth: "236px" }}
                      >
                        Makeup with extended range in colors for every human.
                      </p>
                      <div className="mt-2">
                        <a
                          href="shop-page-01.html"
                          className="fs-16 font-weight-600 btn text-secondary hover-white bg-white bg-hover-secondary shadow-1"
                        >
                          Shop Sale
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section
            className="py-lg-13 py-11"
            style={{ backgroundColor: "#edf1f0" }}
          >
            <div className="container container-xl">
              <h2 className="text-center mb-8">As seen in</h2>
              <div
                className="slick-slider"
                data-slick-options='{"slidesToShow": 3,"dots":false,"arrows":false,"responsive":[{"breakpoint": 992,"settings": {"slidesToShow": 2,"dots":true}},{"breakpoint": 768,"settings": {"slidesToShow": 2,"dots":true}},{"breakpoint": 576,"settings": {"slidesToShow": 1,"dots":true}}]}'
              >
                <div className="box">
                  <div
                    className="card border-0 bg-transparent"
                    data-animate="fadeInUp"
                  >
                    <div className="card-body px-3 py-0 text-center">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/testimonial-03.png"
                        alt="testimonial 03"
                        className="mb-3 w-auto mx-auto"
                      />
                      <p className="card-text fs-20 font-weight-600 font-weight-600 text-secondary mx-xl-6">
                        “Also the customer service is phenomenal. I would
                        purchase again.“
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div
                    className="card border-0 bg-transparent"
                    data-animate="fadeInUp"
                  >
                    <div className="card-body px-3 py-0 text-center">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/testimonial-02.png"
                        alt="testimonial 02"
                        className="mb-3 w-auto mx-auto"
                      />
                      <p className="card-text fs-20 font-weight-600 font-weight-600 text-secondary mx-xl-6">
                        “Great product line. Very attentive staff to deal with.“
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div
                    className="card border-0 bg-transparent"
                    data-animate="fadeInUp"
                  >
                    <div className="card-body px-3 py-0 text-center">
                      <img
                        src="https://files.elcodee.com/mitrasouvenir/images/testimonial-01.png"
                        alt="testimonial 01"
                        className="mb-3 w-auto mx-auto"
                      />
                      <p className="card-text fs-20 font-weight-600 font-weight-600 text-secondary mx-xl-6">
                        “Looking to affordably upgrade your everyday dinnerware?
                        Look no further than e.Space“
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section>
            <div className="container container-xl">
              <div className="row mt-10 mt-lg-13 mb-6">
                <div className="col-12 text-center">
                  <h2 className="mb-3" data-animate="fadeInUp">
                    Customer Favorite Beauty Essentials
                  </h2>
                  <p
                    className="fs-18 mx-auto lh-166"
                    style={{ maxWidth: "462px" }}
                    data-animate="fadeInUp"
                  >
                    Made using clean, non-toxic ingredients, our products are
                    designed for everyone.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 mb-8 mb-lg-0">
                  <div
                    className="card border-0 hover-shine hover-zoom-in banner banner-04"
                    data-animate="fadeIn"
                  >
                    <div
                      className="card-img bg-img-cover-center"
                      style={{
                        backgroundImage:
                          'url("https://files.elcodee.com/mitrasouvenir/images/banner-33.jpg")',
                      }}
                    />
                    <div className="card-img-overlay d-inline-flex flex-column justify-content-end p-8">
                      <h2 className="mb-3 text-white">Empower Yourself</h2>
                      <p className="card-title fs-18 text-white mb-6">
                        Get the skin you want to feel
                      </p>
                      <div>
                        <a
                          href="#"
                          className="fs-16 font-weight-600 btn text-secondary hover-white bg-white bg-hover-secondary shadow-1"
                        >
                          Explore More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-md-4 col-sm-6 mb-3">
                      <div
                        className="card border-0 product"
                        data-animate="fadeInUp"
                      >
                        <div className="position-relative">
                          <img
                            src="https://files.elcodee.com/mitrasouvenir/images/product-01.jpg"
                            alt="Facial cleanser"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div>
                              <span className="badge badge-primary">-20%</span>
                            </div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="View products"
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                              >
                                <svg className="icon icon-shopping-bag-open-light fs-24">
                                  <use xlinkHref="#icon-shopping-bag-open-light" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Quick view"
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <svg className="icon icon-eye-light fs-24">
                                    <use xlinkHref="#icon-eye-light" />
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Add to wishlist"
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                              >
                                <svg className="icon icon-star-light fs-24">
                                  <use xlinkHref="#icon-star-light" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Compare"
                                className="add-to-compare ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle"
                              >
                                <svg className="icon icon-arrows-left-right-light fs-24">
                                  <use xlinkHref="#icon-arrows-left-right-light" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span className="fs-13 font-weight-500 text-decoration-through text-body">
                              $39.00
                            </span>
                            <span>$29.00</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="/">Facial cleanser</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3">
                      <div
                        className="card border-0 product"
                        data-animate="fadeInUp"
                      >
                        <div className="position-relative">
                          <img
                            src="https://files.elcodee.com/mitrasouvenir/images/product-02.jpg"
                            alt="Bio-shroom Rejuvenating Serum"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div />
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="View products"
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                              >
                                <svg className="icon icon-shopping-bag-open-light fs-24">
                                  <use xlinkHref="#icon-shopping-bag-open-light" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Quick view"
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <svg className="icon icon-eye-light fs-24">
                                    <use xlinkHref="#icon-eye-light" />
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Add to wishlist"
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                              >
                                <svg className="icon icon-star-light fs-24">
                                  <use xlinkHref="#icon-star-light" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Compare"
                                className="add-to-compare ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle"
                              >
                                <svg className="icon icon-arrows-left-right-light fs-24">
                                  <use xlinkHref="#icon-arrows-left-right-light" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span>$29.00</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="/">
                              Bio-shroom Rejuvenating Serum
                            </a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3">
                      <div
                        className="card border-0 product"
                        data-animate="fadeInUp"
                      >
                        <div className="position-relative">
                          <img
                            src="https://files.elcodee.com/mitrasouvenir/images/product-06.jpg"
                            alt="Coffee Bean Caffeine Eye Cream"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div />
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="View products"
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                              >
                                <svg className="icon icon-shopping-bag-open-light fs-24">
                                  <use xlinkHref="#icon-shopping-bag-open-light" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Quick view"
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <svg className="icon icon-eye-light fs-24">
                                    <use xlinkHref="#icon-eye-light" />
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Add to wishlist"
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                              >
                                <svg className="icon icon-star-light fs-24">
                                  <use xlinkHref="#icon-star-light" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Compare"
                                className="add-to-compare ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle"
                              >
                                <svg className="icon icon-arrows-left-right-light fs-24">
                                  <use xlinkHref="#icon-arrows-left-right-light" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span>$29.00</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="/">
                              Coffee Bean Caffeine Eye Cream
                            </a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3">
                      <div
                        className="card border-0 product"
                        data-animate="fadeInUp"
                      >
                        <div className="position-relative">
                          <img
                            src="https://files.elcodee.com/mitrasouvenir/images/product-03.jpg"
                            alt="Coffee Bean Caffeine Eye Cream"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div />
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="View products"
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                              >
                                <svg className="icon icon-shopping-bag-open-light fs-24">
                                  <use xlinkHref="#icon-shopping-bag-open-light" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Quick view"
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <svg className="icon icon-eye-light fs-24">
                                    <use xlinkHref="#icon-eye-light" />
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Add to wishlist"
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                              >
                                <svg className="icon icon-star-light fs-24">
                                  <use xlinkHref="#icon-star-light" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Compare"
                                className="add-to-compare ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle"
                              >
                                <svg className="icon icon-arrows-left-right-light fs-24">
                                  <use xlinkHref="#icon-arrows-left-right-light" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span>$29.00</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="/">
                              Coffee Bean Caffeine Eye Cream
                            </a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3">
                      <div
                        className="card border-0 product"
                        data-animate="fadeInUp"
                      >
                        <div className="position-relative">
                          <img
                            src="https://files.elcodee.com/mitrasouvenir/images/product-07.jpg"
                            alt="Facial cleanser"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div>
                              <span className="badge badge-primary">-20%</span>
                            </div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="View products"
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                              >
                                <svg className="icon icon-shopping-bag-open-light fs-24">
                                  <use xlinkHref="#icon-shopping-bag-open-light" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Quick view"
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <svg className="icon icon-eye-light fs-24">
                                    <use xlinkHref="#icon-eye-light" />
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Add to wishlist"
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                              >
                                <svg className="icon icon-star-light fs-24">
                                  <use xlinkHref="#icon-star-light" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Compare"
                                className="add-to-compare ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle"
                              >
                                <svg className="icon icon-arrows-left-right-light fs-24">
                                  <use xlinkHref="#icon-arrows-left-right-light" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span className="fs-13 font-weight-500 text-decoration-through text-body">
                              $39.00
                            </span>
                            <span>$29.00</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="/">Facial cleanser</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3">
                      <div
                        className="card border-0 product"
                        data-animate="fadeInUp"
                      >
                        <div className="position-relative">
                          <img
                            src="https://files.elcodee.com/mitrasouvenir/images/product-08.jpg"
                            alt="Coffee Bean Caffeine Eye Cream"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div>
                              <span className="badge badge-warning">New</span>
                            </div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="View products"
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                              >
                                <svg className="icon icon-shopping-bag-open-light fs-24">
                                  <use xlinkHref="#icon-shopping-bag-open-light" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Quick view"
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <svg className="icon icon-eye-light fs-24">
                                    <use xlinkHref="#icon-eye-light" />
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Add to wishlist"
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                              >
                                <svg className="icon icon-star-light fs-24">
                                  <use xlinkHref="#icon-star-light" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Compare"
                                className="add-to-compare ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle"
                              >
                                <svg className="icon icon-arrows-left-right-light fs-24">
                                  <use xlinkHref="#icon-arrows-left-right-light" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span>$29.00</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="/">
                              Coffee Bean Caffeine Eye Cream
                            </a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                              <li className="list-inline-item fs-12 text-primary mr-0">
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="pt-xxl-15 pb-lg-13 pt-6 pb-9">
            <div className="container container-xl">
              <h2 className="text-center mb-3" data-animate="fadeInUp">
                More to Discover
              </h2>
              <p
                className="mb-9 fs-18 text-center mx-auto"
                style={{ maxWidth: "530px" }}
                data-animate="fadeInUp"
              >
                Our bundles were designed to conveniently package your tanning
                essentials while saving you money.
              </p>
              <div className="row">
                <div className="col-md-6 mb-6 mb-md-0">
                  <div
                    className="card border-0 text-center hover-shine"
                    data-animate="fadeInUp"
                  >
                    <img
                      src="https://files.elcodee.com/mitrasouvenir/images/image-box-10.jpg"
                      alt="Summer Collection"
                    />
                    <div className="card-body px-0 pt-6 pb-0">
                      <h3 className="fs-24 mb-2">
                        <a href="#" className="text-decoration-none">
                          Summer Collection
                        </a>
                      </h3>
                      <a
                        href="shop-page-01.html"
                        className="btn btn-link text-secondary"
                      >
                        Shop now
                        <i className="far fa-arrow-right fs-12 pl-1" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-6 mb-md-0">
                  <div
                    className="card border-0 text-center hover-shine"
                    data-animate="fadeInUp"
                  >
                    <img
                      src="https://files.elcodee.com/mitrasouvenir/images/image-box-12.jpg"
                      alt="From Our Blog"
                    />
                    <div className="card-body px-0 pt-6 pb-0">
                      <h3 className="fs-24 mb-2">
                        <a href="#" className="text-decoration-none">
                          From Our Blog
                        </a>
                      </h3>
                      <a
                        href="blog-grid.html"
                        className="btn btn-link text-secondary"
                      >
                        Read more
                        <i className="far fa-arrow-right fs-12 pl-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="pb-6">
            <div className="container-fluid">
              <div
                className="slick-slider"
                data-slick-options='{"slidesToShow": 5,"infinite":false,"autoplay":true,"dots":false,"arrows":false,"responsive":[{"breakpoint": 1366,"settings": {"slidesToShow":5}},{"breakpoint": 992,"settings": {"slidesToShow":4}},{"breakpoint": 768,"settings": {"slidesToShow": 3}},{"breakpoint": 576,"settings": {"slidesToShow": 2}}]}'
              >
                <div className="box">
                  <a
                    href="#"
                    className="hover-zoom-in hover-shine d-block"
                    data-animate="fadeInUp"
                  >
                    <img
                      src="https://files.elcodee.com/mitrasouvenir/images/instagram-01.jpg"
                      alt="Instagram 01"
                    />
                  </a>
                </div>
                <div className="box">
                  <a
                    href="#"
                    className="hover-zoom-in hover-shine d-block"
                    data-animate="fadeInUp"
                  >
                    <img
                      src="https://files.elcodee.com/mitrasouvenir/images/instagram-02.jpg"
                      alt="Instagram 02"
                    />
                  </a>
                </div>
                <div className="box">
                  <a
                    href="#"
                    className="hover-zoom-in hover-shine d-block"
                    data-animate="fadeInUp"
                  >
                    <img
                      src="https://files.elcodee.com/mitrasouvenir/images/instagram-03.jpg"
                      alt="Instagram 03"
                    />
                  </a>
                </div>
                <div className="box">
                  <a
                    href="#"
                    className="hover-zoom-in hover-shine d-block"
                    data-animate="fadeInUp"
                  >
                    <img
                      src="https://files.elcodee.com/mitrasouvenir/images/instagram-04.jpg"
                      alt="Instagram 04"
                    />
                  </a>
                </div>
                <div className="box">
                  <a
                    href="#"
                    className="hover-zoom-in hover-shine d-block"
                    data-animate="fadeInUp"
                  >
                    <img
                      src="https://files.elcodee.com/mitrasouvenir/images/instagram-05.jpg"
                      alt="Instagram 05"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section> */}
        </main>

        <Footer />
        <PopUpModal />
      </div>
    </>
  );
}
