import { IButtonTextDTO } from "../../interfaces";

function Button({ text }: IButtonTextDTO) {
    return (
        <button
            className="transition-all duration-300 filter-none bg-gradient-to-tr from-orange-600
    to-orange-500 hover:(filter brightness-150 drop-shadow-xl) -sm:(p-5 text-xl rounded-lg) p-4 text-lg rounded-md filter drop-shadow-md"
            type="submit"
        >
            {text}
        </button>
    );
}

export default Button;
