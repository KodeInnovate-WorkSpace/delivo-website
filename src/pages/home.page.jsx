import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Faq from "../components/faq";
import GetApp from "../components/get_app";
import MarqueeSection from "../components/marque_section";

const HomePage = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="w-full h-[26rem] bg-cover bg-center bg-gray-200 flex items-center justify-center lg:h-[35rem] relative"
        style={{ backgroundImage: "url(fruit.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="flex items-center justify-center flex-col relative z-10">
          <h1 className="text-5xl lg:text-6xl text-white font-bold">Bakalaa</h1>
          <h2 className="text-3xl px-4 text-center lg:text-4xl text-white font-bold">Discover the best food, drinks & grocery in Mumbra</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8">
        
        <GetApp />
        <MarqueeSection />

        {/* faq section */}
        <div className="mt-16 mx-4 lg:mx-44">
          <h1 className="my-4 text:md lg:text-2xl font-bold">Frequently Asked Questions (FAQ)</h1>
          <Faq />
        </div>
      </div>
    </>
  );
};

export default HomePage;
