import "./DashboardPage.scss";

import targetImg from "../../assets/icons/collapse-alt2.svg";
import calendarImg from "../../assets/icons/calendar-month.svg";
import tagImg from "../../assets/icons/price-tag.svg";
import usersImg from "../../assets/icons/users.svg";
import applicationsImg from "../../assets/icons/add-note.svg";
import rejectionsImg from "../../assets/icons/briefcase.svg";

import { getLeads } from "../../utils/api";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useEffect } from "react";

export default function DashboardPage() {
    const [leadsData, setLeadsData] = useState([]);

    const { user } = useAuth0();

    useEffect(() => {
        getLeads().then(({ data }) => {
            setLeadsData(data);
        });
    }, []);

    if (!leadsData) {
        return null;
    }

    return (
        <div className="dashboard">
            <div className="dashboard__ctn">
                <div className="dashboard__ctn-targets">
                    <div className="dashboard__ctn-targets-title">
                        <img src={targetImg} alt="" />
                        <div className="dashboard__ctn-targets-title-content">
                            <p className="dashboard__ctn-targets-title-content-name">
                                Target Title
                            </p>
                            <input
                                className="dashboard__ctn-targets-title-content-input"
                                placeholder="Insert Desired Position"
                            />
                        </div>
                    </div>
                    <div className="dashboard__ctn-targets-title">
                        <img src={calendarImg} alt="" />
                        <div className="dashboard__ctn-targets-title-content">
                            <p className="dashboard__ctn-targets-title-content-name">Target Date</p>
                            <input
                                className="dashboard__ctn-targets-title-content-input"
                                placeholder="Insert Due Date"
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
                            />
                        </div>
                    </div>
                </div>
                <div className="dashboard__ctn-main">
                    <h2>Welcome back, {user.given_name}! 👊</h2>
                    <p>
                        Here are a couple of resources to get things off the ground. Have some
                        feedback for us? Please, reach out to us at hello@timohuennebeck.com
                    </p>
                </div>
                <iframe
                    className="dashboard__ctn-video"
                    width="100%"
                    height="500rem"
                    src="https://i.imgur.com/kgUbW0v.mp4"
                ></iframe>
                <div className="dashboard__ctn-stats">
                    <div className="dashboard__ctn-stats-title">
                        <img src={usersImg} alt="" />
                        <div className="dashboard__ctn-stats-title-content">
                            <p className="dashboard__ctn-stats-title-content-name">
                                Potential Connections
                            </p>
                            <div className="dashboard__ctn-stats-title-content-div">
                                <p>451</p>
                                <p className="dashboard__ctn-stats-title-content-div-color">10,2%</p>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard__ctn-stats-title">
                        <img src={applicationsImg} alt="" />
                        <div className="dashboard__ctn-stats-title-content">
                            <p className="dashboard__ctn-stats-title-content-name">Applications</p>
                            <div className="dashboard__ctn-stats-title-content-div">
                                <p>251</p>
                                <p className="dashboard__ctn-stats-title-content-div-color">8,2%</p>
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
                                <p>52</p>
                                <p className="dashboard__ctn-stats-title-content-div-color">1,2%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard__stats">
                <div className="dashboard__stats-leads">
                    <p className="dashboard__stats-leads-header">Funnel - Leads</p>
                    <div className="dashboard__stats-leads-indv">
                        <div className="dashboard__stats-leads-indv-name">
                            <p>In Progress</p>
                            <p>
                                {
                                    leadsData.filter((person) => person.status === "In Progress")
                                        .length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-leads-indv-name">
                            <p>CL Approved</p>
                            <p>
                                {
                                    leadsData.filter((person) => person.status === "CL Approved")
                                        .length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-leads-indv-name">
                            <p>CL Declined</p>
                            <p>
                                {
                                    leadsData.filter((person) => person.status === "CL Declined")
                                        .length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-leads-indv-name">
                            <p>Awaiting Response</p>
                            <p>
                                {
                                    leadsData.filter(
                                        (person) => person.status === "Awaiting Response"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-leads-indv-name">
                            <p>Interview Scheduled</p>
                            <p>
                                {
                                    leadsData.filter(
                                        (person) => person.status === "Interview Scheduled"
                                    ).length
                                }
                            </p>
                        </div>
                        <div className="dashboard__stats-leads-indv-name">
                            <p>Rejected</p>
                            <p>
                                {leadsData.filter((person) => person.status === "Rejected").length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="dashboard__stats-networking">
                    <p className="dashboard__stats-networking-header">Funnel - Networking</p>
                    <div className="dashboard__stats-networking-indv">
                        <div className="dashboard__stats-networking-indv-name">
                            <p>To Be Contacted</p>
                            <p>5</p>
                        </div>
                        <div className="dashboard__stats-networking-indv-name">
                            <p>Awaiting Response</p>
                            <p>5</p>
                        </div>
                        <div className="dashboard__stats-networking-indv-name">
                            <p>Thank You Message</p>
                            <p>5</p>
                        </div>
                        <div className="dashboard__stats-networking-indv-name">
                            <p>Follow Up Needed</p>
                            <p>5</p>
                        </div>
                        <div className="dashboard__stats-networking-indv-name">
                            <p>144 Hours > Engage</p>
                            <p>5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
