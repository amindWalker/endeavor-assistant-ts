import Login from "./components/Login";

function App() {
    return (
        <>
        <div className="base grid lg:grid-cols-3 transition-all duration-300
        bg-gradient-to-tr from-blue-gray-500 to-blue-gray-300 h-screen w-screen place-items-center">
            <div className="lg:col-start-2 w-max">
                <Login />
            </div>
        </div>
        </>
    );
}

export default App;
