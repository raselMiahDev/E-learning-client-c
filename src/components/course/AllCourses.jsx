import { useEffect, useState } from "react";
import { ALL_COURSE_API_REQUEST } from "../../apiRequest/API";
import MainLayout from "../../layout/MainLayout";
import CourseList from "./CourseList";

const AllCourses = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await ALL_COURSE_API_REQUEST();
      setCourse(result);
    })();
  }, []);

  return (
    <MainLayout>
      <CourseList course={course} />
    </MainLayout>
  );
};

export default AllCourses;
