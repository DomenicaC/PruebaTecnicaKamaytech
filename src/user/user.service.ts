import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateUserDTO } from "./dto/user.dto";
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {

    }

    /* Crear nuevos usuarios */
    async createUser(createUserDTO: CreateUserDTO): Promise<User> {

        const user = new this.userModel(createUserDTO);
        return await user.save()
    }
    /* Actualizar usuarios por ID */
    async updateUser(userID: string, createUserDTO: CreateUserDTO): Promise<User> {

        return await this.userModel.findByIdAndUpdate(userID, createUserDTO, { new: true })

    }
    /* Eliminar usuarios por ID */
    async deleteUser(userID: string): Promise<User> {

        return await this.userModel.findByIdAndDelete(userID)

    }

    /* Listar todos los usuarios */
    async getUsers(): Promise<User[]> {

        return await this.userModel.find().exec()

    }

    /* Listar un solo usuarios por ID  */
    async getUser(userID: string): Promise<User> {

        return await this.userModel.findById(userID)

    }



}
