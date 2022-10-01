import { useState } from "react";
import Container from "../../../components/Container";
import Login from "../Login";
import SignUp from "../SignUp";

function Auth() {
    const [isSignUpClicked, setRegistered] = useState(true);
    return <>{isSignUpClicked ? <SignUp /> : <Login />}</>;
}

export default Auth;
