import { ButtonHTMLAttributes } from "react";

function Button({
    className,
    children,
    ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            type="button"
            className={`transition-all duration-300 text-white filter-none bg-gradient-to-tr
            from-orange-600 to-orange-500 focus:ring hover:(filter brightness-150 drop-shadow-xl)
            -sm:(p-5 text-xl rounded-lg) p-4 text-lg rounded-md filter drop-shadow-md ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;
