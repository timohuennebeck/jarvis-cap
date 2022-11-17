import "./ReviewPage.scss";

import LeadInformationMinimized from "../../components/LeadInformationMinimized/LeadInformationMinimized";
import ReviewTextPage from "../ReviewTextPage/ReviewTextPage";

import { getLeads } from "../../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ReviewPage() {
    const [leadData, setLeadData] = useState([]);

    const refreshLeads = () => {
        getLeads().then(({ data }) => {
            setLeadData(data.filter((person) => person.status === "In Progress"));
        });
    };

    useEffect(() => {
        getLeads().then(({ data }) => {
            setLeadData(data.filter((person) => person.status === "In Progress"));
        });
    }, []);

    if (!leadData) {
        return <p>Loading...</p>;
    }

    return (
        <article className="review">
            <div className="review__leads">
                {leadData.map((lead) => {
                    return (
                        <Link
                            to={`/review/${lead.id}`}
                            className="review__leads-link"
                            key={lead.id}
                        >
                            <LeadInformationMinimized lead={lead} />
                        </Link>
                    );
                })}
            </div>
            <div className="review__content">
                <ReviewTextPage refreshLeads={refreshLeads} />
            </div>
        </article>
    );
}

export default ReviewPage;
