import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type DeliveryData = {
  receiver: string;
  description: string;
  city: string;
  zipCode: string;
  number: string;
  complement?: string;
};

type CartItem = Prato & {
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  deliveryData: DeliveryData | null;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
  deliveryData: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((cartItem) => cartItem.id !== action.payload);
        }
      }
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    setDeliveryData: (state, action: PayloadAction<DeliveryData>) => {
      state.deliveryData = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.deliveryData = null;
    },
  },
});

export const {
  add,
  remove,
  increaseQuantity,
  decreaseQuantity,
  open,
  close,
  setDeliveryData,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
