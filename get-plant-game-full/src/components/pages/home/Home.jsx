import Header from "../../header/Header"
// import PlantTips from "../../plantTips/PlantTips"
import Plant from "../../plant/Plant"
import Sidebar from "../../sidebar/Sidebar"
import "./home.css"

export default function Home() {
  return (
    <>
      <Header/>
      <div className="home">
        <div className="homeWrapper">
          <Plant />
        </div>
        <div className="homeSidebarWrapper">
          <Sidebar />
        </div>
      </div>
    </>
  )
}
