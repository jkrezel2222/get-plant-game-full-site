import React, { useState } from "react";
import { connect } from "react-redux"; 
import "./newTip.css";
import { createTip } from "../../../redux/actions/tipsActionsCreators";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";


const NewTip = ({ dispatchCreateTipAction }) => {
  
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image_data, setImage_data] = useState("");

    const handleOnSubmit = event => {
        event.preventDefault();
        const data = { title, description, image_data };
        dispatchCreateTipAction(data, () => {
            toast.success("Plant tip created successfully!");
            history.push("/", { from: "newTip" });
        }, (message) => toast.error(`Error: ${message}`));
    };


  
    return (
      <React.Fragment>
      <br />
      <br />
      <br />       
        <div className="container">
          <div className="newTip">
              <img className="newTipImg" src="https://images.unsplash.com/photo-1604762511431-6280a12cb835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80" 
              alt="Monstera plant background" />
              <form className="newTipForm" onSubmit={handleOnSubmit}>
                  <div className="newTipFormGroup">
                      <input name="title" type="text" placeholder="Plant tip title ..." className="newTipInput" autoFocus={true} 
                      value={title} onChange={(e) => setTitle(e.target.value)} />
                  </div>
                  <div className="newTipFormGroup">
                      <textarea name="description" placeholder="Description ..." type="text" className="newTipInput writeText"
                      value={description} onChange={(e) => setDescription(e.target.value)}  ></textarea>
                  </div>
                  <div>
                  <input name="image_data" type="text" placeholder="Image url" className="newTipImage" autoFocus={true} 
                      value={image_data} onChange={(e) => setImage_data(e.target.value)} />
                  </div>
                  <div>
                  <button type="submit" className="btn btn-success publishButton" >Publish</button>
                  <button type="button" onClick={() => history.push("/", { from: "newTip" })} className="btn btn-outline-secondary" >Back</button>

                  </div>
                  <div>

                  </div>
              </form>
          </div>
        </div>
      </React.Fragment>
    );
}

  const mapDispatchToProps = dispatch => ({
      dispatchCreateTipAction: (data, onSuccess, onError) =>
        dispatch(createTip(data, onSuccess, onError))
  });

export default connect(null, mapDispatchToProps)(NewTip);