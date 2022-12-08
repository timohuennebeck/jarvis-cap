import "./DashboardPage.scss";

import targetImg from "../../assets/icons/collapse-alt2.svg";
import calendarImg from "../../assets/icons/calendar-month.svg";
import tagImg from "../../assets/icons/price-tag.svg";
import usersImg from "../../assets/icons/users.svg";
import applicationsImg from "../../assets/icons/add-note.svg";
import rejectionsImg from "../../assets/icons/briefcase.svg";
import { useOutletContext } from "react-router-dom";
import { useRef } from "react";

import {
    getCompanies,
    getContacts,
    getLastMonthCompanies,
    getLastMonthContacts,
    getThisMonthCompanies,
    getThisMonthContacts,
    updateUser,
} from "../../utils/api";
import { useState } from "react";
import { useEffect } from "react";

export default function DashboardPage() {
    const [currentUser, setCurrentUser] = useOutletContext();
    const [contactsData, setContactsData] = useState([]);
    const [companiesData, setCompaniesData] = useState([]);
    const [currentMonthContacts, setCurrentMonthContacts] = useState([]);
    const [currentMonthDates, setCurrentMonthDates] = useState([]);
    const [lastMonthContacts, setLastMonthContacts] = useState([]);
    const [lastMonthDates, setLastMonthDates] = useState([]);

    const userValues = useRef();

    const filterUser = (data) => {
        return data.filter((item) => item.users_id === currentUser.id);
    };

    useEffect(() => {
        getContacts().then(({ data }) => {
            setContactsData(filterUser(data));
        });
        getCompanies().then(({ data }) => {
            setCompaniesData(filterUser(data));
        });
        getThisMonthContacts().then(({ data }) => {
            setCurrentMonthContacts(filterUser(data));
        });
        getThisMonthCompanies().then(({ data }) => {
            setCurrentMonthDates(filterUser(data));
        });
        getLastMonthContacts().then(({ data }) => {
            setLastMonthContacts(filterUser(data));
        });
        getLastMonthCompanies().then(({ data }) => {
            setLastMonthDates(filterUser(data));
        });
    }, [currentUser]);

    const handleChange = (e) => {
        updateUser({
            userInput: currentUser,
        });
        setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
    };

    const rejectionsThisMonth = currentMonthDates.filter((item) => item.status === "Rejected");
    const rejectionsLastMonth = lastMonthDates.filter((item) => item.status === "Rejected");
    const rejectionsChange = ((rejectionsThisMonth.length - rejectionsLastMonth.length) / 1) * 100;

    if (!contactsData) {
        return null;
    }

    return (
        <div className="dashboard">
            <div className="dashboard__ctn">
                <form className="dashboard__ctn-targets" ref={userValues}>
                    <div className="dashboard__ctn-targets-title">
                        <img src={targetImg} alt="" />
                        <div className="dashboard__ctn-targets-title-content">
                            <p className="dashboard__ctn-targets-title-content-name">
                                Target Title
                            </p>
                            <input
                                className="dashboard__ctn-targets-title-content-input"
                                placeholder="Insert Desired Position"
                                name="target_title"
                                value={currentUser.target_title}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="dashboard__ctn-targets-title">
                        <img src={calendarImg} alt="" />
                        <div className="dashboard__ctn-targets-title-content">
                            <p className="dashboard__ctn-targets-title-content-name">Target Date</p>
                            <input
                                className="dashboard__ctn-targets-title-content-input"
                                name="target_date"
                                value={currentUser.target_date}
                                placeholder="Insert Due Date"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="dashboard__ctn-targets-title">
                        <img src={tagImg} alt="" />
                        <div className="dashboard__ctn-targets-title-content">
                            <p className="dashboard__ctn-targets-title-content-name">
                                Target Income
                            </p>
                            <input
                                className="dashboard__ctn-targets-title-content-input"
                                placeholder="Insert Desired Income"
                                name="target_income"
                                value={currentUser.target_income}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </form>
                <div className="dashboard__ctn-main">
                    <h2>Welcome back, {currentUser.first_name}! 👊</h2>
                    <p>
                        Here are a couple of resources to get things off the ground. Have some
                        feedback for us? Please, reach out to us at hello@timohuennebeck.com
                    </p>
                </div>
                <iframe
                    className="dashboard__ctn-video"
                    width="100%"
                    height="525rem"
                    src="https://www.youtube.com/embed/V3WkgVpv1Zk"
                ></iframe>
                <div className="dashboard__ctn-stats">
                    <div className="dashboard__ctn-stats-title">
                        <img src={usersImg} alt="" />
                        <div className="dashboard__ctn-stats-title-content">
                            <p className="dashboard__ctn-stats-title-content-name">
                                Potential Connections
                            </p>
                            <div className="dashboard__ctn-stats-title-content-div">
                                <p>
                                    {currentMonthContacts.length === 0
                                        ? 0
                                        : currentMonthContacts.length}
                                </p>
                                <p className="dashboard__ctn-stats-title-content-div-color">
                                    {`${
                                        ((currentMonthContacts.length - lastMonthContacts.length) /
                                            1) *
                                        100
                                    }%`}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard__ctn-stats-title">
                        <img src={applicationsImg} alt="" />
                        <div className="dashboard__ctn-stats-title-content">
                            <p className="dashboard__ctn-stats-title-content-name">Applications</p>
                            <div className="dashboard__ctn-stats-title-content-div">
                                <p>{currentMonthDates.length}</p>
                                <p className="dashboard__ctn-stats-title-content-div-color">
                                    {`${
                                        ((currentMonthDates.length - lastMonthDates.length) /
                                            1) *
                                        100
                                    }%`}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard__ctn-stats-title">
                        <img src={rejectionsImg} alt="" />
                        <div className="dashboard__ctn-stats-title-content">
                            <p className="dashboard__ctn-stats-title-content-name">
                                Rejections Received
                            </p>
                            <div className="dashboard__ctn-stats-title-content-div">
                                <p>
                                    {rejectionsThisMonth.length === 0
                                        ? 0
                                        : rejectionsThisMonth.length}
                                </p>
                                <p
                                    className={
                                        rejectionsChange > 0
                                            ? "dashboard__ctn-stats-title-content-div-color negative"
                                            : "dashboard__ctn-stats-title-content-div-color"
                                    }
                                >
                                    {`${rejectionsChange}%`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard__stats">
                <div className="dashboard__stats-contacts">
                    <p className="dashboard__stats-contacts-header">Funnel - Contacts</p>
                    <div className="dashboard__stats-contacts-indv">
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>To Be Contacted</p>
                            <p>
                                {
                                    contactsData.filter(
                                        (person) => person.status === "To Be Contacted"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>LinkedIn CR Accepted</p>
                            <p>
                                {
                                    contactsData.filter(
                                        (person) => person.status === "LinkedIn CR Accepted"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>Awaiting Response</p>
                            <p>
                                {
                                    contactsData.filter(
                                        (person) => person.status === "Awaiting Response"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>Followed Up [Pre-Conversation]</p>
                            <p>
                                {
                                    contactsData.filter(
                                        (person) =>
                                            person.status === "Followed Up [Pre-Conversation]"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>Coffee Conversation Scheduled</p>
                            <p>
                                {
                                    contactsData.filter(
                                        (person) =>
                                            person.status === "Coffee Conversation Scheduled"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>Followed Up [Post-Conversation]</p>
                            <p>
                                {
                                    contactsData.filter(
                                        (person) =>
                                            person.status === "Followed Up [Post-Conversation]"
                                    ).length
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="dashboard__stats-networking">
                    <p className="dashboard__stats-networking-header">Funnel - Companies</p>
                    <div className="dashboard__stats-networking-indv">
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>Preparing</p>
                            <p>
                                {
                                    companiesData.filter((person) => person.status === "Preparing")
                                        .length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>Messaged Recruiter</p>
                            <p>
                                {
                                    companiesData.filter(
                                        (person) => person.status === "Messaged Recruiter"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>VC Conversation Scheduled</p>
                            <p>
                                {
                                    companiesData.filter(
                                        (person) => person.status === "VC Conversation Scheduled"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>Preparing Documents</p>
                            <p>
                                {
                                    companiesData.filter(
                                        (person) => person.status === "Preparing Documents"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>Followed Up [Pre-Interview]</p>
                            <p>
                                {
                                    companiesData.filter(
                                        (person) => person.status === "Followed Up [Pre-Interview]"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>Interview Scheduled</p>
                            <p>
                                {
                                    companiesData.filter(
                                        (person) => person.status === "Interview Scheduled"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>Interview Finished</p>
                            <p>
                                {
                                    companiesData.filter(
                                        (person) => person.status === "Interview Finished"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>Followed Up [Post-Interview]</p>
                            <p>
                                {
                                    companiesData.filter(
                                        (person) => person.status === "Followed Up [Post-Interview]"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>Negotiating</p>
                            <p>
                                {
                                    companiesData.filter(
                                        (person) => person.status === "Negotiating"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-contacts-indv-name">
                            <p>Rejected</p>
                            <p>
                                {
                                    companiesData.filter((person) => person.status === "Rejected")
                                        .length
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
