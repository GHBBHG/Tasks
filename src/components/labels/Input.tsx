import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-.5 mb-1">
      <label className="text-white font-medium">{label}</label>
      <input
        className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
        {...props}
      />
    </div>
  );
};
