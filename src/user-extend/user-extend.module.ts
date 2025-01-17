import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserExtendController } from './user-extend.controller';
import { UserExtendService } from './user-extend.service';
import { UserExtend, UserExtendSchema } from './schemas/user-extend.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserExtend.name, schema: UserExtendSchema }])
  ],
  controllers: [UserExtendController],
  providers: [UserExtendService],
})
export class UserExtendModule { }