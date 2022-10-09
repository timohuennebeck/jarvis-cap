import "./Button.scss";

function Button({ name, backgroundColor, fontColor }) {
    return (
        <button
            className="button"
            style={{
                backgroundColor: `${backgroundColor}`,
                color: `${fontColor}`,
            }}
        >
            {name}
        </button>
    );
}

export default Button;
