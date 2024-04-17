import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";
import Stomp from "stompjs";

export enum messageType {
  START = "START",
  READY = "READY",
}

export enum appStateType { //เอาไว้เปลี่ยนหน้า
  HOME = "HOME",
  SIGNIN = "SIGNIN",
  SIGNUP = "SIGNUP",
  HISTORY = "HOSTORY",
}

interface webSocketMessage {
  owner: string;
  content: string;
  pic: string;
  type: messageType;
}

interface webSocketState {
  isSignIn: boolean;
  isSignUp: boolean;
  stompClient: Stomp.Client | undefined;
  messages: webSocketMessage[] | undefined;
  appState: appStateType;
}

const initialState: webSocketState = {
  isSignIn: false,
  isSignUp: true,
  stompClient: undefined,
  messages: [],
  appState: appStateType.HOME,
};

export const webSocketSlice = createSlice({
  name: "webSocket",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<appStateType>) => {
      state.appState = action.payload;
    },
    setIsSignIn: (state, action: PayloadAction<boolean>) => {
      state.isSignIn = action.payload;
    },
    setIsSignUp: (state, action: PayloadAction<boolean>) => {
      state.isSignIn = action.payload;
    },
    appendMessage: (state, action: PayloadAction<webSocketMessage>) => {
      state.messages?.push(action.payload);
    },
    setStompClient: (state, action: PayloadAction<Stomp.Client>) => {
      state.stompClient = action.payload;
    },
  },
});

export const {
  setIsSignIn,
  appendMessage,
  setStompClient,
  setIsSignUp,
  setAppState,
} = webSocketSlice.actions;
export default webSocketSlice.reducer;
export const selectWebSocket = (state: RootState) => state.webSocket;
