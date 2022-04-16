import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import NavigationBar from "./components/navigationbar/NavigationBar";

import Register_old from "./components/pages/register/Register_old";
import Login from "./components/pages/login/Login";
import Dashboard from "./components/pages/dashboard/Dashboard";
import NewTip from "./components/pages/newTip/NewTip";
import Single from "./components/pages/single/Single";
import About from "./components/pages/about/About";
import Home from "./components/pages/home/Home";


function App() {

  
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
            <Route exact path="/register"><Register_old /></Route>
            <Route exact path="/single"><Single /></Route>
        </Route>
      </Switch>
    </Router>

    </div>
    );
}

export default App;
