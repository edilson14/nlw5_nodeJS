import { Request, Response } from 'express';
import { User } from '../models/User';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {

    async handle(request: Request, response: Response) {
        const { name, email, admin } = request.body;
        const createUserService: CreateUserService = new CreateUserService();
        const user: User = await createUserService.execute({ name, email, admin });
        return response.json(user);
    }
}

export { CreateUserController };