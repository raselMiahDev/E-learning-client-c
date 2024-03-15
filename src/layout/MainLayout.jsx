import Footer from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="overflow-hidden md:overflow-hidden lg:overflow-hidden sm:w-[390px] lg:w-full md:w-[1024px]">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
