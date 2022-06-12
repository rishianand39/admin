import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"
import HomeTable from "../../components/hometable/HomeTable";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2/1} title="Last 6 months Revenue" />
        </div>
        <div className="listContainer">
          <div className="listContainerTitle">Latest Transations</div>
          <HomeTable />
        </div>
      </div>
    </div>
  )
}

export default Home