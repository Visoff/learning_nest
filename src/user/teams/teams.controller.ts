import { Controller, Get } from '@nestjs/common';

@Controller('user/teams')
export class TeamsController {
    @Get()
    get() {
        return "user teams"
    }
}
