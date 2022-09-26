import { Repository } from "typeorm";
import dataSource from "../database/dataSource";
import User from "../database/models/User";
import { IAuthRequestDTO } from "../interfaces";

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
        const isUserTaken =
            (await getUsers?.email.toString()) === email.toString();

        if (isUserTaken) {
            throw Error("Nome de usuário já usado")
        }

        const newUser = userRepository.create({
            username,
            email,
            password
        })
        await userRepository.save(newUser);

        return newUser;
    }
}

export default CreateUserService;
