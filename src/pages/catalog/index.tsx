import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PopUpModal from "./Modal";
import { AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";
import useLogic from "./_Logic";
import { useEffect, useState } from "react";
import { Button, Loading, Row, Text } from "@nextui-org/react";

export default function CatalogPage() {
  const { loading, category, product, getProducts, getProductsByCategory } = useLogic();
  const [data, setData] = useState<any>([])


  const handleFilter = async (e: any) => {
    // console.log("CAT : ", e);

    await getProductsByCategory(e);
  }

  const handleResetFilter = async () => {
    getProducts()
  }

  useEffect(() => {
  }, [loading]);
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
                    {parseInt(product.length)}
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
                      <a className="dropdown-item" onClick={handleResetFilter}>
                               Reset Filter...
                              </a>
                              <hr />
                      {category
                        ? category.map((item: any, index: any) => {
                            return (
                              <a className="dropdown-item" onClick={() => handleFilter(item._id)}>
                                {item.name}
                              </a>
                            );
                          })
                        : null}
                      {/* <a className="dropdown-item" href="#">
                        Mug
                      </a>
                      <a className="dropdown-item" href="#">
                        Glass
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-7">
            <div className="container container-xl">
              <div className="row">
                {!loading ? (
                  product.map((item: any, index: any) => {
                    // console.log("ITEM : ", item);
                    return (
                      <div
                        key={index + 1}
                        className="col-xl-3 col-lg-4 col-md-6"
                      >
                        <div
                          className="card border-0 product mb-6"
                          // data-animate="fadeInUp"
                        >
                          <a href="/product">
                            <div className="position-relative">
                              <img src={item.prod_thumb} alt="Facial" />
                              {/* <div className="card-img-overlay d-flex p-3">
                        <div>
                          <span className="badge badge-primary">-20%</span>
                        </div>
                      </div> */}
                            </div>
                            <div className="card-body pt-4 text-center">
                              <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                                {/* <span className="fs-13 font-weight-500 text-decoration-through text-body pr-1">
                                $39.00
                              </span> */}
                                <span>
                                  Rp{" "}
                                  {parseInt(item.prod_price).toLocaleString(
                                    "id"
                                  )}
                                </span>
                              </p>
                              <h2 className="card-title fs-15 font-weight-500 mb-2">
                                {item.prod_category}
                              </h2>
                              <div className="d-flex text-muted align-items-center justify-content-center flex-wrap">
                                <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                                  {parseInt(item.prod_sell).toLocaleString(
                                    "id"
                                  )}
                                  <AiOutlineShoppingCart
                                    style={{ marginBottom: 2 }}
                                  />
                                </span>
                                <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                                  {parseInt(item.prod_see).toLocaleString("id")}{" "}
                                  <AiOutlineEye style={{ marginBottom: 2 }} />
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <>
                    <Row justify="center" css={{ mb: 4 }}>
                      <Loading type="spinner" size="xl" />
                    </Row>
                  </>
                )}
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
