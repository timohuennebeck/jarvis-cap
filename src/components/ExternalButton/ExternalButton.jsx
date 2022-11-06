import "./ExternalButton.scss";

export default function ExternalButton({ link, name }) {
    return (
        <div className="external">
            <a className="external__link" href={link} target="_blank">
                {name}
            </a>
        </div>
    );
}
