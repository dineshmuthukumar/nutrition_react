import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import UserBanner from "../components/user-banner";
import UserDetailsBlock from "../components/user-details-block";

import UserBannerImage from "../images/user-banner.png";

const UserDetails = () => {
  const [banner, setBanner] = useState();
  return (
    <>
      <Header />
      <main>
        <UserBanner image={banner ? banner : UserBannerImage} setBanner={setBanner} />
        <UserDetailsBlock setBanner={setBanner} />
      </main>
      <Footer />
    </>
  );
};

export default UserDetails;
