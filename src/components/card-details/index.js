import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import BankCard from "./../bank-card/index";
import NewCardForm from "./../new-card/index";

const CardDetails = () => {
  const [modal, setModal] = useState(false);
  const [cards, setCards] = useState([
    {
      number: "************* 3123",
      type: "Master",
      name: "Suganth G",
      expiryMonth: 9,
      expiryYear: 2025,
      active: true,
    },
    {
      number: "************* 5567",
      type: "Visa",
      name: "Mani",
      expiryMonth: 2,
      expiryYear: 2028,
      active: false,
    },

    {
      number: "************* 2233",
      type: "Rupay",
      name: "Selvam",
      active: false,
      expiryMonth: 22,
      expiryYear: 2022,
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
      <div className="bg-white mt-3 p-5 rounded">
        <div className="d-flex justify-content-between">
          <div>
            <h4> Balance </h4>
          </div>
          <div>
            <h4>
              {" "}
              <span className="text-secondary">$</span> 2000{" "}
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-white mt-3 p-5 rounded">
        <h4> Card Details </h4>
        <small>Manage your Credit Cards here</small>

        <div className="mt-3 mb-3">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => setModal(true)}
          >
            Add New Card
          </button>
        </div>

        <div className="row">
          <div className="col-12 col-md-8 col-lg-6">
            {cards.map((o, i) => (
              <BankCard
                key={`bankcard${i}`}
                isActive={o.active}
                type={o.type}
                name={o.name}
                expiryMonth={o.expiryMonth}
                expiryYear={o.expiryYear}
                number={o.number}
                onClick={() => handleCardChange(i)}
              />
            ))}
          </div>
        </div>
      </div>

      <Modal show={modal} onHide={() => setModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Add New Card</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewCardForm />
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardDetails;
