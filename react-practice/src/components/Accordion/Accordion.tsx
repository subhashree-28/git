import React, { useState } from "react";

interface MyButtonProps {
  data: {
    title: string;
    content: string;
  };
}

function Accordion(props: MyButtonProps) {
  const { data } = props;
  const [open, setOpen] = useState(false);
  const displayContent = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div onClick={displayContent}>{data.title}</div>

      {open && <div>{data.content}</div>}
    </div>
  );
}

export default Accordion;
