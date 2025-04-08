import {
  ChevronDownIcon,
  EditIcon,
  MoreHorizontalIcon,
  PlusCircleIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export const ElementOrganisation = (): JSX.Element => {
  // Organization details data
  const organizationDetails = [
    { label: "SIC Code", value: "Computer Software and Services" },
    { label: "Business Sector", value: "Software Development" },
    { label: "No of Employees", value: "100" },
    { label: "Organisation ID", value: "12792009009" },
  ];

  // Contacts data
  const contacts = [
    {
      name: "Pallavi Ghosh",
      roles:
        "Group Secretary, Legal Secretary, Corporate Affairs Manager,Compliance Officer",
      from: "09/06/2016",
      to: "09/06/2025",
      contact: "+91 9874563215",
    },
    {
      name: "Arun Sampath",
      roles: "Assistant Company Secretary",
      from: "20/03/2015",
      to: "20/03/2025",
      contact: "+91 6589741232",
    },
    {
      name: "John Samual",
      roles: "Board Secretary",
      from: "12/04/2010",
      to: "18/04/2025",
      contact: "+91 6589741232",
    },
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

        {/* Breadcrumb */}
        <div className="flex items-center px-6 py-4 mt-6 ml-[77px]">
          <div className="flex items-center text-brandprimary-base font-desktop-body-s">
            <span>Organisations</span>
            <ChevronDownIcon className="w-6 h-6" />
          </div>
          <span className="ml-2.5 text-neutral-neutral-7 font-desktop-body-s">
            Organisation Details
          </span>
        </div>

        {/* Organization Title */}
        <div className="ml-[86px] mt-4">
          <h1 className="font-desktop-h4-semibold text-neutral-neutral-10">
            Techno Wizards
          </h1>
        </div>

        {/* Organization Details Card */}
        <Card className="mx-[86px] mt-4 border border-[#ced4da] rounded">
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <CardTitle className="font-m3-title-medium">Contacts</CardTitle>
            <Button variant="ghost" size="icon">
              <EditIcon className="h-6 w-6" />
            </Button>
          </CardHeader>
          <Separator />
          <CardContent className="pt-5">
            <div className="flex items-center gap-[100px]">
              {organizationDetails.map((detail, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-neutralneutral-8 font-desktop-body-s">
                    {detail.label}
                  </span>
                  <span className="text-neutral-neutral-9 font-desktop-body-s">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs and Table */}
        <Card className="mx-[86px] mt-4 border border-[#ced4da] rounded">
          <Tabs defaultValue="contacts">
            <TabsList className="w-[682px] h-[55px] bg-transparent">
              <TabsTrigger
                value="contacts"
                className="w-[227px] h-[55px] data-[state=active]:border-b-2 data-[state=active]:border-brandprimary-base data-[state=active]:font-actions-s data-[state=active]:text-neutral-neutral-9 data-[state=inactive]:text-neutral-neutral-7 data-[state=inactive]:font-desktop-body-s rounded-none"
              >
                Contacts
                <Badge className="ml-1 bg-semanticwarningbase text-neutral-neutral-0 rounded-full w-6 h-6 flex items-center justify-center">
                  3
                </Badge>
              </TabsTrigger>
              <TabsTrigger
                value="sales"
                className="w-[227px] h-[55px] data-[state=active]:border-b-2 data-[state=active]:border-brandprimary-base data-[state=inactive]:border-b data-[state=inactive]:border-neutral-neutral-5 data-[state=inactive]:text-neutral-neutral-7 font-desktop-body-s rounded-none"
              >
                Sales Activities
              </TabsTrigger>
              <TabsTrigger
                value="prospect"
                className="w-[227px] h-[55px] data-[state=active]:border-b-2 data-[state=active]:border-brandprimary-base data-[state=inactive]:border-b data-[state=inactive]:border-neutral-neutral-5 data-[state=inactive]:text-neutral-neutral-7 font-desktop-body-s rounded-none"
              >
                Prospect Details
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contacts" className="mt-0">
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <h3 className="font-phone-h5-semibold text-black">
                    Contacts
                  </h3>
                  <Badge className="bg-semanticwarningbase text-neutral-neutral-0 rounded-full w-6 h-6 flex items-center justify-center">
                    3
                  </Badge>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-[407px]">
                    <div className="relative">
                      <SearchIcon className="absolute left-4 top-3 h-[17px] w-[17px] text-neutral-neutral-7" />
                      <Input
                        className="pl-10 h-10 border-[#ced4da]"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px] h-10 border-[#ced4da]">
                      <SelectValue placeholder="Filter By Roles" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Filter options would go here */}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px] h-10 border-[#ced4da]">
                      <SelectValue placeholder="Filter By History" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Filter options would go here */}
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    className="border-[#0079c8] text-brandprimary-base"
                  >
                    <PlusCircleIcon className="mr-2 h-6 w-6" />
                    Add New
                  </Button>
                </div>
              </div>
              <Separator />
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[204px] h-12 font-actions-s text-neutral-neutral-9 px-6">
                      Name
                      <img
                        className="inline-block ml-2 w-4 h-4"
                        alt="Sort"
                        src="https://c.animaapp.com/m98irfa1pZG1GI/img/unsorted.svg"
                      />
                    </TableHead>
                    <TableHead className="w-[414px] h-12 font-actions-s text-neutral-neutral-9 px-6">
                      Roles
                      <img
                        className="inline-block ml-2 w-4 h-4"
                        alt="Sort"
                        src="https://c.animaapp.com/m98irfa1pZG1GI/img/unsorted.svg"
                      />
                    </TableHead>
                    <TableHead className="w-[152px] h-12 font-actions-s text-neutral-neutral-9 px-6">
                      From
                      <img
                        className="inline-block ml-2 w-4 h-4"
                        alt="Sort"
                        src="https://c.animaapp.com/m98irfa1pZG1GI/img/unsorted.svg"
                      />
                    </TableHead>
                    <TableHead className="w-[152px] h-12 font-actions-s text-neutral-neutral-9 px-6">
                      To
                      <img
                        className="inline-block ml-2 w-4 h-4"
                        alt="Sort"
                        src="https://c.animaapp.com/m98irfa1pZG1GI/img/unsorted.svg"
                      />
                    </TableHead>
                    <TableHead className="w-[213px] h-12 font-actions-s text-neutral-neutral-9 px-6">
                      Contact
                      <img
                        className="inline-block ml-2 w-4 h-4"
                        alt="Sort"
                        src="https://c.animaapp.com/m98irfa1pZG1GI/img/unsorted-1.svg"
                      />
                    </TableHead>
                    <TableHead className="w-[63px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((contact, index) => (
                    <TableRow
                      key={index}
                      className={
                        index % 2 === 1
                          ? "bg-neutral-neutral-1"
                          : "bg-neutral-neutral-0"
                      }
                    >
                      <TableCell className="px-6 py-2.5 h-14">
                        <a
                          href="#"
                          className="text-brandprimary-base font-desktop-body-s underline"
                        >
                          {contact.name}
                        </a>
                      </TableCell>
                      <TableCell className="px-6 py-2.5 h-14 font-desktop-body-s text-neutral-neutral-9">
                        {contact.roles}
                      </TableCell>
                      <TableCell className="px-6 py-2.5 h-14 font-desktop-body-s text-neutral-neutral-9">
                        {contact.from}
                      </TableCell>
                      <TableCell className="px-6 py-2.5 h-14 font-desktop-body-s text-neutral-neutral-9">
                        {contact.to}
                      </TableCell>
                      <TableCell className="px-6 py-2.5 h-14 font-desktop-body-s text-neutral-neutral-9">
                        {contact.contact}
                      </TableCell>
                      <TableCell className="px-6 py-2.5 h-14">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontalIcon className="h-6 w-6" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="sales">
              {/* Sales Activities content would go here */}
            </TabsContent>

            <TabsContent value="prospect">
              {/* Prospect Details content would go here */}
            </TabsContent>
          </Tabs>
        </Card>

        {/* Footer with Save button */}
        <div className="w-full h-20 bg-white fixed bottom-0 left-0 flex items-center justify-end pr-6">
          <Button
            variant="outline"
            className="h-10 px-4 bg-neutral-neutral-2 text-neutralneutral-6 border-[#dee2e6]"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
