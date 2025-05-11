import React, { useState } from "react";
import { Field } from "../common/field";
import { DateRangesWrapper } from "../common/daterange-wrapper";
import { SelectBox } from "../common/selectbox";
import { Filter } from "lucide-react";
import { RiResetLeftFill } from "react-icons/ri";
import { Button } from "../ui/button";

const priorityList = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];
const ticketStatusList = [
  { value: "open", label: "Open" },
  { value: "in_progress", label: "In Progress" },
  { value: "pending", label: "Pending" },
  { value: "replyed", label: "Replyed" },
  { value: "resolved", label: "Resolved" },
];

export const TicketFilterModal = () => {
  const [filters, setFilters] = useState({
    priority: null,
    status: null,
  });
  const from = new Date();
  const to = new Date();

  const [dates, setDates] = useState({ from, to });

  const handleDateSelect = ({ from, to }) => {
    setDates({ from, to });
  };

  const handleChange = (option, key) => {
    setFilters((prevState) => {
      if (key === "priority") {
        return {
          ...prevState,
          priority: option,
        };
      }
      if (key === "status") {
        return {
          ...prevState,
          status: option,
        };
      }

      return prevState;
    });
  };
  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <Field>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search name by user"
            className="form-control input-md"
          />
        </Field>
      </div>
      <div>
        <DateRangesWrapper
          date={{
            from: dates.from,
            to: dates.to,
          }}
          className="w-full"
          isDoubleCalender={true}
          onDateSelect={handleDateSelect}
        />
      </div>

      <div>
        <Field>
          <SelectBox
            options={priorityList}
            value={filters?.priority}
            onChange={(selectedOption) =>
              handleChange(selectedOption, "priority")
            }
            placeholder="Select Priority"
            size="md"
          />
        </Field>
      </div>
      <div>
        <Field>
          <SelectBox
            options={ticketStatusList}
            value={filters?.status}
            onChange={(selectedOption) =>
              handleChange(selectedOption, "status")
            }
            placeholder="Select Status"
            size="md"
          />
        </Field>
      </div>

      <div className="flex justify-between gap-4 items-center">
        <Button className="btn-md btn-danger-outline w-full">
          <RiResetLeftFill className="h-4 w-4" />
          <span className="hidden sm:inline">Reset</span>
        </Button>
        <Button className="btn-md btn-primary w-full">
          <Filter className="h-4 w-4" />
          <span className="hidden sm:inline">Filter</span>
        </Button>
      </div>
    </div>
  );
};
