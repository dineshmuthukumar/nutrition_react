

import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";

import buy_now from "../../../images/new-images/demos/demo-food2/buy_now.png";
import payment_logo from "../../../images/new-images/demos/demo-food2/payment-logo.png";

import a_1 from "../../../images/new-images/demos/demo-food2/icons/icon/final/1-a.png";
import a_2 from "../../../images/new-images/demos/demo-food2/icons/icon/final/2-a.png"
import a_3 from "../../../images/new-images/demos/demo-food2/icons/icon/final/3-a.png"
import a_4 from "../../../images/new-images/demos/demo-food2/icons/icon/final/4-a.png"
import a_5 from "../../../images/new-images/demos/demo-food2/icons/icon/final/5-a.png"
import a_6 from "../../../images/new-images/demos/demo-food2/icons/icon/final/6-a.png"
import a_7 from "../../../images/new-images/demos/demo-food2/icons/icon/final/6-a.png"
import a_8 from "../../../images/new-images/demos/demo-food2/icons/icon/final/6-a.png"
import a_9 from "../../../images/new-images/demos/demo-food2/icons/icon/final/4-a.png"
import a_10 from "../../../images/new-images/demos/demo-food2/icons/icon/final/4-a.png"
import a_11 from "../../../images/new-images/demos/demo-food2/icons/icon/final/4-a.png"
import a_12 from "../../../images/new-images/demos/demo-food2/icons/icon/final/4-a.png"


import usage_img from "../../../images/new-images/demos/demo-food2/products/final/usage_img.jpg";
import claim_now from "../../../images/new-images/demos/demo-food2/claim_now.png";

import radius_1 from "../../../images/new-images/demos/demo-food2/banners/radius_1.png"
import radius_2 from "../../../images/new-images/demos/demo-food2/banners/radius_2.png"
import radius_3 from "../../../images/new-images/demos/demo-food2/banners/radius_3.png"
import radius_4 from "../../../images/new-images/demos/demo-food2/banners/radius_4.png"

import apple_feature from "../../../images/new-images/demos/demo-food2/products/final/apple_feature.png"
import why_choose from "../../../images/new-images/demos/demo-food2/products/why_choose.png";


import pro_banner_2 from "../../../images/new-images/demos/demo-food2/products/pro_banner_2.jpg"


import a from "../../../images/new-images/demos/demo-food2/products/a.png";
import b from "../../../images/new-images/demos/demo-food2/products/b.png";
import c from "../../../images/new-images/demos/demo-food2/products/c.png";
import d from "../../../images/new-images/demos/demo-food2/products/d.png";
import e from "../../../images/new-images/demos/demo-food2/products/e.png";
import f from "../../../images/new-images/demos/demo-food2/products/f.png";

import app_1 from "../../../images/new-images/demos/demo-food2/products/final/app_1.png";
import app_2 from "../../../images/new-images/demos/demo-food2/products/final/app_2.png";
import app_3 from "../../../images/new-images/demos/demo-food2/products/final/app_3.png";
import app_4 from "../../../images/new-images/demos/demo-food2/products/final/app_4.png";
import app_5 from "../../../images/new-images/demos/demo-food2/products/final/app_5.png";

import app_11 from "../../../images/new-images/demos/demo-food2/products/final/app_11.png";
import app_22 from "../../../images/new-images/demos/demo-food2/products/final/app_22.png";
import app_33 from "../../../images/new-images/demos/demo-food2/products/final/app_33.png";
import app_44 from "../../../images/new-images/demos/demo-food2/products/final/app_44.png";
import app_55 from "../../../images/new-images/demos/demo-food2/products/final/app_55.png";

import banner_1 from "../../../images/new-images/demos/demo-food2/slides/banner_1.jpg";

import "./style.scss";

