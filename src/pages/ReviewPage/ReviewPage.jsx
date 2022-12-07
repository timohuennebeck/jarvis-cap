import "./ReviewPage.scss";

import ContactInformationMinimized from "../../components/ContactInformationMinimized/ContactInformationMinimized";
import ReviewTextPage from "../ReviewTextPage/ReviewTextPage";

import { getContacts } from "../../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function ReviewPage() {
    const [currentUser] = useOutletContext();
    const [contactsData, setContactsData] = useState([]);

    const refreshContacts = () => {
        getContacts().then(({ data }) => {
            setContactsData(
                data.filter(
                    (person) =>
                        person.status === "To Be Contacted" && person.users_id === currentUser.id
                )
            );
        });
    };

    useEffect(() => {
        getContacts().then(({ data }) => {
            setContactsData(
                data.filter(
                    (person) =>
                        person.status === "To Be Contacted" && person.users_id === currentUser.id
                )
            );
        });
    }, [currentUser]);

    if (!contactsData) {
        return null;
    }

    return (
        <article className="review">
            <div className="review__contacts">
                {contactsData.map((contacts) => {
                    return (
                        <Link
                            to={`/review/${contacts.id}`}
                            className="review__contacts-link"
                            key={contacts.id}
                        >
                            <ContactInformationMinimized contacts={contacts} />
                        </Link>
                    );
                })}
            </div>
            <div className="review__content">
                <ReviewTextPage refreshContacts={refreshContacts} />
            </div>
        </article>
    );
}

export default ReviewPage;
