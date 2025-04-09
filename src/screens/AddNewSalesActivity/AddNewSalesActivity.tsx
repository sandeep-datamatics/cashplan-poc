import React from "react";
import { ChevronLeftIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";

export const AddNewSalesActivity: React.FC = () => {
  return (
    <div className="bg-[#f3f6f8] min-h-screen">
      <header className="bg-white h-14 flex items-center px-6 shadow-[0px_1px_2px_#0000001a]">
        <Button variant="ghost" size="icon" className="mr-4">
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>
        <h1 className="text-[22px] font-medium text-[#101213]">Add New Sales Activity</h1>
      </header>

      <main className="max-w-[688px] mx-auto mt-8 px-6">
        <form className="bg-white rounded-lg p-6 shadow-[0px_1px_3px_#0000001a]">
          <div className="space-y-6">
            <div>
              <label htmlFor="activity-type" className="block text-sm font-medium text-[#4f575e] mb-1">Activity Type</label>
              <Select>
                <SelectTrigger id="activity-type" className="w-full">
                  <SelectValue placeholder="Select activity type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="call">Call</SelectItem>
                  <SelectItem value="meeting">Meeting</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="activity-date" className="block text-sm font-medium text-[#4f575e] mb-1">Activity Date</label>
              <Input type="date" id="activity-date" className="w-full" />
            </div>

            <div>
              <label htmlFor="activity-time" className="block text-sm font-medium text-[#4f575e] mb-1">Activity Time</label>
              <Input type="time" id="activity-time" className="w-full" />
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-[#4f575e] mb-1">Duration</label>
              <div className="flex items-center">
                <Input type="number" id="duration" className="w-full" placeholder="Enter duration" />
                <Select defaultValue="minutes">
                  <SelectTrigger className="w-[120px] ml-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minutes">Minutes</SelectItem>
                    <SelectItem value="hours">Hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label htmlFor="assigned-to" className="block text-sm font-medium text-[#4f575e] mb-1">Assigned To</label>
              <Select>
                <SelectTrigger id="assigned-to" className="w-full">
                  <SelectValue placeholder="Select team member" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john-doe">John Doe</SelectItem>
                  <SelectItem value="jane-smith">Jane Smith</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-[#4f575e] mb-1">Notes</label>
              <Textarea id="notes" className="w-full h-32" placeholder="Enter activity notes" />
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-4">
            <Button variant="outline" className="px-6">Cancel</Button>
            <Button className="px-6">Save</Button>
          </div>
        </form>
      </main>
    </div>
  );
};
