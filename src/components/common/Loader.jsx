import Loader from "../../assets/loo.svg";
const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        <img src={Loader} className="rounded-full h-28 w-28" />
      </div>
    </div>
  );
};

export default Loading;
