import { useState } from "react";
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import { Link } from "react-router-dom";
import { LOGIN_API } from "../../apiRequest/API";
import { ErrorToast } from "../../utility/FormHelper";
import Loading from "../common/Loader";
import login from "./../../assets/login.svg";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // input validation
    if (inputs.email.length === 0) {
      return ErrorToast("Email is Required");
    } else if (inputs.password.length === 0) {
      return ErrorToast("Password is Required");
    } else {
      const { email, password } = inputs;
      setIsLoading(true);
      const res = await LOGIN_API(email, password);
      setIsLoading(false);

      if (res) {
        window.location.href = "/profile";
      }
    }
  };
  return (
    <div className="md:w-screen md:h-[100vh] py-10 px-10 bg-[#F5F2EB] flex items-center justify-center ">
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className="bg-slate-200 text-black mt-10 md:mt-20 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
              <img src={login} className="h-auto w-full" />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <div className="divider  divider-info text-3xl text-gray-900">
                  LOGIN
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <MdEmail />
                      </div>
                      <input
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        value={inputs.email}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-white outline-none focus:border-indigo-500"
                        placeholder="Enter Your Email Address"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <MdOutlinePassword />
                      </div>
                      <input
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        value={inputs.password}
                        className="w-full bg-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Enter Your Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button className="block w-full mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                      LOGIN
                    </button>
                  </div>
                </div>
              </form>
              <div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link
                    to="/forget-password"
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    to="/registration"
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
