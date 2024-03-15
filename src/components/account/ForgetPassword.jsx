const ForgetPassword = () => {
  return (
    <section id="content" role="main" className="w-full max-w-md mx-auto mt-6 p-6">
      <div className="mt-7 rounded-xl shadow-lg dark:bg-slate-200 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h2 className="font-bold text-3xl text-gray-900">FORGET PASSWORD</h2>
          </div>
          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Your Valid Email Address"
                      className="w-full max-w-xs mx-auto px-2 py-2 block bg-white text-black border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                  Reset password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ForgetPassword;
