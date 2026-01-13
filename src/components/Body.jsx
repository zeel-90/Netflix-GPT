import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (


    <div className="relative h-screen overflow-hidden">
      {/* Full-screen background image */}
      <img
        src="/background.jpg"
        alt="Netflix background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content goes here, on top of the image */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
