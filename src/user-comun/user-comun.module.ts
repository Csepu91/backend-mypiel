import { Module } from '@nestjs/common';
import { UserComunController } from './user-comun.controller';
import { UserComunService } from './user-comun.service';

@Module({
  controllers: [UserComunController],
  providers: [UserComunService]
})
export class UserComunModule {}
