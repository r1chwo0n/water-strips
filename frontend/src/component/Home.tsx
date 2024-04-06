import "../style/home.css";
export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#C9E0EF",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
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
      </div>
    </>
  );
}
