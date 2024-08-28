import React, { useState } from "react";
import "./dropdown.css";

interface Props {
  options: {
    label: string,
    value: string,
  }[];
  defaultValue: string; 
  onSubmit: (opt: string) => void;  
}

function Dropdown(props: Props) {
  const { options, defaultValue, onSubmit } = props;
  const [option, setOption] = useState(false);
  const [select, setSelect] = useState(defaultValue);
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
            <div className="eachbody"
              key={index}
              onClick={() => {
                setSelect(option.value);
                setOption(false);
                onSubmit(option.value)
              }}
            >
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;


