import { createSlice } from "@reduxjs/toolkit";
// import firebase from "../../configs/firebaseConfig";

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        items: null
    },
    reducers: {
        updateItems: (state, action) => {
            state.items = action.payload
        }
    }
})

export const { updateItems } = itemsSlice.actions

export default itemsSlice.reducer