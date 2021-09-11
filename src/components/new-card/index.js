import React from "react";
import InputText from "./../input-text/index";

const NewCardForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="mb-2">
            <InputText title="Amount" />
          </div>
        </div>
        <div className="col-12">
          <div className="mb-2">
            <InputText title="Card Number" />
          </div>
        </div>
        <div className="col-6">
          <div className="mb-2">
            <InputText title="Exipry" placeholder="03/2025" />
          </div>
        </div>
        <div className="col-6">
          <div className="mb-2">
            <InputText title="CVV" />
          </div>
        </div>
        <div className="col-12">
          <div className="mb-2">
            <InputText title="Description" />
          </div>
        </div>
        <div className="col-12">
          <div className="mb-2">
            <InputText title="Channel" />
          </div>
        </div>

        <div className="col-12">
          <div className="mb-2 mt-4">
            <h6>Billing Details</h6>
          </div>
        </div>

        <div className="col-12">
          <div className="mb-2">
            <InputText title="Cardholder Name" />
          </div>
        </div>

        <div className="col-12">
          <div className="mb-2">
            <InputText title="Address Line 1" />
          </div>
        </div>

        <div className="col-12">
          <div className="mb-2">
            <InputText title="Address Line 2" />
          </div>
        </div>

        <div className="col-6">
          <div className="mb-2">
            <InputText title="Postalcode" />
          </div>
        </div>

        <div className="col-6">
          <div className="mb-2">
            <InputText title="City" />
          </div>
        </div>

        <div className="col-6">
          <div className="mb-2">
            <InputText title="District" />
          </div>
        </div>

        <div className="col-6">
          <div className="mb-2">
            <InputText title="Country Code" />
          </div>
        </div>

        <div className="col-12">
          <div className="mb-2">
            <InputText title="Phone" />
          </div>
        </div>

        <div className="col-12">
          <div className="mb-2">
            <InputText title="Email" />
          </div>
        </div>

        <div className="col-12">
          <div className="mt-2">
            <button className="btn btn-primary w-100" type="button">
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCardForm;
