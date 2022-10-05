// node_modules imports
import { SyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// local imports
import Button from "../../base_components/Button";
import Container from "../../base_components/Container";
import Form from "../../base_components/Form";
import Input from "../../base_components/Input";
import Link from "../../base_components/Link";
import Text from "../../base_components/Text";
import ILoginForm from "../../../../common/interfaces";

const loginFormSchema = yup.object({
    email: yup.string().email().min(6).max(32).required(),
    password: yup.string().min(8).max(32).required()
})

function Login() {
    const [isHide, setIsHide] = useState(true);
    const { register, handleSubmit } = useForm<ILoginForm>({
        resolver: yupResolver(loginFormSchema)
    })

    function handleEyeClick(e: SyntheticEvent) {
        if (e.currentTarget.id === "eye" || "eye-alt") {
            setIsHide(() => !isHide);
        }
    }

    const showPassword = isHide ? (
        <i id="eye" title="Show Password" onClick={handleEyeClick}
            className="transition-all duration-300 absolute gg-eye right-4
            opacity-20 hover:(cursor-pointer opacity-60)"
        />
    ) : (
        <i id="eye-alt" title="Show Password" onClick={handleEyeClick}
            className="transition-all duration-300 absolute gg-eye-alt right-4
            opacity-60 hover:cursor-pointer"
        />
    );

    async function onSubmit(data: ILoginForm) {
        try {
            console.log(data);
            await loginFormSchema.validate(data);
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Container
            className="bg-gradient-to-tr from-blue-gray-300
                to-blue-gray-100 filter drop-shadow-2xl rounded-xl text-center"
        >
            <Text className="text-blue-gray-500 text-md flex justify-center -mt-6 mb-6">
                ENTRE COM SUA CONTA
            </Text>
            <Form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("email")} type="email" placeholder="Email" required />
                <div className="flex items-center">
                    <Input {...register("password")} placeholder="Password" required
                    type={isHide ? "password" : "text"} minLength={8} maxLength={32} />
                    {showPassword}
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
