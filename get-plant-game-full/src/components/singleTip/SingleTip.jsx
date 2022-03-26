import "./singleTip.css"

export default function SingleTip() {
  return (
    <div className="singleTip">
        <div className="singleTipWrapper">
            <img src="https://images.unsplash.com/photo-1498480086004-2400bd8c3663?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" 
            alt="Flowers in vases" className="singleTipImg" />
            <h3 className="singleTipTitle">
                Listing title here
                <div className="singleTipEdit">
                    <i className="singleTipIcon fa-solid fa-pen-to-square"></i>
                    <i class="singleTipIcon fa-solid fa-trash"></i>
                </div>
            </h3>
                <span className="singleTipDate">1 March 2022</span>
            <p className="singleTipDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi, dolorem porro, perferendis vitae, aliquam iure veniam nam sit laboriosam praesentium quisquam fuga suscipit natus repudiandae temporibus quaerat eius adipisci.
            </p>
        </div>
    </div>
  )
}
