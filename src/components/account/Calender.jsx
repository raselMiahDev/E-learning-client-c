import React from "react";

const Calender = () => {
  return (
    <div className="mt-10 p-5 bg-white">
      <table className="table  border border-slate-300">
        <thead>
          <tr>
            <th className="border border-slate-300"> Sun</th>
            <th className="border border-slate-300">Mon</th>
            <th className="border border-slate-300">Tue</th>
            <th className="border border-slate-300">Wed</th>
            <th className="border border-slate-300">Thu</th>
            <th className="border border-slate-300">Fri</th>
            <th className="border border-slate-300">Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300">
              <div className="text-center">
                <h1 className="py-1 text-xl">1</h1>
                <span className="bg-green-200 text-white p-1 rounded w-full block">
                  content
                </span>
              </div>
            </td>
            <td className="border border-slate-300">
              <div className="text-center">
                <h1 className="py-1 text-xl">1</h1>
                <span className="bg-green-200 text-white p-1 rounded w-full block">
                  content
                </span>
              </div>
            </td>
            <td className="border border-slate-300">
              <div className="text-center">
                <h1 className="py-1 text-xl">1</h1>
                <span className="bg-green-200 text-white p-1 rounded w-full block">
                  content
                </span>
              </div>
            </td>
            <td className="border border-slate-300">
              <div className="text-center">
                <h1 className="py-1 text-xl">1</h1>
                <span className="bg-green-200 text-white p-1 rounded w-full block">
                  content
                </span>
              </div>
            </td>
            <td className="border border-slate-300">
              <div className="text-center">
                <h1 className="py-1 text-xl">1</h1>
                <span className="bg-green-200 text-white p-1 rounded w-full block">
                  content
                </span>
              </div>
            </td>
            <td className="border border-slate-300">
              <div className="text-center">
                <h1 className="py-1 text-xl">1</h1>
                <span className="bg-green-200 text-white p-1 rounded w-full block">
                  content
                </span>
              </div>
            </td>
            <td className="border border-slate-300">
              <div className="text-center">
                <h1 className="py-1 text-xl">1</h1>
                <span className="bg-green-200 text-white p-1 rounded w-full block">
                  content
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calender;
