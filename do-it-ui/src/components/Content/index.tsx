import Button from "../Button";

function Content() {
    return (
        <>
            <div className="content place-items-center filter drop-shadow-md text-shadow">
                <form className="grid gap-4">
                    <a
                        className="mb-4 -mt-6 text-center transition-all duration-300 text-orange-400 hover:(filter brightness-50 drop-shadow-md)"
                        href="#"
                    >
                        ainda não possui uma conta?
                    </a>
                    <input
                        className="row-span-1 -sm:(text-lg p-4 rounded-lg) p-3 rounded-md"
                        type="text"
                        name="name"
                        placeholder="Usuário"
                    />
                    <input
                        className="row-span-1 -sm:(text-lg p-4 rounded-lg) p-3 rounded-md"
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <Button text="Entrar" />
                    <a
                        className="-mt-2 transition-all duration-300 text-center text-blue-gray-500 hover:(filter brightness-50 drop-shadow-md)"
                        href="#"
                    >
                        esqueceu sua senha?
                    </a>
                </form>
            </div>
        </>
    );
}

export default Content;
