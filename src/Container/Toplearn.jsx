import React from "react";
import {Switch, Route} from "react-router-dom";
import Courses from "../Components/Courses/Courses";
import MainLayout from "../Components/Layouts/MainLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Archive from "../Components/Courses/Archive";
import SingleCourse from "../Components/Courses/SingleCourse";
import UserProfile from "../Components/Profile/UserProfile";

const Toplearn = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/archive" component={Archive} />
        <Route path="/course" component={SingleCourse} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/" exact component={Courses} />
      </Switch>
    </MainLayout>
  );
};

export default Toplearn;
