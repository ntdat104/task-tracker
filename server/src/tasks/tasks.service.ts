import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Task } from "./models";

@Injectable()
export class TasksService {
  constructor(@InjectModel("Task") private readonly taskModel: Model<Task>) {}

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find();
  }

  async findOne(id: string): Promise<Task> {
    return await this.taskModel.findOne({ _id: id });
  }

  async create(task: Task): Promise<Task> {
    const newTask = new this.taskModel(task);
    return await newTask.save();
  }

  async delete(id: string): Promise<Task> {
    return await this.taskModel.findByIdAndRemove(id);
  }

  async update(id: string, task: Task): Promise<Task> {
    return await this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }
}
