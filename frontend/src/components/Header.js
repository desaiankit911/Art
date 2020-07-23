import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export default function Header(props) {
  // const preventDefault = (event) => event.preventDefault();

  function handelClick(e, v) {
    e.preventDefault();
    props.onPageChange(v);
  }
  return (
    <div
      style={{
        paddingLeft: "10vh",
        paddingTop: "10px",
      }}
    >
      <div className="row">
        <div className="col-md-9">
          <img src={require("../static/favicon.ico")} />
        </div>
        <div className="col-md-3">
          <div style={{ paddingTop: "3vh" }}>
            <Link
              style={{
                paddingRight: "30px",
                textDecoration: "none",
              }}
              href="#"
              onClick={(e) => {
                handelClick(e, "Home");
              }}
            >
              Home
            </Link>
            <Link
              style={{
                paddingRight: "30px",
                textDecoration: "none",
              }}
              href="#"
              onClick={(e) => {
                handelClick(e, "Blogs");
              }}
            >
              Blogs
            </Link>
            <Link
              style={{
                paddingRight: "30px",
                textDecoration: "none",
              }}
              href="#"
              onClick={(e) => {
                handelClick(e, "About");
              }}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
