import React, { useContext, useState } from "react";
import { IoMdArrowDropup, GoGraph } from "react-icons/io";

import { Contextapi } from "../ContextAPI/Contextprovider";

function Dashboardcard({ title, icon, value, description, id }) {
  const [isFocused, setIsFocused] = useState(false);
  const { setTabvalue } = useContext(Contextapi);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const [isPopoverVisible, setIsPopoverVisible] = React.useState(false);

  const togglePopover = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  return (
    <button
      className={`stats hover:bg-[#f1f1f1] focus:bg-[#f1f1f1] focus:outline-none`}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={() => setTabvalue(id)} // Assuming `id` is defined somewhere
    >
      <div className="stat gap-1 px-2 py-2">
        <div className="flex justify-between items-center h-10">
          <div className="stat-title dark:text-slate-300 text-[15px] font-[500] text-left">
            {title}
          </div>
          <div>
            <div
              className={`stat-figure hover:bg-[#a5a4a4] ${
                isFocused ? "block" : "hidden"
              } px-1 py-1`}
              onMouseEnter={togglePopover}
            >
              {icon}
            </div>
            {isPopoverVisible && (
              <div
                data-popover="popover-bottom-start"
                data-popover-placement="bottom-start"
                className="absolute z-10 w-max whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
                onMouseLeave={togglePopover}
              >
                <div className="flex m-[3px] py-1 px-2 items-center gap-2  hover:bg-[#a5a4a4]">
                  <IoMdArrowDropup />
                  <p>Average Order Value</p>
                </div>
                <div className="flex m-[3px] py-1 px-2 items-center gap-2 hover:bg-[#a5a4a4]">
                  <IoMdArrowDropup />
                  <p>Conversion Rate</p>
                </div>
                <div className="flex m-[3px] py-1 px-2 items-center gap-2 hover:bg-[#a5a4a4]">
                  <IoMdArrowDropup />
                  <p>Net Return Value</p>
                </div>
                <div className="flex m-[3px] py-1 px-2 items-center gap-2 hover:bg-[#a5a4a4]">
                  <IoMdArrowDropup />
                  <p>Store Search Conversion</p>
                </div>
                <div className="flex m-[3px] py-1 px-2 items-center gap-2 hover:bg-[#a5a4a4]">
                  <IoMdArrowDropup />
                  <p>Return Rate</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className={`stat-value dark:text-slate-300 text-[22px] font-[700]`}
          >
            {value}
          </div>
          <div className="flex items-center">
            <IoMdArrowDropup />
            <div className={`stat-desc`}>{description}</div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default Dashboardcard;
