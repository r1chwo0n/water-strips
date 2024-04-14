import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";

interface usernameState {
  username: string;
  pic: string;
}

const initialState: usernameState = {
  username: "",
  pic: "",
};

export const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPic: (state, action: PayloadAction<string>) => {
      state.pic = action.payload;
    },
  },
});

export const { setUsername, setPic } = usernameSlice.actions;
export default usernameSlice.reducer;
export const selectUsername = (state: RootState) => state.username;
