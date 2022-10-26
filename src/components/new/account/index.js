import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import "./styles.scss";

const Accountcomponent = () => {

return (  
        <>  
        <div ClassName="profile_page">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3} className="account_form_box">
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">My Orders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Address</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9} className="account_form_box">
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div class="row product_banner_2 text-left">
                                <div class="col-sm-2">
                                    <img src="http://localhost:4002/static/media/home_one.d0bce35b.jpg" width="100" height="100"></img>
                                </div>
                                <div class="col-sm-4"><p>Converse Training Shoes</p></div>
                                <div class="col-sm-3"><p>$129.99</p></div>
                                <div class="col-sm-3">
                                    <h4><i class="fa fa-circle green_color_fa" aria-hidden="true"></i> Delivered on Oct 25</h4>
                                    <p>Your item has been delivered</p>
                                </div>
                            </div>
                            <div class="row product_banner_2 text-left">
                                <div class="col-sm-2">
                                    <img src="http://localhost:4002/static/media/home_one.d0bce35b.jpg" width="100" height="100"></img>
                                </div>
                                <div class="col-sm-4"><p>Converse Training Shoes</p></div>
                                <div class="col-sm-3"><p>$129.99</p></div>
                                <div class="col-sm-3">
                                    <h4><i class="fa fa-circle red_color_fa" aria-hidden="true"></i> Delivered on Oct 25</h4>
                                    <p>Your item has been delivered</p>
                                </div>
                            </div>
                            <div class="row product_banner_2 text-left">
                                <div class="col-sm-2">
                                    <img src="http://localhost:4002/static/media/home_one.d0bce35b.jpg" width="100" height="100"></img>
                                </div>
                                <div class="col-sm-4"><p>Converse Training Shoes</p></div>
                                <div class="col-sm-3"><p>$129.99</p></div>
                                <div class="col-sm-3">
                                    <h4><i class="fa fa-circle green_color_fa" aria-hidden="true"></i> Delivered on Oct 25</h4>
                                    <p>Your item has been delivered</p>
                                </div>
                            </div>
                            <div class="row product_banner_2 text-left">
                                <div class="col-sm-2">
                                    <img src="http://localhost:4002/static/media/home_one.d0bce35b.jpg" width="100" height="100"></img>
                                </div>
                                <div class="col-sm-4"><p>Converse Training Shoes</p></div>
                                <div class="col-sm-3"><p>$129.99</p></div>
                                <div class="col-sm-3">
                                    <h4><i class="fa fa-circle red_color_fa" aria-hidden="true"></i> Delivered on Oct 25</h4>
                                    <p>Your item has been delivered</p>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <form action="#" class="form">
                                <Row>
                                    <Col>
                                        <h2 className="profile_heading">Profile</h2>
                                    </Col>
                                </Row>
                                <div class="change_pass">
                                    <Row>
                                        <Col>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control type="text" placeholder="First Name" />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                        <Col>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Last Name" />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                        <Col>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>User Name</Form.Label>
                                                    <Form.Control type="text" placeholder="User Name" />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Email Address</Form.Label>
                                                    <Form.Control type="email" placeholder="name@example.com" />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                        <Col sm={4}>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Mobile Number</Form.Label>
                                                    <Form.Control type="tel" placeholder="Mobile Number" />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <button type="submit" class="btn-product btn-cart wid_200">SAVE</button>
                                        </Col>
                                    </Row>
                                </div>
                                <Row>
                                    <Col>
                                        <h2 className="profile_heading">Add New Address</h2>
                                    </Col>
                                </Row>
                                <div class="change_pass">
                                    <Row>
                                        <Col>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" placeholder="name" />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                        <Col>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Mobile Number</Form.Label>
                                                    <Form.Control type="tel" placeholder="Mobile Number" />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                        <Col>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control type="tel" placeholder="Phone Number" />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Example textarea</Form.Label>
                                                    <Form.Control as="textarea" rows={3} />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label className="mb-3">City *</label>
                                            <Form.Select aria-label="Default select example">
                                                <option>City</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col>
                                            <label className="mb-3">State *</label>
                                            <Form.Select aria-label="Default select example">
                                                <option>State</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Landmark</Form.Label>
                                                    <Form.Control type="text" placeholder="name" />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                        <Col>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Pincode</Form.Label>
                                                    <Form.Control type="text" placeholder="name" />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <button type="submit" class="btn-product btn-cart wid_200">SAVE</button>
                                        </Col>
                                    </Row>
                                </div>
                                <Row>
                                    <Col>
                                        <h2 className="profile_heading">Password Change</h2>
                                    </Col>
                                </Row>
                                <div class="change_pass">
                                    <Row>
                                        <Col>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Current Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Current Password" />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                        <Col>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>New Password</Form.Label>
                                                    <Form.Control type="password" placeholder="New Password" />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                        <Col>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Confirm Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Confirm Password" />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <button type="submit" class="btn-product btn-cart wid_200">SAVE</button>
                                        </Col>
                                    </Row>
                                </div>
                            </form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Row>
                                <Col>
                                    <div class="card card-address">
                                        <div class="change_pass">
                                            <h5 class="card-title text-uppercase">Billing Address</h5>
                                            <p>
                                                John Doe<br />
                                                Riode Company<br />
                                                Steven street<br />
                                                El Carjon, CA 92020
                                            </p>
                                            <Link to = '' ClassName="btn btn-link">Edit <i class="far fa-edit"></i></Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="card card-address">
                                        <div class="change_pass">
                                            <h5 class="card-title text-uppercase">Shipping Address</h5>
                                            <p>
                                                John Doe<br />
                                                Riode Company<br />
                                                Steven street<br />
                                                El Carjon, CA 92020
                                            </p>
                                            <Link to = '' ClassName="btn btn-link">Edit <i class="far fa-edit"></i></Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
        </>
    );
}

export default Accountcomponent;