import "./ContactsPage.scss";

// components
import ContactInformation from "../../components/ContactInformation/ContactInformation";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import DropdownField from "../../components/DropdownField/DropdownField";
import kanbanImg from "../../assets/icons/layout-4.svg";

// axios call
import { getContacts } from "../../utils/api";

// libraries
import Papa from "papaparse";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { addNewContact } from "../../utils/api";
import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { getContactsFunnel } from "../../utils/contactsFunnelBackend";

export default function ContactsPage() {
    const [currentUser] = useOutletContext();
    const [contactsData, setContactsData] = useState([]);
    const [parsedData, setParsedData] = useState([]);
    const [updateMessage, setUpdateMessage] = useState(false);
    const [updateStatus, setUpdateStatus] = useState([]);
    const [contactsFunnel, setContactsFunnel] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);

    const userValues = useRef();

    useEffect(() => {
        getContacts().then(({ data }) => {
            setContactsData(data.filter((item) => item.users_id === currentUser.id));
        });
        getContactsFunnel().then(({ data }) => {
            const filteredData = data.filter((item) => item.users_id === currentUser.id);
            setContactsFunnel(filteredData[0].status);
        });
    }, [currentUser]);

    useEffect(() => {
        getContacts().then(({ data }) => {
            setFilteredContacts(
                data.filter(
                    (person) =>
                        person.status === contactsFunnel && person.users_id === currentUser.id
                )
            );
        });
    }, [contactsFunnel, currentUser]);

    const handleChange = (e) => {
        setUpdateStatus({ ...updateStatus, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setFilteredContacts(contactsData.filter((person) => person.status === updateStatus.status));
    }, [updateStatus, contactsData]);

    const resetMessage = () => {
        setUpdateMessage(false);
    };

    const handleSubmit = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                setParsedData(results.data);
            },
        });
    };

    const uploadFile = () => {
        parsedData.map((person) => {
            const addInputData = {
                status: person.status,
                first_name: person.first_name,
                last_name: person.last_name,
                position: person.position,
                email: person.email,
                phone: person.phone,
                image_url: person.image_url,
                linked_in: person.linked_in,
                company: person.company,
                street_name: person.street_name,
                city: person.city,
                state: person.state,
                postcode: person.postcode,
                country: person.country,
                icebreaker: person.icebreaker,
                paragraph_one: person.paragraph_one,
                paragraph_two: person.paragraph_two,
                paragraph_three: person.paragraph_three,
                call_to_action: person.call_to_action,
            };
            addNewContact({ addInputData });
            setUpdateMessage(true);
            setTimeout(resetMessage, 1250);
        });
    };

    return (
        <>
            <form className="contacts" ref={userValues}>
                <div className="contacts__links">
                    <ButtonElement
                        link="/contacts/add-new"
                        content="ADD CONTACT"
                        backgroundColor="#FFF"
                        fontColor="#000"
                    />
                    <ButtonElement
                        onClick={uploadFile}
                        content="UPLOAD CSV"
                        backgroundColor="#000"
                    />
                    <input type="file" name="file" accept=".csv" onChange={handleSubmit} />
                </div>
                <div className="contacts__dropdown">
                    <div className="contacts__dropdown-ctn">
                        <Link to="/contacts-kanban" className="contacts__dropdown-ctn-kanban">
                            <img src={kanbanImg} alt="" />
                        </Link>
                        <div className="contacts__dropdown-ctn-field">
                            <DropdownField onChange={handleChange} />
                        </div>
                    </div>
                    <p className="contacts__dropdown-amount">
                        You are viewing {filteredContacts.length} Contacts
                    </p>
                </div>
                {updateMessage && (
                    <p className="contacts__update">Contacts are being processed...</p>
                )}
                <div className="contacts__indv">
                    {filteredContacts.map((contact) => {
                        return (
                            <Link
                                to={`/contacts/${contact.id}`}
                                className="contacts__indv-link"
                                key={contact.id}
                            >
                                <ContactInformation contact={contact} />
                            </Link>
                        );
                    })}
                </div>
            </form>
        </>
    );
}
