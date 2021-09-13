import { Injectable } from "@nestjs/common";
import { Post } from "./models";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class PostsService {
  constructor(@InjectModel("Post") private readonly postModel: Model<Post>) {}

  async findAll(): Promise<Post[]> {
    return await this.postModel.find();
  }

  async findOne(id: string): Promise<Post> {
    return await this.postModel.findOne({ _id: id });
  }

  async create(post: Post): Promise<Post> {
    const newPost = new this.postModel(post);
    return await newPost.save();
  }

  async delete(id: string): Promise<Post> {
    return await this.postModel.findByIdAndRemove(id);
  }

  async update(id: string, post: Post): Promise<Post> {
    return await this.postModel.findByIdAndUpdate(id, post, { new: true });
  }
}
