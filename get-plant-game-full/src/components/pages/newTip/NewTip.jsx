import React from 'react'


const NewTip = () => {
  return (
    <React.Fragment>
    <br />
    <br />
    <br />
    <h4>Create a new plant or gardening tip</h4>
        
        
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
              </div>
              <div>
              <button type="submit" className="btn btn-success publishButton" >Publish</button>{' '}
              </div>
          </form>
      </div>
    </div>



    </React.Fragment>
  )
}
export default NewTip;