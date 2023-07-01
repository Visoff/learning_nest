import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user/user.controller';
import { TeamsController } from './user/teams/teams.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, TeamsController],
  providers: [],
})
export class AppModule {}
