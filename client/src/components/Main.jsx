import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaTools, FaCar } from "react-icons/fa";
import { GiTowTruck } from "react-icons/gi";
import { PhoneIcon } from "@heroicons/react/24/outline";
import ReviewSection from "../components/ReviewsSection";
import Brands from "../components/Brands";
import TornadoImg from "../components/TornadoImg";
import mainCover from "../assets/mainCover.jpeg";

function Main() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const phoneNumber = "(847) 608-4900";
  const phoneTow = "(847) 344-0024";

  useEffect(() => {
    const img = new Image();
    img.src = mainCover;
    img.onload = () => {
      setLoaded(true);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.2}px)`,
  };

  const services = [
    "New Rim & Tire Installation",
    "High Speed Balance",
    "Rotation",
    "Tire Patches",
    "Valve Stems",
    "TPM Sensor Repair",
    "Rim Cleaning",
  ];

  const types = [
    "Sport Tires",
    "Light Truck Tires",
    "Bobcat Tires",
    "Lawn Mower Tire Service",
    "Used Tires & New Tires",
    "& Much More",
  ];

  return (
    <main>
      <div className="max-w[1040px] h-full md:h-screen relative overflow-hidden">
        <img
          className={`w-full h-full object-cover object-left scale-x-[-1] transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 md:object-center lg:object-right md:h-70vh lg:h-90vh`}
          src={mainCover}
          alt="Background"
          onLoad={() => setLoaded(true)}
          style={parallaxStyle}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#1F2833]/90 via-[#1F2833]/70 to-[#1F2833]/90 flex justify-center items-center">
          <div className="text-center text-white z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-[#E4C580]">
              TORNADO TIRE SHOP
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-[#fafafa]">
              AND TOWING SERVICE
            </h2>
            <div className="h-full w-full flex justify-center space-between bg-[#E4C580] text-[#09090b] p-3">
              <a
                href="https://www.google.com/maps/place/Tornado+Tire+Shop/@42.0468956,-88.2966017,17z/data=!4m15!1m8!3m7!1s0x880f0572bd09f35b:0xd077ab4ee8485931!2s563+N+State+St,+Elgin,+IL+60123!3b1!8m2!3d42.0468956!4d-88.2940268!16s%2Fg%2F11bw3yshv5!3m5!1s0x880f0572bc5c5e2f:0x2e2bdef0daabff16!8m2!3d42.0468758!4d-88.294024!16s%2Fg%2F11b8_nd897?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center cursor-pointer hover:text-[#fafafa] transition duration-300"
              >
                <FaLocationDot size={30} className="mr-2" />
                <h1 className="text-lg">563 N State St Elgin IL 60123</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w[1040px] text-[#fafafa] mx-auto">
        <div className="flex flex-col md:flex-row bg-[#09090b] shadow-lg justify-center space-y-8 md:space-y-0 md:space-x-8 p-4 md:p-8">
          <div className="">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-[#E4C580]">
              OUR SERVICES
            </h1>
            <ul className="list-none p-0">
              {services.map((service, index) => (
                <ServiceItem key={index} icon={<FaTools />} text={service} />
              ))}
            </ul>
          </div>
          <div className="">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-[#E4C580]">
              TYPES OF TIRES
            </h1>
            <ul className="list-none p-0">
              {types.map((service, index) => (
                <ServiceItem key={index} icon={<FaCar />} text={service} />
              ))}
            </ul>
          </div>
        </div>
        <div className="h-full w-full flex items-center justify-between bg-[#E4C580] text-[#09090b] font-bold p-2">
          <h1 className="ml-4 text-xl">Se habla español</h1>
          <div className="flex space-x-4">
            <a
              href={`tel:${phoneNumber}`}
              type="button"
              className="relative flex items-center rounded-full p-2 font-bold hover:text-[#fafafa] hover:bg-[#E4C580] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Call</span>
              <PhoneIcon className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
              <p className="hidden md:inline ml-2 text-sm">(847) 608-4900</p>
            </a>
            <a
              href={`tel:${phoneTow}`}
              type="button"
              className="relative flex items-center rounded-full p-2 font-bold hover:text-[#fafafa] hover:bg-[#E4C580] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Call</span>
              <GiTowTruck
                className="h-6 w-6 md:h-8 md:w-8"
                aria-hidden="true"
              />
              <p className="hidden md:inline ml-2 text-sm">(847) 344-0024</p>
            </a>
          </div>
        </div>
      </div>
      <Brands />
      <ReviewSection />
      <TornadoImg />
    </main>
  );
}
function ServiceItem({ icon, text }) {
  return (
    <li className="flex items-center p-2 md:p-4 transition duration-300 transform hover:scale-105 hover:text-[#E4C580]">
      {icon}
      <p className="ml-2 md:ml-4 text-md md:text-lg">{text}</p>
    </li>
  );
}
export default Main;
