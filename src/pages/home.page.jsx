import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";
import Footer from "../components/footer";
import Faq from "../components/faq";

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

      <div className="mx-4 lg:mx-44">
        <h1 className="my-4 text:md lg:text-2xl font-bold">Frequently Asked Questions (FAQ)</h1>
        <Faq />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
