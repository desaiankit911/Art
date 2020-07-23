import React, { useState, useEffect } from "react";
import Header from "../Header";
import Defin from "./Defin";
import Architecture from "./Architecture";

export default function MlHome(props) {
  const [activeDiv, setActiveDiv] = useState("MlHome");
  useEffect(() => {
    props.pageChange(activeDiv);
  }, [activeDiv]);

  return (
    <div>
      <div>
        <Header onPageChange={(v) => setActiveDiv(v)} />
        <div
          style={{
            paddingLeft: "5vh",
            paddingRight: "5vh",
          }}
        >
          <Defin />
          <Architecture />
        </div>
      </div>
    </div>
  );
}
