import { configureStore } from "@reduxjs/toolkit";
import { numberSliceReducer, eNumberSliceReducer } from "./slices/NumberSlice";
import { userFormSliceReducer } from "./slices/UserFormSlice";
import { cartSliceReducer } from "./slices/CartSlice";

const store = configureStore({
  reducer: {
    numbers: numberSliceReducer,
    eNumbers: eNumberSliceReducer,
    // addToCart: addToCartSliceReducer,
    cart: cartSliceReducer,
    userForm: userFormSliceReducer,
  },
});

export default store;
