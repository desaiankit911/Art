import React, { useState, useEffect } from "react";
import Header from "../Header";
import Defin from "./Defin";

export default function MlHome(props) {
  const [activeDiv, setActiveDiv] = useState("MlHome");
  useEffect(() => {
    props.pageChange(activeDiv);
  }, [activeDiv]);

  return (
    <div>
      <div>
        <Header onPageChange={(v) => setActiveDiv(v)} />
        <Defin />
      </div>
    </div>
  );
}
