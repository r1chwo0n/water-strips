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
          <img
            className="w-14 h-12 md:w-20 md:h-16"
            src="src\\pic\\logo.png"
          ></img>
          <h1 className="fontLeague text-2xl md:text-4xl">AQUAlity</h1>
        </div>
        <div className="relative font-['Arial'] ">
          <input
            type="text"
            placeholder="Search History"
            style={{ backgroundColor: "#D9D9D9" }}
            className="border rounded-2xl w-48 h-7 px-2 md:px-2 md:w-96 md:h-8 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex text-base md:text-lg font-['Arial'] items-center">
          <div className="relative mr-2">
            <h1>username</h1>
          </div>
          <div className="relative">
            <img
              className="rounded-full w-8 h-8 md:w-9 md:h-9"
              src="https://i.pinimg.com/736x/2c/01/e8/2c01e8d27a9aab256394677fd598e766.jpg"
              alt="User Avatar"
            />
          </div>
        </div>
      </div>
    </>
  );
}
