import { Request, Response, response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {

    constructor(
        private createUserUseCase: CreateUserUseCase,
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        try {
            await this.createUserUseCase.execute({
                name, email, password
            });

            return response.status(201).send();

        }catch(err){
            return response.status(401).json({
                message: err.message || 'Unexpected error.' 
            });
        }

    }
}
