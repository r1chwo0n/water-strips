import "../style/newCard.css";
import { useNavigate } from 'react-router-dom';

export default function NewCard() {

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/Add');
  };

  const ellipseColor = {
    backgroundColor: "#e7e7e7",
  };
  const recColor = {
    backgroundColor: "#dedede",
  };
  return (
    <>
      <div className="RectangleforNew mt-24 ml-20 font-['Arial']" style={recColor}>
        <div className="absolute font-bold text-3xl text-neutral-400 inset-0 flex justify-center items-center">
          Add new
        </div>
        <div
          className="EllipseforNew ml-10 mr-10 -mt-24 relative"
          style={ellipseColor}
          onClick={handleAdd}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="plus-shape"></div>
          </div>
        </div>
      </div>
    </>
  );
}
