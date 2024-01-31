import logo from "../assets/tornadoLogo.png";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="max-w[1040px] md:p-10 shadow bg-[#09090b]">
      <div className="mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img className="h-12 w-auto" src={logo} alt="Your Company" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline me-4 md:me-6">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/contactUs" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white text-2xl flex md:justify-end">
          <a
            href="https://www.facebook.com/p/Tornado-Tire-Shop-100063481812709/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 cursor-pointer sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://www.ivan-lopez-dev.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Ivan Lopez
          </a>
          .
        </span>
      </div>
    </footer>
  );
}

export default Footer;
