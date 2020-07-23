import React from "react";

export default function Defin() {
  return (
    <div
      style={{
        paddingTop: "80px",
        borderBottom: "1px solid #ede9e8",
        paddingBottom: "20px",
      }}
    >
      <center>
        <h1
          style={{
            fontFamily: " monospace",
            paddingBottom: "30px",
            color: "red",
          }}
        >
          What is Machine Learning ?
        </h1>
      </center>

      <div style={{ backgroundColor: "#f0f0f0" }}>
        <p
          style={{
            paddingTop: "20px",
            fontFamily: " cursive",
            fontSize: "20px",
            paddingLeft: "20px",
          }}
        >
          It Is a field of study that gives computer the ability to learn
          without being explicity programed
        </p>
        <p
          style={{
            textAlign: "right",
            fontFamily: " cursive",
            fontSize: "20px",
            paddingRight: "20px",
          }}
        >
          - Arthur Samuel
        </p>
      </div>
      <div style={{ backgroundColor: "#f0f0f0" }}>
        <p
          style={{
            paddingTop: "20px",
            fontFamily: " cursive",
            fontSize: "20px",
            paddingLeft: "20px",
          }}
        >
          A computer program is said to learn from experience 'E' with respect
          to some task 'T' and some performance measure 'P', If its performance
          on 'T' as measured by 'P' improve with experience 'E'
        </p>
        <p
          style={{
            textAlign: "right",
            fontFamily: " cursive",
            fontSize: "20px",
            paddingRight: "20px",
          }}
        >
          - Tom Mitchell
        </p>
      </div>
      <div
        style={{
          fontFamily: " cursive",
          fontSize: "20px",
          paddingTop: "30px",
        }}
      >
        {" "}
        <p>e.g, Chess Game</p>
        <div style={{ paddingLeft: "50px" }}>
          <p>E = The experience of playing many games of chess</p>
          <p>T = Task of playing games</p>
          <p>P = Probability that the program will win the next game</p>
        </div>
      </div>
    </div>
  );
}
