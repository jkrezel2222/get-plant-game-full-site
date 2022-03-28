import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import NavigationBar from "./components/navigationbar/NavigationBar";

import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
import Dashboard from "./components/pages/dashboard/Dashboard";
import NewTip from "./components/pages/newTip/NewTip";
import Single from "./components/pages/single/Single";
import About from "./components/pages/about/About";
import Home from "./components/pages/home/Home";


function App() {
  return (
  <Router>
    <NavigationBar />
      <Switch>
        <Route>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/newTip"><NewTip /></Route>
            <Route exact path="/dashboard"><Dashboard /></Route>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
