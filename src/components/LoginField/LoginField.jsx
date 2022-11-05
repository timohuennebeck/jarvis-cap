import "./LoginField.scss";

export default function LoginField({ img, placeholder, type }) {
    return (
        <div className="login-field">
            <img className="login-field__img" src={img} alt="placholder" />
            <input className="login-field__input" placeholder={placeholder} type={type} />
        </div>
    );
}
