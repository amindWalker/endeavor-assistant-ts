import { PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren) {
    return (
        <div className="
        container bg-gradient-to-tr from-blue-gray-300 to-blue-gray-100
        p-12 rounded-xl">
            {children}
        </div>
    );
}

export default Container;
