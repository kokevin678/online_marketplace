import React from "react";
// import { Conatiner, Row, Col } from "react-bootstrap";

class Checkout extends Component {
  state = {
    checkoutDetails: {
      customerName: "",
      customerEmail: "",
      deliveryAddress: {
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: ""
      }
    }
  };
}

export default Checkout;
