import "./App.css";
import Card from "./component/Card";
import History from "./component/History";
import Home from "./component/Home";
import NewCard from "./component/NewCard";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import { appStateType, selectWebSocket } from "./store/Slices/webSocketSlice";
import { useAppSelector } from "./store/hooks";

function App() {
  const webSocketState = useAppSelector(selectWebSocket);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {webSocketState.appState == appStateType.HOME && <Home />}
        {webSocketState.appState == appStateType.SIGNIN && <SignIn />}
        {webSocketState.appState == appStateType.SIGNUP && <SignUp />}
        {webSocketState.appState == appStateType.HISTORY && <History />}
        {/* <SignIn />
        <SignUp /> */}
      </div>
    </>
  );
}

export default App;
