import "./App.css";
import Card from "./component/Card";
import NewCard from "./component/NewCard";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <NewCard />
        {/* <Card /> */}
      </div>
    </>
  );
}

export default App;
