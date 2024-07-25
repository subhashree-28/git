import React, { useState } from "react";
import "./dropdown.css";

interface Props {
  options: string[];
}

function Dropdown(props: Props) {
  const { options } = props;
  const [option, setOption] = useState(false);
  const [select, setSelect] = useState("Favourite");
  const showOptions = () => {
    setOption(!option);
  };

  return (
    <div className="dropdownOption">
      <div className="header" onClick={showOptions}>
        {select}
      </div>
      {option && (
        <div className="body">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelect(option);
                setOption(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;


