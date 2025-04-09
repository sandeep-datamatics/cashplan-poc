import {
  BuildingIcon,
  ChevronDownIcon,
  FilterIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

export const ElementOrganisations = (): JSX.Element => {
  // Organization data for the table
  const organizations = [
    {
      name: "Sanco Tech Pvt Ltd",
      sicCode: "Computer Software and Services",
      businessSector: "Software Development",
      employees: "110",
      id: "12790020",
    },
    {
      name: "Tech Mahindra Ltd",
      sicCode: "Prepackaged Software",
      businessSector: "Enterprise Software Solutions",
      employees: "100",
      id: "77896541",
    },
    {
      name: "Infosys Ltd",
      sicCode: "Computer Integrated Systems Design",
      businessSector: "Web Application Development",
      employees: "204",
      id: "25896314",
    },
    {
      name: "Wipro Ltd",
      sicCode: "Information Retrieval Services",
      businessSector: "Mobile App Development",
      employees: "230",
      id: "78965263",
    },
    {
      name: "HCL Technologies Ltd",
      sicCode: "Facilities Management Services",
      businessSector: "Cloud Software Development",
      employees: "120",
      id: "78451236",
    },
    {
      name: "TCS (Tata Consultancy Services) ",
      sicCode: "Rental and Leasing",
      businessSector: "Embedded Software Development",
      employees: "110",
      id: "95157553",
    },
    {
      name: "L&T Infotech Ltd",
      sicCode: "Computer Maintenance and Repair",
      businessSector: "Enterprise Software Solutions",
      employees: "140",
      id: "85359542",
    },
    {
      name: "Mindtree Ltd",
      sicCode: "Computer Related Services",
      businessSector: "Software Development",
      employees: "80",
      id: "36251478",
    },
    {
      name: "Persistent Systems Ltd",
      sicCode: "Prepackaged Software",
      businessSector: "Mobile App Development",
      employees: "50",
      id: "98743615",
    },
    {
      name: "Hexaware Technologies Ltd",
      sicCode: "Computer Software and Services",
      businessSector: "Web Application Development",
      employees: "100",
      id: "12657896",
    },
  ];

  return (
    <div className="bg-[#f3f6f8] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#f3f6f8] w-full max-w-[1366px] relative">
        {/* Header */}
        <header className="w-full h-14 bg-white shadow-[0px_1px_2px_#0000001a] flex items-center justify-between px-6">
          <div className="h-12 w-12">
            <div className="h-12 bg-[url(https://c.animaapp.com/m92l296mDNmnIE/img/vector.svg)] bg-[100%_100%]">
              <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m92l296mDNmnIE/img/mask-group.png)] bg-[100%_100%]">
                <div className="relative w-[45px] h-5 top-[5px] left-[3px] bg-[url(https://c.animaapp.com/m92l296mDNmnIE/img/mask-group-1.png)] bg-[100%_100%]" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10 bg-brandprimary-base rounded-full">
              <img
                className="w-10 h-10 object-cover"
                alt="User avatar"
                src="https://c.animaapp.com/m92l296mDNmnIE/img/image-1.png"
              />
            </Avatar>
            <div className="flex items-center gap-1">
              <span className="font-desktop-body-s text-neutralneutral-8">
                John Smith
              </span>
              <ChevronDownIcon className="w-8 h-8" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col w-full max-w-[1204px] mx-auto mt-[83px] gap-[22px] px-6">
          {/* Title and Create Button */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1">
              <BuildingIcon className="w-6 h-6" />
              <h1 className="font-desktop-h4-semibold text-neutral-neutral-10">
                Organisations
              </h1>
            </div>

            <Button className="bg-brandprimary-base text-neutral-neutral-0 h-10 px-4 rounded">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  alt="Add circle"
                  src="https://c.animaapp.com/m92l296mDNmnIE/img/add-circle-24dp-5f6368-fill1-wght400-grad0-opsz24--1--1.svg"
                />
                <span className="font-actions-s">Create New</span>
              </div>
            </Button>
          </div>

          {/* SearchIcon and FilterIcon */}
          <div className="flex items-center justify-between w-full">
            <div className="w-[688px]">
              <div className="relative">
                <Input
                  className="h-10 pl-10 bg-neutral-neutral-0 border-[#ced4da]"
                  placeholder="Search"
                />
                <SearchIcon className="absolute w-6 h-6 left-4 top-2 text-neutral-neutral-7" />
              </div>
            </div>

            <Button
              variant="outline"
              className="h-10 border-[#0079c8] text-brandprimary-base"
            >
              <FilterIcon className="w-6 h-6 mr-2" />
              <span className="font-actions-s">FilterIcon</span>
            </Button>
          </div>

          {/* Table */}
          <div className="w-full">
            <Table className="border border-solid border-[#ced4da] rounded overflow-hidden">
              <TableHeader>
                <TableRow className="bg-neutral-neutral-0 shadow-border-bottom">
                  <TableHead className="h-12 px-6 font-actions-s text-neutral-neutral-9">
                    <div className="flex items-center gap-2">
                      Organisation Name
                      <svg
                        className="w-4 h-4"
                        alt="Unsorted"
                        src="https://c.animaapp.com/m92l296mDNmnIE/img/unsorted.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="h-12 px-6 font-actions-s text-neutral-neutral-9">
                    <div className="flex items-center gap-2">
                      SIC Code
                      <svg
                        className="w-4 h-4"
                        alt="Unsorted"
                        src="https://c.animaapp.com/m92l296mDNmnIE/img/unsorted.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="h-12 px-6 font-actions-s text-neutral-neutral-9">
                    <div className="flex items-center gap-2">
                      Business Sector
                      <svg
                        className="w-4 h-4"
                        alt="Unsorted"
                        src="https://c.animaapp.com/m92l296mDNmnIE/img/unsorted.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="h-12 px-6 font-actions-s text-neutral-neutral-9">
                    <div className="flex items-center gap-2">
                      No of Employees
                      <svg
                        className="w-4 h-4"
                        alt="Unsorted"
                        src="https://c.animaapp.com/m92l296mDNmnIE/img/unsorted.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="h-12 px-6 font-actions-s text-neutral-neutral-9">
                    <div className="flex items-center gap-2">
                      Organisation ID
                      <svg
                        className="w-4 h-4"
                        alt="Unsorted"
                        src="https://c.animaapp.com/m92l296mDNmnIE/img/unsorted-1.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="w-[27px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {organizations.map((org, index) => (
                  <TableRow
                    key={org.id}
                    className={
                      index % 2 === 0
                        ? "bg-neutral-neutral-0"
                        : "bg-neutral-neutral-1"
                    }
                  >
                    <TableCell className="h-14 px-6">
                      <span className="font-desktop-body-s text-brandprimary-base underline">
                        {org.name}
                      </span>
                    </TableCell>
                    <TableCell className="h-14 px-6">
                      <span className="font-desktop-body-s text-neutral-neutral-9">
                        {org.sicCode}
                      </span>
                    </TableCell>
                    <TableCell className="h-14 px-6">
                      <span className="font-desktop-body-s text-neutral-neutral-9">
                        {org.businessSector}
                      </span>
                    </TableCell>
                    <TableCell className="h-14 px-6">
                      <span className="font-desktop-body-s text-neutral-neutral-9">
                        {org.employees}
                      </span>
                    </TableCell>
                    <TableCell className="h-14 px-6">
                      <span className="font-desktop-body-s text-neutral-neutral-9">
                        {org.id}
                      </span>
                    </TableCell>
                    <TableCell className="h-14 px-6">
                      <MoreHorizontalIcon className="w-6 h-6" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between w-full h-8">
            <div className="font-desktop-body-s text-neutral-neutral-7">
              1 to 10 of 65 items
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious className="h-8 w-8 p-0 border border-solid border-[#ced4da]" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    className="h-8 w-8 p-0 border border-solid border-[#0079c8] text-brandprimary-base"
                    isActive
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="h-8 w-8 p-0 border border-solid border-[#ced4da] text-neutralneutral-8">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="h-8 w-8 p-0 border border-solid border-[#ced4da] text-neutralneutral-8">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="h-8 w-8 p-0 border border-solid border-[#ced4da] text-neutralneutral-8">
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className="text-neutralneutral-8" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="h-8 w-8 p-0 border border-solid border-[#ced4da] text-neutralneutral-8">
                    10
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext className="h-8 w-8 p-0 border border-solid border-[#ced4da]" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </main>
      </div>
    </div>
  );
};
