// 1) What are actions the user can conduct with app?
// ADD_FEATURE
// REMOVE_FEATURE
// UPDATE_TOTAL

export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const UPDATE_TOTAL = "UPDATE_TOTAL";

// 2) Build "Action Creator" functions that enable these actions that will be passed to the reducer
// What needs to happen programmatically to:
// - Add a feature to the cars "Added features:"
// - - When a user click on "Add" it needs to fire of an action to transport that object from the "Additional Feature" array into the "feature"array within the car object
export function addFeature(newFeature) {
  return {
    type: ADD_FEATURE,
    payload: newFeature,
  };
}
// Q: What next?
// - The addFeature action creator will dispatch the action to the reducer and the send the reducer the newFeature.
// - Now I need to import the action creator into "the component" but what component?
