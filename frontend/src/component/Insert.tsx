import "../style/insert.css";
export default function Insert() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#C9E0EF",
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
      <div
        className="flex justify-center items-center w-screen min-h-screen"
        style={{ backgroundColor: "#C9E0EF" }}
      >
        <div className="font-['Arial'] flex flex-col space-y-6">
          <div className="text-center">
            <p className="font-bold text-3xl">Add new</p>
            <p className="">add new ...</p>
          </div>
          <div className="flex flex-row justify-center space-x-4">
            <button className="Button border rounded-2xl px-12 py-4 text-white font-bold ">
              Select Photo
            </button>
            <button className="rounded-full px-5 Button">
              <img
                className="size-5"
                src="src\pic\camera.png"
                alt="Google logo"
              />
            </button>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Brand</p>
            <input
              className="appearance-none border rounded-lg w-[300px] h-[36px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              style={{ backgroundColor: "white" }}
              placeholder="Brand"
              required
            ></input>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Location</p>
            <input
              className="appearance-none border rounded-lg w-[300px] h-[36px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              style={{ backgroundColor: "white" }}
              placeholder="Location"
              required
            ></input>
          </div>
          <div className="flex items-center justify-center">
            <button className="Button border rounded-full px-9 py-2 text-white font-bold">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
