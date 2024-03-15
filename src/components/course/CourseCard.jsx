import { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { GrChapterAdd } from "react-icons/gr";
import { IoMdArrowRoundForward } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ALL_COURSE_API_REQUEST } from "../../apiRequest/API";
import CourseSkeleton from "../common/CourseSkeleton";
import SectionTitle from "../common/SectionTitle";

const CourseCard = () => {
  const [courses, SetAllCourses] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await ALL_COURSE_API_REQUEST();
      SetAllCourses(data);
    })();
  }, []);

  const star = 5;
  const stars = Array.from({ length: 7 }, (_, index) => {
    const halfNumber = index + 0.5;

    return (
      <span key={index} className="text-[#ffb900] text-[.25rem] mr-1">
        {star >= index + 1 ? (
          <BsStarFill size="14px" />
        ) : star >= halfNumber ? (
          <BsStarHalf size="14px" />
        ) : (
          <BsStar size="14px" />
        )}
      </span>
    );
  });
  if (courses?.length > 0) {
    return (
      <div className="section md:px-20 px-12 py-9">
        <div className="py-5">
          <SectionTitle
            title="Features Course"
            des="Pick a course for success"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-7 ">
          {courses.map((course) => (
            <Link key={course["_id"]} to={`/course-details/${course["_id"]}`}>
              <section className="border rounded hover:shadow-xl transition duration-600 cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={course?.thumbnail.map((url) => url.url)}
                    alt=""
                    className="h-100 w-full hover:scale-110 transition duration-500"
                  />
                  <span className="absolute top-2 right-3 bg-[#F8B720] p-1 px-2 text-white rounded-sm flex items-center justify-center font-semibold gap-1">
                    <CiClock2 size="15px" /> 3 Weeks
                  </span>
                </div>

                <div className=" h-[250px] px-4 py-3">
                  <p className="bg-green-50 inline p-2 rounded-md text-green-600 font-semibold">
                    {course["courseLevel"]}
                  </p>
                  <h1 className="text-xl text-slate-700 font-bold my-3 hover:text-green-300  transition duration-200">
                    {course["title"]}
                  </h1>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex">{stars}</div>{" "}
                    <span className="font-semibold tracking-wide">
                      (5.0/7 Ratings)
                    </span>
                  </div>
                  <p className="text-red-400 font-bold">${course["price"]}</p>
                  <div className="flex items-center gap-8 my-4 text-slate-500">
                    <span className="flex items-center justify-center gap-2">
                      <GrChapterAdd /> 8 Lessons
                    </span>
                    <span className="flex items-center justify-center gap-2">
                      <PiStudent /> 20 Students
                    </span>
                  </div>
                </div>
              </section>
            </Link>
          ))}
        </div>
        <div className="py-10 text-center">
          <Link to="/all-courses">
            <button className="btn bg-[#1ab79d] md:text-lg text-white border-none px-8">
              Browse more courses <IoMdArrowRoundForward />
            </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-[#f5f1eb] py-9">
        <div className="text-center py-16">
          <p className="font-bold">POPULAR COURSES</p>
          <h1 className="text-7xl text-black font-bold">
            Pick A Course To Get Started
          </h1>
        </div>
        <CourseSkeleton />;
      </div>
    );
  }
};

export default CourseCard;
