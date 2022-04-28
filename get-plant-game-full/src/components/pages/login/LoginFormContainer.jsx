// import { Button } from "bootstrap";
import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAdmin } from "../../../redux/actions/authActionCreators";
import { toast } from "react-toastify";


const LoginFormContainer = ({ dispatchLoginAction }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleOnSubmit = (event) => {
        event.preventDefault();
        dispatchLoginAction(username, password,
            () => toast.success("Logged in successfully"),
            (message) => toast.error(`Error: ${message}`));
    };

    return(
        <div>
        <br />
        <br />
        <br />
            <h4>Login and let's get to it!</h4>
        <br />
            <form onSubmit={handleOnSubmit} >
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" value={username}
                    onChange={(e) => setUsername(e.target.value)} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} className="form-control"/>
                </div>
                
                <button type="submit" className="btn btn-success" >
                    Login
                </button>


            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    dispatchLoginAction: (username, password, onSuccess, onError) => 
        dispatch(loginAdmin({ username, password }, onSuccess, onError))
});
export default connect(null, mapDispatchToProps)(LoginFormContainer);