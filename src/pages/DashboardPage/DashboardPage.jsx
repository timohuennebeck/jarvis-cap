import "./DashboardPage.scss";

import targetImg from "../../assets/icons/collapse-alt2.svg";
import calendarImg from "../../assets/icons/calendar-month.svg";
import tagImg from "../../assets/icons/price-tag.svg";
import usersImg from "../../assets/icons/users.svg";
import applicationsImg from "../../assets/icons/add-note.svg";
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
import { getCompaniesFunnel } from "../../utils/companiesFunnelBackend";

import { useState } from "react";
import { useEffect } from "react";
import { getContactsFunnel } from "../../utils/contactsFunnelBackend";
import DashboardFunnels from "../../components/DashboardFunnels/DashboardFunnels";

export default function DashboardPage() {
    const [currentUser, setCurrentUser] = useOutletContext();
    const [contactsData, setContactsData] = useState([]);
    const [contactsFunnelData, setContactsFunnelData] = useState([]);

    const [companiesData, setCompaniesData] = useState([]);
    const [companiesFunnelData, setFunnelCompaniesData] = useState([]);

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
        getContactsFunnel().then(({ data }) => {
            setContactsFunnelData(filterUser(data));
        });
        getCompaniesFunnel().then(({ data }) => {
            setFunnelCompaniesData(filterUser(data));
        });
    }, [currentUser]);

    const handleChange = (e) => {
        updateUser({
            userInput: currentUser,
        });
        setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
    };

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
                    title="demo"
                    className="dashboard__ctn-video"
                    width="100%"
                    height="500rem"
                    src="https://www.loom.com/embed/4edc34eb6a634d698ed1601e63d3d911"
                    frameBorder="0"
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
                                        ((currentMonthDates.length - lastMonthDates.length) / 1) *
                                        100
                                    }%`}
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
                        {contactsFunnelData.map((item) => {
                            return (
                                <DashboardFunnels key={item.id} data={item} value={contactsData} />
                            );
                        })}
                    </div>
                </div>
                <div className="dashboard__stats-networking">
                    <p className="dashboard__stats-networking-header">Funnel - Companies</p>
                    <div className="dashboard__stats-networking-indv">
                        {companiesFunnelData.map((item) => {
                            return (
                                <DashboardFunnels key={item.id} data={item} value={companiesData} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
