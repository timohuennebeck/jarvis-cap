import "./HelpCenterPage.scss";

import CollapsibleElement from "../../components/CollapsibleElement/CollapsibleElement";

import { useState } from "react";

import { getFaqs } from "../../utils/api";
import { useEffect } from "react";

export default function HelpCenterPage() {
    const [faqsData, setFaqsData] = useState([]);

    useEffect(() => {
        getFaqs().then(({ data }) => {
            setFaqsData(data);
        });
    }, []);

    if (!faqsData) {
        return null;
    }

    return (
        <div className="help-center">
            {faqsData.map((item) => {
                return <CollapsibleElement question={item.question} answer={item.answer} />;
            })}
        </div>
    );
}
