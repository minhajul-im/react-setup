import { DateRangesWrapper } from "@/components/common/daterange-wrapper";
import { Field } from "@/components/common/field";
import { HeaderWithBreadcrumb } from "@/components/common/header-breadcrumb";
import { ModalWrapper } from "@/components/common/modal-wrapper";
import { SelectBox } from "@/components/common/selectbox";
import { SwitchboxWrapper } from "@/components/common/swtich-wrapper";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { FaEdit, FaTrash, FaCheck, FaHome } from "react-icons/fa";

export const ShowcaseUtilities = () => {
  return (
    <section className="flex flex-col gap-6">
      <HeaderWithBreadcrumb
        title="Admin Dashboard"
        breadcrumbs={[{ title: "dashboard" }]}
      />
      <ButtonShowcaseExample />

      <DateRangesExample />

      <ModalExaple />
      <SelectBoxExample />
      <BadgeShowcase />
    </section>
  );
};

const ModalExaple = () => {
  const modalRef = useRef();
  const [modalConfig, setModalConfig] = useState({
    type: "",
    title: "",
    size: "",
    data: null,
  });
  const handleShowModal = (type, title, size, data = null) => {
    setModalConfig({ type, title, size, data });
    modalRef?.current?.open();
  };
  const handleHideModal = () => {
    setModalConfig({ type: "", title: "", size: "", data: null });
    modalRef?.current?.close();
  };
  return (
    <>
      <div>
        <Button
          className="btn-md btn-primary"
          onClick={() => handleShowModal("EXAMPLE", "Modal", "max-w-xl", null)}>
          Modal
        </Button>
      </div>
      <ModalWrapper
        ref={modalRef}
        title={modalConfig.title}
        width={modalConfig.size}
        onHide={handleHideModal}>
        {modalConfig.type === "EXAMPLE" && (
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            inventore hic nisi commodi ratione iusto nihil quaerat nesciunt
            repudiandae quisquam illo, aliquid explicabo tenetur odio nulla.
            Asperiores provident debitis ut. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quidem inventore hic nisi commodi
            ratione iusto nihil quaerat nesciunt repudiandae quisquam illo,
            aliquid explicabo tenetur odio nulla. Asperiores provident debitis
            ut.
          </div>
        )}
      </ModalWrapper>
    </>
  );
};

const DateRangesExample = () => {
  const from = new Date();
  const to = new Date();

  const [dates, setDates] = useState({ from, to });

  const handleDateSelect = ({ from, to }) => {
    setDates({ from, to });
  };
  return (
    <div className="my-10">
      <DateRangesWrapper
        date={{
          from: dates.from,
          to: dates.to,
        }}
        isDoubleCalender={true}
        onDateSelect={handleDateSelect}
      />
    </div>
  );
};

