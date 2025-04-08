import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Avatar } from "../../components/ui/avatar";
import { ChevronDownIcon, DownloadIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";

export const ElementReports = (): JSX.Element => {
  const reports = [
    { name: "Monthly Sales Report", date: "2023-05-01", status: "Completed" },
    { name: "Quarterly Performance Review", date: "2023-04-15", status: "Pending" },
    { name: "Annual Financial Statement", date: "2023-03-31", status: "Completed" },
    { name: "Customer Satisfaction Survey", date: "2023-05-10", status: "In Progress" },
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

        {/* Reports Content */}
        <div className="p-6">
          <h1 className="font-desktop-h4-semibold text-neutral-neutral-10 mb-6">Reports</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Available Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reports.map((report, index) => (
                    <TableRow key={index}>
                      <TableCell>{report.name}</TableCell>
                      <TableCell>{report.date}</TableCell>
                      <TableCell>{report.status}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <DownloadIcon className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="w-full h-20 bg-white fixed bottom-0 left-0 flex items-center justify-end pr-6">
          <Button variant="outline" className="h-10 px-4 bg-neutral-neutral-2 text-neutralneutral-6 border-[#dee2e6]">
            Generate New Report
          </Button>
        </div>
      </div>
    </div>
  );
};
