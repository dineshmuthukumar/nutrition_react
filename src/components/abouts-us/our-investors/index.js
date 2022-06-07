import React from "react";

import RL from "../../../images/RL.png";

import "./style.scss";

const OurInvestor = () => {
  return (
    <section className="our-investor-section">
      <div className="container-fluid">
        <div className="row mt-150">
          <div className="col-sm-12">
            <h2 className="sectionHeading">INVESTORS &amp; ADVISORS</h2>
          </div>
        </div>
      </div>
      <section className="investor-box">
        <article className="investor-member">
          <div className="investor-member-img">
            <img
              src="https://cdn.guardianlink.io/product-hotspot/images/kalari.png"
              alt="Kalaari Capital"
            />
          </div>

          <div className="investor-member-name-desc">
            <h3 className="investor-member-name">
              Kalaari <br />
              Capital
            </h3>
            <p className="investor-member-desc">
              Kalaari Capital is an early-stage, technology-focused venture
              capital firm based out of Bengaluru, India. Kalaari has empowered
              visionary entrepreneurs to build unique solutions that reshape the
              way Indians live, work, consume and transact. The firm has
              provided a launchpad for multiple start-ups with its ethos to
              partner early with founders and work with them to navigate the
              inevitable challenges of fostering ideas into successful
              businesses.
            </p>
          </div>
        </article>

        <article className="investor-member">
          <div className="investor-member-img">
            <img
              src="https://cdn.guardianlink.io/product-hotspot/images/logan.png"
              alt="Logan Anjaneyulu"
            />
          </div>

          <div className="investor-member-name-desc">
            <h3 className="investor-member-name">
              Logan <br />
              Anjaneyulu
            </h3>
            <p className="investor-member-desc">
              Alamo - Investor and Ecosystem Fund Partner Logan Anjaneyulu is an
              Indian-born American Private Equity and Venture Capitalist with
              global investments. He is the founder and managing director of
              Alamo Equity, a $1.5 billion private equity firm; and Alamo
              Capital, an early-stage venture capital firm, both headquartered
              in San Antonio, Texas. He has been a Super Angel Investor for
              multiple startups including GuardianLink.
            </p>
          </div>
        </article>

        <article className="investor-member">
          <div className="investor-member-img">
            <img
              src="https://www.guardianlink.io/product-hotspot/images/barrie.jpg"
              alt="Barrie"
            />
          </div>

          <div className="investor-member-name-desc">
            <h3 className="investor-member-name">
              Barrie <br />
              M. Osborne
            </h3>
            <p className="investor-member-desc">
              A prolific hollywood mogul, producer of Academy Award winning
              titles like Lord of the Rings, The Matrix, The Great Gatsby and
              several such epic media ventures. He is now leading Hollywood to
              adopting blockchain through ventures like GuardianLink.
            </p>
          </div>
        </article>
        <article className="investor-member">
          <div className="investor-member-img">
            <img src={RL} alt="Ross" />
          </div>

          <div className="investor-member-name-desc">
            <h3 className="investor-member-name">
              Ross
              <br />
              Levinsohn
            </h3>
            <p className="investor-member-desc">
              Current CEO of Maven Media which controls Sports Illustrated and
              The History Channel among other media brands. He is best known for
              his roles at Yahoo and Fox, Ross has served as CEO of a number of
              high profile brands -- driving change, culture and results.
            </p>
          </div>
        </article>
        <article className="investor-member">
          <div className="investor-member-img">
            <img
              src="https://www.guardianlink.io/product-hotspot/images/sonja_3.jpg"
              alt="Sonja"
            />
          </div>

          <div className="investor-member-name-desc">
            <h3 className="investor-member-name">
              Sonja <br />
              Nuttall
            </h3>
            <p className="investor-member-desc">
              Sonja Nuttall is an Advisor, Investor and Excogitation Creator in
              the field of Fashion, Tech/Crypto, and product design globally.
              She is the Founder and CEO of Jyakuen Global LLC and also a
              Co-Founder and Principal Strategist of WEARE8. As an inventive
              fashioner and specialist, she has worked with prominent fashion
              labels like DKNY, Urban Zen, and others. She is an exceptionally
              compelling personality in the New York Fashion design industry.
            </p>
          </div>
        </article>
        <article className="investor-member">
          <div className="investor-member-img">
            <img
              src="https://cdn.guardianlink.io/product-hotspot/images/maya-hari.jpg"
              alt="Sandrina"
            />
          </div>

          <div className="investor-member-name-desc">
            <h3 className="investor-member-name">
              Maya <br />
              Hari
            </h3>
            <p className="investor-member-desc">
              Maya Hari most recently, spent 7 years at Twitter in a variety of
              roles including VP of Global Strategy as well as Managing Director
              of Twitter's Asia Pacific business. Maya is a board member of
              OpenLearning, an ASX-listed edu-tech firm, as well as Aviva
              Singlife Holdings, Asia's top insurtech venture. Maya has spent
              over two decades across 3 continents in the digital media, mobile,
              and eCommerce industries across the US and in the Asia Pacific for
              brands such as Samsung, Google, Microsoft, and Cisco.
            </p>
          </div>
        </article>
      </section>
    </section>
  );
};

export default OurInvestor;
