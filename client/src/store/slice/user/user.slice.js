import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserThunk,
} from "./user.thunk";
import { FaHourglass } from "react-icons/fa";

const initialState = {
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    // login user
    builder.addCase(loginUserThunk.pending, (state, action) => {
      console.log("pending")
      // state.buttonLoading = true;
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      console.log("fulfilled")
      // state.userProfile = action.payload?.responseData?.user;
      // state.isAuthenticated = true;
      // state.buttonLoading = false;
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      console.log("rejected")
      // state.buttonLoading = false;
    });

 
    
  },
});

export const { setSelectedUser } = userSlice.actions;

export default userSlice.reducer;