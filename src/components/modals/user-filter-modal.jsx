import { useState } from "react";
import { Field } from "@/components/common/field";
import { SelectBox } from "@/components/common/selectbox";
import { DateRangesWrapper } from "@/components/common/daterange-wrapper";
import { RiResetLeftFill } from "react-icons/ri";
import { Filter } from "lucide-react";
import { Button } from "../ui/button";

const roles = [
  { value: "admin", label: "Admin" },
  { value: "supervisor", label: "Supervisor" },
  { value: "manager", label: "Manager" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
];

export const UserFilterModal = () => {
  const [filters, setFilters] = useState({
    role: null,
  });
  const from = new Date();
  const to = new Date();

  const [dates, setDates] = useState({ from, to });

  const handleDateSelect = ({ from, to }) => {
    setDates({ from, to });
  };

  const handleChange = (option, key) => {
    setFilters((prevState) => {
      if (key === "role") {
        return {
          ...prevState,
          role: option,
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
        <Field>
          <SelectBox
            options={roles}
            value={filters?.role}
            onChange={(selectedOption) => handleChange(selectedOption, "role")}
            placeholder="Select role"
            size="md"
            isClearable
            isSearchable
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
          onDateSelect={handleDateSelect}
        />
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
