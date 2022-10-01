import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Link from "../../../components/Link";
import Text from "../../../components/Text";

function Login() {
    return (
        <Container
            className="bg-gradient-to-tr from-blue-gray-300
                to-blue-gray-100 filter drop-shadow-2xl rounded-xl text-center"
        >
            <Text className="text-blue-gray-400 text-lg flex justify-center -mt-6 mb-6">
                LOGUE-SE PARA COMEÇAR
            </Text>
            <Form className="grid gap-4">
                <Input type="text" name="email" placeholder="Email" />
                <div className="flex items-center">
                    <Input type="text" name="password" placeholder="Password" />
                    <i
                        className="
                        transition-all duration-300 absolute gg-eye right-4
                        text-gray-300 hover:(text-gray-600 cursor-pointer) focus:bg-light-600"
                    />
                </div>
                <Button type="submit">Entrar</Button>
                <Link href="#" className="text-center text-blue-gray-600">
                    esqueceu sua senha?
                </Link>
                <Link
                    href="#"
                    className="text-center mt-8 text-orange-500 underline"
                >
                    ainda não possui uma conta?
                </Link>
            </Form>
        </Container>
    );
}

export default Login;
