import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export type ItemType = {
  _id: string;
};
type CartType = {
  cart: ItemType[];
};

const initialState: CartType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.find((course) => course._id === action.payload)) {
        toast.error("This course is already in your cart");
        return;
      }
      state.cart.push({ _id: action.payload });
      toast.success("The course added to your cart");
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((course) => course._id !== action.payload);
      toast.success("The course removed from your cart");
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
