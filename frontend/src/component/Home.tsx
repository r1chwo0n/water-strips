import "../style/home.css";
export default function Home() {
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
          position: "fixed", // Fixed position to keep it at the top
          top: 0, // Stick to the top of the viewport
        }}
      >
        <h1 className="fontLeague text-4xl">AQUAlity</h1>
        <div className="flex text-lg font-['Arial']">
          <div className="relative mr-4 transition-underline">
            <a href="#">sign in</a>
          </div>
          <span className="text-gray-700 mr-4">|</span>
          <div className="relative transition-underline">
            <a href="#">sign up</a>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#C9E0EF",
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Center content vertically
          alignItems: "center", // Center content horizontally
        }}
      >
        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start mt-56 md:mt-0">
          <div className="md:mr-20">
            <img
              className="rounded-full size-96 md:size-96"
              src="https://www.nsm.or.th/nsm/sites/default/files/2021-12/20200204-2PNG.png"
              alt="Your image"
            />
          </div>
          <div className="font-['Arial'] font-bold text-left md:text-left mt-9">
            <h1 className="text-lg">Capture. Analyze. Know your</h1>
            <h1 className="text-4xl mt-2">water</h1>
            <h1 className="text-4xl">quality</h1>
            <button className="w-72 h-11 text-2xl mt-6 md:mt-4 mb-6 bg-white rounded-2xl boxShadow hover:bg-gray-200">
              START TEST
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
