import React from "react";
import "./style.scss";
import images from "../../utils/images.json";

const ContestTermsAndConditions = () => {
  return (
    <>
      <section className="privacy-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="privacy-inner">
                <div className="all-para-style">
                  <h3>BIG MAD WINNINGS CONTEST</h3>
                  <h3>ABOUT THE CONTEST</h3>
                  {/* <p>
                    JUMP.TRADE is owned and operated by Guardian Blockchain Labs
                    Pte. Ltd., a Limited Liability Company registered in
                    Singapore and the United States of America. The Platform
                    allows and facilitates acquiring of "Digital Collectible(s)
                    or Collectible(s)" (Defined Below) through "Purchase"
                    (Defined Below) or "Auction" (Defined Below).
                  </p> */}
                  <p>
                    This ‘BIG MAD WINNINGS’ contest ("<b>Contest</b>") is provided to you by Guardian Blockchain Labs Pte. Ltd., Singapore (“<b>Company</b>”) and made available on www.jump.trade and its mobile application/site thereof (collectively, "<b>Jump.trade</b>").
                  </p>
                  <p>
                    Please read these terms and conditions ("<b>T&Cs</b>") before entering the Contest. You agree that by participating in this Contest, you will be bound by these T&Cs and you acknowledge that you satisfy all Contest eligibility requirements as provided herein below.
                  </p>
                  <p>For the purposes of these T&Cs, wherever the context so requires "You" or "Your" or “Participant” shall mean any natural person who is a participant in the Contest
                  </p>
                  <h4>DURATION</h4>
                  <p>14th September 2022 4:00:00 PM IST to 14th October 2022 3:59:59 PM IST (“<b>Contest Period</b>”)</p>
                  <h4>ELIGIBILITY</h4>
                  <ol>
                    <li>
                      To enter the contest, You must (a) be signed-in/ sign-up from your Jump.trade account; (b) be above 18 years of age; and (c) purchase at least 2 NFTs (1 Batsman and 1 Bowler NFT) from Jump.trade during the Contest Period.
                    </li>
                    <li>
                      The purchase of NFTs shall be considered to be eligible for the Contest, only if the full and final settlement has been made for the same. If You have raised any disputes on the purchase of NFT such as refund disputes, etc, then You shall not be eligible to participate in the Contest.
                    </li>
                    <li>
                      Employees of Company, affiliates, advisors, advertising/Contest agencies are prohibited from participating in the Contest.
                    </li>
                    <li>
                      The participant agrees that they are cognizant of the rules and regulations of their states/jurisdictions regarding participation in such contests and the participant agrees that they are solely responsible for any discrepancies that might arise.
                    </li>
                  </ol>
                </div>
                <div className="all-para-style">
                  <h4>WINNER SELECTION</h4>
                  <ol>
                    <li>
                      At the end of the Contest Period, 100 participants will be selected from the participants who have purchased a Batsman NFT and a Bowler NFT during the Contest Period (14th September 2022 4:00:00 PM IST to 14th October 2022 3:59:59 PM IST) as winners of the Contest (“<b>Winners</b>”).
                    </li>
                    <li>
                      Selection of the Winners will be on the sole discretion of the Jump.trade and no disputes will be entertained on the selection process.
                    </li>
                    <li>
                      Each selected participant will be eligible to receive a maximum of only one prize under this Contest.
                    </li>
                    <li>
                      Names of the Winners will be published on the Contest page latest by [TBA] or any other date decided by Jump.trade. The Winners will be required to comply with certain post-winning conditions such as deposit the requisite TDS and ancillary costs, providing requisite documents etc., (“<b>Prize drawing conditions</b>”) within 7 days from the date of announcement of the winners. In case the winners fail to comply with the said conditions within [7 days] from the date of declaration of the Winner or violates any T&Cs, then the winnings of the Participant shall stand forfeited.
                    </li>
                    <li>
                      Jump.trade shall not entertain any disputes with respect to the forfeiture of winnings of a Participant owing to non-compliance with Prize drawing conditions within the time prescribed by Jump.trade.
                    </li>
                    <li>
                      The selected Winners, who have complied with the prize drawing conditions, will receive the prize by [TBA]. Winner will not have any claim or right over the prizes declared unless they deposit the requisite TDS and ancillary costs for receiving the prize with the Company, wherever applicable.
                    </li>
                  </ol>
                </div>
                <div className="all-para-style">
                  <h4>PRIZES:</h4>
                  <ol>
                    <li>
                      Amongst all the Participants of the Contest, 100 Participants will be selected by Jump.trade to receive the following prizes:
                    </li>
                    <img src={images?.table_contest}>
                    </img>
                    <li>
                      Receipt of the prizes by the Winners shall be subject to payment of TDS and ancillary costs and compliance with other prize drawing conditions, wherever applicable.
                    </li>
                    <li>
                      Prize won by the Winner shall be non-transferable. Prize shall only be provided to the Participant whose Jump.trade account is used to participate in the Contest. The KYC details provided by the Participant must match the documents submitted by the Winner
                    </li>
                    <li>
                      The prizes are not encashable, and TDS and other taxes on the prize will be levied as applicable. If the winner is not able to pay the TDS and other taxes associated with the prize, then they forfeit their claim to the Prize.
                    </li>
                    <li>
                      G 310 R Standard
                      <ul>
                        <li>
                          In case the mentioned model is not available, a bike of the similar category and value will be given.
                        </li>
                        <li>
                          As automobiles may have different showroom prices for vehicles in different states, Jump.trade have considered New Delhi, India ex-showroom prices which is Rs. 3.04 Lakh approximately. The winner will bear any differential of amount on the same model in any separate state.
                        </li>
                        <li>
                          For non-Indian winners, if the above prize is not available because of any unforeseen or extraordinary circumstances, Jump.trade holds the right to reimburse the user for the said amount exclusive of any applicable taxes and other deductions.
                        </li>
                        <li>
                          For Indian winners, the income tax called TDS (tax deducted at source), road tax and insurance tax, and other charges, such as delivery fees, handling fees, etc., will be deducted against the value of the bike as per the tax rules, which shall be borne by the winner.
                        </li>
                        <li>
                          The color of the vehicle is subject to availability.
                        </li>
                        <li>
                          Indian winners will need to take care of RTO formalities by themselves.
                        </li>
                        <li>
                          The bike will be provided after the completion of Big Mad Winnings Contest as per availability of the bike in the winner’s location/city.
                        </li>
                        <li>
                          BMW is not involved in any form with Jump.trade for promotional or sponsorship purposes for the Big Mad Winnings Contest.
                        </li>
                        <li>Prizes are non-transferable.</li>
                      </ul>
                    </li>
                    <li>Apple iPhone 14 (128 GB)
                      <ul>
                        <li>If the above prize is not available because of any unforeseen circumstances, a device of a similar category and value will be given.</li>
                        <li>For Indian winners, the income tax called TDS (tax deducted at source) will be deducted against the value of the Apple iPhone 14 as per the income tax rules, which shall be borne by the winner.</li>
                        <li>Winners have to take care of additional charges, such as delivery fees, handling fees, etc., and formalities, such as custom duty, etc., wherever applicable, by themselves.</li>
                        <li>The color of the gadget is subject to availability.</li>
                        <li>The gadgets will be provided after the completion of the Big Mad Winnings Contest, as per availability in the winner’s location/city.</li>
                        <li>Apple is not involved in any form with Jump.trade for promotional or sponsorship purposes for the Big Mad Winnings Contest.</li>
                        <li>Prizes are non-transferable.</li>
                      </ul>
                    </li>
                    <li>ASUS TUF Gaming A17 Ryzen 7 Octa Core 4800H (512 GB)
                      <ul>
                        <li>If the above prize is not available because of any unforeseen circumstances, a device of a similar category and value will be given.</li>
                        <li>For Indian winners, the income tax called TDS (tax deducted at source) will be deducted against the value of the ASUS Gaming Laptop as per the income tax rules, which shall be borne by the winner.</li>
                        <li>Winners have to take care of additional charges, such as delivery fees, handling fees, etc., and formalities, such as custom duty, etc., wherever applicable, by themselves.</li>
                        <li>The color of the gadget is subject to availability.</li>
                        <li>The gadgets will be provided after the completion of the Big Mad Winnings Contest, as per availability in the winner’s location/city.</li>
                        <li>ASUS is not involved in any form with Jump.trade for promotional or sponsorship purposes for the Big Mad Winnings Contest.</li>
                        <li>Prizes are non-transferable.</li>

                      </ul>
                    </li>
                    <li>Sony PlayStation 5 (825 GB)
                      <ul>
                        <li>If the above prize is not available because of any unforeseen circumstances, a device of a similar category and value will be given. The winner cannot encash </li>
                        <li>For Indian winners, the income tax called TDS (tax deducted at source) will be deducted against the value of the Sony PlayStation 5 as per the income tax rules, which shall be borne by the winner.</li>
                        <li>Winners have to take care of additional charges, such as delivery fees, handling fees, etc., and formalities, such as custom duty, etc., wherever applicable, by themselves.</li>
                        <li>The color of the gadget is subject to availability.</li>
                        <li>The gadgets will be provided after the completion of the Big Mad Winnings Contest, as per availability in the winner’s location/city.</li>
                        <li>Sony is not involved in any form with Jump.trade for promotional or sponsorship purposes for the Big Mad Winnings Contest.</li>
                        <li>Prizes are non-transferable.</li>

                      </ul>
                    </li>
                    <li>Nothing Phone (1) (128 GB)
                      <ul>
                        <li>If the above prize is not available because of any unforeseen circumstances, a device of a similar category and value will be given. The winner cannot encash </li>
                        <li>For Indian winners, the income tax called TDS (tax deducted at source) will be deducted against the value of the Nothing Phone (1) as per the income tax rules, which shall be borne by the winner.</li>
                        <li>Winners have to take care of additional charges, such as delivery fees, handling fees, etc., and formalities, such as custom duty, etc., wherever applicable, by themselves.</li>
                        <li>The color of the gadget is subject to availability.</li>
                        <li>The gadgets will be provided after the completion of the Big Mad Winnings Contest, as per availability in the winner’s location/city.</li>
                        <li>Nothing is not involved in any form with Jump.trade for promotional or sponsorship purposes for the Big Mad Winnings Contest.</li>
                        <li>Prizes are non-transferable.</li>

                      </ul>
                    </li>
                    <li>Xbox Series S (512 GB)
                      <ul>
                        If the above prize is not available because of any unforeseen circumstances, a device of a similar category and value will be given. The winner cannot encash
                        For Indian winners, the income tax called TDS (tax deducted at source) will be deducted against the value of the Xbox Series S as per the income tax rules, which shall be borne by the winner.
                        Winners have to take care of additional charges, such as delivery fees, handling fees, etc., and formalities, such as custom duty, etc., wherever applicable, by themselves.
                        The color of the gadget is subject to availability.
                        The gadgets will be provided after the completion of the Big Mad Winnings Contest, as per availability in the winner’s location/city.
                        Microsoft is not involved in any form with Jump.trade for promotional or sponsorship purposes for the Big Mad Winnings Contest.
                        Prizes are non-transferable.

                      </ul>
                    </li>
                    <li>OnePlus Smart Android LED TV 43 Y1S (43 inches)
                      <ul>
                        <li>If the above prize is not available because of any unforeseen circumstances, a device of a similar category and value will be given. The winner cannot encash </li>
                        <li>For Indian winners, the income tax called TDS (tax deducted at source) will be deducted against the value of the OnePlus Smart Android LED TV as per the income tax rules, which shall be borne by the winner.</li>
                        <li>Winners have to take care of additional charges, such as delivery fees, handling fees, etc., and formalities, such as custom duty, etc., wherever applicable, by themselves.</li>
                        <li>The color of the gadget is subject to availability.</li>
                        <li>The gadgets will be provided after the completion of the Big Mad Winnings Contest, as per availability in the winner’s location/city.</li>
                        <li>OnePlus is not involved in any form with Jump.trade for promotional or sponsorship purposes for the Big Mad Winnings Contest.</li>
                        <li>Prizes are non-transferable.</li>
                      </ul>
                    </li>
                    <li>Samsung Galaxy Tab A8 (10.5 inch) (64 GB)
                      <ul>
                        <li>If the above prize is not available because of any unforeseen circumstances, a device of a similar category and value will be given. The winner cannot encash </li>
                        <li>For Indian winners, the income tax called TDS (tax deducted at source) will be deducted against the value of the Samsung Galaxy Tab as per the income tax rules, which shall be borne by the winner.</li>
                        <li>Winners have to take care of additional charges, such as delivery fees, handling fees, etc., and formalities, such as custom duty, etc., wherever applicable, by themselves.</li>
                        <li>The color of the gadget is subject to availability.</li>
                        <li>The gadgets will be provided after the completion of the Big Mad Winnings Contest, as per availability in the winner’s location/city.</li>
                        <li>Samsung is not involved in any form with Jump.trade for promotional or sponsorship purposes for the Big Mad Winnings Contest.</li>
                        <li>Prizes are non-transferable.</li>
                      </ul>
                    </li>
                    <li>Fossil Gen 5 Touchscreen Smartwatch
                      <ul>
                        <li>If the above prize is not available because of any unforeseen circumstances, a device of a similar category and value will be given. The winner cannot encash </li>
                        <li>For Indian winners, the income tax called TDS (tax deducted at source) will be deducted against the value of the Fossil Watch, which shall be borne by the winner.</li>
                        <li>Winners have to take care of additional charges, such as delivery fees, handling fees, etc., and formalities, such as custom duty, etc., wherever applicable, by themselves.</li>
                        <li>The color of the gadget is subject to availability.</li>
                        <li>The gadgets will be provided after the completion of the Big Mad Winnings Contest, as per availability in the winner’s location/city.</li>
                        <li>Fossil is not involved in any form with Jump.trade for promotional or sponsorship purposes for the Big Mad Winnings Contest.</li>
                        <li>Prizes are non-transferable.</li>

                      </ul>
                    </li>
                    <li>Fitbit Inspire 2
                      <ul>
                        <li>If the above prize is not available because of any unforeseen circumstances, a device of a similar category and value will be given. The winner cannot encash </li>
                        <li>For Indian winners, the income tax called TDS (tax deducted at source) will be deducted against the value of the Fitbit Watch, which shall be borne by the winner.</li>
                        <li>Winners have to take care of additional charges, such as delivery fees, handling fees, etc., and formalities, such as custom duty, etc., wherever applicable, by themselves.</li>
                        <li>The color of the gadget is subject to availability.</li>
                        <li>The gadgets will be provided after the completion of the Big Mad Winnings Contest, as per availability in the winner’s location/city.</li>
                        <li>Fitbit is not involved in any form with Jump.trade for promotional or sponsorship purposes for the Big Mad Winnings Contest.</li>
                        <li>Prizes are non-transferable.</li>
                      </ul>
                    </li>
                    <li>OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones
                      <ul>
                        <li>If the above prize is not available because of any unforeseen circumstances, a device of a similar category and value will be given. The winner cannot encash </li>
                        <li>For Indian winners, the income tax called TDS (tax deducted at source) will be deducted against the value of the OnePlus Headset, which shall be borne by the winner.</li>
                        <li>Winners have to take care of additional charges, such as delivery fees, handling fees, etc., and formalities, such as custom duty, etc., wherever applicable, by themselves.</li>
                        <li>The color of the gadget is subject to availability.</li>
                        <li>The gadgets will be provided after the completion of the Big Mad Winnings Contest, as per availability in the winner’s location/city.</li>
                        <li>OnePlus is not involved in any form with Jump.trade for promotional or sponsorship purposes for the Big Mad Winnings Contest.</li>
                        <li>Prizes are non-transferable.</li>
                      </ul>
                    </li>
                    <li>JBL Go 2, Wireless Portable Bluetooth Speaker
                      <ul>
                        <li>If the above prize is not available because of any unforeseen circumstances, a device of a similar category and value will be given. The winner cannot encash </li>
                        <li>For Indian winners, the income tax called TDS (tax deducted at source) will be deducted against the value of the JBL Speaker, which shall be borne by the winner.</li>
                        <li>Winners have to take care of additional charges, such as delivery fees, handling fees, etc., and formalities, such as custom duty, etc., wherever applicable, by themselves.</li>
                        <li>The color of the gadget is subject to availability.</li>
                        <li>The gadgets will be provided after the completion of the Big Mad Winnings Contest, as per availability in the winner’s location/city.</li>
                        <li>JBL is not involved in any form with Jump.trade for promotional or sponsorship purposes for the Big Mad Winnings Contest.</li>
                        <li>Prizes are non-transferable.</li>
                      </ul>
                    </li>
                    <li>boAt Airdopes 121v2 True Wireless Earbuds
                      <ul>
                        <li>If the above prize is not available because of any unforeseen circumstances, a device of a similar category and value will be given. The winner cannot encash </li>
                        <li>For Indian winners, the income tax called TDS (tax deducted at source) will be deducted against the value of the boAt Headset, which shall be borne by the winner.</li>
                        <li>Winners have to take care of additional charges, such as delivery fees, handling fees, etc., and formalities, such as custom duty, etc., wherever applicable, by themselves.</li>
                        <li>The color of the gadget is subject to availability.</li>
                        <li>The gadgets will be provided after the completion of the Big Mad Winnings Contest, as per availability in the winner’s location/city.</li>
                        <li>boAt is not involved in any form with Jump.trade for promotional or sponsorship purposes for the Big Mad Winnings Contest.</li>
                        <li>Prizes are non-transferable.</li>
                      </ul>
                    </li>
                  </ol>
                </div>
                <div className="all-para-style">
                  <h4>PRIZE DRAWING CONDITIONS:</h4>
                  <ol>
                    <li>
                      Upon declaration of Winners, the respective Winners shall have to complete certain conditions within 7 days (TBA) from the date of announcement of the winners of the Contest. The conditions are as under:
                      <ol type="i">
                        <li>
                          Winners will be required to answer a simple question and share a valid proof of identity and age in the form of a copy of PAN Card / Driving License / Voter ID / Passport or other valid Government-issued documentation over email. For Indian winners, a PAN card copy is mandatory for prizes worth INR 10,000 or more;

                        </li>
                        <li>
                          The Winner will also be required to prove his/her age and residence proof;

                        </li>
                        <li>
                          For Indian winners, the income tax called TDS (tax deducted at source) shall have to be paid by the Winner to designated account indicated by Jump.trade for the prize won by the Winner. Income tax to be deposited by the Winner shall be 31.2% of the value of the prize won.

                        </li>
                        <li>
                          Prizes shall be eligible for pickup from TBA. If the Winners require for the prizes to be delivered to them, then all delivery charges, including customs taxes and charges as applicable, if any, shall be payable by the Winner.

                        </li>
                      </ol>
                    </li>
                    <li>
                      The Winner who wins BMW G 310 R Standard bike will be specifically required to pay for all the registrations costs, RTO charges, insurance, Road Tax etc, cooperate with all the documentation requirements of the seller and statutory authorities. If the Winner fails to cooperate and pay for the requisite costs, he shall automatically forfeit his/her claim to the Prize.
                    </li>
                    <li>
                      The Winner who wins BMW G 310 R Standard bike will be specifically required to pay for all the registrations costs, RTO charges, insurance, Road Tax etc, cooperate with all the documentation requirements of the seller and statutory authorities. If the Winner fails to cooperate and pay for the requisite costs, he shall automatically forfeit his/her claim to the Prize.
                    </li>
                    <li>
                      Each Prize will be awarded "AS IS" and WITHOUT WARRANTY OF ANY KIND, express or implied (including, without limitation, any implied warranty of merchantability or fitness for a particular purpose).
                    </li>
                    <li>
                      There will be no cash or other prize alternatives available in whole or in part. However, in circumstances beyond control, Jump.trade may substitute a similar alternative prize of equal or greater value in our sole discretion.
                    </li>
                    <li>If any Winner of the Contest does not respond back to any communications sent in relation to the Contest within the time period communicated by the Company, he/she shall not be eligible to be declared winner of the Prize. In such a case, an alternate Winner may not be selected by Jump.trade.
                    </li>
                  </ol>
                </div>
                <div className="all-para-style">
                  <h4>ADDITIONAL TERMS:</h4>
                  <ol>
                    <li>
                      Jump.trade may, to the maximum extent permitted by applicable law and in our sole discretion, change the T&Cs or cancel the Contest at any time; or modify, terminate, or suspend the Contest should viruses, worms, bugs, unauthorized human intervention, or other causes beyond our control corrupt or impair the administration, security, fairness or proper play of the Contest or submission of entries.
                    </li>

                    <li>
                      Jump.trade shall not be responsible for: (a) lost, misdirected, late, incomplete, or unintelligible entries or for inaccurate entry information, whether caused by you or by any of the equipment or programming associated with or utilized in the Contest, or by any technical or human error that may occur in the processing of entries; (b) any printing or typographical errors in any materials associated with the Contest; (c) any error in the operation or transmission, theft, destruction, unauthorized access to, or alteration of, entries, or for technical, network, telephone, computer, hardware or software, malfunctions of any kind, or inaccurate transmission of, or failure to receive any entry information on account of technical problems or traffic congestion on the Internet or at any website; or (d) injury or damage to your or any other computer or mobile resulting from downloading any materials in connection with the Contest.

                    </li>
                    <li>
                      Jump.trade may, in its sole discretion, disqualify any individual found to be: (a) tampering with the entry process or the operation of the Contest or website or mobile application; (b) acting in violation of these T&Cs; or (c) acting in an unsportsmanlike or disruptive manner or with intent to annoy, abuse, threaten or harass any other person.

                    </li>

                    <li>
                      If your entry is incomplete or if you use robotic, automatic, programmed, or similar entry methods, your entry will be void. The authorized subscriber of the e-mail account used to enter the Contest at the actual time of entry will be deemed to be the participant and must comply with these T&Cs in the event of a dispute as to entries submitted by multiple users having the same email account.

                    </li>
                    <li>
                      The authorized account subscriber is the natural person who is assigned an email address by an internet access provider, on-line service provider, or other organization responsible for assigning email addresses for the domains associated with the submitted e-mail addresses. No benefits greater than those specified in the T&Cs will be awarded to the Winner.

                    </li>
                    <li>
                      You agree that you are cognizant of the rules and regulations of your state regarding participation in such contests and you agree that you will be solely responsible for any discrepancies that might arise.

                    </li>
                    <li>
                      You further agree that the Contest is not a game and merely a promotion campaign undertaken by Jump.trade to promote its website. The Contest is part of marketing campaign of the platform to create awareness.
                    </li>
                  </ol>
                </div>
                <div className="all-para-style">
                  <h4>MAILING LIST:</h4>
                  <ul>
                    <li>
                      By entering the Contest, you consent to being placed on a
                      mailing list for promotional and other materials for
                      Jump.trade. You may update or change your email
                      preferences at the email preferences page.
                    </li>
                  </ul>
                </div>
                <div className="all-para-style">
                  <h4>OTHER CONTESTS:</h4>
                  <ul>
                    <li>
                      Please note that Jump.trade may be running similar
                      contests or promotions at the same time as this Contest.
                      By entering this Contest, you will not be eligible to
                      receive any benefit awarded in any other promotion/
                      contest unless you enter each promotion/ contest
                      separately.
                    </li>
                  </ul>
                </div>
                <div className="all-para-style">
                  <h4>MISCELLANEOUS:</h4>
                  <ul>
                    <li>
                      The Contest is governed by the laws of the Republic of
                      India. The Contest and all accompanying materials are ©
                      2022 by Jump.trade, or its affiliates. All rights
                      reserved. No requests for transfer or assignment or
                      redemption of the benefits shall be entertained. You agree
                      that allJump.trade' decisions related to the Contest are
                      final and binding on you. Failure byJump.trade to enforce
                      any of these T&amp;Cs in any instance shall not be deemed
                      to be a waiver of the T&amp;Cs and shall not give rise to
                      any claim by any person.
                    </li>
                    <li>
                      These T&amp;Cs are subject to Indian laws and the courts
                      at Chennai shall have the exclusive jurisdiction in
                      respect of any disputes or any matter arising here from.
                    </li>
                  </ul>
                </div>
                <div className="all-para-style">
                  <h4>FORCE MAJEURE</h4>
                  <ul>
                    <li>
                      This Contest is subject to force majeure circumstances
                      including without limitation, floods, natural disasters,
                      war, act of terror, political unrests, technical snags,
                      act of God or any circumstance beyond the reasonable
                      control of Jump.trade ("Force Majeure Event").
                    </li>
                    <li>
                      Jump.trade shall be not liable for any delay or adverse
                      effect caused to the participants in the Contest including
                      the winners as a result of a Force Majeure Event.
                    </li>
                  </ul>
                </div>
                <div className="all-para-style">
                  <h4>PUBLICITY RELEASE:</h4>
                  <ul>
                    <li>
                      By participating in the Contest, you give Jump.trade and/
                      or its affiliates permission to use your name, likeness,
                      image, voice, and/or appearance as such may be embodied in
                      any pictures, photos, video recordings, audiotapes,
                      digital images, and the like, taken or made in relation to
                      the Contest and any promotions, events, or contests to
                      follow. You agree that Jump.trade and/ or its affiliates
                      have the right to publish your saved item details for any
                      communication, promotions, events, or contests that
                      follow. You agree that Jump.trade and/ or its affiliates
                      have complete ownership of such pictures, etc., including
                      the entire copyright, and may use them for any purpose.
                    </li>
                    <li>
                      These uses include, but are not limited to illustrations,
                      bulletins, exhibitions, videotapes, reprints,
                      reproductions, publications, advertisements, and any
                      promotional or educational materials in any medium now
                      known or later developed, including the internet. You
                      acknowledge that you will not receive any compensation,
                      etc. for the use of such pictures, etc., and hereby
                      release Jump.trade and/ or its affiliates and its agents
                      and assigns from any and all claims which arise out of or
                      are in any way connected with such use. You give your
                      consent to Jump.trade and/or its affiliates, agents and
                      assigns to use your name and likeness to promote the
                      Contest and any promotions, events, or contests to follow.
                    </li>
                  </ul>
                </div>
                <div className="all-para-style">
                  <h4>LIABILITY RELEASE:</h4>
                  <ul>
                    <li>
                      This Contest is being made purely on a "best effort" basis
                      and participating in this Contest is voluntary. By
                      participating in the Contest, you will be legally bound
                      hereby, to release from liability, and hold harmless
                      Jump.trade, and any of its affiliates, employees or agents
                      representing or related to Jump.trade and its
                      services/products.
                    </li>
                    <li>
                      This release is for any and all liability for personal
                      injuries (including death), property loss or damage, and
                      misuse of the benefits/ Prizes offered under this Contest,
                      in connection with any activity or directly or indirectly,
                      by reason of the acceptance, possession, or participation
                      in the Contest, even if caused or contributed to by our
                      negligence. Further, you agree to bear all the personal
                      taxation that might arise out of the winnings from this
                      Contest and shall not look to Jump.trade, and any of its
                      employees or agents for payment of the same and/or any
                      dispute arising from the same.
                    </li>
                  </ul>
                </div>
                <div className="all-para-style">
                  <h4>SPONSOR:</h4>
                  <ul>
                    <li>The sponsor of this Contest is Jump.trade.</li>
                  </ul>
                </div>
                <div className="all-para-style">
                  <h4>PRIVACY NOTICE:</h4>
                  <ul>
                    <li>
                      All information submitted in connection with this Contest
                      will be treated in accordance with these T&amp;Cs and the
                      Privacy Notice available at Jump.trade.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContestTermsAndConditions;
