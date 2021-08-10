import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
      <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/ILM/HDFC_1500/D21342770_WLD_Mi_Redmi_Note10ProMax_PC_640x45._CB644988387_.jpg"></img>

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout;
