import "./App.css";
import Card from "./component/Card";
import History from "./component/History";
import Home from "./component/Home";
import NewCard from "./component/NewCard";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {/* <NewCard /> */}
        {/* <Card /> */}
        {/* <Home /> */}
        <History></History>
      </div>
    </>
  );
}

export default App;
