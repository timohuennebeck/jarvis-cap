import "./InputFieldError.scss";

export default function InputFieldError({
    label,
    placeholder,
    name,
    value,
    onChange,
    errorMessage,
}) {
    const isError = errorMessage.indexOf(name) > -1;

    return (
        <>
            <div className="input">
                <label className="input__label">{label}</label>
                <input
                    className="input__input"
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
            {isError && (
                <div className="error">
                    <p className="error__sign">!</p>
                    <p className="error__message">This field is required</p>
                </div>
            )}
        </>
    );
}
