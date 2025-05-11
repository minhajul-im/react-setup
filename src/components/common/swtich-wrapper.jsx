import { useEffect, useState } from "react";

export const SwitchboxWrapper = ({
  label,
  size = "md",
  onSwitch,
  checked = false,
  isDisabled = false,
  className,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onSwitch?.(newValue);
  };

  const sizes = {
    sm: "w-[28px] h-4 after:w-3 after:h-3 after:left-[2px] after:right-auto",
    md: "w-9 h-5 after:w-3.5 after:h-3.5 after:left-[4px] after:right-auto",
    lg: "w-11 h-6 after:w-5 after:h-5 after:left-[2px] after:right-auto",
  };

  return (
    <label
      className={`inline-flex items-center gap-3 cursor-pointer ${
        className || ""
      }`}>
      <input
        type="checkbox"
        disabled={isDisabled}
        className="sr-only peer"
        checked={isChecked}
        onChange={handleToggle}
      />
      <div
        className={`relative shadow bg-gray-200 rounded-full peer-checked:bg-primary
          peer-focus:outline-none peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
          after:content-[''] after:absolute after:top-1/2 after:left-[2px] after:-translate-y-1/2
          after:bg-white after:rounded-full after:transition-all after:border after:border-gray-300
          ${sizes[size]}`}></div>
      {label && (
        <span className="text-xs font-medium text-gray-600">{label}</span>
      )}
    </label>
  );
};
