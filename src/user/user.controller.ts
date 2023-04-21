import { Controller, Post, Get, Delete, Put, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
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
            message: 'Create user',
            user: user
        });
    }

    @Put('/updateUser')
    async updateUser(@Res() res, @Body() createUserDTO: CreateUserDTO, @Query('userID') userId){
        const user = await this.userService.updateUser(userId, createUserDTO)
        if (!user) throw new NotFoundException('Usuario no registrado')
        return res.status(HttpStatus.OK).json({
            message: 'User update',
            userDelete: user
        })
    }

    @Delete('/deleteUser')
    async deleteUser(@Res() res, @Query('userID') userId){
        const user = await this.userService.deleteUser(userId)
        if (!user) throw new NotFoundException('Usuario no registrado')
        return res.status(HttpStatus.OK).json({
            message: 'Deleted user',
            userDelete: user
        })
    }

    /* Get users */
    @Get('/getUsers')
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers()
        return res.status(HttpStatus.OK).json({
            message: 'received',
            user: users
        })
    }

    /* Get user for ID */
    @Get('/getUser/:userID')
    async getUser(@Res() res, @Param('userID') userID) {
        const user = await this.userService.getUser(userID)
        if (!user) throw new NotFoundException('Usuario no registrado')
        return res.status(HttpStatus.OK).json({
            message: 'received',
            user: user
        })
    }
}
