import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/actions";

const AdditionalFeature = (props) => {
  // Pass the clicked feature to my action creator
  const clickedFeature = (e) => {
    console.log(`You Clicked ${props.feature.name}`);
    props.addFeature(props.feature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={clickedFeature}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// Why does the state of the array need to be within this component?

const mapStateToProps = (state) => {
  return {
    features: state.car.features,
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
// export default AdditionalFeature;

// Now, once the add button is clicked I need to add that feature to the feature array in the redux store, the logic will occur in the reducer, what I need to do in here is grab the given feature that was clicked and pass it to my action creator function as its agrument for when it reaches the reducer
