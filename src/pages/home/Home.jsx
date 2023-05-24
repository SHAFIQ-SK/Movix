import "./style.scss";
import Homebanner from "./homeBanner/Homebanner";
import Trending from "./trending/Trending";
// import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="homePage">
      {" "}
      <Homebanner />
      <Trending />
      <div style={{ height: 1000 }}>asds</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
