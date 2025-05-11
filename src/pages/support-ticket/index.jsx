import { CardWrapper } from "@/components/common/card-wrapper";
import { TableWarpper } from "@/components/common/table-wrapper";
import { TicketTable } from "@/components/tables/ticket-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NotebookPen } from "lucide-react";
import ReactApexChart from "react-apexcharts";

export const SupportTicketPage = () => {
  return (
    <section className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {ticketOverviewData.map((ticket, index) => (
          <Card key={index} className="w-full">
            <div className="flex justify-between items-center p-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium text-muted-foreground uppercase">
                  {ticket.title}
                </h3>
                <p className="text-2xl font-bold">{ticket.value}</p>
              </div>

              <div
                className={`w-14 h-14 rounded-full flex justify-center items-center ${ticket?.changeClass}`}>
                <NotebookPen />
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 my-6">
        <div className="lg:col-span-4">
          <CardWrapper>
            <div className="pt-6">
              <ReactApexChart
                options={ticketFeedback?.options}
                series={ticketFeedback?.series}
                type="pie"
              />
            </div>
          </CardWrapper>
        </div>
        <div className="lg:col-span-8">
          <CardWrapper>
            <div className="pt-6">
              <ReactApexChart
                options={ticketMonthlyChart.options}
                series={ticketMonthlyChart.series}
                type="bar"
                height={350}
              />
            </div>
          </CardWrapper>
        </div>
      </div>

      <TableWarpper>
        <div className="flex justify-between items-center p-6">
          <h4 className="text-xl font-semibold text-muted-foreground">
            Recent Created Tickets
          </h4>
          <Button href="/support-ticket/list" className="btn-md btn-primary">
            All Tickets
          </Button>
        </div>
        <hr />
        <TicketTable tickets={tickets} />
      </TableWarpper>
    </section>
  );
};

const ticketFeedback = {
  series: [120, 80, 150, 50],
  options: {
    chart: {
      type: "pie",
      height: 350,
    },
    title: {
      text: "Feedback Ticket Distribution",
      align: "left",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "gray",
        padingBottom: "20px",
      },
    },
    labels: ["Positive", "Negative", "Neutral", "Under Review"],
    // colors: ["#34C38F", "#F46A6A", "#74788D", "#FFCA28"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return `${opts.w.globals.series[opts.seriesIndex]} (${Math.round(
          val
        )}%)`;
      },
    },
    responsive: [
      {
        breakpoint: 640,
        options: {
          chart: {
            height: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

const ticketMonthlyChart = {
  series: [
    {
      name: "Pending",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 62, 59, 55],
    },
    {
      name: "Created",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 96, 88],
    },
    {
      name: "Resolved",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 47, 44, 39],
    },
    {
      name: "Replied",
      data: [50, 60, 65, 55, 70, 68, 75, 72, 69, 66, 62, 58],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "Monthly Ticket Overview",
      align: "left",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "gray",
        marginBottom: "16px",
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      title: {
        text: "Month",
      },
    },
    yaxis: {
      title: {
        text: "Ticket Count",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val} tickets`;
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    grid: {
      borderColor: "#e7e7e7",
    },
  },
};

const ticketOverviewData = [
  {
    title: "New Tickets",
    value: "1,245",
    changeClass: "bg-blue-100 text-blue-600",
  },
  {
    title: "Pending Tickets",
    value: "342",
    changeClass: "bg-red-100 text-red-600",
  },
  {
    title: "Replied Tickets",
    value: "987",
    changeClass: "bg-purple-200 text-purple-600",
  },

  {
    title: "Resolved Tickets",
    value: "1,103",
    changeClass: "bg-green-100 text-green-600",
  },
];

const tickets = [
  {
    id: "TCK001",
    title: "Login Issue",
    client: "Acme Corp",
    assignedTo: "John Doe",
    createdDate: "Apr 01, 2025 09:30 AM",
    dueDate: "Apr 05, 2025 05:00 PM",
    status: "Open",
    priority: "High",
    thumbnail: "https://example.com/images/login-issue.jpg",
  },
  {
    id: "TCK002",
    title: "Payment Gateway Error",
    client: "Beta Inc",
    assignedTo: "Jane Smith",
    createdDate: "Apr 02, 2025 11:15 AM",
    dueDate: "Apr 06, 2025 03:00 PM",
    status: "In Progress",
    priority: "Medium",
    thumbnail: "https://example.com/images/payment-error.jpg",
  },
  {
    id: "TCK003",
    title: "UI Bug",
    client: "Gamma Ltd",
    assignedTo: "Alice Brown",
    createdDate: "Apr 03, 2025 02:45 PM",
    dueDate: "Apr 07, 2025 12:00 PM",
    status: "Open",
    priority: "Low",
    thumbnail: "https://example.com/images/ui-bug.jpg",
  },
  {
    id: "TCK004",
    title: "Database Connection Failure",
    client: "Delta Solutions",
    assignedTo: "Bob Wilson",
    createdDate: "Apr 03, 2025 10:00 AM",
    dueDate: "Apr 08, 2025 06:00 PM",
    status: "In Progress",
    priority: "High",
    thumbnail: "https://example.com/images/db-error.jpg",
  },
  {
    id: "TCK005",
    title: "Feature Request",
    client: "Epsilon Co",
    assignedTo: "Carol Davis",
    createdDate: "Apr 04, 2025 08:20 AM",
    dueDate: "Apr 10, 2025 04:30 PM",
    status: "Pending",
    priority: "Medium",
    thumbnail: "https://example.com/images/feature-request.jpg",
  },
  {
    id: "TCK006",
    title: "Security Vulnerability",
    client: "Zeta Enterprises",
    assignedTo: "David Lee",
    createdDate: "Apr 04, 2025 01:50 PM",
    dueDate: "Apr 05, 2025 11:00 PM",
    status: "Open",
    priority: "Critical",
    thumbnail: "https://example.com/images/security-issue.jpg",
  },
];
