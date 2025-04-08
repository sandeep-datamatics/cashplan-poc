import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const OrganisationsTableSection = (): JSX.Element => {
  const organisations = [
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
      name: "TCS (Tata Consultancy Services)",
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
    <div className="w-full bg-neutral-neutral-0 rounded overflow-hidden border border-solid border-neutral-neutral-5">
      <Table>
        <TableHeader>
          <TableRow className="bg-neutral-neutral-0 shadow-[inset_0px_-1px_0px_#ced4da]">
            {[
              "Organisation Name",
              "SIC Code",
              "Business Sector",
              "No of Employees",
              "Organisation ID",
            ].map((header, index) => (
              <TableHead
                key={index}
                className="h-12 font-actions-s text-neutral-neutral-9"
              >
                <div className="flex items-center gap-2">
                  {header}
                  <div className="relative w-4 h-4">
                    <img
                      className="absolute w-[7px] h-[9px] top-1 left-1"
                      alt="Unsorted"
                      src="https://c.animaapp.com/ZQ4runHm/img/unsorted-4.svg"
                    />
                  </div>
                </div>
              </TableHead>
            ))}
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {organisations.map((org, index) => (
            <TableRow
              key={org.id}
              className={
                index % 2 === 0
                  ? "bg-neutral-neutral-0"
                  : "bg-neutral-neutral-1"
              }
            >
              <TableCell className="h-14 py-0">
                <div className="text-brandprimary-base underline font-desktop-body-s">
                  {org.name}
                </div>
              </TableCell>
              <TableCell className="h-14 py-0">
                <div className="text-neutral-neutral-9 font-desktop-body-s">
                  {org.sicCode}
                </div>
              </TableCell>
              <TableCell className="h-14 py-0">
                <div className="text-neutral-neutral-9 font-desktop-body-s">
                  {org.businessSector}
                </div>
              </TableCell>
              <TableCell className="h-14 py-0">
                <div className="text-neutral-neutral-9 font-desktop-body-s">
                  {org.employees}
                </div>
              </TableCell>
              <TableCell className="h-14 py-0">
                <div className="text-neutral-neutral-9 font-desktop-body-s">
                  {org.id}
                </div>
              </TableCell>
              <TableCell className="h-14 py-0">
                <div className="flex items-center justify-center">
                  <img
                    className="w-6 h-6"
                    alt="More options"
                    src="https://c.animaapp.com/ZQ4runHm/img/more-horiz-24dp-5f6368-fill1-wght400-grad0-opsz24--1--1-9.svg"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
