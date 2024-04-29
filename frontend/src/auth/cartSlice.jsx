import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`${state.cartItems[itemIndex].name} quantity increased`, {
            position: "top-right"
        })
        
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added`, {
            position: "top-right"
        })
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
