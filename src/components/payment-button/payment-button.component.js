import React from "react";
import CustomButton from "../custom-button/custom-button.component";

const PaymentButton = ({ price }) => {
  const paymentPrice = price;

  return (
    <div>
      <CustomButton>Pay Now</CustomButton>
    </div>
  );
};

export default PaymentButton;
