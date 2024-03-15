import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { COURSE_BY_CATEGORY_API_REQUEST } from "../apiRequest/API";
import CourseSkeleton from "../components/common/CourseSkeleton";
import CourseList from "../components/course/CourseList";
import MainLayout from "./../layout/MainLayout";

const CategoryCoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await COURSE_BY_CATEGORY_API_REQUEST(id);
      setCourse(data);
    })();
  }, []);
  console.log(course);
  if (course.length === 0) {
    return (
      <MainLayout>
        <CourseSkeleton />
      </MainLayout>
    );
  } else {
    return (
      <MainLayout>
        <CourseList course={course} />
      </MainLayout>
    );
  }
};

export default CategoryCoursePage;
