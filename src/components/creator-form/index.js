import React from "react";
import "./style.scss";
import InputText from "../input-text/index";

const CreatorForm = () => {
  return (
    <div className="creator-container">
      <h2>Creator Application</h2>
      <hr />
      <InputText title="Email address" />
      <InputText title="Please enter your WazirX NFT account username." />
      <InputText title="Please updated the Cover picture" />
      <InputText title="Please updated my Profile picture." />
      <InputText title="Please updated my Name." />
      <InputText title="Please linked my Instagram profile." />
      <InputText title="Please linked my Facebook profile." />
      <InputText title="Please linked my Twitter profile." />
      <InputText title="Please updated my bio/description." />

      <InputText
        title="Please share with us the following tweet link from the connected Twitter
        handle to verify your authenticity. Copy and paste the link below"
      />

      <InputText title="Why do you wish to become an NFT Creator and your experience as a Creator?" />

      <div className="btn-block text-center">
        <button className="submit-btn">Submit</button>
      </div>

      <div className="success-msg-block">
        <h4>Success Acksldfjsd</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
      </div>
    </div>
  );
};

export default CreatorForm;
