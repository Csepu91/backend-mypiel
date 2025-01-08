import { Module } from '@nestjs/common';
import { UserExtendService } from './user-extend.service';

@Module({
  providers: [UserExtendService]
})
export class UserExtendModule {}
