import React from "react";
import "./RoundCard.css";
import { Link } from "react-router-dom";

export default function RoundCard(props) {
  return (
    <>
      <a
        id="card_container"
        style={{ width: 180,margin:'2%' }}
        href={props.to}
      >
        <div>
          <img src={props.img} height={50} width={40} />
          <p style={{ color: "black" }}>
            {props.text.length > 20
              ? props.text.substr(0, 15) + "..."
              : props.text}
          </p>
        </div>
      </a>
    </>
  );
}
