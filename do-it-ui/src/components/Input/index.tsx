import { InputHTMLAttributes } from "react";

function Input({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            type="text"
            placeholder="Placeholder"
            className={`transition-all duration-300 filter-none hover:(filter drop-shadow ring)
            focus:ring row-span-1 -sm:(text-lg p-4 rounded-lg) p-3 rounded-md ${className}`}
            {...rest}
        />
    );
}

export default Input;
