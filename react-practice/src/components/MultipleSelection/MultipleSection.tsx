import React, { useState } from "react";
import "./multipleSection.css";
import _ from "lodash";

interface Props {
  items: {
    id?: number;
    label: string;
    value: string;
  }[];
  defaultValue: string,
}

function Checklist(props: Props) {
  const { items, defaultValue } = props;

  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const [open,setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleClick = (item: string) => {
    setSelectedItem((prev) => {
      if (_.includes(prev, item)) {
        return _.filter(prev, (i) => i !== item);
      } else {
        return [...prev, item];
      }
    });
  };

  const selectItem = _.join(selectedItem, ", ");
  const SelectingItem = `${defaultValue}, ${selectItem}`;

  const filteredItems = _.filter(items, (item) => 
    _.includes(_.toLower(item.value),_.toLower(search))
    
  );

  const SelectAll = () => {
    if (_.size(selectedItem) > 0) {
      setSelectedItem([]);
    }
    else {
      setSelectedItem(items.map((item) => item.value));
    }
  };

  return (
    <div className="multiselectoption">
      <h1 className="header">Grocery Item</h1>

       <div className="show-options" onClick={() => setOpen(!open)}>
         <input type="text" value={SelectingItem}
         className="selecting-options"/>
      </div> 
      
     {open &&  
     <div className="select--item" >
        <input type="Search" value={search}
        onChange={(e) => setSearch(e.target.value)}
        defaultValue="Search" 
        className="searchbar"/>
        <br />
        <label>
          <input type="checkbox" checked={selectedItem.length === items.length} onChange={SelectAll}/>
          Select All
        </label>
        <br />
        {filteredItems.map((item) => (
          <>
            <label className="multiple--option">
            <input type="checkbox" 
            checked={selectedItem.includes(item.value) || defaultValue.includes(item.value)}
            onChange={()=>handleClick(item.value) 
            
            }
            />
            {item.value}
            <br />
            </label>
          </>
        ))}
      </div> 
      }
    </div>
  )
}

export default Checklist;
