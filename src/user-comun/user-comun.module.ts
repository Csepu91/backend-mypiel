import { Module } from '@nestjs/common';
import { UserComunController } from './user-comun.controller';
import { UserComunService } from './user-comun.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserComun, UserComunSchema } from './schemas/user-comun.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserComun.name, schema: UserComunSchema }
    ])
  ],
  controllers: [UserComunController],
  providers: [UserComunService]
})

export class UserComunModule { }
