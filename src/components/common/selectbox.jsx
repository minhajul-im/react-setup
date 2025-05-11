import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const Control = ({ children, icon, ...props }) => {
  return (
    <components.Control {...props}>
      {icon && <span className="text-lg ml-2">{icon}</span>}
      {children}
    </components.Control>
  );
};

const IndicatorSeparator = () => null;

export const SelectBox = ({
  value,
  options,
  onChange,
  size = "md",
  isMulti = false,
  icon = "⚽",
  placeholder = "Select...",
  className = "w-full",
  customStyles = {},
  ...props
}) => {
  const heightMap = {
    lg: "40px",
    md: "36px",
    sm: "32px",
  };

  const height = heightMap[size] || heightMap.md;

  const defaultStyles = {
    control: (styles, state) => ({
      ...styles,
      backgroundColor:
        isMulti && state.isFocused
          ? "hsl(var(--secondary) / 0.1)"
          : state.isFocused
          ? "hsl(var(--secondary) / 0.2)"
          : "#fff",
      minHeight: height,
      height: height,
      fontSize: size === "sm" ? "12px" : "14px",
      borderRadius: "var(--radius)",
      paddingInlineStart: icon ? "0px" : "8px",
      border: state.isFocused
        ? "1px solid hsl(var(--primary))"
        : "1px solid border-gray-300",
      boxShadow: state.isFocused
        ? "0 0 0 2px hsl(var(--primary) / 0.2)"
        : "none",
      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        borderColor: state.isFocused
          ? "hsl(var(--primary))"
          : "border-gray-300",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: "none",
      color: state.isSelected
        ? "hsl(var(--primary-foreground))"
        : "hsl(var(--foreground))",
      backgroundColor: state.isSelected
        ? "hsl(var(--secondary))"
        : state.isFocused
        ? "hsl(var(--secondary) / 0.5)"
        : "#fff",
      cursor: "pointer",
      fontSize: size === "sm" ? "12px" : "14px",
      padding: "8px 12px",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      borderRadius: "var(--radius)",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      zIndex: 1000,
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    multiValue: (provided) => ({
      ...provided,
      ...(isMulti && {
        backgroundColor: "hsl(var(--primary) / 0.2)",
        borderRadius: "calc(var(--radius) / 2)",
      }),
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      ...(isMulti && {
        color: "hsl(var(--primary))",
        fontWeight: "medium",
      }),
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      ...(isMulti && {
        color: "hsl(var(--primary))",
        ":hover": {
          backgroundColor: "hsl(var(--destructive))",
          color: "hsl(var(--destructive-foreground))",
        },
      }),
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "hsl(var(--muted-foreground))",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "hsl(var(--foreground))",
    }),
  };

  const propCustomStyles = {
    control: (styles, state) => ({
      borderRadius: "var(--radius)",
      backgroundColor: state.isFocused ? "hsl(var(--secondary) / 0.2)" : "#fff",
    }),
    option: (provided, state) => ({
      fontWeight: state.isSelected ? "bold" : "normal",
      backgroundColor: state.isSelected
        ? "hsl(var(--primary))"
        : state.isFocused
        ? "hsl(var(--secondary) / 0.3)"
        : "#fff",
    }),
  };

  const mergedStyles = {
    ...defaultStyles,
    ...propCustomStyles,
    ...customStyles,
    control: (styles, state) => ({
      ...defaultStyles.control(styles, state),
      ...propCustomStyles.control?.(styles, state),
      ...customStyles.control?.(styles, state),
    }),
    option: (provided, state) => ({
      ...defaultStyles.option(provided, state),
      ...propCustomStyles.option?.(provided, state),
      ...customStyles.option?.(provided, state),
    }),
    menu: (provided) => ({
      ...defaultStyles.menu(provided),
      ...propCustomStyles.menu?.(provided),
      ...customStyles.menu?.(provided),
    }),
    menuPortal: (base) => ({
      ...defaultStyles.menuPortal(base),
      ...propCustomStyles.menuPortal?.(base),
      ...customStyles.menuPortal?.(base),
    }),
    multiValue: (provided) => ({
      ...defaultStyles.multiValue(provided),
      ...propCustomStyles.multiValue?.(provided),
      ...customStyles.multiValue?.(provided),
    }),
    multiValueLabel: (provided) => ({
      ...defaultStyles.multiValueLabel(provided),
      ...propCustomStyles.multiValueLabel?.(provided),
      ...customStyles.multiValueLabel?.(provided),
    }),
    multiValueRemove: (provided) => ({
      ...defaultStyles.multiValueRemove(provided),
      ...propCustomStyles.multiValueRemove?.(provided),
      ...customStyles.multiValueRemove?.(provided),
    }),
    placeholder: (provided) => ({
      ...defaultStyles.placeholder(provided),
      ...propCustomStyles.placeholder?.(provided),
      ...customStyles.placeholder?.(provided),
    }),
    singleValue: (provided) => ({
      ...defaultStyles.singleValue(provided),
      ...propCustomStyles.singleValue?.(provided),
      ...customStyles.singleValue?.(provided),
    }),
  };

  return (
    <Select
      components={{
        Control: (props) => <Control {...props} icon={icon} />,
        IndicatorSeparator,
        ...animatedComponents,
      }}
      styles={mergedStyles}
      menuPortalTarget={document.body}
      menuShouldScrollIntoView={true}
      className={`select-box ${className}`}
      classNamePrefix="select"
      isMulti={isMulti}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};
