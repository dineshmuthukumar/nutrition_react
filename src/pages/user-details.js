import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import UserBanner from "../components/user-banner";
import UserDetailsBlock from "../components/user-details-block";

const UserDetails = () => {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Header />
      <main>
        <UserBanner />
        <UserDetailsBlock />
      </main>
      <Footer />
    </>
  );
};

export default UserDetails;
