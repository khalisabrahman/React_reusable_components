import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const options = [
    { label: "Red", value: "red" },
    { label: "green", value: "green" },
    { label: "blue", value: "blue" },
  ];

  const [selection, setSelection] = useState();

  const handleSelect = (option) => {
    setSelection(option);
  };

 
  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
    
  );
}

export default DropdownPage;
