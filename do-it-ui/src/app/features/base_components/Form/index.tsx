import { FormHTMLAttributes } from "react";

function Form({
    className,
    children,
    ...rest
}: FormHTMLAttributes<HTMLFormElement>) {
    return (
        <form {...rest} className={`filter drop-shadow-md ${className}`}>
            {children}
        </form>
    );
}

export default Form;
