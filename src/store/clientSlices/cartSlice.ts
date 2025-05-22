import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export type ItemType = {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  category: string;
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
      if (state.cart.find((course) => course.id === action.payload.id)) {
        toast.error("This course is already in your cart");
        return;
      }
      state.cart.push(action.payload);
      toast.success("The course added to your cart");
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      toast.success("The course removed from your cart");
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
