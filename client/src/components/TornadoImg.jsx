import tornadoImg from "../assets/tornadoImg.jpg";

function TornadoImg() {
  return (
    <div className="max-w[1040px] relative overflow-hidden">
      <img
        src={tornadoImg}
        alt="Background"
        className="object-cover w-full h-full shadow-md"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#1F2833]/40 via-[#1F2833]/40 to-[#1F2833]/40 flex justify-center items-center"></div>
    </div>
  );
}

export default TornadoImg;
