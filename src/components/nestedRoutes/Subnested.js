import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../../store/slices/CartSlice";

const Subnested = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userForm);
  const data = user.formData;

  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartItems", cartItems);

  const totalSum = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleShop = () => {
    history.push("/");

    dispatch(resetCart());
  };

  return (
    <div>
      <h1>Subnested</h1>

      <p>hello your routing is working perfectly!</p>

      <div className="container border border-1 p-3 w-50 justify-content-center d-flex">
        <p className="text-align-center d-flex\">
          Hello, {data.firstName} Thank you for ordering from AmmaZan.in. Your
          order for
          {cartItems.map((item) => (
            <div key={item.id}>
              {item.quantity} {item.name}
            </div>
          ))}{" "}
          has been placed successfully and your total is {totalSum}
        </p>
      </div>
      <button className="btn btn-danger" onClick={handleShop}>
        Shop Again
      </button>
    </div>
  );
};

export default Subnested;
