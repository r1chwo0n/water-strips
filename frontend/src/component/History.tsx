import "../style/history.css";
import NewCard from "./NewCard";
import "../style/Scrollbar.css";
import Card from "./Card";
import Header from "./Header";

export default function History() {
  return (
    <>
      <Header
        username="username"
        userAvatar="https://i.pinimg.com/736x/2c/01/e8/2c01e8d27a9aab256394677fd598e766.jpg"
        bgColor="white"
      />

      <div
        className="scroll-container"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          overflowX: "scroll",
          padding: "80px",
          width: "100%", // Adjust width as needed
          marginBottom: "-10px", // Margin from the bottom
          marginLeft: "-100px",
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

      <div style={{ paddingTop: "100px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 100px)", // Adjust height to account for header
          }}
        ></div>
      </div>
    </>
  );
}
