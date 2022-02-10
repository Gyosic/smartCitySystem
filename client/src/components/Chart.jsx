import ReactECharts from "echarts-for-react";

function Chart({ data }) {
  const option = {
    legend: {
      top: "center",
      right: "5px",
      orient: "vertical",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["30%", "60%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "inside",
        },
        labelLine: {
          show: false,
        },
        center: ["35%", "50%"],
        data,
      },
    ],
  };
  return <ReactECharts option={option} />;
}

export default Chart;
