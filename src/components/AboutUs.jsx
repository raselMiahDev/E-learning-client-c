import { FaCheckDouble } from "react-icons/fa6";
import aboutBanner from "../assets/about-banner.jpg";
import aboutShape1 from "../assets/about-shape-1.svg";
import aboutShape2 from "../assets/about-shape-2.svg";

const AboutUs = () => {
  return (
    <section className="section py-5 md:h-screen grid justify-center items-center px-5">
      <div className="grid gap-20 md:grid-cols-2">
        <div className="about-banners py-10 w-full relative">
          <div className="flex justify-end ">
            <img src={aboutBanner} className="rounded-xl" alt="" />
          </div>
          <div className="absolute right-[-120px] top-[-50px] z-10">
            <img src={aboutShape1} />
          </div>
          <div className="absolute left-10 bottom-[-100px] ">
            <img src={aboutShape2} className="" />
          </div>
        </div>

        <div className="about-content">
          <div className=" px-12">
            <p className="font-bold pb-3">About Us</p>

            <h2 className="text-black text-9xl font-bold pb-3">
              Over 10 Years in{" "}
              <span className="text-orange-500">Distant learning</span> for
              Skill Development
            </h2>

            <p className="pb-3">
              Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
              ex tempor incididunt labore dolore magna aliquaenim ad minim.
            </p>

            <ul className="about-list">
              <li className="flex gap-2">
                <FaCheckDouble className="text-orange-300" />
                <span> Expert Trainers</span>
              </li>

              <li className="flex gap-2">
                <FaCheckDouble className="text-orange-300" />
                <span>Online Remote Learning</span>
              </li>

              <li className="flex gap-2">
                <FaCheckDouble className="text-orange-300" />
                <span>Varifyed Certificate</span>
              </li>

              <li className="flex gap-2">
                <FaCheckDouble className="text-orange-300" />
                <span>Lifetime Access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
