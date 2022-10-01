import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Link from "../../../components/Link";
import Text from "../../../components/Text";

function SignUp() {
    return (
        <Container
            className="bg-gradient-to-tr from-blue-gray-300
                to-blue-gray-100 filter drop-shadow-2xl rounded-xl text-center"
        >
            <Text className="text-blue-gray-400 text-lg flex justify-center -mt-6 mb-6">
                CADASTRO
            </Text>
            <Form className="grid gap-4">
                <Input type="text" name="email" placeholder="Email" />
                <Input type="text" name="password" placeholder="Password" />
                <Input type="text" name="username" placeholder="Apelido" />
                <Button type="submit">Cadastrar</Button>
                <Link
                    href="#"
                    className="text-center mt-8 text-orange-500 underline"
                >
                    voltar para o login
                </Link>
            </Form>
        </Container>
    );
}

export default SignUp;
