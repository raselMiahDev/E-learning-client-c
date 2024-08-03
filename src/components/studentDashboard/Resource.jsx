import React from "react";
import { Link } from "react-router-dom";
import { MonitorPlay, Files } from "phosphor-react";

const Resource = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Link
              to="/videos"
              className="grid w-full transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
            >
              <span className="my-6 grid h-24 w-32 place-items-center">
                <MonitorPlay size={52} />
                <p>Racorded video</p>
              </span>
            </Link>
            <Link className="grid w-full  transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25">
              <span className="my-6 grid h-24 w-32 place-items-center">
                <Files size={52} />
                <p>Resource File</p>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
