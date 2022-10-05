import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function Auth() {
    const [isSignUpClicked, setSignUpClicked] = useState(false);
    return <>{isSignUpClicked ? <SignUp /> : <Login />}</>;
}

export default Auth;
