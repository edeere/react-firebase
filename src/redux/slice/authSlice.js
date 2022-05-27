import { createSlice } from "@reduxjs/toolkit";
import firebase from "../../configs/firebaseConfig";


export const saveUserData = (user) => {
  firebase.database().ref(`users/${user.uid}`).update({
    email: user.email,
    userId: user.uid,
    timestamp: Date.now()
  })
  return user
}

const authSlice = createSlice({
  name: "user",
  initialState: {
      email: null,
      userId: null
  },
  reducers: {
    updateUser: (state, action) => {
      console.log("Running updateUser")
      state.userId = action.payload.userId;
      state.email = action.payload.email;
    },
  },
  extraReducers: {
    [saveUserData.fulfilled]: (state, action) => {
      console.log('success!')
      state.userId = action.payload.user.userId;
      state.email = action.payload.user.email;
    },
  }
});

// Action creators are generated for each case reducer function
export const { updateUser } = authSlice.actions;

export default authSlice.reducer;
