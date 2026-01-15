import { useState } from "react";
import CourseService from "../service/course";

const cardComponent = (props) => {
  let { currentUser, course } = props;
  let [title, setTitle] = useState(course.title);
  let [description, setDescription] = useState(course.description);
  let [price, setPrice] = useState(course.price);
  let [isEditing, setIsEditing] = useState(false);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleEdit = (e) => {
    setIsEditing(true);
  };
  const handleSuccess = (e) => {
    setIsEditing(false);

    CourseService.editCourse(title, description, price, e.target.id)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div
        key={course._id}
        className="card"
        style={{ width: "18rem", margin: "1rem" }}
      >
        <div className="card-body">
          {isEditing ? (
            <input
              className="mb-3"
              name="title"
              value={title}
              onChange={handleTitle}
            />
          ) : (
            <h5 className="card-title">課程名稱:{title}</h5>
          )}

          {isEditing ? (
            <input
              name="description"
              type="text"
              className="mb-3"
              onChange={handleDescription}
              value={description}
            />
          ) : (
            <p style={{ margin: "0.5rem 0rem" }} className="card-text ">
              {description}
            </p>
          )}

          <p style={{ margin: "0.5rem 0rem" }}>
            學生人數: {course.students.length}
          </p>

          {isEditing ? (
            <input
              name="price"
              type="text"
              className="mb-3"
              onChange={handlePrice}
              value={price}
            />
          ) : (
            <p className="editHide" style={{ margin: "0.5rem 0rem" }}>
              課程價格: {price}
            </p>
          )}

          {currentUser.user.role == "teacher" && !isEditing && (
            <p className="mt-3">
              <button
                id={course._id}
                className="btn btn-primary editHide"
                onClick={handleEdit}
              >
                編輯
              </button>
            </p>
          )}

          {currentUser.user.role == "teacher" && isEditing && (
            <p className="mt-3">
              <button
                id={course._id}
                className="btn btn-success "
                onClick={handleSuccess}
              >
                完成
              </button>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default cardComponent;
