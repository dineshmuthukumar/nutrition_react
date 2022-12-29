import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import moment from "moment";
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
import { useLocation } from "react-router";

import {
  currencyFormat,
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
  getOrderListApi,
} from "../../../api/base-methods";
import { useQuery } from "../../../hook/url-params";

import { withRouter } from "react-router-dom";
import queryString from "query-string";

import { toast } from "react-toastify";
import Pagination from "../pagination";

const Accountcomponent = () => {
  const location = useLocation();
  let params = queryString.parse(location.search);
  //let params = queryString.parse(location.defaultkey)
  const user = useSelector((state) => state?.user);
  // console.log(user?.data, "user");
  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [stateList, setStateList] = useState({});
  const [cityList, setCityList] = useState({});
  // const [orderList, setOrderList] = useState({});
  const [list, setList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNextPage, setIsNextPage] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [productDetails, setProductDetails] = useState("");

  const [profile, setProfile] = useState({
    name: user?.data?.name,
    email: user?.data?.email,
    dob: moment(user?.data?.dob, "DD/MM/YYYY").format("YYYY-MM-DD"),
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

  const [address, setAddress] = useState({
    address: user?.data?.address,
    city: user?.data?.city?._id,
    state: user?.data?.state?._id,
    pincode: user?.data?.zipCode,
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
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getOrderList = async () => {
    try {
      const response = await getOrderListApi(1);

      setList(response?.data?.responseData?.product?.docs);
      setTotalCount(response?.data?.responseData?.product?.totalDocs);
      setLimit(response?.data?.responseData?.product?.limit);
      setCurrentPage(response?.data?.responseData?.product?.page);
      setIsNextPage(response?.data?.responseData?.product?.hasNextPage);
      setTotalPages(response?.data?.responseData?.product?.totalPages);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePage = async (page) => {
    const response = await getOrderListApi(page);
    setList(response?.data?.responseData?.product?.docs);
    setTotalCount(response?.data?.responseData?.product?.totalDocs);
    setLimit(response?.data?.responseData?.product?.limit);
    setCurrentPage(response?.data?.responseData?.product?.page);
    setIsNextPage(response?.data?.responseData?.product?.hasNextPage);
    setTotalPages(response?.data?.responseData?.product?.totalPages);
  };
  // useEffect(() => {

  //   getStatesList();

  // },[])}

  useEffect(async () => {
    getStatesList();
    setAddress({ ...address, state: user?.data?.state?._id });
    getOrderList();
    // const maxDate = moment(user?.data?.dob, "DD-MM-YYYY").format("DD/MM/YYYY"); // 15-11-2017T11:17:30+01:00
    // console.log(maxDate, "maxDate");

    if (user?.data?.state?._id) {
      const CityListData = await getCitiesApi(user?.data?.state?._id);
      setCityList(CityListData?.data?.responseData?.cities);
      setAddress({ ...address, city: user?.data?.city?._id });
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
        // console.log(e.target.name, e.target.value);
        setProfileValidation({ ...profileValidation, [e.target.name]: false });
        console.log(profile, "profile");
      }
    } else {
      setProfile({ ...profile, [e.target.name]: e.target.value });
      setProfileValidation({ ...profileValidation, [e.target.name]: true });
    }
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

    console.log(addressValidation, "addressValidation");
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

    // console.log(c_validation, "c_validation");

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
      let ProfileData = { ...profile };

      ProfileData.id = user?.data?._id;
      ProfileData.dob = dayjs(ProfileData.dob).format("DD-MM-YYYY");
      ProfileData.zipCode = parseInt(address.pincode);
      ProfileData.state = address.state;
      ProfileData.city = address.city;
      ProfileData.address = address.address;
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

  // const handleState = async (data) => {
  //   if (data?.target?.value) {
  //     setAddress({ ...address, state: data.target.value });
  //     const CityListData = await getCitiesApi(data.target.value);
  //     setCityList(CityListData?.data?.responseData?.cities);
  //     console.log(data?.target?.value, "data?.target?.value");
  //     setAddressValidation({ ...profileValidation, state: false });
  //   } else {
  //     setAddress({ ...address, state: "" });
  //     setAddressValidation({ ...profileValidation, state: true });
  //   }
  // };

  const handlePop = (Data) => {
    console.log(Data, "Data");
    setProductDetails(Data);
    setShow(true);
  };
  return (
    <>
      <div className="profile_page">
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey={`${
            params?.defaultkey ? params?.defaultkey : "second"
          }`}
        >
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
                {/* <Tab.Pane eventKey="first">
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
                </Tab.Pane> */}
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
                            value={profile?.dob}
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
                            <div key={`inline-}`} className="mt-3">
                              <Form.Check
                                inline
                                label="Male"
                                name="gender"
                                value="male"
                                type={"radio"}
                                id={`inline--1`}
                                checked={profile?.gender == "male" ? true : ""}
                                onKeyPress={handleKeyPressEvent}
                                onChange={handleChangeEvent}
                              />
                              <Form.Check
                                inline
                                label="Female"
                                name="gender"
                                value="female"
                                checked={
                                  profile?.gender === "female" ? true : ""
                                }
                                type={"radio"}
                                id={`inline--1`}
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
                  {(() => {
                    if (list?.length > 0) {
                      return (
                        <>
                          {list?.map((orderListproduct, key) => {
                            return (
                              <>
                                <div
                                  onClick={() => handlePop(orderListproduct)}
                                >
                                  <div class="row product_banner_2 text-left">
                                    <div class="col-sm-2">
                                      <img
                                        src="https://cdn-icons-png.flaticon.com/512/1007/1007908.png "
                                        //src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${orderListproduct?.image}`}
                                        width="100"
                                        height="100"
                                      ></img>
                                    </div>
                                    <div class="col-sm-4">
                                      {orderListproduct?.productDetails.map(
                                        (productDetailsDat, pkey) => (
                                          <p>
                                            Product Name {pkey + 1} :{" "}
                                            {productDetailsDat?.name}
                                          </p>
                                        )
                                      )}
                                    </div>
                                    <div class="col-sm-3">
                                      <p>
                                        {currencyFormat(
                                          orderListproduct.totalAmount,
                                          "INR"
                                        )}
                                      </p>
                                    </div>
                                    <div class="col-sm-3">
                                      {orderListproduct?.status ==
                                        "DELIVERED" && (
                                        <h4>
                                          <i
                                            class="fa fa-circle green_color_fa"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Delivered on{" "}
                                          {dayjs(
                                            orderListproduct?.updatedAt
                                          ).format("D M")}
                                        </h4>
                                      )}
                                      <p>
                                        Your item has been{" "}
                                        {orderListproduct?.status}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </>
                      );
                    } else {
                      return (
                        <div class="row product_banner_2 text-left">
                          No Order found
                        </div>
                      );
                    }
                  })()}
                  {list?.length > 0 ? (
                    <div className="user-profile-table-pagination">
                      <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={totalCount}
                        pageSize={limit}
                        onPageChange={(page) => handlePage(page)}
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  {/* <div class="row product_banner_2 text-left">
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
                  </div> */}
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
        {productDetails && (
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Order Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Receipt ID : {productDetails?.receiptId}</p>
              <h3>Product Details :</h3>
              <div>
                {productDetails?.productDetails?.map(
                  (productDetailsDat, pkey) => (
                    <p className="text-bold">
                      Product Name {pkey + 1} : {productDetailsDat?.name}
                    </p>
                  )
                )}
              </div>

              <h3>Order Details :</h3>
              <div>
                <p>
                  Order Created :{" "}
                  {dayjs(productDetails?.createdAt).format("DD MMM,YYYY")}
                </p>
                <p>
                  Delivery Amount:{" "}
                  {currencyFormat(
                    productDetails?.deliveryCharge,
                    productDetails?.orderResponse?.currency
                  )}
                </p>
                <p>
                  Total Amount:{" "}
                  {currencyFormat(
                    productDetails?.orderResponse?.amount / 100,
                    productDetails?.orderResponse?.currency
                  )}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              {/* <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button> */}
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Accountcomponent;