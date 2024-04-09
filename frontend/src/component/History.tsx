import "../style/history.css";
export default function History() {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          position: "fixed",
          top: 0,
        }}
      >
        <div className="flex items-center">
          <img className="w-18 h-16" src="src\\pic\\logo.png"></img>
          <h1 className="fontLeague text-4xl">AQUAlity</h1>
        </div>
        <div className="flex text-lg font-['Arial'] items-center">
          <div className="relative mr-4 ">
            <h1>username</h1>
          </div>
          <div className="relative">
            <img
              className="rounded-full size-9"
              src="https://i.pinimg.com/736x/2c/01/e8/2c01e8d27a9aab256394677fd598e766.jpg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
