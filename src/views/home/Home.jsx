import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Sections from "../../components/sections/Sections";

const Home = () => {
  return (
    <div className="container-fluid text-center d-felx p-0">
      <div
        className="row position-absolute z-1"
        style={{ width: "100%", margin: 0 }}
      >
        <div className="col p-0">
          <Header />
        </div>
      </div>
      <div className="row" style={{ width: "100%", margin: 0 }}>
        <div className="col p-0">
          <Banner />
        </div>
      </div>
      <div className="row" style={{ width: "100%", margin: 0 }}>
        <div className="col p-0">
          <Sections />
        </div>
      </div>
    </div>
  );
};

export default Home;
