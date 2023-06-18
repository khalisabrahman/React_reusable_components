import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    console.log(divEl);
    document.addEventListener("click", handler, true);

    // Cleanup function
    return () => {
      document.removeEventListener("click", handler);
      console.log("cleanup");
    };
  }, []);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  // window.timeTwo = performance.now();

  const handleOptionClick = (option) => {
    // window.timeOne = performance.now();
    setIsOpen(false);

    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown />
      </Panel>
      <div>
        {isOpen && (
          <Panel className="absolute top-full">{renderedOptions}</Panel>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
