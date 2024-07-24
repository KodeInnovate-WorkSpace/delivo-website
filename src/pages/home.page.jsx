import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card cardImg={"Delivo 1.1.png"} />
        <Card cardImg={"Delivo 1.png"} />
        <Card cardImg={"Delivo 2.png"} />
        <Card cardImg={"Delivo 3.png"} />
      </div>
    </>
  );
};

export default HomePage;
