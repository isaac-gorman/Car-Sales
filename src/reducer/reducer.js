// Steps
// import my action variables to create my reducer cases
// Set the initial state
// Create the reducer function
// Export the reducer and set it as the "rootReducer" and pass it to the redux store "createStore" function

import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const rootReducer = (state = initialState, action) => {
  console.log("reducer hit", "current state:", state, "action", action);
  switch (action.type) {
    case ADD_FEATURE:
      const newFeature = action.payload;
      // match the payload to its mathcing additionalFeature object
      const removeMatch = state.additionalFeatures.filter((item) => {
        return item.id !== newFeature.id;
      });
      console.log("I am remove match", removeMatch);
      // const newFeaturesArray = removeMatch;
      return {
        ...state,
        additionalFeatures: removeMatch,
        car: {
          ...state.car,
          features: [...state.car.features, newFeature],
        },
        additionalPrice: newFeature.price,
        // The object from the additionalFeatures Array can be passed to the features array.
        // The features are displaying as I add them
        // Now I need to remove the objects from the additionalFeatures array as I add them to the features array
        // Now that I am able to remove the added additionalFeatures its time to enable the remove features
      };
    case REMOVE_FEATURE:
      console.log("Reducer triggred by removeFeature action");
      const removeFeature = action.payload;
      const filterOutFeature = state.car.features.filter((item) => {
        return item.id !== removeFeature.id;
      });
      console.log("I am the filterOutFeature", filterOutFeature);
      return {
        ...state,
        car: {
          // I need to remove the feature I selected from the array of features
          ...state.car,
          features: filterOutFeature,
        },
        additionalFeatures: [...state.additionalFeatures, removeFeature],
      };
    default:
      return state;
  }
};
