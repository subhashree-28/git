import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Checklist from "../MultipleSelection/MultipleSection";

const dataset = [
  { label: "Engagements", value: "engagements" },
  { label: "Response Rate", value: "response_rate" },
  { label: "Video Views", value: "video_views" },
  { label: "Impressions", value: "impressions" },
  { label: "Clicks", value: "clicks" }
];

function Dataset() {
  const [value, setValue] = useState<string>("engagements");
  
  return (
    <div>
      <Dropdown options={dataset} defaultValue="engagements" onSubmit={(option) => setValue(option)} />
      <Checklist items={dataset} defaultValue={value} />
    </div>
  );
};

export default Dataset;