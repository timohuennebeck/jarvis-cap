import "./UserInterfaceLYT.scss";
import Header from "../Header/Header";
import SBNavigation from "../SBNavigation/SBNavigation";
import { Outlet } from "react-router-dom";

export default function UserInterfaceLYT() {
    return (
        <div className="interface">
            <Header />
            <div className="interface__structure">
                <div className="interface__structure-sidebar">
                    <SBNavigation />
                </div>
                <div className="interface__structure-routes">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
