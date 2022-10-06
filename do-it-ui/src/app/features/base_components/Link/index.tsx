import { AnchorHTMLAttributes } from "react";

function Link({
    className,
    children,
    ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a
            className={`
            transition-all duration-300 text-blue-500 filter brightness-100 drop-shadow-sm
                hover:(cursor-pointer filter brightness-150) ${className}`}
            {...rest}
        >
            {children}
        </a>
    );
}

export default Link;
