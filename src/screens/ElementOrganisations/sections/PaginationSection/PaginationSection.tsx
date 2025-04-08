import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../components/ui/pagination";

export const PaginationSection = (): JSX.Element => {
  const paginationData = {
    currentPage: 1,
    totalItems: 65,
    itemsPerPage: 10,
    totalPages: 10,
    visiblePages: [1, 2, 3, 4],
  };

  return (
    <div className="w-full flex justify-between items-center py-2">
      <div className="font-desktop-body-s text-neutral-neutral-7">
        1 to 10 of 65 items
      </div>

      <Pagination>
        <PaginationContent className="flex items-center gap-2">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="h-8 w-8 p-0 flex items-center justify-center bg-neutral-neutral-0 border border-neutral-neutral-5 rounded"
              aria-label="Go to previous page"
            >
              <img
                className="w-6 h-6"
                alt="Previous page"
                src="https://c.animaapp.com/ZQ4runHm/img/icons---angle-left.svg"
              />
            </PaginationPrevious>
          </PaginationItem>

          {paginationData.visiblePages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                className={`h-8 w-8 p-0 flex items-center justify-center bg-neutral-neutral-0 rounded border border-solid ${
                  page === paginationData.currentPage
                    ? "border-brandprimary-base text-brandprimary-base"
                    : "border-neutral-neutral-5 text-neutral-neutral-8"
                }`}
                isActive={page === paginationData.currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <span className="text-neutral-neutral-8 font-desktop-body-s">
              ...
            </span>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              href="#"
              className="h-8 w-8 p-0 flex items-center justify-center bg-neutral-neutral-0 rounded border border-solid border-neutral-neutral-5 text-neutral-neutral-8"
            >
              10
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              href="#"
              className="h-8 w-8 p-0 flex items-center justify-center bg-neutral-neutral-0 border border-neutral-neutral-5 rounded"
              aria-label="Go to next page"
            >
              <img
                className="w-6 h-6"
                alt="Next page"
                src="https://c.animaapp.com/ZQ4runHm/img/icons---angle-right.svg"
              />
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
