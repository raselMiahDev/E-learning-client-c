import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getToken } from "../../utility/SessionHelper";
import {
  COURSE_DETAILS_API_REQUEST,
  ENROLL_COURSE_API_REQUEST,
} from "../../apiRequest/API";
import Loading from "../common/Loader";
import AccordionComponent from "./Accordion";
import SubmitButton from "../common/SubmitButton";
import TestimonialSlide from "../TestimonialSlide";
import { FcOk } from "react-icons/fc";
import SingleCourseHeader from "./SingleCourseHeader";

const CourseDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [courseInfo, setCourseInfo] = useState([]);
  const [btnLoader, setBtnLoader] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await COURSE_DETAILS_API_REQUEST(id);
      setCourseInfo(data);
    })();
  }, [id]);

  const handleEnrollCourse = async () => {
    if (getToken()) {
      setBtnLoader(true);
      await ENROLL_COURSE_API_REQUEST(id);
      setBtnLoader(false);
      navigate("/https://e-learning-platform-one.vercel.app/profile");
    } else {
      navigate("/https://e-learning-platform-one.vercel.app/login");
    }
  };

  return (
    <div className="mt-16">
      <SingleCourseHeader title={courseInfo.map((data) => data.title)} />
      <div>
        {courseInfo.length === 0 ? (
          <Loading />
        ) : (
          <div className="">
            {courseInfo.map((item) => (
              <div
                key={item._id}
                className="md:mx-auto max-w-screen-xl gap-16 px-12 md:flex grid grid-cols-1"
              >
                <section className="ml-[-10%] mr-[-10%] md:ml-0 md:mr-0 md:w-full">
                  <div>
                    <p className="text-black text-[16px] py-5">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-10">
                    <h1 className="text-3xl text-gray-900 mb-3">
                      What you will learn by doing the course
                    </h1>
                    <div className="border border-gray-50 rounded mb-10">
                      <ul className="grid grid-cols-2 text-black px-7 py-6 gap-7 list-disc text-[15px]">
                        <li>{item?.courseAchievement}</li>
                      </ul>
                    </div>

                    <div className="">
                      <h1 className="text-3xl text-gray-900">Course details</h1>

                      <div className="border border-gray-100 rounded mt-3 ">
                        <AccordionComponent />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="md:order-last order-first md:pt-0">
                <div className="rounded border border-gray-50 md:m-0 m-[-35px] mt-10 hover:shadow-2xl cursor-pointer">
                  <div className="">
                    <img
                      src={item?.thumbnail.map((url) => url.url)}
                      alt=""
                      className="w-[650px]"
                    />

                    <div className="p-5 text-black">
                      <h1 className="text-3xl ">{item?.title}</h1>

                      <ul>
                         <li className="text-md flex items-center gap-2">
                           <FcOk />Duration : {item?.courseDuration} Months
                        </li>
                        <li className="text-md flex items-center gap-2">
                           <FcOk />Lavel : {item?.courseLevel}
                        </li>
                        <li className="text-md flex items-center gap-2">
                           <FcOk />Price : {item?.price} BDT
                        </li>
                        <li className="text-md flex items-center gap-2">
                           <FcOk />Enrolled : 30
                        </li>
                        <li className="text-md flex items-center gap-2">
                           <FcOk />Lifetime Access
                        </li>
                        <li className="text-md flex items-center gap-2">
                           <FcOk />Lavel : {item?.courseLevel}
                        </li>
                      </ul>
                    </div>

                    <div className="mx-5 mb-5">
                      <SubmitButton
                        onClick={handleEnrollCourse}
                        submit={btnLoader}
                        text="Enroll Now"
                        className="btn bg-green-400 border-none text-white text-bold text-lg w-full"
                      />
                    </div>
                  </div>
                </div>
              </section>
              </div>
            ))}
          </div>
        )}
        <TestimonialSlide />
      </div>
    </div>
  );
};

export default CourseDetails;
