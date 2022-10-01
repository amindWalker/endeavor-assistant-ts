import { HTMLAttributes } from "react";

function Container({ children, className }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`transition-all duration-300 bg-blue-gray-300 p-12 ${className}`}>
            {children}
        </div>
    );
}

export default Container;
