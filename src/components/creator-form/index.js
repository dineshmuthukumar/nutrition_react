import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

import InputText from "../input-text/index";
import InputPhone from "../input-phone/index";
import creator_bg from "../../images/creator_image.jpeg";
import { creatorApplicationApi } from "../../api/methods";
import {
  validateName,
  validateNameReplace,
  validateEmail,
  validInternationalPhone,
  validateURL,
} from "../../utils/common";

import "./style.scss";

const CreatorForm = () => {
  const sampleFileRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState({ file: null });
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const [register, setRegister] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_code: "",
    phone_no: "",
    facebook_link: "",
    instagram_link: "",
    linkedin_link: "",
    twitter_link: "",
    twitter_share_link: "",
    desc: "",
  });

  const [validation, setValidation] = useState({
    first_name: false,
    valid_first_name: false,
    last_name: false,
    valid_last_name: false,
    email: false,
    valid_email: false,
    phone_code: false,
    phone_no: false,
    valid_phone_no: false,
    facebook_link: false,
    valid_facebook_link: false,
    instagram_link: false,
    valid_instagram_link: false,
    linkedin_link: false,
    valid_linkedin_link: false,
    twitter_link: false,
    valid_twitter_link: false,
    twitter_share_link: false,
    valid_twitter_share_link: false,
    desc: false,
    asset: false,
  });

  const handleChangeEvent = (e) => {
    if (e.target.value) {
      if (e.target.name === "first_name" || e.target.name === "last_name") {
        if (validateName(e.target.value)) {
          setRegister({
            ...register,
            [e.target.name]: validateNameReplace(e.target.value),
          });
          setValidation({ ...validation, [e.target.name]: false });
        }
      } else {
        setRegister({ ...register, [e.target.name]: e.target.value });
        setValidation({ ...validation, [e.target.name]: false });
      }
    } else {
      setRegister({ ...register, [e.target.name]: e.target.value });
      setValidation({ ...validation, [e.target.name]: true });
    }
  };

  const checkValidation = () => {
    let c_validation = { ...validation };
    if (!register.first_name) {
      c_validation = { ...c_validation, first_name: true };
    } else {
      if (validateName(register.first_name)) {
        c_validation = { ...c_validation, valid_first_name: false };
      } else {
        c_validation = { ...c_validation, valid_first_name: true };
      }
    }

    if (!register.last_name) {
      c_validation = { ...c_validation, last_name: true };
    } else {
      if (validateName(register.last_name)) {
        c_validation = { ...c_validation, valid_last_name: false };
      } else {
        c_validation = { ...c_validation, valid_last_name: true };
      }
    }
    if (!register.email) {
      c_validation = { ...c_validation, email: true };
    } else {
      if (validateEmail(register.email)) {
        c_validation = { ...c_validation, valid_email: false };
      } else {
        c_validation = { ...c_validation, valid_email: true };
      }
    }

    if (!register.phone_no) {
      c_validation = { ...c_validation, phone_no: true };
    } else {
      if (validInternationalPhone(register.phone_no, register.phone_code)) {
        c_validation = { ...c_validation, valid_phone_no: false };
      } else {
        c_validation = { ...c_validation, valid_phone_no: true };
      }
    }

    if (register.facebook_link) {
      if (!validateURL(register.facebook_link)) {
        c_validation = { ...c_validation, valid_facebook_link: true };
      } else {
        c_validation = { ...c_validation, valid_facebook_link: false };
      }
    } else {
      c_validation = { ...c_validation, facebook_link: true };
    }

    if (register.instagram_link) {
      if (!validateURL(register.instagram_link)) {
        c_validation = { ...c_validation, valid_instagram_link: true };
      } else {
        c_validation = { ...c_validation, valid_instagram_link: false };
      }
    } else {
      c_validation = { ...c_validation, instagram_link: true };
    }

    if (register.linkedin_link) {
      if (!validateURL(register.linkedin_link)) {
        c_validation = { ...c_validation, valid_linkedin_link: true };
      } else {
        c_validation = { ...c_validation, valid_linkedin_link: false };
      }
    } else {
      c_validation = { ...c_validation, linkedin_link: true };
    }

    if (register.twitter_link) {
      if (!validateURL(register.twitter_link)) {
        c_validation = { ...c_validation, valid_twitter_link: true };
      } else {
        c_validation = { ...c_validation, valid_twitter_link: false };
      }
    } else {
      c_validation = { ...c_validation, twitter_link: true };
    }

    if (register.twitter_share_link) {
      if (!validateURL(register.twitter_share_link)) {
        c_validation = { ...c_validation, valid_twitter_share_link: true };
      } else {
        c_validation = { ...c_validation, valid_twitter_share_link: false };
      }
    } else {
      c_validation = { ...c_validation, twitter_share_link: true };
    }

    if (!register.desc) {
      c_validation = { ...c_validation, desc: true };
    } else {
      c_validation = { ...c_validation, desc: false };
    }

    if (sampleFileRef.current.files.length == 0) {
      c_validation = { ...c_validation, asset: true };
    } else {
      c_validation = { ...c_validation, asset: false };
    }

    setValidation(c_validation);
    if (
      !c_validation.first_name &&
      !c_validation.valid_first_name &&
      !c_validation.last_name &&
      !c_validation.valid_last_name &&
      !c_validation.email &&
      !c_validation.valid_email &&
      !c_validation.phone_no &&
      !c_validation.valid_phone_no &&
      !c_validation.facebook_link &&
      !c_validation.valid_facebook_link &&
      !c_validation.instagram_link &&
      !c_validation.valid_instagram_link &&
      !c_validation.linkedin_link &&
      !c_validation.valid_linkedin_link &&
      !c_validation.twitter_link &&
      !c_validation.valid_twitter_link &&
      !c_validation.twitter_share_link &&
      !c_validation.valid_twitter_share_link &&
      !c_validation.desc &&
      !c_validation.asset
    ) {
      return true;
    } else {
      return false;
    }
  };
  const randomString = () => (Math.random() + 1).toString(36).substring(7);

  const handleSubmit = async () => {
    if (checkValidation()) {
      try {
        setLoading(true);

        const {
          email,
          first_name,
          last_name,
          phone_code,
          phone_no,
          facebook_link,
          instagram_link,
          twitter_link,
          linkedin_link,
          twitter_share_link,
          desc,
        } = register;

        var formData = new FormData();

        const myNewFile = new File([file.file], randomString(), {
          type: file.file.type,
        });

        formData.append("creator[asset]", myNewFile);
        formData.append("creator[first_name]", first_name);
        formData.append("creator[last_name]", last_name);
        formData.append("creator[email]", email);
        formData.append("creator[phone_code]", phone_code);
        formData.append("creator[phone_no]", phone_no);
        formData.append("creator[facebook_link]", facebook_link);
        formData.append("creator[instagram_link]", instagram_link);
        formData.append("creator[linkedin_link]", linkedin_link);
        formData.append("creator[twitter_link]", twitter_link);
        formData.append("creator[twitter_share_link]", twitter_share_link);
        formData.append("creator[desc]", desc);

        const result = await creatorApplicationApi(formData);

        if (result.status === 201) {
          setRegisterSuccess(true);
        }
      } catch (err) {
        setLoading(false);

        if (err?.status === 422) {
          setError(
            "This Email is already associated with a GuardianLink ID. Please Login or use a different email to register."
          );
        } else {
          toast.error("An unexpected error occured. Please try again ");
          console.log(
            "🚀 ~ file: index.js ~ line 106 ~ handleSignUp ~ err",
            err
          );
        }
      }

      setLoading(false);
    }
  };

  const handleFileChange = (input) => {
    for (let file of input.target.files) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFile({ ...file, file: file });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="creator-container">
      <div className="creator-block">
        <h2 className="mb-0"> Application Form</h2>

        {registerSuccess ? (
          <div className="success-msg-block">
            <h4>Success Acksldfjsd</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
        ) : (
          <>
            <InputText
              title="Please enter your email address"
              name="email"
              value={register.email}
              required={validation.email}
              onChange={handleChangeEvent}
            />
            {validation.valid_email && (
              <p className="error_text">Please enter a valid email address</p>
            )}
            <InputText
              title="Please enter your first name"
              name="first_name"
              value={register.first_name}
              required={validation.first_name}
              onChange={handleChangeEvent}
            />
            {validation.valid_first_name && (
              <p className="error_text">Please enter a valid first name</p>
            )}
            <InputText
              title="Please enter your last name"
              name="last_name"
              value={register.last_name}
              required={validation.last_name}
              onChange={handleChangeEvent}
            />
            {validation.valid_last_name && (
              <p className="error_text">Please enter a valid last name</p>
            )}
            <InputPhone
              title="Please enter your mobile number"
              value={register.phone_no}
              required={validation.phone_no}
              onChange={(e, c_code) => {
                setRegister({
                  ...register,
                  phone_no: e,
                  phone_code: c_code.countryCode.toUpperCase(),
                });
                if (e) {
                  setValidation({ ...validation, phone_no: false });
                } else {
                  setValidation({ ...validation, phone_no: true });
                }
              }}
            />
            {validation.valid_phone_no && (
              <p className="error_text">Please enter a valid mobile number</p>
            )}
            <InputText
              title="Please provide your facebook link"
              name="facebook_link"
              value={register.facebook_link}
              required={validation.facebook_link}
              onChange={handleChangeEvent}
            />
            {validation.valid_facebook_link && (
              <p className="error_text">Please enter a valid facebook link</p>
            )}
            <InputText
              title="Please provide your instagram link"
              name="instagram_link"
              value={register.instagram_link}
              required={validation.instagram_link}
              onChange={handleChangeEvent}
            />
            {validation.valid_instagram_link && (
              <p className="error_text">Please enter a valid instagram link</p>
            )}
            <InputText
              title="Please provide your linkedin link"
              name="linkedin_link"
              value={register.linkedin_link}
              required={validation.linkedin_link}
              onChange={handleChangeEvent}
            />
            {validation.valid_linkedin_link && (
              <p className="error_text">Please enter a valid linkedin link</p>
            )}
            <InputText
              title="Please provide your twitter link"
              name="twitter_link"
              value={register.twitter_link}
              required={validation.twitter_link}
              onChange={handleChangeEvent}
            />
            {validation.valid_twitter_link && (
              <p className="error_text">Please enter a valid twitter link</p>
            )}
            {/* <div>
          <label className="input-title">Registered with Guardian Link?</label>
          <div className="radio-grp d-flex mb-4">
            <label className="radio-btn" role="button">
              <input type="radio" name="registered" /> Yes
            </label>
            <label className="radio-btn" role="button">
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
              name="twitter_share_link"
              value={register.twitter_share_link}
              required={validation.twitter_share_link}
              onChange={handleChangeEvent}
            />
            {validation.valid_twitter_share_link && (
              <p className="error_text">Please enter a valid twitter link</p>
            )}
            <InputText
              title="Why do you wish to become an NFT Creator and your experience as a Creator?"
              rows={4}
              name="desc"
              value={register.desc}
              required={validation.desc}
              onChange={handleChangeEvent}
            />

            <div className="mt-4">
              <label className="input-title">
                Upload your samples (.zip) here{" "}
                {validation.asset && (
                  <small className="text-danger font-10">(Required)</small>
                )}
              </label>
              <input
                type="file"
                style={{ display: "none" }}
                ref={sampleFileRef}
                onChange={handleFileChange}
              />
              <div
                className={`file-upload ${validation.asset && "error"}`}
                role="button"
                onClick={() => sampleFileRef.current.click()}
              >
                <div className="choose-btn">
                  {sampleFileRef?.current?.files[0]?.name
                    ? sampleFileRef?.current?.files[0]?.name
                    : "Choose your sample file"}
                </div>
              </div>
            </div>
            <div className="btn-block text-center">
              <button
                className="submit-btn"
                disabled={loading}
                type="button"
                onClick={handleSubmit}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </>
        )}
        {/* <hr /> */}
      </div>
      <img className="bg_image" src={creator_bg} />
      <div className="heading-block">
        <h2>Join as a Creator</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>
    </div>
  );
};

export default CreatorForm;
