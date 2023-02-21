import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import useQuery from "../hook/useQuery";

const Terms = () => {
  const query = useQuery();
  const hide = query.get("hide");
  return (
    <>
      <Header
        title="liven Science"
        description="Natural Medicine. Sign up now!"
        //image="https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"
      />
      <main className="main single-product">
        <div className="page-content">
          <div className="container-fluid p-0">
            <div
              class="page-header pl-4 pr-4"
              style={{ background: "#7ea4b1" }}>
              <h1 class="page-title font-weight-bold lh-1 text-white text-capitalize">
                Terms & Condition
              </h1>
            </div>
            <div class="page-content mt-10 pt-10">
              <section class="customer-section pb-10">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-md-12 mb-4">
                      <h3 class="section-title lh-1 font-weight-bold">
                        Terms & Condition
                      </h3>
                      <p class="section-desc text-grey">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. Lorem Ipsum
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. Lorem Ipsum
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
