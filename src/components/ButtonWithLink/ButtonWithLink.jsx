import "./ButtonWithLink.scss";

import { Link } from "react-router-dom";

export default function ButtonWithLink({ img, name, link }) {
    return (
        <Link to={link} className="button-link">
            <img className="button-link__img" src={img} alt="" />
            <p className="button-link__name">{name}</p>
        </Link>
    );
}
