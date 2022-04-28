import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"; 
import NavigationBar from "./components/navigationbar/NavigationBar";
import { connect } from "react-redux";
import Spinner from "./components/spinner/Spinner";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Slide } from 'react-toastify';
import { logoutAdmin } from "./redux/actions/authActionCreators";

import Login from "./components/pages/login/Login";
import NewTip from "./components/pages/newTip/NewTip";
import EditTip from "./components/pages/editTip/EditTip";
import About from "./components/pages/about/About";
import Home from "./components/pages/home/Home";


const App = ({ admin, dispatchLogoutAction }) => {
    return (  
    <React.Fragment>
      <ToastContainer position="top-right" autoClose={2000}
      hideProgressBar transition={Slide} />
      <Spinner />
    <Router>
    <NavigationBar isLoggedIn={admin.isLoggedIn} username={admin.username} 
      onLogout={dispatchLogoutAction} />
    <div>
      {!admin.isLoggedIn ? 
        <Switch>
            <Route exact path="/login"><Login /></Route>
            <Redirect to="/login" />
        </Switch> : 
        <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/about"><About /></Route>
              <Route exact path="/newTip"><NewTip /></Route>
              <Route exact path="/edittip"><EditTip /></Route>
              <Route exact path="/edittip/:plantId"><EditTip /></Route>
              <Redirect to="/" />
        </Switch>
      }
      </div>
    </Router>

    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({ admin: state.admin });
const mapDispatchToProps = (dispatch) => ({
  dispatchLogoutAction: () => dispatch(logoutAdmin())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
