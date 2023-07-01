import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Post()
    GetUser( @Body() body ) {
        return body.name
    }
}
