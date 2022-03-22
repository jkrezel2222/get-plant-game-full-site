import Header from "../../header/Header"
import PlantTips from "../../plantTips/PlantTips"
import Sidebar from "../../sidebar/Sidebar"
import "./home.css"

export default function Home() {
  return (
    <>
      <Header/>
      <div className="home">
        <PlantTips />
        <Sidebar />
      </div>
    </>
  )
}
