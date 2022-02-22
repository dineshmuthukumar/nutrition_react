import React, { useRef } from "react";
import "./style.scss";
import InputText from "../input-text/index";
import creator_bg from "../../images/creator_image.jpeg";
import InputPhone from "../input-phone/index";

const CreatorForm = () => {
  const sampleFileRef = useRef(null);
  return (
    <div className="creator-container">
      <h2>Creator Application</h2>
      <hr />
      <InputText title="Email address" />
      <InputText title="Please enter your first name" />
      <InputText title="Please enter your last name" />
      <InputPhone title="Phone number" />
      <InputText title="Please provide your facebook link" />

      <InputText title="Please provide your instagram link" />

      <InputText title="Please provide your linkedin link" />
      <InputText title="Please provide your twitter link" />

      {/* <div>
        <label className="input-title">Registered with Guardian Link?</label>
        <div className="d-flex mb-4">
          <label className="input-title form-control me-2" role="button">
            <input type="radio" name="registered" /> Yes
          </label>
          <label className="input-title form-control" role="button">
            <input type="radio" name="registered" /> No
          </label>
        </div>
      </div> */}
      {/* <InputText title="Please linked my Instagram profile." />
      <InputText title="Please linked my Facebook profile." />
      <InputText title="Please linked my Twitter profile." />
      <InputText title="Please updated my bio/description." /> */}

      <InputText
        placeholder="https://twitter.com/xxxx/xxxx/xxxxxxx"
        title="Please share with us the following tweet link from the connected Twitter
        handle to verify your authenticity. Copy and paste the link below"
        eg={`Tweet sample: "Hey @beyondlifeclub, I am looking for a Creator account to share my artwork with the community. Looking forward to getting verified.🤞 https://beyondlife.club"`}
      />

      <InputText
        title="Why do you wish to become an NFT Creator and your experience as a Creator?"
        rows={4}
      />

      <div>
        <label className="input-title">Upload your samples (.zip) here</label>
        <input type="file" style={{ display: "none" }} ref={sampleFileRef} />
        <div
          className="file-upload"
          role="button"
          onClick={() => sampleFileRef.current.click()}
        >
          <div className="choose-btn">Choose your sample file</div>
        </div>
      </div>

      <div className="btn-block text-center">
        <button className="submit-btn">Submit</button>
      </div>

      {/* <div className="success-msg-block">
        <h4>Success Acksldfjsd</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
      </div> */}

      <img className="bg_image" src={creator_bg} />
      <div className="heading-block">
        <h2>Join a Creator</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>
    </div>
  );
};

export default CreatorForm;
