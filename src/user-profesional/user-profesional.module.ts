import { Module } from '@nestjs/common';
import { UserProfesionalController } from './user-profesional.controller';

@Module({
  controllers: [UserProfesionalController]
})
export class UserProfesionalModule {}
