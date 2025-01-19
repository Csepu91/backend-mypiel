import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './schema/post.schema';
import { PostService } from './post.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Post.name, schema: PostSchema },
    ]),
  ],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService, MongooseModule],
})
export class PostModule { }
