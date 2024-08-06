import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";

const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <div
        className="w-full h-[26rem] bg-cover bg-center bg-gray-200 flex items-center justify-center"
        style={{ backgroundImage: "url(delivo_banner.png)" }}
      ></div>

      {/* Main Content */}
      <div className="container mx-auto py-8">
        {/* Card Grid */}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card cardImg={"Delivo 1.1.png"} />
          <Card cardImg={"Delivo 1.png"} />
          <Card cardImg={"Delivo 2.webp"} />
          <Card cardImg={"Delivo 3.webp"} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
