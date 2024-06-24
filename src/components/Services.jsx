import { FaTools, FaCar } from "react-icons/fa";
import { GiTowTruck } from "react-icons/gi";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Brands from "../components/Brands";

function Services() {
  const phoneNumber = "(847) 608-4900";
  const phoneTow = "(847) 344-0024";

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
    <main className="">
      <div className="max-w[1040px] text-[#fafafa] mx-auto">
        <div className="h-full w-full flex items-center justify-between bg-[#E4C580] text-[#09090b] font-bold p-5">
          <h1 className="ml-4 ">Specials on New & Used Tires Everyday! </h1>
          <h1 className="ml-8 md:mr-4">
            Best Tire Installation & Balancing Guaranteed!
          </h1>
        </div>
        <div className="flex flex-col md:flex-row bg-[#09090b] shadow-lg justify-center space-y-8 md:space-y-0 md:space-x-8 p-4 md:p-8">
          <div className="">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-[#E4C580]">
              OUR SERVICES
            </h1>
            <ul className="list-none p-0">
              {services.map((service, index) => (
                <ServiceItem key={index} icon={<FaTools />} text={service} />
              ))}
            </ul>
          </div>
          <div className="">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-[#E4C580]">
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
          <h1 className="ml-4">Towing available 24/7 </h1>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <h1>Se habla español</h1>
            </div>
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
    </main>
  );
}
function ServiceItem({ icon, text }) {
  return (
    <li className="flex md:text-5xl items-center p-2 md:p-4 transition duration-300 transform hover:scale-105 hover:text-[#E4C580]">
      {icon}
      <p className="ml-2 md:ml-4 text-md md:text-lg">{text}</p>
    </li>
  );
}

export default Services;
