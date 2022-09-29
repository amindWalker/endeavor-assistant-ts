// node_modules imports
import { Repository } from "typeorm";
// local imports
import dataSource from "../database/dataSource";
import User from "../database/models/User";
import { IAuthRequestDTO, IUserTokenDTO } from "../interfaces";
import errorCatcher from "../middlewares/errorCatcher";
import { HashingTools } from "../utils/HashingTools";

class AuthUserService {
    public async run({
        email,
        password,
    }: IAuthRequestDTO): Promise<IUserTokenDTO> {
        const getRepository = new Repository(
            User,
            dataSource.createEntityManager()
        );
        const getUser = await getRepository.findOne({
            where: { email },
        });
        if (!getUser) {
            throw new errorCatcher("Credenciais inválidas", 401);
        }
        // Hash validation
        const hash = new HashingTools();
        const isPasswordValid = await hash.validateHash(
            password,
            getUser.password
        );
        if (!isPasswordValid) {
            throw new errorCatcher("Credenciais inválidas", 401);
        }
        // Session validation
        const payload = {};
        const token = await hash.signToken(payload, getUser.id);

        return { user: getUser, token };
    }
}

export default AuthUserService;
