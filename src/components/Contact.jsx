import { useEffect, useState } from "react";
import { GiTowTruck } from "react-icons/gi";
import { FaLink } from "react-icons/fa6";
import { PhoneIcon } from "@heroicons/react/24/outline";
import ContactForm from './ContactForm'
import { FaLocationDot } from "react-icons/fa6";


function Contact() {
    const [currentDay, setCurrentDay] = useState("");
    const phoneNumber = "(847) 608-4900";
    const phoneTow = "(847) 344-0024"

    const daysOfWeek = [
      { day: "SUN", hours: "Closed" },
      { day: "MON", hours: "8:00 AM  7:00 PM" },
      { day: "TUE", hours: "8:00 AM  7:00 PM" },
      { day: "WED", hours: "8:00 AM  7:00 PM" },
      { day: "THU", hours: "8:00 AM  7:00 PM" },
      { day: "FRI", hours: "8:00 AM  7:00 PM" },
      { day: "SAT", hours: "8:00 AM  5:00 PM" },
    ];
  
    useEffect(() => {
      setCurrentDay(getCurrentDay());
    }, []);
  
    function getCurrentDay() {
      const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      const currentDate = new Date();
      const currentDayIndex = currentDate.getDay();
      return days[currentDayIndex];
    }

  return (
    <main className="max-w[1040px] text-[#fafafa] mx-auto">
      <section className="bg-[#09090b] text-white font-bold p-4">
        <h1 className="flex justify-center text-4xl md:text-5xl">Contact Us </h1>
      </section>

      <section className="bg-[#09090b] flex flex-wrap justify-center md:space-x-24 md:p-4">
        <div className="m-4">
    <strong className="text-3xl md:text-4xl text-[#E4C580]">Tornado Tire Shop</strong>
    <a href={`tel:${phoneNumber}`}
      type="button"
      className="relative flex items-center rounded-full p-3 font-bold hover:bg-[#E4C580] hover:text-[#09090b] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">Call</span>
      <PhoneIcon className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
      <p className="md:inline ml-2 text-sm">(847) 608-4900</p>
    </a>
    </div>

    <div className="m-4">
    <strong className="text-3xl md:text-4xl text-[#E4C580]">Tornado Towing</strong>
      <a href={`tel:${phoneTow}`}
        type="button"
        className="relative flex items-center rounded-full p-3 font-bold hover:text-[#09090b] hover:bg-[#E4C580] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Call</span>
        <GiTowTruck className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
        <p className="md:inline ml-2 text-sm">(847) 344-0024</p>
      </a>

      <a href="https://tornadotowing.com/" target="_blank" rel="noopener noreferrer"
        type="button"
        className="relative flex items-center rounded-full p-3 font-bold hover:text-[#09090b] hover:bg-[#E4C580] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Link</span>
        <FaLink className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
        <h1 className="md:inline ml-2 text-sm"  >tornadotowing.com</h1>
      </a>
      </div>
    </section>

      <section className="bg-[#09090b] p-4 justify-center  md:flex md:items-center">
    <ul className="text-white p-4 grid grid-cols-4 md:grid-cols-7 md:gap-4">
      {daysOfWeek.map((dayInfo) => (
        <li
          key={dayInfo.day}
          className={`mb-2 p-2 rounded-md text-center ${
            currentDay === dayInfo.day ? "text-[#09090b] bg-[#E4C580] " : ""
          }`}
        >
          <strong>{dayInfo.day}</strong>
          <br />
          <span>{dayInfo.hours}</span>
        </li>
      ))}
    </ul>
</section>

<section className="bg-[#09090b]">
<div className="text-[#09090b] flex justify-center font-bold p-5">
        <h1 className="text-white text-4xl md:text-5xl">Find Us </h1>
      </div> 
      <div className="w-full bg-[#E4C580] text-white p-3">
              <a
                href="https://www.google.com/maps/place/Tornado+Tire+Shop/@42.0468956,-88.2966017,17z/data=!4m15!1m8!3m7!1s0x880f0572bd09f35b:0xd077ab4ee8485931!2s563+N+State+St,+Elgin,+IL+60123!3b1!8m2!3d42.0468956!4d-88.2940268!16s%2Fg%2F11bw3yshv5!3m5!1s0x880f0572bc5c5e2f:0x2e2bdef0daabff16!8m2!3d42.0468758!4d-88.294024!16s%2Fg%2F11b8_nd897?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center cursor-pointer hover:text-[#fafafa] transition duration-300"
              >
                <FaLocationDot size={30} className="text-[#09090b] mr-2" />
                <h1 className="text-[#09090b] text-lg">563 N State St Elgin IL 60123</h1>
              </a>
            </div>     
      <div className="map-container">
        
    <iframe
      title="Tornado Tire Shop Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.626302654427!2d-88.2965989!3d42.0468798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f0572bc5c5e2f%3A0x2e2bdef0daabff16!2sTornado%20Tire%20Shop!5e0!3m2!1sen!2sus!4v1643735817293!5m2!1sen!2sus"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
  </section>
  <ContactForm />
    </main>
  );
}


export default Contact;
