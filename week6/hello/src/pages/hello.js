import React from "react";
import World from "./world";

export default function Hello() {
  return (
    <>
      <h1>
        Hello,
        <World name="Hyeokbeom" />
      </h1>

      <img src="sample.jpeg" alt="cat" />
    </>
  );
}
