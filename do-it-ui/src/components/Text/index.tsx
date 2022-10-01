import { DialogHTMLAttributes } from "react";

function Text({
    className,
    children,
    ...rest
}: DialogHTMLAttributes<HTMLParagraphElement>) {
    return (
        <span
        {...rest}
            className={`transition-all duration-300 filter drop-shadow-sm ${className}`}>
            {children}
        </span>
    );
}

export default Text;
