import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { sellerDetailApi } from "../../api/methods";

import userImage from "../../images/user_1.jpg";
import "./style.scss";

const UserBanner = ({ image, setBanner }) => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [sellerDetail, setSellerDetail] = useState({ users: [] });
  const { user } = useSelector((state) => state.user.data);

  const getSellerDetail = async () => {
    try {
      setLoading(true);
      const result = await sellerDetailApi({ slug });
      setSellerDetail(result.data.data);
      setBanner(result.data.data.users[0]?.banner_url);

      setLoading(false);
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    getSellerDetail();
  }, []);
  return (
    <>

      <article
        className="user-hero-section"
        style={{
          backgroundImage: `url("${
            sellerDetail?.users[0]?.banner_url
              ? sellerDetail?.users[0]?.banner_url
              : image
          }")`,
        }}
      >
              
            
      </article>
      {sellerDetail && (
        <article className="user-info-box">
          <img
            className="user-info-image"
            src={
              !sellerDetail?.users[0]?.private &&
              sellerDetail?.users[0]?.avatar_url
                ? sellerDetail?.users[0]?.avatar_url
                : user?.slug === sellerDetail?.users[0]?.slug &&
                  sellerDetail?.users[0]?.avatar_url
                ? sellerDetail?.users[0]?.avatar_url
                : userImage
            }
          />
          <div>
            <h6 className="user-info-subname">
              {sellerDetail?.users[0]?.user_name}
            </h6>
            {/* <h4 className="user-info-name">James</h4> */}
          </div>
          {/* <ul className="user-info-list">
            <li>
              <span className="key">Favorites</span>
              <span className="value">
                {sellerDetail.faved_count}
              </span>
            </li>
            <li>
              <span className="key">Owned</span>
              <span className="value">
                {sellerDetail.owned_count}
              </span>
            </li>
          </ul> */}
        </article>
      )}
    </>
  );
};

export default UserBanner;
