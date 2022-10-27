import "./ReviewPage.scss";

import LeadInformationMinimized from "../../components/LeadInformationMinimized/LeadInformationMinimized";
import ReviewTextPage from "../ReviewTextPage.jsx/ReviewTextPage";

function ReviewPage() {
    return (
        <article className="review">
            <div className="review__leads">
                <LeadInformationMinimized />
                <LeadInformationMinimized />
                <LeadInformationMinimized />
                <LeadInformationMinimized />
                <LeadInformationMinimized />
            </div>
            <div className="review__content">
                <ReviewTextPage />
            </div>
        </article>
    );
}

export default ReviewPage;
