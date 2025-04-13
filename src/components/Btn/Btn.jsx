import React from "react";
import "./Btn.scss";

function Btn({ label, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
}

export default Btn;
