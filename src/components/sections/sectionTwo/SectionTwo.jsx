import Umbrella from "../../../assets/images/playa2.jpg";
const SectionTwo = () => {
  return (
    <div  className="container m-5">
      <span>INSTAGRAM</span>
      <h2>#ESPUFI</h2>
      <div className="container" style={{ width: "60%" }}>
        <div className="row">
          <div className="col p-0">
            <img src={Umbrella} style={{ width: "100%" }} alt="" />
          </div>
          <div className="col p-0">
            <img src={Umbrella} style={{ width: "100%" }} alt="" />
          </div>
          <div className="col p-0">
            <img src={Umbrella} style={{ width: "100%" }} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col p-0">
            <img src={Umbrella} style={{ width: "100%" }} alt="" />
          </div>
          <div className="col p-0">
            <img src={Umbrella} style={{ width: "100%" }} alt="" />
          </div>
          <div className="col p-0">
            <img src={Umbrella} style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
