import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tornadoTow from "../assets/tornado-tow2.png";
import mainCover from "../assets/mainCover.jpeg";
import tiresBrand from "../assets/tire-brands-1.jpg";
import tiresBrand2 from "../assets/tire-brands-2.jpg";

function Brands() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="max-w-7xl mx-auto pb-7">
      <Slider {...settings}>
        <div className="relative h-32 overflow-hidden">
          <img
            src={tiresBrand}
            className="w-full h-full object-cover"
            alt="Tire Image"
          />
        </div>
        <div className="relative h-32  overflow-hidden">
          <img
            src={tiresBrand2}
            className="w-full h-full object-cover"
            alt="Main Cover Image"
          />
        </div>
        <div className="relative h-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F2833]/70 via-[#1F2833]/70 to-[#1F2833]/70"></div>
          <img
            src={mainCover}
            className="w-full h-full object-cover"
            alt="Main Cover Image"
          />
          <h1 className="absolute bottom-10 left-0 right-0 text-[#E4C580] text-xl md:text-3xl font-bold p-2 text-center">
            Specials on New & Used Tires Everyday!
          </h1>
        </div>
        <div className="relative h-32 overflow-hidden">
          <img
            src={tornadoTow}
            className="w-full h-full object-cover"
            alt="Tire Image"
          />
          <div className="absolute bottom-0 right-0 p-3 pr-5 text-white">
            <h1 className="text-sm md:text-md font-bold text-center">
              24/7 Service
            </h1>
            <ul className="text-sm md:text-md  text-[#E4C580]">
              <li>Jump Start</li>
              <li>Towing</li>
              <li>Tire Changes</li>
              <li>Lockouts</li>
            </ul>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Brands;
