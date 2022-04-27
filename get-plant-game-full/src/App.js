import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"; 
import NavigationBar from "./components/navigationbar/NavigationBar";

import { Register } from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
import Dashboard from "./components/pages/dashboard/Dashboard";
import NewTip from "./components/pages/newTip/NewTip";
import EditTip from "./components/pages/editTip/EditTip";
import About from "./components/pages/about/About";
import Home from "./components/pages/home/Home";


const App = () => {
    return (
    
    <div>
    <Router>
    <NavigationBar />
      <Switch>
        <Route>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/newTip"><NewTip /></Route>
            <Route exact path="/dashboard"><Dashboard /></Route>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route exact path="/edittip"><EditTip /></Route>
            <Route exact path="/edittip/:plantId"><EditTip /></Route>
            <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
