// node_modules imports
import fs from "fs";
import path from "path";
import { Repository } from "typeorm";
import dataSource from "../database/dataSource";
import User from "../database/models/User";
// local imports
import { IUploadRequestDTO } from "../interfaces";
import FileUploader from "../utils/FileUploader";

class UploadService {
    public async run({ filename, user_id }: IUploadRequestDTO): Promise<User> {
        const userRepository = new Repository(
            User,
            dataSource.createEntityManager()
        );
        const getUser = await userRepository.findOne({
            where: { id: user_id }
        });
        if (!getUser) {
            throw new Error(
                "Sem permissão: você precisa estar logado para fazer alterações"
            );
        }

        if (getUser.profile_image) {
            const userProfileImage = path.join(
                FileUploader.directory,
                getUser.profile_image
            );
            const isProfileImageCollision = await fs.promises.stat(
                userProfileImage
            );
            if (isProfileImageCollision) {
                await fs.promises.unlink(userProfileImage);
            }
        }
        getUser.profile_image = filename;
        await userRepository.save(getUser);

        return getUser;
    }
}

export default UploadService;
