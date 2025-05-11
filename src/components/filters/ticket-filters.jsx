import React from "react";
import { Field } from "@/components/common/field";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { RiResetLeftFill } from "react-icons/ri";

export const TicketFilters = ({ onOpenModal }) => {
  return (
    <div className="flex justify-between items-center mb-6 gap-4 lg:gap-6">
      <div className="relative flex-1">
        <Field>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Ticket"
            className="form-control input-md"
          />
        </Field>
      </div>
      <div className="flex items-center gap-4">
        <Button className="btn-md btn-danger-outline">
          <RiResetLeftFill className="h-4 w-4" />
          <span className="hidden sm:inline">Reset</span>
        </Button>
        <Button onClick={onOpenModal} className="btn-md btn-primary-outline">
          <Filter className="h-4 w-4" />
          <span className="hidden sm:inline">Filter</span>
        </Button>
      </div>
    </div>
  );
};
