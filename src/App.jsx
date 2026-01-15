import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomeComponent from "./components/home-component";
import RegisterComponent from "./components/register-component";
import LoginComponent from "./components/login-component";
import ProfileComponent from "./components/profile-component";
import CourseComponent from "./components/course-component";
import PostCourseComponent from "./components/postCourse-component";
import EnrollComponent from "./components/enroll-component";

function App() {
  let [currentUser, setCurrentUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        >
          <Route index element={<HomeComponent />} />
          <Route path="register" element={<RegisterComponent />} />
          <Route
            path="login"
            element={
              <LoginComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="profile"
            element={
              <ProfileComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="course"
            element={
              <CourseComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="postCourse"
            element={
              <PostCourseComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="enroll"
            element={
              <EnrollComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
