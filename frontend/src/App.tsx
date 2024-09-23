import "./App.css";
import Card from "./component/Card";
import History from "./component/History";
import Home from "./component/Home";
import NewCard from "./component/NewCard";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Add from "./component/Insert";
import Result from "./component/Result";
import { appStateType, selectWebSocket } from "./store/Slices/webSocketSlice";
import { useAppSelector } from "./store/hooks";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const webSocketState = useAppSelector(selectWebSocket);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {/* {webSocketState.appState == appStateType.HOME && <Home />}
        {webSocketState.appState == appStateType.SIGNIN && <SignIn />}
        {webSocketState.appState == appStateType.SIGNUP && <SignUp />}
        {webSocketState.appState == appStateType.HISTORY && <History />} */}
        {/* <SignIn />
        <SignUp /> */}

        
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/history" element={<History />} />
        <Route path="/Add" element={<Add />}/>
        <Route path="/Result" element={<Result />} />
      </Routes>
    </Router>
      </div>

    </>
  );
}

export default App;
