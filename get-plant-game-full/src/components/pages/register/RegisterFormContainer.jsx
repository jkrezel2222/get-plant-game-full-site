import React, { useState } from "react";
import { connect } from "react-redux";
import { registerAdmin } from "../../../redux/actions/authActionCreators";
import { toast } from "react-toastify";


const RegisterFormContainer = ({ dispatchRegisterAction }) => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleOnSubmit = (event) => {
        event.preventDefault();
        dispatchRegisterAction(firstname, lastname, username, password,
            () => toast.success("Account created successfully!"),
            (message) => toast.error(`Error: ${message}`));
    };
    
    return(
        <div>
        <br />
        <br />
            <h3>New here? Register an account</h3>
        <br />
        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <label htmlFor="firstname">First name</label>
                <input type="text" name="firstname" placeholder="First name" value={firstname} 
                onChange={(e) => setFirstname(e.target.value)} className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="lastname">Last name</label>
                <input type="text" name="lasttname" placeholder="Last name" value={lastname} 
                onChange={(e) => setLastname(e.target.value)} className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" value={username} 
                onChange={(e) => setUsername(e.target.value)} className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" value={password} 
                onChange={(e) => setPassword(e.target.value)} className="form-control" />
            </div>

            <button type="submit" className="btn btn-success">
                Register
            </button>
        </form>
        
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    dispatchRegisterAction: (firstname, lastname, username, password, onSuccess, onError) =>
        dispatch(registerAdmin({ firstname, lastname, username, password }, onSuccess, onError))
});
export default connect(null, mapDispatchToProps)(RegisterFormContainer);