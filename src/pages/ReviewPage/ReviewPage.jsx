import "./ReviewPage.scss";

import LeadInformationMinimized from "../../components/LeadInformationMinimized/LeadInformationMinimized";
import ReviewTextPage from "../ReviewTextPage/ReviewTextPage";

import { getLeads } from "../../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function ReviewPage() {
    const [currentUser] = useOutletContext();
    const [leadsData, setLeadsData] = useState([]);

    const refreshLeads = () => {
        getLeads().then(({ data }) => {
            setLeadsData(
                data.filter(
                    (person) =>
                        person.status === "In Progress" && person.users_id === currentUser.id
                )
            );
        });
    };

    useEffect(() => {
        getLeads().then(({ data }) => {
            setLeadsData(
                data.filter(
                    (person) =>
                        person.status === "In Progress" && person.users_id === currentUser.id
                )
            );
        });
    }, [currentUser]);

    if (!leadsData) {
        return null;
    }

    return (
        <article className="review">
            <div className="review__leads">
                {leadsData.map((lead) => {
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
