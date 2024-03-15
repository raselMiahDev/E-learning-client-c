import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { GrChapterAdd } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Dropdown, SearchBar } from "keep-react";
import { ArrowRight, MagnifyingGlass } from "phosphor-react";
import { useState, useEffect } from "react";
import { ALL_COURSE_API_REQUEST } from "../../apiRequest/API";

const CourseList = ({ course }) => {
  const [allCourse, setAllCourse] = useState([]);

  useEffect(() => {
    (async () => {
      const courses = await ALL_COURSE_API_REQUEST();
      setAllCourse(courses);
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
  const [data, setData] = useState([]);
  const handleOnChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const results = allCourse.filter((course) =>
      course.title.toLowerCase().includes(searchTerm)
    );

    if (searchTerm === "") {
      setData([]);
    } else {
      setData(results);
    }
  };
  return (
    <div className="bg-[#f5f1eb] md:mt-10 md:px-20 py-9">
      {/* search bar  */}
      <div className="md:py-3 md:mt-0 mt-5 p-5 md:p-0">
        <SearchBar
          placeholder="Search Course"
          addon={<MagnifyingGlass size={20} color="#5E718D" />}
          size="md"
          addonPosition="left"
          handleOnChange={handleOnChange}
        >
          <ul>
            {data.map((course) => (
              <Link key={course?._id} to={`/course-details/${course["_id"]}`}>
                <Dropdown.Item className="hover:bg-[#fef08a] hover:rounded mt-1">
                  <div className="flex gap-5">
                    <img
                      src={course.thumbnail.map((url) => url.url)}
                      alt=""
                      width={50}
                    />
                    {course?.title}
                  </div>
                  <span className="ml-auto">
                    <ArrowRight size={20} color="#5E718D" />
                  </span>
                </Dropdown.Item>
              </Link>
            ))}
          </ul>
        </SearchBar>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 lg:gap-32 xl:grid-cols-5 gap-4 justify-center">
        {course.map((item) => (
          <Link key={item["_id"]} to={`/course-details/${item["_id"]}`}>
            <div className="w-[400px] md:w-[250px] lg:w-[280px] hover:shadow-xl transition duration-600 cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={item.thumbnail.map((url) => url.url)}
                  alt=""
                  className="w-full hover:scale-110 transition duration-500 cursor-pointer"
                />
                <span className="absolute top-2 right-3 bg-[#F8B720] p-1 px-2 text-white rounded-sm flex items-center justify-center font-semibold gap-1">
                  <CiClock2 size="15px" /> {item["courseDuration"]} Month
                </span>
              </div>

              <div className="bg-white  h-[220px]  px-4 py-3">
                <p className="bg-green-50 inline p-1 rounded-md text-green-600 font-semibold">
                  {item["courseLevel"]}
                </p>
                <h1 className="text-lg text-slate-700 font-bold my-2 hover:text-green-300  transition duration-200">
                  {item["title"]}
                </h1>

                <div className="flex items-center gap-3 mb-2">
                  <div className="flex">{stars}</div>{" "}
                  <span className="font-semibold tracking-wide">
                    (5.0/7 Ratings)
                  </span>
                </div>
                <p className="text-red-400 font-bold">${item["price"]}</p>
                <div className="flex gap-8 my-4">
                  <span className="flex items-center justify-center gap-2">
                    <GrChapterAdd /> 8 Lessons
                  </span>
                  <span className="flex items-center justify-center gap-2">
                    <PiStudent /> 20 Students
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
