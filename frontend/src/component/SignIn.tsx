import { useState } from "react";
import "../style/signin.css";
import { useDispatch } from "react-redux";
import { appStateType, setAppState } from "../store/Slices/webSocketSlice";
export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();
  const clickedtoSignUp = () => {
    dispatch(setAppState(appStateType.SIGNUP));
  };
  return (
    <>
      <img
        className="relative w-[600px] h-[340px] mt-48"
        src="src\pic\signinframe.png"
      ></img>
      <div className="absolute flex flex-col space-y-1 font-['Arial']">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl text-center">Sign In</h1>
          <img
            src={showPassword ? "src\\pic\\close.png" : "src\\pic\\open.png"}
            className="relative w-[250px] h-[150px]"
          />
        </div>
        <div>
          <h2 className="font-bold py-3">Email</h2>
          <input
            className="appearance-none border rounded-xl w-[300px] h-[30px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={{ backgroundColor: "#d9d9d9" }}
            placeholder="Email"
            required
          ></input>
        </div>
        <div>
          <h2 className="font-bold py-3">Password</h2>
          <div style={{ position: "relative", width: "fit-content" }}>
            <input
              className="appearance-none border rounded-xl w-[300px] h-[30px] py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              style={{ backgroundColor: "#d9d9d9" }}
              placeholder="Password"
              required
            />
            <button
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "5px",
                top: "50%",
                transform: "translateY(-50%)",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              <img
                src={
                  showPassword
                    ? "src\\pic\\openureye.png"
                    : "src\\pic\\closeureye.png"
                }
                alt={showPassword ? "Open icon" : "Close icon"}
                style={{ width: "20px", height: "20px" }}
              />
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="relative text-xs text-red-500 hover:text-red-300"
            type="button"
          >
            For got your password?
          </button>
          <button
            className="relative transition-underline font-bold"
            type="button"
            onClick={clickedtoSignUp}
          >
            sign up
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="line" />
          <h2 className="text-d9d9d9" style={{ margin: "0 140px" }}>
            or
          </h2>
          <div className="line" style={{ margin: "0 160px" }} />
        </div>
        <div className="flex flex-row justify-center space-x-4">
          <button
            className="border rounded-xl px-1 py-1 flex items-center "
            style={{ backgroundColor: "#d9d9d9" }}
          >
            <img
              className="size-5"
              src="src\pic\google.png"
              alt="Google logo"
            />
            <h2 className="ml-2 font-bold">Google</h2>
          </button>
          <button
            className="border rounded-xl px-1 py-1 flex items-center "
            style={{ backgroundColor: "#d9d9d9" }}
          >
            <img
              className="size-5"
              src="src\pic\facebook.png"
              alt="Facebook logo"
            />
            <h2 className="ml-2 font-bold">Facebook</h2>
          </button>
        </div>
      </div>
    </>
  );
}
