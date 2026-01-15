import axios from "axios";

const API_URL = "http://localhost:8080/api/course";

function checkToken() {
  let token;
  if (localStorage.getItem("user")) {
    token = JSON.parse(localStorage.getItem("user")).token;
  } else {
    token = "";
  }
  return token;
}

class CourseService {
  getTeacherCourse(_id) {
    return axios.get(API_URL + "/teacher/" + _id, {
      headers: {
        Authorization: checkToken(),
      },
    });
  }
  getStudentCourse(_id) {
    return axios.get(API_URL + "/student/" + _id, {
      headers: {
        Authorization: checkToken(),
      },
    });
  }

  postCourse(title, description, price) {
    return axios.post(
      API_URL,
      { title, description, price },
      {
        headers: {
          Authorization: checkToken(),
        },
      }
    );
  }

  findByName(name) {
    return axios.get(API_URL + "/findByName/" + name, {
      headers: {
        Authorization: checkToken(),
      },
    });
  }

  enroll(_id) {
    return axios.post(
      API_URL + "/enroll/" + _id,
      {},
      { headers: { Authorization: checkToken() } }
    );
  }

  editCourse(title, description, price, _id) {
    console.log(title, description, price, _id);

    return axios.patch(
      API_URL + "/" + _id,
      { title, description, price },
      { headers: { Authorization: checkToken() } }
    );
  }
}

export default new CourseService();
