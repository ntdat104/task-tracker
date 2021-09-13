import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MONGO_URL } from "configs";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostsModule } from "./posts/posts.module";
import { TasksModule } from "./tasks/tasks.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [PostsModule, UserModule, MongooseModule.forRoot(MONGO_URL), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
