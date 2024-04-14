import Stomp from "stompjs";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import SockJS from "sockjs-client/dist/sockjs";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import {
  setIsSignUp,
  setIsSignIn,
  appendMessage,
  setStompClient,
} from "../store/Slices/webSocketSlice.ts";
import { selectWebSocket } from "../store/Slices/webSocketSlice.ts";

function useWebSocket() {
  const dispatch = useAppDispatch();
  const webSocket = useAppSelector(selectWebSocket);

  function connect(username: string) {
    try {
      const socket: WebSocket = new SockJS(`http://localhost:8080/ws`);
      const stompClient: Stomp.Client = Stomp.over(socket);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      stompClient.connect(
        {},
        () => onConnected(stompClient, username),
        onError
      );
    } catch (e) {
      console.log(e);
    }
  }

  const onConnected = (stompClient: Stomp.Client, username: string) => {
    stompClient.subscribe("/topic/public", onMessageReceived);
    stompClient.send(
      "/app/test.addUser",
      {},
      JSON.stringify({
        sender: username,
        type: "SIGNIN",
      })
    );
    dispatch(setIsSignUp(false));
    dispatch(setIsSignIn(true));
    dispatch(setStompClient(stompClient));
  };
  const onMessageReceived = (payload: Stomp.Message) => {
    dispatch(appendMessage(JSON.parse(payload.body)));
  };

  return { connect };
}

export default useWebSocket;

const onError = (err: Stomp.Message) => {
  console.log(err);
};
