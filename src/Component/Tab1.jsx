import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Chart from "react-apexcharts";
function Tab1() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Oct 2022",
          "Dec 22",
          "Feb 23",
          "April 23",
          "Jun 23",
          "July 23",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [23, 25, 25, 27, 24, 22],
      },
    ],
  });
  return (
    <Box maxW={"100%"} m={"auto"} mt={{ base: "0%", lg: "2%" }} ml={"3%"}>
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width={"98%"}
        height={"450px"}
      />
    </Box>
  );
}

export default Tab1;
