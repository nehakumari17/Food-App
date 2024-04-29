import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import {Provider} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./auth/cartSlice.jsx";

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    <Toaster position="top-right" />
    </Provider>
    
  </React.StrictMode>
);
