import umbrellas from "../../../assets/images/umbrellas.jpg";
import umbrella from "../../../assets/images/umbrella.png";
import "./SectionOne.scss";

const SectionOne = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 p-0" style={{ width: "50%" }}>
          <img
            className="img-fluid"
            src={umbrellas}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="col-sm-6 p-0"
          style={{ width: "50%", background: "white", margin: "auto" }}
        >
          <div className="col umbrella-lefth"></div>

          <img
            className="img-fluid"
            src={umbrella}
            alt=""
            style={{ width: "20%" }}
          />
          <div>Pufi RAIN</div>
          <div>Descripción del producto</div>
          <div>
            <a href="...">VER MÁS</a>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="col-sm-6 p-0 "
          style={{
            width: "50%",
            background: "white",
            margin: "auto",
          }}
        >
          <div className="col umbrella-right"></div>
          <img
            className="img-fluid"
            src={umbrella}
            alt=""
            style={{ width: "20%" }}
          />
          <div>Pufi RAIN</div>
          <div>Descripción del producto</div>
          <div>
            <a href="...">VER MÁS</a>
          </div>
        </div>
        <div className="col-sm-6 p-0" style={{ width: "50%" }}>
          <img
            className="img-fluid"
            src={umbrellas}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 p-0" style={{ width: "50%" }}>
          <img
            className="img-fluid"
            src={umbrellas}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="col-sm-6 p-0"
          style={{ width: "50%", background: "white", margin: "auto" }}
        >
          <div className="col umbrella-lefth"></div>
          <img
            className="img-fluid"
            src={umbrella}
            alt=""
            style={{ width: "20%" }}
          />
          <div>Pufi RAIN</div>
          <div>Descripción del producto</div>
          <div>
            <a href="...">VER MÁS</a>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="col-sm-6 p-0"
          style={{ width: "50%", background: "white", margin: "auto" }}
        >
          <div className="col umbrella-right"></div>

          <img
            className="img-fluid"
            src={umbrella}
            alt=""
            style={{ width: "20%" }}
          />
          <div>Pufi RAIN</div>
          <div>Descripción del producto</div>
          <div>
            <a href="...">VER MÁS</a>
          </div>
        </div>
        <div className="col-sm-6 p-0" style={{ width: "50%" }}>
          <img
            className="img-fluid"
            src={umbrellas}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
