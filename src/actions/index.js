// Actions

// Action Types
 // think of variables for our actions that help us avoid bugs
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE"

// Action Creators (AC)
// just vanilla js functions that can be passed down to our components
export const addFeature = feature => {
    console.log('Add_Feature action creator: ', feature)
    return {type: ADD_FEATURE, payload: feature}
}

export const removeItem = feature => {
    console.log('Remove_Feature action creator: ', feature)
    return {type: REMOVE_FEATURE, payload: feature}
}
