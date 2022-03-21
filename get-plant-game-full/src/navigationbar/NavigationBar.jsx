import "./navigationbar.css"

export default function NavigationBar() {
  return (
    <div className="navigation">
        <div className="navLeft">
            <h3>Get Plant Game</h3>    
        </div>
        <div className="navCentre">
            <ul className="navList">
                <li className="navListItem">Home</li>
                <li className="navListItem">About Us</li>
                <li className="navListItem">Contact Us</li>
                <li className="navListItem">New Tip</li>
                <li className="navListItem">Logout</li>
            </ul>
        </div>
        <div className="navRight">
        Search
        <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        
    </div>
  )
}
