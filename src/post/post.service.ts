import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schema/post.schema';
import { Model } from 'mongoose';
import { CreatePostDto } from './dtos/create-post.dto';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) { }

    async create(createPostDto: CreatePostDto): Promise<Post> {
        const createdPost = new this.postModel(createPostDto);
        return createdPost.save();
    }
}
