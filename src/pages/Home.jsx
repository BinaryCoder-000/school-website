import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Notice from "../components/Notice";
import Footer from "../components/Footer";
import banners from "../assets/public/images/banner.jpg";
import Body_HomeCard from "../components/Body_HomeCard";
import Dashboard from "../components/Dashboard";
import Gallery from "../components/Gallery";

export default function Home() {
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Navbar setShowCalendar={setShowCalendar} showCalendar={showCalendar} />

      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)]
        bg-[#EBAE28]/90 transition-all duration-300 z-40
        ${showCalendar ? "w-full md:w-72" : "w-0 overflow-hidden"}`}
      >
        <Dashboard />
      </div>

      <div
        className={`pt-16 transition-all duration-300
        ${showCalendar ? "ml-0 md:ml-72" : "ml-0"}`}
      >
        <img
          src={banners}
          alt="Banner"
          className="w-full
          h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
        />

        <div className="container mx-auto">
          <Notice />
        </div>

        <div className="container mx-auto mt-5">
          <Body_HomeCard />
          <Gallery />
        </div>
        <Footer />
      </div>

    </>
  );
}
