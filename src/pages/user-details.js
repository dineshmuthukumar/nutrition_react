import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import UserBanner from "../components/user-banner";
import UserDetailsBlock from "../components/user-details-block";

import UserBannerImage from "../images/user-banner.png";

const UserDetails = () => {
  return (
    <>
      <Header />
      <main>
        <UserBanner image={UserBannerImage} />
        <UserDetailsBlock />
      </main>
      <Footer />
    </>
  );
};

export default UserDetails;
