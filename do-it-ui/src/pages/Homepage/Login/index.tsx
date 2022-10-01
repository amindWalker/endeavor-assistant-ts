import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Link from "../../../components/Link";

function Login() {
    return (
        <>
            <Container className="bg-gradient-to-tr from-blue-gray-300 to-blue-gray-100 filter drop-shadow-2xl rounded-xl">
                    <Form className="grid gap-4">
                        <Link
                            href="#"
                            className="text-center mb-8 -mt-4 text-orange-500"
                        >
                            ainda não possui uma conta?
                        </Link>
                        <Input type="text" name="user" placeholder="Usuário" />
                        <Input type="text" name="email" placeholder="Email" />
                        <Button type="submit">Entrar</Button>
                        <Link
                            href="#"
                            className="text-center text-blue-gray-600"
                        >
                            esqueceu sua senha?
                        </Link>
                    </Form>
            </Container>
        </>
    );
}

export default Login;
