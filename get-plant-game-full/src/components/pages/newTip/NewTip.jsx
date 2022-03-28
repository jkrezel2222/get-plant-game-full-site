import React from "react";
import "./newTip.css"
import SelectMenu from "../../selectMenu/SelectMenu";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';


export default function NewTip() {
  return (
    <div className="container">
    <div className="newTip">
        <img className="newTipImg" src="https://images.unsplash.com/photo-1615193626516-5455deab0c35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80" 
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
                <SelectMenu />
            </div>
            <div>
            <Button className="publishButton" variant="success">Publish</Button>{' '}
            </div>
        </form>
    </div>
    </div>
  )
}
