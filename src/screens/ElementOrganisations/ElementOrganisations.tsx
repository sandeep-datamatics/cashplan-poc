import { FilterIcon, PlusCircleIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { OrganisationsTableSection } from "./sections/OrganisationsTableSection/OrganisationsTableSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";

export const ElementOrganisations = (): JSX.Element => {
  return (
    <div className="bg-[#f3f6f8] flex flex-col min-h-screen w-full">
      <header className="w-full h-14 bg-white shadow-[0px_1px_2px_#0000001a] flex items-center justify-between px-5">
        <div className="flex items-center">
          <div className="w-12 h-12">
            <div className="h-12 bg-[url(https://c.animaapp.com/ZQ4runHm/img/vector.svg)] bg-[100%_100%]">
              <div className="w-12 h-12 bg-[url(https://c.animaapp.com/ZQ4runHm/img/mask-group@2x.png)] bg-[100%_100%]">
                <div className="relative w-[45px] h-5 top-[5px] left-[3px] bg-[url(https://c.animaapp.com/ZQ4runHm/img/mask-group-1@2x.png)] bg-[100%_100%]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10 bg-brandprimary-base rounded-full">
            <img
              className="w-full h-full object-cover"
              alt="User profile"
              src="https://c.animaapp.com/ZQ4runHm/img/image-1@2x.png"
            />
          </Avatar>

          <div className="flex items-center gap-1">
            <span className="font-desktop-body-s text-neutralneutral-8">
              John Smith
            </span>
            <img
              className="w-8 h-8"
              alt="Angle down"
              src="https://c.animaapp.com/ZQ4runHm/img/angle-down.svg"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 px-[83px] py-6">
        <div className="flex justify-between items-center mb-6">
          <div className="inline-flex items-center gap-1">
            <img
              className="w-6 h-6"
              alt="Organisation"
              src="https://c.animaapp.com/ZQ4runHm/img/organisation.svg"
            />
            <h1 className="font-desktop-h4-semibold text-neutral-neutral-10">
              Organisations
            </h1>
          </div>

          <Button className="bg-brandprimary-base text-neutral-neutral-0 h-10 px-4 rounded">
            <PlusCircleIcon className="w-6 h-6 mr-2" />
            <span className="font-actions-s">Create New</span>
          </Button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="w-full max-w-[688px]">
            <div className="relative">
              <Input
                className="h-10 pl-10 bg-neutral-neutral-0 border-neutral-neutral-5 rounded w-full"
                placeholder="Search"
              />
              <SearchIcon className="absolute w-[17px] h-[17px] left-4 top-1/2 transform -translate-y-1/2 text-neutral-neutral-7" />
            </div>
          </div>

          <Button
            variant="outline"
            className="h-10 px-4 bg-neutral-neutral-0 border-brandprimary-base text-brandprimary-base rounded"
          >
            <FilterIcon className="w-6 h-6 mr-2" />
            <span className="font-actions-s">FilterIcon</span>
          </Button>
        </div>

        <OrganisationsTableSection />

        <PaginationSection />
      </main>
    </div>
  );
};
