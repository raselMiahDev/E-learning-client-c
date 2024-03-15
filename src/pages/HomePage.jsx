import AboutUs from "../components/AboutUs.jsx";
import LatestBlog from "../components/blog/LatestBlog.jsx";
import Categories from "../components/Categories.jsx";
import CourseCard from "../components/course/CourseCard.jsx";
import Landing from "../components/Landing.jsx";
import Reputation from "../components/Reputation.jsx";
import MainLayout from "../layout/MainLayout.jsx";

const HomePage = () => {
  return (
    <MainLayout>
      <Landing />
      <CourseCard />
      <Categories />
      <AboutUs />
      <Reputation />
      <LatestBlog />
    </MainLayout>
  );
};

export default HomePage;
