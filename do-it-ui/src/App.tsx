import { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <SignIn />
        </>
    );
}

export default App;
