import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import {
  GET_USER_PROFILE_DETAILS_API_REQUEST,
  USER_PROFILE_UPDATE_API_REQUEST,
} from "../../apiRequest/API";

const ProfileEdit = () => {
  const [data, setData] = useState([]); //get user profile data
  const [image, setImage] = useState(null); // Use null initially for image state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    (async () => {
      let result = await GET_USER_PROFILE_DETAILS_API_REQUEST();
      setData(result[0]);
    })();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("address", address);
    if (image) {
      formData.append("image", image);
    }
    await USER_PROFILE_UPDATE_API_REQUEST(formData);
  };

  return (
    <section className="w-full grid md:grid-cols-2 grid-cols-1 gap-6">
      <div className="bg-white p-7 rounded-lg shadow-2xl w-full">
        <form
          onSubmit={onSubmit}
          method="post"
          encType="multipart/form-data"
          action="/user-profile-update"
        >
          <div className="bg-slate-50 py-5">
            <img
              className="w-32 h-32 rounded-full mx-auto "
              src={
                data.image && data.image.length > 0
                  ? data.image[0].url
                  : "fallback-image-url"
              }
              alt="User Profile"
            />
          </div>
          <div className="pt-5 text-center">
            <input
              className="border-dotted border-green-500 border-2 p-1"
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                setImage(file); // Update 'image' state with the selected file
              }}
            />
          </div>

          <div className="mt-11 h-full w-full">
            <div>
              <label className="text-[13px] font-semibold text-gray-800 tracking-wide">
                Full Name
              </label>
              <input
                onChange={(e) => setFullName(e.target.value)}
                defaultValue={data.fullName}
                type="text"
                className="input input-bordered w-full max-w-2xl text-gray-400 text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
              />
            </div>

            <div>
              <label className="text-[13px] font-semibold text-gray-800 tracking-wide">
                Email
              </label>
              <input
                readOnly
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={data.email}
                type="text"
                className="input input-bordered w-full max-w-2xl   text-gray-400 text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
              />
            </div>
            <div>
              <label className="text-[13px] font-semibold text-gray-800 tracking-wide">
                Phone Number
              </label>
              <input
                defaultValue={data.phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                className="input input-bordered w-full max-w-2xl   text-gray-400 text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
              />
            </div>
            <div>
              <label className="text-[13px] font-semibold text-gray-800 tracking-wide">
                Address
              </label>
              <input
                defaultValue={data.address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="input input-bordered w-full max-w-2xl   text-gray-400 text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
              />
            </div>

            <div className="flex justify-end pt-10 ">
              <button
                type="submit"
                className="btn bg-green-400 hover:bg-green-600 text-white border-none"
              >
                Update <IoMdCheckmark />{" "}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="bg-white p-7 rounded-lg shadow-lg w-full md:h-[55%]">
        <div>
          <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">
            Change Password
          </h1>
        </div>

        <div>
          <label className="text-[13px] font-semibold text-gray-800 tracking-wide">
            New Password
          </label>
          <input
            type="text"
            placeholder="New Password"
            className="input input-bordered w-full max-w-2xl   text-gray-400  text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
          />
        </div>
        <div>
          <label className="text-[13px] font-semibold text-gray-800 tracking-wide">
            Confirm Password
          </label>
          <input
            type="text"
            placeholder="Confirm Password"
            className="input input-bordered w-full max-w-2xl   text-gray-400  text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
          />
        </div>
        <div className="py-7">
          <button className="btn block w-full bg-green-400 hover:bg-green-600 text-white border-none">
            Change Password
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileEdit;
