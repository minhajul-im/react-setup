import React from "react";
import { useState } from "react";
import { Field } from "@/components/common/field";
import { SelectBox } from "@/components/common/selectbox";
import { DateRangesWrapper } from "@/components/common/daterange-wrapper";
import { RiResetLeftFill } from "react-icons/ri";
import { Filter } from "lucide-react";
import { Button } from "../ui/button";

export const ProductFilterModal = () => {
  const [filters, setFilters] = useState({
    stock: null,
  });
  const from = new Date();
  const to = new Date();

  const [dates, setDates] = useState({ from, to });

  const handleDateSelect = ({ from, to }) => {
    setDates({ from, to });
  };

  const handleChange = (option, key) => {
    setFilters((prevState) => {
      if (key === "stock") {
        return {
          ...prevState,
          stock: option,
        };
      }
      return prevState;
    });
  };
  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <Field label="Search by Product name">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search by Product name"
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
          onDateSelect={handleDateSelect}
        />
      </div>
      <div>
        <Field>
          <SelectBox
            options={stockOption}
            value={filters?.stock}
            onChange={(selectedOption) => handleChange(selectedOption, "stock")}
            placeholder="Select role"
            size="lg"
          />
        </Field>
      </div>

      <div className="flex justify-between gap-4 items-center">
        <Button className="btn-lg btn-danger-outline w-full">
          <RiResetLeftFill className="h-4 w-4" />
          <span className="hidden sm:inline">Reset</span>
        </Button>
        <Button className="btn-lg btn-primary w-full">
          <Filter className="h-4 w-4" />
          <span className="hidden sm:inline">Filter</span>
        </Button>
      </div>
    </div>
  );
};

const stockOption = [
  { label: "In Stock", value: "1" },
  { label: "Out of Stock", value: "2" },
];
