import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Arial, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 100,
  },
};

export const MonthChart = () => {
  const series = [
    {
      name: "Product One",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
    },
    {
      name: "Product Two",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
    },
  ];

  return (
    <div className="col-span-12 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 sm:px-7.5">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex items-start gap-2">
            <span className="flex h-[20px] w-[22px] items-center justify-center rounded-full border border-[#3C50E0]">
              <span className="block h-2 w-2 rounded-full bg-[#3C50E0]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#3C50E0]">Total Revenue</p>
              <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="flex h-[20px] w-[22px] items-center justify-center rounded-full border border-[#80CAEE]">
              <span className="block h-2 w-2 rounded-full bg-[#80CAEE]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#80CAEE]">Total Sales</p>
              <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
            </div>
          </div>
        </div>
        <div className="flex w-full ml-6 md:pl-0 max-w-[11.25rem] justify-end">
          <div className="inline-flex gap-2 items-center rounded-lg bg-slate-100 p-1.5 dark:bg-gray-700">
            <Button
              className={buttonVariants({ variant: "outline", size: "sm" })}>
              Day
            </Button>
            <Button
              className={buttonVariants({ variant: "outline", size: "sm" })}>
              Week
            </Button>
            <Button
              className={buttonVariants({ variant: "outline", size: "sm" })}>
              Month
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12">
        <div id="chartOne" className="-ml-5 col-span-12">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};
