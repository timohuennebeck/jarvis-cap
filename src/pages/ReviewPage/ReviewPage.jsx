import "./ReviewPage.scss";

import LeadInformationMinimized from "../../components/LeadInformationMinimized/LeadInformationMinimized";
import ReviewTextPage from "../ReviewTextPage/ReviewTextPage";

import { getLeadsInProgress } from "../../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ReviewPage() {
    const [leadData, setLeadData] = useState(null);
    const [updateData, setUpdateData] = useState(false);

    useEffect(() => {
        getLeadsInProgress().then((resp) => {
            setLeadData(resp.data);
        });
    }, [updateData]);

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
                <ReviewTextPage leadData={leadData} setUpdateData={setUpdateData} />
            </div>
        </article>
    );
}

export default ReviewPage;
