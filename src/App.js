import React from "react";
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import User from "./components/User";
import Users from "./components/Users";
import {Route} from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <Topbar/>
      <Route exact path="/"><Home/></Route>
      <Route exact path="/add-user"><AddUser/></Route>
      <Route exact path="/edit-user/:id"><EditUser/></Route>
      <Route exact path="/user/:id"><User/></Route>
      <Route exact path="/users"><Users/></Route>
    </React.Fragment>
  );
}