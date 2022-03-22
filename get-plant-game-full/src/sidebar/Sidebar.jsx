import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">HERE FOR THE PLANTS</span>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in quis qui odio assumenda iure.
            </p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">PLANT TYPE</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Indoor</li>
                <li className="sidebarListItem">Outdoor</li>
                <li className="sidebarListItem">All Tips</li>
            </ul>
        </div>
    </div>
  )
}
