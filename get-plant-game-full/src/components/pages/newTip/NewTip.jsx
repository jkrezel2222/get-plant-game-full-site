import React from "react";
import "./newTip.css"
// import { Register } from "../register/Register";
import { Component } from "react";
import SelectMenu from "../../selectMenu/SelectMenu";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';


class NewTip extends Component {



    render(){  
        return (
            <div className="container">



            <div className="newTip">
                <img className="newTipImg" src="https://images.unsplash.com/photo-1604762511431-6280a12cb835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80" 
                alt="Monstera plant background" />
                <form className="newTipForm">
                    <div className="newTipFormGroup">
                        <input type="text" placeholder="Plant tip title ..." className="newTipInput" autoFocus={true} />
                    </div>
                    <div className="newTipFormGroup">
                        <textarea placeholder="Description ..." type="text" className="newTipInput writeText" ></textarea>
                    </div>
                    <div>
                        <label htmlFor="fileinput">
                        <i className="newTipIcon fa-solid fa-file-image"></i>
                        </label>
                        <input type="file" id="fileinput" style={{display:"none"}}/>
                            <div className="newTipSelectWrapper">
                                <SelectMenu />
                            </div>
                    </div>
                    <div>
                    <Button className="publishButton" variant="success">Publish</Button>{' '}
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default NewTip;