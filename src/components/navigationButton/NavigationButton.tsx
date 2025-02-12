import { Link } from "react-router-dom";

interface NavigationButtonProps {
  linkButton: string;
  nameButton: string;
}

export function NavigationButton({
  linkButton,
  nameButton,
}: NavigationButtonProps) {
  return (
    <div className="bg-blue-300 pb-2">
      <div className="font-bold text-center pr-6 p-3">
        <Link to={linkButton}>{nameButton}</Link>
      </div>
    </div>
  );
}
