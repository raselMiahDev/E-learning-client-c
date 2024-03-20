import image from "../../assets/Girl.png";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FcOk } from "react-icons/fc";
const SingleCourseHeader = ({title}) => {
  const star = 5;
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
  return (
    <div className="px-5  bg-slate-50 h-auto md:px-20 py-10 md:py-1 grid md:grid-cols-2 gap-10">
        <div>
        <div className="text-sm breadcrumbs py-10 ">
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
        <span className=" px-10 text-blue-500 text-sm">Category</span>
      </div>
      <h1 className="py-4 text-5xl md:text-8xl text-slate-800">{title}</h1>
      <div className="flex items-center gap-4">
        <img src={image} alt="" className="w-10 h-10 ring-2 rounded-full" />
        <h3 className="text-slate-600 text-sm fornt-bold font-semibold">
          Owen Christ
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
    </div>
  );
};

export default SingleCourseHeader;
