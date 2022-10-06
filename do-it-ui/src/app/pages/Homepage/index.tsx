// node_modules imports
import {useState} from "react";
import Dashboard from "../Dashboard";
import Auth from "../../features/Auth";
// TODO: multilevel sidepanel Dashboard>Settings>Profile
function Homepage(){
    const [isSessionValid, setSessionValid] = useState(false);
    return (
        <>
            {isSessionValid ? <Dashboard /> : <Auth />}
        </>
    )
}

export default Homepage;
