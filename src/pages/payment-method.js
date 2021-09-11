import React, { useState } from "react";
import { BiDollarCircle } from "react-icons/bi";
import { FaSuitcase, FaStripeS } from "react-icons/fa";
import Header from "./../components/header";
import BalanceComponent from "./../components/balance";
import CopyToClipboardComponent from "./../components/copy-to-clipboard";
import BankCard from "./../components/bank-card";

const PaymentMethod = () => {
  const [cards, setCards] = useState([
    {
      number: "************* 3123",
      type: "Master",
      name: "Suganth G",
      active: true,
    },
    {
      number: "************* 8767",
      type: "Visa",
      name: "Mani",
      active: false,
    },
  ]);

  const handleCardChange = (index) => {
    const info = [...cards];
    for (let i = 0; i < info.length; i++) {
      info[i] = { ...info[i], active: false };
    }
    info[index] = { ...info[index], active: true };
    setCards(info);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <div className="bg-white p-5 rounded shadow-sm mb-3">
              <h3>Balances</h3>
              <small className="text-secondary">
                There is a $5,000 weekly cash out limit with a bank account, and
                a $25,000 daily limit with Gemini.
              </small>
              <div className="row">
                <div className="col">
                  <BalanceComponent
                    title="Balance"
                    icon={<BiDollarCircle size={30} />}
                    amount="2368.09"
                    currencySymbol="$"
                  />

                  <h6 className="mt-2 mb-2">Connect a Bank Account</h6>

                  <button className="btn btn-primary">Cash out to bank</button>
                </div>
                <div className="col">
                  <BalanceComponent
                    title="Holds"
                    icon={<FaSuitcase size={30} />}
                    amount="5456.09"
                    currencySymbol="$"
                  />

                  <h6 className="mt-2 mb-2">Connect Gemini Account</h6>

                  <button className="btn btn-primary">Connect to Gemini</button>
                </div>
              </div>
              <div className="mt-3">
                {cards.map((o, i) => (
                  <BankCard
                    key={`bankcard${i}`}
                    isActive={o.active}
                    type={o.type}
                    name={o.name}
                    number={o.number}
                    onClick={() => handleCardChange(i)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="bg-white p-5 rounded shadow-sm">
              <h3>Balances</h3>
              <small className="text-secondary">
                Your Stripe balance will be paid out to your connected bank
                account on a rolling basis, 1-2 weeks after each sale.
              </small>
              <div className="row">
                <div className="col">
                  <BalanceComponent
                    title="Stripe Balance"
                    icon={<FaStripeS size={30} />}
                    amount="8764.09"
                    currencySymbol="$"
                  />
                </div>
                <div className="col">
                  <BalanceComponent
                    title="Balance"
                    icon={<BiDollarCircle size={30} />}
                    amount="1234.09"
                    currencySymbol="$"
                  />
                </div>
              </div>
              <div className="mt-3">
                <label>DO NOT SEND NIFTIES TO THIS ADDRESS</label>
                <div>
                  <CopyToClipboardComponent copyText="0x34135366ebdfdfsdeaad25" />
                </div>
                <small className="text-secondary">
                  (New deposits will be credited after 6 confirmations)
                </small>
              </div>
              <div className="text-end">
                <button type="button" className="btn btn-primary">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
