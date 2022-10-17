

import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";


import "./styles.scss";

const Accountcomponent = () => {

return (  <>   
            <div className="tab tab-vertical gutter-lg">
                        <ul className="nav nav-tabs mb-4 col-lg-3 col-md-4" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" href="#dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#orders">Orders</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#downloads">Downloads</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#address">Address</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#account">Account details</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="login.html">Logout</a>
                            </li>
                        </ul>
                        <div className="tab-content col-lg-9 col-md-8">
                            <div className="tab-pane active" id="dashboard">
                                <p className="mb-0">
                                    Hello <span>User</span> (not <span>User</span>? <a href="#" className="text-primary">Logout</a>)
                                </p>
                                <p className="mb-8">
                                    From your account dashboard you can view your
                                    <a href="#orders" className="link-to-tab text-primary">recent orders, manage your
                                        shipping and billing addresses,<br/>and edit your password and account details</a>.
                                </p>
                                <a href="#" className="btn btn-dark btn-rounded">Go To Shop<i className="d-icon-arrow-right"></i></a>
                            </div>
                            <div className="tab-pane" id="orders">
                                <div className="table-responsive text-center">
                                    <table className="order-table table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="pl-2">Order</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Total</th>
                                                <th className="pr-2">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="order-number"><a href="account.html#">#3596</a></td>
                                                <td className="order-date"><span>February 24, 2022</span></td>
                                                <td className="order-status"><span>On hold</span></td>
                                                <td className="order-total"><span>$900.00 for 5 items</span></td>
                                                <td className="order-action"><a href="#" className="btn btn-primary btn-link btn-underline">View</a></td>
                                            </tr>
                                            <tr>
                                                <td className="order-number"><a href="account.html#">#3593</a></td>
                                                <td className="order-date"><span>February 21, 2022</span></td>
                                                <td className="order-status"><span>On hold</span></td>
                                                <td className="order-total"><span>$290.00 for 2 items</span></td>
                                                <td className="order-action"><a href="#" className="btn btn-primary btn-link btn-underline">View</a></td>
                                            </tr>
                                            <tr>
                                                <td className="order-number"><a href="account.html#">#2547</a></td>
                                                <td className="order-date"><span>January 4, 2022</span></td>
                                                <td className="order-status"><span>On hold</span></td>
                                                <td className="order-total"><span>$480.00 for 8 items</span></td>
                                                <td className="order-action"><a href="#" className="btn btn-primary btn-link btn-underline">View</a></td>
                                            </tr>
                                            <tr>
                                                <td className="order-number"><a href="account.html#">#2549</a></td>
                                                <td className="order-date"><span>January 19, 2022</span></td>
                                                <td className="order-status"><span>On hold</span></td>
                                                <td className="order-total"><span>$680.00 for 5 items</span></td>
                                                <td className="order-action"><a href="#" className="btn btn-primary btn-link btn-underline">View</a></td>
                                            </tr>
                                            <tr>
                                                <td className="order-number"><a href="account.html#">#4523</a></td>
                                                <td className="order-date"><span>Jun 6, 2022</span></td>
                                                <td className="order-status"><span>On hold</span></td>
                                                <td className="order-total"><span>$564.00 for 3 items</span></td>
                                                <td className="order-action"><a href="#" className="btn btn-primary btn-link btn-underline">View</a></td>
                                            </tr>
                                            <tr>
                                                <td className="order-number"><a href="account.html#">#4526</a></td>
                                                <td className="order-date"><span>Jun 19, 2022</span></td>
                                                <td className="order-status"><span>On hold</span></td>
                                                <td className="order-total"><span>$123.00 for 8 items</span></td>
                                                <td className="order-action"><a href="#" className="btn btn-primary btn-link btn-underline">View</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane" id="downloads">
                                <p className="mb-4 text-body">No downloads available yet.</p>
                                <a href="#" className="btn btn-primary btn-link btn-underline">Browser Products<i className="d-icon-arrow-right"></i></a>
                            </div>
                            <div className="tab-pane" id="address">
                                <p className="mb-2">The following addresses will be used on the checkout page by default.
                                </p>
                                <div className="row">
                                    <div className="col-sm-6 mb-4">
                                        <div className="card card-address">
                                            <div className="card-body">
                                                <h5 className="card-title text-uppercase">Billing Address</h5>
                                                <p>John Doe<br />
                                                    Riode Company<br />
                                                    Steven street<br />
                                                    El Carjon, CA 92020
                                                </p>
                                                <a href="#" className="btn btn-link btn-secondary btn-underline">Edit <i className="far fa-edit"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-4">
                                        <div className="card card-address">
                                            <div className="card-body">
                                                <h5 className="card-title text-uppercase">Shipping Address</h5>
                                                <p>You have not set up this type of address yet.</p>
                                                <a href="#" className="btn btn-link btn-secondary btn-underline">Edit <i
                                                        className="far fa-edit"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="account">
                                <form action="#" className="form">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>First Name *</label>
                                            <input type="text" className="form-control" name="first_name" required="" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Last Name *</label>
                                            <input type="text" className="form-control" name="last_name" required="" />
                                        </div>
                                    </div>

                                    <label>Display Name *</label>
                                    <input type="text" className="form-control mb-0" name="display_name" required="" />
                                    <small className="d-block form-text mb-7">This will be how your name will be displayed
                                        in the account section and in reviews</small>

                                    <label>Email Address *</label>
                                    <input type="email" className="form-control" name="email" required="" />
                                    <fieldset>
                                        <legend>Password Change</legend>
                                        <label>Current password (leave blank to leave unchanged)</label>
                                        <input type="password" className="form-control" name="current_password" />

                                        <label>New password (leave blank to leave unchanged)</label>
                                        <input type="password" className="form-control" name="new_password" />

                                        <label>Confirm new password</label>
                                        <input type="password" className="form-control" name="confirm_password" />
                                    </fieldset>
                                    <br/>
                                    <button type="submit" className="btn btn-primary">SAVE CHANGES</button>
                                </form>
                            </div>
                        </div>
                    </div>     
       
        </>
    );

}



export default Accountcomponent;