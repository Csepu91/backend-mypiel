import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserExtendController } from './user-extend.controller';
import { UserExtendService } from './user-extend.service';
import { UserExtend, UserExtendSchema } from './schemas/user-extend.schema';
import { UserComunModule } from 'src/user-comun/user-comun.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserExtend.name, schema: UserExtendSchema }]),
    UserComunModule,
  ],

  controllers: [UserExtendController],
  providers: [UserExtendService],
  exports: [UserExtendService],
})
export class UserExtendModule { }