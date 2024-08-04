import "../style/history.css";
import NewCard from "./NewCard";
import "../style/Scrollbar.css"
import Card from "./Card"

export default function History() {
  return (
    <>
      <div
        style={{//แถบขาวบนสุด
          backgroundColor: "white",
          width: "100%",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          position: "fixed",
          top: 0,
          zIndex: 10,
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
            className="border rounded-2xl w-48 h-7 px-2 md:px-2 ml-20 md:w-96 md:h-8 focus:outline-none focus:ring focus:border-blue-300 "
          />
        </div>
        <div
          className="scroll-container" 
          style={{

            position: "relative",
            display: "flex",
            flexDirection: "row",
            overflowX: "scroll",
            padding: "80px",
            width: "100%", // Adjust width as needed
            marginBottom: "-700px", // Margin from the bottom
            marginLeft: "-500px"

          }}
        >
          <NewCard />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          {/* Add more NewCard components as needed */}
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

        

        <div style={{ paddingTop: "100px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 100px)", // Adjust height to account for header
          }}
        >
         
        </div>
        </div>
       
      </div>
    </>
  );
}
