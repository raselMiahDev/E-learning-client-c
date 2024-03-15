import { useEffect, useState } from "react";
import { GET_ALL_NOTIFICATION_REQUEST } from "../../apiRequest/API";
import NotificationModel from "./NotificationModel";

const Notification = () => {
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    (async () => {
      let result = await GET_ALL_NOTIFICATION_REQUEST();
      setNotification(result);
    })();
  }, []);
  return (
    <div className="sm:px-8">
      <div className="py-3">
        <div className="my-2 flex sm:flex-row flex-col">
          <div className="block relative">
            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current text-gray-500"
              >
                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
              </svg>
            </span>
            <input
              placeholder="Search"
              className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        <div className="sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-2 border-gray-200 bg-green-200 text-white text-left text-xs font-semibold uppercase tracking-wider">
                    SI/NO
                  </th>
                  <th className="px-5 py-2 border-gray-200 bg-green-200 text-white text-left text-xs font-semibold uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-5 py-2 border-gray-200 bg-green-200 text-white text-left text-xs font-semibold uppercase tracking-wider">
                    Publish
                  </th>
                  <th className="px-5 py-3 border-gray-200 bg-green-200 text-white text-left text-xs font-semibold uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {notification.map((item, i) => (
                  <tr key={item["_id"]}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {1 + i}
                        </p>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item["title"]}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item["createdAt"]}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <NotificationModel
                        title={item["title"]}
                        message={item["message"]}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
              <div className="inline-flex mt-2 xs:mt-0">
                <button className="text-sm bg-gray-100 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-l">
                  Prev
                </button>
                <button className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-r">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
