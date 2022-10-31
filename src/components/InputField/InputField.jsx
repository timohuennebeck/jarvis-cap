import "./InputField.scss";

export default function InputField({ label, placeholder }) {
    return (
        <div className="input">
            <label className="input__label">{label}</label>
            <input className="input__input" placeholder={placeholder} />
        </div>
    );
}
