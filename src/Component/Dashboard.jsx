import React, { useState } from "react";
import Dashboardcard from "./Dashboardcard";
import { MdOutlineEdit } from "react-icons/md";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Dashboard({ setTogg, togg }) {
  const handleToggle = () => setTogg((prev) => !prev);

  const statsData = [
    {
      title: "Online store sessions",
      value: "255,581",
      icon: <MdOutlineEdit className="w-8 h-8" />,
      description: "9%",
      id: "1",
    },
    {
      title: "Net return value",
      value: "-$15,07.44",
      icon: <MdOutlineEdit className="w-8 h-8" />,
      description: "14%",
      id: "2",
    },
    {
      title: "Total orders",
      value: "10,511",
      icon: <MdOutlineEdit className="w-8 h-8" />,
      description: "2%",
      id: "3",
    },
    {
      title: "Conversion rate",
      value: "3.18%",
      icon: <MdOutlineEdit className="w-8 h-8" />,
      description: "7%",
      id: "4",
    },
  ];

  return (
    <div className="flex justify-between w-[100%] items-center gap-10">
      <div className="grid w-[100%] lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-1">
        {statsData.map((d, k) => {
          return <Dashboardcard key={k} {...d} colorIndex={k} />;
        })}
      </div>

      <div>
        <button variantColor="blue" onClick={handleToggle}>
          {togg ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
