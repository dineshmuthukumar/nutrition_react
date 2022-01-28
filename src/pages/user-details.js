import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/header";
import Footer from "../components/footer";
import UserBanner from "../components/user-banner";
import UserDetailsBlock from "../components/user-details-block";
import { userProfileDetailApi } from "../api/methods";

const UserDetails = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState({ users: [] });
  const { user } = useSelector((state) => state.user.data);

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    getSellerDetail();
  }, []);

  const getSellerDetail = async () => {
    try {
      setLoading(true);
      const result = await userProfileDetailApi({ slug });
      setUserDetail(result.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        <UserBanner userDetail={userDetail} />
        <UserDetailsBlock userDetail={userDetail} />
      </main>
      <Footer />
    </>
  );
};

export default UserDetails;
