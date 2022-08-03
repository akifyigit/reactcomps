import PropTypes from "prop-types";
import { useState } from "react";

const Tooltip = ({
  tooltipClassname,
  textForTip,
  location = "right",
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);



  const handleLocation = () => {
    switch (location) {
      case "left":
        return "tooltip-left";
      case "top":
        return "tooltip-top";
      case "bottom":
        return "tooltip-bottom";
      case "right":
      default:
        return "tooltip-right";
    }
  };

  return (
    <>
      <div
        className="relative w-fit"
        onMouseEnter={() => {
          setIsOpen(true);
        }}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        {children}
        <div
          className={`text-sm bg-gray-700 text-gray-100  h-8  p-1 absolute rounded bg-opacity-50 inset-auto  transition-shadow 
          ${isOpen ? "tooltip-animationfadein": "tooltip-animationfadeout"}
          ${handleLocation()}	 
          ${tooltipClassname}
          `}
        >
          {textForTip}
        </div>
      </div>
    </>
  );
};

Tooltip.propTypes = {
  tooltipClassname: PropTypes.string,
  location: PropTypes.string.isRequired,
};

export default Tooltip;
