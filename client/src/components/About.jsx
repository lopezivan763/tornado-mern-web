import { useEffect, useState } from "react";
import tornadoSign from "../assets/tornado-sign.jpeg";
import { MdCallMade } from "react-icons/md";

function About() {
  const [currentDay, setCurrentDay] = useState("");

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
    <div className="max-w[1040px] text-[#fafafa] mx-auto">
      {/* Header */}
      <div className="flex justify-center bg-[#09090b] text-white font-bold p-4 md:p-6">
        <h1 className="text-4xl md:text-5xl">About Us</h1>
      </div>
      {/* Main Content */}
      <div className="flex flex-wrap justify-center items-center md:flex-col bg-[#09090b] p-4">
        {/* Image */}
        <div className="flex justify-center mb-4">
          <img
            className="w-68 h-80 object-cover"
            src={tornadoSign}
            alt="tornado-sign"
          />
        </div>
        {/* Text */}
        <div className="flex flex-col m-3 text-white">
          <p className="mb-4">
            Welcome to Tornado Tire Shop, where excellence meets expertise in
            the world of automotive care! At Tornado Tire Shop, we take pride in
            being your trusted partner for all your vehicle needs.
          </p>

          <p className="mb-4">
            We believe in transparency, fair pricing, and honest communication.
            When you choose Tornado Tire Shop, you&apos;re choosing a team
            dedicated to providing top-notch service without breaking the bank.
            Our state-of-the-art facility is equipped with the latest
            technology, allowing us to diagnose and address issues efficiently,
            getting you back on the road in no time.
          </p>

          <p>
            As a locally owned and operated business, we value the relationships
            we&apos;ve built with our customers over the years. Your
            satisfaction is our priority, and we strive to create a positive and
            welcoming atmosphere for everyone who walks through our doors.
          </p>
        </div>
        <div className="h-full w-full flex justify-center  space-between text-[#09090b]">
          <a
            href="/contactUs"
            className="flex items-center bg-[#E4C580] p-4 m-4 cursor-pointer hover:text-[#fafafa] transition duration-300 rounded-md"
          >
            <h1 className="text-lg">Contact Us</h1>
            <MdCallMade size={30} className="ml-2" />
          </a>
        </div>
      </div>
      {/* Hours Of Operation */}
      <div className="flex items-center justify-between bg-[#E4C580] text-[#09090b] font-bold p-4">
        <h1 className="ml-4 text-xl md:text-4xl">Hours Of Operation</h1>
      </div>

      <div className="bg-[#09090b]">
        <ul className="text-white p-4 grid grid-cols-1 md:grid-cols-7 md:gap-4">
          {daysOfWeek.map((dayInfo) => (
            <li
              key={dayInfo.day}
              className={`mb-4 p-4 rounded-md text-center ${
                currentDay === dayInfo.day ? "text-[#09090b] bg-[#E4C580]" : ""
              }`}
            >
              <strong>{dayInfo.day}</strong>
              <br />
              <span>{dayInfo.hours}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
