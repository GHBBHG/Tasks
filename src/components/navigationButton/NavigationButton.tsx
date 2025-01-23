import { Link } from "react-router-dom";

export function NavigationButton (props) {
    return (
        <div className="bg-blue-300 pb-2">
            <div className="font-bold text-right pr-6">
                <Link to={props.linkButton}>{props.nameButton}</Link>
            </div>
        </div>
    );
}