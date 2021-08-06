import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import IconButton from "@material-ui/core/IconButton";
import "../styles.css/Instruction.css";

function Instruction(props) {
  const instruction = props.instruction;

  const [active, setActive] = useState("false");
  const toggle = () => {
    setActive(!active);
  };
  return (
    <div className="instruction">
      <IconButton onClick={toggle}>
        <h3 className="instr">Instruction</h3>
        <ArrowDropDownIcon />
      </IconButton>
      {!active ? (
        <ul className="guide">
          {instruction.map((guide, i) => (
            <li className="list-group-item list-group-item-info" key={i}>
              {guide}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Instruction;
