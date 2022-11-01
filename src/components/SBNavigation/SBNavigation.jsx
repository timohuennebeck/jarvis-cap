import "./SBNavigation.scss";
import { getUsers } from "../../utils/api";

// components
import ButtonElement from "../ButtonElement/ButtonElement";
import { useEffect } from "react";
import { useState } from "react";

function NavList() {
    const [userData, setUserData] = useState();

    useEffect(() => {
        getUsers().then((resp) => {
            setUserData(resp.data[0]);
        });
    }, []);

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="nav-list">
            <div className="nav-list__link">
                <ButtonElement
                    content="LEADS"
                    link="/leads"
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
            <div className="nav-list__link">
                <ButtonElement
                    content="TEMPLATES"
                    link="/templates"
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
            <div className="nav-list__link">
                <ButtonElement
                    content="REVIEW"
                    link={`/review/${userData.id}`}
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
            <div className="nav-list__link">
                <ButtonElement
                    content="SETTINGS"
                    link={`/settings/${userData.id}`}
                    backgroundColor="#FFFFFF"
                    fontColor="#000000"
                />
            </div>
        </div>
    );
}

export default NavList;
