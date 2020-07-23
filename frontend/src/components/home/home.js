import React, { useState, useEffect } from "react";
import Header from "../Header";
import Domains from "./Domains";
import HomeCards from "./HomeCards";

export default function Home(props) {
  const [activeDiv, setActiveDiv] = useState("Home");
  useEffect(() => {
    alert(activeDiv);
    props.pageChange(activeDiv);
  }, [activeDiv]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${require("../../static/bck.jpg")})`,
          paddingBottom: "20vh",
          backgroundSize: "cover",
        }}
      >
        <Header onPageChange={(v) => setActiveDiv(v)} />
        <Domains />
      </div>
      <div className="container" style={{ paddingTop: "10vh" }}>
        <HomeCards onPageChange={(v) => setActiveDiv(v)} />
      </div>
    </div>
  );
}
