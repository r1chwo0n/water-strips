import "../style/newCard.css";
export default function NewCard() {
  const ellipseColor = {
    backgroundColor: "#e7e7e7",
  };
  const recColor = {
    backgroundColor: "#dedede",
  };
  return (
    <>
      <div className="RectangleforNew mt-24 font-['Arial']" style={recColor}>
        <div className="absolute font-bold text-3xl text-neutral-400 inset-0 flex justify-center items-center">
          Add new
        </div>
        <div
          className="EllipseforNew ml-10 -mt-24 relative"
          style={ellipseColor}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="plus-shape"></div>
          </div>
        </div>
      </div>
    </>
  );
}
