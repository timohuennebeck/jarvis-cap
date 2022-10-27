import "./ButtonElement.scss";

import { Link } from "react-router-dom";

export default function ButtonElement({ link, content, backgroundColor, fontColor, onClick }) {
    return (
        <Link to={link}>
            <button
                onClick={onClick}
                className="button"
                style={{
                    backgroundColor: `${backgroundColor}`,
                    color: `${fontColor}`,
                }}
            >
                {content}
            </button>
        </Link>
    );
}
