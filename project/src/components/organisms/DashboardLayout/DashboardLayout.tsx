import Header from "../../molecules/Header/Header"
import MainContainer from "../../molecules/MainContainer/MainContainer"
import Sidebar from "../../molecules/Sidebar/Sidebar"

const DashboardLayout = () => {
  return (
    <div className="flex md:flex-row flex-col">
        <Sidebar />
        <Header />
        <MainContainer />
    </div>
  )
}

export default DashboardLayout