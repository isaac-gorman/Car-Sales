import React from "react";
import { connect } from "react-redux";

const Total = (props) => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
      {/* {console.log("I am the total price of the car", props.car.price)}
      {console.log("I am additional price of the car", props.additionalPrice)} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    price: state.car.price,
  };
};

export default connect(mapStateToProps, {})(Total);
