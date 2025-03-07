import { ComponentProps } from "react";

interface TextAreaProps extends ComponentProps<"textarea"> {
  label: string;
}

export const TextArea = ({ label, ...props }: TextAreaProps) => {
  return (
    <div className="flex flex-col gap-.5 mb-1">
      <label className="text-white font-medium">{label}</label>
      <textarea
        className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
        {...props}
      />
    </div>
  );
};
//twMerge
