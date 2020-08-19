// Steps
// import my action variables to create my reducer cases
// Set the initial state
// Create the reducer function
// Export the reducer and set it as the "rootReducer" and pass it to the redux store "createStore" function

import { ADD_FEATURE } from "../actions/actions";

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
      console.log(action.payload);
      console.log(state.car.features);
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, newFeature],
        },
        // now I need to take this object and pass it to the feature array within the car object
      };
    default:
      return state;
  }
};
