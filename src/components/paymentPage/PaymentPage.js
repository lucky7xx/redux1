import React from "react";
import { useSelector } from "react-redux";

const PaymentPage = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <div>
      <h1>{user.firstname}</h1>
    </div>
  );
};

export default PaymentPage;
