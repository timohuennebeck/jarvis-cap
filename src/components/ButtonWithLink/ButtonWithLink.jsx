import "./ButtonWithLink.scss";

import { Link } from "react-router-dom";

export default function ButtonWithLink({ onClick, img, name, link }) {
    return (
        <Link onClick={onClick} to={link} className="button-link">
            <img className="button-link__img" src={img} alt="" />
            <p className="button-link__name">{name}</p>
        </Link>
    );
}
