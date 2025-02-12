import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  theme: string;
}

export const Header = ({ theme }: HeaderProps) => {
  const [headerBg, setHeaderBg] = useState("bg-neutral-200");

  if (theme === "dark" && headerBg === "bg-neutral-200") {
    setHeaderBg("bg-neutral-950 text-white");
  }

  return (
    <>
      <div
        className={`${headerBg} h-24 flex items-center p-8 text-4xl font-medium`}
      >
        <Link to="/">GHB</Link>
      </div>
    </>
  );
};
