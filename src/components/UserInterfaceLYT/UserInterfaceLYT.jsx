import "./UserInterfaceLYT.scss";
import Header from "../Header/Header";
import SBTemplates from "../SBTemplates/SBTemplates";
import SBNavigation from "../SBNavigation/SBNavigation"
import { Outlet } from "react-router-dom";

export default function UserInterfaceLYT() {
    return (
        <div className="interface">
            <Header />
            <div className="interface__structure">
                <div className="interface__structure-sidebar">
                    <SBNavigation />
                    <SBTemplates />
                </div>
                <div className="interface__structure-routes">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
