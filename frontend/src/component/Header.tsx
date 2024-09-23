import React from "react";

interface HeaderProps {
  username: string;
  userAvatar: string;
  bgColor: string;
}

const Header: React.FC<HeaderProps> = ({ username, userAvatar, bgColor }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: bgColor,
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
            alt="Logo"
          />
          <h1 className="fontLeague text-2xl md:text-4xl">AQUAlity</h1>
        </div>

        <div className="flex text-base md:text-lg font-['Arial'] items-center">
          <div className="relative mr-2">
            <h1>{username}</h1>
          </div>
          <div className="relative">
            <img
              className="rounded-full w-8 h-8 md:w-9 md:h-9"
              src={userAvatar}
              alt="User Avatar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
