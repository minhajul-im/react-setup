import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MonthChart } from "./month-chart";

import { DonutChart } from "./donut-chart";
import { Badge } from "@/components/ui/badge";

const cardData = [
  {
    title: "Unique Visitors",
    value: "24.7K",
    change: "+20%",
    changeClass: "bg-green-100 text-green-700",
  },
  {
    title: "Total Pageviews",
    value: "55.9K",
    change: "+4%",
    changeClass: "bg-green-100 text-green-700",
  },
  {
    title: "Bounce Rate",
    value: "54%",
    change: "-1.59%",
    changeClass: "bg-red-100 text-red-700",
  },
  {
    title: "Visit Duration",
    value: "2m 56s",
    change: "+7%",
    changeClass: "bg-green-100 text-green-700",
  },
];

export const DashboardPage = () => {
  return (
    <section className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {cardData.map((card, index) => (
          <Card key={index} className="w-full">
            <CardHeader className="pb-2">
              <h3 className="text-sm font-medium text-gray-500 uppercase">
                {card.title}
              </h3>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">{card.value}</p>
                <Badge variant="outline" className={card.changeClass}>
                  {card.change}
                </Badge>
              </div>
              <p className="text-xs text-gray-500 mt-1">Vs last month</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <DonutChart />

      <MonthChart />
    </section>
  );
};
