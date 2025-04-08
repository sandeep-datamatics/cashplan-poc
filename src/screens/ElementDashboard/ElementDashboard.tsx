import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Avatar } from "../../components/ui/avatar";
import { ChevronDownIcon, BarChart2Icon, PieChartIcon, TrendingUpIcon } from "lucide-react";

export const ElementDashboard = (): JSX.Element => {
  const dashboardStats = [
    { title: "Total Organizations", value: "1,234", icon: BarChart2Icon, color: "text-blue-500" },
    { title: "Active Contacts", value: "5,678", icon: PieChartIcon, color: "text-green-500" },
    { title: "Revenue Growth", value: "12.5%", icon: TrendingUpIcon, color: "text-yellow-500" },
  ];

  return (
    <div className="bg-[#f3f6f8] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#f3f6f8] w-full max-w-[1366px] relative">
        {/* Header */}
        <header className="w-full h-14 bg-white shadow-[0px_1px_2px_#0000001a] flex items-center justify-between px-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m98irfa1pZG1GI/img/vector.svg)] bg-[100%_100%]">
              <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m98irfa1pZG1GI/img/mask-group.png)] bg-[100%_100%]">
                <div className="relative w-[45px] h-5 top-[5px] left-[3px] bg-[url(https://c.animaapp.com/m98irfa1pZG1GI/img/mask-group-1.png)] bg-[100%_100%]" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10 bg-brandprimary-base">
              <img
                className="w-full h-full object-cover"
                alt="User avatar"
                src="https://c.animaapp.com/m98irfa1pZG1GI/img/image-1.png"
              />
            </Avatar>
            <div className="flex items-center">
              <span className="font-desktop-body-s text-neutralneutral-8">
                John Smith
              </span>
              <ChevronDownIcon className="w-8 h-8" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          <h1 className="font-desktop-h4-semibold text-neutral-neutral-10 mb-6">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dashboardStats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Activity list would go here...</p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="w-full h-20 bg-white fixed bottom-0 left-0 flex items-center justify-end pr-6">
          <Button variant="outline" className="h-10 px-4 bg-neutral-neutral-2 text-neutralneutral-6 border-[#dee2e6]">
            Export Data
          </Button>
        </div>
      </div>
    </div>
  );
};
