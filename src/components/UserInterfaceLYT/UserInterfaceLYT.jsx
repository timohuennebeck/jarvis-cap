import "./UserInterfaceLYT.scss";
import Header from "../Header/Header";
import SBNavigation from "../SBNavigation/SBNavigation";

import { addNewUser, getUsers } from "../../utils/api";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useEffect } from "react";

export default function UserInterfaceLYT() {
    const [currentUser, setCurrentUser] = useState([]);

    const { user } = useAuth0();

    useEffect(() => {
        getUsers().then(({ data }) => {
            if (!data.some((item) => item.email === user.email)) {
                addNewUser({
                    addInputData: {
                        first_name: user.given_name,
                        last_name: user.family_name,
                        email: user.email,
                        image_url: user.picture,
                        google_sub: user.sub,
                    },
                }).then(() => {
                    getUsers().then(({ data }) => {
                        setCurrentUser(data.filter((person) => person.email === user.email)[0]);
                    });
                });
            } else {
                setCurrentUser(data.filter((person) => person.email === user.email)[0]);
            }
        });
    }, []);

    if (!currentUser) {
        return null;
    }

    return (
        <div className="interface">
            <Header />
            <div className="interface__structure">
                <div className="interface__structure-sidebar">
                    <SBNavigation />
                </div>
                <div className="interface__structure-routes">
                    <Outlet context={[currentUser, setCurrentUser]} />
                </div>
            </div>
        </div>
    );
}
