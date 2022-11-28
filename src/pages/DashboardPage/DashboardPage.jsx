import "./DashboardPage.scss";

import targetImg from "../../assets/icons/collapse-alt2.svg";
import calendarImg from "../../assets/icons/calendar-month.svg";
import tagImg from "../../assets/icons/price-tag.svg";

export default function DashboardPage() {
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
                <div className="dashboard__ctn-main"></div>
            </div>
            <div className="dashboard__stats">
                <div className="dashboard__stats-leads">
                    <p className="dashboard__stats-leads-header">Funnel - Leads</p>
                    <div className="dashboard__stats-leads-indv">
                        <div className="dashboard__stats-leads-indv-name">
                            <p>In Progress</p>
                            <p>5</p>
                        </div>
                        <div className="dashboard__stats-leads-indv-name">
                            <p>CL Approved</p>
                            <p>5</p>
                        </div>
                        <div className="dashboard__stats-leads-indv-name">
                            <p>CL Declined</p>
                            <p>5</p>
                        </div>
                        <div className="dashboard__stats-leads-indv-name">
                            <p>Awaiting Response</p>
                            <p>5</p>
                        </div>
                        <div className="dashboard__stats-leads-indv-name">
                            <p>Interview Scheduled</p>
                            <p>5</p>
                        </div>
                        <div className="dashboard__stats-leads-indv-name">
                            <p>Rejected</p>
                            <p>5</p>
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
