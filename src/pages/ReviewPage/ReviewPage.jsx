import "./ReviewPage.scss";

import LeadInformationMinimized from "../../components/LeadInformationMinimized/LeadInformationMinimized";
import ReviewTextPage from "../ReviewTextPage.jsx/ReviewTextPage";

function ReviewPage() {
    return (
        <article className="review">
            <div className="review__sec">
                <div className="review__sec-leads">
                    <LeadInformationMinimized />
                    <LeadInformationMinimized />
                    <LeadInformationMinimized />
                    <LeadInformationMinimized />
                    <LeadInformationMinimized />
                </div>
                <div className="review__sec-content">
                    <ReviewTextPage />
                </div>
            </div>
        </article>
    );
}

export default ReviewPage;
