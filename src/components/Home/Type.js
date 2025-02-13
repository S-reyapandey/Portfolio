import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack Developer",
          "Turning Ideas into Code",        
          "Crafting User-Centric Designs",
          "Problem Solver | Tech Enthusiast",
          "Sleek & Responsive Solutions"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
