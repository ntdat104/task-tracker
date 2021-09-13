import { Controller, Get, Post } from "@nestjs/common";

@Controller("user")
export class UserController {
  @Get()
  findAll(): string {
    return "Get all users";
  }

  @Post()
  create(): string {
    return "abc";
  }
}
