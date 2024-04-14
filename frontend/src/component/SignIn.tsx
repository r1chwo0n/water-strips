import "../style/signin.css";
export default function SignIn() {
  return (
    <>
      <div className="flex flex-col space-y-2 font-['Arial']">
        <div>
          <h2 className="font-bold py-3">Email</h2>
          <input
            className="appearance-none border rounded-xl w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={{ background: "#d9d9d9" }}
            pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
            required
          ></input>
        </div>
        <div>
          <h2 className="font-bold py-3">Password</h2>
          <input
            className="appearance-none border rounded-xl w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={{ background: "#d9d9d9" }}
            required
          ></input>
        </div>
        <div className="flex justify-between">
          <h4 className="text-xs text-red-500">For got your password</h4>
          <button
            className="relative transition-underline font-bold"
            type="button"
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
      </div>
    </>
  );
}
