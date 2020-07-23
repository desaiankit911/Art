import React from "react";
import Link from "@material-ui/core/Link";

export default function HomeCards(props) {
  function handelClick(e, v) {
    e.preventDefault();
    props.onPageChange(v);
  }

  return (
    <div>
      <div style={{ paddingLeft: "40vh" }} className="row">
        <div className="col-md-3">
          <div
            className="card"
            style={{
              width: "200px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              padding: "10px 10px 10px 10px",
            }}
          >
            <div className="card-body">
              <h4
                className="card-title"
                style={{ borderBottom: "1px solid #ede9e8" }}
              >
                Ankit Desai
              </h4>
              <p className="card-text">Inside Python</p>
              <Link
                style={{
                  fontFamily: " monospace",
                  fontSize: "20px",
                  textDecoration: "none",
                  color: "black",
                }}
                href="#"
                onClick={(e) => {
                  handelClick(e, "About");
                }}
              >
                Python you want to know
              </Link>
            </div>
            <img
              className="card-img-bottom"
              alt="Card image"
              style={{ width: "100%", height: "15vw", objectFit: "cover" }}
              src={require("../../static/Python.jpg")}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card"
            style={{
              width: "200px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              padding: "10px 10px 10px 10px",
            }}
          >
            <div className="card-body">
              <h4
                className="card-title"
                style={{ borderBottom: "1px solid #ede9e8" }}
              >
                Math
              </h4>
              <p className="card-text">Inside Neural Network</p>
              <Link
                style={{
                  fontFamily: " monospace",
                  fontSize: "20px",
                  textDecoration: "none",
                  color: "black",
                }}
                href="#"
                onClick={(e) => {
                  handelClick(e, "MlHome");
                }}
              >
                Machine Learning Using Python
              </Link>
            </div>
            <img
              className="card-img-bottom"
              alt="Card image"
              style={{ width: "100%", height: "15vw", objectFit: "cover" }}
              src={require("../../static/ml.png")}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card"
            style={{
              width: "200px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              padding: "10px 10px 10px 10px",
            }}
          >
            <div className="card-body">
              <h4
                className="card-title"
                style={{ borderBottom: "1px solid #ede9e8" }}
              >
                A, P, S{/* Arranging, Processing and Storing */}
              </h4>
              <p className="card-text">Reduce the complexity</p>
              <Link
                style={{
                  fontFamily: " monospace",
                  fontSize: "20px",
                  textDecoration: "none",
                  color: "black",
                }}
                href="#"
                onClick={(e) => {
                  handelClick(e, "About");
                }}
              >
                Data Structure Using Python
              </Link>
            </div>
            <img
              className="card-img-bottom"
              alt="Card image"
              style={{ width: "100%", height: "15vw", objectFit: "cover" }}
              src={require("../../static/da.jpg")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
