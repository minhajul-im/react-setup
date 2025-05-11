import { CardWrapper } from "@/components/common/card-wrapper";
import { Progress } from "@/components/ui/progress";
import ReactApexChart from "react-apexcharts";

const donut = {
  series: [44, 17, 15, 14, 33],
  options: {
    chart: {
      type: "donut",
    },
    labels: ["Electronics", "Clothing", "Books", "Groceries", "Accessories"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 280,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

const revenue = {
  series: [76],
  options: {
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#444",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Average Results"],
  },
};

export const DonutChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 my-6">
      <div id="chart" className="lg:col-span-7">
        <CardWrapper title="Sales Categories">
          <ReactApexChart
            options={donut.options}
            series={donut.series}
            type="donut"
          />
        </CardWrapper>
      </div>
      <div id="html-dist" className="lg:col-span-5">
        <CardWrapper title="Estimated Revenue">
          <p className="text-gray-400 text-base -pt-6">
            Target you’ve set for each month
          </p>
          <ReactApexChart
            options={revenue.options}
            series={revenue.series}
            type="radialBar"
          />
          <hr className="border-t my-6" />
          <div className="flex justify-start flex-col gap-4 mt-8">
            <ProgressCost
              data={{ title: "Marketing", amount: 12345, value: 48 }}
            />
            <ProgressCost
              data={{ title: "Sales", amount: 345345, value: 76 }}
            />
            <ProgressCost
              data={{ title: "Revenue", amount: 35345, value: 32 }}
            />
          </div>
        </CardWrapper>
      </div>
    </div>
  );
};

const ProgressCost = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-gray-400 text-sm">{data?.title}</span>
      <div className="flex justify-between gap-6 items-center">
        <h3 className="text-muted-foreground font-semibold">${data?.amount}</h3>
        <div className="flex-1 flex items-center gap-2">
          <Progress value={data?.value} className="flex-1 h-2" />
          <span className="text-primary font-medium">{data?.value}%</span>
        </div>
      </div>
    </div>
  );
};
