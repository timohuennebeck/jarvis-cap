import "./ButtonElement.scss";

import { Link } from "react-router-dom";

function Button({ link, content, backgroundColor, fontColor }) {
    return (
        <Link to={link}>
            <button
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

export default Button;
