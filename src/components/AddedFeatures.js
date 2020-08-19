import React from "react";
import AddedFeature from "./AddedFeature";
import { connect } from "react-redux";
import { removeFeature } from "../actions/actions";

const AddedFeatures = (props) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {console.log("I am features", props.features.length)}
      {props.features.length ? (
        <ol type="1">
          {props.features.map((item) => (
            <AddedFeature
              removeFeature={removeFeature}
              key={item.id}
              feature={item}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  // What state do I need to return?
  return {
    features: state.car.features,
  };
};

export default connect(mapStateToProps, {})(AddedFeatures);
