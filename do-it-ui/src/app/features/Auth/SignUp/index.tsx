// node_modules imports
import { useState, SyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// local imports
import { ISignUpForm } from "../../../../common/interfaces";
import Button from "../../base_components/Button";
import Container from "../../base_components/Container";
import Form from "../../base_components/Form";
import Input from "../../base_components/Input";
import Link from "../../base_components/Link";
import Text from "../../base_components/Text";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { switchToLogin, switchToSignUp } from "../loginSignUpStateSlice";

const signUpSchema = yup.object({
    email: yup.string().email().min(6).max(32).required(),
    password: yup.string().min(8).max(32).required(),
    username: yup.string().min(3).max(32).required()
}).required();

function SignUp() {
    const [isHide, setIsHide] = useState(true);
    const { register, handleSubmit } = useForm<ISignUpForm>({
        resolver: yupResolver(signUpSchema)
    });

    // SignUp or Login state
    const isSignUpClicked = useAppSelector(state => state.signup.value);
    const dispatch = useAppDispatch();
    function handleSignUpClick() {
        dispatch(!isSignUpClicked ? switchToSignUp() : switchToLogin())
    }

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

    async function onSubmit(data: ISignUpForm) {
        try {
            console.log(data)
            await signUpSchema.validate(data);
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Container
            className="-rotate-y-180 bg-gradient-to-tr from-blue-gray-300
                to-blue-gray-100 filter drop-shadow-2xl rounded-xl text-center transform-gpu rotate-y-0"
        >
            <Text className="text-blue-gray-500 text-md flex justify-center -mb-2">
                CADASTRE UMA CONTA
            </Text>

            <hr className="border border-blue-gray-300 my-6"/>

            <Form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-4"
            >
                <Input
                    {...register("email")}
                    type="email"
                    minLength={3}
                    maxLength={24}
                    placeholder="Email"
                    required
                />
                <div className="flex items-center">
                    <Input
                        {...register("password")}
                        type={isHide ? "password" : "text"}
                        placeholder="Password"
                        required
                        minLength={8}
                        maxLength={24}
                    />
                    {showPassword}
                </div>
                <Input
                    {...register("username")}
                    placeholder="Apelido"
                    required
                />
                <Button type="submit">Cadastrar</Button>

                <hr className="border border-blue-gray-300"/>

                <Link
                    className="text-center text-orange-600 underline"
                    onClick={handleSignUpClick}
                >
                    voltar para a tela de login
                </Link>
            </Form>
        </Container>
    );
}

export default SignUp;
