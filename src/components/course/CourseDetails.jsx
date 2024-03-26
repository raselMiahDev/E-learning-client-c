import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import {
  COURSE_DETAILS_API_REQUEST,
} from "../../apiRequest/API";
import Loading from "../common/Loader";
import AccordionComponent from "./Accordion";
import TestimonialSlide from "../TestimonialSlide";
import SingleCourseHeader from "./SingleCourseHeader";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseInfo, setCourseInfo] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await COURSE_DETAILS_API_REQUEST(id);
      setCourseInfo(data);
    })();
  }, [id]);


  return (
    <div className="mt-16">
      <SingleCourseHeader
        data={courseInfo.map((info)=>info)}
      />
      <div>
        {courseInfo.length === 0 ? (
          <Loading />
        ) : (
          <div className="px-10">
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
                      <ul className=" text-black p-5 list-disc text-[15px]">
                        <li>{item?.courseAchievement}</li>
                      </ul>
                    </div>

                    <div className="">
                      <h1 className="text-3xl text-gray-900">Course details</h1>

                      <div className="border border-gray-100 rounded mt-3 ">
                        <AccordionComponent />
                        <AccordionComponent />
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
