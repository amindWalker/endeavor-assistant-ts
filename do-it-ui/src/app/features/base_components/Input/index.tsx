import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";

const Input = forwardRef(function (
    { className, id, children, ...rest }: InputHTMLAttributes<HTMLInputElement>,
    reactRef
) {
    return (
        <div className="flex items-center">
            <label htmlFor={id}>{children}</label>
            <input
                type="text"
                placeholder="Placeholder"
                className={`transition-all duration-300 filter-none hover:(filter drop-shadow ring)
                focus:ring row-span-1 -sm:(text-lg p-4 rounded-lg) p-3 rounded-md ${className}`}
                ref={reactRef as LegacyRef<HTMLInputElement>}
                {...rest}
            />
        </div>
    );
});

export default Input;
