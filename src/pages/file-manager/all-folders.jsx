import { EllipsisVertical } from "lucide-react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Button, buttonVariants } from "@/components/ui/button";
import { CardWrapper } from "@/components/common/card-wrapper";
import { FaFolder } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoEye } from "react-icons/io5";
import ReactApexChart from "react-apexcharts";

export const AllFolderSection = ({ mediaOverviewData }) => {
  return (
    <CardWrapper title="All Folders">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {mediaOverviewData?.map((media) => (
              <div
                key={media?.title}
                className="lg:col-span-6 border p-4 rounded-lg flex justify-between bg-gray-50">
                <div className="flex flex-col gap-2 justify-end">
                  <FaFolder className="text-yellow-500 text-4xl" />
                  <p className="font-medium text-sm mt-6">{media?.title}</p>
                  <span className="text-muted-foreground text-xs">
                    {media?.files} files
                  </span>
                </div>
                <div className="flex flex-col gap-3 items-end justify-between">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                            size: "icon",
                            className:
                              "rounded-full focus-visible:ring-offset-0",
                          })
                        )}>
                        <EllipsisVertical />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-24"
                      align="end"
                      sideOffset={5}>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <div className="flex justify-start gap-4 items-center font-medium text-muted-foreground cursor-pointer">
                            <IoEye />
                            <span className="text-sm">View More</span>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <div className="flex justify-start gap-4 items-center font-medium text-muted-foreground cursor-pointer">
                            <MdOutlineEdit />
                            <span className="text-sm">Rename</span>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <div className="flex justify-start gap-4 items-center font-medium cursor-pointer text-error">
                            <MdOutlineDeleteOutline />
                            <span className="text-sm">Delete</span>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <span className="text-muted-foreground text-xs">
                    {media?.usage} Used
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4 p-4 bg-gray-50 border rounded-lg">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="donut"
          />
        </div>
      </div>
    </CardWrapper>
  );
};

const chartData = {
  series: [44, 55, 41, 17],
  options: {
    chart: {
      width: 320,
      height: 270,
      type: "donut",
    },
    labels: ["Images", "Videos", "Documents", "Downloads"],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      formatter: function (val) {
        return val;
      },
      fontSize: "12px",
      labels: {
        colors: ["#333"],
      },
      markers: {
        width: 10,
        height: 10,
      },
    },
    title: {
      text: "Storage Details",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "normal",
        color: "gray",
        marginBottom: "16px",
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
            horizontalAlign: "center",
          },
        },
      },
    ],
  },
};
