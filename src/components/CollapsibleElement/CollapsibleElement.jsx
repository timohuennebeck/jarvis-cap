import "./CollapsibleElement.scss";

import arrowRight from "../../assets/icons/chevron-right.svg";
import arrowDown from "../../assets/icons/chevron-down.svg";

import { useState } from "react";

export default function CollapsibleElement({ question, answer }) {
    const [open, setOpen] = useState();

    const toggle = () => {
        setOpen(!open);
    };
    return (
        <div className="collapsible">
            {open ? (
                <div className="collapsible__question" onClick={toggle}>
                    <img src={arrowDown} alt="" />
                    <p>{question}</p>
                </div>
            ) : (
                <div className="collapsible__question" onClick={toggle}>
                    <img src={arrowRight} alt="" />
                    <p>{question}</p>
                </div>
            )}
            {open && <p className="collapsible__answer">{answer}</p>}
        </div>
    );
}
