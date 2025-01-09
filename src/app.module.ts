import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserComunModule } from './user-comun/user-comun.module';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
import { UserExtendController } from './user-extend/user-extend.controller';
import { UserExtendModule } from './user-extend/user-extend.module';
import { UserProfesionalService } from './user-profesional/user-profesional.service';
import { UserProfesionalModule } from './user-profesional/user-profesional.module';
import { AtencionController } from './atencion/atencion.controller';
import { AtencionModule } from './atencion/atencion.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb+srv://cristobalsepulvedae:Croses098.@clustermypiel.2mmbb.mongodb.net/mypielprueba?retryWrites=true&w=majority&appName=ClusterMyPiel'),
    ProductModule,
    UserComunModule,
    PostModule,
    UserExtendModule,
    UserProfesionalModule,
    AtencionModule,
    AuthModule,
  ],
  controllers: [AppController, UserExtendController, AtencionController],
  providers: [AppService, PostService, UserProfesionalService],
})
export class AppModule { }
