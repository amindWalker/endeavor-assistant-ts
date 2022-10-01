import Container from "./components/Container";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import Login from "./pages/Homepage/Login";

function App() {
    return (
        <Container
            className={`grid lg:grid-cols-3 place-items-center bg-gradient-to-tr
                    from-blue-gray-500 to-blue-gray-300 h-screen w-screen`}
        >
            <Container className="lg:(col-start-2 p-0) w-max rounded-xl">
                <Homepage />
            </Container>
        </Container>
    );
}

export default App;
