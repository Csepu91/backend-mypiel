import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb+srv://cristobalsepulvedae:Croses098.@clustermypiel.2mmbb.mongodb.net/mypielprueba?retryWrites=true&w=majority&appName=ClusterMyPiel'),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
