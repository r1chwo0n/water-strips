import "../style/card.css";
import { useNavigate } from "react-router-dom";

export default function Card() {

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate('/Result');
  }


  return (
    <div className="container">
      <div className="RectangleBlue mt-24 ml-20 font-['Arial']">

        {/* woon */}
        
        <div className="boxColor" style={{ backgroundColor: "#D9D9D9" }}></div>
        
        <div className="EllipseBlue ml-10 mr-10 -mt-24">
          <img
            className="rounded-full"
            src="https://th-live-02.slatic.net/p/8329775d625dd6aa188db5de87094880.jpg"
          ></img>
        </div>
        <div className="space-y-14">

          <div className="flex flex-col flex-grow space-y-2">

            <h2 className="font-bold text-4xl pl-5 pt-28">Brand</h2>

            <h3 className="text-xl space-x-2">
              <span className="font-bold pl-5">Date :</span>
              <span> dd mm yy </span>
            </h3>

            <h3 className="text-xl space-x-2">
              <span className="font-bold pl-5">Location :</span>
              <span>CMU</span>
            </h3>

          </div>

          <button className="flex pl-5">

            <h5 className="text-blue-900 underline underline-offset-2 hover:underline hover:text-white"
              onClick={handleDetail}>
              See more
            </h5>

          </button>
        </div>
      </div>

      {/* เพิ่มกล่องอื่น ๆ ที่นี่ */}
      
    </div>
  );
}
