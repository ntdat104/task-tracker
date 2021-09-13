import * as Type from "./models";
import { Body, Controller, Delete, Get, Param, Put, Post } from "@nestjs/common";
import { CreatePostDto } from "./dto";
import { PostsService } from "./posts.service";

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): Promise<Type.Post[]> {
    return this.postsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Type.Post> {
    return this.postsService.findOne(id);
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto): Promise<Type.Post> {
    return this.postsService.create(createPostDto);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updatePostDto: CreatePostDto): Promise<Type.Post> {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<Type.Post> {
    return this.postsService.delete(id);
  }
}
