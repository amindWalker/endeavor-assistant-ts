// node_moddules imports

// local imports
import { useAppSelector } from "../../redux/hooks";
import Login from "./Login";
import SignUp from "./SignUp";

function Auth() {
    // get the global shared state for authentication
    const isSignUpClicked = useAppSelector(state => state.signup.value);

    return (
        <>
            <div className={`transition-all duration-200 transform-gpu
                ease-linear ${isSignUpClicked ? "rotate-y-180" : "rotate-y-0"}`}>
                {isSignUpClicked ? <SignUp /> : <Login />}
            </div>
        </>
    );
}

export default Auth;
