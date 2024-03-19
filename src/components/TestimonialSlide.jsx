import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./common/SectionTitle";
import { ALL_COURSE_API_REQUEST } from "../apiRequest/API";
import { useEffect, useState } from "react";

const TestimonialSlide = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await ALL_COURSE_API_REQUEST();
      setData(data);
    })();
  }, []);
  const breakpoints = {
    // when window width is >= 390px
    390: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  console.log(data)
  return (
    <div className="p-5 md:p-20">
      <div className="pb-3 md:pb-10">
        <h2
          className="text-6xl font-bold text-black tracking-wide"
          style={{ fontFamily: "Rowdies" }}
        >
          <SectionTitle title="Related Course" des="Explore more helpfull module"/>
        </h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={breakpoints}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        speed={800}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay]}
      >
        {data.map((item) => (
          <SwiperSlide key={item['_id']}>
            <div className="block rounded-lg hover:border-green-700 cursor-pointer h-auto bg-slate-50">
              <div className="">
                <div className="p-5 rounded-2xl">
                  <img
                    src={item?.thumbnail.map((url) => url.url)}
                    className="w-full rounded-xl h-64"
                    alt={item}
                  />
                </div>

                <div className="p-5">
                  <h1 className="text-4xl text-slate-800">
                    {item.title.substring(0,22)}
                  </h1>
                  <p className="text-sm text-slate-600">{item?.['description'].slice(0,80)}...</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlide;
