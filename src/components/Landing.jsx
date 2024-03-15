import { Link } from "react-router-dom";
import HeroBanner1 from "../assets/hero-banner-1.jpg";
import HeroBanner2 from "../assets/hero-banner-2.jpg";
import HeroBG from "../assets/hero-bg.svg";
import HeroShape from "../assets/hero-shape-1.svg";
import HeroShape2 from "../assets/hero-shape-2.png";

const Landing = () => {
  return (
    <section
      className="w-[100%] md:h-screen h-[400px] md:px-20 bg-no-repeat bg-cover object-cover grid grid-cols-1 md:grid-cols-2"
      style={{ backgroundImage: `url(${HeroBG})` }}
    >
      <div className="lg:pt-52 pt-20 md:text-left md:px-0 px-5">
        <h1 className="text-5xl md:text-10xl tracking-wide text-black md:block">
          The Best Program <br /> to{" "}
          <span className="text-green-400">Enroll</span> for <br /> Exchange
        </h1>
        <p className="md:text-[18px] text-[14px] font-light text-black ">
          Excepteur sint occaecat cupidatat non proident sunt in <br /> culpa
          qui officia deserunt mollit.
        </p>

        <div className="mt-5">
          <Link to="/all-courses">
            <button class="bg-transparent transition hover:duration-400 hover:bg-green-500 font-semibold hover:text-white py-3 px-5 border border-green-500 hover:border-transparent rounded">
              View Courses
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="md:w-[85%] md:h-[60%] pt-32 mr-20  md:block hidden">
          <img className="object-cover" src={HeroShape2} alt="Features Img" />
        </div>

        <div className="w-80 h-80 my-44 mr-44 border-radius md:block hidden">
          <img
            className=" md:absolute object-cover md:top-52 md:left-50 rounded-tr-[65px] rounded-bl-[80px]"
            src={HeroBanner1}
            alt="Features Img"
          />
        </div>

        <div className="md:block hidden">
          <img
            className="md:absolute object-cover md:top-[35%] md:left-[72%] rounded-tl-[65px] rounded-br-[80px]"
            src={HeroBanner2}
            alt="Features Img"
          />
        </div>

        <div className="md:block hidden">
          <img
            className="absolute object-cover top-[65%] left-[55%] rounded-tl-[65px] rounded-br-[80px]"
            src={HeroShape}
            alt="Features Img"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
