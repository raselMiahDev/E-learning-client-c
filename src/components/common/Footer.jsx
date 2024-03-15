import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "./../../assets/Frame.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-800 body-font">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
            <img src={logo} alt="Logo" />
          </a>
          <p className="mt-2 text-sm text-slate-300">
            Learning Doing and Practice
          </p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a className="text-slate-300 cursor-pointer hover:text-[#2aaa94]">
                <FaFacebook size={25} />
              </a>
              <a className="ml-3 text-slate-300 cursor-pointer hover:text-[#2aaa94]">
                <FaTwitter size={25} />
              </a>
              <a className="ml-3 text-slate-300cursor-pointer hover:text-[#2aaa94]">
                <FaInstagram size={25} />
              </a>
              <a className="ml-3 text-slate-300 cursor-pointer hover:text-[#2aaa94]">
                <FaLinkedinIn size={25} />
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-[#2aaa94] uppercase title-font">
              About
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-slate-300 cursor-pointer hover:text-[#2aaa94]">
                  Company
                </a>
              </li>
              <li className="mt-3">
                <a className="text-slate-300 cursor-pointer hover:text-[#2aaa94]">
                  Careers
                </a>
              </li>
              <li className="mt-3">
                <a className="text-slate-300 cursor-pointer hover:text-[#2aaa94]">
                  Blog
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-[#2aaa94] uppercase title-font">
              Support
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-slate-300 cursor-pointer hover:text-[#2aaa94]">
                  Contact Support
                </a>
              </li>
              <li className="mt-3">
                <a className="text-slate-300 cursor-pointer hover:text-[#2aaa94]">
                  Help Resources
                </a>
              </li>
              <li className="mt-3">
                <a className="text-slate-300 cursor-pointer hover:text-[#2aaa94]">
                  Release Updates
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-[#2aaa94] uppercase title-font">
              Platform
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-slate-300 cursor-pointer hover:text-[#2aaa94]">
                  Terms &amp; Privacy
                </a>
              </li>
              <li className="mt-3">
                <a className="text-slate-300 cursor-pointer hover:text-[#2aaa94]">
                  Pricing
                </a>
              </li>
              <li className="mt-3">
                <a className="text-slate-300 cursor-pointer hover:text-[#2aaa94]">
                  FAQ
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-[#2aaa94] uppercase title-font">
              Contact
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-slate-300 cursor-pointer hover:text-[#2aaa94]">
                  Send a Message
                </a>
              </li>
              <li className="mt-3">
                <a className="text-slate-300 cursor-pointer hover:text-[#2aaa94]">
                  Request a Quote
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
