import "./CompaniesPage.scss";

// components
import CompanyInformation from "../../components/CompanyInformation/CompanyInformation";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import DropdownFieldCompanies from "../../components/DropdownFieldCompanies/DropdownFieldCompanies";

// axios call
import { getCompanies } from "../../utils/api";

// libraries
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import { addNewLead } from "../../utils/api";
import { useRef } from "react";

export default function CompaniesPage() {
    const [companiesData, setCompaniesData] = useState([]);
    const [parsedData, setParsedData] = useState([]);
    const [updateMessage, setUpdateMessage] = useState(false);
    const [updateStatus, setUpdateStatus] = useState([]);
    const [filteredCompanies, setFilteredCompanies] = useState([]);

    const userValues = useRef();

    useEffect(() => {
        getCompanies().then(({ data }) => {
            setCompaniesData(data);
            setFilteredCompanies(data.filter((person) => person.status === "Preparing"));
        });
    }, []);

    const handleChange = (e) => {
        setUpdateStatus({ ...updateStatus, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setFilteredCompanies(
            companiesData.filter((person) => person.status === updateStatus.status)
        );
    }, [updateStatus, updateMessage]);

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
            addNewLead({ addInputData });
            setUpdateMessage(true);
            setTimeout(resetMessage, 1250);
        });
    };

    return (
        <>
            <form className="companies" ref={userValues}>
                <div className="companies__links">
                    <ButtonElement
                        link="/companies/add-new"
                        content="ADD COMPANY"
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
                <div className="companies__dropdown">
                    <DropdownFieldCompanies value={updateStatus.status} onChange={handleChange} />
                    <p className="companies__dropdown-amount">
                        You are viewing {filteredCompanies.length} Companies
                    </p>
                </div>
                {updateMessage && (
                    <p className="companies__update">Companies are being processed...</p>
                )}
                <div className="companies__indv">
                    {filteredCompanies.map((company) => {
                        return (
                            <Link
                                to={`/companies/${company.id}`}
                                className="companies__indv-link"
                                key={company.id}
                            >
                                <CompanyInformation company={company} />
                            </Link>
                        );
                    })}
                </div>
            </form>
        </>
    );
}
