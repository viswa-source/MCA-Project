import React from "react";
import "./Periyar.css";
export default function Periyar() {
  return (
    <div className="container">
      <div className="text_container">
    
      <p  className="text_periyar">
        There is no god, there is no god, there is no god at all. He who
        invented god is a fool. He who propagates god is a scoundrel. He who
        worships god is a barbarian.s
      </p>
      
      </div>
      <img
        className="img_periyar"
        style={{ alignSelf: "flex-start" }}
        src={require("../images/periyar.png")}
      />
    </div>
  );
}
