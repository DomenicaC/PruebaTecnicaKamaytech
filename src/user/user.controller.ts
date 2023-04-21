import { Controller, Post, Get, Delete, Put, Res, HttpStatus, Body } from '@nestjs/common';
import { createUserDTO } from './dto/user.dto';


@Controller('user')
export class UserController {


    /* Create user */
    @Post('/create')
    createUserPost(@Res() res, @Body() createUserDTO: createUserDTO) {

        console.log("User received ", createUserDTO);


        /* Post Status*/
        res.status(HttpStatus.OK).json({
            message: 'received'
        });
    }
}
