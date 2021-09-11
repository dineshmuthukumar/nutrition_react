import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import Header from "../components/header";
import ClientCard from "./../components/clientcard";

const Home = () => {
  const cookies = new Cookies();
  useEffect(() => {
    console.log(cookies.get("base_user_token"));
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="text-center mt-5 mb-5">
          Never miss a drop. Sign up now!
        </h1>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <ClientCard
              title="AB NFT 1"
              desc="Some quick example text to build on the card title and make up the bulk of the card's content."
              imgUrl={
                "https://i.pinimg.com/originals/93/2a/88/932a88d96ca31d447044a8041bf8d100.png"
              }
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <ClientCard
              title="AB NFT 2"
              desc="Some quick example text to build on the card title and make up the bulk of the card's content."
              imgUrl={
                "https://a10.gaanacdn.com/gn_img/albums/81l3Mye3rM/1l3MeE9y3r/size_l.jpg"
              }
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <ClientCard
              title="AB NFT 3"
              desc="Some quick example text to build on the card title and make up the bulk of the card's content."
              imgUrl={
                "https://thumbor.forbes.com/thumbor/400x400/https://specials-images.forbesimg.com/imageserve/477725460/960x960.jpg?fit=scale&background=000000"
              }
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <ClientCard
              title="AB NFT 4"
              desc="Some quick example text to build on the card title and make up the bulk of the card's content."
              imgUrl={
                "https://cdn.twistarticle.com/wp-content/uploads/2020/07/big-b-opens-up-on-silence-uncertainty-from-covid-ward.jpg"
              }
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <ClientCard
              title="AB NFT 5"
              desc="Some quick example text to build on the card title and make up the bulk of the card's content."
              imgUrl={
                "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/53/97/2e/53972e10-82d1-bfb4-811b-e01e9614410a/8903245151105_cover.jpg/400x400cc.jpg"
              }
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <ClientCard
              title="AB NFT 6"
              desc="Some quick example text to build on the card title and make up the bulk of the card's content."
              imgUrl={
                "https://canvs-prod.s3-ap-southeast-1.amazonaws.com/media/artwork/9cfe9233-3ba9-4e04-bc1f-21cc17487bea.png"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
