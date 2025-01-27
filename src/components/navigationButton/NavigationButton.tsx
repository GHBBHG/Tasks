import { Link } from "react-router-dom";

export function NavigationButton (props: any) {
    return (
        <div className="bg-blue-300 pb-2">
            <div className="font-bold text-center pr-6 p-3">
                <Link to={props.linkButton}>{props.nameButton}</Link>
            </div>
        </div>
    );
}