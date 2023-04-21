import { Controller, Post, Get, Delete, Put, Res, HttpStatus, Body } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { UserService } from "./user.service";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';


@Controller('user')
export class UserController {

    constructor(private userService: UserService, @InjectModel("User") private readonly userModel: Model<User>) { }


    /* Create user */
    @Post('/create')
    async createUserPost(@Res() res, @Body() createUserDTO: CreateUserDTO) {

        const user = await this.userService.createUser(createUserDTO)

        /* Post Status*/
        return res.status(HttpStatus.OK).json({
            message: 'received',
            user: user
        });
    }

    @Get('/listar')
    async  listar(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}
