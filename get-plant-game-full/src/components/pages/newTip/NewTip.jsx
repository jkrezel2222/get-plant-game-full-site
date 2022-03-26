import React from "react";
import "./newTip.css"
import SelectMenu from "../../selectMenu/SelectMenu";


export default function NewTip() {
  return (
    <div className="newTip">
        <form className="newTipForm">
            <div className="newTipFormGroup">
                <label htmlFor="fileinput">
                <i className="fa-solid fa-upload"></i>
                </label>
                <input type="file" id="fileinput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="newTipInput" autoFocus={true} />
            </div>
            <div className="newTipFormGroup">
                <textarea placeholder="Description" type="text" className="newTipInput writeText" ></textarea>
            </div>
            <div>
                <SelectMenu />
            </div>

            <button className="newTipSubmit">Publish</button>
        </form>
    </div>
  )
}