const ButtonShowcaseExample = () => {
  return (
    <div className="space-y-8 p-6">
      {/* === Solid Buttons === */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Solid Buttons</h2>
        <div className="flex gap-3 flex-wrap">
          <Button className="btn-md btn-primary">Primary</Button>
          <Button className="btn-md btn-success">Success</Button>
          <Button className="btn-md btn-danger">Danger</Button>
          <Button className="btn-md btn-warning">Warning</Button>
          <Button className="btn-md btn-info">Info</Button>
          <Button className="btn-md btn-dark">Dark</Button>
        </div>
      </section>

      {/* === Soft Buttons === */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Soft Buttons</h2>
        <div className="flex gap-3 flex-wrap">
          <Button className="btn-md btn-primary-soft">Primary Soft</Button>
          <Button className="btn-md btn-success-soft">Success Soft</Button>
          <Button className="btn-md btn-danger-soft">Danger Soft</Button>
          <Button className="btn-md btn-warning-soft">Warning Soft</Button>
          <Button className="btn-md btn-info-soft">Info Soft</Button>
        </div>
      </section>

      {/* === Outline Buttons === */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Outline Buttons</h2>
        <div className="flex gap-3 flex-wrap">
          <Button className="btn-md btn-primary-outline">
            Primary Outline
          </Button>
          <Button className="btn-md btn-success-outline">
            Success Outline
          </Button>
          <Button className="btn-md btn-danger-outline">Danger Outline</Button>
          <Button className="btn-md btn-warning-outline">
            Warning Outline
          </Button>
          <Button className="btn-md btn-info-outline">Info Outline</Button>
          <Button className="btn-md btn-dark-outline">Dark Outline</Button>
        </div>
      </section>

      {/* === Icon Buttons with Tooltip === */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Icon Buttons (With Tooltip)
        </h2>
        <div className="flex gap-3 flex-wrap">
          <Button
            iconBtn
            icon={FaHome}
            tooltipText="Home"
            className="icon-btn primary-soft"
          />
          <Button
            iconBtn
            icon={FaTrash}
            tooltipText="Delete"
            className="icon-btn danger-soft"
          />
          <Button
            iconBtn
            icon={FaCheck}
            tooltipText="Confirm"
            className="icon-btn success-soft"
          />
        </div>
      </section>

      {/* === Loading Buttons === */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Loading Buttons</h2>
        <div className="flex gap-3 flex-wrap">
          <Button isLoading className="btn btn-md btn-primary">
            Saving...
          </Button>
          <Button isLoading className="btn btn-md btn-success">
            Submitting...
          </Button>
        </div>
      </section>

      {/* === Link Buttons === */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Link Buttons</h2>
        <div className="flex gap-3 flex-wrap">
          <Button href="/profile" className="btn btn-md btn-primary">
            Go to Profile
          </Button>
          <Button
            href="/dashboard"
            iconBtn
            icon={FaHome}
            tooltipText="Dashboard"
            className="icon-btn primary-soft"
          />
        </div>
      </section>

      {/* === Size Variants === */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
        <div className="flex gap-3 flex-wrap">
          <Button className="btn-sm btn-primary">Small</Button>
          <Button className="btn-md btn-primary">Medium</Button>
          <Button className="btn-lg btn-primary">Large</Button>
          <Button className="btn-xl btn-primary">Extra Large</Button>
        </div>
      </section>
    </div>
  );
};
const countryList = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "GB", label: "United Kingdom" },
  { value: "AU", label: "Australia" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "IN", label: "India" },
  { value: "JP", label: "Japan" },
  { value: "BR", label: "Brazil" },
  { value: "ZA", label: "South Africa" },
];

const stateOptions = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AS", label: "American Samoa" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District Of Columbia" },
  { value: "FM", label: "Federated States Of Micronesia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "GU", label: "Guam" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
];

const SelectBoxExample = () => {
  const [selectCountry, setSelectCountry] = useState({
    country_id: null,
    state_ids: [],
  });

  const handleSelectCountry = (option, key) => {
    setSelectCountry((prevState) => {
      if (key === "country_id") {
        return {
          ...prevState,
          country_id: option,
        };
      }
      if (key === "state_ids") {
        return {
          ...prevState,
          state_ids: option || [],
        };
      }
      return prevState;
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <Field label={"Multi Select"} required>
        <SelectBox
          isMulti
          options={stateOptions}
          value={selectCountry?.state_ids}
          onChange={(selectedOptions) =>
            handleSelectCountry(selectedOptions, "state_ids")
          }
          placeholder="Select states..."
          size="lg"
          isClearable
          isSearchable
        />
      </Field>
      <Field label={"Single Select"} required>
        <SelectBox
          options={countryList}
          value={selectCountry?.country_id}
          onChange={(selectedOption) =>
            handleSelectCountry(selectedOption, "country_id")
          }
          placeholder="Select a menu..."
          size="md"
        />
      </Field>

      <Field label="Search Box" htmlFor={"searchBox"} required>
        <input
          required
          type="search"
          name="searchBox"
          id="searchBox"
          className="form-control input-md"
          placeholder="Search here"
        />
      </Field>

      <Field label="Switch box" required>
        <SwitchboxWrapper />
      </Field>

      <div>
        <Field label="Checkbox" htmlFor="checkbox" required>
          <input required type="checkbox" name="checkbox" id="checkbox" />
        </Field>
      </div>
      <div>
        <Field label="Radio" htmlFor="radio" required>
          <input required type="radio" name="radio" id="radio" />
        </Field>
      </div>
    </div>
  );
};

const BadgeShowcase = () => {
  return (
    <div className="space-y-6">
      {/* Primary Badges */}
      <div>
        <h2 className="text-base font-semibold mb-3">Primary Badges</h2>
        <div className="flex flex-wrap gap-3">
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-primary-soft">Primary Soft</span>
          <span className="badge badge-primary-outline">Primary Outline</span>
        </div>
      </div>

      {/* Success Badges */}
      <div>
        <h2 className="text-base font-semibold mb-3">Success Badges</h2>
        <div className="flex flex-wrap gap-3">
          <span className="badge badge-success">Success</span>
          <span className="badge badge-success-soft">Success Soft</span>
          <span className="badge badge-success-outline">Success Outline</span>
        </div>
      </div>

      {/* Danger Badges */}
      <div>
        <h2 className="text-base font-semibold mb-3">Danger Badges</h2>
        <div className="flex flex-wrap gap-3">
          <span className="badge badge-danger">Danger</span>
          <span className="badge badge-danger-soft">Danger Soft</span>
          <span className="badge badge-danger-outline">Danger Outline</span>
        </div>
      </div>

      {/* Warning Badges */}
      <div>
        <h2 className="text-base font-semibold mb-3">Warning Badges</h2>
        <div className="flex flex-wrap gap-3">
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-warning-soft">Warning Soft</span>
          <span className="badge badge-warning-outline">Warning Outline</span>
        </div>
      </div>

      {/* Info Badges */}
      <div>
        <h2 className="text-base font-semibold mb-3">Info Badges</h2>
        <div className="flex flex-wrap gap-3">
          <span className="badge badge-info">Info</span>
          <span className="badge badge-info-soft">Info Soft</span>
          <span className="badge badge-info-outline">Info Outline</span>
        </div>
      </div>
    </div>
  );
};
