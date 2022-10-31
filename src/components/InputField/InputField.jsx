import "./InputField.scss";

export default function InputField({ placeholder }) {
    return (
        <div className="input">
            <label className="input__label">Placeholder</label>
            <input className="input__input" placeholder={placeholder} />
        </div>
    );
}
