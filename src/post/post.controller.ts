import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Post()
    @ApiOperation({ summary: 'Aplicación del servicio de creación de post' })
    async create(@Body() createPost: CreatePostDto) {
        return this.postService.create(createPost);
    }

}
