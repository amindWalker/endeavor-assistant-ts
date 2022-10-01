// node_modules imports
import {useState} from "react";
import Dashboard from "../Dashboard";
import Auth from "./Auth";

function Homepage(){
    const [isSessionValid, setSessionValid] = useState(false);
    return (
        <>
            {isSessionValid ? <Dashboard /> : <Auth />}
        </>
    )
}

export default Homepage;
