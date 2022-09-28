// node_modules imports
import { Repository } from "typeorm";
// local imports
import dataSource from "../database/dataSource";
import User from "../database/models/User";
import { IAuthRequestDTO } from "../interfaces";
import { HashingTools } from "../utils/HashingTools";

class CreateUserService {
    public async run({
        email,
        password,
        username,
    }: IAuthRequestDTO): Promise<User> {
        const userRepository = new Repository(
            User,
            dataSource.createEntityManager()
        );

        const getUsers = await userRepository.findOne({
            where: { email },
        });
        const isUsernameTaken =
            (await getUsers?.username.toString()) === username?.toString();
        const isEmailTaken =
            (await getUsers?.email.toString()) === email.toString();

        if (getUsers?.username && isUsernameTaken) {
            throw Error("Nome de usuário já cadastrado");
        }
        if (getUsers?.email && isEmailTaken) {
            throw Error("Email já cadastrado");
        }
        // Hash generation
        const hash = new HashingTools();
        const hashedPassword = await hash.generateHash(password);
        const newCreatedUser = userRepository.create({
            username,
            email,
            password: hashedPassword,
        });
        await userRepository.save(newCreatedUser);

        return newCreatedUser;
    }
}

export default CreateUserService;
