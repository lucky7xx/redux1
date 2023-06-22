import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  updateItemInCart,
} from "../../store/slices/CartSlice";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const items = [
    {
      id: 1,
      name: "Nike Tshirt",
      price: 200,
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/u0btvcvg2nejhaydjwmm/sportswear-t-shirt-zmMkxS.png",
    },
    {
      id: 2,
      name: "Gucci Shirt",
      price: 100,
      img: "https://runwaycatalog.in/wp-content/uploads/2021/06/56-9-22.png",
    },
    {
      id: 3,
      name: "Armani Jeans",
      price: 300,
      img: "https://www.armani.com/variants/images/32027475399285256/F/w480.jpg",
    },
    // Add more items here if needed
  ];

  const handleIncrement = (itemId) => {
    const selectedItem = items.find((item) => item.id === itemId);

    if (selectedItem) {
      const existingItem = cartItems.find((item) => item.id === itemId);

      if (existingItem) {
        dispatch(
          updateItemInCart({
            ...existingItem,
            quantity: existingItem.quantity + 1,
          })
        );
      } else {
        const newItem = {
          id: selectedItem.id,
          name: selectedItem.name,
          quantity: 1,
          price: selectedItem.price,
          img: selectedItem.img,
        };

        dispatch(addItemToCart(newItem));
      }
    }
  };

  const handleDecrement = (itemId) => {
    const existingItem = cartItems.find((item) => item.id === itemId);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        dispatch(removeItemFromCart(itemId));
      } else {
        dispatch(
          updateItemInCart({
            ...existingItem,
            quantity: existingItem.quantity - 1,
          })
        );
      }
    }
  };

  const handleCheckout = () => {
    history.push("/cart");
  };

  return (
    <>
      <div>
        <h3>AmmaZan.in</h3>
        <div style={{ display: "flex" }}>
          {items.map((item) => {
            const cartItem = cartItems.find(
              (cartItem) => cartItem.id === item.id
            );
            const cartQuantity = cartItem ? cartItem.quantity : 0;

            return (
              <div className="container-fluid" key={item.id}>
                <div
                  className="card mt-3 container-fluid"
                  style={{
                    width: "15rem",
                    height: "23rem",
                    marginRight: "1rem",
                  }}
                >
                  <div
                    className="card-image d-flex justify-content-center align-items-center"
                    style={{ height: "10rem" }}
                  >
                    <img
                      src={item.img}
                      className="img-thumbnail"
                      alt="..."
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </div>
                  <div className="card-body ">
                    <h5 className="card-title d-flex justify-content-center align-items-center">
                      {item.name}
                    </h5>
                    <p className="card-text ">
                      <p>Price: {item.price} rs</p>
                      <p>Quantity: {cartQuantity}</p>
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="justify-content-center d-flex mt-5">
          <button className="btn btn-success" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
