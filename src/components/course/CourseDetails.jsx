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
    if(getToken()){
      setBtnLoader(true);
      await ENROLL_COURSE_API_REQUEST(id);
      setBtnLoader(false);
      navigate("/profile");
    }else{
      navigate("/login")
    }

  };

  return (
    <>
      {courseInfo.length === 0 ? (
        <Loading />
      ) : (
        <div className="mt-10 md:mt-10">
          {courseInfo.map((item) => (
            <div
              key={item._id}
              className="md:mx-auto max-w-screen-xl gap-16 px-12 md:flex grid grid-cols-1 py-10"
            >
              <section className="ml-[-10%] mr-[-10%] md:ml-0 md:mr-0 md:w-full">
                <div>
                  <h1 className="text-gray-800 mb-2 text-[21px] font-semibold md:block md:text-4xl">
                    {item.title}
                  </h1>
                  <p className="text-black text-[16px] py-5">
                    {item.description}
                  </p>
                </div>

                <div>
                  <h1 className="text-3xl text-gray-900 mb-2">
                    Course instructor
                  </h1>

                  <div className="items-center rounded border border-gray-50  p-4 flex gap-4">
                    <img
                      className="w-[73px] h-[73px] rounded-full"
                      src={item.instructor.image[0].url}
                      alt=""
                    />

                    <div>
                      <h1 className="text-black text-3xl">
                        {item.instructor.name}
                      </h1>
                      <p className="text-slate-600">
                        {item.instructor.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h1 className="text-3xl text-gray-900 mb-3">
                    What you will learn by doing the course
                  </h1>
                  <div className="border border-gray-50 rounded mb-10">
                    <ul className="grid grid-cols-2 text-black px-7 py-6 gap-7 list-disc text-[15px]">
                      <li>
                        নিনিয়ম মুখস্থ না করে প্র্যাকটিকাল উদাহরণের মাধ্যমে
                        ইংরেজি গ্রামার শেখার সহজ উপায়।
                      </li>
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

              <section className="md:order-last order-first ">
                <div className="rounded border border-gray-50 md:m-0 m-[-35px] mt-10 ">
                  <div className="">
                    <img
                      src={item?.thumbnail.map((url) => url.url)}
                      alt=""
                      className="w-[650px]"
                    />

                    <h1 className="text-3xl text-gray-900 font-bold mt-5 mb-5 mx-4">
                      ${item.price}
                    </h1>

                    <div className="mx-5 mb-5">
                      <SubmitButton
                        onClick={handleEnrollCourse}
                        submit={btnLoader}
                        text="Enroll Now"
                        className="btn bg-green-300 border-none text-white text-bold text-lg w-full"
                      />
                    </div>

                    <div className="mx-10 mb-8 mt-7 text-[15px] text-gray-800">
                      <ul className="list-disc">
                        {/* <li className="my-2">কোর্সটি করছেন ১৭৫৮৯ জন</li>
                        <li className="my-2">সময়সীমা ৬ মাস</li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CourseDetails;
