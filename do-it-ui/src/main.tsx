// node_modules import
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "virtual:windi.css";
// local imports
import App from "./app/App";
import { store } from "./app/redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
