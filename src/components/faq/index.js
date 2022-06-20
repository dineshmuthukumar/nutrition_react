import React, { useState } from "react";
import { FaFile, FaFileAlt, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import "./style.scss";

const FAQComponent = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Basics of NFT",
      active: true,
    },
    {
      id: 2,

      name: "About Jump.trade & GuardianLink",
      active: false,
    },
    {
      id: 3,
      name: "Jump.trade's NFT",
      active: false,
    },
    {
      id: 4,
      name: "Jump.trade Profile Overview",
      active: false,
    },
    {
      id: 5,
      name: "The Jump.trade NFT Launchpad",
      active: false,
    },
    {
      id: 6,
      name: "The Jump.trade Wallet",
      active: false,
    },
    {
      id: 7,
      name: "For the NFT Launchpad Buyers & Bidders",
      active: false,
    },
    {
      id: 8,
      name: "Selling on the Jump.trade  Marketplace",
      active: false,
    },
    {
      id: 9,
      name: "Buying on the Jump.trade  Marketplace",
      active: false,
    },
    {
      id: 10,
      name: "Troubleshooting",
      active: false,
    },
  ]);

  const [active, setActive] = useState(1);
  const [isActivePanel, setActivePanel] = useState({});

  const handleChange = (input) => {
    const info = [...tabs];

    const index = info.findIndex((o) => o.id === input.id);

    for (var x = 0; x < info.length; x++) {
      if (index === x) info[x] = { ...info[x], active: true };
      else info[x] = { ...info[x], active: false };
    }

    setTabs(info);
    setActive(input.id);

    if (input.id != active) {
      setActivePanel({});
    }
  };

  return (
    <>
      <div className="faq-wrapper">
        {/* <div className="faq_header">
          <h2>FAQs</h2>{" "}
        </div> */}

        <div className="heading">
          <h3 className="heading heading-h3">HELP CENTER</h3>{" "}
        </div>

        <div className="c-tabs">
          {tabs.map((obj, i) => (
            <div
              role="button"
              onClick={() => handleChange(obj)}
              key={`navtab${i}`}
              className={`nav-tab ${obj.active ? "active" : ""}`}
            >
              {obj.name}
            </div>
          ))}
        </div>

        <div className="tab-divider"></div>

        <div className="tab-body">
          {(() => {
            if (active === 1) {
              return (
                <div className="row">
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"What is an NFT?"}
                      body={
                        <>
                          A Non Fungible token or NFT, that as it is commonly
                          abbreviated, is either a digital representation of
                          asset or a digital object that exists on a
                          decentralized ledger. A Non-fungible token, as the
                          name implies, is indivisible and unique. An NFT has a
                          variety of applications including but not limited to
                          provenance, record-keeping, elimination of
                          intermediaries for artists, and a lot more! They can
                          also serve as proof of authenticity for collectibles
                          like original audio, video and digital images.
                        </>
                      }
                      status={false}
                      index={1}
                      isActivePanel={isActivePanel[1]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "How is it any different from a normal art or image that I have?"
                      }
                      body={
                        <>
                          The art that you have might not have inherent proof
                          that it was created by the author except for the
                          verbal claim. There are chances that the records might
                          be lost in transit from one collector to another.
                          However, with blockchain technology that powers the
                          NFT, it is possible to prove the authenticity and also
                          keep a record of the previous collectors.
                        </>
                      }
                      status={false}
                      index={2}
                      isActivePanel={isActivePanel[2]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "Why can’t I just download or screenshot the image?"
                      }
                      body={
                        <>
                          You can surely download or screenshot but it will be
                          just the ‘image’ without the attributes and the
                          properties that make the object unique, all of which
                          is stored on the blockchain. While you may possess the
                          ‘image’, it might not carry the properties and
                          attributes that make it valuable, which means it is
                          yet another image that does not carry value in
                          secondary markets.
                        </>
                      }
                      status={false}
                      index={3}
                      isActivePanel={isActivePanel[3]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "How do I prove that I have the original image or audio or video?"
                      }
                      body={
                        <>
                          There is no separate effort required from your side to
                          prove its originality. This task of establishing
                          authenticity is adequately taken care of by the
                          technology that powers NFT. In fact, this hassle-free
                          process of proving makes the NFTs an ideal digital
                          collectible investment.
                        </>
                      }
                      status={false}
                      index={4}
                      isActivePanel={isActivePanel[4]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={"Why should I even invest in NFTs?"}
                      body={
                        <>
                          {" "}
                          NFTs represent collectibles in the digital space.
                          Investing in collectibles with provable lineage and
                          value is never a bad idea. It is to be noted that
                          collectibles might be subjective in their value. Some
                          NFT collectibles have grown by over 100x of their
                          original value over a period of just days.
                        </>
                      }
                      status={false}
                      index={5}
                      isActivePanel={isActivePanel[5]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "Considering crypto’s legal stance, will my NFT’s value dilute at any time?"
                      }
                      body={
                        <>
                          While ‘cryptocurrency’ might have its share of legal
                          uncertainty, the technology behind NFTs does not have
                          such hassles. A lot of jurisdictions are catching up
                          to accommodate this new dependable technology,
                          considering them as legally valid proofs and pieces of
                          evidence. Therefore, your NFT will always hold its
                          value. It is also to be remembered that the NFT is
                          inherently valuable and the technology only serves as
                          a tool to prove its authenticity and keep a record of
                          the NFT transactions.
                        </>
                      }
                      status={false}
                      index={6}
                      isActivePanel={isActivePanel[6]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "What determines the value of an NFT art, music or video?"
                      }
                      body={
                        <>
                          The value of any NFT, as much as it is for any
                          collectible, is subjective and it might not be
                          possible to fit it into an equation. However, certain
                          factors like the rarity of the NFT, the person
                          launching it, the asset/collectible it represents, and
                          the profile of people owning other similar NFTs are
                          known to increase the value.
                        </>
                      }
                      status={false}
                      index={7}
                      isActivePanel={isActivePanel[7]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"How do I purchase an NFT?"}
                      body={
                        <>
                          {" "}
                          <p>
                            Now you can buy NFT with both USDT and fiat
                            currency. An NFT can simply be purchased by adding
                            balance to your corresponding account wallet or load
                            balance to your fiat (USD/INR) wallet through Credit
                            or Debit cards so that you can use the amount to buy
                            an NFT from our collection.
                          </p>
                          <p>
                            For example, an NFT featuring the greatest and
                            legendary comic character creator is bound to fetch
                            high value, both at launch and in secondary
                            marketplaces.{" "}
                          </p>
                        </>
                      }
                      status={false}
                      index={8}
                      isActivePanel={isActivePanel[8]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={"How do I purchase an NFT?"}
                      body={
                        <>
                          {" "}
                          Now you can buy NFT with both USDT and fiat currency.
                          An NFT can simply be purchased by adding crypto assets
                          to your corresponding crypto account wallet or load
                          balance to your fiat (USD/INR) wallet through Credit
                          or Debit cards so that you can use the amount to buy
                          an NFT from our collection.
                        </>
                      }
                      status={false}
                      index={9}
                      isActivePanel={isActivePanel[9]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={"Are NFTs considered as assets?"}
                      body={
                        <>
                          {" "}
                          Non-fungible tokens can be considered as digital
                          assets that have hardwired lineage on the blockchain.
                          They can be traded on secondary markets or passed on
                          to anyone you wish to, with full provenance like any
                          original artwork in the real world that retains its
                          value forever.
                        </>
                      }
                      status={false}
                      index={10}
                      isActivePanel={isActivePanel[10]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "How will the authenticity of my NFT be determined and provable after I buy it?"
                      }
                      body={
                        <>
                          Since the NFT is built on the Blockchain, all the
                          attributes and properties associated with the NFT are
                          carried forward. The inherent properties of the NFT
                          Blockchain will take care to establish authenticity.
                          In fact, the simplicity of provenance makes the NFTs a
                          preferred digital collectible. We encourage you to
                          read the Terms and Conditions for further details.
                        </>
                      }
                      status={false}
                      index={11}
                      isActivePanel={isActivePanel[11]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "Does owning an NFT mean that I hold copyrights over the content?"
                      }
                      body={
                        <>
                          {" "}
                          Buying this NFT entitles you to certain rights and
                          also restricts you from using the NFT in certain ways.
                          We encourage you to read the terms and conditions to
                          understand the details.
                        </>
                      }
                      status={false}
                      index={12}
                      isActivePanel={isActivePanel[12]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "Does owning an NFT mean that I hold copyrights over the content?"
                      }
                      body={
                        <>
                          {" "}
                          Buying this NFT entitles you to certain rights and
                          also restricts you from using the NFT in certain ways.
                          We encourage you to read the terms and conditions to
                          understand the details.
                        </>
                      }
                      status={false}
                      index={13}
                      isActivePanel={isActivePanel[13]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={"Can I display the NFT on a public platform?"}
                      body={
                        <>
                          {" "}
                          You can display your NFT on certain public platforms
                          for non-commercial purposes. You should not engage in
                          any commercial activity using your NFT. We encourage
                          you to read the terms and conditions to understand
                          your rights, responsibilities, and restrictions.
                        </>
                      }
                      status={false}
                      index={14}
                      isActivePanel={isActivePanel[14]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                </div>
              );
            } else if (active === 2) {
              return (
                <div className="row">
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"What is Jump.trade?"}
                      body={
                        <>
                          {" "}
                          Jump.trade is a premium international NFT platform
                          that enables creators to launch their NFTs in their
                          own launchpad. Jump.trade is all set to launch India’s
                          first community-centered cricket game.
                        </>
                      }
                      status={false}
                      index={15}
                      isActivePanel={isActivePanel[15]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={"What is GuardianLink?"}
                      body={
                        <>
                          {" "}
                          GuardianLink, a no-code NFT platform with a built-in
                          Legitimacy Protocol. GuardianLink is a one-of-a-kind
                          NFT platform that enables creators, brands and
                          celebrities worldwide, to curate their NFTs in their
                          own launchpads. GuardianLink powers Jump.trade, all
                          its functionalities and attributes.
                        </>
                      }
                      status={false}
                      index={16}
                      isActivePanel={isActivePanel[16]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"What blockchain are you using to power your NFT?"}
                      body={
                        <>
                          {" "}
                          Our launchpad is powered by the Polygon Blockchain.
                          Polygon has been preferred in terms of its scalability
                          across the globe and because it has low gas fees. We
                          do not, however, guarantee that the claims we have
                          made will be held true in the future as it is
                          completely not in our control.
                        </>
                      }
                      status={false}
                      index={17}
                      isActivePanel={isActivePanel[17]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                </div>
              );
            } else if (active === 3) {
              return (
                <div className="row">
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"What is Loot Box NFT on Jump.Trade?"}
                      body={
                        <>
                          {" "}
                          <p>
                            The Loot Box of Jump.trade is a blind purchase
                            program where everyone gets access to NFTs.
                          </p>
                          {/* <p>
                            In the Loot Box, you could stand a chance to
                            metaverse game cricket cards or authenticated signed
                            bats of legends as digital collectibles or a
                            combination of both.
                          </p> */}
                        </>
                      }
                      status={false}
                      index={18}
                      isActivePanel={isActivePanel[18]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6"></div>
                </div>
              );
            } else if (active === 4) {
              return (
                <div className="row">
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"How do I create a profile on Jump.trade?"}
                      body={
                        <>
                          Creating a profile on Jump.trade is simple and
                          straightforward. All you need to do is enter your
                          email address and a valid password that complies with
                          our password policy. You will be sent an OTP to
                          confirm your account and once you click on the link,
                          you are all set to access your account and it will
                          automatically create a profile on Jump.trade. The
                          profile is common for both buying & selling of NFTs on
                          Jump.trade.
                        </>
                      }
                      status={false}
                      index={19}
                      isActivePanel={isActivePanel[19]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"How do I update my profile information?"}
                      body={
                        <>
                          {" "}
                          <p>
                            ​​You will find an option to edit your profile on
                            the top-right corner of the interface. You can click
                            on the edit icon and make the necessary changes. You
                            can change your first name, your last name, and
                            details about your social profiles.
                          </p>
                          <p>
                            You also have an option to make your profile
                            private, you want your information not viewable by
                            other people who use the Jump.trade platform.
                          </p>
                        </>
                      }
                      status={false}
                      index={20}
                      isActivePanel={isActivePanel[20]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                </div>
              );
            } else if (active === 5) {
              return (
                <div className="row">
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"How do I become eligible to purchase the NFT?"}
                      body={
                        <>
                          {" "}
                          <p>
                            All you need to do is create your account on our
                            platform and fund your wallet with the appropriate
                            amount of money.
                          </p>
                          <p>
                            You can purchase the NFT directly through the
                            Jump.trade launchpad.{" "}
                          </p>
                          <p>
                            It is to be noted that, you will need to agree to
                            our terms and conditions to be eligible to purchase
                            the NFT.
                          </p>
                        </>
                      }
                      status={false}
                      index={21}
                      isActivePanel={isActivePanel[21]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"How do I buy NFTs?"}
                      body={
                        <>
                          {" "}
                          You can load your Jump.trade wallet with enough funds
                          and you can buy our exclusive NFTs. It is to be noted
                          that, you have agreed to the terms and conditions, and
                          you accept that you are, in every way, eligible to
                          engage in the act of buying.
                        </>
                      }
                      status={false}
                      index={22}
                      isActivePanel={isActivePanel[22]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                </div>
              );
            } else if (active === 6) {
              return (
                <div className="row">
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"What is a wallet?"}
                      body={
                        <>
                          {" "}
                          <p>
                            The wallet, in the context of our platform, is a
                            software that holds access to the funds that you
                            will use to transact with our platform. Please note
                            that the wallet is common for the launchpad and the
                            marketplace,for both buyer and the seller.
                          </p>
                          <p>
                            The cryptocurrency wallet that we use is a custodial
                            wallet and the services are provided by a
                            third-party service provider.
                          </p>
                        </>
                      }
                      status={false}
                      index={23}
                      isActivePanel={isActivePanel[23]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={"Why is a wallet necessary?"}
                      body={
                        <>
                          {" "}
                          The wallet is central to your transactions with the
                          platform. Since everything exists on the Blockchain
                          and transactions have to be carried out within the
                          Blockchain for the purpose of purchasing NFTs, a
                          wallet is a component of uncompromising importance.
                        </>
                      }
                      status={false}
                      index={24}
                      isActivePanel={isActivePanel[24]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={"How can I load money into my wallet?"}
                      body={
                        <>
                          You can fund your wallet with three different options.
                          You will need to click on the “deposit” button
                          available on the top left of the profile, and you will
                          be taken to a page where you can proceed to fund your
                          wallet.
                        </>
                      }
                      status={false}
                      index={25}
                      isActivePanel={isActivePanel[25]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={"What are the payment options available?"}
                      body={
                        <>
                          As of now, you can find your wallet either using the
                          payment gateway, card payment method or by using UPI,
                          or by transferring from another cryptocurrency wallet.
                        </>
                      }
                      status={false}
                      index={26}
                      isActivePanel={isActivePanel[26]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={"What are the currencies accepted by your wallet?"}
                      body={
                        <>
                          It is to be noted that the Wallet supported by the
                          platform will only accept the specific crypto coin
                          USDT over specific protocols like/similar to ERC-20
                          for Ethereum, and Polygon, and BEP-20 for Binance
                          Smart Chain Blockchains. While we may support other
                          currency types and payment methods in the future, they
                          will not be accepted unless and until explicitly
                          stated on our terms and conditions.
                        </>
                      }
                      status={false}
                      index={27}
                      isActivePanel={isActivePanel[27]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={
                        "I have other coins like Bitcoin and Ether. Can I use them to load money?"
                      }
                      body={
                        <>
                          Unfortunately, you cannot use them directly to buy
                          NFTs from our platform or fund your wallet.
                          Alternatively, you can consider changing them to USDT
                          on cryptocurrency exchanges. You can then use that
                          currency to fund your wallet.
                        </>
                      }
                      status={false}
                      index={28}
                      isActivePanel={isActivePanel[28]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={"What happens to my unused wallet funds?"}
                      body={
                        <>
                          You will be able to withdraw the unused wallet funds
                          after seven days of you funding the wallet. The amount
                          that can be withdrawn and the conditions to be met
                          before initiating the withdrawal process are defined
                          in our terms and conditions. We urge you to go through
                          the document in detail.
                        </>
                      }
                      status={false}
                      index={29}
                      isActivePanel={isActivePanel[29]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "What if I get a transaction confirmation SMS and my wallet doesn’t reflect the payment?"
                      }
                      body={
                        <>
                          {" "}
                          If you get your transaction confirmation SMS and if
                          the wallet does not reflect the payment, in most
                          cases, the financial institution will credit the
                          amount back to your account. In rare cases, you may
                          contact our third-party payment services provider for
                          support.
                        </>
                      }
                      status={false}
                      index={30}
                      isActivePanel={isActivePanel[30]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "How do I withdraw funds from my Jump.trade wallet?"
                      }
                      body={
                        <>
                          {" "}
                          <p className="accordion-title text body-mb">
                            At any point in time, you can choose to withdraw the
                            available funds that are displayed on your
                            Jump.trade wallet. They will be withdrawn to the
                            payment method that you used to fund them.
                          </p>
                          <p>
                            Applicable processing fees and charges levied by
                            your financial institution/payment instrument will
                            be deducted before the final crediting of the wallet
                            balance to your payment instrument. It is to be
                            noted that you can only withdraw your available
                            funds and not the funds that are on hold because of
                            the bids that you have placed.
                          </p>
                        </>
                      }
                      status={false}
                      index={31}
                      isActivePanel={isActivePanel[31]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                </div>
              );
            } else if (active === 7) {
              return (
                <div className="row">
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"How do I buy NFTs?"}
                      body={
                        <>
                          You can load your Jump.trade wallet with enough funds
                          and you can buy our exclusive NFTs. It is to be noted
                          that, you have agreed to the terms and conditions, and
                          you accept that you are, in every way, eligible to
                          engage in the act of buying.
                        </>
                      }
                      status={false}
                      index={32}
                      isActivePanel={isActivePanel[32]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6"></div>
                </div>
              );
            } else if (active === 8) {
              return (
                <div className="row">
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={
                        "How do I become eligible to sell my NFT on the Jump.trade  marketplace?                      "
                      }
                      body={
                        <>
                          If you have purchased/won the auction for any NFT
                          listed before on Jump.trade , and you have them listed
                          under the “my NFTs“ section of your profile, you are
                          eligible to sell your NFT on the Jump.trade
                          marketplace. {""}
                          {""}
                          Jump.trade does not charge any amount for listing your
                          NFT for selling. Every NFT collector with at least one
                          NFT in their possession is eligible to sell on
                          Jump.trade.
                        </>
                      }
                      status={false}
                      index={33}
                      isActivePanel={isActivePanel[33]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={
                        "What are the different options available for selling my NFT?"
                      }
                      body={
                        <>
                          ERC-721 NFTs can be listed for either direct buying or
                          for bidding or a combination of both.
                        </>
                      }
                      status={false}
                      index={34}
                      isActivePanel={isActivePanel[34]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={
                        "What is the process of listing an NFT that I own for sale?"
                      }
                      body={
                        <>
                          You will need to navigate to the “my NFTs“ section on
                          your profile and click on the particular NFT that you
                          would like to list for sale. Before you do so, you
                          will need to ensure if your NFT belongs to the ERC-721
                          category.{""}
                          If you have chosen an ERC-721 NFT, you will have an
                          option to either list your NFT for direct selling or
                          for bidding or for both.{""}
                          If you have chosen direct selling, you will have to
                          enter the sale amount. If you have chosen to list the
                          NFT for bidding, you will have to list the minimum bid
                          amount. If you have chosen both options, you will need
                          to list a sale price and a minimum bid.{""}
                        </>
                      }
                      status={false}
                      index={35}
                      isActivePanel={isActivePanel[35]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={
                        "Can I edit the price of an NFT that has been put up for sale?"
                      }
                      body={
                        <>
                          You cannot edit the price of the NFT that has been put
                          up for sale. You can, however, remove the NFT from the
                          listing and put it up for sale again with the edited
                          price. If your NFT has been listed for bidding, it
                          should be noted that removing your NFT from being
                          listed immediately cancels all the bids your NFT has
                          received so far. Any person who has placed a bid on
                          your NFT will have the bidding amount returned to
                          their available balance on the Jump.trade walle.
                        </>
                      }
                      status={false}
                      index={36}
                      isActivePanel={isActivePanel[36]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"How long can I list the NFT for bidding?"}
                      body={
                        <>
                          Auction duration can be up to 3 days. Any bid placed
                          in the last 10 minutes extends the auction by 10
                          minutes.
                        </>
                      }
                      status={false}
                      index={37}
                      isActivePanel={isActivePanel[37]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={
                        "What happens after a person places a bid on my NFT?s"
                      }
                      body={
                        <>
                          As soon as a prospective buyer places a bid on your
                          NFT, you will be notified via push notifications and
                          an email. You are required to acknowledge the bid
                          within seven days of the bid being placed. Otherwise,
                          the bid will lapse and will revert to the previously
                          acknowledged bid.
                        </>
                      }
                      status={false}
                      index={38}
                      isActivePanel={isActivePanel[38]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"How do I remove an NFT from being listed on sale?"}
                      body={
                        <>
                          You can navigate to the section where all the NFTs
                          listed for sale are displayed. You can choose the
                          particular NFT that you would like to delist from
                          being on sale, and choose the option to cancel the
                          sale. It is to be noted that you cannot partly remove
                          the NFT from being listed only for selling or for
                          bidding. If you would like to remove your NFT partly,
                          you have to list the NFT for sale from scratch.
                        </>
                      }
                      status={false}
                      index={39}
                      isActivePanel={isActivePanel[39]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                </div>
              );
            } else if (active === 9) {
              return (
                <div className="row">
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={
                        "How do I become eligible to buy an NFT on Jump.trade?"
                      }
                      body={
                        <>
                          All you need to do is create an account using your
                          email address on the Jump.trade website and you are
                          eligible to buy your NFTs after funding your wallet.
                          The details about funding your wallet can be found in
                          the “Jump.trade wallet“ section of the FAQ document.
                        </>
                      }
                      status={false}
                      index={40}
                      isActivePanel={isActivePanel[40]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"How do I find the NFTs that I can buy?"}
                      body={
                        <>
                          You will be provided with a list of NFTs available for
                          sale as soon as you open the Jump.trade marketplace
                          website. You will also be able to see the list of top
                          sellers and the top selling NFTs.
                          {""}
                          You also have an option to use filters to find the
                          exact NFT you would like to buy. You can filter by the
                          NFT type, the sale type, and the collection to fit the
                          NFT belongs.
                        </>
                      }
                      status={false}
                      index={41}
                      isActivePanel={isActivePanel[41]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={
                        "What are the different options available for buying an NFT on Jump.trade?"
                      }
                      body={
                        <>
                          Based on the listing type, you can choose to directly
                          buy the NFT that is listed for sale. Alternatively, if
                          an NFT is listed for bidding, you can place your bid
                          on the NFT two get a chance to make that NFT yours.
                        </>
                      }
                      status={false}
                      index={42}
                      isActivePanel={isActivePanel[42]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"How does bidding on the NFT work?"}
                      body={
                        <>
                          You have to have sufficient wallet balance to place a
                          valid bid on the NFT of your choice (provided it is
                          listed for bidding). Once you click on the NFT, you
                          will have an option to place your bid on the
                          particular NFT.{""}
                          It is to be noted that the new bid that you placed
                          should be higher than the earlier bid.
                        </>
                      }
                      status={false}
                      index={43}
                      isActivePanel={isActivePanel[43]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"Who determines the price of the NFT?"}
                      body={
                        <>
                          The price of the NFT completely depends on the
                          discretion of the seller. Jump.trade does not in any
                          way influence the prices of the NFTs being listed on
                          the Jump.trade marketplace.
                        </>
                      }
                      status={false}
                      index={44}
                      isActivePanel={isActivePanel[44]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                </div>
              );
            } else if (active === 10) {
              return (
                <div className="row">
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={
                        "Why am I not able to see the balance in my wallet even after the money was debited from my payment instrument?"
                      }
                      body={
                        <>
                          {" "}
                          You can check with your payment instrument/financial
                          institution for the exact status. You can also notify
                          us through our support email, and we will, with our
                          limits and scope, address the issues for you.
                        </>
                      }
                      status={false}
                      index={45}
                      isActivePanel={isActivePanel[45]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "When will I be able to see the NFTs I have acquired under the “my NFTs“ section of my profile?"
                      }
                      body={
                        <>
                          There is a certain time window involved in processing
                          the transfer of your NFT on the blockchain. The entire
                          process should not take more than a few minutes. If
                          you, however, feel there is an undue delay, you can
                          contact our support team.
                        </>
                      }
                      status={false}
                      index={46}
                      isActivePanel={isActivePanel[46]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "I accidentally purchased an NFT that I did not intend to. Will I be able to get a refund/return my NFT?"
                      }
                      body={
                        <>
                          Unfortunately, the purchase of NFTs is non-returnable
                          and not refundable. You can, however, try to sell your
                          NFT on the marketplace by having it listed.
                        </>
                      }
                      status={false}
                      index={47}
                      isActivePanel={isActivePanel[47]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "What is the artist fee and the service fee that is charged for every transaction?"
                      }
                      body={
                        <>
                          {" "}
                          <p>
                            The artist fee, as the name implies, is the fee
                            given to the artist or the inspiration for
                            creating/inspiring the NFT. It is charged as a
                            percentage of the final price at which the NFT is
                            sold.
                          </p>
                          <p>
                            The service fee is charged for the usage of the
                            network resources to facilitate the transaction on
                            the blockchain.
                          </p>
                        </>
                      }
                      status={false}
                      index={48}
                      isActivePanel={isActivePanel[48]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={"What is Discord?"}
                      body={
                        <>
                          {" "}
                          <p>
                            It is a platform for NFT collectors and Jump.trade
                            enthusiasts to connect with the community and
                            interact with each other. The Jump.trade community
                            is quite active on Discord.
                          </p>
                          <p>
                            There are also a lot of contests and giveaways that
                            you can participate in.
                          </p>
                        </>
                      }
                      status={false}
                      index={49}
                      isActivePanel={isActivePanel[49]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Accordian
                      head={"How can I get listed among the top sellers?"}
                      body={
                        <>
                          {" "}
                          The top sellers are chosen by the system based on
                          algorithms. It is determined by the number of NFTs you
                          have sold, the number of NFTs that have been listed,
                          and the average price that you have sold the NFTs for.
                        </>
                      }
                      status={false}
                      index={50}
                      isActivePanel={isActivePanel[50]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "How do I become an authorized seller on Jump.trade?"
                      }
                      body={
                        <>
                          {" "}
                          <p>
                            As of now, Jump.trade remains to be a launchpad for
                            athletes, brands, and celebrities to launch their
                            NFTs, and also a marketplace for the NFT collectors
                            to sell their NFTs to others.
                          </p>
                          <p>
                            Completing your KYC/AML formalities makes you an
                            authentic seller on the Jump.trade marketplace. It
                            is, however, not under consideration right now to
                            create a section of authorized sellers on the
                            marketplace.
                          </p>
                        </>
                      }
                      status={false}
                      index={51}
                      isActivePanel={isActivePanel[51]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={"How do I see the ownership history of the NFT?"}
                      body={
                        <>
                          {" "}
                          Every NFT will have a dedicated section that displays
                          the record of all the ownerships. This will not only
                          help you determine the accuracy of ownership but also
                          the authenticity of the NFT.
                        </>
                      }
                      status={false}
                      index={52}
                      isActivePanel={isActivePanel[52]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={
                        "How long will it take for the withdrawn money to  appear in my payment instrument?"
                      }
                      body={
                        <>
                          The time taken usually depends on the payment
                          instrument and the financial institution that
                          processed your payment. Crypto payments are quite
                          likely to reflect immediately depending on the
                          accuracy of your wallet address.
                        </>
                      }
                      status={false}
                      index={53}
                      isActivePanel={isActivePanel[53]}
                      setActivePanel={setActivePanel}
                    />
                    <Accordian
                      head={"How do I determine the rarity of the NFT?"}
                      body={
                        <>
                          {" "}
                          The rarity of the NFT plays a crucial role in
                          determining the price. To ensure that we maintain the
                          highest level of transparency, we have provided a
                          rarity tool that will give you the rarity score
                          associated with each NFT. It is to be noted that the
                          rarity score is relevant on the Jump.trade
                          marketplace. In fact, it is neither possible nor
                          allowed for anyone to sell their NFTs purchased on
                          Jump.trade outside the Jump.trade marketplace.
                        </>
                      }
                      status={false}
                      index={54}
                      isActivePanel={isActivePanel[54]}
                      setActivePanel={setActivePanel}
                    />
                  </div>
                </div>
              );
            }
          })()}
        </div>
      </div>
    </>
  );
};

const Accordian = ({
  head,
  body,
  status = false,
  index,
  isActivePanel,
  setActivePanel,
}) => {
  const [state, setState] = useState(false);

  //console.log(isActivePanel, "isActivePanel");
  const toggleItem = () => {
    setActivePanel((prevState) => ({
      ...prevState,
      [index]: !Boolean(prevState[index]),
    }));
  };
  return (
    <div className="c-accordian">
      <div className="c-accor-head" onClick={() => toggleItem(index)}>
        <div>
          <FaFileAlt color={"#f5ff00"} size={20} />
        </div>

        <div className="head-area">{head}</div>

        <div>
          {isActivePanel ? (
            <FaMinusCircle color={"#f5ff00"} size={20} />
          ) : (
            <FaPlusCircle color={"#f5ff00"} size={20} />
          )}
        </div>
      </div>
      {isActivePanel && <div className="c-accor-body">{body}</div>}
    </div>
  );
};

export default FAQComponent;
