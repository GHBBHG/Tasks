import { ComponentProps } from "react";

interface SelectProps extends ComponentProps<"select"> {
  label: string;
  options: {
    label: string;
    title: string;
  }[];
}

export const Select = ({ label, options, ...props }: SelectProps) => {
  return (
    <div className="flex flex-col gap-.5 mb-1">
      <label className="text-white font-medium">{label}</label>
      <select
        className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
        {...props}
      >
        <option label=""></option>
        {options.map((option) => (
          <option key={option.label} label={option.label}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};
