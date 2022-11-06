import "./LoginField.scss";

export default function LoginField({ img, placeholder, name, errorMessage, type }) {
    const isError = errorMessage.indexOf(name) > -1;

    return (
        <>
            <div className="login-field">
                <img className="login-field__img" src={img} alt="placholder" />
                <input
                    className="login-field__input"
                    placeholder={placeholder}
                    name={name}
                    type={type}
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
