import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Post("/")
  getHello( @Body() body): string {
    console.log(body)
    return "HelloWorld"
  }
}
