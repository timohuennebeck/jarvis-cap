import "./ExternalButton.scss";

export default function ExternalButton({ link, name, download }) {
    return (
        <div className="external">
            <a className="external__link" href={link} target="_blank" download={download}>
                {name}
            </a>
        </div>
    );
}
