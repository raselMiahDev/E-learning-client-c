import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FcOk } from "react-icons/fc";
import Loading from "../common/Loader";
import SubmitButton from "../common/SubmitButton";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getToken } from "../../utility/SessionHelper";
import { ENROLL_COURSE_API_REQUEST } from "../../apiRequest/API";

const SingleCourseHeader = ({ data }) => {
  const [btnLoader, setBtnLoader] = useState(false);
  const navigate = useNavigate();
  const star = 5;
  const { id } = useParams();
  const stars = Array.from({ length: 7 }, (_, index) => {
    const halfNumber = index + 0.5;

    return (
      <span key={index} className="text-[#ffb900] text-[.25rem] mr-1">
        {star >= index + 1 ? (
          <BsStarFill size="13px" />
        ) : star >= halfNumber ? (
          <BsStarHalf size="14px" />
        ) : (
          <BsStar size="13px" />
        )}
      </span>
    );
  });
  const handleEnrollCourse = async () => {
    if (getToken()) {
      setBtnLoader(true);
      await ENROLL_COURSE_API_REQUEST(id);
      setBtnLoader(false);
      navigate("/enroll-success");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="h-auto py-10 md:py-10 bg-slate-50 md:px-20 grid md:grid-cols-2">
      <div className="px-10">
        <div className="text-sm breadcrumbs py-5">
          <ul className="text-slate-800">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
            <li>Add Document</li>
          </ul>
        </div>

        <div>
          <span className="bg-blue-500 px-2 rounded text-white text-sm">
            -30%
          </span>
          <span className=" px-10 text-blue-500 text-sm">
            {data.map((item) => item.category.categoryName)}
          </span>
        </div>

        <h1 className="py-4 text-5xl md:text-8xl text-slate-800">
          {data.map((title) => title.title)}
        </h1>

        <div className="flex items-center gap-4">
          <img
            src={data.map((ins) => ins.instructor.image.map((url) => url.url))}
            alt=""
            className="w-10 h-10 ring-2 rounded-full"
          />
          <h3 className="text-slate-600 text-sm fornt-bold font-semibold">
            {data.map((item) => item.instructor.name)}
          </h3>
        </div>

        <h3 className="text-slate-600 text-sm fornt-bold font-light py-3">
          Last Update
        </h3>

        <div className="flex items-center gap-3 mb-3">
          <div className="flex">{stars}</div>{" "}
          <span className="font-semibold tracking-wide">(5.0/7 Ratings)</span>
        </div>
      </div>
      <div>
        {data.length === 0 ? (
          <Loading />
        ) : (
          <div className="px-10">
            {data.map((item) => (
              <div
                key={item._id}
                className="md:mx-auto max-w-screen-xl gap-16 md:flex grid grid-cols-1"
              >
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
                          <li className="text-md flex items-center gap-2 border-b py-2">
                            <FcOk />
                            Duration : {item?.courseDuration} Months
                          </li>
                          <li className="text-md flex items-center gap-2 border-b py-2">
                            <FcOk />
                            Lavel : {item?.courseLevel}
                          </li>
                          <li className="text-md flex items-center gap-2 border-b py-2">
                            <FcOk />
                            Price : {item?.price} BDT
                          </li>
                          <li className="text-md flex items-center gap-2 border-b py-2">
                            <FcOk />
                            Enrolled : 30
                          </li>
                          <li className="text-md flex items-center gap-2 border-b py-2">
                            <FcOk />
                            Lifetime Access
                          </li>
                          <li className="text-md flex items-center gap-2 border-b py-2">
                            <FcOk />
                            Lavel : {item?.courseLevel}
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
      </div>
    </div>
  );
};

export default SingleCourseHeader;
