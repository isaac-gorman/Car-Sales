import React from "react";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Base Price: ${props.price}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // What is the state I nend to bring in from the Redux store?
    //  I need to bring in the car details such as:
    // - price
    // - name
    // - image
    // - features array
    price: state.car.price,
    name: state.car.name,
    image: state.car.image,
    // features: state.car.features,
  };
};

// export default Header;
export default connect(mapStateToProps, {})(Header);