const Free_Trial_Section = () => {

return (  <>        
       <section className="" id="trial_free_section">
            <div className="intro-slide1 banner banner-fixed">
                <figure><img src={banner_1} alt="intro-banner" width="1903" height="540" /></figure>
                <div className="container">
                    <div className="banner-content y-50">
                <div className="col-sm-4">
                            <div className="trial_form">
                                <div className="thumbnail center well well-small text-center">
                                    <h5>TELL US WHERE TO SEND</h5>
                                    <p>YOUR BOTTLE</p>
                                    <form action="" method="post">
                                        <div className="input-prepend mb-2">
                                            <input type="text" id="" className="form-control" name="" placeholder="First Name" />
                                        </div>
                                        <div className="input-prepend mb-2">
                                            <input type="text" id="" className="form-control" name="" placeholder="Last Name" />
                                        </div>
                                        <div className="input-prepend mb-2">
                                            <select name="orderby" className="form-control">
                                                <option value="0" label="Select a country ... " selected="selected">Select a country ... </option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antartica">Antarctica</option>
                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Aruba">Aruba</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Bouvet Island">Bouvet Island</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Cape Verde">Cape Verde</option>
                                                <option value="Cayman Islands">Cayman Islands</option>
                                                <option value="Central African Republic">Central African Republic</option>
                                                <option value="Chad">Chad</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Christmas Island">Christmas Island</option>
                                                <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Congo">Congo, the Democratic Republic of the</option>
                                                <option value="Cook Islands">Cook Islands</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                                                <option value="Croatia">Croatia (Hrvatska)</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">Dominican Republic</option>
                                                <option value="East Timor">East Timor</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                                                <option value="Faroe Islands">Faroe Islands</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="France Metropolitan">France, Metropolitan</option>
                                                <option value="French Guiana">French Guiana</option>
                                                <option value="French Polynesia">French Polynesia</option>
                                                <option value="French Southern Territories">French Southern Territories</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Gibraltar">Gibraltar</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Greenland">Greenland</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guadeloupe">Guadeloupe</option>
                                                <option value="Guam">Guam</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                                                <option value="Holy See">Holy See (Vatican City State)</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hong Kong">Hong Kong</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iran">Iran (Islamic Republic of)</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                                                <option value="Korea">Korea, Republic of</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Lao">Lao People's Democratic Republic</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon" selected>Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Macau">Macau</option>
                                                <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Martinique">Martinique</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mayotte">Mayotte</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Micronesia">Micronesia, Federated States of</option>
                                                <option value="Moldova">Moldova, Republic of</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montserrat">Montserrat</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Namibia">Namibia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherlands">Netherlands</option>
                                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                <option value="New Caledonia">New Caledonia</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="Niue">Niue</option>
                                                <option value="Norfolk Island">Norfolk Island</option>
                                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau">Palau</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Philippines">Philippines</option>
                                                <option value="Pitcairn">Pitcairn</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Puerto Rico">Puerto Rico</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Reunion">Reunion</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russia">Russian Federation</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
                                                <option value="Saint LUCIA">Saint LUCIA</option>
                                                <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome and Principe">Sao Tome and Principe</option> 
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia (Slovak Republic)</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                                                <option value="Span">Spain</option>
                                                <option value="SriLanka">Sri Lanka</option>
                                                <option value="St. Helena">St. Helena</option>
                                                <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                                                <option value="Swaziland">Swaziland</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syrian Arab Republic</option>
                                                <option value="Taiwan">Taiwan, Province of China</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania, United Republic of</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tokelau">Tokelau</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Turks and Caicos">Turks and Caicos Islands</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Emirates">United Arab Emirates</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States">United States</option>
                                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                <option value="Uruguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Viet Nam</option>
                                                <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                                <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                                                <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                                                <option value="Western Sahara">Western Sahara</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Serbia">Serbia</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                                </select>
                                        </div>
                                        <div className="input-prepend mb-2">
                                            <input type="text" id="" className="form-control" name="" placeholder="Address" />
                                        </div>
                                        <div className="input-prepend mb-2">
                                            <input type="tel" id="" className="form-control" name="" placeholder="Zip Code" />
                                        </div>
                                        <div className="input-prepend mb-2">
                                            <input type="text" id="" className="form-control" name="" placeholder="City" />
                                        </div>
                                        <div className="input-prepend mb-2">
                                            <select id="country-state" name="country-state" className="form-control">
                                                <option value="0" label="Select a State ... " selected="selected">Select a State ... </option>
                                                <option value="AN">Andaman and Nicobar Islands</option>
                                                <option value="AP">Andhra Pradesh</option>
                                                <option value="AR">Arunachal Pradesh</option>
                                                <option value="AS">Assam</option>
                                                <option value="BR">Bihar</option>
                                                <option value="CH">Chandigarh</option>
                                                <option value="CT">Chhattisgarh</option>
                                                <option value="DN">Dadra and Nagar Haveli</option>
                                                <option value="DD">Daman and Diu</option>
                                                <option value="DL">Delhi</option>
                                                <option value="GA">Goa</option>
                                                <option value="GJ">Gujarat</option>
                                                <option value="HR">Haryana</option>
                                                <option value="HP">Himachal Pradesh</option>
                                                <option value="JK">Jammu and Kashmir</option>
                                                <option value="JH">Jharkhand</option>
                                                <option value="KA">Karnataka</option>
                                                <option value="KL">Kerala</option>
                                                <option value="LA">Ladakh</option>
                                                <option value="LD">Lakshadweep</option>
                                                <option value="MP">Madhya Pradesh</option>
                                                <option value="MH">Maharashtra</option>
                                                <option value="MN">Manipur</option>
                                                <option value="ML">Meghalaya</option>
                                                <option value="MZ">Mizoram</option>
                                                <option value="NL">Nagaland</option>
                                                <option value="OR">Odisha</option>
                                                <option value="PY">Puducherry</option>
                                                <option value="PB">Punjab</option>
                                                <option value="RJ">Rajasthan</option>
                                                <option value="SK">Sikkim</option>
                                                <option value="TN">Tamil Nadu</option>
                                                <option value="TG">Telangana</option>
                                                <option value="TR">Tripura</option>
                                                <option value="UP">Uttar Pradesh</option>
                                                <option value="UT">Uttarakhand</option>
                                                <option value="WB">West Bengal</option>
                                            </select>
                                        </div>
                                        <div className="input-prepend mb-2">
                                            <input type="tel" id="phone" className="form-control" name="" placeholder="Phone" />
                                        </div>
                                        <div className="input-prepend mb-2">
                                            <input type="text" id="" className="form-control" name="" placeholder="Email" />
                                        </div>
                                        <div className="input-prepend mb-4 mt-4">
                                            <img src={buy_now} class="trial_buy_now_btn heart" />
                                        </div>
                                        <div class="input-prepend mb-2 mt-2">
                                            <img src={payment_logo} class="trial_logo_btn" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>
        </section>                         
        <div className="container">

            <section id="free_trial_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="title title-center ls-s mb-8 dis_block">Know About Our FREE TRIAL!</h2>
                            <p className="text-center">According to journal of Marketing Research published by American Marketing Association.</p>
                            <p className="text-center">“The challenge of retaining customers acquired with free trials”.</p>
                            <p className="text-left">There are people who refuse to buy online products due to several reasons. One of it making them
                            to hesitate is, being skeptic about the quality and originality of the product. Hence, we, Liven Science are the first to introduce exclusive Free Trial Deal, that gives you a specific time duration to experience the efficacy of the product that too for FREE. Availing this trial, helps you to check whether the formula delivers you the right results before you buy it. This offer from us ensures our confidence in the formula which are highly recommended by nutritionists for vital support. We Value our Customers and their Satisfaction sincerely.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="element-section mb-10">
                <div className="container">
                    <h2 className="title title-center ls-s mb-8 dis_block">Liven Burn is Safe!</h2>
                    <div className="row elements justify-content-center">
                        <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                            <a href="#" className="element-type">
                                <div className="element element-accordian dotted_border">
                                    <img src={a_1} className="whole_food_img" />
                                    <p>Gluten Free</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                            <a href="#" className="element-type">
                                <div className="element element-icon dotted_border">
                                    <img src={a_2} className="whole_food_img" />
                                    <p>Sugar Free</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                            <a href="#" className="element-type">
                                <div className="element element-blog dotted_border">
                                    <img src={a_3} className="whole_food_img" />
                                    <p>Corn Free</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                            <a href="#" className="element-type">
                                <div className="element element-icon dotted_border">
                                    <img src={a_4} className="whole_food_img" />
                                    <p>Trans Fats Free</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                            <a href="#" className="element-type">
                                <div className="element element-button dotted_border">
                                    <img src={a_5} className="whole_food_img" />
                                    <p>Soy Free</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                            <a href="#" className="element-type">
                                <div className="element element-button dotted_border">
                                    <img src={a_6} className="whole_food_img" />
                                    <p>Paraben Free</p>
                                </div>
                            </a>
                        </div>
                        <div className="" style={{display:"none"}}>
                        <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                            <a href="#" className="element-type">
                                <div className="element element-icon dotted_border">
                                    <img src={a_7} className="whole_food_img" />
                                    <p>Sulfites Free</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                            <a href="#" className="element-type">
                                <div className="element element-button dotted_border">
                                    <img src={a_8} className="whole_food_img" />
                                    <p>Gmo Free</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                            <a href="#" className="element-type">
                                <div className="element element-button dotted_border">
                                    <img src={a_9} className="whole_food_img" />
                                    <p>Egg Free</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                            <a href="#" className="element-type">
                                <div className="element element-button dotted_border">
                                    <img src={a_10} className="whole_food_img" />
                                    <p>Nitrates Free</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                            <a href="#" className="element-type">
                                <div className="element element-button dotted_border">
                                    <img src={a_11} className="whole_food_img" />
                                    <p>Nuts Free</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                            <a href="#" className="element-type">
                                <div className="element element-button dotted_border">
                                    <img src={a_12} className="whole_food_img" />
                                    <p>Dairy Free</p>
                                </div>
                            </a>
                        </div>
                        </div>

                    </div>
                   
                </div>
            </section>

            <section className="element-section mt-9 mb-9" id="why_choose_image">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-7">
                            <h2 className="description-title mb-4 font-weight-semi-bold ls-m">How to Use?</h2>
                            <ul className="mb-8">
                                <li><b>Pop</b>: Remove the Desiccant cap. product image here</li>
                                <li><b>Drop</b>: Put 1 tab in a glass of water (250ml).</li>
                                <li><b>Fizz</b>: Wait till it dissolves.</li>
                                <li><b>Savour</b>: Drink it for tasting the delicious benefits of Liven BURN with ACV.</li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <img src={usage_img} style={{width: "85%"}} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="input-prepend text-center mt-10">
                                <a href="#trial_free_section" className="flex-gap">
                                    <img src={claim_now} className="wid_60" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section  id="absolute_cart">
                <div className="container">
                    <h2 className="title title-center ls-s mb-8 dis_block">Who to take Liven Burn with ACV?</h2>
                    <br />
                    <div className="row mt-10" style={{display: "none"}}>
                        <div className="col-sm-3">
                            <div className="icon-box icon-inversed text-center">
                                <span className="icon-box-icon">
                                    
                                    <img src={radius_1} alt="category" />
                                </span>
                                <div className="icon-box-content">
                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="icon-box icon-inversed text-center">
                                <span className="icon-box-icon">
                                    
                                    <img src={radius_2} alt="category" />
                                </span>
                                <div className="icon-box-content">
                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="icon-box icon-inversed text-center">
                                <span className="icon-box-icon">
                                    
                                    <img src={radius_3} alt="category" />
                                </span>
                                <div className="icon-box-content">
                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="icon-box icon-inversed text-center">
                                <span className="icon-box-icon">
                                   
                                    <img src={radius_4} alt="category" />
                                </span>
                                <div className="icon-box-content">
                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pro_feature">
                        <div className="col-sm-12">
                            <img src={apple_feature} className="acv_img"/>
                        </div>
                    </div>
                    
                    <div className="row mt-5" style={{display:"none"}}>
                        <div className="col-sm-8">
                            <div className="row">
                                <h2 className="description-title mb-4 font-weight-semi-bold ls-m">What is the right time to consume?</h2>
                                <div className="col-lg-6 col-12 text-center mt-md-0">
                                    <div className="icon-box icon-box1 pt-0">
                                        <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                                            <figure>
                                                <img src={radius_1} alt="icon" width="100" height="auto" />
                                            </figure>
                                        </div>
                                        <div className="icon-box-content">
                                            <p>20 minutes before meal</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 text-center mt-md-0">
                                    <div className="icon-box icon-box1 pt-0">
                                        <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                                            <figure>
                                                <img src={radius_2} alt="icon" width="100" height="auto" />
                                            </figure>
                                        </div>
                                        <div className="icon-box-content">
                                            <p>Follow Healthy diet and exercise</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-12 text-center mt-md-0">
                                    <div className="icon-box icon-box1 pt-4">
                                        <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                                            <figure>
                                                <img src={radius_3} alt="icon" width="100" height="auto" />
                                            </figure>
                                        </div>
                                        <div className="icon-box-content">
                                            <p>Consume up to 90-180 days</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 text-center mt-md-0">
                                    <div className="icon-box icon-box1 pt-4">
                                        <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                                            <figure>
                                                <img src={radius_4} alt="icon" width="100" height="auto" />
                                            </figure>
                                        </div>
                                        <div className="icon-box-content">
                                            <p>Supports both men and women</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <img src={pro_banner_2} />
                        </div>
                    </div>

                </div>
            </section>

            {/* <section className="element-section mt-9 mb-9" id="why_choose_image">
                <div className="container">
                    <div className="row mt-10">
                        <div className="col-md-8">
                            <h2 className="description-title mb-4 font-weight-semi-bold ls-m">How Liven Burn Works?</h2>
                            <p>A pure extraction process that filters out the unnecessaries and retains the healthy compounds with the mother making the fizzy drink healthy and delicious.</p>
                            <ul className="mb-8">
                                <li>Sweet to taste with natural sweeteners!</li>
                                <li>High quality ingredients with unpasteurized fermented apple juice.</li>
                                <li>Highly beneficial to implement in daily routine.</li>
                                <li>Supports holistic health.</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <img src={why_choose} style={{width:"85%"}} />
                        </div>
                    </div>
                    <div className="row mt-5 mb-10">
                        <div className="col-md-12">
                            <h2 className="description-title mb-4 font-weight-semi-bold ls-m text-center">Why Choose Liven BURN with AVC?</h2>
                            <p className="text-left">A fizzy formula with infusion of pure ACV and Garcinia with HCA compound to control appetite, Pomegranate to boost metabolism, inulin fibers for better digestion and satiation that promotes healthy weight loss. A fizzy formula with infusion of pure ACV and Garcinia with HCA compound to control appetite, Pomegranate to boost metabolism, inulin fibers for better digestion and satiation that promotes healthy weight loss.</p>
                            <p className="text-left">A fizzy formula with infusion of pure ACV and Garcinia with HCA compound to control appetite, Pomegranate to boost metabolism, inulin fibers for better digestion and satiation that promotes healthy weight loss.</p>
                        </div>
                    </div>
                    <div className="row burn_works mb-10" style="display:none;">
                        <div className="col-sm-4 burn_works">
                            <img src={a} className="pro_des_icon2" />
                            Provides Antioxidants & Skin Support
                        </div>
                        <div className="col-sm-4 burn_works">
                            <img src={b} className="pro_des_icon2" />
                            Enhances Fat-Burning
                        </div>
                        <div className="col-sm-4 burn_works">
                            <img src="images/demos/demo-food2/products/c.png" className="pro_des_icon2" />
                            Suppresses Cravings
                        </div>
                        <div className="col-sm-4 burn_works">
                            <img src={d} className="pro_des_icon2" />
                            Supports Heart Health
                        </div>
                        <div className="col-sm-4 burn_works">
                            <img src={e} className="pro_des_icon2" />
                            Keeps You Hydrated
                        </div>
                        <div className="col-sm-4 burn_works">
                            <img src={f} className="pro_des_icon2" />
                            Delicious
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="arrivals-section appear-animate" id="Potential_product">
                <h2 className="title title-center ls-s mb-8 mt-9 dis_block">Includes Healing Potential of:</h2>
                <div className="tab tab-nav-center">
                    <div className="tab-content">
                        <div className="tab-pane pt-4 active" id="fruits">
                        <OwlCarousel
                                className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                    margin={20}
                                    nav
                                    // smartSpeed={500}
                                    dots={false}
                                    navContainerClass={"owl-nav"}
                                    responsive={{
                                        0: {
                                            'items': 1
                                        },
                                        768: {
                                            'items': 3
                                        },
                                        992: {
                                            'items': 4
                                        }
                                    }}
                                    // autoplay
                                    loop
                                    autoplayTimeout={2000}
                                    autoplayHoverPause={true}
                            >



                                <div className="product text-center product-with-qty no_border">
                                    <figure className="product-media">
                                        <a href="$">
                                            <img src={app_1} alt="product" width="280" height="315" />
                                            <img src={app_11} alt="product" width="280" height="315" />
                                        </a>
                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-plus"></i></a>
                                        </div>
                                    </figure>
                                </div>
                                <div className="product text-center product-with-qty no_border">
                                    <figure className="product-media">
                                        <a href="$">
                                            <img src={app_2} alt="product" width="280" height="315" />
                                            <img src={app_22} alt="product" width="280" height="315" />
                                        </a>
                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-plus"></i></a>
                                        </div>
                                    </figure>
                                </div>
                                <div className="product text-center product-with-qty no_border">
                                    <figure className="product-media">
                                        <a href="$">
                                            <img src={app_3} alt="product" width="280" height="315" />
                                            <img src={app_33} alt="product" width="280" height="315" />
                                        </a>
                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-plus"></i></a>
                                        </div>
                                    </figure>
                                </div>
                                <div className="product text-center product-with-qty no_border">
                                    <figure className="product-media">
                                        <a href="$">
                                            <img src={app_4} alt="product" width="280" height="315" />
                                            <img src={app_44} alt="product" width="280" height="315" />
                                        </a>
                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-plus"></i></a>
                                        </div>
                                    </figure>
                                </div>
                                <div className="product text-center product-with-qty no_border">
                                    <figure className="product-media">
                                        <a href="$">
                                            <img src={app_5} alt="product" width="280" height="315" />
                                            <img src={app_55} alt="product" width="280" height="315" />
                                        </a>
                                    </figure>
                                </div>
                             </OwlCarousel> 

                            <div className="input-prepend text-center mt-10">
                                <a href="#trial_free_section" className="flex-gap">
                                    <img src={claim_now} className="wid_60" />
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


            <section class="new_our_idea pt-2 pt-md-7 pt-10 pb-8">
                <div class="container p-0">
                    <h2 class="title-echo mb-1"><span>Clear Your Mind Now! Answers for Your Queries!</span></h2>
                    <br />
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="code-template">
                                <div class="accordion accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm code-content">
                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#collapse7-1" class="expand">Q. How many tablets a day helps taste the benefits of Liven Burn as Fitness Fuel?</a>
                                        </div>
                                        <div id="collapse7-1" class="collapsed">
                                            <div class="card-body">
                                                <p class="mb-0">Taking one tablet of Liven Burn with ACV with high inulin fiber helps in attaining nutritional weight loss support making users healthier and happier.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#collapse7-2" class="expand">Q. How and when to consume ACV tablet?</a>
                                        </div>
                                        <div id="collapse7-2" class="collapsed">
                                            <div class="card-body">
                                                <p class="mb-0">
                                                    It is better to take 1 Liven Burn ACV effervescent tablet one time a day preferably each morning on an empty stomach or 20 minutes before a meal. The usage direction is to drop
                                                    one tablet in a glass (250 ml) of water and wait until it dissolves. Now gulp down the fizzy drink for gaining excellent energy and weight loss support.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#collapse7-3" class="expand">Q. Are these effervescent tablets effective in producing long-term results?</a>
                                        </div>
                                        <div id="collapse7-3" class="collapsed">
                                            <div class="card-body">
                                                <p class="mb-0">
                                                    Yes. The ACV in each tablet is made precise and it delivers extraordinary support. Moreover, there is an additional nutritive support of garcinia, pomegranate and inulin for
                                                    enriching the health by controlling appetite and cravings and is made tastier with natural sweeteners for better results.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#collapse7-4" class="expand">Q. Does it cause bloating?</a>
                                        </div>
                                        <div id="collapse7-4" class="collapsed">
                                            <div class="card-body">
                                                <p class="mb-0">
                                                    No. The goodness of natural ACV with inulin fibers improves the healthy digestion in consumers and raises the stomach acid levels reducing the chances of bloating.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#collapse7-5" class="expand">Q. How quick the results will be?</a>
                                        </div>
                                        <div id="collapse7-5" class="collapsed">
                                            <div class="card-body">
                                                <p class="mb-0">
                                                    With Liven Burn ACV Effervescent tablets, the users can enjoy incredible results. But consistent dosing method is essential for gaining effective results which is why the
                                                    tablets are made simple, delicious and potent for better results leaving people without any hesitation to use.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#collapse7-6" class="expand">Q. Do our ACV tablets contain Mother?</a>
                                        </div>
                                        <div id="collapse7-6" class="collapsed">
                                            <div class="card-body">
                                                <p class="mb-0">Yes. Our tablets include the ACV with mother produced during fermentation and is effective in protecting the gut health as a probiotic.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#collapse7-7" class="expand">Q. Whether Liven Burn Effervescent drink tastes sour and bitter?</a>
                                        </div>
                                        <div id="collapse7-7" class="collapsed">
                                            <div class="card-body">
                                                <p class="mb-0">
                                                    Liven Burn fizzy drink is made to taste sweet and it has no added sugar or preservatives. It is made of proper dilution and never leads to any adverse side effects.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="span12">
                                <div class="thumbnail center well well-small text-center">
                                    <h2>Newsletter</h2>
                                    <p>Subscribe to our weekly Newsletter and stay tuned.</p>
                                    <form action="" method="post">
                                        <div class="input-prepend">
                                            <input type="text" id="" class="form-control" name="" placeholder="your@email.com" />
                                        </div>
                                        <br />
                                        <input type="submit" value="Subscribe Now!" class="btn btn-large" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        </>
    );

}



export default Free_Trial_Section;