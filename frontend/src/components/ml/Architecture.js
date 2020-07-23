import React from "react";

export default function Architecture() {
  return (
    <div style={{ paddingTop: "80px", borderBottom: "1px solid #ede9e8" }}>
      <center>
        <h1
          style={{
            fontFamily: " monospace",
            paddingBottom: "30px",
            color: "red",
          }}
        >
          Architeture & Understanding
        </h1>
        <img src={require("../../static/basic_architecture.png")} />
      </center>
    </div>
  );
}
