import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import {
  Dropdown,
  Modal,
  Alert,
  ButtonGroup,
  ToggleButton as CustomToggle,
} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

import { useSelector, useDispatch } from "react-redux";
import InputPhone from "../../input-phone";
import "./styles.scss";
import Logo1 from "../../../images/banner-img.png";
import {
  validateEmail,
  validateName,
  validateNameReplace,
} from "../../../utils/common";
import InputText from "../../input-text";
import dayjs from "dayjs";
import {
  getCitiesApi,
  getStatesApi,
  UpdateProfileApi,
} from "../../../api/base-methods";
import { toast } from "react-toastify";

const Accountcomponent = () => {
  const user = useSelector((state) => state?.user);
  // console.log(user?.data, "user");
  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [stateList, setStateList] = useState({});
  const [cityList, setCityList] = useState({});

  const [profile, setProfile] = useState({
    name: user?.data?.name,
    email: user?.data?.email,
    dob: user?.data?.dob,
    gender: user?.data?.gender,
  });

  const [profileValidation, setProfileValidation] = useState({
    name: false,
    valid_name: false,
    email: false,
    valid_email: false,
    dob: false,
    valid_dob: false,
  });
  console.log(user?.data?.state?._id);

  const [address, setAddress] = useState({
    address: user?.data?.address,
    city: user?.data?.city?._id,
    state: user?.data?.state?._id,
    pincode: user?.data?.pincode,
  });

  const [addressValidation, setAddressValidation] = useState({
    address: false,
    valid_address: false,
    city: false,
    valid_city: false,
    state: false,
    valid_state: false,
    pincode: false,
    valid_pincode: false,
  });

  // useEffect(() => {

  //   getStatesList();

  // },[])}

  useEffect(async () => {
    getStatesList();
    setProfile({ ...address, state: user?.data?.state?._id });

    if (user?.data?.state?._id) {
      const CityListData = await getCitiesApi(user?.data?.state?._id);
      setCityList(CityListData?.data?.responseData?.cities);
      setProfile({ ...address, city: user?.data?.city?._id });
    }
    // console.log(cityList, "cityList");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStatesList = async () => {
    const StateListData = await getStatesApi();
    setStateList(StateListData?.data?.responseData?.states);
  };

  const handleChangeEvent = (e) => {
    if (e.target.value) {
      if (e.target.name === "name") {
        if (validateName(e.target.value)) {
          setProfile({
            ...profile,
            [e.target.name]: validateNameReplace(e.target.value),
          });
          setProfileValidation({
            ...profileValidation,
            [e.target.name]: false,
          });
        }
      } else if (e.target.name === "email") {
        setProfile({ ...profile, [e.target.name]: e.target.value.trim() });
        setProfileValidation({ ...profileValidation, [e.target.name]: false });
      } else {
        setProfile({ ...profile, [e.target.name]: e.target.value });
        setProfileValidation({ ...profileValidation, [e.target.name]: false });
      }
    } else {
      setProfile({ ...profile, [e.target.name]: e.target.value });
      setProfileValidation({ ...profileValidation, [e.target.name]: true });
    }
    console.log(profile, "Profile");
    console.log(profileValidation, "profileValidation");
  };

  const checkValidation = () => {
    let c_validation = { ...profileValidation };
    if (!profile.name) {
      c_validation = { ...c_validation, name: true };
    } else {
      if (validateName(profile.name)) {
        c_validation = { ...c_validation, valid_name: false };
      } else {
        c_validation = { ...c_validation, valid_name: true };
      }
    }

    if (!profile.email) {
      c_validation = { ...c_validation, email: true };
    } else {
      if (validateEmail(profile.email)) {
        c_validation = { ...c_validation, valid_email: false };
      } else {
        c_validation = { ...c_validation, valid_email: true };
      }
    }

    if (!profile.dob) {
      c_validation = { ...c_validation, dob: true };
    } else {
      c_validation = { ...c_validation, valid_dob: false };
    }

    if (!profile.gender) {
      c_validation = { ...c_validation, gender: true };
    } else {
      c_validation = { ...c_validation, valid_gender: false };
    }

    setProfileValidation(c_validation);
    if (
      !c_validation.name &&
      !c_validation.valid_name &&
      !c_validation.email &&
      !c_validation.valid_email &&
      !c_validation.dob &&
      !c_validation.valid_dob &&
      !c_validation.gender &&
      !c_validation.valid_gender
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleKeyPressEvent = (event) => {
    if (event.key === "Enter") {
      // handleSignUp();
    }
  };

  const handleProfileForm = async () => {
    if (checkValidation()) {
      // console.log(profile, "profile");
      let ProfileData = { ...profile };
      ProfileData.id = user?.data?._id;
      ProfileData.dob = dayjs(ProfileData.dob).format("DD-MM-YYYY");
      console.log(ProfileData);

      try {
        const result = await UpdateProfileApi(ProfileData);
        if (result.data.statusCode === 200) {
          toast.success("Profile Updated Sucessfully");
        }
        //console.log(result, "result");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleAddressChangeEvent = (e) => {
    if (e.target.value) {
      if (e.target.name === "name") {
        if (validateName(e.target.value)) {
          setAddress({
            ...address,
            [e.target.name]: validateNameReplace(e.target.value),
          });
          setAddressValidation({
            ...addressValidation,
            [e.target.name]: false,
          });
        }
      } else if (e.target.name === "email") {
        setAddress({ ...address, [e.target.name]: e.target.value.trim() });
        setAddressValidation({ ...addressValidation, [e.target.name]: false });
      } else {
        setAddress({ ...address, [e.target.name]: e.target.value });
        setAddressValidation({ ...addressValidation, [e.target.name]: false });
      }
    } else {
      setAddress({ ...address, [e.target.name]: e.target.value });
      setAddressValidation({ ...addressValidation, [e.target.name]: true });
    }
  };

  const checkAddressValidation = () => {
    let c_validation = { ...addressValidation };
    if (!address.address) {
      c_validation = { ...c_validation, address: true };
      // c_validation = { ...c_validation, valid_address: true };
    } else {
      c_validation = { ...c_validation, address: false };
    }

    if (!address.state) {
      c_validation = { ...c_validation, state: true };
      // c_validation = { ...c_validation, valid_state: true };
    } else {
      c_validation = { ...c_validation, state: false };
    }

    if (!address.city) {
      c_validation = { ...c_validation, city: true };
      // c_validation = { ...c_validation, valid_city: true };
    } else {
      c_validation = { ...c_validation, city: false };
    }

    if (!address.pincode) {
      c_validation = { ...c_validation, pincode: true };
      // c_validation = { ...c_validation, valid_pincode: true };
    } else {
      c_validation = { ...c_validation, pincode: false };
    }

    setAddressValidation(c_validation);
    if (
      !c_validation.address &&
      !c_validation.valid_address &&
      !c_validation.state &&
      !c_validation.valid_state &&
      !c_validation.city &&
      !c_validation.valid_city &&
      !c_validation.pincode &&
      !c_validation.valid_pincode
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleAddressKeyPressEvent = (event) => {
    if (event.key === "Enter") {
      // handleSignUp();
    }
  };

  const handleProfileAddressForm = async () => {
    // console.log(addressValidation, "addressValidation");
    if (checkAddressValidation() || checkValidation()) {
      let ProfileData = { ...profile, ...address };

      ProfileData.id = user?.data?._id;
      ProfileData.dob = dayjs(ProfileData.dob).format("DD-MM-YYYY");
      //console.log(ProfileData);

      try {
        const result = await UpdateProfileApi(ProfileData);
        if (result.data.statusCode === 200) {
          toast.success("Profile Updated Sucessfully");
        }
        console.log(result, "result");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleState = async (data) => {
    if (data?.target?.value) {
      setAddress({ ...address, state: data.target.value });
      const CityListData = await getCitiesApi(data.target.value);
      setCityList(CityListData?.data?.responseData?.cities);
      console.log(data?.target?.value, "data?.target?.value");
      setAddressValidation({ ...profileValidation, state: false });
    } else {
      setAddress({ ...address, state: "" });
      setAddressValidation({ ...profileValidation, state: true });
    }
  };
  return (
    <>
      <div className="profile_page">
        <Tab.Container id="left-tabs-example" defaultActiveKey="second">
          <Row>
            <Col sm={3} className="account_form_box">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="second">My Account</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="first">My Orders</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="third">Address</Nav.Link>
                </Nav.Item> */}
              </Nav>
            </Col>
            <Col sm={9} className="account_form_box">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div class="row product_banner_2 text-left">
                    <div class="col-sm-2">
                      <img src={Logo1} alt="logo" width="100" height="100" />
                    </div>
                    <div class="col-sm-4">
                      <p>Converse Training Shoes</p>
                    </div>
                    <div class="col-sm-3">
                      <p>$129.99</p>
                    </div>
                    <div class="col-sm-3">
                      <h4>
                        <i
                          class="fa fa-circle green_color_fa"
                          aria-hidden="true"
                        ></i>{" "}
                        Delivered on Oct 25
                      </h4>
                      <p>Your item has been delivered</p>
                    </div>
                  </div>
                  <div class="row product_banner_2 text-left">
                    <div class="col-sm-2">
                      <img src={Logo1} alt="logo" width="100" height="100" />
                    </div>
                    <div class="col-sm-4">
                      <p>Converse Training Shoes</p>
                    </div>
                    <div class="col-sm-3">
                      <p>$129.99</p>
                    </div>
                    <div class="col-sm-3">
                      <h4>
                        <i
                          class="fa fa-circle red_color_fa"
                          aria-hidden="true"
                        ></i>{" "}
                        Delivered on Oct 25
                      </h4>
                      <p>Your item has been delivered</p>
                    </div>
                  </div>
                  <div class="row product_banner_2 text-left">
                    <div class="col-sm-2">
                      <img src={Logo1} alt="logo" width="100" height="100" />
                    </div>
                    <div class="col-sm-4">
                      <p>Converse Training Shoes</p>
                    </div>
                    <div class="col-sm-3">
                      <p>$129.99</p>
                    </div>
                    <div class="col-sm-3">
                      <h4>
                        <i
                          class="fa fa-circle green_color_fa"
                          aria-hidden="true"
                        ></i>{" "}
                        Delivered on Oct 25
                      </h4>
                      <p>Your item has been delivered</p>
                    </div>
                  </div>
                  <div class="row product_banner_2 text-left">
                    <div class="col-sm-2">
                      <img src={Logo1} alt="logo" width="100" height="100" />
                    </div>
                    <div class="col-sm-4">
                      <p>Converse Training Shoes</p>
                    </div>
                    <div class="col-sm-3">
                      <p>$129.99</p>
                    </div>
                    <div class="col-sm-3">
                      <h4>
                        <i
                          class="fa fa-circle red_color_fa"
                          aria-hidden="true"
                        ></i>{" "}
                        Delivered on Oct 25
                      </h4>
                      <p>Your item has been delivered</p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {/* <form action="#" class="form"> */}
                  <Row>
                    <Col>
                      <h2 className="profile_heading">Profile</h2>
                    </Col>
                  </Row>
                  <div class="change_pass">
                    <Row>
                      <Col sm={4}>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            {/* <Form.Label>Name</Form.Label> */}
                            {/* <Form.Control
                                type="text"
                                placeholder="Name"
                                value={user?.data?.name}
                              /> */}
                            <InputText
                              title={"Name"}
                              name="name"
                              placeholder="Enter Name"
                              value={profile.name}
                              required={profileValidation.name}
                              onKeyPress={handleKeyPressEvent}
                              onChange={handleChangeEvent}
                            />
                            {profileValidation.valid_name && (
                              <p className="error_text">
                                Please enter a valid name
                              </p>
                            )}
                          </Form.Group>
                        </Form>
                      </Col>
                      <Col sm={4}>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <InputText
                              title={"Email"}
                              name="email"
                              placeholder="Enter Email"
                              value={profile.email}
                              required={profileValidation.email}
                              onKeyPress={handleKeyPressEvent}
                              onChange={handleChangeEvent}
                            />
                            {profileValidation.valid_email && (
                              <p className="error_text">
                                Please enter a valid email address
                              </p>
                            )}
                          </Form.Group>
                        </Form>
                      </Col>
                      <Col sm={4}>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <InputPhone
                              title={"Mobile"}
                              defaultCountry={"+91"}
                              value={user?.data?.mobile}

                              // required={lvalidation.phone_no}
                              //onChange={(e, c_code) => {
                              // setLogin({
                              //     ...login,
                              //     mobile: e,
                              //     phone_code: c_code?.countryCode?.toUpperCase(),
                              // });
                              // if (e) {
                              //     setValidation({ ...lvalidation, phone_no: false });
                              // } else {
                              //     setValidation({ ...lvalidation, phone_no: true });
                              // }
                              // }}
                            />
                            {/* {lvalidation.valid_phone_no && (
                                <p className="error_text">
                                Please enter a valid mobile number
                                </p>
                            )} */}
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={4}>
                        <Form>
                          <InputText
                            title={"DOB"}
                            type="date"
                            name="dob"
                            placeholder="Enter DOB"
                            value={profile.dob}
                            required={profileValidation.dob}
                            onKeyPress={handleKeyPressEvent}
                            onChange={handleChangeEvent}
                          />
                          {profileValidation.valid_dob && (
                            <p className="error_text">Please select DOB</p>
                          )}
                        </Form>
                      </Col>
                      <Col sm={4}>
                        <Form className="gender_list">
                          <Form.Label>Gender</Form.Label>
                          {["radio"].map((type) => (
                            <div key={`inline-${type}`} className="mt-3">
                              <Form.Check
                                inline
                                label="Male"
                                name="gender"
                                value="male"
                                type={type}
                                id={`inline-${type}-1`}
                                checked={address.gender === "male"}
                                onKeyPress={handleKeyPressEvent}
                                onChange={handleChangeEvent}
                              />
                              <Form.Check
                                inline
                                label="Female"
                                name="gender"
                                value="female"
                                checked={address.gender === "female"}
                                type={type}
                                id={`inline-${type}-2`}
                                onKeyPress={handleKeyPressEvent}
                                onChange={handleChangeEvent}
                              />
                            </div>
                          ))}
                          {!profile.gender && (
                            <p className="error_text">Please select Gender</p>
                          )}
                        </Form>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col className="py-4">
                        <button
                          // type="submit"
                          class="btn-product btn-cart wid_200 "
                          onClick={handleProfileForm}
                          disabled={loading}
                        >
                          SAVE
                        </button>
                      </Col>
                    </Row> */}

                    {/* <Row>
                      <Col>
                        <h2 className="profile_heading">Add New Address</h2>
                      </Col>
                    </Row> */}

                    {/* <Row>
                        <Col>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" placeholder="name" />
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Mobile Number</Form.Label>
                              <Form.Control
                                type="tel"
                                placeholder="Mobile Number"
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control
                                type="tel"
                                placeholder="Phone Number"
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row> */}
                    <Row>
                      <Col className="py-4">
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1 "
                          >
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                              as="textarea"
                              name="address"
                              value={address.address}
                              rows={3}
                              onChange={handleAddressChangeEvent}
                            />
                            {addressValidation.address && (
                              <p className="error_text">Please Enter Address</p>
                            )}
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        {" "}
                        <label className="mb-3 font-weight-bold">State *</label>
                        {/* <p>Select your account type</p> */}
                        {/* <Select
                          options={
                            stateList?.length > 0 &&
                            stateList?.map((o) => ({
                              label: o?.name,
                              value: o?._id,
                            }))
                          }
                          value={
                            stateList?.length > 0 && {
                              label: stateList.find(
                                (o) => o._id === address?.state
                              )._id,
                              value: address?.state,
                            }
                          }
                          onChange={(data) => {
                            setAddress({
                              ...address,
                              state: data._id,
                            });
                          }}
                        /> */}
                        {/* <Form.Select
                          aria-label="Default select example"
                          name="state"
                          onChange={handleState}
                          value={address?.state}
                          //defaultValue={3}
                        >
                          <option>State</option>

                          {stateList?.length > 0 &&
                            stateList?.map((ListState) => {
                              return (
                                <option value={ListState?._id} selected={true}>
                                  {ListState?.name}
                                </option>
                              );
                            })}
                        </Form.Select> */}
                        <Select
                          options={
                            stateList?.length > 0 &&
                            stateList?.map((o) => ({
                              label: o.name,
                              value: o._id,
                            }))
                          }
                          value={{
                            label:
                              stateList?.length > 0 &&
                              stateList?.find((o) => o._id === address?.state)
                                ?.name,
                            value: address?.state,
                          }}
                          onChange={async (data) => {
                            //if (data?.value) {

                            const CityListData = await getCitiesApi(
                              data?.value
                            );
                            setCityList(
                              CityListData?.data?.responseData?.cities
                            );
                            setAddress({ ...address, state: data?.value });
                            //}
                          }}
                        />
                        {addressValidation.state && (
                          <p className="error_text">Please select state</p>
                        )}
                      </Col>
                      <Col>
                        {" "}
                        <label className="mb-3 font-weight-bold">City *</label>
                        <Select
                          options={
                            cityList?.length > 0 &&
                            cityList?.map((o) => ({
                              label: o.name,
                              value: o._id,
                            }))
                          }
                          value={{
                            label:
                              cityList?.length > 0 &&
                              cityList?.find((o) => o._id === address?.city)
                                ?.name,
                            value: address?.city,
                          }}
                          onChange={async (data) => {
                            //if (data?.value) {

                            // const CityListData = await getCitiesApi(
                            //   data?.value
                            // );
                            // setCityList(
                            //   CityListData?.data?.responseData?.cities
                            // );
                            setAddress({ ...address, city: data?.value });
                            //}
                          }}
                        />
                        {/* <Form.Select
                          aria-label="Default select example"
                          name="city"
                          defaultValue={address?.city}
                          onChange={() => handleAddressChangeEvent}
                          value={address?.city}
                        >
                          <option>City</option>

                          {cityList?.length > 0 &&
                            cityList?.map((ListCity) => {
                              return (
                                <option value={ListCity?._id}>
                                  {ListCity?.name}
                                </option>
                              );
                            })}
                        </Form.Select> */}
                        {addressValidation.city && (
                          <p className="error_text">Please select City</p>
                        )}
                      </Col>

                      {/* <Col>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Landmark</Form.Label>
                              <Form.Control type="text" placeholder="name" />
                            </Form.Group>
                          </Form>
                        </Col> */}
                      <Col>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            {/* <Form.Label>Pincode</Form.Label>
                              <Form.Control type="text" placeholder="name" /> */}
                            <InputText
                              title={"Pincode"}
                              type="number"
                              name="pincode"
                              placeholder="Enter Pin code"
                              value={address.pincode}
                              required={addressValidation.pincode}
                              onKeyPress={handleAddressKeyPressEvent}
                              onChange={handleAddressChangeEvent}
                            />
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="py-4">
                        <button
                          // type="submit"
                          class="btn-product btn-cart wid_200"
                          onClick={() => handleProfileAddressForm()}
                        >
                          SAVE
                        </button>
                      </Col>
                    </Row>
                  </div>
                  {/* <Row>
                      <Col>
                        <h2 className="profile_heading">Password Change</h2>
                      </Col>
                    </Row>
                    <div class="change_pass">
                      <Row>
                        <Col>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Current Password</Form.Label>
                              <Form.Control
                                type="password"
                                placeholder="Current Password"
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>New Password</Form.Label>
                              <Form.Control
                                type="password"
                                placeholder="New Password"
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Confirm Password</Form.Label>
                              <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <button
                            type="submit"
                            class="btn-product btn-cart wid_200"
                          >
                            SAVE
                          </button>
                        </Col>
                      </Row>
                    </div> */}
                  {/* </form> */}
                </Tab.Pane>
                <Tab.Pane eventKey="first">
                  <div class="row product_banner_2 text-left">
                    <div class="col-sm-2">
                      <img
                        src="http://localhost:4002/static/media/home_one.d0bce35b.jpg"
                        width="100"
                        height="100"
                      ></img>
                    </div>
                    <div class="col-sm-4">
                      <p>Converse Training Shoes</p>
                    </div>
                    <div class="col-sm-3">
                      <p>$129.99</p>
                    </div>
                    <div class="col-sm-3">
                      <h4>
                        <i
                          class="fa fa-circle green_color_fa"
                          aria-hidden="true"
                        ></i>{" "}
                        Delivered on Oct 25
                      </h4>
                      <p>Your item has been delivered</p>
                    </div>
                  </div>
                  <div class="row product_banner_2 text-left">
                    <div class="col-sm-2">
                      <img
                        src="http://localhost:4002/static/media/home_one.d0bce35b.jpg"
                        width="100"
                        height="100"
                      ></img>
                    </div>
                    <div class="col-sm-4">
                      <p>Converse Training Shoes</p>
                    </div>
                    <div class="col-sm-3">
                      <p>$129.99</p>
                    </div>
                    <div class="col-sm-3">
                      <h4>
                        <i
                          class="fa fa-circle red_color_fa"
                          aria-hidden="true"
                        ></i>{" "}
                        Delivered on Oct 25
                      </h4>
                      <p>Your item has been delivered</p>
                    </div>
                  </div>
                  <div class="row product_banner_2 text-left">
                    <div class="col-sm-2">
                      <img
                        src="http://localhost:4002/static/media/home_one.d0bce35b.jpg"
                        width="100"
                        height="100"
                      ></img>
                    </div>
                    <div class="col-sm-4">
                      <p>Converse Training Shoes</p>
                    </div>
                    <div class="col-sm-3">
                      <p>$129.99</p>
                    </div>
                    <div class="col-sm-3">
                      <h4>
                        <i
                          class="fa fa-circle green_color_fa"
                          aria-hidden="true"
                        ></i>{" "}
                        Delivered on Oct 25
                      </h4>
                      <p>Your item has been delivered</p>
                    </div>
                  </div>
                  <div class="row product_banner_2 text-left">
                    <div class="col-sm-2">
                      <img
                        src="http://localhost:4002/static/media/home_one.d0bce35b.jpg"
                        width="100"
                        height="100"
                      ></img>
                    </div>
                    <div class="col-sm-4">
                      <p>Converse Training Shoes</p>
                    </div>
                    <div class="col-sm-3">
                      <p>$129.99</p>
                    </div>
                    <div class="col-sm-3">
                      <h4>
                        <i
                          class="fa fa-circle red_color_fa"
                          aria-hidden="true"
                        ></i>{" "}
                        Delivered on Oct 25
                      </h4>
                      <p>Your item has been delivered</p>
                    </div>
                  </div>
                </Tab.Pane>

                {/* <Tab.Pane eventKey="third">
                  <Row>
                    <Col>
                      <div class="card card-address">
                        <div class="change_pass">
                          <h5 class="card-title text-uppercase">
                            Billing Address
                          </h5>
                          <p>
                            John Doe
                            <br />
                            Riode Company
                            <br />
                            Steven street
                            <br />
                            El Carjon, CA 92020
                          </p>
                          <Link to="" ClassName="btn btn-link">
                            Edit <i class="far fa-edit"></i>
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div class="card card-address">
                        <div class="change_pass">
                          <h5 class="card-title text-uppercase">
                            Shipping Address
                          </h5>
                          <p>
                            John Doe
                            <br />
                            Riode Company
                            <br />
                            Steven street
                            <br />
                            El Carjon, CA 92020
                          </p>
                          <Link to="" ClassName="btn btn-link">
                            Edit <i class="far fa-edit"></i>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane> */}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};

export default Accountcomponent;