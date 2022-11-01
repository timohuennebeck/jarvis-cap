import "./ReviewPage.scss";

import LeadInformationMinimized from "../../components/LeadInformationMinimized/LeadInformationMinimized";
import ReviewTextPage from "../ReviewTextPage/ReviewTextPage";

import { getLeads, getLeadsProgress } from "../../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ReviewPage() {
    const [leadData, setLeadData] = useState(null);

    useEffect(() => {
        getLeadsProgress().then((resp) => {
            setLeadData(resp.data);
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
                        <Link to={`/review/${lead.id}`} className="review__leads-link">
                            <LeadInformationMinimized lead={lead} />
                        </Link>
                    );
                })}
            </div>
            <div className="review__content">
                <ReviewTextPage />
            </div>
        </article>
    );
}

export default ReviewPage;
