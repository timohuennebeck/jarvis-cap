import "./Button.scss";

function Button({ content, backgroundColor, fontColor }) {
    return (
        <button
            className="button"
            style={{
                backgroundColor: `${backgroundColor}`,
                color: `${fontColor}`,
            }}
        >
            {content}
        </button>
    );
}

export default Button;
