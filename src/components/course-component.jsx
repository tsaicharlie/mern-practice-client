import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import CourseService from "../service/course";
import CardComponent from "./card-component";

const courseComponent = ({ currentUser, setCurrentUser }) => {
  let [course, setCourse] = useState(null);

  useEffect(() => {
    let _id;

    if (currentUser) {
      _id = currentUser.user._id;

      if (currentUser.user.role == "teacher") {
        CourseService.getTeacherCourse(_id).then((data) => {
          console.log(data.data);
          setCourse(data.data);
        });
      } else if (currentUser.user.role == "student") {
        CourseService.getStudentCourse(_id).then((data) => {
          console.log(data.data);
          setCourse(data.data);
        });
      }
    } else {
      console.log("尚未登入");
    }
  }, [currentUser]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {course &&
        course.length > 0 &&
        course.map((card) => {
          return <CardComponent currentUser={currentUser} course={card} />;
        })}
    </div>
  );
};

export default courseComponent;
