import React from "react";

const CourseTitle = ({ title, image }) => {
  return (
    <div className="">
      <div className="flex gap-5 bg-white md:p-3 p-2">
        <img width={100} src={image} alt="" />
        <div>
          <div className="badge badge-accent text-white">Batch - 3</div>
          <h1 className="md:text-2xl text-xl text-gray-800">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default CourseTitle;
