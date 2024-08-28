import { useState } from "react";
import "./recursion-dropdown.css";
import _ from "lodash";

interface Props {
  id: number;
  label: string;
  children?: Props[];
}

interface RecursionProps {
  data: Props[];
}

export default function RecursionDropdown(props: RecursionProps) {
  const { data } = props;

  const [activeOption, setActiveOption] = useState<number | null>(null);

  const handleCheck = (id: number) => {
    setActiveOption(activeOption === id ? null : id);
  };

  return (
    <div>
      {_.map(data, (datum) => (
        <div>
        <div className="dropdown-parent" onClick={() => handleCheck(datum.id)}>
        {datum.label}
      </div>

      {activeOption === datum.id && datum.children && (
        <div className="dropdown-children">
            <RecursionDropdown key={datum.id} data={datum.children} />
        </div>
      )}
      </div>
      ))}
    </div>
  );
}


