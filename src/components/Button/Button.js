const Button = ({text, heatingIncrement }) => (
    <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={ heatingIncrement }
    >
        { text }
    </button>
);

export default Button;