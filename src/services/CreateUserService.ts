import { getCustomRepository } from 'typeorm';
import { Usersrepositores } from "../repositories/UserRepositorie";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest) {
        const userRepository = getCustomRepository(Usersrepositores);

        if (!email)
            throw new Error('Email Obrigatorio!')

        const userAlreadyExists = await userRepository.findOne({
            email
        });
        if (userAlreadyExists)
            throw new Error('Email já cadastrado!')

        const user = userRepository.create({
            name,
            email,
            admin
        });

        await userRepository.save(user);

        return user;
    }
}

export { CreateUserService };