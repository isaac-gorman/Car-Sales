import React from "react";
import { removeFeature } from "../actions/actions";
import { connect } from "react-redux";

const AddedFeature = (props) => {
  const remove = (e) => {
    console.log("remove button clicked");
    props.removeFeature(props.feature);
  };

  return (
    <li>
      {console.log("I am props", props.feature)}
      <button className="button" onClick={remove}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
// I need to connect this component to the state it will alter so it can run the reducer
