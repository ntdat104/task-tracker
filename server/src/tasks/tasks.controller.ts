import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateTaskDto, UpdateTaskDto } from "./dto";
import { Task } from "./models";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<Task> {
    return this.tasksService.delete(id);
  }
}
