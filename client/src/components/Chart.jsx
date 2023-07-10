import React, { useEffect, useRef } from "react";
import "./Chart.css";
import * as echarts from "echarts";

const Chart = ({ xAxis, series1, series2 }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize ECharts instance
    const chart = echarts.init(chartRef.current, "svg");

    // Set chart options
    const colors = {
      background: "transparent",
      textMuted: "#F691C3",
      textMain: "#fff",
      serie1: "#fff",
      serie2: "cyan",
      inactive: "#3333",
    };

    const options = {
      grid: {
        left: 32,
        top: 32,
        right: 32,
        bottom: 32,
      },
      title: {
        show: true,
        text: "title",
        left: 24,
        top: 16,
        textStyle: {
          color: colors.textMain,
          fontFamily: "Montserrat",
          fontWeight: 600,
          fontSize: 12,
        },
      },
      legend: {
        top: 42,
        left: 24,
        orient: "vertical",
        itemGap: 10,
        itemWidth: 8,
        data: [
          {
            name: "Cases",
            icon: "circle",
            textStyle: {
              color: colors.textMuted,
              fontSize: 10,
            },
          },
          {
            name: "Deaths",
            icon: "circle",
            textStyle: {
              color: colors.textMuted,
              fontSize: 10,
            },
          },
        ],
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisTick: false,
        axisLabel: {
          show: true,
          interval: 999,
          showMinLabel: true,
          showMaxLabel: true,
          color: colors.textMuted,
          fontSize: 10,
        },
        axisLine: {
          lineStyle: {
            color: colors.textMuted,
          },
        },
        data: xAxis,
      },
      yAxis: [
        {
          type: "value",
          show: false,
          axisLabel: false,
        },
      ],
      series: [
        {
          name: "Cases",
          data: series1,
          type: "line",
          symbol: "none",
          smooth: true,
          color: colors.serie1,
          lineStyle: {
            color: colors.serie1,
            width: 1.25,
          },
        },
        {
          name: "Deaths",
          data: series2,
          type: "line",
          symbol: "none",
          smooth: true,
          color: colors.serie2,
          lineStyle: {
            color: colors.serie2,
            width: 1.25,
          },
        },
      ],
    };

    // Set chart options and render the chart
    chart.setOption(options);

    // Clean up the chart when the component unmounts
    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "200px" }} />;
};

export default Chart;
