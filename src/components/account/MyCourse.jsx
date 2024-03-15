import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_ENROLL_COURSE_API_REQUEST } from "../../apiRequest/API";

const MyCourse = () => {
  const [enrollCourses, setEnrollCourses] = useState([]);
  useEffect(() => {
    (async () => {
      let result = await GET_ENROLL_COURSE_API_REQUEST();
      setEnrollCourses(result);
    })();
  }, []);

  return (
    <div>
      {enrollCourses.length === 0 ? (
        <div className="">
          <h1 className="text-success">
            You Have Not Enrolled Course !! Please Enroll a Course
          </h1>
          <div className="pt-10 flex justify-center">
            <Link to="/all-courses" className="btn btn-success text-white">
              Chose a course
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3">
            {enrollCourses.map((enrollCourse) => (
              <div
                key={enrollCourse._id}
                className="card w-[100%] lg:w-96 bg-white mt-10 border-2 rounded-lg "
              >
                <div className="card-body">
                  <img
                    src={enrollCourse?.course.thumbnail.map((url) => url.url)}
                  />
                  <h2 className="card-title text-slate-500">
                    {enrollCourse?.course.title}
                  </h2>
                  <div className="card-actions">
                    <Link to={`/my-course/${enrollCourse.course["_id"]}`}>
                      <button className="btn btn-success text-white text-[14px] ">
                        Continue
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyCourse;
